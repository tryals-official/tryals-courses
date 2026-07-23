# Unit 5: Algorithmics

## What Makes an Algorithm Good

An **algorithm** is a finite, well-defined sequence of steps that solves a problem or computes a result. A good one is judged on several qualities, and getting the _right answer_ is only the first.

**Correctness** comes first: the algorithm must produce the right output for _every_ valid input, including the awkward edge cases. An algorithm that is fast but wrong is useless. Correctness is argued, ideally, with a proof or at least clear reasoning about why every case is handled — not just "it passed my tests."

**Efficiency** is next: how the algorithm's time and space grow with input size, expressed in Big-O. Two correct algorithms can differ by astronomical factors — an $O(n \log n)$ method versus an $O(2^n)$ one — so for large inputs efficiency often decides whether a problem is solvable at all.

**Clarity and simplicity** matter too: a clear algorithm is easier to verify, implement without bugs, and maintain. A subtle, "clever" algorithm that no one can follow is a liability.

An algorithm must also be **finite** (it terminates) and **definite** (each step is unambiguous). "Guess the answer" is not an algorithm; "for each item, do this exact thing, then stop" is. Algorithms are usually described in **pseudocode** — precise enough to reason about, free of any one language's syntax.

> **Common pitfall:** optimizing for speed before establishing **correctness**. A fast algorithm that gives wrong answers is worthless; a correct-but-slow one at least works. Get it right first, prove or argue why it is correct, and only then make it efficient. Premature optimization of an incorrect method wastes effort on the wrong thing.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Category sort)* A set of instructions counts as a genuine algorithm only if it is finite (it always stops) and definite (every step is unambiguous). Sort each description.

**2.** *(Multi select)* The lesson says an algorithm must be finite and definite. Select every description that violates at least one of those two requirements.
   - [ ] A procedure that may loop forever on some inputs
   - [ ] A step that says 'pick a good value somehow'
   - [ ] A procedure written in pseudocode rather than Python
   - [ ] A step that says 'if x > 0 print yes, else print no'
   - [ ] An instruction that says 'do whatever seems best'


**3.** *(Annotation text)* Highlight the span that names the lesson's common pitfall.

---

## Loop Invariants and Correctness Ideas

Testing shows the presence of bugs; **reasoning** can show their absence. The central tool for arguing an iterative algorithm is correct is the **loop invariant**: a property that is true _before_ the loop starts and remains true _after every iteration_. If you choose the invariant well, its truth at the loop's end proves the algorithm computed the right thing.

A loop-invariant argument has three parts, mirroring induction:
- **Initialization:** the invariant is true before the first iteration.
- **Maintenance:** if the invariant is true before an iteration, it is still true after that iteration.
- **Termination:** the loop ends, and the invariant at that point implies the desired result.

Consider summing a list: keep a running `total`, and let the invariant be "`total` equals the sum of the elements processed so far." It holds initially (`total = 0`, zero elements processed), it is maintained (each step adds the next element to both sides), and at termination (all elements processed) the invariant says `total` equals the sum of _all_ elements — exactly what we wanted.

This kind of reasoning catches **off-by-one** and boundary bugs that testing may miss, because it forces you to state precisely what is true at every point. It also clarifies _why_ an algorithm works, not merely _that_ it passed some cases. The same idea underlies proving that a search finds its target, that a sort produces sorted output, and that a loop terminates (via a decreasing quantity that cannot go below a bound).

> **Common pitfall:** confusing "the loop ran without crashing" with "the loop is correct." Only a well-chosen invariant, shown to hold at initialization and through every iteration, actually establishes correctness. Running a few cases can miss the boundary where an invariant silently breaks.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Ordering)* Order the three parts of a loop-invariant argument, which mirror mathematical induction.

**2.** *(Cloze bank)* Complete the definition of a loop invariant.

**3.** *(Multi select)* Select every requirement a loop invariant must satisfy to prove an algorithm correct.
   - [ ] It is true before the first iteration
   - [ ] It remains true after each iteration
   - [ ] At loop termination it implies the desired result
   - [ ] It is checked by running a few sample inputs
   - [ ] It guarantees the loop never throws an error


---

## Searching Strategies

