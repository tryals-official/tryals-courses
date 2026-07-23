# Unit 8: Programming Elements

## Algorithms and Computational Thinking

An **algorithm** is a finite, precise sequence of unambiguous steps that solves a problem or computes a result. The word predates computers — Euclid's method for the gcd (Unit 2) is an algorithm — but programming is the art of expressing algorithms so a machine can carry them out. For a procedure to be a genuine algorithm it should be **finite** (it terminates), **definite** (each step is unambiguous), and **effective** (each step is actually doable).

**Computational thinking** is the problem-solving mindset behind algorithm design. Its core habits:
- **Decomposition** — break a big problem into smaller, manageable subproblems.
- **Pattern recognition** — spot repeated structure that can be handled uniformly.
- **Abstraction** — focus on the essential features, hiding irrelevant detail.
- **Algorithm design** — express the solution as an ordered sequence of steps.

Before coding, an algorithm is often written as **pseudocode** — structured, language-independent English that captures the logic without the syntax of any particular language — or as a **flowchart**. This lets you reason about _correctness_ and _efficiency_ separately from implementation details.

A subtle but essential point: a mathematical _definition_ is not automatically an algorithm. "The gcd is the largest common divisor" _defines_ the gcd but does not say _how to compute_ it; Euclid's algorithm does. An algorithm must give a concrete, terminating **procedure**, not just characterise the answer. This distinction — between _what_ a thing is and _how_ to compute it — is the heart of turning mathematics into programs.

> **Common pitfall:** confusing a **definition** or a **specification** (what the answer _is_) with an **algorithm** (a step-by-step procedure for _computing_ it). "The prime factorisation is the unique product of primes" specifies the answer but is not an algorithm; you still need a concrete, terminating procedure (trial division, say) to actually produce it. An algorithm must tell you _how_, not merely _what_.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Category sort)* An algorithm says HOW to compute; a specification says only WHAT the answer is. Sort each item.

**2.** *(Numerical input)* Euclid's algorithm replaces the pair (a, b) with (b, a mod b) and stops when b is 0. Starting from (48, 18), how many replacement steps does it take?

**3.** *(Memory pairs)* Match each idea to what it does.

---

## Variables, Types, and Expressions

A program computes by manipulating **values** held in **variables**. A variable is a named container: **assignment** stores a value into it, and using the name later retrieves the current value. The crucial mental model is that assignment is _not_ mathematical equality. In most languages `x = x + 1` means "compute `x + 1`, then store the result back into `x`" — updating the variable. This is a _command_ (do this), not an _assertion_ (this is true), which is why it would be nonsense as an equation.

Every value has a **data type** that determines what it can hold and what operations apply:
- **Integer** — whole numbers, exact.
- **Float** (real) — numbers with fractional parts, stored approximately.
- **Boolean** — `true` or `false`.
- **String** — text.

The type controls how operators behave. The symbol `+` **adds** two numbers but **concatenates** (joins) two strings — same symbol, different operation depending on type. Mixing types can cause errors or surprising conversions, so knowing a value's type is essential.

**Expressions** combine values and variables with operators to produce a new value, evaluated using **precedence** rules (multiplication before addition, as in ordinary mathematics, with parentheses overriding). `2 + 3 * 4` evaluates to `14`, not `20`, because `*` binds tighter than `+`.

A subtle numerical caution for mathematicians: **floating-point** numbers are stored with finite precision, so they are _approximate_. `0.1 + 0.2` does not exactly equal `0.3` in most languages — a tiny rounding error remains. Never test floats for exact equality; compare within a small tolerance instead.

> **Common pitfall:** reading assignment `x = x + 1` as a mathematical **equation** (which would be a contradiction), and testing **floating-point** values for **exact equality**. Assignment is a command that _updates_ the variable, not an equality claim. And floats are approximate — `0.1 + 0.2 != 0.3` exactly — so compare them within a tolerance, never with strict `==`.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* The statements below run in order, starting from an empty variable x. Complete the value of x after each one.

**2.** *(Category sort)* The symbol + adds numbers but joins text. Sort each expression by what + actually does.

**3.** *(Matching)* Match each data type to its defining property.

---

## Conditionals and Boolean Logic

