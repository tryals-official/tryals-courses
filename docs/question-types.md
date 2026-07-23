# Question Types

Tryals supports 70+ interactive question types. This document shows the JSON format for every type.

For the overall course/unit/lesson structure, see [Question Format](question-format.md).

## Table of Contents

### General

- [`multiple_choice`](#multiple-choice) — Single correct answer from a list of options
- [`multi_select`](#multi-select) — Multiple correct options (student selects all that apply)
- [`true_false`](#true-false) — Boolean question
- [`numerical_input`](#numerical-input) — Student types a number
- [`fill_blank`](#fill-blank) — Type in missing words or short phrases
- [`cloze_bank`](#cloze-bank) — Fill multiple blanks from a shared word bank
- [`matching`](#matching) — Drag to match left items with right items
- [`ordering`](#ordering) — Arrange items in the correct sequence
- [`sentence_builder`](#sentence-builder) — Build a sentence by arranging word tokens in order
- [`matrix_grid`](#matrix-grid) — One choice per row in a grid/table
- [`slider_estimate`](#slider-estimate) — Estimate a value using a slider
- [`number_line_placement`](#number-line-placement) — Place one or more markers on a number line at target values
- [`hotspot_image`](#hotspot-image) — Tap the correct region on an image
- [`diagram_labeling`](#diagram-labeling) — Assign labels to anchor points on a diagram
- [`coordinate_plot`](#coordinate-plot) — Choose the correct curve from a set of plotted options
- [`formula_builder`](#formula-builder) — Build a formula by arranging tokens
- [`unit_conversion`](#unit-conversion) — Convert between units using given conversion factors
- [`venn_diagram`](#venn-diagram) — Sort items into Venn diagram regions: A-only, B-only, both, or neither
- [`error_highlight`](#error-highlight) — Identify incorrect tokens in a passage
- [`table_completion`](#table-completion) — Fill missing cells (marked `___`) in a table
- [`memory_pairs`](#memory-pairs) — Memory card game — find matching pairs by flipping cards
- [`category_sort`](#category-sort) — Drag items into the correct category bucket
- [`pattern_sequence`](#pattern-sequence) — Complete missing elements in a sequence
- [`timeline_ordering`](#timeline-ordering) — Order historical events chronologically
- [`word_search`](#word-search) — Find hidden words in a letter grid
- [`crossword`](#crossword) — Fill crossword answers from clues
- [`annotation_text`](#annotation-text) — Select spans of text and assign labels from `availableLabels`

### STEM

- [`code_snippet`](#code-snippet) — Fill in blanks in a code template
- [`periodic_table`](#periodic-table) — Select elements on a periodic table matching `selectionCriteria`
- [`data_analysis`](#data-analysis) — Compute statistics (mean, median, sum, etc
- [`number_base`](#number-base) — Convert a number from `sourceBase` to `targetBase`
- [`truth_table`](#truth-table) — Fill in the output column of a logic truth table for a given `expression`
- [`flow_chart`](#flow-chart) — Fill blank nodes in an algorithm flowchart
- [`logic_gate`](#logic-gate) — Determine the outputs of a logic gate circuit given inputs
- [`balance_scale`](#balance-scale) — Select items to place on a scale to match `targetWeight`
- [`probability_spinner`](#probability-spinner) — Adjust pie-chart section sizes to match target probabilities
- [`grid_path`](#grid-path) — Navigate a grid maze from `start` to `end`, avoiding `obstacles`
- [`resistor_color`](#resistor-color) — Select the correct color bands for a given resistance value
- [`thermometer_reading`](#thermometer-reading) — Set a thermometer slider to a target temperature
- [`function_graph`](#function-graph) — Adjust function parameters to match a target curve
- [`graph_identification`](#graph-identification) — Choose the correct graph from multiple options
- [`coordinate_transform`](#coordinate-transform) — Apply a geometric transformation (translate, rotate, reflect) to coordinate points
- [`fraction_wall`](#fraction-wall) — Select fraction bars from a wall that sum to a target fraction
- [`histogram_builder`](#histogram-builder) — Distribute raw data points into bins to build a histogram
- [`tree_diagram`](#tree-diagram) — Fill in missing probability labels on a tree diagram
- [`scale_drawing`](#scale-drawing) — Apply a scale ratio to calculate new dimensions

### Arts & Creative

- [`color_theory`](#color-theory) — Mix RGB sliders to match a target color within `tolerance`
- [`music_rhythm`](#music-rhythm) — Compose a beat pattern on a multi-track grid
- [`music_interval`](#music-interval) — Identify the musical interval between two notes
- [`pixel_art`](#pixel-art) — Paint a grid with a color palette to match a target pattern
- [`flag_builder`](#flag-builder) — Assign the correct colors to flag stripes
- [`tangram`](#tangram) — Drag and rotate puzzle pieces on a grid to form a target shape
- [`mirror_symmetry`](#mirror-symmetry) — Complete the mirrored half of a grid pattern across an axis

### Games & Puzzles

- [`chess_puzzle`](#chess-puzzle) — Find the best move on a chess board (FEN position)
- [`estimation_jar`](#estimation-jar) — Estimate the quantity of items in a visual jar
- [`clock_setting`](#clock-setting) — Set an analog clock to a target time
- [`ingredient_ratio`](#ingredient-ratio) — Scale recipe ingredients by a `scaleFactor`

### AI-Graded

- [`media_input`](#media-input) — Upload an image or file for AI evaluation
- [`open_answer`](#open-answer) — Free-text response graded by AI
- [`speaking`](#speaking) — Spoken response with optional AI evaluation for fluency, grammar, pronunciation
- [`listening`](#listening) — Listen to an audio clip and answer a comprehension question

### Interactive Scenes

- [`interactive_scene`](#interactive-scene) — Custom visual scene — drag, manipulate, and explore to find the answer

---

## General

### `multiple_choice`

Single correct answer from a list of options.

```json
{
  "type": "multiple_choice",
  "question": "According to Coase, why does production happen inside firms instead of through individual market contracts for every task?",
  "options": [
    "Using the market has transaction costs that internal coordination can avoid",
    "Firms can always produce at lower physical cost than individuals",
    "Governments require production to be organized in firms",
    "Workers refuse to sell services without long-term employment"
  ],
  "correctAnswer": 0,
  "hints": [
    "Think about what it costs just to *use* the price mechanism: searching, negotiating, enforcing.",
    "The firm forms when doing a task internally is cheaper than contracting for it."
  ],
  "explanation": "Coase (1937): firms exist because market exchange itself is costly. When internal coordination beats the transaction costs of contracting, the task moves inside the firm."
}
```

**Key fields:** `options`, `correctAnswer`, `hints`, `explanation`

---

### `multi_select`

Multiple correct options (student selects all that apply). `correctAnswers` uses 0-based indices.

```json
{
  "type": "multi_select",
  "question": "Which of the following are transaction costs of using the market?",
  "options": [
    "Time spent searching for a reliable supplier",
    "Lawyer fees for drafting the supply contract",
    "The invoice price of the goods themselves",
    "Monitoring whether the contract is honored"
  ],
  "correctAnswers": [
    0,
    1,
    3
  ],
  "explanation": "Transaction costs are the costs of *arranging* exchange — search, negotiation, enforcement. The price of the goods is the exchange itself, not a cost of organizing it."
}
```

**Key fields:** `options`, `correctAnswers`, `explanation`

---

### `true_false`

Boolean question. `correctAnswer` is `true` or `false`.

```json
{
  "type": "true_false",
  "question": "A firm’s value added equals its total revenue.",
  "correctAnswer": "False",
  "explanation": "Value added is revenue **minus** the intermediate inputs bought from other firms. Counting full revenue would double-count the mill’s flour inside the bakery’s bread."
}
```

**Key fields:** `correctAnswer`, `explanation`

---

### `numerical_input`

Student types a number. Graded within `tolerance` of `correctAnswer`.

```json
{
  "type": "numerical_input",
  "question": "A workshop buys raw steel for 3,000€, other materials for 1,200€, and sells its finished gates for 9,500€. Compute its value added in euros.",
  "correctAnswer": 5300,
  "tolerance": 0.5,
  "explanation": "Value added $= 9500 - (3000 + 1200) = 5300$€ — the pool from which wages, rent, interest, and profit are all paid."
}
```

**Key fields:** `correctAnswer`, `tolerance`, `explanation`

---

### `fill_blank`

Type in missing words or short phrases.

```json
{
  "type": "fill_blank",
  "question": "Cells with membrane-bound organelles are called ___ cells.",
  "correctAnswer": "eukaryotic",
  "explanation": "**Eukaryotic** organization includes compartmentalized organelles."
}
```

**Key fields:** `correctAnswer`, `explanation`

---

### `cloze_bank`

Fill multiple blanks from a shared word bank. `segments` alternate between text and blanks.

```json
{
  "type": "cloze_bank",
  "question": "Complete Coase’s boundary rule for the firm.",
  "segments": [
    "A firm keeps expanding until the cost of organizing one more task ",
    " equals the ",
    " cost of doing it through the market."
  ],
  "wordBank": [
    "internally",
    "transaction",
    "externally",
    "production"
  ],
  "correctAnswers": [
    0,
    1
  ],
  "explanation": "The firm’s boundary sits where internal coordination cost equals market transaction cost at the margin."
}
```

**Key fields:** `segments`, `wordBank`, `correctAnswers`, `explanation`

---

### `matching`

Drag to match left items with right items. All pairs must be correct.

```json
{
  "type": "matching",
  "question": "Match each core role of the firm to its description.",
  "pairs": [
    {
      "left": "Coordination",
      "right": "Directing production factors under one authority"
    },
    {
      "left": "Value creation",
      "right": "Making output worth more than the inputs"
    },
    {
      "left": "Risk-bearing",
      "right": "Paying factor incomes before revenue is known"
    },
    {
      "left": "Innovation",
      "right": "Introducing new products and processes"
    }
  ],
  "explanation": "The firm replaces market haggling with managed coordination, and it earns its profit by bearing the risk that revenue may not cover committed costs."
}
```

**Key fields:** `pairs`, `explanation`

---

### `ordering`

Arrange items in the correct sequence. `correctOrder` uses 0-based indices.

```json
{
  "type": "ordering",
  "question": "Order the steps for finding a Nash equilibrium in a 2×2 payoff matrix.",
  "items": [
    "Write each player’s payoff in every cell",
    "For each rival strategy, mark your best response",
    "Repeat the marking from the rival’s perspective",
    "Find cells where both payoffs carry a best-response mark",
    "Declare those cells the Nash equilibria"
  ],
  "correctOrder": [
    0,
    1,
    2,
    3,
    4
  ],
  "hints": [
    "You can’t mark best responses before the payoffs exist.",
    "An equilibrium needs *both* players’ marks on the same cell."
  ],
  "explanation": "The best-response marking method turns equilibrium-hunting into a mechanical scan — doubly-marked cells are exactly the Nash equilibria."
}
```

**Key fields:** `items`, `correctOrder`, `hints`, `explanation`

---

### `sentence_builder`

Build a sentence by arranging word tokens in order.

```json
{
  "type": "sentence_builder",
  "question": "Construct the rule for adding quantities.",
  "correctOrder": [
    "Physical quantities",
    "can only be added",
    "or subtracted if they",
    "have the same dimensions."
  ],
  "explanation": "You cannot add a length to a mass.",
  "tokens": [
    "Physical quantities",
    "can only be added",
    "or subtracted if they",
    "have the same dimensions."
  ]
}
```

**Key fields:** `correctOrder`, `explanation`, `tokens`

---

### `matrix_grid`

One choice per row in a grid/table. `correctMapping` maps row IDs to column IDs.

```json
{
  "type": "matrix_grid",
  "question": "Classify each resource used by a pizzeria as a production factor.",
  "rows": [
    {
      "id": "r1",
      "label": "The wood-fired oven"
    },
    {
      "id": "r2",
      "label": "The chef’s working hours"
    },
    {
      "id": "r3",
      "label": "The rented street-corner plot"
    },
    {
      "id": "r4",
      "label": "The delivery scooter"
    }
  ],
  "columns": [
    {
      "id": "c1",
      "label": "Land"
    },
    {
      "id": "c2",
      "label": "Labor"
    },
    {
      "id": "c3",
      "label": "Capital"
    }
  ],
  "correctMapping": {
    "r1": "c3",
    "r2": "c2",
    "r3": "c1",
    "r4": "c3"
  },
  "explanation": "Produced means of production (oven, scooter) are capital; human effort is labor; natural or spatial resources (the plot) are land."
}
```

**Key fields:** `rows`, `columns`, `correctMapping`, `explanation`

---

### `slider_estimate`

Estimate a value using a slider. Graded within `tolerance`.

```json
{
  "type": "slider_estimate",
  "question": "A founder invests 50k€. With probability 0.5 the venture returns 130k€; otherwise 0€. Set the slider to the expected **net gain** in k€.",
  "min": -50,
  "max": 80,
  "targetValue": 15,
  "tolerance": 4,
  "minLabel": "-50k€",
  "maxLabel": "+80k€",
  "hints": [
    "Expected revenue: $0.5 \\cdot 130 = 65$k€.",
    "Subtract the 50k€ committed up front."
  ],
  "explanation": "Expected net gain $= 0.5(130) - 50 = 15$k€. A thin expected margin on a coin flip — the everyday arithmetic of Knightian judgment."
}
```

**Key fields:** `min`, `max`, `targetValue`, `tolerance`, `minLabel`, `maxLabel`, `hints`, `explanation`

---

### `number_line_placement`

Place one or more markers on a number line at target values.

```json
{
  "type": "number_line_placement",
  "question": "Fixed costs 600€, price 8€, unit variable cost 5€. **Place the marker on the break-even quantity.**",
  "min": 0,
  "max": 400,
  "step": 10,
  "tolerance": 10,
  "markers": [
    {
      "id": "m1",
      "label": "Break-even quantity",
      "targetValue": 200
    }
  ],
  "hints": [
    "Contribution per unit: $8 - 5 = 3$€.",
    "$600 / 3$."
  ],
  "explanation": "$q^* = 600/3 = 200$ units. The number line is the firm’s runway: everything left of 200 burns cash."
}
```

**Key fields:** `min`, `max`, `step`, `tolerance`, `markers`, `hints`, `explanation`

---

### `hotspot_image`

Tap the correct region on an image. Hotspot coordinates are normalized (0-1).

```json
{
  "type": "hotspot_image",
  "question": "Tap the region of the cell where the nucleus is located.",
  "imageUrl": "https://example.com/cell-diagram.png",
  "imageAspectRatio": 1.33,
  "hotspots": [
    {
      "id": "h1",
      "label": "Nucleus",
      "left": 0.35,
      "top": 0.3,
      "width": 0.3,
      "height": 0.4
    },
    {
      "id": "h2",
      "label": "Mitochondria",
      "left": 0.7,
      "top": 0.5,
      "width": 0.15,
      "height": 0.2
    },
    {
      "id": "h3",
      "label": "Cell membrane",
      "left": 0,
      "top": 0,
      "width": 1,
      "height": 1
    }
  ],
  "correctHotspotId": "h1",
  "explanation": "The nucleus is the large, centrally located organelle that contains the cell's DNA."
}
```

**Key fields:** `imageUrl`, `imageAspectRatio`, `hotspots`, `correctHotspotId`, `explanation`

---

### `diagram_labeling`

Assign labels to anchor points on a diagram.

```json
{
  "type": "diagram_labeling",
  "question": "Label the essential components of the eukaryotic cell diagram.",
  "imageAsset": "procedural",
  "renderVariant": "variant_b",
  "imageAspectRatio": 1.2,
  "anchors": [
    {
      "id": "nuc",
      "left": 0.5,
      "top": 0.5,
      "label": "1"
    },
    {
      "id": "mem",
      "left": 0.2,
      "top": 0.2,
      "label": "2"
    },
    {
      "id": "mit",
      "left": 0.8,
      "top": 0.7,
      "label": "3"
    }
  ],
  "labels": [
    {
      "id": "L1",
      "text": "Nucleus"
    },
    {
      "id": "L2",
      "text": "Plasma Membrane"
    },
    {
      "id": "L3",
      "text": "Mitochondria"
    }
  ],
  "correctAssignments": {
    "L1": "nuc",
    "L2": "mem",
    "L3": "mit"
  },
  "explanation": "The nucleus houses the genome, the membrane defines the boundary, and mitochondria produce ATP."
}
```

**Key fields:** `imageAsset`, `renderVariant`, `imageAspectRatio`, `anchors`, `labels`, `correctAssignments`, `explanation`

---

### `coordinate_plot`

Choose the correct curve from a set of plotted options.

```json
{
  "type": "coordinate_plot",
  "question": "Which curve represents $y = x^2$?",
  "minX": -5,
  "maxX": 5,
  "minY": -5,
  "maxY": 25,
  "curves": [
    {
      "id": "c1",
      "label": "y = x²",
      "sampleY": [
        25,
        16,
        9,
        4,
        1,
        0,
        1,
        4,
        9,
        16,
        25
      ],
      "isCorrect": true
    },
    {
      "id": "c2",
      "label": "y = 2x",
      "sampleY": [
        -10,
        -8,
        -6,
        -4,
        -2,
        0,
        2,
        4,
        6,
        8,
        10
      ],
      "isCorrect": false
    },
    {
      "id": "c3",
      "label": "y = x³",
      "sampleY": [
        -125,
        -64,
        -27,
        -8,
        -1,
        0,
        1,
        8,
        27,
        64,
        125
      ],
      "isCorrect": false
    }
  ],
  "explanation": "The parabola $y = x^2$ is symmetric about the y-axis and opens upward."
}
```

**Key fields:** `minX`, `maxX`, `minY`, `maxY`, `curves`, `explanation`

---

### `formula_builder`

Build a formula by arranging tokens. `correctOrder` gives the right sequence.

```json
{
  "type": "formula_builder",
  "question": "Build the **expenditure formula for GDP**: arrange the components in their standard order.",
  "tokens": [
    "C",
    "+ I",
    "+ G",
    "+ NX"
  ],
  "correctOrder": [
    0,
    1,
    2,
    3
  ],
  "hints": [
    "Start with households’ spending.",
    "Consumption, investment, government, and what foreigners buy net of what we import."
  ],
  "explanation": "$GDP = C + I + G + NX$: households consume, firms invest, government purchases, and net exports capture the border. Every euro of final spending lands in exactly one bucket."
}
```

**Key fields:** `tokens`, `correctOrder`, `hints`, `explanation`

---

### `unit_conversion`

Convert between units using given conversion factors.

```json
{
  "type": "unit_conversion",
  "question": "Under the gold standard, the French franc was defined as **0.2903 grams of gold** and the British pound as **7.322 grams**. Convert **100 francs** to the gold-standard equivalents.",
  "expectedBaseValue": 100,
  "unitFactors": {
    "francs": 1,
    "grams of gold": 3.4448,
    "pounds": 25.22
  },
  "unitChoices": [
    "francs",
    "grams of gold",
    "pounds"
  ],
  "tolerance": 0.05,
  "givens": [
    "100 French francs at gold parity"
  ],
  "resultLabel": "Value",
  "hints": [
    "100 francs = $100 \\times 0.2903$ grams of gold.",
    "$29.03 / 7.322 \\approx 3.97$ pounds."
  ],
  "explanation": "100 francs = 29.03 grams of gold = 3.97 pounds. The gold content of each currency defined the exchange rate — no negotiation, no floating."
}
```

**Key fields:** `expectedBaseValue`, `unitFactors`, `unitChoices`, `tolerance`, `givens`, `resultLabel`, `hints`, `explanation`

---

### `venn_diagram`

Sort items into Venn diagram regions: A-only, B-only, both, or neither.

```json
{
  "type": "venn_diagram",
  "question": "Sort each firm by which conditions it meets.",
  "setALabel": "Is an SME",
  "setBLabel": "Has limited liability",
  "items": [
    {
      "id": "i1",
      "label": "S.L. with 30 employees"
    },
    {
      "id": "i2",
      "label": "Sole proprietor, 3 employees"
    },
    {
      "id": "i3",
      "label": "S.A. with 5,000 employees"
    },
    {
      "id": "i4",
      "label": "Partnership of 400 partners with unlimited liability"
    }
  ],
  "correctMapping": {
    "i1": "both",
    "i2": "a_only",
    "i3": "b_only",
    "i4": "neither"
  },
  "hints": [
    "Size and legal form are independent axes — check each separately.",
    "SME means under 250 employees; limited liability comes from the incorporated forms."
  ],
  "explanation": "The two classifications cross freely: a tiny firm can have unlimited liability, and a giant corporation always has it. That independence is the point of the four-axis scheme."
}
```

**Key fields:** `setALabel`, `setBLabel`, `items`, `correctMapping`, `hints`, `explanation`

---

### `error_highlight`

Identify incorrect tokens in a passage. `incorrectTokenIds` lists which tokens are wrong.

```json
{
  "type": "error_highlight",
  "question": "A student computes a café’s value added. Highlight the incorrect step.",
  "tokens": [
    {
      "id": "t1",
      "text": "Annual revenue from coffee sales: 200,000€. "
    },
    {
      "id": "t2",
      "text": "Purchases of beans, milk, and cups from suppliers: 80,000€. "
    },
    {
      "id": "t3",
      "text": "Value added = 200,000 − 80,000 = 120,000€. "
    },
    {
      "id": "t4",
      "text": "Therefore the café’s profit is 120,000€."
    }
  ],
  "incorrectTokenIds": [
    "t4"
  ],
  "explanation": "Value added is not profit: out of the 120,000€ the café still pays wages, rent, and interest. Profit is what remains after *all* factor payments, not just intermediate inputs."
}
```

**Key fields:** `tokens`, `incorrectTokenIds`, `explanation`

---

### `table_completion`

Fill missing cells (marked `___`) in a table.

```json
{
  "type": "table_completion",
  "question": "Complete the table of byte values. Write the hexadecimal entries using capital letters and no prefix.",
  "rows": [
    [
      {
        "content": "00001111"
      },
      {
        "content": "15"
      },
      {
        "content": "___"
      }
    ],
    [
      {
        "content": "10000000"
      },
      {
        "content": "___"
      },
      {
        "content": "80"
      }
    ],
    [
      {
        "content": "11111111"
      },
      {
        "content": "___"
      },
      {
        "content": "___"
      }
    ]
  ],
  "headers": [
    "Byte",
    "Decimal",
    "Hexadecimal"
  ],
  "answers": [
    "0F",
    "128",
    "255",
    "FF"
  ],
  "hints": [
    "For the hex column, split each byte into two groups of four bits.",
    "For the decimal column, add the place values 128, 64, 32, 16, 8, 4, 2, 1 wherever a 1 appears."
  ],
  "explanation": "00001111 is 0000 and 1111, so 0 and F, and 8 + 4 + 2 + 1 = 15. 10000000 has only the 128 column set. 11111111 sets every column, giving 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255, which is FF — the largest value one byte can hold."
}
```

**Key fields:** `rows`, `headers`, `answers`, `hints`, `explanation`

---

### `memory_pairs`

Memory card game — find matching pairs by flipping cards.

```json
{
  "type": "memory_pairs",
  "question": "Match each concept to its definition.",
  "pairs": [
    {
      "left": "Value added",
      "right": "Revenue minus intermediate inputs"
    },
    {
      "left": "Transaction cost",
      "right": "Cost of arranging a market exchange"
    },
    {
      "left": "Production factors",
      "right": "Land, labor, and capital"
    },
    {
      "left": "Entrepreneur",
      "right": "Coordinates factors and bears the risk"
    }
  ],
  "explanation": "These four terms are the vocabulary of the theory of the firm."
}
```

**Key fields:** `pairs`, `explanation`

---

### `category_sort`

Drag items into the correct category bucket.

```json
{
  "type": "category_sort",
  "question": "Sort each item: is it an **intermediate input** the firm buys, or **value the firm adds**?",
  "categories": [
    "Intermediate input",
    "Value added by the firm"
  ],
  "items": [
    {
      "id": "u01l01q03_i0",
      "label": "Flour bought from the mill",
      "correctCategory": "Intermediate input"
    },
    {
      "id": "u01l01q03_i1",
      "label": "The baker’s kneading skill",
      "correctCategory": "Value added by the firm"
    },
    {
      "id": "u01l01q03_i2",
      "label": "Electricity from the grid",
      "correctCategory": "Intermediate input"
    },
    {
      "id": "u01l01q03_i3",
      "label": "The recipe perfected in-house",
      "correctCategory": "Value added by the firm"
    },
    {
      "id": "u01l01q03_i4",
      "label": "Packaging bought wholesale",
      "correctCategory": "Intermediate input"
    },
    {
      "id": "u01l01q03_i5",
      "label": "The brand customers trust",
      "correctCategory": "Value added by the firm"
    }
  ],
  "explanation": "Everything purchased from other firms is an intermediate input; skill, know-how, and reputation are how the firm transforms those inputs into something worth more."
}
```

**Key fields:** `categories`, `items`, `explanation`

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
  "question": "Order the entrepreneurial process from first step to last.",
  "events": [
    {
      "id": "e1",
      "label": "Spot an unserved need in the market",
      "correctPosition": 0
    },
    {
      "id": "e2",
      "label": "Design a product and business model to serve it",
      "correctPosition": 1
    },
    {
      "id": "e3",
      "label": "Commit resources: hire, rent, and invest",
      "correctPosition": 2
    },
    {
      "id": "e4",
      "label": "Launch and face uncertain market response",
      "correctPosition": 3
    },
    {
      "id": "e5",
      "label": "Earn profit or absorb the loss",
      "correctPosition": 4
    }
  ],
  "explanation": "Discovery → design → commitment → uncertain launch → residual reward: Kirzner at the start, Knight at the end."
}
```

**Key fields:** `events`, `explanation`

---

### `word_search`

Find hidden words in a letter grid. `grid` is a 2D array of characters.

```json
{
  "type": "word_search",
  "question": "Find five key terms from the theory of the firm.",
  "gridSize": 12,
  "grid": [
    [
      "K",
      "K",
      "F",
      "T",
      "S",
      "X",
      "V",
      "Z",
      "D",
      "F",
      "W",
      "W"
    ],
    [
      "B",
      "V",
      "C",
      "K",
      "Y",
      "M",
      "C",
      "S",
      "A",
      "S",
      "V",
      "Q"
    ],
    [
      "Q",
      "P",
      "A",
      "O",
      "G",
      "Z",
      "F",
      "S",
      "H",
      "S",
      "A",
      "Y"
    ],
    [
      "G",
      "O",
      "W",
      "L",
      "A",
      "T",
      "D",
      "I",
      "V",
      "Z",
      "O",
      "B"
    ],
    [
      "W",
      "A",
      "O",
      "M",
      "U",
      "S",
      "A",
      "L",
      "R",
      "H",
      "S",
      "V"
    ],
    [
      "N",
      "C",
      "S",
      "J",
      "W",
      "E",
      "E",
      "W",
      "J",
      "M",
      "D",
      "Q"
    ],
    [
      "F",
      "Q",
      "J",
      "Q",
      "H",
      "O",
      "B",
      "E",
      "A",
      "J",
      "P",
      "U"
    ],
    [
      "X",
      "P",
      "U",
      "M",
      "A",
      "R",
      "K",
      "E",
      "T",
      "Z",
      "F",
      "I"
    ],
    [
      "Y",
      "D",
      "P",
      "R",
      "M",
      "I",
      "N",
      "P",
      "U",
      "T",
      "S",
      "E"
    ],
    [
      "P",
      "B",
      "R",
      "D",
      "M",
      "D",
      "J",
      "O",
      "K",
      "P",
      "D",
      "O"
    ],
    [
      "V",
      "L",
      "U",
      "A",
      "U",
      "Z",
      "U",
      "K",
      "D",
      "P",
      "Y",
      "P"
    ],
    [
      "Y",
      "J",
      "S",
      "A",
      "B",
      "F",
      "T",
      "N",
      "G",
      "W",
      "S",
      "E"
    ]
  ],
  "wordsToFind": [
    "FIRM",
    "VALUE",
    "COASE",
    "INPUTS",
    "MARKET"
  ],
  "definitions": {
    "FIRM": "Organization that coordinates production factors.",
    "VALUE": "What the firm adds on top of its purchased inputs.",
    "COASE": "Economist who explained why firms exist.",
    "INPUTS": "Resources transformed into output.",
    "MARKET": "The alternative to organizing production inside a firm."
  },
  "explanation": "These five words anchor the lesson: Coase explained when the firm beats the market at coordinating inputs into value."
}
```

**Key fields:** `gridSize`, `grid`, `wordsToFind`, `definitions`, `explanation`

---

### `crossword`

Fill crossword answers from clues. Clues have direction, position, and answer.

```json
{
  "type": "crossword",
  "question": "Solve the crossword on firm classification.",
  "gridRows": 12,
  "gridCols": 14,
  "clues": [
    {
      "direction": "across",
      "answer": "LIABILITY",
      "startRow": 6,
      "startCol": 2,
      "number": 1,
      "clue": "What \"limited\" limits in an S.L."
    },
    {
      "direction": "down",
      "answer": "SHARES",
      "startRow": 4,
      "startCol": 4,
      "number": 2,
      "clue": "Freely transferable units of S.A. capital."
    },
    {
      "direction": "down",
      "answer": "SECTOR",
      "startRow": 3,
      "startCol": 9,
      "number": 3,
      "clue": "Primary, secondary, or tertiary."
    },
    {
      "direction": "down",
      "answer": "MICRO",
      "startRow": 5,
      "startCol": 6,
      "number": 4,
      "clue": "Size class of a firm with fewer than 10 employees."
    }
  ],
  "explanation": "Size, sector, ownership, and legal form — with liability as the sharpest legal consequence."
}
```

**Key fields:** `gridRows`, `gridCols`, `clues`, `explanation`

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

## STEM

### `code_snippet`

Fill in blanks in a code template. `bank` provides draggable options per blank.

```json
{
  "type": "code_snippet",
  "question": "Complete this Python NPV calculator for cash flows [−100, 60, 60] at r = 0.10, then predict the sign of the result.",
  "language": "python",
  "codeTemplate": "r = 0.10\ncash_flows = [-100, 60, 60]\nnpv = 0\nfor t, cf in enumerate(cash_flows):\n    npv += cf / (1 + r) ** {{0}}\nprint(npv > 0)   # prints {{1}}",
  "blanks": [
    "t",
    "True"
  ],
  "bank": [
    "t",
    "r",
    "2",
    "True",
    "False",
    "cf"
  ],
  "explanation": "Each cash flow is discounted by $(1+r)^t$ using its own year index; t=0 leaves the outlay undiscounted. NPV ≈ +4.1 > 0, so it prints True."
}
```

**Key fields:** `language`, `codeTemplate`, `blanks`, `bank`, `explanation`

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
  "question": "A bakery tracked monthly output and total cost. Analyse the cost structure.",
  "columns": [
    {
      "id": "q",
      "label": "Output (thousand loaves)"
    },
    {
      "id": "tc",
      "label": "Total cost (k€)"
    }
  ],
  "dataRows": [
    {
      "q": 1,
      "tc": 7
    },
    {
      "q": 2,
      "tc": 9
    },
    {
      "q": 3,
      "tc": 11
    },
    {
      "q": 4,
      "tc": 13
    },
    {
      "q": 5,
      "tc": 15
    }
  ],
  "tasks": [
    {
      "id": "task_mean",
      "description": "Compute the mean total cost across the five months (k€)",
      "operation": "mean",
      "targetColumnId": "tc",
      "correctValue": 11,
      "tolerance": 0.05
    },
    {
      "id": "task_range",
      "description": "Compute the range of total cost (k€)",
      "operation": "range",
      "targetColumnId": "tc",
      "correctValue": 8,
      "tolerance": 0.05
    }
  ],
  "hints": [
    "Mean: sum the five costs, divide by five.",
    "Range: highest minus lowest."
  ],
  "explanation": "Cost rises by a constant 2k€ per extra thousand loaves — marginal cost 2€/loaf — and extrapolating back to zero output leaves 5k€ of fixed cost. A linear cost table quietly reveals the whole structure."
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

Fill in the output column of a logic truth table for a given `expression`.

```json
{
  "type": "truth_table",
  "question": "Art. 1902 imposes liability only when **fault (F)**, **damage (D)**, and **causation (C)** all concur. Complete the liability column.",
  "variables": [
    "F",
    "D",
    "C"
  ],
  "expression": "F AND D AND C",
  "inputRows": [
    [
      true,
      true,
      true
    ],
    [
      true,
      true,
      false
    ],
    [
      true,
      false,
      true
    ],
    [
      false,
      true,
      true
    ]
  ],
  "correctOutputs": [
    true,
    false,
    false,
    false
  ],
  "explanation": "The elements work in series, not parallel: negligence without causation (row 2), carelessness that harmed nobody (row 3), and harm without fault (row 4) all output *no liability*. Only the full conjunction pays."
}
```

**Key fields:** `variables`, `expression`, `inputRows`, `correctOutputs`, `explanation`

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

Determine the outputs of a logic gate circuit given inputs.

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
  "question": "A deal creates **90M€ of synergy** (left pan). Select the acquirer’s costs for the right pan that exactly consume it — showing a deal that only breaks even.",
  "fixedLeft": [
    {
      "id": "L1",
      "label": "Synergy 90M€",
      "weight": 90
    }
  ],
  "availableItems": [
    {
      "id": "w1",
      "label": "Premium 60M€",
      "weight": 60
    },
    {
      "id": "w2",
      "label": "Integration costs 30M€",
      "weight": 30
    },
    {
      "id": "w3",
      "label": "Advisory fees 15M€",
      "weight": 15
    },
    {
      "id": "w4",
      "label": "Rebranding 45M€",
      "weight": 45
    },
    {
      "id": "w5",
      "label": "Severance 75M€",
      "weight": 75
    }
  ],
  "targetWeight": 90,
  "hints": [
    "The scale balances when acquirer costs sum to the full 90M€ synergy.",
    "Several combinations reach 90 — any of them means zero value created."
  ],
  "explanation": "When premium plus integration costs weigh as much as the synergy, the acquirer keeps nothing — balance here means break-even, and anything heavier on the right is value destruction."
}
```

**Key fields:** `fixedLeft`, `availableItems`, `targetWeight`, `hints`, `explanation`

---

### `probability_spinner`

Adjust pie-chart section sizes to match target probabilities.

```json
{
  "type": "probability_spinner",
  "question": "In a mobility study, children born in the **bottom quintile** have these destination chances. **Set the spinner**: 35% stay at the bottom, the rest escape it.",
  "sections": [
    {
      "label": "Stay in bottom quintile",
      "correctFraction": 0.35
    },
    {
      "label": "Move up and out",
      "correctFraction": 0.65
    }
  ],
  "tolerance": 0.05,
  "hints": [
    "Perfect fluidity would mean 20% stay.",
    "Here the floor is sticky: 35 stays, 65 escapes."
  ],
  "explanation": "Under pure fluidity a bottom-quintile child would stay with probability 20% — one quintile among five. The observed 35% is nearly double: the sticky floor made visible as a spinner slice."
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

Set a thermometer slider to a target temperature.

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
  "question": "A firm has fixed costs of 100 and constant unit variable cost of 2. Which graph shows its **total cost** $TC(q) = 100 + 2q$?",
  "equation": "$TC(q) = FC + v \\cdot q$",
  "parameters": [
    {
      "id": "v",
      "min": 0,
      "max": 10,
      "correct": 2
    }
  ],
  "minX": 0,
  "maxX": 100,
  "minY": 0,
  "maxY": 400,
  "series": [
    {
      "id": "A",
      "label": "A",
      "isCorrect": true,
      "points": [
        {
          "x": 0,
          "y": 100
        },
        {
          "x": 2,
          "y": 104
        },
        {
          "x": 4,
          "y": 108
        },
        {
          "x": 6,
          "y": 112
        },
        {
          "x": 8,
          "y": 116
        },
        {
          "x": 10,
          "y": 120
        },
        {
          "x": 12,
          "y": 124
        },
        {
          "x": 14,
          "y": 128
        },
        {
          "x": 16,
          "y": 132
        },
        {
          "x": 18,
          "y": 136
        },
        {
          "x": 20,
          "y": 140
        },
        {
          "x": 22,
          "y": 144
        },
        {
          "x": 24,
          "y": 148
        },
        {
          "x": 26,
          "y": 152
        },
        {
          "x": 28,
          "y": 156
        },
        {
          "x": 30,
          "y": 160
        },
        {
          "x": 32,
          "y": 164
        },
        {
          "x": 34,
          "y": 168
        },
        {
          "x": 36,
          "y": 172
        },
        {
          "x": 38,
          "y": 176
        },
        {
          "x": 40,
          "y": 180
        },
        {
          "x": 42,
          "y": 184
        },
        {
          "x": 44,
          "y": 188
        },
        {
          "x": 46,
          "y": 192
        },
        {
          "x": 48,
          "y": 196
        },
        {
          "x": 50,
          "y": 200
        },
        {
          "x": 52,
          "y": 204
        },
        {
          "x": 54,
          "y": 208
        },
        {
          "x": 56,
          "y": 212
        },
        {
          "x": 58,
          "y": 216
        },
        {
          "x": 60,
          "y": 220
        },
        {
          "x": 62,
          "y": 224
        },
        {
          "x": 64,
          "y": 228
        },
        {
          "x": 66,
          "y": 232
        },
        {
          "x": 68,
          "y": 236
        },
        {
          "x": 70,
          "y": 240
        },
        {
          "x": 72,
          "y": 244
        },
        {
          "x": 74,
          "y": 248
        },
        {
          "x": 76,
          "y": 252
        },
        {
          "x": 78,
          "y": 256
        },
        {
          "x": 80,
          "y": 260
        },
        {
          "x": 82,
          "y": 264
        },
        {
          "x": 84,
          "y": 268
        },
        {
          "x": 86,
          "y": 272
        },
        {
          "x": 88,
          "y": 276
        },
        {
          "x": 90,
          "y": 280
        },
        {
          "x": 92,
          "y": 284
        },
        {
          "x": 94,
          "y": 288
        },
        {
          "x": 96,
          "y": 292
        },
        {
          "x": 98,
          "y": 296
        },
        {
          "x": 100,
          "y": 300
        }
      ]
    },
    {
      "id": "B",
      "label": "B",
      "isCorrect": false,
      "points": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 6,
          "y": 12
        },
        {
          "x": 8,
          "y": 16
        },
        {
          "x": 10,
          "y": 20
        },
        {
          "x": 12,
          "y": 24
        },
        {
          "x": 14,
          "y": 28
        },
        {
          "x": 16,
          "y": 32
        },
        {
          "x": 18,
          "y": 36
        },
        {
          "x": 20,
          "y": 40
        },
        {
          "x": 22,
          "y": 44
        },
        {
          "x": 24,
          "y": 48
        },
        {
          "x": 26,
          "y": 52
        },
        {
          "x": 28,
          "y": 56
        },
        {
          "x": 30,
          "y": 60
        },
        {
          "x": 32,
          "y": 64
        },
        {
          "x": 34,
          "y": 68
        },
        {
          "x": 36,
          "y": 72
        },
        {
          "x": 38,
          "y": 76
        },
        {
          "x": 40,
          "y": 80
        },
        {
          "x": 42,
          "y": 84
        },
        {
          "x": 44,
          "y": 88
        },
        {
          "x": 46,
          "y": 92
        },
        {
          "x": 48,
          "y": 96
        },
        {
          "x": 50,
          "y": 100
        },
        {
          "x": 52,
          "y": 104
        },
        {
          "x": 54,
          "y": 108
        },
        {
          "x": 56,
          "y": 112
        },
        {
          "x": 58,
          "y": 116
        },
        {
          "x": 60,
          "y": 120
        },
        {
          "x": 62,
          "y": 124
        },
        {
          "x": 64,
          "y": 128
        },
        {
          "x": 66,
          "y": 132
        },
        {
          "x": 68,
          "y": 136
        },
        {
          "x": 70,
          "y": 140
        },
        {
          "x": 72,
          "y": 144
        },
        {
          "x": 74,
          "y": 148
        },
        {
          "x": 76,
          "y": 152
        },
        {
          "x": 78,
          "y": 156
        },
        {
          "x": 80,
          "y": 160
        },
        {
          "x": 82,
          "y": 164
        },
        {
          "x": 84,
          "y": 168
        },
        {
          "x": 86,
          "y": 172
        },
        {
          "x": 88,
          "y": 176
        },
        {
          "x": 90,
          "y": 180
        },
        {
          "x": 92,
          "y": 184
        },
        {
          "x": 94,
          "y": 188
        },
        {
          "x": 96,
          "y": 192
        },
        {
          "x": 98,
          "y": 196
        },
        {
          "x": 100,
          "y": 200
        }
      ]
    },
    {
      "id": "C",
      "label": "C",
      "isCorrect": false,
      "points": [
        {
          "x": 0,
          "y": 100
        },
        {
          "x": 2,
          "y": 100.08
        },
        {
          "x": 4,
          "y": 100.32
        },
        {
          "x": 6,
          "y": 100.72
        },
        {
          "x": 8,
          "y": 101.28
        },
        {
          "x": 10,
          "y": 102
        },
        {
          "x": 12,
          "y": 102.88
        },
        {
          "x": 14,
          "y": 103.92
        },
        {
          "x": 16,
          "y": 105.12
        },
        {
          "x": 18,
          "y": 106.48
        },
        {
          "x": 20,
          "y": 108
        },
        {
          "x": 22,
          "y": 109.68
        },
        {
          "x": 24,
          "y": 111.52
        },
        {
          "x": 26,
          "y": 113.52
        },
        {
          "x": 28,
          "y": 115.68
        },
        {
          "x": 30,
          "y": 118
        },
        {
          "x": 32,
          "y": 120.48
        },
        {
          "x": 34,
          "y": 123.12
        },
        {
          "x": 36,
          "y": 125.92
        },
        {
          "x": 38,
          "y": 128.88
        },
        {
          "x": 40,
          "y": 132
        },
        {
          "x": 42,
          "y": 135.28
        },
        {
          "x": 44,
          "y": 138.72
        },
        {
          "x": 46,
          "y": 142.32
        },
        {
          "x": 48,
          "y": 146.08
        },
        {
          "x": 50,
          "y": 150
        },
        {
          "x": 52,
          "y": 154.08
        },
        {
          "x": 54,
          "y": 158.32
        },
        {
          "x": 56,
          "y": 162.72
        },
        {
          "x": 58,
          "y": 167.28
        },
        {
          "x": 60,
          "y": 172
        },
        {
          "x": 62,
          "y": 176.88
        },
        {
          "x": 64,
          "y": 181.92
        },
        {
          "x": 66,
          "y": 187.12
        },
        {
          "x": 68,
          "y": 192.48
        },
        {
          "x": 70,
          "y": 198
        },
        {
          "x": 72,
          "y": 203.68
        },
        {
          "x": 74,
          "y": 209.52
        },
        {
          "x": 76,
          "y": 215.52
        },
        {
          "x": 78,
          "y": 221.68
        },
        {
          "x": 80,
          "y": 228
        },
        {
          "x": 82,
          "y": 234.48
        },
        {
          "x": 84,
          "y": 241.12
        },
        {
          "x": 86,
          "y": 247.92
        },
        {
          "x": 88,
          "y": 254.88
        },
        {
          "x": 90,
          "y": 262
        },
        {
          "x": 92,
          "y": 269.28
        },
        {
          "x": 94,
          "y": 276.72
        },
        {
          "x": 96,
          "y": 284.32
        },
        {
          "x": 98,
          "y": 292.08
        },
        {
          "x": 100,
          "y": 300
        }
      ]
    }
  ],
  "explanation": "Total cost starts at the fixed cost (intercept 100) and climbs at the constant variable rate (slope 2). Curve B forgets the fixed cost; curve C makes marginal cost rise."
}
```

**Key fields:** `equation`, `parameters`, `minX`, `maxX`, `minY`, `maxY`, `series`, `explanation`

---

### `graph_identification`

Choose the correct graph from multiple options.

```json
{
  "type": "graph_identification",
  "question": "Which graph shows **average total cost** falling as output spreads fixed costs — economies of scale?",
  "minX": 1,
  "maxX": 50,
  "minY": 0,
  "maxY": 60,
  "options": [
    {
      "id": "A",
      "label": "Graph A",
      "isCorrect": true,
      "points": [
        {
          "x": 1,
          "y": 104
        },
        {
          "x": 2,
          "y": 54
        },
        {
          "x": 3,
          "y": 37.33
        },
        {
          "x": 4,
          "y": 29
        },
        {
          "x": 5,
          "y": 24
        },
        {
          "x": 6,
          "y": 20.67
        },
        {
          "x": 7,
          "y": 18.29
        },
        {
          "x": 8,
          "y": 16.5
        },
        {
          "x": 9,
          "y": 15.11
        },
        {
          "x": 10,
          "y": 14
        },
        {
          "x": 11,
          "y": 13.09
        },
        {
          "x": 12,
          "y": 12.33
        },
        {
          "x": 13,
          "y": 11.69
        },
        {
          "x": 14,
          "y": 11.14
        },
        {
          "x": 15,
          "y": 10.67
        },
        {
          "x": 16,
          "y": 10.25
        },
        {
          "x": 17,
          "y": 9.88
        },
        {
          "x": 18,
          "y": 9.56
        },
        {
          "x": 19,
          "y": 9.26
        },
        {
          "x": 20,
          "y": 9
        },
        {
          "x": 21,
          "y": 8.76
        },
        {
          "x": 22,
          "y": 8.55
        },
        {
          "x": 23,
          "y": 8.35
        },
        {
          "x": 24,
          "y": 8.17
        },
        {
          "x": 25,
          "y": 8
        },
        {
          "x": 26,
          "y": 7.85
        },
        {
          "x": 27,
          "y": 7.7
        },
        {
          "x": 28,
          "y": 7.57
        },
        {
          "x": 29,
          "y": 7.45
        },
        {
          "x": 30,
          "y": 7.33
        },
        {
          "x": 31,
          "y": 7.23
        },
        {
          "x": 32,
          "y": 7.13
        },
        {
          "x": 33,
          "y": 7.03
        },
        {
          "x": 34,
          "y": 6.94
        },
        {
          "x": 35,
          "y": 6.86
        },
        {
          "x": 36,
          "y": 6.78
        },
        {
          "x": 37,
          "y": 6.7
        },
        {
          "x": 38,
          "y": 6.63
        },
        {
          "x": 39,
          "y": 6.56
        },
        {
          "x": 40,
          "y": 6.5
        },
        {
          "x": 41,
          "y": 6.44
        },
        {
          "x": 42,
          "y": 6.38
        },
        {
          "x": 43,
          "y": 6.33
        },
        {
          "x": 44,
          "y": 6.27
        },
        {
          "x": 45,
          "y": 6.22
        },
        {
          "x": 46,
          "y": 6.17
        },
        {
          "x": 47,
          "y": 6.13
        },
        {
          "x": 48,
          "y": 6.08
        },
        {
          "x": 49,
          "y": 6.04
        },
        {
          "x": 50,
          "y": 6
        }
      ]
    },
    {
      "id": "B",
      "label": "Graph B",
      "isCorrect": false,
      "points": [
        {
          "x": 1,
          "y": 4.8
        },
        {
          "x": 2,
          "y": 5.6
        },
        {
          "x": 3,
          "y": 6.4
        },
        {
          "x": 4,
          "y": 7.2
        },
        {
          "x": 5,
          "y": 8
        },
        {
          "x": 6,
          "y": 8.8
        },
        {
          "x": 7,
          "y": 9.6
        },
        {
          "x": 8,
          "y": 10.4
        },
        {
          "x": 9,
          "y": 11.2
        },
        {
          "x": 10,
          "y": 12
        },
        {
          "x": 11,
          "y": 12.8
        },
        {
          "x": 12,
          "y": 13.6
        },
        {
          "x": 13,
          "y": 14.4
        },
        {
          "x": 14,
          "y": 15.2
        },
        {
          "x": 15,
          "y": 16
        },
        {
          "x": 16,
          "y": 16.8
        },
        {
          "x": 17,
          "y": 17.6
        },
        {
          "x": 18,
          "y": 18.4
        },
        {
          "x": 19,
          "y": 19.2
        },
        {
          "x": 20,
          "y": 20
        },
        {
          "x": 21,
          "y": 20.8
        },
        {
          "x": 22,
          "y": 21.6
        },
        {
          "x": 23,
          "y": 22.4
        },
        {
          "x": 24,
          "y": 23.2
        },
        {
          "x": 25,
          "y": 24
        },
        {
          "x": 26,
          "y": 24.8
        },
        {
          "x": 27,
          "y": 25.6
        },
        {
          "x": 28,
          "y": 26.4
        },
        {
          "x": 29,
          "y": 27.2
        },
        {
          "x": 30,
          "y": 28
        },
        {
          "x": 31,
          "y": 28.8
        },
        {
          "x": 32,
          "y": 29.6
        },
        {
          "x": 33,
          "y": 30.4
        },
        {
          "x": 34,
          "y": 31.2
        },
        {
          "x": 35,
          "y": 32
        },
        {
          "x": 36,
          "y": 32.8
        },
        {
          "x": 37,
          "y": 33.6
        },
        {
          "x": 38,
          "y": 34.4
        },
        {
          "x": 39,
          "y": 35.2
        },
        {
          "x": 40,
          "y": 36
        },
        {
          "x": 41,
          "y": 36.8
        },
        {
          "x": 42,
          "y": 37.6
        },
        {
          "x": 43,
          "y": 38.4
        },
        {
          "x": 44,
          "y": 39.2
        },
        {
          "x": 45,
          "y": 40
        },
        {
          "x": 46,
          "y": 40.8
        },
        {
          "x": 47,
          "y": 41.6
        },
        {
          "x": 48,
          "y": 42.4
        },
        {
          "x": 49,
          "y": 43.2
        },
        {
          "x": 50,
          "y": 44
        }
      ]
    },
    {
      "id": "C",
      "label": "Graph C",
      "isCorrect": false,
      "points": [
        {
          "x": 1,
          "y": 20
        },
        {
          "x": 2,
          "y": 20
        },
        {
          "x": 3,
          "y": 20
        },
        {
          "x": 4,
          "y": 20
        },
        {
          "x": 5,
          "y": 20
        },
        {
          "x": 6,
          "y": 20
        },
        {
          "x": 7,
          "y": 20
        },
        {
          "x": 8,
          "y": 20
        },
        {
          "x": 9,
          "y": 20
        },
        {
          "x": 10,
          "y": 20
        },
        {
          "x": 11,
          "y": 20
        },
        {
          "x": 12,
          "y": 20
        },
        {
          "x": 13,
          "y": 20
        },
        {
          "x": 14,
          "y": 20
        },
        {
          "x": 15,
          "y": 20
        },
        {
          "x": 16,
          "y": 20
        },
        {
          "x": 17,
          "y": 20
        },
        {
          "x": 18,
          "y": 20
        },
        {
          "x": 19,
          "y": 20
        },
        {
          "x": 20,
          "y": 20
        },
        {
          "x": 21,
          "y": 20
        },
        {
          "x": 22,
          "y": 20
        },
        {
          "x": 23,
          "y": 20
        },
        {
          "x": 24,
          "y": 20
        },
        {
          "x": 25,
          "y": 20
        },
        {
          "x": 26,
          "y": 20
        },
        {
          "x": 27,
          "y": 20
        },
        {
          "x": 28,
          "y": 20
        },
        {
          "x": 29,
          "y": 20
        },
        {
          "x": 30,
          "y": 20
        },
        {
          "x": 31,
          "y": 20
        },
        {
          "x": 32,
          "y": 20
        },
        {
          "x": 33,
          "y": 20
        },
        {
          "x": 34,
          "y": 20
        },
        {
          "x": 35,
          "y": 20
        },
        {
          "x": 36,
          "y": 20
        },
        {
          "x": 37,
          "y": 20
        },
        {
          "x": 38,
          "y": 20
        },
        {
          "x": 39,
          "y": 20
        },
        {
          "x": 40,
          "y": 20
        },
        {
          "x": 41,
          "y": 20
        },
        {
          "x": 42,
          "y": 20
        },
        {
          "x": 43,
          "y": 20
        },
        {
          "x": 44,
          "y": 20
        },
        {
          "x": 45,
          "y": 20
        },
        {
          "x": 46,
          "y": 20
        },
        {
          "x": 47,
          "y": 20
        },
        {
          "x": 48,
          "y": 20
        },
        {
          "x": 49,
          "y": 20
        },
        {
          "x": 50,
          "y": 20
        }
      ]
    }
  ],
  "correctOptionId": "A",
  "explanation": "With $ATC = 100/q + 4$, the fixed-cost share $100/q$ shrinks as output grows — the falling curve of scale economies. B rises (diseconomies); C is flat (constant returns)."
}
```

**Key fields:** `minX`, `maxX`, `minY`, `maxY`, `options`, `correctOptionId`, `explanation`

---

### `coordinate_transform`

Apply a geometric transformation (translate, rotate, reflect) to coordinate points.

```json
{
  "type": "coordinate_transform",
  "question": "Translate the triangle 3 units right and 2 units up.",
  "originalPoints": [
    [
      1,
      1
    ],
    [
      4,
      1
    ],
    [
      2,
      3
    ]
  ],
  "transformationType": "translate",
  "transformParams": {
    "dx": 3,
    "dy": 2
  },
  "correctResult": [
    [
      4,
      3
    ],
    [
      7,
      3
    ],
    [
      5,
      5
    ]
  ],
  "tolerance": 0.5,
  "explanation": "Add (3,2) to each vertex: (1,1)→(4,3), (4,1)→(7,3), (2,3)→(5,5)."
}
```

**Key fields:** `originalPoints`, `transformationType`, `transformParams`, `correctResult`, `tolerance`, `explanation`

---

### `fraction_wall`

Select fraction bars from a wall that sum to a target fraction.

```json
{
  "type": "fraction_wall",
  "question": "Select fractions from the wall that add up to $\\frac{3}{4}$.",
  "targetNumerator": 3,
  "targetDenominator": 4,
  "availableFractions": [
    "1/2",
    "1/4",
    "1/8",
    "1/3",
    "1/6"
  ],
  "correctSelection": [
    "1/2",
    "1/4"
  ],
  "explanation": "$\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$."
}
```

**Key fields:** `targetNumerator`, `targetDenominator`, `availableFractions`, `correctSelection`, `explanation`

---

### `histogram_builder`

Distribute raw data points into bins to build a histogram.

```json
{
  "type": "histogram_builder",
  "question": "Build a histogram for these test scores.",
  "rawData": [
    45,
    52,
    67,
    72,
    78,
    81,
    85,
    91,
    93,
    55,
    63,
    74
  ],
  "binLabels": [
    "40-59",
    "60-79",
    "80-100"
  ],
  "correctCounts": [
    3,
    5,
    4
  ],
  "explanation": "Count how many scores fall in each range: 3 in 40-59, 5 in 60-79, 4 in 80-100."
}
```

**Key fields:** `rawData`, `binLabels`, `correctCounts`, `explanation`

---

### `tree_diagram`

Fill in missing probability labels on a tree diagram.

```json
{
  "type": "tree_diagram",
  "question": "Fill in the missing probabilities in this coin-toss tree.",
  "nodes": [
    {
      "id": "root",
      "label": "Start",
      "childIds": [
        "h",
        "t"
      ]
    },
    {
      "id": "h",
      "label": "Heads",
      "probability": 0.5,
      "childIds": [
        "hh",
        "ht"
      ]
    },
    {
      "id": "t",
      "label": "Tails",
      "probability": 0.5,
      "childIds": [
        "th",
        "tt"
      ]
    },
    {
      "id": "hh",
      "label": "HH",
      "childIds": []
    },
    {
      "id": "ht",
      "label": "HT",
      "childIds": []
    },
    {
      "id": "th",
      "label": "TH",
      "childIds": []
    },
    {
      "id": "tt",
      "label": "TT",
      "childIds": []
    }
  ],
  "correctProbabilities": {
    "hh": 0.25,
    "ht": 0.25,
    "th": 0.25,
    "tt": 0.25
  },
  "explanation": "Each branch has probability 0.5, so each leaf is 0.5 × 0.5 = 0.25."
}
```

**Key fields:** `nodes`, `correctProbabilities`, `explanation`

---

### `scale_drawing`

Apply a scale ratio to calculate new dimensions.

```json
{
  "type": "scale_drawing",
  "question": "A room is 8m × 5m. Draw it at scale 1:100. What are the dimensions in cm?",
  "originalDimensions": {
    "width": 800,
    "height": 500
  },
  "scaleRatio": "1:100",
  "correctScaled": {
    "width": 8,
    "height": 5
  },
  "tolerance": 0.1,
  "explanation": "Divide each dimension by 100: 800cm → 8cm, 500cm → 5cm."
}
```

**Key fields:** `originalDimensions`, `scaleRatio`, `correctScaled`, `tolerance`, `explanation`

---

## Arts & Creative

### `color_theory`

Mix RGB sliders to match a target color within `tolerance`.

```json
{
  "type": "color_theory",
  "question": "Mix the RGB sliders to create the color orange.",
  "targetR": 255,
  "targetG": 165,
  "targetB": 0,
  "tolerance": 25,
  "colorModel": "rgb",
  "explanation": "Orange is made by combining full red with moderate green and no blue."
}
```

**Key fields:** `targetR`, `targetG`, `targetB`, `tolerance`, `colorModel`, `explanation`

---

### `music_rhythm`

Compose a beat pattern on a multi-track grid. `correctPattern` is `[track][beat]`.

```json
{
  "type": "music_rhythm",
  "question": "Create a basic rock beat pattern.",
  "beats": 8,
  "tracks": [
    "Kick",
    "Snare",
    "Hi-hat"
  ],
  "correctPattern": [
    [
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false
    ],
    [
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false
    ],
    [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ]
  ],
  "bpm": 120,
  "explanation": "A basic rock beat has the kick on beats 1 and 3, snare on 2 and 4, and hi-hat on every eighth note."
}
```

**Key fields:** `beats`, `tracks`, `correctPattern`, `bpm`, `explanation`

---

### `music_interval`

Identify the musical interval between two notes.

```json
{
  "type": "music_interval",
  "question": "What is the interval between C4 and E4?",
  "note1": "C4",
  "note2": "E4",
  "correctInterval": "Major Third",
  "options": [
    "Minor Second",
    "Major Second",
    "Minor Third",
    "Major Third",
    "Perfect Fourth"
  ],
  "explanation": "C to E spans four semitones, which is a major third."
}
```

**Key fields:** `note1`, `note2`, `correctInterval`, `options`, `explanation`

---

### `pixel_art`

Paint a grid with a color palette to match a target pattern.

```json
{
  "type": "pixel_art",
  "question": "Paint the grid to create a smiley face.",
  "gridSize": 8,
  "palette": [
    "#FFFFFF",
    "#FFD700",
    "#000000"
  ],
  "targetPattern": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      2,
      0,
      0,
      0,
      0,
      2,
      0
    ],
    [
      0,
      0,
      2,
      0,
      0,
      2,
      0,
      0
    ],
    [
      0,
      0,
      0,
      2,
      2,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  ],
  "explanation": "The eyes are in rows 2-3 and the smile curves from row 5 to row 7."
}
```

**Key fields:** `gridSize`, `palette`, `targetPattern`, `explanation`

---

### `flag_builder`

Assign the correct colors to flag stripes.

```json
{
  "type": "flag_builder",
  "question": "Assign the correct colours to the French flag (left to right).",
  "flagName": "France",
  "stripes": [
    {
      "id": "Left stripe",
      "correctColor": "#002395"
    },
    {
      "id": "Middle stripe",
      "correctColor": "#FFFFFF"
    },
    {
      "id": "Right stripe",
      "correctColor": "#ED2939"
    }
  ],
  "colorPalette": [
    "#002395",
    "#FFFFFF",
    "#ED2939",
    "#000000"
  ],
  "explanation": "The French tricolour is blue, white, red from left to right."
}
```

**Key fields:** `flagName`, `stripes`, `colorPalette`, `explanation`

---

### `tangram`

Drag and rotate puzzle pieces on a grid to form a target shape.

```json
{
  "type": "tangram",
  "question": "Arrange the pieces to form a square.",
  "gridSize": 8,
  "targetShape": "square",
  "pieces": [
    {
      "id": "p1",
      "shape": "triangle_large",
      "correctRotation": 0,
      "correctCol": 0,
      "correctRow": 0
    },
    {
      "id": "p2",
      "shape": "triangle_large",
      "correctRotation": 180,
      "correctCol": 4,
      "correctRow": 4
    },
    {
      "id": "p3",
      "shape": "triangle_medium",
      "correctRotation": 90,
      "correctCol": 4,
      "correctRow": 0
    },
    {
      "id": "p4",
      "shape": "triangle_small",
      "correctRotation": 0,
      "correctCol": 2,
      "correctRow": 2
    },
    {
      "id": "p5",
      "shape": "square",
      "correctRotation": 45,
      "correctCol": 3,
      "correctRow": 3
    }
  ],
  "explanation": "The classic tangram square uses all seven pieces with no gaps."
}
```

**Key fields:** `gridSize`, `targetShape`, `pieces`, `explanation`

---

### `mirror_symmetry`

Complete the mirrored half of a grid pattern across an axis.

```json
{
  "type": "mirror_symmetry",
  "question": "Complete the pattern by filling in the mirror image across the vertical axis.",
  "gridSize": 8,
  "axisType": "vertical",
  "filledCells": [
    "0,1",
    "1,2",
    "2,3",
    "3,3"
  ],
  "correctMirror": [
    "0,6",
    "1,5",
    "2,4",
    "3,4"
  ],
  "explanation": "Reflect each filled cell across the center column."
}
```

**Key fields:** `gridSize`, `axisType`, `filledCells`, `correctMirror`, `explanation`

---

## Games & Puzzles

### `chess_puzzle`

Find the best move on a chess board (FEN position). `correctMove` uses algebraic notation.

```json
{
  "type": "chess_puzzle",
  "question": "White to move. Find the checkmate in one.",
  "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
  "correctMove": "h5f7",
  "acceptableMoves": [],
  "playerToMove": "white",
  "explanation": "Qxf7# — the queen captures on f7 with support from the bishop on c4, delivering checkmate (Scholar's Mate)."
}
```

**Key fields:** `fen`, `correctMove`, `acceptableMoves`, `playerToMove`, `explanation`

---

### `estimation_jar`

Estimate the quantity of items in a visual jar.

```json
{
  "type": "estimation_jar",
  "question": "How many marbles are in the jar?",
  "imageDescription": "A glass jar filled with coloured marbles",
  "correctValue": 84,
  "tolerance": 10,
  "unit": "marbles",
  "explanation": "There are 84 marbles. Estimating by layers: ~7 per layer × 12 layers."
}
```

**Key fields:** `imageDescription`, `correctValue`, `tolerance`, `unit`, `explanation`

---

### `clock_setting`

Set an analog clock to a target time.

```json
{
  "type": "clock_setting",
  "question": "Set the clock to show 3:45 PM.",
  "targetHour": 3,
  "targetMinute": 45,
  "is24Hour": false,
  "explanation": "At 3:45 the hour hand is three-quarters of the way between 3 and 4, and the minute hand points at 9."
}
```

**Key fields:** `targetHour`, `targetMinute`, `is24Hour`, `explanation`

---

### `ingredient_ratio`

Scale recipe ingredients by a `scaleFactor`.

```json
{
  "type": "ingredient_ratio",
  "question": "A recipe serves 4. Scale it to serve 6.",
  "ingredients": [
    {
      "id": "flour",
      "name": "Flour",
      "baseAmount": 200,
      "unit": "g"
    },
    {
      "id": "sugar",
      "name": "Sugar",
      "baseAmount": 100,
      "unit": "g"
    },
    {
      "id": "milk",
      "name": "Milk",
      "baseAmount": 250,
      "unit": "ml"
    }
  ],
  "scaleFactor": 1.5,
  "tolerance": 0.1,
  "explanation": "Multiply each amount by 1.5: 200g → 300g, 100g → 150g, 250ml → 375ml."
}
```

**Key fields:** `ingredients`, `scaleFactor`, `tolerance`, `explanation`

---

## AI-Graded

### `media_input`

Upload an image or file for AI evaluation. Used for visual/creative tasks.

```json
{
  "type": "media_input",
  "question": "Take a photo of a plant leaf and identify its venation pattern.",
  "correctAnswer": "The leaf shows parallel venation, typical of monocots.",
  "rubric": "Look for the arrangement of veins: parallel, pinnate, or palmate.",
  "acceptedFormats": [
    "jpg",
    "png"
  ],
  "maxFileSizeMB": 5,
  "hints": [
    "Focus on whether the veins run parallel or branch out from a central midrib."
  ]
}
```

**Key fields:** `correctAnswer`, `rubric`, `acceptedFormats`, `maxFileSizeMB`, `hints`

---

### `open_answer`

Free-text response graded by AI. `minWords`/`maxWords` set length bounds.

```json
{
  "type": "open_answer",
  "question": "Explain why the sky appears blue during the day.",
  "correctAnswer": "Rayleigh scattering causes shorter blue wavelengths to scatter more than longer red wavelengths.",
  "minWords": 30,
  "maxWords": 150,
  "rubric": "Should mention Rayleigh scattering and wavelength-dependent scattering.",
  "keywords": [
    "Rayleigh",
    "scattering",
    "wavelength",
    "blue"
  ],
  "hints": [
    "Think about what happens to sunlight as it enters the atmosphere."
  ]
}
```

**Key fields:** `correctAnswer`, `minWords`, `maxWords`, `rubric`, `keywords`, `hints`

---

### `speaking`

Spoken response with optional AI evaluation for fluency, grammar, pronunciation.

```json
{
  "type": "speaking",
  "question": "Describe your daily morning routine in Spanish.",
  "language": "es",
  "durationSeconds": 60,
  "keywords": [
    "despertarse",
    "desayunar",
    "ducharse"
  ],
  "expectedTopics": [
    "waking up",
    "breakfast",
    "getting ready"
  ],
  "sampleAnswer": "Me despierto a las siete, me ducho y desayuno cereales.",
  "hints": [
    "Use reflexive verbs for daily activities."
  ]
}
```

**Key fields:** `language`, `durationSeconds`, `keywords`, `expectedTopics`, `sampleAnswer`, `hints`

---

### `listening`

Listen to an audio clip and answer a comprehension question.

```json
{
  "type": "listening",
  "question": "Listen to the audio clip and select what the speaker is describing.",
  "language": "en",
  "audioUrl": "https://example.com/audio/description.mp3",
  "options": [
    "A sunset over the ocean",
    "A busy city street",
    "A quiet forest path"
  ],
  "correctAnswer": "A quiet forest path",
  "hints": [
    "Pay attention to the natural sounds mentioned."
  ]
}
```

**Key fields:** `language`, `audioUrl`, `options`, `correctAnswer`, `hints`

---

## Interactive Scenes

### `interactive_scene`

Custom visual scene — drag, manipulate, and explore to find the answer. Scene logic is server-side.

```json
{
  "type": "interactive_scene",
  "question": "A furniture maker buys wood for **40€** and sells a finished table for **150€**. Drag the value-added bar to show how much value the firm created — the split animates when you send.",
  "sceneId": "biz_u01_value_added",
  "sceneParams": {
    "inputCost": 40,
    "revenue": 150,
    "start": 60
  },
  "correctAnswer": {
    "v": 110
  },
  "tolerance": 5,
  "hints": [
    "Value added is what the firm layered on top of what it bought in.",
    "Revenue 150€ minus intermediate inputs 40€."
  ],
  "explanation": "Value added = $150 - 40 = 110$€: the wage, profit, rent, and interest the firm can pay out all come from this slice — not from the revenue total."
}
```

**Key fields:** `sceneId`, `sceneParams`, `correctAnswer`, `tolerance`, `hints`, `explanation`

---

## Type Aliases

Some types have multiple valid keys that map to the same implementation:

| Alias | Maps to |
|-------|---------|
| `code_editor`, `coding_snippet` | `code_snippet` |
| `element_select` | `periodic_table` |
| `function_sketch` | `graph_sketch` |
| `data_table` | `data_analysis` |
| `base_conversion` | `number_base` |
| `categorize` | `category_sort` |
| `timeline` | `timeline_ordering` |
| `text_annotation` | `annotation_text` |
| `maze_path` | `grid_path` |
| `color_mixing` | `color_theory` |
| `rhythm_pattern`, `beat_grid` | `music_rhythm` |
| `transformation` | `coordinate_transform` |
| `symmetry` | `mirror_symmetry` |
| `histogram` | `histogram_builder` |
| `flowchart` | `flow_chart` |
| `drag_drop` | `ordering` |
