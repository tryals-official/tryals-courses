# Unit 2: Programming I

## Variables, Expressions, and Types

A **variable** is a named box that holds a value the program can read and change. **Assignment** puts a value into a variable, written in most languages as `x = 5` — read as "let x _become_ 5," not as a claim that x equals 5 forever. Crucially, assignment is directional: the right side is evaluated first, then stored into the name on the left. So `x = x + 1` reads the current x, adds one, and stores the result back — it is not a contradiction.

An **expression** is any combination of values, variables, and operators that evaluates to a single value: `3 + 4 * 2` evaluates to `11` because multiplication binds tighter than addition (**operator precedence**), just as in ordinary arithmetic. Parentheses override precedence: `(3 + 4) * 2` is `14`.

Every value has a **type** that determines what it can hold and what operations make sense:

| Type | Holds | Example |
|---|---|---|
| Integer (int) | Whole numbers | `42`, `-7` |
| Float | Numbers with decimals | `3.14` |
| Boolean (bool) | `true` or `false` | `true` |
| String | Text | `"hello"` |

Types matter because operations depend on them: `+` adds two integers but _concatenates_ (joins) two strings, so `"1" + "1"` is `"11"`, not `2`. Mixing types carelessly is a frequent source of bugs.

> **Common pitfall:** reading the assignment `x = x + 1` as a false equation. It is not an equation — it is a _command_: evaluate the right-hand side using the current value of x, then store the result back into x. The old value is read before the new one is written.

An expression tree for 3 + 4 * 2 drawn in beats: the multiply node (4, 2) evaluates first to 8, then the add node (3, 8) evaluates to 11 — precedence made visible as bottom-up evaluation.

$$3 + 4 \times 2 = 11$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* In most languages multiplication binds tighter than addition. Evaluate the expression 3 + 4 * 2.

**2.** *(Category sort)* The operator + adds two numbers but joins two strings. Sort each expression by what it evaluates to.

**3.** *(Cloze bank)* Complete the statement about combining two strings.

---

## Conditionals and Logical Branching

A program that always does the same thing is not very useful. **Conditionals** let it choose a path based on whether a condition is true. The basic form is `if`: if a boolean condition holds, run one block; optionally, an `else` block runs when it does not.

```
if temperature > 30:
    print("hot")
else:
    print("not hot")
```

The condition is a **boolean expression** — one that evaluates to `true` or `false`. **Comparison operators** produce booleans: `==` (equal), `!=` (not equal), `<`, `>`, `<=`, `>=`. A frequent bug is confusing `==` (comparison) with `=` (assignment).

**Boolean operators** combine conditions. `and` is true only when _both_ sides are true; `or` is true when _at least one_ side is true; `not` flips a boolean. Their truth tables are worth memorizing:

| A | B | A and B | A or B |
|---|---|---|---|
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | F |

Conditions can be chained with `else if` (or `elif`) to test several cases in order; the _first_ matching branch runs and the rest are skipped. Many languages also **short-circuit**: in `A and B`, if `A` is false the whole thing is already false, so `B` is never evaluated — which matters when `B` has side effects or could error.

> **Common pitfall:** writing `=` (assignment) where you mean `==` (comparison) in a condition. `if x = 5` tries to _assign_ rather than _compare_, and in many languages is a bug or error. The condition of an `if` must be a comparison or boolean, using `==`, not a single `=`.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Truth table)* The operator 'and' is true only when both sides are true. Complete the output column for A and B.

**2.** *(Matrix grid)* Let A be true and B be false. Give the truth value of each compound condition.

**3.** *(Matching)* Match each comparison operator to its meaning.

---

## Loops and Repeated Computation

A **loop** repeats a block of code. The two staple forms are the **while loop** and the **for loop**.

A `while` loop repeats _as long as_ a condition stays true, checking the condition before each pass:

```
i = 0
while i < 5:
    print(i)
    i = i + 1
```

This prints `0 1 2 3 4`. Three ingredients keep it correct: an **initialization** (`i = 0`), a **condition** (`i < 5`), and an **update** (`i = i + 1`) that moves toward making the condition false. Forget the update and the condition never becomes false — an **infinite loop** that runs forever.

