# Unit 3: Programming II

## Structured Program Design

Once you can write code, the next skill is writing code that _stays_ understandable as it grows. **Structured programming** is the discipline of building programs from three fundamental control structures, and _only_ these three: **sequence** (statements run in order), **selection** (choosing a path with if/else), and **iteration** (repeating with loops). A famous result, the **structured program theorem**, proves that these three suffice to express any computation — you never _need_ arbitrary jumps.

This matters because unrestricted `goto`-style jumps produce **spaghetti code**: control flow that leaps around unpredictably, impossible to follow or verify. Structured programming keeps control flow local and nested, so each block has one entrance and one exit and can be reasoned about on its own.

Good structure also means **top-down decomposition**: break a large task into smaller sub-tasks, each a clearly named block or function, refining until each piece is simple. Two design virtues guide this: **high cohesion** (each unit does one well-defined thing) and **low coupling** (units depend on each other as little as possible). Together they let you change one part without breaking others.

> **Common pitfall:** believing that "it runs, so the structure is fine." A program can produce correct output while being an unmaintainable tangle. Structure is about _future_ change and _human_ understanding — measured by cohesion, coupling, and single-entry/single-exit blocks, not merely by whether today's output is right.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Flow chart)* This chart shows one of the three structured control constructs, used to add up a list of items. Fill the two empty boxes, choosing from these four phrases: 'Any items left?', 'Add the next item to the total', 'Sort the items', 'Set the total to zero'. Two phrases are never used.

**2.** *(Matrix grid)* Classify each proposed change to a program by what it mainly improves.

**3.** *(Ordering)* Order the steps of top-down decomposition as the lesson describes it.

---

## Recursion and Iterative Alternatives

**Recursion** is when a function solves a problem by calling _itself_ on a smaller version of the same problem. Every correct recursive function has two parts: a **base case** that stops the recursion (a smallest input answered directly, without recursing), and a **recursive case** that reduces the problem toward the base case.

The classic example is factorial: $n! = n \times (n-1)!$, with base case $0! = 1$.

```
def factorial(n):
    if n == 0:        # base case
        return 1
    return n * factorial(n - 1)   # recursive case
```

Each call waits for the smaller call to finish, so calls stack up: `factorial(3)` waits for `factorial(2)`, which waits for `factorial(1)`, which waits for `factorial(0)` = 1, and then the results multiply back up. This chain lives on the **call stack**, and if recursion never reaches the base case — an **infinite recursion** — the stack grows until it overflows (a **stack overflow**).

Anything recursive can also be written **iteratively** with a loop, and vice versa. Recursion often expresses naturally-recursive problems (trees, divide-and-conquer) more clearly, but each call has overhead and stack cost; iteration is usually more memory-efficient for simple repetition. The choice is about clarity and cost, not capability.

> **Common pitfall:** forgetting the base case, or writing a recursive case that does not actually move _toward_ it. Either causes infinite recursion and a stack overflow. Every recursive function must have a reachable base case, and each recursive call must make the problem strictly smaller.

A recursion call stack drawn as nested frames descending factorial→→→=1, then an accent wave multiplying results back up the stack: 1, 1, 2, 6 — the descend-then-combine shape of recursion.

$$n! = n \times (n-1)!, \;\; 0! = 1$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Flow chart)* This chart is the body of the recursive factorial function from the lesson. Fill the three empty boxes, choosing from these five phrases: 'Is n equal to 0?', 'Return 1', 'Return n times factorial(n - 1)', 'Return 0', 'Set n to 0'. Two phrases are never used.

**2.** *(Number line placement)* A function sums the numbers from n down to 0 recursively: sum(0) returns 0 without recursing, and otherwise sum(n) returns n plus sum(n - 1). **Place the marker on the number of frames sitting on the call stack at the deepest moment of evaluating sum(5).

**3.** *(Matrix grid)* Each row is a recursive definition. Classify what happens when it is called on a positive input.

---

## Abstract Data Use

A powerful idea in programming is to separate _what_ a piece of data does from _how_ it does it. An **abstract data type (ADT)** is a data type defined by its **operations and their behavior**, not by its internal representation. A **stack** ADT, for instance, is defined by _push_, _pop_, and _peek_ behaving in last-in-first-out order — regardless of whether it is implemented with an array or a linked list underneath.

The line between the operations a user may call and the hidden internals is the **abstraction barrier** (or interface). Code above the barrier uses only the published operations; code below implements them. This separation, called **information hiding** or **encapsulation**, has a great payoff: the implementation can be swapped for a better one (faster, less memory) without changing any code that _uses_ the ADT, as long as the operations still behave the same.

This is why you can use a language's built-in list, dictionary, or set without knowing their internal machinery. You program against the **interface** — the promised operations and behavior — and trust the implementation to honor it. Designing good interfaces (small, clear, hard to misuse) is a central programming skill.