Programs make **decisions** with **conditional statements**. An `if` statement runs a block of code only when a condition is true; an `if/else` chooses between two paths; `else if` chains several mutually exclusive cases. The condition is a **boolean expression** — one that evaluates to `true` or `false` — so this is the propositional logic of Unit 1 made executable.

Conditions are built from **comparison operators** — `==` (equal), `!=` (not equal), `<`, `>`, `<=`, `>=` — each producing a boolean. A frequent beginner error is confusing `=` (assignment: store a value) with `==` (comparison: test equality); they are entirely different operations.

Booleans combine with **logical operators**, exactly the connectives of Unit 1:
- `and` (`&&`) — true when _both_ conditions are true.
- `or` (`||`) — true when _at least one_ is true (inclusive or).
- `not` (`!`) — negates a boolean.

So `(x > 0) and (x < 10)` tests "x is between 0 and 10." **Operator precedence** and parentheses matter here as with arithmetic; when in doubt, parenthesise to make the grouping explicit.

Many languages use **short-circuit evaluation**: in `A and B`, if `A` is false the whole expression is already false, so `B` is never evaluated (and dually for `or`). This is not just an optimisation — it lets you write safe guards like "if the list is nonempty _and_ its first element is positive," where checking the second part would fail if the first were false.

> **Common pitfall:** using `=` (assignment) where `==` (comparison) is meant. `if (x = 5)` **assigns** 5 to `x` (and is usually always-true or an error), whereas `if (x == 5)` **tests** whether `x` equals 5. The single-versus-double equals distinction — command versus question — is one of the most common bugs, and the two do completely different things.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Truth table)* Complete the truth table for the condition A and (not B).

**2.** *(Venn diagram)* Two conditions are tested on each number: A is 'the number is greater than 3' and B is 'the number is even'. Place each number where it belongs.

**3.** *(Numerical input)* A rule says: if x is even, replace x by x / 2; otherwise replace x by 3 * x + 1. Starting from x = 7, what is the value after three applications?

---

## Loops and Iteration

**Loops** repeat a block of code, letting a short program do a large amount of work. They are how algorithms process every element of a dataset, run until a condition is met, or perform a computation many times. Two kinds dominate:
- A **for loop** repeats a _known_ number of times, typically iterating over a range or a collection ("for each item, do..."). Best when the count is fixed in advance.
- A **while loop** repeats _as long as_ a condition stays true, checking the condition before each pass. Best when the number of repetitions is not known ahead of time (loop until convergence, until input runs out).

Every loop needs three things to behave: an **initialisation** (starting state), a **condition** (when to keep going), and an **update** (progress toward stopping). If the update never makes the condition false, you get an **infinite loop** — the program runs forever. Ensuring the loop makes progress toward termination is essential.

Two classic bugs deserve naming:
- **Off-by-one errors** — looping one time too many or too few, usually from confusing `<` with `<=` or miscounting the start/end. Iterating indices `0` to `n` (inclusive) touches `n+1` elements, one too many for a list of length `n`.
- **Infinite loops** — a while condition that never becomes false because the update is missing or wrong.

Loops can be **nested** (a loop inside a loop), which multiplies the work — a nested pair over $n$ items does $n^2$ iterations, the source of quadratic running times. Understanding loops is understanding how repetition turns simple instructions into powerful computation, and how their structure determines efficiency.

> **Common pitfall:** the **off-by-one error** and the **infinite loop**. Looping from `0` to `n` _inclusive_ processes `n+1` items — one too many when a list has `n` elements (indices `0` to `n-1`); mixing up `<` and `<=` is the usual cause. And a **while** loop whose condition never becomes false — because the update is missing or moves the wrong way — runs forever. Always ensure the loop makes genuine progress toward stopping.

A loop drawn as a circular arrow with an accent counter incrementing each pass and a boundary check that exits when the condition fails — iteration with a termination guard.

$$\text{for } i = 1 \text{ to } n:\ n \text{ iterations}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* A loop runs its counter over i = 3, 4, 5, ..., 17 inclusive. How many iterations does it perform?

**2.** *(Ordering)* Order what a loop does, from entry to the start of its second pass.

**3.** *(Matrix grid)* Choose the loop each task calls for.

---

## Functions and Modularity

A **function** (or procedure) packages a piece of logic under a name, so it can be **reused** wherever needed instead of rewritten. Functions are the primary tool for **modularity** — building a program from small, well-defined, independently understandable parts. A mathematician's instinct for functions carries over, with a computational twist.

