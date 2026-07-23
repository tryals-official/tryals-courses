# Question Format

The Tryals course format is a single JSON file per course. This document describes the schema.

## Course

```json
{
  "courseId": "physics-i",
  "title": "Physics I",
  "description": "A rigorous physics course covering...",
  "category": "STEM",
  "units": [ ... ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `courseId` | string | Unique identifier (kebab-case) |
| `title` | string | Display name |
| `description` | string | One-sentence summary |
| `category` | string | `STEM`, `HUMANITIES`, or `SOCIAL_SCIENCES` |
| `units` | array | Ordered list of units |

## Unit

```json
{
  "unitNumber": 1,
  "title": "Calculus of a Single Variable",
  "lessons": [ ... ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `unitNumber` | integer | 1-indexed position |
| `title` | string | Unit title |
| `lessons` | array | Ordered list of lessons |

## Lesson

```json
{
  "title": "Functions, domains, and representations",
  "explanations": [ ... ],
  "questions": [ ... ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Lesson title |
| `explanations` | array | Explanatory content shown before questions |
| `questions` | array | Practice questions for this lesson |

## Explanation

```json
{
  "id": "u01-l01-e1",
  "text": "## Functions, Domains, and Representations\n\nA **function** assigns exactly one output..."
}
```

The `text` field is Markdown with LaTeX math. Inline math uses `$...$`, display math uses `$$...$$`.

## Question

Every question has at minimum:

```json
{
  "id": "phys1_u01_l01_q03",
  "type": "numerical_input",
  "question": "Evaluate $f(4)$ where $f(x) = 3x - 7$."
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `type` | string | Question type key (see [Question Types](question-types.md)) |
| `question` | string | The prompt shown to the student (Markdown with LaTeX) |
| `hints` | array of strings | Optional progressive hints |
| `explanation` | string | Shown after answering (Markdown with LaTeX) |

The remaining fields depend on the question type. See the [Question Types](question-types.md) catalog and the `samples/` directories for real examples.

## Examples by type

### numerical_input

```json
{
  "type": "numerical_input",
  "question": "Evaluate $f(4)$ where $f(x) = 3x - 7$.",
  "correctAnswer": 5,
  "tolerance": 0.01,
  "explanation": "$f(4) = 3(4) - 7 = 12 - 7 = 5$."
}
```

### multiple_choice

```json
{
  "type": "multiple_choice",
  "question": "What is the derivative of $\\sin(x)$?",
  "options": ["$\\cos(x)$", "$-\\cos(x)$", "$\\sin(x)$", "$-\\sin(x)$"],
  "correctAnswerIndex": 0,
  "explanation": "The derivative of $\\sin(x)$ is $\\cos(x)$."
}
```

### matching

```json
{
  "type": "matching",
  "question": "Match each function representation to its form.",
  "pairs": [
    { "left": "$y = 3x + 2$", "right": "Explicit formula" },
    { "left": "$x^{2} + y^{2} = 9$", "right": "Implicit equation" },
    { "left": "{(1,2),(2,4),(3,6)}", "right": "Set of ordered pairs" }
  ]
}
```

### multi_select

Indices in `correctAnswers` are 0-based positions in the `options` array.

```json
{
  "type": "multi_select",
  "question": "Which are properties of odd functions?",
  "options": [
    "$f(-x) = -f(x)$",
    "Graph is symmetric about the origin",
    "$f(0) = 0$ whenever 0 is in the domain",
    "Graph is symmetric about the y-axis"
  ],
  "correctAnswers": [0, 1, 2]
}
```

### category_sort

```json
{
  "type": "category_sort",
  "question": "Categorize these relations.",
  "categories": ["Is a Function", "Not a Function"],
  "items": [
    { "label": "$y = x^{2}$", "correctCategory": "Is a Function" },
    { "label": "$x = y^{2}$", "correctCategory": "Not a Function" }
  ]
}
```

### ordering

```json
{
  "type": "ordering",
  "question": "Arrange these steps in order.",
  "items": ["Step A", "Step B", "Step C"],
  "correctOrder": [0, 1, 2]
}
```

For the full list of 70+ question types and their fields, see [Question Types](question-types.md). For real examples, browse the `samples/` directories inside each course.