> **Common pitfall:** reaching _through_ the abstraction barrier to depend on an ADT's internal representation. If your code relies on how a stack happens to store its elements today, it breaks when the implementation changes. Use only the published operations; that independence from internals is the whole point of the abstraction.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A stack ADT starts empty. The operations performed are: push 4, push 9, pop, push 2, push 6, pop, pop. What value does the final pop return?

**2.** *(Matrix grid)* Some code uses a stack ADT. Classify each fragment by whether it respects the abstraction barrier.

**3.** *(Cloze bank)* Complete the definition of an abstract data type.

---

## Modular Decomposition and Reuse

As programs grow, keeping everything in one place becomes unmanageable. **Modular decomposition** splits a program into **modules** — self-contained units (files, packages, or groups of functions), each responsible for one coherent part of the job. A module exposes a small **public interface** (what others may use) and keeps the rest **private** (its internal details).

The two guiding principles are the same as for structured design, applied at a larger scale: each module should have **high cohesion** (one clear responsibility) and modules should have **low coupling** (minimal, well-defined dependencies between them). A well-decomposed program reads like a set of cooperating specialists rather than one sprawling monolith.

Good modules are **reusable**. A module that solves a general problem cleanly — a date library, a math utility, a data parser — can be used across many programs. Reuse avoids re-solving solved problems and concentrates bug-fixing and improvement in one place. The **DRY principle** ("Don't Repeat Yourself") captures the everyday version: when the same logic appears in several places, factor it into one module or function, so a change is made once, not scattered.

The discipline also supports **parallel development**: with clear module boundaries, different people can work on different modules at once, meeting only at the interfaces.

> **Common pitfall:** copy-pasting the same block of logic into many places instead of factoring it into one reusable unit (violating DRY). Duplicated logic means every fix or change must be made in every copy — and the copies inevitably drift apart, becoming a source of subtle, inconsistent bugs.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A program is built from 4 modules, and every module calls directly into every other module. Counting an unordered pair of modules once, how many coupled pairs are there?

**2.** *(Matrix grid)* Classify each situation in a growing codebase by which principle it mainly concerns.

**3.** *(Matching)* Match each modular-design term to what it describes.

---

## State, Mutation, and Side Effects

**State** is the collection of values a program holds at a given moment. **Mutation** is changing that state — reassigning a variable, adding to a list, updating a field. Mutation is powerful and often necessary, but it is also the main reason programs become hard to reason about: to know what a piece of code does, you must know the current state, which earlier code may have changed.

A **side effect** is any observable change a function makes _beyond_ returning a value: modifying a global variable, mutating an argument, printing to the screen, writing a file. A function _without_ side effects, whose output depends _only_ on its inputs and which changes nothing outside itself, is called **pure**. Pure functions are easy to reason about and test: the same inputs always give the same outputs, every time.

A subtle trap arises with **shared references**. When two names refer to the _same_ mutable object (a list, say), mutating it through one name changes what the other sees too — an **aliasing** bug that surprises programmers who expected an independent copy. Distinguishing "same object" from "equal-but-separate copy" is essential.

The practical wisdom: **prefer pure functions and limit mutation** to where it is genuinely needed, and keep mutable state contained. Code that changes little hidden state is far easier to understand, test, and parallelize.

> **Common pitfall:** assuming that assigning one variable to another (`b = a` for a list) makes an independent copy. In many languages it makes both names refer to the _same_ object, so mutating `b` also changes `a`. To get an independent copy you must explicitly copy; otherwise you have two aliases of one shared, mutable object.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* In a language where assigning one list to another makes both names refer to the same list, the following runs: x is set to the list [1, 2]; y is set to x; 3 is appended to y; z is set to an explicit copy of x; 4 is appended to z. How many elements does x hold at the end?

**2.** *(Venn diagram)* Place each function according to whether it returns a useful value and whether it has a side effect.

**3.** *(Category sort)* Sort each statement by whether it concerns the identity of an object or merely its value.

---

## Complexity and Performance Trade-offs

Two programs can both be correct yet differ enormously in speed as the input grows. **Complexity analysis** measures how an algorithm's cost — usually time or memory — grows as a function of the **input size** $n$, ignoring hardware-specific constants and focusing on the growth _shape_.

**Big-O notation** expresses an _upper bound_ on that growth. Common classes, from best to worst:

| Big-O | Name | Example |
|---|---|---|
| $O(1)$ | Constant | Array index access |
| $O(\log n)$ | Logarithmic | Binary search |
| $O(n)$ | Linear | Scanning a list once |
| $O(n \log n)$ | Linearithmic | Good sorting |
| $O(n^2)$ | Quadratic | Nested loops over the data |
| $O(2^n)$ | Exponential | Trying all subsets |

