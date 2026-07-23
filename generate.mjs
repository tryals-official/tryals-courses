#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const COURSES_DIR = path.resolve('../ui-repo/app/assets/courses');
const OUT_DIR = path.resolve('courses');

const COURSE_FILES = [
  'physics-i.json',
  'mathematics-i.json',
  'computer-science-i.json',
  'psychology-i.json',
  'history-i.json',
  'business-i.json',
];

const QUESTIONS_PER_LESSON = 3;

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function pickQuestions(questions) {
  if (!questions || questions.length === 0) return [];
  const textTypes = ['multiple_choice', 'multi_select', 'true_false', 'numerical_input',
    'fill_blank', 'matching', 'ordering', 'category_sort', 'error_highlight',
    'code_snippet', 'data_analysis', 'crossword'];
  const good = questions.filter(q => {
    const t = q.type;
    if (textTypes.includes(t)) return true;
    if (q.prompt || q.question) return true;
    return false;
  });
  const pool = good.length > 0 ? good : questions;
  const picked = [];
  const step = Math.max(1, Math.floor(pool.length / QUESTIONS_PER_LESSON));
  for (let i = 0; i < pool.length && picked.length < QUESTIONS_PER_LESSON; i += step) {
    picked.push(pool[i]);
  }
  return picked;
}

function formatQuestion(q, idx) {
  const text = q.prompt || q.question || '';
  if (!text) return null;
  const clean = text.replace(/\*\*$/, '').trim();
  let typeBadge = q.type.replace(/_/g, ' ');
  typeBadge = typeBadge.charAt(0).toUpperCase() + typeBadge.slice(1);
  let md = `**${idx}.** *(${typeBadge})* ${clean}`;
  if (q.type === 'multiple_choice' && q.options) {
    md += '\n';
    q.options.forEach((o, i) => {
      const label = String.fromCharCode(65 + i);
      const optText = typeof o === 'string' ? o : (o.text || o.label || o.value || '');
      if (optText) md += `   - ${label}) ${optText}\n`;
    });
  }
  if (q.type === 'multi_select' && q.options) {
    md += '\n';
    q.options.forEach((o) => {
      const optText = typeof o === 'string' ? o : (o.text || o.label || o.value || '');
      if (optText) md += `   - [ ] ${optText}\n`;
    });
  }
  if (q.type === 'true_false') {
    md += '\n   - True / False\n';
  }
  return md;
}