**Searching** asks: is a target present in a collection, and where? The strategy depends entirely on whether the data is **sorted**.

**Linear search** scans elements one by one from the start until it finds the target or reaches the end. It works on _any_ collection, sorted or not, and is $O(n)$ in the worst case (the target is last or absent). It is the only option for unsorted data and is perfectly reasonable for small collections.

**Binary search** exploits sorted order to do far better. It compares the target to the **middle** element: if equal, done; if the target is smaller, discard the entire upper half and search the lower; if larger, discard the lower half. Each comparison halves the remaining range, so binary search is $O(\log n)$ — for a million elements, about 20 comparisons instead of a million. The catch is that it _requires_ the data to be sorted, and only supports structures with fast random access (like arrays).

| Search | Requires sorted? | Time |
|---|---|---|
| Linear | No | $O(n)$ |
| Binary | Yes | $O(\log n)$ |

The deeper lesson is that **structure enables efficiency**: sorting the data first (an $O(n \log n)$ cost paid once) makes every subsequent search $O(\log n)$ instead of $O(n)$. If you search a fixed dataset many times, that one-time sort pays for itself many times over — a classic case of investing structure to buy speed.

> **Common pitfall:** running binary search on **unsorted** data. Binary search's correctness depends on the sorted invariant — if the data is not sorted, discarding "the half that cannot contain the target" is invalid, and it will silently miss present elements. Verify the data is sorted (or sort it first) before using binary search.

A sorted array bar with binary search halving the highlighted range in accent at each step — full, then half, then quarter — converging on the target, while a side counter tallies log2(n) comparisons.

$$\text{binary search} = O(\log_2 n)$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A sorted array has 1024 elements. Binary search halves the remaining range with each comparison. In the worst case, how many comparisons does it need to shrink the range to a single element?

**2.** *(Ordering)* Order the 'invest structure to buy speed' workflow the lesson describes for searching a fixed dataset many times.

**3.** *(Error highlight)* A student compares the two searches. Highlight the one incorrect statement.

---

## Sorting Strategies

**Sorting** arranges a collection into order, and it is one of the most studied problems in computing because so much else (searching, deduplication, grouping) becomes easy once data is sorted.

The **simple sorts** are quadratic, $O(n^2)$, and easy to understand:
- **Bubble sort** repeatedly swaps adjacent out-of-order elements, letting large values "bubble" to the end.
- **Selection sort** repeatedly finds the smallest remaining element and places it next.
- **Insertion sort** builds a sorted prefix, inserting each new element into its correct place — and is genuinely fast on nearly-sorted or small inputs.

The **efficient sorts** are $O(n \log n)$ and are what real systems use for large data:
- **Merge sort** recursively splits the list in half, sorts each half, and **merges** the two sorted halves — a clean divide-and-conquer, always $O(n \log n)$, and **stable**.
- **Quicksort** partitions around a **pivot** (smaller elements left, larger right) and recurses; it is $O(n \log n)$ on average and very fast in practice, though a bad pivot gives an $O(n^2)$ worst case.
- **Heapsort** builds a heap and repeatedly extracts the extreme, guaranteeing $O(n \log n)$.

A key property is **stability**: a stable sort preserves the relative order of elements that compare equal. This matters when sorting by one field while wanting ties broken by a previous order (sort by last name, keeping first-name order within ties). Merge sort is stable; the usual quicksort is not.

There is a proven **lower bound**: any comparison-based sort needs at least $\Omega(n \log n)$ comparisons in the worst case — so $O(n \log n)$ is the best a general comparison sort can do.

> **Common pitfall:** assuming the "best" sort is always the fastest asymptotic one. For _small_ or _nearly-sorted_ inputs, a simple $O(n^2)$ insertion sort can beat an $O(n \log n)$ sort because of lower constant overhead — which is why real library sorts switch to insertion sort for small sub-arrays. Match the sort to the input.

A merge-sort recursion tree: a list splitting into halves down log n levels, then accent merge-arrows combining sorted runs back up, with a side note that each of the log n levels does O(n) work.

$$\text{merge sort} = O(n \log n)$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Category sort)* Sort each sorting algorithm by its typical asymptotic cost.

**2.** *(Matching)* Match each sort to its distinguishing property.

