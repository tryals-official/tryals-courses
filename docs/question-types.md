# Question Types

Tryals supports 70+ interactive question types. Each question's `type` field determines how it renders and how the answer is graded.

## General

| Type | Description |
|------|-------------|
| `multiple_choice` | Single-answer choice from options |
| `multi_select` | Multiple correct options (checkboxes) |
| `true_false` | Boolean question |
| `numerical_input` | Numeric answer with tolerance/range |
| `fill_blank` | Type in missing words |
| `cloze_bank` | Word-bank fill for multiple blanks |
| `matching` | Match left items to right items |
| `ordering` | Put items in the correct order |
| `drag_drop` | Alias for ordering-style draggable lists |
| `sentence_builder` | Build a sentence from word tokens |
| `matrix_grid` | One choice per row (grid/table) |
| `slider_estimate` | Estimate a value with a slider |
| `hotspot_image` | Tap the correct region on an image |
| `diagram_labeling` | Assign labels to anchor points |
| `coordinate_plot` | Select the correct curve on a plot |
| `formula_builder` | Build formulas from tokens |
| `unit_conversion` | Convert between measurement units |
| `venn_diagram` | Sort items into Venn diagram regions |
| `multi_slider_tuning` | Tune several sliders simultaneously |
| `error_highlight` | Mark incorrect tokens in a passage |
| `table_completion` | Fill missing cells in a table |
| `memory_pairs` | Memory card matching game |
| `category_sort` | Drag items into category buckets |
| `pattern_sequence` | Complete missing elements in a sequence |
| `timeline_ordering` | Order historical events chronologically |
| `word_search` | Find hidden words in a letter grid |
| `crossword` | Fill crossword clues on a grid |
| `annotation_text` | Select text spans and assign labels |

## STEM

| Type | Description |
|------|-------------|
| `code_snippet` | Code-writing with syntax highlighting |
| `periodic_table` | Select elements on a periodic table |
| `graph_sketch` | Sketch a function by placing points |
| `data_analysis` | Compute statistics from a data table |
| `number_base` | Convert numbers between bases |
| `truth_table` | Toggle boolean outputs in a logic table |
| `flow_chart` | Fill blank nodes in an algorithm flowchart |
| `logic_gate` | Determine outputs of logic gate circuits |
| `circuit_builder` | Connect circuit components |
| `resistor_color` | Pick color bands for a resistor value |
| `coordinate_transform` | Apply geometric transformations |
| `balance_scale` | Select weights to balance a scale |
| `fraction_wall` | Select fraction bars that sum to a target |

## Arts & Creative

| Type | Description |
|------|-------------|
| `color_theory` | Mix RGB sliders to match a target color |
| `music_rhythm` | Compose a beat pattern on a multi-track grid |
| `music_interval` | Identify the interval between notes |
| `pixel_art` | Paint a grid with a color palette |
| `flag_builder` | Assign colors to flag stripes |
| `tangram` | Drag and snap puzzle pieces on a grid |
| `mirror_symmetry` | Complete the mirrored half of a pattern |

## Games & Puzzles

| Type | Description |
|------|-------------|
| `chess_puzzle` | Select a chess move on a FEN board |
| `grid_path` | Navigate a grid maze from start to end |
| `estimation_jar` | Estimate quantity in a visual jar |
| `clock_setting` | Set an analog clock to a target time |
| `thermometer_reading` | Set a thermometer to a target temperature |
| `probability_spinner` | Adjust pie-chart sliders to match probabilities |
| `histogram_builder` | Build a histogram by assigning data to bins |
| `tree_diagram` | Fill missing labels in a probability tree |
| `scale_drawing` | Apply a scale ratio to dimensions |
| `ingredient_ratio` | Scale recipe amounts by a factor |
| `number_line_placement` | Place markers on a number line |

## Interactive Scenes

| Type | Description |
|------|-------------|
| `interactive_scene` | Custom visual scene — drag, manipulate, and explore to find the answer |

Interactive scenes are the most distinctive Tryals question type. Each scene is a purpose-built visual experience: drag a tangent line along a curve, adjust a pendulum, balance forces, explore a graph. The answer emerges from the manipulation itself. These are available on [tryals.app](https://tryals.app).

## Type aliases

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