The point of ignoring constants is that for large $n$, the growth class dominates everything else: an $O(n \log n)$ sort beats an $O(n^2)$ sort for large inputs no matter how cleverly the slow one is tuned. A nested loop over the same data is a classic $O(n^2)$ signal; halving the problem each step signals $O(\log n)$.

Complexity also captures **trade-offs**. Often you can spend more memory to save time (a lookup table), or vice versa — the **space–time trade-off**. And an algorithm's **best**, **average**, and **worst** case can differ; Big-O usually describes the worst case unless stated otherwise.

> **Common pitfall:** judging performance by testing on _small_ inputs, where constant factors dominate and an asymptotically worse algorithm may look fine or even faster. Complexity is about how cost grows as $n$ gets _large_; an $O(n^2)$ algorithm can beat an $O(n \log n)$ one on tiny inputs yet lose catastrophically as the data scales.

A cost-vs-n plot with an accent curve set for each of O(log n), O(n), O(n log n), O(n^2), diverging sharply as n grows to make the growth-class ranking unmistakable.

$$O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2)$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A loop runs i from 0 to n - 1, and inside it a second loop runs j from i + 1 to n - 1. With n = 10, how many times does the inner body run in total?

**2.** *(Matrix grid)* Classify each described algorithm by its growth class.

**3.** *(Multi select)* Select every statement about Big-O that the lesson supports.
   - [ ] It ignores hardware-specific constants and describes the growth shape
   - [ ] It gives an upper bound on how cost grows with input size
   - [ ] An O(n log n) algorithm always beats an O(n squared) one on every input
   - [ ] Unless stated otherwise, it usually describes the worst case
   - [ ] It tells you exactly how many milliseconds an algorithm will take


---

## Defensive Programming and Debugging

Real programs receive bad input, are called in unexpected ways, and run in imperfect environments. **Defensive programming** is writing code that anticipates these problems and behaves safely rather than silently producing garbage or crashing obscurely.

The first tool is **input validation**: check that inputs meet the assumptions _before_ using them. A function that divides should check for a zero divisor; one that indexes a list should check the index is in range. Rejecting bad input at the boundary, with a clear error, is far better than letting it corrupt state deep inside.

**Assertions** state a condition the programmer believes must be true at a point in the code (`assert n >= 0`). If the assertion fails, the program stops immediately with a clear signal — turning a silent, far-downstream corruption into an obvious, local failure. Assertions document assumptions and catch violations early. A related idea is **failing fast**: detect an error as close as possible to where it arises, rather than letting it propagate.

Two more principles: handle **errors explicitly** (through error codes or exceptions) rather than ignoring them, and be **clear about preconditions** — what a function requires of its inputs — and **postconditions** — what it guarantees about its outputs. Code that states and checks its contract is easier to use correctly and to debug when misused.

> **Common pitfall:** trusting that inputs will always be valid ("no one would ever pass a negative here"). Unvalidated assumptions are exactly where programs break in production. Validate inputs at boundaries, assert your assumptions, and fail fast with clear errors — a bug caught at the boundary is far cheaper than one that corrupts data deep inside.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Flow chart)* This chart shows a division function written defensively. Fill the three empty boxes, choosing from these five phrases: 'Is b zero?', 'Report an error and stop', 'Return a divided by b', 'Return zero', 'Is a zero?'. Two phrases are never used.

**2.** *(Matrix grid)* A function computes the square root of a number and promises a non-negative result. Classify each stated condition.

**3.** *(Ordering)* Order the steps by which an assertion turns a distant, mysterious failure into a local, obvious one.

---

## Testing Larger Behaviours

Testing a single function is one thing; gaining confidence in a whole program is another. As programs grow, testing organizes into **levels**.

A **unit test** checks one small piece — a single function or module — in isolation, with all its dependencies controlled. Unit tests are fast, pinpoint failures precisely (you know exactly which unit broke), and form the base of the testing pyramid. An **integration test** checks that several units work correctly _together_ — that the interfaces between modules actually fit. A module can pass every unit test yet fail in integration because two modules disagree about their shared interface. At the top, **system (end-to-end) tests** exercise the whole program as a user would.

**Test coverage** measures how much of the code the tests exercise (for example, what fraction of lines or branches run during testing). High coverage is valuable — untested code is unverified — but coverage is necessary, not sufficient: running a line is not the same as _checking_ that it behaves correctly. Coverage tells you what was _touched_, not what was _validated_.

Two enabling practices: **automated tests** can be re-run cheaply after every change, and a good suite acts as a **regression safety net** — it catches when a change breaks previously-working behavior. Many teams even write tests _first_ (test-driven development), letting the tests specify the behavior before the code is written.