A function has:
- **Parameters** — named inputs it receives when **called**.
- A **body** — the steps it performs.
- A **return value** — the output it hands back to the caller.

Calling `f(3, 4)` passes `3` and `4` as arguments to the parameters; the function computes and returns a result. This lets you write the logic _once_ and invoke it many times with different inputs — the **DRY** principle ("Don't Repeat Yourself").

**Scope** governs where names are visible. A **local variable**, defined inside a function, exists only within that function and vanishes when it returns; it cannot be seen from outside. This **encapsulation** is a feature, not a limitation: a function's internals are hidden, so you can use it knowing only its inputs and output — its **interface** — without worrying about how it works inside. Two functions can safely use a variable named `i` without interfering, because each `i` is local.

Functions enable the whole discipline of **abstraction** in programming: once written and tested, a function becomes a reliable black box you build upon, just as a proved theorem becomes a tool for further proofs. Well-chosen functions with clear interfaces make programs readable, testable, and maintainable — the difference between a tangle and a structure.

> **Common pitfall:** expecting a **local variable** to be visible **outside** the function where it is defined. A local variable exists only within its function's body and is gone once the function returns — this **encapsulation** is deliberate. Trying to read a function's internal variable from the outside (or assuming two functions' same-named locals are the same variable) misunderstands scope; functions communicate only through their **parameters and return value**.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Ordering)* Order what happens when the call f(3, 4) is evaluated.

**2.** *(Numerical input)* Two functions are defined: f(x) = x + 2 and g(x) = 3 * x. What is the value of g(f(4))?

**3.** *(Memory pairs)* Match each term to its meaning.

---

## Arrays and Lists

Programs rarely handle one value at a time; they process _collections_. An **array** (or **list**) stores an ordered sequence of values in a single named structure, accessed by **index** — a position number. The defining feature is **indexed access**: element `a[i]` is retrieved directly by its position, in constant time, without scanning from the start.

A near-universal convention trips up newcomers: most languages use **zero-based indexing** — the _first_ element is at index `0`, the second at `1`, and the last of an $n$-element array at index `n - 1` (not `n`). So a list of length 5 has valid indices `0, 1, 2, 3, 4`. Accessing index `5` (or `n`) is **out of bounds** — an error, and a frequent source of the off-by-one bugs from the loops lesson.

Common operations on lists:
- **Access / update** `a[i]` — read or overwrite the element at position `i`.
- **Length** — the number of elements.
- **Append / insert / remove** — add or delete elements (with different costs depending on where).
- **Traverse** — visit every element, usually with a loop, to sum, search, or transform.

Arrays pair perfectly with loops: iterating an index from `0` to `n - 1` visits each element exactly once. Many mathematical objects — a vector, a sequence, a row of data — are naturally represented as arrays, so array manipulation is the bread and butter of turning mathematics into code. **Multi-dimensional** arrays (arrays of arrays) represent matrices and grids, indexed by row and column.

> **Common pitfall:** forgetting **zero-based indexing** and going **out of bounds**. In most languages the first element is `a[0]` and the last is `a[n-1]`, so a loop or access that reaches index `n` is one past the end — an out-of-bounds error. Off-by-one mistakes at the array boundary (using `n` instead of `n-1`, or starting at `1` instead of `0`) are among the most common bugs; always mind that valid indices run `0` to `n-1`.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* A list holds 40 elements and uses zero-based indexing. What is the index of its last element?

**2.** *(Category sort)* A list has length 5 and uses zero-based indexing. Sort each access.

**3.** *(Multi select)* Let a be the list 3, 1, 4, 1, 5 with zero-based indexing. Select every TRUE statement.
   - [ ] a[0] is 3
   - [ ] a[2] is 1
   - [ ] the length of a is 5
   - [ ] a[4] is 5
   - [ ] a[5] is 5


---

## Recursion

**Recursion** is a technique where a function **calls itself** on a smaller version of the same problem, until it reaches a case simple enough to solve directly. It is the programming counterpart of mathematical **induction** (Unit 1) and of **recurrence relations** — a problem defined in terms of smaller instances of itself.

Every recursive function needs two ingredients:
1. A **base case** — a smallest instance solved directly, without further recursion. This stops the recursion.
2. A **recursive case** — the function calls itself on a _smaller_ subproblem and combines the result.

The classic example is the factorial: $n! = n \times (n-1)!$ with base case $0! = 1$. To compute $3!$, the function calls itself down to the base case and multiplies back up: $3! = 3 \times 2! = 3 \times 2 \times 1! = 3 \times 2 \times 1 = 6$. The recursion "unwinds" once the base case is hit.

The single most important rule: the recursive call must make **progress toward the base case**. If each call does not genuinely shrink the problem (reduce $n$, shorten the list, narrow the range), the recursion never terminates — the analogue of an infinite loop, causing a **stack overflow** as the pending calls pile up without resolving. A missing or unreachable base case is the defining recursion bug, exactly as omitting the base case invalidates an induction proof.

Recursion mirrors induction so closely that proving a recursive function correct _is_ an induction: the base case establishes correctness for the smallest input, and the recursive case shows that if the function is correct on the smaller subproblem, it is correct on the larger one. Many problems — tree traversals, divide-and-conquer, and anything with self-similar structure — are far cleaner recursively than with loops.

> **Common pitfall:** writing a recursion with **no base case** or one the calls never reach, so the function **recurses forever** (a stack overflow). Every recursive function needs a base case _and_ each recursive call must move genuinely closer to it (a strictly smaller subproblem). This is exactly the induction requirement — a base case plus a step that reduces to a smaller instance; omitting either breaks both the program and the proof.

A stack of recursive call frames descending from 3! to 2! to 1! to the accent base case 0! = 1, then unwinding upward multiplying back to 6 — recursion with a base case.

$$n! = n \times (n-1)!,\quad 0! = 1$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Ordering)* Order what happens when a recursive factorial computes 3 factorial.

