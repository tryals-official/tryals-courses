# Question Types

Tryals supports 70+ interactive question types. This document shows the JSON format for each type found in the sample data.

For the overall course/unit/lesson structure, see [Question Format](question-format.md).

## Table of Contents

### General

- [`multiple_choice`](#multiple-choice) — Single correct answer from a list of options
- [`multi_select`](#multi-select) — Multiple correct options (student selects all that apply)
- [`true_false`](#true-false) — Boolean question
- [`numerical_input`](#numerical-input) — Student types a number
- [`cloze_bank`](#cloze-bank) — Fill multiple blanks from a shared word bank
- [`matching`](#matching) — Drag to match left items with right items
- [`ordering`](#ordering) — Arrange items in the correct sequence
- [`matrix_grid`](#matrix-grid) — One choice per row in a grid/table
- [`slider_estimate`](#slider-estimate) — Estimate a value using a slider
- [`number_line_placement`](#number-line-placement) — Place one or more markers on a number line at target values
- [`error_highlight`](#error-highlight) — Identify incorrect tokens in a passage
- [`table_completion`](#table-completion) — Fill missing cells (marked `___`) in a table
- [`category_sort`](#category-sort) — Drag items into the correct category bucket
- [`pattern_sequence`](#pattern-sequence) — Complete missing elements in a sequence
- [`timeline_ordering`](#timeline-ordering) — Order historical events chronologically
- [`word_search`](#word-search) — Find hidden words in a letter grid
- [`crossword`](#crossword) — Fill crossword answers from clues
- [`annotation_text`](#annotation-text) — Select spans of text and assign labels from `availableLabels`
- [`memory_pairs`](#memory-pairs) — Memory card game — find matching pairs
- [`formula_builder`](#formula-builder) — Build a formula by arranging tokens in `correctOrder`
- [`unit_conversion`](#unit-conversion) — Convert between units using given conversion factors
- [`venn_diagram`](#venn-diagram) — Sort items into Venn diagram regions: A-only, B-only, both, or neither

### STEM

- [`code_snippet`](#code-snippet) — Fill in blanks in a code template
- [`periodic_table`](#periodic-table) — Select elements on a periodic table matching `selectionCriteria`
- [`data_analysis`](#data-analysis) — Compute statistics (mean, median, sum, etc
- [`number_base`](#number-base) — Convert a number from `sourceBase` to `targetBase`
- [`truth_table`](#truth-table) — Fill in the output column of a logic truth table for the given `expression`
- [`flow_chart`](#flow-chart) — Fill blank nodes in an algorithm flowchart
- [`logic_gate`](#logic-gate) — Determine the outputs of a logic gate circuit
- [`balance_scale`](#balance-scale) — Select items to place on a scale to match `targetWeight`
- [`probability_spinner`](#probability-spinner) — Adjust pie-chart sections to match target probabilities
- [`grid_path`](#grid-path) — Navigate a grid maze from `start` to `end`, avoiding `obstacles`
- [`resistor_color`](#resistor-color) — Select the correct color bands for a given resistance value
- [`thermometer_reading`](#thermometer-reading) — Set a thermometer slider to the target temperature
- [`function_graph`](#function-graph) — Adjust function parameters to match a target curve
- [`graph_identification`](#graph-identification) — Choose the correct graph from options

### Interactive Scenes

- [`interactive_scene`](#interactive-scene) — Custom visual scene — manipulate objects to find the answer

---

## General

### `multiple_choice`

Single correct answer from a list of options.

```json
{
  "type": "multiple_choice",
  "question": "A function satisfies $f(2) = 5$, but $\\lim_{x\\to 2} f(x) = 3$. What does the graph look like near $x = 2$?",
  "options": [
    "The curve heads toward height 3, with a lone dot placed at height 5",
    "The curve heads toward height 5, with a hole at height 3",
    "The curve jumps from 3 up to 5 as $x$ crosses 2",
    "Impossible — the limit must equal the value"
  ],
  "correctAnswer": 0,
  "hints": [
    "The limit reports where the curve is **heading**; the value reports where the point was **placed**. They are independent pieces of data.",
    "Approach from both sides along the curve — you drift toward 3. The definition $f(2)=5$ just parks a dot elsewhere."
  ],
  "explanation": "This is a removable discontinuity: the curve funnels toward 3, but someone stuck the actual point at 5. Continuity is precisely the demand that these two — the heading and the landing — agree."
}
```

**Key fields:** `options`, `correctAnswer`, `hints`, `explanation`

---

### `multi_select`

Multiple correct options (student selects all that apply). `correctAnswers` uses 0-based indices.

```json
{
  "type": "multi_select",
  "question": "Which are properties of odd functions?",
  "options": [
    "$f(-x) = -f(x)$",
    "Graph is symmetric about the origin",
    "$f(0)$ = 0 whenever 0 is in the domain",
    "Graph is symmetric about the y-axis"
  ],
  "correctAnswers": [
    0,
    1,
    2
  ],
  "explanation": "Symmetry about the y-axis defines even functions, not odd."
}
```

**Key fields:** `options`, `correctAnswers`, `explanation`

---

### `true_false`

Boolean question. `correctAnswer` is `true` or `false`.

```json
{
  "type": "true_false",
  "question": "$\\int_a^a f(x) dx$ = 0 for any continuous function f.",
  "correctAnswer": "True",
  "explanation": "A definite integral over a degenerate interval [a, a] has zero width and hence zero area."
}
```

**Key fields:** `correctAnswer`, `explanation`

---

### `numerical_input`

Student types a number. Graded within `tolerance` of `correctAnswer`.

```json
{
  "type": "numerical_input",
  "question": "Evaluate $f(4)$ where $f(x) = 3x - 7$.",
  "correctAnswer": 5,
  "tolerance": 0.01,
  "explanation": "$f(4) = 3(4) - 7 = 12 - 7 = 5$."
}
```

**Key fields:** `correctAnswer`, `tolerance`, `explanation`

---

### `cloze_bank`

Fill multiple blanks from a shared word bank. `segments` alternate between text and blanks.

```json
{
  "type": "cloze_bank",
  "question": "Complete the statement with the correct term.",
  "segments": [
    "By the chain rule, $d/dx[\\sin(x^{2})] = \\cos(x^{2}) \\cdot$ ",
    "."
  ],
  "wordBank": [
    "k",
    "w",
    "m",
    "2x"
  ],
  "correctAnswers": [
    3
  ],
  "explanation": "Let $u = x^{2}$. Then $d/dx[\\sin(u)]$ = $\\cos(u)$·$u' = \\cos(x^{2})\\cdot2x$."
}
```

**Key fields:** `segments`, `wordBank`, `correctAnswers`, `explanation`

---

### `matching`

Drag to match left items with right items. All pairs must be correct.

```json
{
  "type": "matching",
  "question": "Match each function representation to its form.",
  "pairs": [
    {
      "left": "$y = 3x + 2$",
      "right": "Explicit formula"
    },
    {
      "left": "$x^{2}$ + $y^{2}$ = 9",
      "right": "Implicit equation"
    },
    {
      "left": "{(1,2),(2,4),(3,6)}",
      "right": "Set of ordered pairs"
    },
    {
      "left": "t↦(cos t, sin t)",
      "right": "Parametric form"
    }
  ],
  "explanation": "Functions can be represented in multiple equivalent ways."
}
```

**Key fields:** `pairs`, `explanation`

---

### `ordering`

Arrange items in the correct sequence. `correctOrder` uses 0-based indices.

```json
{
  "type": "ordering",
  "question": "A farmer has 100 m of fence for a rectangular pen against a river (no fence needed on the river side). Order the optimization workflow.",
  "items": [
    "Name variables: width $x$, length $y$, area $A = xy$",
    "Encode the constraint: $2x + y = 100$",
    "Substitute to get one variable: $A(x) = x(100 - 2x)$",
    "Set $A'(x) = 100 - 4x = 0$, giving $x = 25$",
    "Confirm it is a maximum and report $25 \\times 50$ m"
  ],
  "correctOrder": [
    0,
    1,
    2,
    3,
    4
  ],
  "hints": [
    "Optimization is a pipeline: model → constraint → single-variable function → critical point → verify.",
    "The constraint is what lets you eliminate $y$ — without it, \"maximize area\" has no answer."
  ],
  "explanation": "Every optimization problem walks these same five steps; only the story changes. Note the punchline $y = 2x$: the free river side lets the pen stretch twice as long as it is deep."
}
```

**Key fields:** `items`, `correctOrder`, `hints`, `explanation`

---

### `matrix_grid`

One choice per row in a grid/table. `correctMapping` maps row IDs to column IDs.

```json
{
  "type": "matrix_grid",
  "question": "Classify each function by its parity.",
  "rows": [
    {
      "id": "r1",
      "label": "$f(x)$ = $x^{2}$"
    },
    {
      "id": "r2",
      "label": "$f(x)$ = $x^{3}$"
    },
    {
      "id": "r3",
      "label": "$f(x)$ = $x^{2}$ + x"
    }
  ],
  "columns": [
    {
      "id": "c1",
      "label": "Even"
    },
    {
      "id": "c2",
      "label": "Odd"
    },
    {
      "id": "c3",
      "label": "Neither"
    }
  ],
  "correctMapping": {
    "r1": "c1",
    "r2": "c2",
    "r3": "c3"
  },
  "explanation": "$x^{2}$ is even; $x^{3}$ is odd; $x^{2}$+x is neither (not symmetric about y-axis or origin)."
}
```

**Key fields:** `rows`, `columns`, `correctMapping`, `explanation`

---

### `slider_estimate`

Estimate a value using a slider. Graded within `tolerance`.

```json
{
  "type": "slider_estimate",
  "question": "Numerically explore $\\dfrac{\\sin x}{x}$ as $x \\to 0$ (radians): compute it mentally for small $x$, then set the slider to the limit.",
  "min": 0,
  "max": 2,
  "targetValue": 1,
  "tolerance": 0.1,
  "minLabel": "0",
  "maxLabel": "2",
  "hints": [
    "Try $x = 0.1$: $\\sin(0.1) \\approx 0.0998$. Divide.",
    "For tiny angles, the arc and its sine are nearly the same length — so their ratio approaches…"
  ],
  "explanation": "The ratio squeezes to exactly 1: for small angles, $\\sin x \\approx x$. This limit is the seed of all trigonometric calculus — the derivative of sine at 0 — and the reason pendulum formulas work for small swings."
}
```

**Key fields:** `min`, `max`, `targetValue`, `tolerance`, `minLabel`, `maxLabel`, `hints`, `explanation`

---

### `number_line_placement`

Place one or more markers on a number line at target values.

```json
{
  "type": "number_line_placement",
  "question": "The function $f(x) = \\dfrac{1}{x-2}$ is defined for every real number except one. **Place the marker on the excluded value.**",
  "min": -3,
  "max": 7,
  "step": 1,
  "tolerance": 0.25,
  "markers": [
    {
      "id": "m1",
      "label": "Excluded from domain",
      "targetValue": 2
    }
  ],
  "hints": [
    "A fraction breaks down exactly where its denominator becomes zero.",
    "Solve $x - 2 = 0$."
  ],
  "explanation": "At $x = 2$ the denominator vanishes and the value $1/0$ is undefined — a single puncture in an otherwise complete number line. Domains are about finding exactly these forbidden points."
}
```

**Key fields:** `min`, `max`, `step`, `tolerance`, `markers`, `hints`, `explanation`

---

### `error_highlight`

Identify incorrect tokens in a passage. `incorrectTokenIds` lists which tokens are wrong.

```json
{
  "type": "error_highlight",
  "question": "Highlight the incorrect statement regarding the domain of $f(x) = \\sqrt{x - 3}$.",
  "tokens": [
    {
      "id": "t1",
      "text": "Identify the expression under the radical. "
    },
    {
      "id": "t2",
      "text": "Require the radicand to be non-negative: x − $3 \\geq 0$. "
    },
    {
      "id": "t3",
      "text": "Solve the inequality to get $x \\geq 3$. "
    },
    {
      "id": "t4",
      "text": "Conclude that the domain includes all real numbers less than 3."
    }
  ],
  "incorrectTokenIds": [
    "t4"
  ],
  "explanation": "The domain is [3, $\\infty), which means all real numbers greater than or equal to 3$."
}
```

**Key fields:** `tokens`, `incorrectTokenIds`, `explanation`

---

### `table_completion`

Fill missing cells (marked `___`) in a table.

```json
{
  "type": "table_completion",
  "question": "A = {1, 2, 3} and B = {3, 4}. Complete the table of set operations.",
  "rows": [
    [
      {
        "content": "A union B"
      },
      {
        "content": "{1, 2, 3, 4}"
      }
    ],
    [
      {
        "content": "A intersect B"
      },
      {
        "content": "___"
      }
    ],
    [
      {
        "content": "A minus B"
      },
      {
        "content": "___"
      }
    ]
  ],
  "headers": [
    "Operation",
    "Result"
  ],
  "answers": [
    "{3}",
    "{1, 2}"
  ],
  "hints": [
    "The intersection keeps only what appears in BOTH lists.",
    "A minus B strips out of A anything that also lies in B."
  ],
  "explanation": "Only 3 belongs to both sets, so the intersection is {3}. Removing B's elements from A deletes 3 and leaves {1, 2}. Note the union lists 3 once — sets never repeat an element."
}
```

**Key fields:** `rows`, `headers`, `answers`, `hints`, `explanation`

---

### `category_sort`

Drag items into the correct category bucket.

```json
{
  "type": "category_sort",
  "question": "Categorize these relations based on whether they are functions.",
  "categories": [
    "Is a Function",
    "Not a Function"
  ],
  "items": [
    {
      "label": "$y = x^{2}$",
      "correctCategory": "Is a Function",
      "id": "u01l01q09_i0"
    },
    {
      "label": "$x = y^{2}$",
      "correctCategory": "Not a Function",
      "id": "u01l01q09_i1"
    },
    {
      "label": "$y = \\sin(x)$",
      "correctCategory": "Is a Function",
      "id": "u01l01q09_i2"
    },
    {
      "label": "A circle $x^{2}$ + $y^{2}$ = 1",
      "correctCategory": "Not a Function",
      "id": "u01l01q09_i3"
    },
    {
      "label": "y = |x|",
      "correctCategory": "Is a Function",
      "id": "u01l01q09_i4"
    }
  ],
  "explanation": "Vertical line test determines if it is a function.",
  "correctAnswer": {
    "u01l01q09_i0": "Is a Function",
    "u01l01q09_i1": "Not a Function",
    "u01l01q09_i2": "Is a Function",
    "u01l01q09_i3": "Not a Function",
    "u01l01q09_i4": "Is a Function"
  }
}
```

**Key fields:** `categories`, `items`, `explanation`, `correctAnswer`

---

### `pattern_sequence`

Complete missing elements in a sequence. Each missing index has its own option set.

```json
{
  "type": "pattern_sequence",
  "question": "Reading a binary number from right to left, each position is worth twice the one before. Fill in the missing place value.",
  "sequence": [
    "1",
    "2",
    "4",
    "8",
    "?",
    "32",
    "64"
  ],
  "missingIndices": [
    4
  ],
  "optionsPerMissing": [
    [
      "12",
      "16",
      "24"
    ]
  ],
  "correctValues": [
    "16"
  ],
  "hints": [
    "The place values are the powers of two, not multiples of a fixed step.",
    "The gap sits between 8 and 32, and each position doubles the previous one."
  ],
  "explanation": "The positions are $2^{0}, 2^{1}, 2^{2}, \\dots$, so after 8 comes 16, not 12. Reading them as an arithmetic sequence with a constant gap is the classic slip; binary place values double, which is exactly why n bits reach $2^{n}$ values."
}
```

**Key fields:** `sequence`, `missingIndices`, `optionsPerMissing`, `correctValues`, `hints`, `explanation`

---

### `timeline_ordering`

Order historical events chronologically.

```json
{
  "type": "timeline_ordering",
  "question": "Order the steps in an epsilon-delta proof that $lim_{x\\to a} f(x)$ = L.",
  "events": [
    {
      "id": "e1",
      "label": "Let $\\varepsilon$ > 0 be given (arbitrarily small)",
      "correctPosition": 0
    },
    {
      "id": "e2",
      "label": "Express |$f(x)$ − L| in terms of |x − a|",
      "correctPosition": 1
    },
    {
      "id": "e3",
      "label": "Choose $\\delta$ > 0 in terms of $\\varepsilon$ to control |$f(x)$ − L|",
      "correctPosition": 2
    },
    {
      "id": "e4",
      "label": "Verify: |x − a| < $\\delta$ implies |$f(x)$ − L| < $\\varepsilon$",
      "correctPosition": 3
    }
  ],
  "explanation": "The epsilon-delta definition formalises the intuitive notion of a limit."
}
```

**Key fields:** `events`, `explanation`

---

### `word_search`

Find hidden words in a letter grid. `grid` is a 2D array of characters.

```json
{
  "type": "word_search",
  "question": "Find five key terms from the study of limits and continuity.",
  "explanation": "These terms form the rigorous vocabulary of limit theory.",
  "wordsToFind": [
    "LIMIT",
    "CONTINUITY",
    "DELTA",
    "EPSILON",
    "SQUEEZE"
  ],
  "gridSize": 12,
  "grid": [
    [
      "H",
      "P",
      "R",
      "Y",
      "I",
      "H",
      "Y",
      "V",
      "X",
      "O",
      "L",
      "W"
    ],
    [
      "H",
      "Y",
      "F",
      "W",
      "W",
      "D",
      "S",
      "T",
      "B",
      "D",
      "A",
      "G"
    ],
    [
      "O",
      "N",
      "A",
      "H",
      "C",
      "J",
      "O",
      "Q",
      "O",
      "F",
      "Z",
      "R"
    ],
    [
      "Z",
      "C",
      "V",
      "K",
      "U",
      "K",
      "N",
      "M",
      "V",
      "Q",
      "D",
      "Q"
    ],
    [
      "Q",
      "U",
      "H",
      "K",
      "X",
      "Y",
      "S",
      "M",
      "L",
      "W",
      "Q",
      "E"
    ],
    [
      "I",
      "Y",
      "T",
      "I",
      "U",
      "N",
      "I",
      "T",
      "N",
      "O",
      "C",
      "V"
    ],
    [
      "N",
      "C",
      "Z",
      "N",
      "O",
      "L",
      "I",
      "S",
      "P",
      "E",
      "Y",
      "E"
    ],
    [
      "S",
      "I",
      "M",
      "G",
      "E",
      "D",
      "K",
      "L",
      "M",
      "L",
      "H",
      "M"
    ],
    [
      "V",
      "M",
      "L",
      "E",
      "Z",
      "E",
      "E",
      "U",
      "Q",
      "S",
      "M",
      "G"
    ],
    [
      "U",
      "W",
      "U",
      "I",
      "J",
      "Z",
      "K",
      "Y",
      "G",
      "A",
      "T",
      "D"
    ],
    [
      "B",
      "R",
      "P",
      "M",
      "P",
      "C",
      "S",
      "L",
      "J",
      "S",
      "Y",
      "Q"
    ],
    [
      "K",
      "A",
      "T",
      "L",
      "E",
      "D",
      "G",
      "T",
      "I",
      "M",
      "I",
      "L"
    ]
  ],
  "definitions": {
    "LIMIT": "The value that a function approaches as the input approaches some value.",
    "CONTINUITY": "A property of a function with no breaks, holes, or jumps.",
    "DELTA": "A small change or difference, often paired with epsilon.",
    "EPSILON": "A strictly positive, usually very small real number.",
    "SQUEEZE": "A theorem used in calculus to evaluate the limit of a function."
  }
}
```

**Key fields:** `explanation`, `wordsToFind`, `gridSize`, `grid`, `definitions`

---

### `crossword`

Fill crossword answers from clues. `clues` have direction, position, and answer.

```json
{
  "type": "crossword",
  "question": "Solve the crossword using clues about limits.",
  "explanation": "Mastery of this vocabulary is required for rigorous analysis.",
  "clues": [
    {
      "direction": "across",
      "answer": "CONTINUOUS",
      "startRow": 2,
      "startCol": 0,
      "number": 1,
      "clue": "Describes a function with no breaks or jumps."
    },
    {
      "direction": "down",
      "answer": "EPSILON",
      "startRow": 0,
      "startCol": 9,
      "number": 2,
      "clue": "Small positive constant in formal limit definition."
    },
    {
      "direction": "across",
      "answer": "LIMIT",
      "startRow": 4,
      "startCol": 9,
      "number": 3,
      "clue": "The value a function approaches."
    },
    {
      "direction": "across",
      "answer": "DELTA",
      "startRow": 0,
      "startCol": 8,
      "number": 4,
      "clue": "Small positive constant paired with epsilon."
    }
  ],
  "gridRows": 8,
  "gridCols": 15
}
```

**Key fields:** `explanation`, `clues`, `gridRows`, `gridCols`

---

### `annotation_text`

Select spans of text and assign labels from `availableLabels`.

```json
{
  "type": "annotation_text",
  "question": "The same byte can be read in more than one way. Highlight the span that reads it as text.",
  "passage": "The byte 01000001 is the number 65, the letter A in ASCII, or part of a colour.",
  "correctSpans": [
    {
      "start": 36,
      "end": 57,
      "label": "Read as text"
    }
  ],
  "availableLabels": [
    "Read as text",
    "Read as a number"
  ],
  "hints": [
    "Only one of the three readings involves a character set.",
    "ASCII is the scheme that maps characters to numbers."
  ],
  "explanation": "Reading the byte as the letter A means passing it through ASCII, the character encoding; reading it as 65 means treating the columns as powers of two. Both readings are of the identical eight bits, which is the whole point — meaning lives in the interpretation, not the pattern."
}
```

**Key fields:** `passage`, `correctSpans`, `availableLabels`, `hints`, `explanation`

---

### `memory_pairs`

Memory card game — find matching pairs.

```json
{
  "type": "memory_pairs",
  "question": "Match each term to its precise definition.",
  "pairs": [
    {
      "left": "Domain",
      "right": "Set of all valid input values"
    },
    {
      "left": "Range",
      "right": "Set of all output values"
    },
    {
      "left": "Even function",
      "right": "$f(-x) = f(x)$; y-axis symmetry"
    },
    {
      "left": "Odd function",
      "right": "$f(-x) = -f(x)$; origin symmetry"
    }
  ],
  "explanation": "These four terms are foundational to the study of real-valued functions."
}
```

**Key fields:** `pairs`, `explanation`

---

### `formula_builder`

Build a formula by arranging tokens in `correctOrder`.

```json
{
  "type": "formula_builder",
  "question": "Build the **product rule**: arrange the tokens to express $\\dfrac{d}{dx}\\left[f(x)\\,g(x)\\right]$.",
  "tokens": [
    "f'(x)·g(x)",
    "+",
    "f(x)·g'(x)"
  ],
  "correctOrder": [
    0,
    1,
    2
  ],
  "hints": [
    "Each factor takes a turn being differentiated while the other stands still.",
    "The two turns are **added** — differentiation distributes over the product as a sum of turns."
  ],
  "explanation": "$(fg)' = f'g + fg'$: the product grows through both factors, so each contributes a term where only it is differentiated. Sanity check on $x \\cdot x$: $1\\cdot x + x\\cdot 1 = 2x$, matching $(x^{2})'$."
}
```

**Key fields:** `tokens`, `correctOrder`, `hints`, `explanation`

---

### `unit_conversion`

Convert between units using given conversion factors.

```json
{
  "type": "unit_conversion",
  "question": "A digital caliper reads a rod’s diameter as **25.40 mm**. Convert this reading for the report table.",
  "expectedBaseValue": 25.4,
  "unitFactors": {
    "mm": 1,
    "cm": 10,
    "m": 1000
  },
  "unitChoices": [
    "mm",
    "cm",
    "m"
  ],
  "tolerance": 0.01,
  "givens": [
    "Caliper reading: 25.40 mm"
  ],
  "resultLabel": "Diameter",
  "hints": [
    "Pick any of the three units — just scale the number to match.",
    "25.40 mm = 2.540 cm = 0.02540 m."
  ],
  "explanation": "All three express the same length; only the numeral changes with the unit. Keeping the four significant figures (25.40, not 25.4) preserves the caliper’s precision through the conversion — significant figures travel with the measurement."
}
```

**Key fields:** `expectedBaseValue`, `unitFactors`, `unitChoices`, `tolerance`, `givens`, `resultLabel`, `hints`, `explanation`

---

### `venn_diagram`

Sort items into Venn diagram regions: A-only, B-only, both, or neither.

```json
{
  "type": "venn_diagram",
  "question": "Sort each function by its behaviour **at $x = 0$**.",
  "setALabel": "Continuous at 0",
  "setBLabel": "Differentiable at 0",
  "items": [
    {
      "id": "i1",
      "label": "$|x|$"
    },
    {
      "id": "i2",
      "label": "$x^{2}$"
    },
    {
      "id": "i3",
      "label": "$1/x$"
    },
    {
      "id": "i4",
      "label": "$\\sin x$"
    }
  ],
  "correctMapping": {
    "i1": "a_only",
    "i2": "both",
    "i3": "neither",
    "i4": "both"
  },
  "hints": [
    "Differentiability is the stronger club: every member is automatically continuous — so nothing can land in \"differentiable only\".",
    "$|x|$ is unbroken at 0 but has a sharp corner there; $1/x$ is not even defined at 0."
  ],
  "explanation": "Differentiable ⟹ continuous, so the \"B only\" region must stay empty — the deep content of this diagram. $|x|$ shows the converse fails: continuity with a corner. $1/x$ fails both; $x^{2}$ and $\\sin x$ are smooth."
}
```

**Key fields:** `setALabel`, `setBLabel`, `items`, `correctMapping`, `hints`, `explanation`

---

## STEM

### `code_snippet`

Fill in blanks in a code template. `bank` provides draggable options per blank.

```json
{
  "type": "code_snippet",
  "question": "Complete the loop so it sums only the EVEN numbers from 1 to 5, then predict the output.",
  "explanation": "`i % 2 == 0` keeps the even values — 2 and 4 — and their sum is 6.",
  "language": "python",
  "codeTemplate": "total = 0
for i in range(1, 6):
    if i % 2 == {{0}}:
        total += i
print(total)   # prints {{1}}",
  "blanks": [
    "0",
    "6"
  ],
  "bank": [
    "0",
    "1",
    "2",
    "6",
    "9",
    "15"
  ]
}
```

**Key fields:** `explanation`, `language`, `codeTemplate`, `blanks`, `bank`

---

### `periodic_table`

Select elements on a periodic table matching `selectionCriteria`.

```json
{
  "type": "periodic_table",
  "question": "Select all noble gases on the periodic table.",
  "correctElementSymbols": [
    "He",
    "Ne",
    "Ar",
    "Kr",
    "Xe",
    "Rn"
  ],
  "selectionCriteria": "Noble gases (Group 18): He, Ne, Ar, Kr, Xe, Rn",
  "minSelections": 2,
  "maxSelections": 6,
  "explanation": "Noble gases occupy Group 18. Their full outer shells make them chemically inert under normal conditions."
}
```

**Key fields:** `correctElementSymbols`, `selectionCriteria`, `minSelections`, `maxSelections`, `explanation`

---

### `data_analysis`

Compute statistics (mean, median, sum, etc.) from a data table.

```json
{
  "type": "data_analysis",
  "question": "You timed 5 oscillations of a pendulum, five times. Analyse the data.",
  "columns": [
    {
      "id": "trial",
      "label": "Trial"
    },
    {
      "id": "t5",
      "label": "Time for 5 swings (s)"
    }
  ],
  "dataRows": [
    {
      "trial": 1,
      "t5": 10.2
    },
    {
      "trial": 2,
      "t5": 9.8
    },
    {
      "trial": 3,
      "t5": 10
    },
    {
      "trial": 4,
      "t5": 10.4
    },
    {
      "trial": 5,
      "t5": 9.6
    }
  ],
  "tasks": [
    {
      "id": "task_mean",
      "description": "Compute the mean time for 5 swings (s)",
      "operation": "mean",
      "targetColumnId": "t5",
      "correctValue": 10,
      "tolerance": 0.05
    },
    {
      "id": "task_range",
      "description": "Compute the range (max − min) of the timings (s)",
      "operation": "range",
      "targetColumnId": "t5",
      "correctValue": 0.8,
      "tolerance": 0.05
    }
  ],
  "hints": [
    "Mean: add the five values, divide by five.",
    "Range: subtract the smallest from the largest — a quick first look at scatter."
  ],
  "explanation": "Mean 10.0 s (so one period is 2.0 s) with a 0.8 s spread. Timing five swings instead of one is deliberate: the same ±0.2 s human reflex error gets divided by 5 when you extract the period — a free 5× precision boost."
}
```

**Key fields:** `columns`, `dataRows`, `tasks`, `hints`, `explanation`

---

### `number_base`

Convert a number from `sourceBase` to `targetBase`.

```json
{
  "type": "number_base",
  "question": "A file header stores the value 45. Write that value in binary.",
  "sourceNumber": "45",
  "sourceBase": 10,
  "targetBase": 2,
  "correctResult": "101101",
  "hints": [
    "Work down through the place values 32, 16, 8, 4, 2, 1, taking each one you can.",
    "45 is more than 32 but less than 64, so the answer is six bits long and starts with 1."
  ],
  "explanation": "45 = 32 + 8 + 4 + 1, so the 32, 8, 4 and 1 columns hold a 1 and the 16 and 2 columns hold a 0, giving 101101. Checking a binary answer by adding its place values back up is the cheapest way to catch a slip."
}
```

**Key fields:** `sourceNumber`, `sourceBase`, `targetBase`, `correctResult`, `hints`, `explanation`

---

### `truth_table`

Fill in the output column of a logic truth table for the given `expression`.

```json
{
  "type": "truth_table",
  "question": "A loop runs while `A and not B` holds. **Fill in the truth table**: for each input row, does the loop keep running?",
  "variables": [
    "A",
    "B"
  ],
  "expression": "A AND (NOT B)",
  "inputRows": [
    [
      true,
      true
    ],
    [
      true,
      false
    ],
    [
      false,
      true
    ],
    [
      false,
      false
    ]
  ],
  "correctOutputs": [
    false,
    true,
    false,
    false
  ],
  "hints": [
    "`not B` flips B first; then `and` demands both sides true.",
    "Only one row satisfies both requirements: A true **and** B false."
  ],
  "explanation": "The condition holds only for A = true, B = false. Truth tables are the microscope of control flow: they expose exactly which situations a compound condition really covers — often fewer than intuition guesses."
}
```

**Key fields:** `variables`, `expression`, `inputRows`, `correctOutputs`, `hints`, `explanation`

---

### `flow_chart`

Fill blank nodes in an algorithm flowchart.

```json
{
  "type": "flow_chart",
  "question": "This chart is one turn of the instruction cycle. Label the three empty boxes with the three phase names — Fetch, Decode and Execute — in the order the CPU performs them. Write one word in each box.",
  "nodes": [
    {
      "id": "n1",
      "type": "start",
      "text": "Start of cycle",
      "nextIds": [
        "n2"
      ]
    },
    {
      "id": "n2",
      "type": "process",
      "text": "",
      "nextIds": [
        "n3"
      ]
    },
    {
      "id": "n3",
      "type": "process",
      "text": "",
      "nextIds": [
        "n4"
      ]
    },
    {
      "id": "n4",
      "type": "process",
      "text": "",
      "nextIds": [
        "n5"
      ]
    },
    {
      "id": "n5",
      "type": "decision",
      "text": "Program finished?",
      "nextIds": [
        "n6",
        "n2"
      ]
    },
    {
      "id": "n6",
      "type": "end",
      "text": "Stop",
      "nextIds": []
    }
  ],
  "correctFills": {
    "n2": "Fetch",
    "n3": "Decode",
    "n4": "Execute"
  },
  "hints": [
    "The CPU cannot act on an instruction before it knows what the instruction is.",
    "Interpreting the bit pattern has to happen after the pattern has been brought in from memory."
  ],
  "explanation": "The instruction must be read from memory before its bits can be interpreted, and interpreted before the operation can be carried out — so Fetch, then Decode, then Execute, then round again. The loop back to Fetch is the whole of how a program runs."
}
```

**Key fields:** `nodes`, `correctFills`, `hints`, `explanation`

---

### `logic_gate`

Determine the outputs of a logic gate circuit.

```json
{
  "type": "logic_gate",
  "question": "A half adder computes a column of binary addition with two gates fed by the same two bits: an XOR gate produces the sum digit and an AND gate produces the carry. Here the machine is adding 1 + 0. Give the output of each gate, in order.",
  "inputs": [
    true,
    false
  ],
  "gates": [
    {
      "type": "XOR"
    },
    {
      "type": "AND"
    }
  ],
  "expectedOutputs": [
    true,
    false
  ],
  "hints": [
    "Work out by hand what 1 + 0 gives as a sum digit and as a carry, then read off each gate.",
    "A carry is produced only when the column overflows past 1."
  ],
  "explanation": "1 + 0 = 1, so the sum digit is 1 (XOR of 1 and 0 is true) and no carry leaves the column (AND of 1 and 0 is false). Only 1 + 1 produces a carry, which is exactly why the carry line is an AND gate."
}
```

**Key fields:** `inputs`, `gates`, `expectedOutputs`, `hints`, `explanation`

---

### `balance_scale`

Select items to place on a scale to match `targetWeight`.

```json
{
  "type": "balance_scale",
  "question": "The left pan holds **2.0 kg and 1.5 kg**. Select masses for the right pan to balance the scale.",
  "fixedLeft": [
    {
      "id": "L1",
      "label": "2.0 kg",
      "weight": 2
    },
    {
      "id": "L2",
      "label": "1.5 kg",
      "weight": 1.5
    }
  ],
  "availableItems": [
    {
      "id": "w1",
      "label": "2.0 kg",
      "weight": 2
    },
    {
      "id": "w2",
      "label": "1.5 kg",
      "weight": 1.5
    },
    {
      "id": "w3",
      "label": "1.0 kg",
      "weight": 1
    },
    {
      "id": "w4",
      "label": "0.5 kg",
      "weight": 0.5
    },
    {
      "id": "w5",
      "label": "0.25 kg",
      "weight": 0.25
    }
  ],
  "targetWeight": 3.5,
  "hints": [
    "Balance means equal total weight on both sides. What does the left side add up to?",
    "Several combinations reach 3.5 kg — any of them balances."
  ],
  "explanation": "Equilibrium demands equal moments; with equal arms that reduces to equal weights: 3.5 kg on each side. On a real see-saw you could instead balance with *less* mass placed *farther out* — that trade of force for lever arm is torque."
}
```

**Key fields:** `fixedLeft`, `availableItems`, `targetWeight`, `hints`, `explanation`

---

### `probability_spinner`

Adjust pie-chart sections to match target probabilities.

```json
{
  "type": "probability_spinner",
  "question": "Random measurement errors follow a normal distribution. **Set the spinner fractions** for where a single measurement lands relative to the mean.",
  "sections": [
    {
      "label": "Within ±1σ",
      "correctFraction": 0.68
    },
    {
      "label": "Beyond ±1σ",
      "correctFraction": 0.32
    }
  ],
  "tolerance": 0.05,
  "hints": [
    "This is the famous 68–95–99.7 rule — you need its first number.",
    "About two-thirds of normal data falls within one standard deviation."
  ],
  "explanation": "Roughly **68%** of normally distributed measurements fall within ±1σ of the mean — the working definition of a quoted uncertainty. Nearly a third of honest readings land outside it; a lone outlier is not a scandal."
}
```

**Key fields:** `sections`, `tolerance`, `hints`, `explanation`

---

### `grid_path`

Navigate a grid maze from `start` to `end`, avoiding `obstacles`.

```json
{
  "type": "grid_path",
  "question": "Each cell is a block of memory. The blocked cells are blocks that are NOT in the cache, so touching one forces a slow trip to main memory. Trace the route from the top-left block to the bottom-right block that stays entirely in cache, moving one step at a time.",
  "rows": 4,
  "obstacles": [
    "1,1",
    "1,2",
    "2,0",
    "3,1"
  ],
  "start": "0,0",
  "end": "3,3",
  "correctPath": [
    "0,0",
    "0,1",
    "0,2",
    "0,3",
    "1,3",
    "2,3",
    "3,3"
  ],
  "hints": [
    "Try heading straight down the left-hand column first and see how far you get.",
    "With the left column blocked partway down, the only cached route runs along the top and then down the far side."
  ],
  "explanation": "Going down the left column stops at the blocked cell in row 2, and cutting inward from the top row hits the blocked pair in row 1 — so the only all-hit route is along the top edge and down the right edge. Real code is optimised the same way: rearrange the access order so the work stays inside blocks already in cache.",
  "cols": 4
}
```

**Key fields:** `rows`, `obstacles`, `start`, `end`, `correctPath`, `hints`, `explanation`, `cols`

---

### `resistor_color`

Select the correct color bands for a given resistance value.

```json
{
  "type": "resistor_color",
  "question": "Read this resistor’s colour bands and enter its resistance in ohms. (Digit values: red = 2, violet = 7; multiplier brown = ×10.)",
  "bandColors": [
    "red",
    "violet",
    "brown"
  ],
  "toleranceBand": "gold",
  "correctResistance": 270,
  "hints": [
    "First two bands are digits, third is the power-of-ten multiplier.",
    "red-violet = 27, then ×10."
  ],
  "explanation": "27 × 10 = **270 Ω**. The gold band promises ±5%. Colour codes are the lab’s everyday cipher — misread one band and your circuit quietly runs at ten times the intended current."
}
```

**Key fields:** `bandColors`, `toleranceBand`, `correctResistance`, `hints`, `explanation`

---

### `thermometer_reading`

Set a thermometer slider to the target temperature.

```json
{
  "type": "thermometer_reading",
  "question": "**Set the thermometer to absolute zero** — the temperature where molecular motion reaches its minimum — in °C.",
  "minValue": -300,
  "maxValue": 50,
  "correctValue": -273,
  "tolerance": 5,
  "unit": "°C",
  "majorTicks": 7,
  "step": 1,
  "hints": [
    "Absolute zero is 0 K. The Celsius and Kelvin scales differ by a fixed shift.",
    "$0\\,K = -273.15\\,°C$."
  ],
  "explanation": "Absolute zero sits at −273.15 °C: the floor of the Kelvin scale, where thermal jiggling bottoms out. Nothing can be colder — temperature measures motion, and motion cannot be less than minimal."
}
```

**Key fields:** `minValue`, `maxValue`, `correctValue`, `tolerance`, `unit`, `majorTicks`, `step`, `hints`, `explanation`

---

### `function_graph`

Adjust function parameters to match a target curve.

```json
{
  "type": "function_graph",
  "question": "Which graph shows the linear function $y = 2x$?",
  "equation": "$y = m*x$",
  "parameters": [
    {
      "id": "m",
      "min": -5,
      "max": 5,
      "correct": 2
    }
  ],
  "explanation": "$m = 2$ since 2$\\cdot3 = 6. Linear functions are continuous on all of$ ℝ.",
  "minX": -5,
  "maxX": 5,
  "minY": -10,
  "maxY": 10,
  "series": [
    {
      "id": "A",
      "label": "A",
      "isCorrect": true,
      "points": [
        {
          "x": -5,
          "y": -10
        },
        {
          "x": -4.875,
          "y": -9.75
        },
        {
          "x": -4.75,
          "y": -9.5
        },
        {
          "x": -4.625,
          "y": -9.25
        },
        {
          "x": -4.5,
          "y": -9
        },
        {
          "x": -4.375,
          "y": -8.75
        },
        {
          "x": -4.25,
          "y": -8.5
        },
        {
          "x": -4.125,
          "y": -8.25
        },
        {
          "x": -4,
          "y": -8
        },
        {
          "x": -3.875,
          "y": -7.75
        },
        {
          "x": -3.75,
          "y": -7.5
        },
        {
          "x": -3.625,
          "y": -7.25
        },
        {
          "x": -3.5,
          "y": -7
        },
        {
          "x": -3.375,
          "y": -6.75
        },
        {
          "x": -3.25,
          "y": -6.5
        },
        {
          "x": -3.125,
          "y": -6.25
        },
        {
          "x": -3,
          "y": -6
        },
        {
          "x": -2.875,
          "y": -5.75
        },
        {
          "x": -2.75,
          "y": -5.5
        },
        {
          "x": -2.625,
          "y": -5.25
        },
        {
          "x": -2.5,
          "y": -5
        },
        {
          "x": -2.375,
          "y": -4.75
        },
        {
          "x": -2.25,
          "y": -4.5
        },
        {
          "x": -2.125,
          "y": -4.25
        },
        {
          "x": -2,
          "y": -4
        },
        {
          "x": -1.875,
          "y": -3.75
        },
        {
          "x": -1.75,
          "y": -3.5
        },
        {
          "x": -1.625,
          "y": -3.25
        },
        {
          "x": -1.5,
          "y": -3
        },
        {
          "x": -1.375,
          "y": -2.75
        },
        {
          "x": -1.25,
          "y": -2.5
        },
        {
          "x": -1.125,
          "y": -2.25
        },
        {
          "x": -1,
          "y": -2
        },
        {
          "x": -0.875,
          "y": -1.75
        },
        {
          "x": -0.75,
          "y": -1.5
        },
        {
          "x": -0.625,
          "y": -1.25
        },
        {
          "x": -0.5,
          "y": -1
        },
        {
          "x": -0.375,
          "y": -0.75
        },
        {
          "x": -0.25,
          "y": -0.5
        },
        {
          "x": -0.125,
          "y": -0.25
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0.125,
          "y": 0.25
        },
        {
          "x": 0.25,
          "y": 0.5
        },
        {
          "x": 0.375,
          "y": 0.75
        },
        {
          "x": 0.5,
          "y": 1
        },
        {
          "x": 0.625,
          "y": 1.25
        },
        {
          "x": 0.75,
          "y": 1.5
        },
        {
          "x": 0.875,
          "y": 1.75
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1.125,
          "y": 2.25
        },
        {
          "x": 1.25,
          "y": 2.5
        },
        {
          "x": 1.375,
          "y": 2.75
        },
        {
          "x": 1.5,
          "y": 3
        },
        {
          "x": 1.625,
          "y": 3.25
        },
        {
          "x": 1.75,
          "y": 3.5
        },
        {
          "x": 1.875,
          "y": 3.75
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2.125,
          "y": 4.25
        },
        {
          "x": 2.25,
          "y": 4.5
        },
        {
          "x": 2.375,
          "y": 4.75
        },
        {
          "x": 2.5,
          "y": 5
        },
        {
          "x": 2.625,
          "y": 5.25
        },
        {
          "x": 2.75,
          "y": 5.5
        },
        {
          "x": 2.875,
          "y": 5.75
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3.125,
          "y": 6.25
        },
        {
          "x": 3.25,
          "y": 6.5
        },
        {
          "x": 3.375,
          "y": 6.75
        },
        {
          "x": 3.5,
          "y": 7
        },
        {
          "x": 3.625,
          "y": 7.25
        },
        {
          "x": 3.75,
          "y": 7.5
        },
        {
          "x": 3.875,
          "y": 7.75
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 4.125,
          "y": 8.25
        },
        {
          "x": 4.25,
          "y": 8.5
        },
        {
          "x": 4.375,
          "y": 8.75
        },
        {
          "x": 4.5,
          "y": 9
        },
        {
          "x": 4.625,
          "y": 9.25
        },
        {
          "x": 4.75,
          "y": 9.5
        },
        {
          "x": 4.875,
          "y": 9.75
        },
        {
          "x": 5,
          "y": 10
        }
      ]
    },
    {
      "id": "B",
      "label": "B",
      "isCorrect": false,
      "points": [
        {
          "x": -5,
          "y": -2.5
        },
        {
          "x": -4.875,
          "y": -2.4375
        },
        {
          "x": -4.75,
          "y": -2.375
        },
        {
          "x": -4.625,
          "y": -2.3125
        },
        {
          "x": -4.5,
          "y": -2.25
        },
        {
          "x": -4.375,
          "y": -2.1875
        },
        {
          "x": -4.25,
          "y": -2.125
        },
        {
          "x": -4.125,
          "y": -2.0625
        },
        {
          "x": -4,
          "y": -2
        },
        {
          "x": -3.875,
          "y": -1.9375
        },
        {
          "x": -3.75,
          "y": -1.875
        },
        {
          "x": -3.625,
          "y": -1.8125
        },
        {
          "x": -3.5,
          "y": -1.75
        },
        {
          "x": -3.375,
          "y": -1.6875
        },
        {
          "x": -3.25,
          "y": -1.625
        },
        {
          "x": -3.125,
          "y": -1.5625
        },
        {
          "x": -3,
          "y": -1.5
        },
        {
          "x": -2.875,
          "y": -1.4375
        },
        {
          "x": -2.75,
          "y": -1.375
        },
        {
          "x": -2.625,
          "y": -1.3125
        },
        {
          "x": -2.5,
          "y": -1.25
        },
        {
          "x": -2.375,
          "y": -1.1875
        },
        {
          "x": -2.25,
          "y": -1.125
        },
        {
          "x": -2.125,
          "y": -1.0625
        },
        {
          "x": -2,
          "y": -1
        },
        {
          "x": -1.875,
          "y": -0.9375
        },
        {
          "x": -1.75,
          "y": -0.875
        },
        {
          "x": -1.625,
          "y": -0.8125
        },
        {
          "x": -1.5,
          "y": -0.75
        },
        {
          "x": -1.375,
          "y": -0.6875
        },
        {
          "x": -1.25,
          "y": -0.625
        },
        {
          "x": -1.125,
          "y": -0.5625
        },
        {
          "x": -1,
          "y": -0.5
        },
        {
          "x": -0.875,
          "y": -0.4375
        },
        {
          "x": -0.75,
          "y": -0.375
        },
        {
          "x": -0.625,
          "y": -0.3125
        },
        {
          "x": -0.5,
          "y": -0.25
        },
        {
          "x": -0.375,
          "y": -0.1875
        },
        {
          "x": -0.25,
          "y": -0.125
        },
        {
          "x": -0.125,
          "y": -0.0625
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0.125,
          "y": 0.0625
        },
        {
          "x": 0.25,
          "y": 0.125
        },
        {
          "x": 0.375,
          "y": 0.1875
        },
        {
          "x": 0.5,
          "y": 0.25
        },
        {
          "x": 0.625,
          "y": 0.3125
        },
        {
          "x": 0.75,
          "y": 0.375
        },
        {
          "x": 0.875,
          "y": 0.4375
        },
        {
          "x": 1,
          "y": 0.5
        },
        {
          "x": 1.125,
          "y": 0.5625
        },
        {
          "x": 1.25,
          "y": 0.625
        },
        {
          "x": 1.375,
          "y": 0.6875
        },
        {
          "x": 1.5,
          "y": 0.75
        },
        {
          "x": 1.625,
          "y": 0.8125
        },
        {
          "x": 1.75,
          "y": 0.875
        },
        {
          "x": 1.875,
          "y": 0.9375
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2.125,
          "y": 1.0625
        },
        {
          "x": 2.25,
          "y": 1.125
        },
        {
          "x": 2.375,
          "y": 1.1875
        },
        {
          "x": 2.5,
          "y": 1.25
        },
        {
          "x": 2.625,
          "y": 1.3125
        },
        {
          "x": 2.75,
          "y": 1.375
        },
        {
          "x": 2.875,
          "y": 1.4375
        },
        {
          "x": 3,
          "y": 1.5
        },
        {
          "x": 3.125,
          "y": 1.5625
        },
        {
          "x": 3.25,
          "y": 1.625
        },
        {
          "x": 3.375,
          "y": 1.6875
        },
        {
          "x": 3.5,
          "y": 1.75
        },
        {
          "x": 3.625,
          "y": 1.8125
        },
        {
          "x": 3.75,
          "y": 1.875
        },
        {
          "x": 3.875,
          "y": 1.9375
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4.125,
          "y": 2.0625
        },
        {
          "x": 4.25,
          "y": 2.125
        },
        {
          "x": 4.375,
          "y": 2.1875
        },
        {
          "x": 4.5,
          "y": 2.25
        },
        {
          "x": 4.625,
          "y": 2.3125
        },
        {
          "x": 4.75,
          "y": 2.375
        },
        {
          "x": 4.875,
          "y": 2.4375
        },
        {
          "x": 5,
          "y": 2.5
        }
      ]
    },
    {
      "id": "C",
      "label": "C",
      "isCorrect": false,
      "points": [
        {
          "x": -5,
          "y": -25
        },
        {
          "x": -4.875,
          "y": -24.375
        },
        {
          "x": -4.75,
          "y": -23.75
        },
        {
          "x": -4.625,
          "y": -23.125
        },
        {
          "x": -4.5,
          "y": -22.5
        },
        {
          "x": -4.375,
          "y": -21.875
        },
        {
          "x": -4.25,
          "y": -21.25
        },
        {
          "x": -4.125,
          "y": -20.625
        },
        {
          "x": -4,
          "y": -20
        },
        {
          "x": -3.875,
          "y": -19.375
        },
        {
          "x": -3.75,
          "y": -18.75
        },
        {
          "x": -3.625,
          "y": -18.125
        },
        {
          "x": -3.5,
          "y": -17.5
        },
        {
          "x": -3.375,
          "y": -16.875
        },
        {
          "x": -3.25,
          "y": -16.25
        },
        {
          "x": -3.125,
          "y": -15.625
        },
        {
          "x": -3,
          "y": -15
        },
        {
          "x": -2.875,
          "y": -14.375
        },
        {
          "x": -2.75,
          "y": -13.75
        },
        {
          "x": -2.625,
          "y": -13.125
        },
        {
          "x": -2.5,
          "y": -12.5
        },
        {
          "x": -2.375,
          "y": -11.875
        },
        {
          "x": -2.25,
          "y": -11.25
        },
        {
          "x": -2.125,
          "y": -10.625
        },
        {
          "x": -2,
          "y": -10
        },
        {
          "x": -1.875,
          "y": -9.375
        },
        {
          "x": -1.75,
          "y": -8.75
        },
        {
          "x": -1.625,
          "y": -8.125
        },
        {
          "x": -1.5,
          "y": -7.5
        },
        {
          "x": -1.375,
          "y": -6.875
        },
        {
          "x": -1.25,
          "y": -6.25
        },
        {
          "x": -1.125,
          "y": -5.625
        },
        {
          "x": -1,
          "y": -5
        },
        {
          "x": -0.875,
          "y": -4.375
        },
        {
          "x": -0.75,
          "y": -3.75
        },
        {
          "x": -0.625,
          "y": -3.125
        },
        {
          "x": -0.5,
          "y": -2.5
        },
        {
          "x": -0.375,
          "y": -1.875
        },
        {
          "x": -0.25,
          "y": -1.25
        },
        {
          "x": -0.125,
          "y": -0.625
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0.125,
          "y": 0.625
        },
        {
          "x": 0.25,
          "y": 1.25
        },
        {
          "x": 0.375,
          "y": 1.875
        },
        {
          "x": 0.5,
          "y": 2.5
        },
        {
          "x": 0.625,
          "y": 3.125
        },
        {
          "x": 0.75,
          "y": 3.75
        },
        {
          "x": 0.875,
          "y": 4.375
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1.125,
          "y": 5.625
        },
        {
          "x": 1.25,
          "y": 6.25
        },
        {
          "x": 1.375,
          "y": 6.875
        },
        {
          "x": 1.5,
          "y": 7.5
        },
        {
          "x": 1.625,
          "y": 8.125
        },
        {
          "x": 1.75,
          "y": 8.75
        },
        {
          "x": 1.875,
          "y": 9.375
        },
        {
          "x": 2,
          "y": 10
        },
        {
          "x": 2.125,
          "y": 10.625
        },
        {
          "x": 2.25,
          "y": 11.25
        },
        {
          "x": 2.375,
          "y": 11.875
        },
        {
          "x": 2.5,
          "y": 12.5
        },
        {
          "x": 2.625,
          "y": 13.125
        },
        {
          "x": 2.75,
          "y": 13.75
        },
        {
          "x": 2.875,
          "y": 14.375
        },
        {
          "x": 3,
          "y": 15
        },
        {
          "x": 3.125,
          "y": 15.625
        },
        {
          "x": 3.25,
          "y": 16.25
        },
        {
          "x": 3.375,
          "y": 16.875
        },
        {
          "x": 3.5,
          "y": 17.5
        },
        {
          "x": 3.625,
          "y": 18.125
        },
        {
          "x": 3.75,
          "y": 18.75
        },
        {
          "x": 3.875,
          "y": 19.375
        },
        {
          "x": 4,
          "y": 20
        },
        {
          "x": 4.125,
          "y": 20.625
        },
        {
          "x": 4.25,
          "y": 21.25
        },
        {
          "x": 4.375,
          "y": 21.875
        },
        {
          "x": 4.5,
          "y": 22.5
        },
        {
          "x": 4.625,
          "y": 23.125
        },
        {
          "x": 4.75,
          "y": 23.75
        },
        {
          "x": 4.875,
          "y": 24.375
        },
        {
          "x": 5,
          "y": 25
        }
      ]
    }
  ]
}
```

**Key fields:** `equation`, `parameters`, `explanation`, `minX`, `maxX`, `minY`, `maxY`, `series`

---

### `graph_identification`

Choose the correct graph from options.

```json
{
  "type": "graph_identification",
  "question": "Which graph shows a function that is continuous at $x = 0$?",
  "minX": -2,
  "maxX": 2,
  "minY": -2,
  "maxY": 2,
  "options": [
    {
      "id": "A",
      "label": "Graph A",
      "isCorrect": true,
      "points": [
        {
          "x": -2,
          "y": -2
        },
        {
          "x": -1.95,
          "y": -1.95
        },
        {
          "x": -1.9,
          "y": -1.9
        },
        {
          "x": -1.85,
          "y": -1.85
        },
        {
          "x": -1.8,
          "y": -1.8
        },
        {
          "x": -1.75,
          "y": -1.75
        },
        {
          "x": -1.7,
          "y": -1.7
        },
        {
          "x": -1.65,
          "y": -1.65
        },
        {
          "x": -1.6,
          "y": -1.6
        },
        {
          "x": -1.55,
          "y": -1.55
        },
        {
          "x": -1.5,
          "y": -1.5
        },
        {
          "x": -1.45,
          "y": -1.45
        },
        {
          "x": -1.4,
          "y": -1.4
        },
        {
          "x": -1.35,
          "y": -1.35
        },
        {
          "x": -1.3,
          "y": -1.3
        },
        {
          "x": -1.25,
          "y": -1.25
        },
        {
          "x": -1.2,
          "y": -1.2
        },
        {
          "x": -1.15,
          "y": -1.15
        },
        {
          "x": -1.1,
          "y": -1.1
        },
        {
          "x": -1.05,
          "y": -1.05
        },
        {
          "x": -1,
          "y": -1
        },
        {
          "x": -0.95,
          "y": -0.95
        },
        {
          "x": -0.9,
          "y": -0.9
        },
        {
          "x": -0.85,
          "y": -0.85
        },
        {
          "x": -0.8,
          "y": -0.8
        },
        {
          "x": -0.75,
          "y": -0.75
        },
        {
          "x": -0.7,
          "y": -0.7
        },
        {
          "x": -0.65,
          "y": -0.65
        },
        {
          "x": -0.6,
          "y": -0.6
        },
        {
          "x": -0.55,
          "y": -0.55
        },
        {
          "x": -0.5,
          "y": -0.5
        },
        {
          "x": -0.45,
          "y": -0.45
        },
        {
          "x": -0.4,
          "y": -0.4
        },
        {
          "x": -0.35,
          "y": -0.35
        },
        {
          "x": -0.3,
          "y": -0.3
        },
        {
          "x": -0.25,
          "y": -0.25
        },
        {
          "x": -0.2,
          "y": -0.2
        },
        {
          "x": -0.15,
          "y": -0.15
        },
        {
          "x": -0.1,
          "y": -0.1
        },
        {
          "x": -0.05,
          "y": -0.05
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0.05,
          "y": 0.05
        },
        {
          "x": 0.1,
          "y": 0.1
        },
        {
          "x": 0.15,
          "y": 0.15
        },
        {
          "x": 0.2,
          "y": 0.2
        },
        {
          "x": 0.25,
          "y": 0.25
        },
        {
          "x": 0.3,
          "y": 0.3
        },
        {
          "x": 0.35,
          "y": 0.35
        },
        {
          "x": 0.4,
          "y": 0.4
        },
        {
          "x": 0.45,
          "y": 0.45
        },
        {
          "x": 0.5,
          "y": 0.5
        },
        {
          "x": 0.55,
          "y": 0.55
        },
        {
          "x": 0.6,
          "y": 0.6
        },
        {
          "x": 0.65,
          "y": 0.65
        },
        {
          "x": 0.7,
          "y": 0.7
        },
        {
          "x": 0.75,
          "y": 0.75
        },
        {
          "x": 0.8,
          "y": 0.8
        },
        {
          "x": 0.85,
          "y": 0.85
        },
        {
          "x": 0.9,
          "y": 0.9
        },
        {
          "x": 0.95,
          "y": 0.95
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1.05,
          "y": 1.05
        },
        {
          "x": 1.1,
          "y": 1.1
        },
        {
          "x": 1.15,
          "y": 1.15
        },
        {
          "x": 1.2,
          "y": 1.2
        },
        {
          "x": 1.25,
          "y": 1.25
        },
        {
          "x": 1.3,
          "y": 1.3
        },
        {
          "x": 1.35,
          "y": 1.35
        },
        {
          "x": 1.4,
          "y": 1.4
        },
        {
          "x": 1.45,
          "y": 1.45
        },
        {
          "x": 1.5,
          "y": 1.5
        },
        {
          "x": 1.55,
          "y": 1.55
        },
        {
          "x": 1.6,
          "y": 1.6
        },
        {
          "x": 1.65,
          "y": 1.65
        },
        {
          "x": 1.7,
          "y": 1.7
        },
        {
          "x": 1.75,
          "y": 1.75
        },
        {
          "x": 1.8,
          "y": 1.8
        },
        {
          "x": 1.85,
          "y": 1.85
        },
        {
          "x": 1.9,
          "y": 1.9
        },
        {
          "x": 1.95,
          "y": 1.95
        },
        {
          "x": 2,
          "y": 2
        }
      ]
    },
    {
      "id": "B",
      "label": "Graph B",
      "isCorrect": false,
      "points": [
        {
          "x": -2,
          "y": -1
        },
        {
          "x": -1.98,
          "y": -1
        },
        {
          "x": -1.96,
          "y": -1
        },
        {
          "x": -1.94,
          "y": -1
        },
        {
          "x": -1.92,
          "y": -1
        },
        {
          "x": -1.9,
          "y": -1
        },
        {
          "x": -1.88,
          "y": -1
        },
        {
          "x": -1.86,
          "y": -1
        },
        {
          "x": -1.84,
          "y": -1
        },
        {
          "x": -1.82,
          "y": -1
        },
        {
          "x": -1.8,
          "y": -1
        },
        {
          "x": -1.78,
          "y": -1
        },
        {
          "x": -1.76,
          "y": -1
        },
        {
          "x": -1.74,
          "y": -1
        },
        {
          "x": -1.72,
          "y": -1
        },
        {
          "x": -1.7,
          "y": -1
        },
        {
          "x": -1.68,
          "y": -1
        },
        {
          "x": -1.66,
          "y": -1
        },
        {
          "x": -1.64,
          "y": -1
        },
        {
          "x": -1.62,
          "y": -1
        },
        {
          "x": -1.6,
          "y": -1
        },
        {
          "x": -1.58,
          "y": -1
        },
        {
          "x": -1.56,
          "y": -1
        },
        {
          "x": -1.54,
          "y": -1
        },
        {
          "x": -1.52,
          "y": -1
        },
        {
          "x": -1.5,
          "y": -1
        },
        {
          "x": -1.48,
          "y": -1
        },
        {
          "x": -1.46,
          "y": -1
        },
        {
          "x": -1.44,
          "y": -1
        },
        {
          "x": -1.42,
          "y": -1
        },
        {
          "x": -1.4,
          "y": -1
        },
        {
          "x": -1.38,
          "y": -1
        },
        {
          "x": -1.36,
          "y": -1
        },
        {
          "x": -1.34,
          "y": -1
        },
        {
          "x": -1.32,
          "y": -1
        },
        {
          "x": -1.3,
          "y": -1
        },
        {
          "x": -1.28,
          "y": -1
        },
        {
          "x": -1.26,
          "y": -1
        },
        {
          "x": -1.24,
          "y": -1
        },
        {
          "x": -1.22,
          "y": -1
        },
        {
          "x": -1.2,
          "y": -1
        },
        {
          "x": -1.18,
          "y": -1
        },
        {
          "x": -1.16,
          "y": -1
        },
        {
          "x": -1.14,
          "y": -1
        },
        {
          "x": -1.12,
          "y": -1
        },
        {
          "x": -1.1,
          "y": -1
        },
        {
          "x": -1.08,
          "y": -1
        },
        {
          "x": -1.06,
          "y": -1
        },
        {
          "x": -1.04,
          "y": -1
        },
        {
          "x": -1.02,
          "y": -1
        },
        {
          "x": -1,
          "y": -1
        },
        {
          "x": -0.98,
          "y": -1
        },
        {
          "x": -0.96,
          "y": -1
        },
        {
          "x": -0.94,
          "y": -1
        },
        {
          "x": -0.92,
          "y": -1
        },
        {
          "x": -0.9,
          "y": -1
        },
        {
          "x": -0.88,
          "y": -1
        },
        {
          "x": -0.86,
          "y": -1
        },
        {
          "x": -0.84,
          "y": -1
        },
        {
          "x": -0.82,
          "y": -1
        },
        {
          "x": -0.8,
          "y": -1
        },
        {
          "x": -0.78,
          "y": -1
        },
        {
          "x": -0.76,
          "y": -1
        },
        {
          "x": -0.74,
          "y": -1
        },
        {
          "x": -0.72,
          "y": -1
        },
        {
          "x": -0.7,
          "y": -1
        },
        {
          "x": -0.68,
          "y": -1
        },
        {
          "x": -0.66,
          "y": -1
        },
        {
          "x": -0.64,
          "y": -1
        },
        {
          "x": -0.62,
          "y": -1
        },
        {
          "x": -0.6,
          "y": -1
        },
        {
          "x": -0.58,
          "y": -1
        },
        {
          "x": -0.56,
          "y": -1
        },
        {
          "x": -0.54,
          "y": -1
        },
        {
          "x": -0.52,
          "y": -1
        },
        {
          "x": -0.5,
          "y": -1
        },
        {
          "x": -0.48,
          "y": -1
        },
        {
          "x": -0.46,
          "y": -1
        },
        {
          "x": -0.44,
          "y": -1
        },
        {
          "x": -0.42,
          "y": -1
        },
        {
          "x": -0.4,
          "y": -1
        },
        {
          "x": -0.38,
          "y": -1
        },
        {
          "x": -0.36,
          "y": -1
        },
        {
          "x": -0.34,
          "y": -1
        },
        {
          "x": -0.32,
          "y": -1
        },
        {
          "x": -0.3,
          "y": -1
        },
        {
          "x": -0.28,
          "y": -1
        },
        {
          "x": -0.26,
          "y": -1
        },
        {
          "x": -0.24,
          "y": -1
        },
        {
          "x": -0.22,
          "y": -1
        },
        {
          "x": -0.2,
          "y": -1
        },
        {
          "x": -0.18,
          "y": -1
        },
        {
          "x": -0.16,
          "y": -1
        },
        {
          "x": -0.14,
          "y": -1
        },
        {
          "x": -0.12,
          "y": -1
        },
        {
          "x": -0.1,
          "y": -1
        },
        {
          "x": -0.08,
          "y": -1
        },
        {
          "x": -0.06,
          "y": -1
        },
        {
          "x": -0.04,
          "y": -1
        },
        {
          "x": -0.02,
          "y": -1
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0.02,
          "y": 1
        },
        {
          "x": 0.04,
          "y": 1
        },
        {
          "x": 0.06,
          "y": 1
        },
        {
          "x": 0.08,
          "y": 1
        },
        {
          "x": 0.1,
          "y": 1
        },
        {
          "x": 0.12,
          "y": 1
        },
        {
          "x": 0.14,
          "y": 1
        },
        {
          "x": 0.16,
          "y": 1
        },
        {
          "x": 0.18,
          "y": 1
        },
        {
          "x": 0.2,
          "y": 1
        },
        {
          "x": 0.22,
          "y": 1
        },
        {
          "x": 0.24,
          "y": 1
        },
        {
          "x": 0.26,
          "y": 1
        },
        {
          "x": 0.28,
          "y": 1
        },
        {
          "x": 0.3,
          "y": 1
        },
        {
          "x": 0.32,
          "y": 1
        },
        {
          "x": 0.34,
          "y": 1
        },
        {
          "x": 0.36,
          "y": 1
        },
        {
          "x": 0.38,
          "y": 1
        },
        {
          "x": 0.4,
          "y": 1
        },
        {
          "x": 0.42,
          "y": 1
        },
        {
          "x": 0.44,
          "y": 1
        },
        {
          "x": 0.46,
          "y": 1
        },
        {
          "x": 0.48,
          "y": 1
        },
        {
          "x": 0.5,
          "y": 1
        },
        {
          "x": 0.52,
          "y": 1
        },
        {
          "x": 0.54,
          "y": 1
        },
        {
          "x": 0.56,
          "y": 1
        },
        {
          "x": 0.58,
          "y": 1
        },
        {
          "x": 0.6,
          "y": 1
        },
        {
          "x": 0.62,
          "y": 1
        },
        {
          "x": 0.64,
          "y": 1
        },
        {
          "x": 0.66,
          "y": 1
        },
        {
          "x": 0.68,
          "y": 1
        },
        {
          "x": 0.7,
          "y": 1
        },
        {
          "x": 0.72,
          "y": 1
        },
        {
          "x": 0.74,
          "y": 1
        },
        {
          "x": 0.76,
          "y": 1
        },
        {
          "x": 0.78,
          "y": 1
        },
        {
          "x": 0.8,
          "y": 1
        },
        {
          "x": 0.82,
          "y": 1
        },
        {
          "x": 0.84,
          "y": 1
        },
        {
          "x": 0.86,
          "y": 1
        },
        {
          "x": 0.88,
          "y": 1
        },
        {
          "x": 0.9,
          "y": 1
        },
        {
          "x": 0.92,
          "y": 1
        },
        {
          "x": 0.94,
          "y": 1
        },
        {
          "x": 0.96,
          "y": 1
        },
        {
          "x": 0.98,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1.02,
          "y": 1
        },
        {
          "x": 1.04,
          "y": 1
        },
        {
          "x": 1.06,
          "y": 1
        },
        {
          "x": 1.08,
          "y": 1
        },
        {
          "x": 1.1,
          "y": 1
        },
        {
          "x": 1.12,
          "y": 1
        },
        {
          "x": 1.14,
          "y": 1
        },
        {
          "x": 1.16,
          "y": 1
        },
        {
          "x": 1.18,
          "y": 1
        },
        {
          "x": 1.2,
          "y": 1
        },
        {
          "x": 1.22,
          "y": 1
        },
        {
          "x": 1.24,
          "y": 1
        },
        {
          "x": 1.26,
          "y": 1
        },
        {
          "x": 1.28,
          "y": 1
        },
        {
          "x": 1.3,
          "y": 1
        },
        {
          "x": 1.32,
          "y": 1
        },
        {
          "x": 1.34,
          "y": 1
        },
        {
          "x": 1.36,
          "y": 1
        },
        {
          "x": 1.38,
          "y": 1
        },
        {
          "x": 1.4,
          "y": 1
        },
        {
          "x": 1.42,
          "y": 1
        },
        {
          "x": 1.44,
          "y": 1
        },
        {
          "x": 1.46,
          "y": 1
        },
        {
          "x": 1.48,
          "y": 1
        },
        {
          "x": 1.5,
          "y": 1
        },
        {
          "x": 1.52,
          "y": 1
        },
        {
          "x": 1.54,
          "y": 1
        },
        {
          "x": 1.56,
          "y": 1
        },
        {
          "x": 1.58,
          "y": 1
        },
        {
          "x": 1.6,
          "y": 1
        },
        {
          "x": 1.62,
          "y": 1
        },
        {
          "x": 1.64,
          "y": 1
        },
        {
          "x": 1.66,
          "y": 1
        },
        {
          "x": 1.68,
          "y": 1
        },
        {
          "x": 1.7,
          "y": 1
        },
        {
          "x": 1.72,
          "y": 1
        },
        {
          "x": 1.74,
          "y": 1
        },
        {
          "x": 1.76,
          "y": 1
        },
        {
          "x": 1.78,
          "y": 1
        },
        {
          "x": 1.8,
          "y": 1
        },
        {
          "x": 1.82,
          "y": 1
        },
        {
          "x": 1.84,
          "y": 1
        },
        {
          "x": 1.86,
          "y": 1
        },
        {
          "x": 1.88,
          "y": 1
        },
        {
          "x": 1.9,
          "y": 1
        },
        {
          "x": 1.92,
          "y": 1
        },
        {
          "x": 1.94,
          "y": 1
        },
        {
          "x": 1.96,
          "y": 1
        },
        {
          "x": 1.98,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        }
      ]
    },
    {
      "id": "C",
      "label": "Graph C",
      "isCorrect": false,
      "points": [
        {
          "x": -2,
          "y": -0.5
        },
        {
          "x": -1.98,
          "y": -0.5051
        },
        {
          "x": -1.96,
          "y": -0.5102
        },
        {
          "x": -1.94,
          "y": -0.5155
        },
        {
          "x": -1.92,
          "y": -0.5208
        },
        {
          "x": -1.9,
          "y": -0.5263
        },
        {
          "x": -1.88,
          "y": -0.5319
        },
        {
          "x": -1.86,
          "y": -0.5376
        },
        {
          "x": -1.84,
          "y": -0.5435
        },
        {
          "x": -1.82,
          "y": -0.5495
        },
        {
          "x": -1.8,
          "y": -0.5556
        },
        {
          "x": -1.78,
          "y": -0.5618
        },
        {
          "x": -1.76,
          "y": -0.5682
        },
        {
          "x": -1.74,
          "y": -0.5747
        },
        {
          "x": -1.72,
          "y": -0.5814
        },
        {
          "x": -1.7,
          "y": -0.5882
        },
        {
          "x": -1.68,
          "y": -0.5952
        },
        {
          "x": -1.66,
          "y": -0.6024
        },
        {
          "x": -1.64,
          "y": -0.6098
        },
        {
          "x": -1.62,
          "y": -0.6173
        },
        {
          "x": -1.6,
          "y": -0.625
        },
        {
          "x": -1.58,
          "y": -0.6329
        },
        {
          "x": -1.56,
          "y": -0.641
        },
        {
          "x": -1.54,
          "y": -0.6494
        },
        {
          "x": -1.52,
          "y": -0.6579
        },
        {
          "x": -1.5,
          "y": -0.6667
        },
        {
          "x": -1.48,
          "y": -0.6757
        },
        {
          "x": -1.46,
          "y": -0.6849
        },
        {
          "x": -1.44,
          "y": -0.6944
        },
        {
          "x": -1.42,
          "y": -0.7042
        },
        {
          "x": -1.4,
          "y": -0.7143
        },
        {
          "x": -1.38,
          "y": -0.7246
        },
        {
          "x": -1.36,
          "y": -0.7353
        },
        {
          "x": -1.34,
          "y": -0.7463
        },
        {
          "x": -1.32,
          "y": -0.7576
        },
        {
          "x": -1.3,
          "y": -0.7692
        },
        {
          "x": -1.28,
          "y": -0.7812
        },
        {
          "x": -1.26,
          "y": -0.7937
        },
        {
          "x": -1.24,
          "y": -0.8065
        },
        {
          "x": -1.22,
          "y": -0.8197
        },
        {
          "x": -1.2,
          "y": -0.8333
        },
        {
          "x": -1.18,
          "y": -0.8475
        },
        {
          "x": -1.16,
          "y": -0.8621
        },
        {
          "x": -1.14,
          "y": -0.8772
        },
        {
          "x": -1.12,
          "y": -0.8929
        },
        {
          "x": -1.1,
          "y": -0.9091
        },
        {
          "x": -1.08,
          "y": -0.9259
        },
        {
          "x": -1.06,
          "y": -0.9434
        },
        {
          "x": -1.04,
          "y": -0.9615
        },
        {
          "x": -1.02,
          "y": -0.9804
        },
        {
          "x": -1,
          "y": -1
        },
        {
          "x": -0.98,
          "y": -1.0204
        },
        {
          "x": -0.96,
          "y": -1.0417
        },
        {
          "x": -0.94,
          "y": -1.0638
        },
        {
          "x": -0.92,
          "y": -1.087
        },
        {
          "x": -0.9,
          "y": -1.1111
        },
        {
          "x": -0.88,
          "y": -1.1364
        },
        {
          "x": -0.86,
          "y": -1.1628
        },
        {
          "x": -0.84,
          "y": -1.1905
        },
        {
          "x": -0.82,
          "y": -1.2195
        },
        {
          "x": -0.8,
          "y": -1.25
        },
        {
          "x": -0.78,
          "y": -1.2821
        },
        {
          "x": -0.76,
          "y": -1.3158
        },
        {
          "x": -0.74,
          "y": -1.3514
        },
        {
          "x": -0.72,
          "y": -1.3889
        },
        {
          "x": -0.7,
          "y": -1.4286
        },
        {
          "x": -0.68,
          "y": -1.4706
        },
        {
          "x": -0.66,
          "y": -1.5152
        },
        {
          "x": -0.64,
          "y": -1.5625
        },
        {
          "x": -0.62,
          "y": -1.6129
        },
        {
          "x": -0.6,
          "y": -1.6667
        },
        {
          "x": -0.58,
          "y": -1.7241
        },
        {
          "x": -0.56,
          "y": -1.7857
        },
        {
          "x": -0.54,
          "y": -1.8519
        },
        {
          "x": -0.52,
          "y": -1.9231
        },
        {
          "x": -0.5,
          "y": -2
        },
        {
          "x": -0.48,
          "y": -2.0833
        },
        {
          "x": -0.46,
          "y": -2.1739
        },
        {
          "x": -0.44,
          "y": -2.2727
        },
        {
          "x": -0.42,
          "y": -2.381
        },
        {
          "x": -0.4,
          "y": -2.5
        },
        {
          "x": -0.38,
          "y": -2.6316
        },
        {
          "x": -0.36,
          "y": -2.7778
        },
        {
          "x": -0.34,
          "y": -2.9412
        },
        {
          "x": -0.32,
          "y": -3.125
        },
        {
          "x": -0.3,
          "y": -3.3333
        },
        {
          "x": -0.28,
          "y": -3.5714
        },
        {
          "x": -0.26,
          "y": -3.8462
        },
        {
          "x": -0.24,
          "y": -4.1667
        },
        {
          "x": -0.22,
          "y": -4.5455
        },
        {
          "x": -0.2,
          "y": -5
        },
        {
          "x": -0.18,
          "y": -5.5556
        },
        {
          "x": -0.16,
          "y": -6.25
        },
        {
          "x": -0.14,
          "y": -7.1429
        },
        {
          "x": -0.12,
          "y": -8.3333
        },
        {
          "x": -0.1,
          "y": -10
        },
        {
          "x": -0.08,
          "y": -12.5
        },
        {
          "x": -0.06,
          "y": -16.6667
        },
        {
          "x": -0.04,
          "y": 20
        },
        {
          "x": -0.02,
          "y": 20
        },
        {
          "x": 0,
          "y": 20
        },
        {
          "x": 0.02,
          "y": 20
        },
        {
          "x": 0.04,
          "y": 20
        },
        {
          "x": 0.06,
          "y": 16.6667
        },
        {
          "x": 0.08,
          "y": 12.5
        },
        {
          "x": 0.1,
          "y": 10
        },
        {
          "x": 0.12,
          "y": 8.3333
        },
        {
          "x": 0.14,
          "y": 7.1429
        },
        {
          "x": 0.16,
          "y": 6.25
        },
        {
          "x": 0.18,
          "y": 5.5556
        },
        {
          "x": 0.2,
          "y": 5
        },
        {
          "x": 0.22,
          "y": 4.5455
        },
        {
          "x": 0.24,
          "y": 4.1667
        },
        {
          "x": 0.26,
          "y": 3.8462
        },
        {
          "x": 0.28,
          "y": 3.5714
        },
        {
          "x": 0.3,
          "y": 3.3333
        },
        {
          "x": 0.32,
          "y": 3.125
        },
        {
          "x": 0.34,
          "y": 2.9412
        },
        {
          "x": 0.36,
          "y": 2.7778
        },
        {
          "x": 0.38,
          "y": 2.6316
        },
        {
          "x": 0.4,
          "y": 2.5
        },
        {
          "x": 0.42,
          "y": 2.381
        },
        {
          "x": 0.44,
          "y": 2.2727
        },
        {
          "x": 0.46,
          "y": 2.1739
        },
        {
          "x": 0.48,
          "y": 2.0833
        },
        {
          "x": 0.5,
          "y": 2
        },
        {
          "x": 0.52,
          "y": 1.9231
        },
        {
          "x": 0.54,
          "y": 1.8519
        },
        {
          "x": 0.56,
          "y": 1.7857
        },
        {
          "x": 0.58,
          "y": 1.7241
        },
        {
          "x": 0.6,
          "y": 1.6667
        },
        {
          "x": 0.62,
          "y": 1.6129
        },
        {
          "x": 0.64,
          "y": 1.5625
        },
        {
          "x": 0.66,
          "y": 1.5152
        },
        {
          "x": 0.68,
          "y": 1.4706
        },
        {
          "x": 0.7,
          "y": 1.4286
        },
        {
          "x": 0.72,
          "y": 1.3889
        },
        {
          "x": 0.74,
          "y": 1.3514
        },
        {
          "x": 0.76,
          "y": 1.3158
        },
        {
          "x": 0.78,
          "y": 1.2821
        },
        {
          "x": 0.8,
          "y": 1.25
        },
        {
          "x": 0.82,
          "y": 1.2195
        },
        {
          "x": 0.84,
          "y": 1.1905
        },
        {
          "x": 0.86,
          "y": 1.1628
        },
        {
          "x": 0.88,
          "y": 1.1364
        },
        {
          "x": 0.9,
          "y": 1.1111
        },
        {
          "x": 0.92,
          "y": 1.087
        },
        {
          "x": 0.94,
          "y": 1.0638
        },
        {
          "x": 0.96,
          "y": 1.0417
        },
        {
          "x": 0.98,
          "y": 1.0204
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1.02,
          "y": 0.9804
        },
        {
          "x": 1.04,
          "y": 0.9615
        },
        {
          "x": 1.06,
          "y": 0.9434
        },
        {
          "x": 1.08,
          "y": 0.9259
        },
        {
          "x": 1.1,
          "y": 0.9091
        },
        {
          "x": 1.12,
          "y": 0.8929
        },
        {
          "x": 1.14,
          "y": 0.8772
        },
        {
          "x": 1.16,
          "y": 0.8621
        },
        {
          "x": 1.18,
          "y": 0.8475
        },
        {
          "x": 1.2,
          "y": 0.8333
        },
        {
          "x": 1.22,
          "y": 0.8197
        },
        {
          "x": 1.24,
          "y": 0.8065
        },
        {
          "x": 1.26,
          "y": 0.7937
        },
        {
          "x": 1.28,
          "y": 0.7813
        },
        {
          "x": 1.3,
          "y": 0.7692
        },
        {
          "x": 1.32,
          "y": 0.7576
        },
        {
          "x": 1.34,
          "y": 0.7463
        },
        {
          "x": 1.36,
          "y": 0.7353
        },
        {
          "x": 1.38,
          "y": 0.7246
        },
        {
          "x": 1.4,
          "y": 0.7143
        },
        {
          "x": 1.42,
          "y": 0.7042
        },
        {
          "x": 1.44,
          "y": 0.6944
        },
        {
          "x": 1.46,
          "y": 0.6849
        },
        {
          "x": 1.48,
          "y": 0.6757
        },
        {
          "x": 1.5,
          "y": 0.6667
        },
        {
          "x": 1.52,
          "y": 0.6579
        },
        {
          "x": 1.54,
          "y": 0.6494
        },
        {
          "x": 1.56,
          "y": 0.641
        },
        {
          "x": 1.58,
          "y": 0.6329
        },
        {
          "x": 1.6,
          "y": 0.625
        },
        {
          "x": 1.62,
          "y": 0.6173
        },
        {
          "x": 1.64,
          "y": 0.6098
        },
        {
          "x": 1.66,
          "y": 0.6024
        },
        {
          "x": 1.68,
          "y": 0.5952
        },
        {
          "x": 1.7,
          "y": 0.5882
        },
        {
          "x": 1.72,
          "y": 0.5814
        },
        {
          "x": 1.74,
          "y": 0.5747
        },
        {
          "x": 1.76,
          "y": 0.5682
        },
        {
          "x": 1.78,
          "y": 0.5618
        },
        {
          "x": 1.8,
          "y": 0.5556
        },
        {
          "x": 1.82,
          "y": 0.5495
        },
        {
          "x": 1.84,
          "y": 0.5435
        },
        {
          "x": 1.86,
          "y": 0.5376
        },
        {
          "x": 1.88,
          "y": 0.5319
        },
        {
          "x": 1.9,
          "y": 0.5263
        },
        {
          "x": 1.92,
          "y": 0.5208
        },
        {
          "x": 1.94,
          "y": 0.5155
        },
        {
          "x": 1.96,
          "y": 0.5102
        },
        {
          "x": 1.98,
          "y": 0.5051
        },
        {
          "x": 2,
          "y": 0.5
        }
      ]
    },
    {
      "id": "D",
      "label": "Graph D",
      "isCorrect": false,
      "points": [
        {
          "x": -2,
          "y": -2
        },
        {
          "x": -1.98,
          "y": -2
        },
        {
          "x": -1.96,
          "y": -2
        },
        {
          "x": -1.94,
          "y": -2
        },
        {
          "x": -1.92,
          "y": -2
        },
        {
          "x": -1.9,
          "y": -2
        },
        {
          "x": -1.88,
          "y": -2
        },
        {
          "x": -1.86,
          "y": -2
        },
        {
          "x": -1.84,
          "y": -2
        },
        {
          "x": -1.82,
          "y": -2
        },
        {
          "x": -1.8,
          "y": -2
        },
        {
          "x": -1.78,
          "y": -2
        },
        {
          "x": -1.76,
          "y": -2
        },
        {
          "x": -1.74,
          "y": -2
        },
        {
          "x": -1.72,
          "y": -2
        },
        {
          "x": -1.7,
          "y": -2
        },
        {
          "x": -1.68,
          "y": -2
        },
        {
          "x": -1.66,
          "y": -2
        },
        {
          "x": -1.64,
          "y": -2
        },
        {
          "x": -1.62,
          "y": -2
        },
        {
          "x": -1.6,
          "y": -2
        },
        {
          "x": -1.58,
          "y": -2
        },
        {
          "x": -1.56,
          "y": -2
        },
        {
          "x": -1.54,
          "y": -2
        },
        {
          "x": -1.52,
          "y": -2
        },
        {
          "x": -1.5,
          "y": -2
        },
        {
          "x": -1.48,
          "y": -2
        },
        {
          "x": -1.46,
          "y": -2
        },
        {
          "x": -1.44,
          "y": -2
        },
        {
          "x": -1.42,
          "y": -2
        },
        {
          "x": -1.4,
          "y": -2
        },
        {
          "x": -1.38,
          "y": -2
        },
        {
          "x": -1.36,
          "y": -2
        },
        {
          "x": -1.34,
          "y": -2
        },
        {
          "x": -1.32,
          "y": -2
        },
        {
          "x": -1.3,
          "y": -2
        },
        {
          "x": -1.28,
          "y": -2
        },
        {
          "x": -1.26,
          "y": -2
        },
        {
          "x": -1.24,
          "y": -2
        },
        {
          "x": -1.22,
          "y": -2
        },
        {
          "x": -1.2,
          "y": -2
        },
        {
          "x": -1.18,
          "y": -2
        },
        {
          "x": -1.16,
          "y": -2
        },
        {
          "x": -1.14,
          "y": -2
        },
        {
          "x": -1.12,
          "y": -2
        },
        {
          "x": -1.1,
          "y": -2
        },
        {
          "x": -1.08,
          "y": -2
        },
        {
          "x": -1.06,
          "y": -2
        },
        {
          "x": -1.04,
          "y": -2
        },
        {
          "x": -1.02,
          "y": -2
        },
        {
          "x": -1,
          "y": -1
        },
        {
          "x": -0.98,
          "y": -1
        },
        {
          "x": -0.96,
          "y": -1
        },
        {
          "x": -0.94,
          "y": -1
        },
        {
          "x": -0.92,
          "y": -1
        },
        {
          "x": -0.9,
          "y": -1
        },
        {
          "x": -0.88,
          "y": -1
        },
        {
          "x": -0.86,
          "y": -1
        },
        {
          "x": -0.84,
          "y": -1
        },
        {
          "x": -0.82,
          "y": -1
        },
        {
          "x": -0.8,
          "y": -1
        },
        {
          "x": -0.78,
          "y": -1
        },
        {
          "x": -0.76,
          "y": -1
        },
        {
          "x": -0.74,
          "y": -1
        },
        {
          "x": -0.72,
          "y": -1
        },
        {
          "x": -0.7,
          "y": -1
        },
        {
          "x": -0.68,
          "y": -1
        },
        {
          "x": -0.66,
          "y": -1
        },
        {
          "x": -0.64,
          "y": -1
        },
        {
          "x": -0.62,
          "y": -1
        },
        {
          "x": -0.6,
          "y": -1
        },
        {
          "x": -0.58,
          "y": -1
        },
        {
          "x": -0.56,
          "y": -1
        },
        {
          "x": -0.54,
          "y": -1
        },
        {
          "x": -0.52,
          "y": -1
        },
        {
          "x": -0.5,
          "y": -1
        },
        {
          "x": -0.48,
          "y": -1
        },
        {
          "x": -0.46,
          "y": -1
        },
        {
          "x": -0.44,
          "y": -1
        },
        {
          "x": -0.42,
          "y": -1
        },
        {
          "x": -0.4,
          "y": -1
        },
        {
          "x": -0.38,
          "y": -1
        },
        {
          "x": -0.36,
          "y": -1
        },
        {
          "x": -0.34,
          "y": -1
        },
        {
          "x": -0.32,
          "y": -1
        },
        {
          "x": -0.3,
          "y": -1
        },
        {
          "x": -0.28,
          "y": -1
        },
        {
          "x": -0.26,
          "y": -1
        },
        {
          "x": -0.24,
          "y": -1
        },
        {
          "x": -0.22,
          "y": -1
        },
        {
          "x": -0.2,
          "y": -1
        },
        {
          "x": -0.18,
          "y": -1
        },
        {
          "x": -0.16,
          "y": -1
        },
        {
          "x": -0.14,
          "y": -1
        },
        {
          "x": -0.12,
          "y": -1
        },
        {
          "x": -0.1,
          "y": -1
        },
        {
          "x": -0.08,
          "y": -1
        },
        {
          "x": -0.06,
          "y": -1
        },
        {
          "x": -0.04,
          "y": -1
        },
        {
          "x": -0.02,
          "y": -1
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0.02,
          "y": 0
        },
        {
          "x": 0.04,
          "y": 0
        },
        {
          "x": 0.06,
          "y": 0
        },
        {
          "x": 0.08,
          "y": 0
        },
        {
          "x": 0.1,
          "y": 0
        },
        {
          "x": 0.12,
          "y": 0
        },
        {
          "x": 0.14,
          "y": 0
        },
        {
          "x": 0.16,
          "y": 0
        },
        {
          "x": 0.18,
          "y": 0
        },
        {
          "x": 0.2,
          "y": 0
        },
        {
          "x": 0.22,
          "y": 0
        },
        {
          "x": 0.24,
          "y": 0
        },
        {
          "x": 0.26,
          "y": 0
        },
        {
          "x": 0.28,
          "y": 0
        },
        {
          "x": 0.3,
          "y": 0
        },
        {
          "x": 0.32,
          "y": 0
        },
        {
          "x": 0.34,
          "y": 0
        },
        {
          "x": 0.36,
          "y": 0
        },
        {
          "x": 0.38,
          "y": 0
        },
        {
          "x": 0.4,
          "y": 0
        },
        {
          "x": 0.42,
          "y": 0
        },
        {
          "x": 0.44,
          "y": 0
        },
        {
          "x": 0.46,
          "y": 0
        },
        {
          "x": 0.48,
          "y": 0
        },
        {
          "x": 0.5,
          "y": 0
        },
        {
          "x": 0.52,
          "y": 0
        },
        {
          "x": 0.54,
          "y": 0
        },
        {
          "x": 0.56,
          "y": 0
        },
        {
          "x": 0.58,
          "y": 0
        },
        {
          "x": 0.6,
          "y": 0
        },
        {
          "x": 0.62,
          "y": 0
        },
        {
          "x": 0.64,
          "y": 0
        },
        {
          "x": 0.66,
          "y": 0
        },
        {
          "x": 0.68,
          "y": 0
        },
        {
          "x": 0.7,
          "y": 0
        },
        {
          "x": 0.72,
          "y": 0
        },
        {
          "x": 0.74,
          "y": 0
        },
        {
          "x": 0.76,
          "y": 0
        },
        {
          "x": 0.78,
          "y": 0
        },
        {
          "x": 0.8,
          "y": 0
        },
        {
          "x": 0.82,
          "y": 0
        },
        {
          "x": 0.84,
          "y": 0
        },
        {
          "x": 0.86,
          "y": 0
        },
        {
          "x": 0.88,
          "y": 0
        },
        {
          "x": 0.9,
          "y": 0
        },
        {
          "x": 0.92,
          "y": 0
        },
        {
          "x": 0.94,
          "y": 0
        },
        {
          "x": 0.96,
          "y": 0
        },
        {
          "x": 0.98,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1.02,
          "y": 1
        },
        {
          "x": 1.04,
          "y": 1
        },
        {
          "x": 1.06,
          "y": 1
        },
        {
          "x": 1.08,
          "y": 1
        },
        {
          "x": 1.1,
          "y": 1
        },
        {
          "x": 1.12,
          "y": 1
        },
        {
          "x": 1.14,
          "y": 1
        },
        {
          "x": 1.16,
          "y": 1
        },
        {
          "x": 1.18,
          "y": 1
        },
        {
          "x": 1.2,
          "y": 1
        },
        {
          "x": 1.22,
          "y": 1
        },
        {
          "x": 1.24,
          "y": 1
        },
        {
          "x": 1.26,
          "y": 1
        },
        {
          "x": 1.28,
          "y": 1
        },
        {
          "x": 1.3,
          "y": 1
        },
        {
          "x": 1.32,
          "y": 1
        },
        {
          "x": 1.34,
          "y": 1
        },
        {
          "x": 1.36,
          "y": 1
        },
        {
          "x": 1.38,
          "y": 1
        },
        {
          "x": 1.4,
          "y": 1
        },
        {
          "x": 1.42,
          "y": 1
        },
        {
          "x": 1.44,
          "y": 1
        },
        {
          "x": 1.46,
          "y": 1
        },
        {
          "x": 1.48,
          "y": 1
        },
        {
          "x": 1.5,
          "y": 1
        },
        {
          "x": 1.52,
          "y": 1
        },
        {
          "x": 1.54,
          "y": 1
        },
        {
          "x": 1.56,
          "y": 1
        },
        {
          "x": 1.58,
          "y": 1
        },
        {
          "x": 1.6,
          "y": 1
        },
        {
          "x": 1.62,
          "y": 1
        },
        {
          "x": 1.64,
          "y": 1
        },
        {
          "x": 1.66,
          "y": 1
        },
        {
          "x": 1.68,
          "y": 1
        },
        {
          "x": 1.7,
          "y": 1
        },
        {
          "x": 1.72,
          "y": 1
        },
        {
          "x": 1.74,
          "y": 1
        },
        {
          "x": 1.76,
          "y": 1
        },
        {
          "x": 1.78,
          "y": 1
        },
        {
          "x": 1.8,
          "y": 1
        },
        {
          "x": 1.82,
          "y": 1
        },
        {
          "x": 1.84,
          "y": 1
        },
        {
          "x": 1.86,
          "y": 1
        },
        {
          "x": 1.88,
          "y": 1
        },
        {
          "x": 1.9,
          "y": 1
        },
        {
          "x": 1.92,
          "y": 1
        },
        {
          "x": 1.94,
          "y": 1
        },
        {
          "x": 1.96,
          "y": 1
        },
        {
          "x": 1.98,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        }
      ]
    }
  ],
  "correctOptionId": "A",
  "explanation": "$y = x is a straight line continuous everywhere. The step function has a jump discontinuity at x $= 0."
}
```

**Key fields:** `minX`, `maxX`, `minY`, `maxY`, `options`, `correctOptionId`, `explanation`

---

## Interactive Scenes

### `interactive_scene`

Custom visual scene — manipulate objects to find the answer. Scene logic is server-side.

```json
{
  "type": "interactive_scene",
  "question": "On the parabola $f(x)=x^2$ over $[1,3]$: the secant line is drawn. Find the point $c$ where the tangent is **parallel** to the secant — the tangent draws when you send.",
  "sceneId": "u01_mvt",
  "sceneParams": {
    "start": 1.5
  },
  "correctAnswer": {
    "c": 2
  },
  "tolerance": 0.2,
  "explanation": "The secant slope is $(9-1)/(3-1)=4$. Setting $f'(c)=2c=4$ gives $c=2$ — the Mean Value Theorem guarantees this point exists.",
  "hints": [
    "Secant slope = (f(3)−f(1))/(3−1).",
    "f'(c) = 2c = 4."
  ]
}
```

**Key fields:** `sceneId`, `sceneParams`, `correctAnswer`, `tolerance`, `explanation`, `hints`

---

## Type Aliases

Some types have multiple valid keys that map to the same implementation:

| Alias | Maps to |
|-------|---------|
| `code_editor, coding_snippet` | `code_snippet` |
| `element_select` | `periodic_table` |
| `function_sketch` | `graph_sketch` |
| `data_table` | `data_analysis` |
| `base_conversion` | `number_base` |
| `categorize` | `category_sort` |
| `timeline` | `timeline_ordering` |
| `text_annotation` | `annotation_text` |
| `maze_path` | `grid_path` |
| `color_mixing` | `color_theory` |
| `rhythm_pattern, beat_grid` | `music_rhythm` |
| `transformation` | `coordinate_transform` |
| `symmetry` | `mirror_symmetry` |
| `histogram` | `histogram_builder` |
| `flowchart` | `flow_chart` |
| `drag_drop` | `ordering` |