> **Common pitfall:** treating **high code coverage** as proof of correctness. Coverage only measures which code _ran_ during tests, not whether each result was actually _checked_ or every edge case exercised. A suite can hit 100% coverage while still asserting almost nothing meaningful — coverage is a floor, not a guarantee.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Matrix grid)* Classify each test by the level it belongs to.

**2.** *(Category sort)* Sort each claim by whether a coverage report can actually support it.

**3.** *(Table completion)* Complete the table of testing levels.

---

## Program Design for Scientific or Engineering Tasks

Scientific and engineering programs have their own demands. They process numbers — often lots of them — and their correctness depends not just on logic but on **numerical care**.

The first hazard is **floating-point** arithmetic. Computers represent real numbers with finite precision, so most decimals are stored approximately: `0.1 + 0.2` is _not_ exactly `0.3`. The consequence is that you must almost never compare floats with exact equality (`==`); instead, check whether they are close within a small **tolerance** ($|a - b| < \varepsilon$). Rounding errors can also accumulate over many operations, so the _order_ of computation can matter.

Second, scientific code lives or dies by **units and dimensions**. A value is meaningless without its unit; mixing meters and feet, or radians and degrees, has caused real disasters. Disciplined code tracks units explicitly and checks that formulas are dimensionally consistent.

Third comes **structure for reliability**: represent the data cleanly (arrays or matrices for numerical work), factor the mathematics into tested functions, validate ranges (a probability must lie in $[0,1]$; a mass cannot be negative), and cross-check results against known cases, limiting behavior, or an independent method. A **sanity check** — does the answer have the right order of magnitude and sign? — catches gross errors that detailed logic misses.

> **Common pitfall:** comparing floating-point numbers with exact equality (`if x == 0.3`). Because most decimals are stored approximately, such a test can fail even when the values are "the same" mathematically. Compare within a tolerance instead: `if abs(x - 0.3) < 1e-9`.

A number line zoomed near 0.3 with 0.1+0.2 landing a hair off exact 0.3; an accent tolerance band of width epsilon straddles 0.3.

$$|a - b| < \varepsilon$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A routine must reject any computed probability outside the range 0 to 1 inclusive. It is handed these values: -0.02, 0.0, 0.45, 1.0, 1.3 and 0.99. How many must it reject?

**2.** *(Number line placement)* A trigonometric routine expects its angle in radians, but a caller passes the number 180, meaning 180 degrees. **Place the marker on the value, to the nearest tenth, that the caller should have passed.

**3.** *(Cloze bank)* Complete the rule for comparing floating-point values.

---

## Integrated Programming Synthesis

A capable programmer does not apply these ideas one at a time — they synthesize them. Consider building a small but real program: a word-frequency counter that reads a large text and reports the ten most common words. Every theme of this unit appears.

- **Design and decomposition:** split it into clear parts — read the text, split into words, count occurrences, find the top ten, report — each a cohesive, testable function.
- **Data structures:** counting words by name is a **dictionary** (word → count); the "top ten" wants the counts ordered, perhaps via sorting or a **heap**. The choice of structure shapes the whole solution.
- **Complexity:** counting is $O(n)$ in the number of words; a naive "scan the whole list to find each next maximum" is $O(n^2)$, while sorting the counts is $O(m \log m)$ in the number of distinct words. Knowing this lets you avoid the slow path on large inputs.
- **State and purity:** the counting dictionary is mutable state, deliberately contained; the word-splitting and formatting can be pure functions, easy to test.
- **Defensiveness and testing:** handle an empty file, punctuation, case-folding ("The" = "the"); write unit tests for the splitter and counter, an integration test for the whole pipeline, and edge-case tests (empty input, ties in the top ten).

The lesson of synthesis is that these are not separate topics but **one interlocking craft**: a good design chooses good data structures, whose complexity you can reason about, implemented with contained state, made trustworthy by defensive checks and tests. Master programmers move fluidly between these concerns, applying whichever the moment demands.

> **Common pitfall:** treating each concept as an isolated exam topic rather than a tool to combine. Real problems demand them _together_ — the right data structure to make the algorithm efficient, contained state to keep it understandable, and tests to make it trustworthy. Synthesis, not memorization of separate facts, is what distinguishes a capable programmer.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A word-frequency counter folds every word to lower case before counting. It is given the text: The cat sat on the mat and The cat ate the mat. How many distinct words does it report?

**2.** *(Flow chart)* This chart is the word-frequency pipeline. Fill the three empty boxes, choosing from these five phrases: 'Split the text into words', 'Count occurrences into a dictionary', 'Report the ten most common', 'Sort the original text', 'Delete the text file'. Two phrases are never used.

**3.** *(Category sort)* Sort each part of the word-frequency program by whether it can be written as a pure function or must carry mutable state.

---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