**3.** *(Cloze bank)* Complete the definition of a key sorting property.

---

## Divide-and-Conquer Reasoning

**Divide-and-conquer** is a powerful algorithmic pattern with three steps: **divide** the problem into smaller subproblems of the same kind, **conquer** each subproblem (recursively, until they are trivially small), and **combine** their solutions into a solution for the whole.

Merge sort is the model example: divide the list into two halves, recursively sort each (conquer), and merge the sorted halves (combine). Binary search is a degenerate divide-and-conquer that discards one half and recurses on the other. Many fast algorithms — fast exponentiation, closest-pair-of-points, fast Fourier transform, Karatsuba multiplication — follow the same shape.

The efficiency comes from the shrinking. When each step splits the problem into halves, the recursion has depth about $\log n$, and if the combine step is cheap enough, the whole runs far faster than a linear scan repeated. The cost is captured by a **recurrence** like $T(n) = 2\,T(n/2) + O(n)$, which solves to $O(n \log n)$ (this is merge sort's cost: two half-size subproblems plus a linear merge). The **Master Theorem** is a shortcut for solving such recurrences.

The pattern works when a problem has two features: it **decomposes** into independent subproblems of the same type, and their solutions **combine** cheaply into the whole answer. When both hold, divide-and-conquer often turns a quadratic brute force into an $O(n \log n)$ method.

> **Common pitfall:** applying divide-and-conquer when the **combine** step is expensive, or the subproblems **overlap** (solve the same thing repeatedly). If subproblems overlap, plain divide-and-conquer redoes work exponentially — that is exactly the situation where **dynamic programming** (which stores subproblem answers) is the right tool instead.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Formula builder)* Arrange the three steps of the divide-and-conquer pattern in order.

**2.** *(Matrix grid)* Classify each algorithm by whether it is a divide-and-conquer method.

**3.** *(Multi select)* Select every condition under which plain divide-and-conquer is the right tool.
   - [ ] The problem splits into independent subproblems of the same kind
   - [ ] The subproblem solutions combine cheaply
   - [ ] The subproblems overlap and are solved repeatedly
   - [ ] The combine step is expensive
   - [ ] Each subproblem is a smaller version of the original


---

## Greedy Choices and Counterexamples

A **greedy algorithm** builds a solution step by step, at each step making the choice that looks **locally best** — the most immediately beneficial — and never reconsidering. Greedy methods are simple and fast, but their great danger is that a series of locally optimal choices does not always produce a **globally optimal** result.

Sometimes greedy is provably correct. **Making change** with standard coin systems, scheduling to minimize lateness, and building a minimum spanning tree (Kruskal's and Prim's algorithms) are cases where the greedy choice is guaranteed optimal, provable via an **exchange argument** or the theory of **matroids**. When it works, greedy is wonderfully efficient.

But greedy often **fails**, and the way to see this is a **counterexample**. Consider making change for 30 using coins {1, 15, 20}: the greedy "take the largest coin ≤ remaining" picks 20, then needs 10 ones — 11 coins total. But the optimal is two 15s — just 2 coins. The greedy local choice (grab the biggest) led to a globally worse answer. A single counterexample is enough to _disprove_ that a greedy strategy is optimal.

The discipline, then, is: greedy is a tempting first idea, but you must **prove** it optimal (via an exchange or matroid argument) or **find a counterexample** that refutes it. Never assume a greedy algorithm is correct just because it is simple and often works.

> **Common pitfall:** assuming that because a greedy choice is locally optimal, the overall result is globally optimal. It frequently is not — as the coin example shows. To trust a greedy algorithm you must _prove_ its correctness; otherwise a single counterexample can demolish it.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* Making change for 30 using coins {1, 15, 20}, the greedy method takes the largest coin not exceeding the remaining amount at each step. How many coins does greedy use in total?

**2.** *(Cloze bank)* Complete the rule about disproving greedy optimality.

**3.** *(Matching)* Match each term to its meaning.

---

## Dynamic Programming Intuition

**Dynamic programming (DP)** is a technique for problems that break into **overlapping subproblems** — the same smaller problem is needed many times. The core idea is simple: **solve each subproblem once and store its answer**, then reuse the stored answer instead of recomputing it.