A `for` loop is designed for a known number of repetitions or for stepping through a collection: `for i in range(5)` runs the body for `i = 0, 1, 2, 3, 4`. Note that `range(5)` gives five values _starting at 0_ and stopping _before_ 5 — a convention that is the source of the classic **off-by-one error**, where a loop runs one time too many or too few because a boundary (`<` vs `<=`) is wrong.

Two control statements adjust a loop from inside: `break` exits the loop immediately, and `continue` skips to the next iteration. Loops can also **nest**, one inside another — a nested loop running $m$ times inside a loop running $n$ times executes its inner body $n \times m$ times, which matters for performance.

> **Common pitfall:** the **off-by-one error**. A loop `for i in range(5)` runs for `i = 0..4` (five times, stopping before 5), and `while i <= 5` runs one more time than `while i < 5`. Always check whether the boundary should be included, and whether counting starts at 0 or 1.

A counter stepping along a number line from 0, ticking 0,1,2,3,4 under a "< 5" gate that turns the flow off exactly at 5 — the loop bound and the five iterations shown as discrete accent steps.

$$\text{range}(n): 0, 1, \ldots, n-1$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Table completion)* Trace the loop: total = 0; then for each i in 1, 2, 3, 4 do total = total + i. Complete total after each addition.

**2.** *(Ordering)* Order the parts of a correct while loop so that it counts up and then stops.

**3.** *(Error highlight)* A student explains loops. Highlight the one incorrect statement.

---

## Functions and Parameter Passing

A **function** is a named, reusable block of code that performs a task. Defining a function once and **calling** it many times avoids repetition and gives a piece of logic a meaningful name — the foundation of organized programming.

```
def square(n):
    return n * n

y = square(5)   # y becomes 25
```

A function may take **parameters** — named inputs listed in its definition (`n` above). When you call it, you supply **arguments** — the actual values passed in (`5` above). Inside, the parameter behaves like a local variable holding that argument. A function may **return** a value with `return`, which both ends the function and hands a result back to the caller; a function with no `return` yields nothing useful.

**Scope** governs where names are visible. Variables created inside a function are **local** — they exist only during the call and are invisible outside. This is a feature: it lets functions work without clobbering each other's variables. A variable declared outside all functions is **global**, visible everywhere (but relying on globals makes code harder to reason about).

Functions enable **abstraction**: a caller uses `square(5)` without caring _how_ it computes the square, just as you use a phone without knowing its circuitry. Well-chosen functions turn a big problem into small, named, testable pieces.

> **Common pitfall:** confusing **parameters** (the names in the definition) with **arguments** (the actual values in the call). `def f(x)` declares a parameter `x`; `f(10)` passes the argument `10`. Also, expecting to use a function's _local_ variables from outside the function — they simply do not exist there.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A function is defined as def sq(n): return n * n. What value does the call sq(sq(2)) produce?

**2.** *(Annotation text)* Highlight the argument supplied to the function in this code.

**3.** *(Cloze bank)* Complete the statement about a function that omits return.

---

## Basic Data Collections

A single variable holds one value; a **collection** holds many. The workhorse is the **list** (or array) — an ordered sequence of values under one name.

```
scores = [90, 85, 70, 100]
```

Each element has a position, its **index**. A near-universal convention is that indices start at **0**: `scores[0]` is `90`, `scores[1]` is `85`, and the last element of a 4-item list is `scores[3]`, not `scores[4]`. Reading past the end (`scores[4]` here) is an **index-out-of-range** error. The number of elements is the list's **length** (here 4). Lists support adding, removing, and updating elements, and iterating over them with a loop.

A different collection is the **dictionary** (map, or associative array), which stores **key–value pairs** and looks up values by key rather than by position:

```
ages = {"Ana": 30, "Ben": 25}
ages["Ana"]   # 30
```

A dictionary is unordered by position but gives fast lookup by key. The rule of thumb: use a **list** when order and position matter and items are accessed by their place in sequence; use a **dictionary** when you look items up by a meaningful key (a name, an id) rather than a numeric position.

> **Common pitfall:** forgetting that indexing starts at **0**. In a list of length `n`, the valid indices are `0` through `n-1`; the last element is at index `n-1`, and accessing index `n` runs off the end. This off-by-one at the boundary is one of the most common beginner errors.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Given ages = {"Ana": 30, "Ben": 25}, what value does ages["Ana"] return?

**2.** *(Category sort)* For a list of length 4 (valid indices 0 through 3), sort each index by whether accessing it is valid.

**3.** *(Memory pairs)* Match each collection term to what it means.