**2.** *(Numerical input)* Computing fact(4) recursively, how many calls to fact are made in total, counting the original call and the base-case call?

**3.** *(Formula builder)* Build the recursive definition of the factorial.

---

## Computational Complexity

Two algorithms can solve the same problem, yet one finishes instantly on data that would take the other centuries. **Computational complexity** measures how an algorithm's resource use — usually **time** (number of basic steps) — grows as the input size $n$ grows. It predicts _scalability_, the property that matters most as data gets large.

We describe growth with **big-O notation**, which captures the **dominant term** and ignores constants and lower-order terms — because for large $n$ only the fastest-growing part matters. Common complexity classes, from best to worst:
- $O(1)$ — **constant**: independent of $n$ (indexed array access).
- $O(\log n)$ — **logarithmic**: halving the problem each step (binary search).
- $O(n)$ — **linear**: one pass over the data (a single loop).
- $O(n \log n)$ — **linearithmic**: efficient sorting (merge sort).
- $O(n^2)$ — **quadratic**: nested loops over the data.
- $O(2^n)$ — **exponential**: doubling with each added element — infeasible beyond small $n$.

The gulf between classes is enormous. For $n = 1{,}000{,}000$, a linear algorithm does a million steps while a quadratic one does a trillion — the difference between a second and weeks. This is why choosing the right _algorithm_ usually matters far more than the speed of the machine or micro-optimising the code.

Big-O describes **asymptotic** behaviour — the trend as $n \to \infty$ — deliberately dropping constants. So $O(n)$ and $O(100n)$ are the _same_ class, because for large enough $n$ the algorithm that scales better wins regardless of constant factors. This focus on scaling, not exact step counts, is what makes complexity a clean and powerful predictor.

> **Common pitfall:** confusing an algorithm's **complexity class** (how it _scales_) with its **raw speed on small inputs**. Big-O is about _asymptotic_ growth as $n \to \infty$, so it drops constants — $O(n)$ beats $O(n^2)$ for _large_ $n$ even if the quadratic one is faster on tiny inputs. A lower complexity class is not automatically faster on _every_ input; it is guaranteed to win once $n$ is large enough, which is what scalability means.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Ordering)* Order these complexity classes from the slowest-growing to the fastest-growing.

**2.** *(Table completion)* Complete the step counts for a linear algorithm (n steps) and a quadratic one (n squared steps).

**3.** *(Cloze bank)* Complete the description of big-O notation.

---

## Searching and Sorting

**Searching** (finding an item) and **sorting** (putting items in order) are the most fundamental algorithmic tasks, and they beautifully illustrate the complexity ideas of the previous lesson.