The classic motivation is the naive recursive **Fibonacci**: $F(n) = F(n-1) + F(n-2)$. Computed by plain recursion, $F(5)$ recomputes $F(3)$ twice, $F(2)$ three times, and the redundant work explodes _exponentially_. But there are only $n$ distinct subproblems ($F(0)$ through $F(n)$). Storing each as it is computed collapses the cost to $O(n)$.

DP comes in two styles that compute the same thing:
- **Memoization (top-down):** write the natural recursion, but cache each result the first time it is computed; on later calls, return the cached value.
- **Tabulation (bottom-up):** fill a table of subproblem answers from the smallest up, so each entry is ready when larger ones need it.

DP applies when a problem has two features: **overlapping subproblems** (the same subproblem recurs) and **optimal substructure** (an optimal solution is built from optimal solutions of its subproblems). Classic DP problems include shortest paths, edit distance, the knapsack problem, and longest common subsequence — each turning an exponential brute force into a polynomial-time solution by remembering subresults.

> **Common pitfall:** confusing dynamic programming with plain divide-and-conquer. Divide-and-conquer suits problems whose subproblems are **independent** (like merge sort's two halves). DP is for problems whose subproblems **overlap** — where the whole point is to _store_ and _reuse_ answers rather than recompute them.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Pattern sequence)* The Fibonacci sequence is F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. Fill the gap.

**2.** *(Matrix grid)* Classify each problem by whether it is a dynamic programming problem or a plain divide-and-conquer problem.

**3.** *(Error highlight)* A student explains dynamic programming. Highlight the one incorrect statement.

---

## Graph Algorithms and Traversal

Once data is a graph, the fundamental operation is **traversal**: systematically visiting vertices by following edges. Two strategies dominate, differing only in the order they explore — and that order comes directly from the data structure each uses.

**Breadth-first search (BFS)** explores level by level: it visits all neighbors of the start, then all _their_ unvisited neighbors, rippling outward. It uses a **queue** (FIFO) to remember what to visit next. On an unweighted graph, BFS finds the **shortest path** (fewest edges) from the start to every reachable vertex — a key property.

**Depth-first search (DFS)** plunges as deep as possible along one path before backtracking. It uses a **stack** (LIFO) — often the call stack, via recursion. DFS is natural for exploring all of a structure, detecting cycles, and **topological sorting** of a dependency graph.

Both visit each vertex and edge a constant number of times, so both run in $O(V + E)$. Both must track **visited** vertices to avoid revisiting and looping forever in a cyclic graph — a common bug is omitting the visited set.

For **weighted** graphs where edges have costs, shortest paths need more: **Dijkstra's algorithm** greedily expands the nearest unsettled vertex using a **priority queue (heap)**, finding shortest paths when weights are non-negative. It is a beautiful synthesis — a graph, a greedy choice, and a heap working together.

> **Common pitfall:** forgetting the **visited set**. In a graph with cycles, a traversal that does not mark vertices as visited will follow edges around a cycle forever (or explode exponentially re-exploring). Every graph traversal must track visited vertices to guarantee it terminates and each vertex is processed once.

One graph explored two ways: BFS rippling outward in numbered accent rings from the start (queue), and DFS plunging along one deep path then backtracking (stack) — the queue-vs-stack order made visual.

$$\text{BFS/DFS} = O(V + E)$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Grid path)* Each cell is a vertex; you may step only to an orthogonally adjacent cell, and blocked cells cannot be entered. Breadth-first search finds a fewest-step route. Trace a shortest path from the top-left cell to the bottom-right cell.

**2.** *(Matching)* Match each algorithm or concept to its data structure and use.

**3.** *(Numerical input)* In an unweighted graph, A connects to B and C; B connects to D; C connects to D; and D connects to E. What is the length, in number of edges, of the shortest path from A to E that BFS finds?

---

## Complexity Analysis

**Complexity analysis** determines how an algorithm's resource use — **time** (operations) and **space** (memory) — grows with input size $n$, so you can compare algorithms and predict scaling without running them.