---

## Input, Output, and File Thinking

A program that cannot communicate is useless. **Input** brings data in (from the keyboard, a file, a network); **output** sends results out (to the screen, a file, a device). The simplest pair is reading a line of text from the user and printing a result.

A crucial subtlety: input usually arrives as **text (a string)**, even when it represents a number. Reading `"42"` from the keyboard gives the string `"42"`, not the integer `42`. To do arithmetic you must **convert** (parse) it: `int("42")` yields `42`. Forgetting this is why `"1" + "1"` from user input produces `"11"` rather than `2`.

**Files** are the standard way to store data that outlasts a single run. The usual discipline is: **open** the file (specifying read or write mode), **process** it, then **close** it (releasing the resource and flushing buffered writes). A common and robust mental model is the **stream**: rather than loading a giant file entirely into memory, a program reads it piece by piece — line by line, for example — which lets it handle files far larger than memory.

| Step | Purpose |
|---|---|
| Open | Connect to the file (read or write mode) |
| Process | Read from or write to it |
| Close | Release the file and flush writes |

> **Common pitfall:** treating input as already numeric. Data read from a user or a file is text; `"5" + "3"` is `"53"`, not `8`. Convert the string to a number (`int(...)` or `float(...)`) _before_ doing arithmetic, and be ready for the conversion to fail if the text is not a valid number.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Cloze bank)* Complete the statement about input read from the user.

**2.** *(Ordering)* Order the steps a program takes to read a number from the user and add ten to it.

**3.** *(Category sort)* Sort each action by whether it is input or output.

---

## Testing Small Programs

Writing code is only half the job; the other half is gaining confidence that it is **correct**. **Testing** does this by running the program on chosen inputs and comparing its actual output against the **expected output** you worked out independently.

A single **test case** is a pair: an input, and the output it _should_ produce. A useful test suite covers three kinds of input:
- **Typical cases** — ordinary, representative inputs (does `double(4)` give `8`?).
- **Edge cases** — the boundaries where bugs love to hide: zero, an empty list, the first and last valid index, the largest allowed value, a negative number.
- **Invalid cases** — inputs the program should reject or handle gracefully (non-numeric text where a number is expected).

The mindset is adversarial: a good tester actively tries to _break_ the program, not to confirm it works. Passing a hundred typical cases proves little if a single overlooked edge case (an empty input, a zero, an off-by-one boundary) still crashes it.

Testing famously **cannot prove a program correct** — you cannot try every possible input — but a well-chosen suite can reveal the _presence_ of bugs cheaply and repeatably. Automated tests are especially valuable because they can be re-run after every change (a **regression test**) to confirm nothing that used to work has broken.

> **Common pitfall:** testing only "happy path" typical inputs and skipping edge cases. Most real bugs surface at the boundaries — an empty list, a zero, the maximum value, the first or last index. A test suite without edge cases gives false confidence; deliberately probe the boundaries.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Category sort)* A function is meant to accept a whole number of items. Sort each test input by its kind.

**2.** *(Table completion)* The function is double(x), which returns 2 * x. Complete the expected output for each test input.

**3.** *(Memory pairs)* Match each testing term to its meaning.

---

## Debugging Logic and State

Every programmer writes bugs; the skill is finding them efficiently. A **bug** is a mismatch between what a program does and what it should do. **Debugging** is the disciplined process of locating and fixing that mismatch — and like machine-level debugging, it is a search through the program's **state** (the current values of its variables) for the point where things first go wrong.

A reliable routine:
1. **Reproduce** the bug consistently — find an input that triggers it every time. A bug you cannot reproduce, you cannot reliably fix.
2. **Localize** it — narrow down _where_ the state first becomes wrong. Confirm the state is correct early, wrong later, and squeeze the gap.
3. **Understand** the cause — why does that line produce the wrong value? Do not fix blindly.
4. **Fix and verify** — change the code and re-run the reproducing case (and the rest of the test suite) to confirm it is fixed and nothing else broke.

The everyday tools are **print debugging** (inserting statements that show variable values at chosen points — crude but effective) and a **debugger** (setting breakpoints and stepping through, inspecting state precisely). Both serve the same goal: make the invisible state **visible** so you can see where it diverges from what you expect.

The golden rule is to **reason from evidence, not assumption**: observe what the variables _actually_ hold, rather than what you _believe_ the code does. The mismatch between belief and reality is exactly where the bug lives.