function generateCourse(filename) {
  const raw = fs.readFileSync(path.join(COURSES_DIR, filename), 'utf8');
  const course = JSON.parse(raw);
  const { courseId, title, category, units } = course;
  const description = (course.description || '').replace(/first-year\s*/gi, '');
  const slug = slugify(title);
  const courseDir = path.join(OUT_DIR, slug);
  fs.mkdirSync(courseDir, { recursive: true });

  let totalLessons = 0;
  let totalQuestions = 0;
  units.forEach(u => {
    totalLessons += u.lessons.length;
    u.lessons.forEach(l => { totalQuestions += (l.questions || []).length; });
  });

  const unitRows = units.map(u => {
    const uSlug = `unit-${String(u.unitNumber).padStart(2, '0')}-${slugify(u.title)}`;
    return `| ${String(u.unitNumber).padStart(2, '0')} | [${u.title}](${uSlug}.md) |`;
  });

  const courseReadme = `# ${title}

> ${description}

**[Study this course interactively on Tryals →](https://tryals.app)**

## Units

| # | Unit |
|---|------|
${unitRows.join('\n')}

---

*Part of [Open University Courses by Tryals](../../README.md)*
`;
  fs.writeFileSync(path.join(courseDir, 'README.md'), courseReadme);

  for (const unit of units) {
    const uNum = String(unit.unitNumber).padStart(2, '0');
    const uSlug = `unit-${uNum}-${slugify(unit.title)}`;
    let md = `# Unit ${unit.unitNumber}: ${unit.title}\n\n`;

    for (const lesson of unit.lessons) {
      md += `## ${lesson.title}\n\n`;

      if (lesson.explanations && lesson.explanations.length > 0) {
        for (const expl of lesson.explanations) {
          if (expl.text) {
            let text = expl.text;
            if (text.startsWith('## ')) {
              text = text.replace(/^## [^\n]+\n*/, '');
            }
            md += text.trim() + '\n\n';
          }
        }
      }

      const sampleQs = pickQuestions(lesson.questions);
      if (sampleQs.length > 0) {
        md += `> **Practice preview** — try all ${(lesson.questions || []).length} questions interactively on [Tryals](https://tryals.app)\n\n`;
        sampleQs.forEach((q, i) => {
          const formatted = formatQuestion(q, i + 1);
          if (formatted) md += formatted + '\n\n';
        });
      }

      md += '---\n\n';
    }

    md += `*Part of [${title}](README.md) — [Open University Courses by Tryals](../../README.md)*\n`;
    fs.writeFileSync(path.join(courseDir, `${uSlug}.md`), md);
  }

  console.log(`  ${title}: ${units.length} units, ${totalLessons} lessons, ${totalQuestions} questions`);
  return { slug, title, category, units: units.length, lessons: totalLessons, questions: totalQuestions };
}

// Clean old courses
if (fs.existsSync(OUT_DIR)) {
  fs.readdirSync(OUT_DIR).forEach(d => {
    const full = path.join(OUT_DIR, d);
    if (fs.statSync(full).isDirectory()) {
      fs.rmSync(full, { recursive: true });
    }
  });
}

console.log('Generating courses...');
const results = COURSE_FILES.map(f => generateCourse(f));

const totalL = results.reduce((s, r) => s + r.lessons, 0);
const totalQ = results.reduce((s, r) => s + r.questions, 0);

const catLabel = { STEM: 'STEM', HUMANITIES: 'Humanities', SOCIAL_SCIENCES: 'Social Sciences' };

const tableRows = results.map(r =>
  `| [${r.title}](courses/${r.slug}/) | ${catLabel[r.category] || r.category} |`
);

const readme = `# Open University Courses by Tryals

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](LICENSE)
![Courses](https://img.shields.io/badge/courses-${results.length}-blue)
![Questions](https://img.shields.io/badge/questions-${totalQ}-orange)

Free, open-source educational content for university students.
Covers STEM, humanities, and social sciences.

**[Try the interactive learning experience on Tryals →](https://tryals.app)**

## Courses

| Course | Category |
|--------|----------|
${tableRows.join('\n')}

## What's inside

Each unit file contains:
- **Explanatory lessons** — clear, concise text with LaTeX mathematics (renders natively on GitHub)
- **Practice previews** — sample questions from each lesson showing the variety of interactive formats (${results.length > 50 ? '75+' : '70+'} question types including numerical input, code analysis, matching, ordering, data analysis, crosswords, and more)

## What Tryals adds

The open-source content here is the foundation. On [tryals.app](https://tryals.app) you get:
- **All ${totalQ.toLocaleString()} practice questions** with instant grading and feedback
- **Interactive visual scenes** — drag, manipulate, and explore concepts (not just read about them)
- **Progress tracking** across courses
- **Community features** — study groups, shared notes, discussion

## How to use this content

- **Self-study:** Read the markdown files directly on GitHub — LaTeX renders natively
- **Reference:** Use the unit files as a study companion alongside your university courses
- **Teaching:** Adapt the material for your own courses (with attribution, per the license)
- **Contributing:** Found an error? PRs welcome — see [CONTRIBUTING.md](CONTRIBUTING.md)

## License

This work is licensed under [CC BY-SA 4.0](LICENSE) — use freely with attribution.
`;

fs.writeFileSync('README.md', readme);
console.log(`\nDone: ${results.length} courses, ${totalL} lessons, ${totalQ} questions`);