**Searching:**
- **Linear search** scans the list from the start, checking each element — $O(n)$. It works on _any_ list, sorted or not.
- **Binary search** repeatedly halves a **sorted** list: compare the target to the middle element, then discard the half that cannot contain it — $O(\log n)$, dramatically faster. Its precondition is essential: binary search **requires the data to be sorted**. On an unsorted list it gives wrong answers.

This reveals a classic trade-off: sorting a list first (once) lets you binary-search it many times cheaply — worthwhile when you search repeatedly.

**Sorting** arranges elements in order. Simple methods like **bubble sort**, **selection sort**, and **insertion sort** are intuitive but run in $O(n^2)$ — fine for small data, slow for large. Efficient methods — **merge sort** and **quicksort** — run in $O(n \log n)$, the best achievable for comparison-based sorting, using **divide and conquer**: split the data, sort the pieces (recursively), and combine. The gap between $O(n^2)$ and $O(n \log n)$ is the difference between a slow and a usable sort at scale.

Sorting is a workhorse subroutine: once data is sorted, searching, finding duplicates, computing medians, and merging datasets all become easier. Choosing between algorithms is a matter of the data size, whether it is already partly ordered, and how the operation will be repeated — the everyday application of complexity analysis.

> **Common pitfall:** applying **binary search to an unsorted list**. Binary search's speed comes entirely from the data being **sorted** — it discards half the list assuming order, so on unsorted data it will skip past the target and report it missing (or find the wrong thing). If the list is not sorted, either sort it first (then binary-search) or use linear search, which needs no ordering.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* A sorted list holds 64 items. Binary search halves the range at each comparison. In the worst case, how many halvings are needed to reduce it to one item?

**2.** *(Matrix grid)* Classify each algorithm by its complexity class.

**3.** *(Cloze bank)* Complete the reason binary search is fast.

---

## Programming for Mathematics

This closing lesson steps back to see how programming _extends_ mathematics — not replacing rigour, but amplifying what a mathematician can do. Across the sciences, computation has become a third pillar alongside theory and experiment.

**Numerical computation.** Many problems have no closed-form solution — a difficult integral, a root of a messy equation, a large linear system. Programs solve them **approximately**: numerical integration (Riemann-sum refinements), Newton's method for roots, and iterative linear solvers. Unit 6's integrals and Unit 5's Newton's method become executable.

**Symbolic computation.** **Computer algebra systems** manipulate expressions _exactly_ — differentiating, integrating, factoring, and solving symbolically, doing by machine the algebra a mathematician does by hand, but without arithmetic slips.

**Simulation and exploration.** Programs let you **experiment** with mathematics: generate data, test a conjecture on thousands of cases, visualise a function or a dynamical system, run a **Monte Carlo** simulation to estimate a probability by random sampling. This turns abstract structures into things you can see and probe.

**Proof and verification.** Computers assist proof — checking millions of cases (as in the four-colour theorem), and **proof assistants** verify each logical step of a formal proof with total rigour, catching errors no human referee would.

The essential caution for the mathematician: a program's output is only as trustworthy as its logic and its numerics. **Floating-point** results are approximate (Lesson 2), a simulation is only a sample, and a computation that runs is not a computation that is _correct_. Programming is a powerful mathematical instrument, but it demands the same scepticism and verification as any mathematical argument — the machine computes what you _told_ it to, not necessarily what you _meant_.

> **Common pitfall:** treating a **program's numerical output as exact mathematical truth**. Floating-point results are approximate and accumulate rounding error, a simulation estimates rather than proves, and a bug produces confident wrong answers. Computation _supports_ mathematical work — exploring, checking, approximating — but its output must be verified with the same rigour as any argument; a number a program prints is not automatically a theorem.

Random accent points scattered in a square with an inscribed quarter-circle; the fraction landing inside times 4 estimates pi, converging as more points are added — Monte Carlo approximation.

$$\pi \approx 4 \cdot \frac{\text{points inside}}{\text{total points}}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Category sort)* Sort each task by the kind of computation it needs.

**2.** *(Number line placement)* Approximate the integral of x squared from 0 to 1 using a single rectangle whose height is the function value at the midpoint 0.5. **Place the marker on the resulting estimate.

**3.** *(Cloze bank)* Complete the description of a simulated result.

---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