The tool is **asymptotic notation**, which describes growth for large $n$, ignoring constants and lower-order terms:
- **Big-O** ($O$) is an _upper_ bound: the algorithm grows _at most_ this fast.
- **Big-Omega** ($\Omega$) is a _lower_ bound: _at least_ this fast.
- **Big-Theta** ($\Theta$) is a _tight_ bound: both — the algorithm grows _exactly_ this fast.

To analyze, count the dominant operations as a function of $n$: a single loop over the data is $O(n)$; a loop inside a loop is $O(n^2)$; halving each step is $O(\log n)$; and constant work regardless of $n$ is $O(1)$. Only the fastest-growing term matters: $O(n^2 + n)$ is just $O(n^2)$, because for large $n$ the $n^2$ term dominates.

Costs can differ by **case**. The **worst case** (the input that makes the algorithm slowest) is the usual guarantee — it bounds performance no matter what. The **average case** describes typical behavior over expected inputs (quicksort is $O(n \log n)$ average but $O(n^2)$ worst). The **best case** is often uninformative.

Do not forget **space complexity**: an algorithm may be fast but memory-hungry. Merge sort is $O(n \log n)$ time but needs $O(n)$ extra space to merge, while heapsort sorts in place with $O(1)$ extra — another space–time trade-off to weigh.

> **Common pitfall:** keeping constant factors and lower-order terms in a Big-O answer, writing "$O(3n^2 + 5n + 7)$." Asymptotic analysis drops constants and lower-order terms: that is simply $O(n^2)$. The whole point is to compare _growth shape_, not exact operation counts — the dominant term alone captures how the algorithm scales.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Ordering)* Order these complexity classes from slowest-growing to fastest-growing.

**2.** *(Numerical input)* An algorithm performs exactly 3n^2 + 5n + 7 operations. For n = 10, what is the exact number of operations?

**3.** *(Error highlight)* A student explains asymptotic analysis. Highlight the one incorrect statement.

---

## Integrated Algorithm Design Practice

Real algorithm design draws on every idea in this unit at once: choose a strategy, back it with the right data structures, argue correctness, and analyze complexity. The skill is knowing which tool the problem calls for.

A practical design workflow:
1. **Understand the problem** precisely: the inputs, the required output, the constraints, and the edge cases. Restate it in your own words.
2. **Choose a strategy.** Ask: does it decompose into independent halves (**divide-and-conquer**)? Overlapping subproblems (**dynamic programming**)? A locally-optimal choice that provably works (**greedy**)? Or a network to explore (**graph traversal**)? Sometimes a brute force is fine; sometimes it must be beaten.
3. **Pick data structures** that make the strategy's hot operations fast — a heap for repeatedly taking the extreme, a hash table for keyed lookup, a sorted array for binary search.
4. **Argue correctness** — a loop invariant, an exchange argument, or the structure of the recursion.
5. **Analyze complexity** — time and space — and compare against the constraints. If it is too slow, revisit the strategy.
6. **Test** with typical, edge, and adversarial inputs.

For example, "find the k most frequent words in a huge text": _count_ with a **hash table** ($O(n)$), then select the top k with a **heap** of size k ($O(m \log k)$ over $m$ distinct words) rather than fully sorting — a design that consciously combines a strategy (selection via heap) with the right structures, justified by its complexity.

The mature lesson: these techniques are not separate exam topics but an **integrated design toolkit**. A strong algorithmist moves fluidly among them, choosing and combining whatever the problem demands, always balancing correctness against efficiency.

> **Common pitfall:** reaching for a complex technique (dynamic programming, an exotic data structure) when a simple approach meets the constraints — or, conversely, brute-forcing a problem whose size demands a better strategy. Good design matches the technique to the problem's actual size and structure, neither over- nor under-engineering.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Ordering)* Order the first five steps of the design workflow the lesson recommends.

**2.** *(Flow chart)* This chart is the design for 'find the k most frequent words in a huge text'. Fill the two empty boxes.

**3.** *(Multi select)* For 'find the k most frequent words in a huge text', select every design decision the lesson endorses.
   - [ ] Count frequencies with a hash table
   - [ ] Select the top k with a heap of size k
   - [ ] Fully sort all distinct words to get the top k
   - [ ] Justify the design by analysing its complexity
   - [ ] Use dynamic programming to count the words


---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