> **Common pitfall:** changing code randomly, hoping the bug disappears ("shotgun debugging"). Without reproducing the bug and observing the actual state, you cannot know whether a change fixed the real cause or just hid a symptom. Reproduce first, then narrow down using observed values.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Ordering)* Order the steps of the disciplined debugging routine.

**2.** *(Numerical input)* A loop should add the four numbers 2, 4, 6, 8, but a bug makes it skip the first one and add only 4, 6, 8. What total does the buggy program report?

**3.** *(Cloze bank)* Complete the first rule of debugging.

---

## Simple Modelling with Code

The hardest part of programming is often not the syntax but the **modelling**: deciding how to represent a real-world problem in terms a computer can process. A model is a deliberate _simplification_ — it captures the parts of a problem that matter for the task and ignores the rest.

Modelling has recognizable steps. First, identify the **data**: what quantities and entities does the problem involve, and what type is each (a number, a list, a name-to-value map)? A shopping cart might be a **list** of items, each with a price; a phone book is a **dictionary** from names to numbers. Choosing a fitting data representation is half the battle — the right structure makes the algorithm easy; the wrong one makes it painful.

Second, define the **algorithm**: the step-by-step procedure that transforms the input data into the desired output. "Total the cart" becomes: start a running sum at zero, loop over each item, add its price to the sum, and report the sum. Writing this in plain, structured **pseudocode** _before_ real code lets you get the logic right without fighting syntax.

Third, consider what can vary and what must hold — the **assumptions and constraints** (prices are non-negative; the list may be empty). A good model states these explicitly so the program handles them.

> **Common pitfall:** diving straight into writing code before modelling the problem — before deciding what the data is and sketching the algorithm. This almost always leads to tangled, buggy code. Model first: name the data and its types, write the steps in pseudocode, then translate to real code.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Grid path)* Model a warehouse robot as a marker on a grid; the blocked cells are shelves it cannot enter. Trace a route for the robot from the top-left cell to the bottom-right cell, moving one cell at a time and avoiding every shelf.

**2.** *(Ordering)* Order the steps of modelling a problem before writing real code.

**3.** *(Cloze bank)* Complete the definition of a model.

---

## Integrated Introductory Programming Practice

A real program is not one concept but all of them working together. Consider a complete small task: _read a list of exam scores, and report how many students passed (scored 50 or more) and the class average._ Solving it exercises every idea in this unit.

A structured approach:
1. **Model the data.** The scores are a **list** of numbers; "passed" means a score $\geq 50$; the outputs are a count and an average.
2. **Sketch the algorithm** in pseudocode: initialize a `total` and a `passed` count to zero; **loop** over each score; add it to `total`; if the score $\geq 50$, increment `passed` (a **conditional** inside a loop); after the loop, the **average** is `total` divided by the number of scores.
3. **Package** repeated logic in a **function** — e.g. `average(scores)` — so it is named and reusable.
4. **Handle edge cases.** What if the list is _empty_? Dividing by zero must be guarded. What about a score of exactly 50 (the boundary of passing)?
5. **Test.** Try a typical list, an empty list, all-passing and all-failing lists, and a score of exactly 50.

This is the shape of nearly all beginner programming: model the data, express the logic with loops and conditionals, factor it into functions, guard the edge cases, and test. The concepts are not isolated tricks — they are the parts you assemble, every time, into a working solution.

> **Common pitfall:** forgetting the edge cases when integrating everything. The average of an _empty_ list divides by zero; a score of _exactly_ 50 sits on the pass/fail boundary (is it $\geq 50$ or $> 50$?). A program that handles the typical list but crashes on the empty one is not finished — integrate the edge-case checks from the start.

A bar chart of exam scores with a horizontal accent pass line at 50; bars at or above the line flip to accent (passed) one by one while a counter tallies them, and the mean line settles at the class average.

$$\text{average} = \frac{\text{total}}{\text{count}}, \;\; \text{count} > 0$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Ordering)* Order the structured approach to the task: read a list of exam scores and report how many passed and the class average.

**2.** *(Table completion)* Trace the passed-count over the scores 40, 50, 60, 90, where a score of 50 or more increments the count. Complete the count after each score.

**3.** *(Category sort)* Passing is a score of 50 or more. Sort each score by whether it passes or fails.

---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
