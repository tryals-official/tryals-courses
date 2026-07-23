# Unit 4: Data Structures

## Abstract Data Types and Interfaces

A **data structure** is a concrete way of organizing data in memory; an **abstract data type (ADT)** is the _behavior_ that organization provides, described independently of how it is built. The distinction is the foundation of this whole unit: the ADT is the **interface** (a set of operations and their promised behavior), and a data structure is one **implementation** of it.

For example, a **List** ADT promises operations like _get(i)_, _add(x)_, _remove(i)_, and _size()_. It can be _implemented_ by a contiguous array or by a chain of linked nodes — two structures with very different performance, both honoring the same List interface. Because callers depend on the interface, not the implementation, you can swap one for the other to change performance without changing the code that uses the list.

Choosing a data structure is really about which operations you need to be _fast_. Each implementation makes some operations cheap and others expensive, so there is no universally "best" structure — only the best fit for a given pattern of use. This unit studies the standard ADTs (list, stack, queue, tree, dictionary, priority queue, graph) and the structures that implement them, always asking: _which operations does this make fast, and at what cost?_

> **Common pitfall:** conflating the ADT with a particular implementation — thinking "a list _is_ an array." A list is an **interface**; an array is one way to implement it (a linked structure is another). Keeping the interface and implementation separate is what lets you reason about behavior first and performance second.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A List ADT is implemented by a contiguous array holding 1000 elements. Removing the element at index 0 works by shifting every element after it one place towards the front. How many elements have to be moved?

**2.** *(Venn diagram)* A List ADT can be implemented by an array or by linked nodes. Place each statement according to which implementations it holds for.

**3.** *(Cloze bank)* Complete the statement about choosing between implementations of the same ADT.

---

## Arrays, Lists, and Memory Layout

The two fundamental sequence structures differ in one thing — **memory layout** — and everything about their performance follows from it.

An **array** stores elements in a single **contiguous** block of memory. Because the elements are adjacent and equally sized, the address of element $i$ is computed directly (base address + $i \times$ element size), giving $O(1)$ **random access** — jump to any index instantly. The cost is rigidity: inserting or removing in the middle requires shifting all following elements, which is $O(n)$, and a fixed array cannot grow beyond its allocated size.

A **linked list** stores each element in a separate **node** that also holds a **pointer** to the next node. The nodes may sit anywhere in memory; the chain is held together by the pointers. This makes insertion or removal at a known position $O(1)$ — just relink a couple of pointers, no shifting — and the list can grow freely. The cost is that there is no direct indexing: to reach element $i$ you must _follow_ the chain from the start, which is $O(n)$ **access**.

| Operation | Array | Linked list |
|---|---|---|
| Access element i | $O(1)$ | $O(n)$ |
| Insert/remove at known position | $O(n)$ | $O(1)$ |
| Grow beyond capacity | Costly / fixed | Easy |

The choice is a direct trade-off: arrays for fast indexing and cache-friendly scanning; linked lists for cheap insertion/removal and flexible size.

> **Common pitfall:** assuming linked lists are always "faster" because insertion is $O(1)$. That $O(1)$ insertion assumes you _already hold_ the position; _finding_ it is still $O(n)$, and arrays' contiguous layout makes scanning far more cache-friendly in practice. Neither structure is universally better — it depends on which operations dominate.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* An array starts at memory address 1000 and each element occupies 4 bytes. At what address does the element at index 7 begin?

**2.** *(Table completion)* Complete the comparison of an array with a linked list, using the growth classes from the lesson.

**3.** *(Pattern sequence)* A growable array doubles its capacity each time it fills. Its capacities, in order, are listed below. Fill the gap.

---

## Stacks and Queues

Some of the most useful structures are deliberately _restricted_ — they allow adding and removing only at particular ends, and that restriction is exactly what makes them useful.

A **stack** is a **last-in, first-out (LIFO)** structure. You **push** an element onto the top and **pop** the top element off; **peek** looks at the top without removing it. The last thing pushed is the first popped — like a stack of plates. Stacks appear everywhere: the **call stack** that tracks function calls, undo/redo histories, matching brackets, and evaluating expressions.

A **queue** is a **first-in, first-out (FIFO)** structure. You **enqueue** at the back and **dequeue** from the front; the first element added is the first removed — like a line of people. Queues model any "serve in arrival order" scenario: print jobs, task scheduling, and **breadth-first** graph traversal.

Both are ADTs and can be implemented with either an array or a linked list; when well implemented, push/pop and enqueue/dequeue are all $O(1)$. A common variant is the **deque** (double-ended queue), which allows adding and removing at _both_ ends, generalizing both a stack and a queue.

| Structure | Order | Add | Remove |
|---|---|---|---|
| Stack | LIFO | push (top) | pop (top) |
| Queue | FIFO | enqueue (back) | dequeue (front) |

> **Common pitfall:** mixing up LIFO and FIFO — pushing to a stack and expecting to remove the _oldest_ item, or treating a queue like a stack. A stack always returns the most recently added element; a queue always returns the oldest. Match the structure to whether you need "newest first" or "oldest first."

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A stack starts empty. The operations performed are: push 1, push 2, push 3, pop, push 4, pop, pop. What value does the last pop return?

**2.** *(Flow chart)* This chart checks that brackets in a string are balanced, using a stack. Fill the three empty boxes, choosing from these five phrases: 'Is it an opening bracket?', 'Push it onto the stack', 'Pop the stack and check it matches', 'Enqueue it at the back', 'Is the stack full?'. Two phrases are never used.

**3.** *(Multi select)* Select every statement the lesson supports about stacks and queues.
   - [ ] Both are ADTs and can be built on an array or on a linked list
   - [ ] When well implemented, push, pop, enqueue and dequeue are all O(1)
   - [ ] peek returns the top of a stack without removing it
   - [ ] A queue returns whichever element has the highest priority
   - [ ] A deque generalises both a stack and a queue


---

## Trees and Hierarchical Storage

A **tree** stores data hierarchically. It has a single **root** node at the top; every node may have **child** nodes, and each node except the root has exactly one **parent**. Nodes with no children are **leaves**. Trees model naturally-nested data: file systems, organization charts, the structure of a program, family lineage.

A **binary tree** restricts each node to at most two children (left and right). The most important variant is the **binary search tree (BST)**, which maintains an ordering **invariant**: for every node, all values in its _left_ subtree are less than the node's value, and all values in its _right_ subtree are greater. This invariant makes searching efficient — to find a value, compare it to the root and go left or right, discarding half the remaining tree at each step, exactly like binary search.

When a BST is **balanced** (its subtrees stay roughly equal in height), search, insertion, and deletion are all $O(\log n)$ — the tree's **height** is about $\log n$, and each operation walks one path from root to leaf. But a BST can **degenerate**: inserting already-sorted data makes every node have only one child, producing a tree that is really a linked list of height $n$, and operations degrade to $O(n)$. Self-balancing trees (AVL, red-black) exist precisely to keep the height logarithmic.

Trees are traversed in standard orders: **in-order** (left, node, right — which visits a BST's values in sorted order), **pre-order**, **post-order**, and **level-order** (breadth-first).

> **Common pitfall:** assuming a binary search tree gives $O(\log n)$ operations no matter what. That holds only when the tree is **balanced**. Inserting sorted data degenerates the BST into a linked list of height $n$, and operations become $O(n)$ — which is exactly why self-balancing trees exist.

A balanced binary search tree with an accent search path descending from root to a target, halving the visible subtree at each step.

$$\text{balanced height} \approx \log_2 n$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* The values 1, 2, 3, 4, 5, 6, 7, 8 are inserted into an empty binary search tree in that increasing order. Counting the nodes on the longest path from the root down to a leaf, what is the tree's height?

**2.** *(Matrix grid)* In the tree with root 50, children 30 and 70, where 30 has children 20 and 40 and 70 has children 60 and 80, classify each node by its role.

**3.** *(Numerical input)* A perfectly balanced binary search tree holds 1023 values, filling every level completely. At most how many nodes does a single search compare against?

---

## Hashing and Dictionaries

The **dictionary** (map) ADT stores **key–value** pairs and supports fast lookup, insertion, and deletion _by key_. The structure that makes this fast is the **hash table**.

A hash table keeps an array of **buckets**. A **hash function** takes a key and computes an integer, which (reduced modulo the array size) gives the **index** of the bucket where that key's value is stored. To look up a key, you hash it, jump to that bucket, and find the value — no scanning. When the hash function spreads keys evenly, lookup, insertion, and deletion are all **$O(1)$ on average**.

The complication is **collisions**: two different keys can hash to the same bucket. Every real hash table has a **collision-resolution** strategy. **Chaining** stores a small list at each bucket, holding all keys that landed there. **Open addressing** instead probes to a different bucket by a fixed rule when the first is taken. Either way, collisions must be handled, or values would overwrite each other.

Performance depends on the **load factor** (elements ÷ buckets). As the table fills, collisions grow and operations slow, so hash tables **resize** (allocate a larger array and rehash everything) when the load factor gets too high, keeping average operations $O(1)$. The **worst case** — many keys colliding into one bucket — is $O(n)$, but a good hash function makes that vanishingly unlikely.

> **Common pitfall:** believing hash-table lookups are _guaranteed_ $O(1)$. The $O(1)$ is an _average_ under a good hash function and reasonable load factor. Bad hashing (or an adversary) can pile many keys into one bucket, degrading operations toward $O(n)$. Constant time is the expected case, not a guarantee.

A key flowing through a hash-function box to a number, then modulo the bucket count into one of several bucket slots; a second key colliding into the same slot forms an accent chain beneath it — hashing and chaining.

$$\text{index} = \text{hash(key)} \bmod m$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A hash table has 16 buckets, and a key's hash function returns 1000. Reducing that value modulo the number of buckets, which bucket does the key belong in?

**2.** *(Numerical input)* A hash table doubles its number of buckets whenever the load factor would exceed 0.75. It currently has 8 buckets holding 6 elements, and a seventh element is inserted. How many buckets does the table have afterwards?

**3.** *(Category sort)* Sort each description by the collision-resolution strategy it describes.

---

## Heaps and Priority Management

Sometimes you need not "oldest first" (a queue) but "most important first." The **priority queue** ADT serves elements in order of **priority** rather than arrival: you insert items with priorities, and each removal returns the highest- (or lowest-) priority item. The structure that implements it efficiently is the **binary heap**.

A binary heap is a **complete binary tree** (filled level by level, left to right) that satisfies the **heap property**: in a **max-heap**, every parent is greater than or equal to its children, so the maximum sits at the **root**; a **min-heap** is the mirror, with the minimum at the root. The extreme element is therefore always available in $O(1)$ at the top.

Insertion and removal keep the heap property by "bubbling":
- **Insert** places the new element at the next open leaf, then **sifts it up**, swapping with its parent while it is larger (in a max-heap), until the property holds — $O(\log n)$, the tree's height.
- **Remove-max** takes the root, moves the last leaf to the root, then **sifts it down**, swapping with its larger child until the property holds — also $O(\log n)$.

A neat implementation detail: because the tree is complete, a heap is stored compactly in a plain **array**, with a node at index $i$ having children at $2i+1$ and $2i+2$ — no pointers needed. Heaps power priority scheduling, Dijkstra's shortest paths, and the $O(n \log n)$ **heapsort**.

> **Common pitfall:** expecting a heap to be _fully sorted_. It is only _partially_ ordered — the heap property relates each parent to its children, but siblings and cousins are unordered. A heap guarantees fast access to the single extreme element, not a sorted sequence; to get sorted output you must repeatedly remove the root.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A binary heap is stored in an array, and the node at index i has children at indices 2i + 1 and 2i + 2. What is the index of the right child of the node at index 4?

**2.** *(Matrix grid)* Each row is an array holding a complete binary tree, read level by level. Classify each one.

**3.** *(Pattern sequence)* In a heap stored as an array, the first node of each level sits at index 0, then 1, then 3, then 7, and so on. Fill the gap.

---

## Graph Representations

A **graph** models things and the connections between them: it is a set of **vertices** (nodes) joined by **edges**. Graphs are astonishingly general — road maps, social networks, web-page links, dependency chains, and molecules are all graphs. Edges may be **directed** (one-way, like "A follows B") or **undirected** (mutual), and may carry a **weight** (a distance, cost, or capacity).

Two standard ways represent a graph in memory, and choosing between them is a classic space–time trade-off:

An **adjacency matrix** is a $V \times V$ grid where entry $(i, j)$ records whether (or how strongly) vertex $i$ connects to vertex $j$. Checking whether two specific vertices are connected is $O(1)$ — just read one cell — but the matrix always uses $O(V^2)$ space regardless of how many edges exist. It suits **dense** graphs (many edges).

An **adjacency list** stores, for each vertex, a list of its neighbors. It uses $O(V + E)$ space — proportional to the actual number of edges — and lets you efficiently iterate a vertex's neighbors, which most graph algorithms do. It suits **sparse** graphs (few edges), which most real graphs are. The trade-off: checking a specific edge is slower (scan the neighbor list) than the matrix's $O(1)$.

| Representation | Space | Check edge (u,v) | Best for |
|---|---|---|---|
| Adjacency matrix | $O(V^2)$ | $O(1)$ | Dense graphs |
| Adjacency list | $O(V + E)$ | $O(\deg u)$ | Sparse graphs |

> **Common pitfall:** using an **adjacency matrix** for a large **sparse** graph. If a million-vertex graph has only a few edges per vertex, a matrix wastes $O(V^2)$ — a trillion cells, almost all empty — while an adjacency list uses $O(V + E)$, a tiny fraction. Match the representation to the graph's density.

A small graph beside its two representations: a V×V grid mostly empty with a few accent-marked cells (matrix), and a set of short per-vertex neighbor lists (list) — the wasted cells of the sparse matrix highlighted.

$$\text{matrix } O(V^2), \;\; \text{list } O(V + E)$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A graph with 1000 vertices is stored as an adjacency matrix. How many cells does the matrix contain?

**2.** *(Grid path)* Each free cell is a vertex of a graph and each step to an adjacent free cell is an edge; the blocked cells are not part of the graph. Trace the route from the vertex at the top-left to the vertex at the bottom-right.

**3.** *(Multi select)* Select every statement the lesson supports about the two graph representations.
   - [ ] A matrix answers 'is u joined to v' in O(1)
   - [ ] A matrix uses O(V squared) space however few edges exist
   - [ ] A list uses space proportional to the vertices plus the edges
   - [ ] A list answers 'is u joined to v' faster than a matrix does
   - [ ] Most real graphs are sparse


---

## Choosing a Data Structure by Workload

There is no universally best data structure — only the best fit for a **workload**, the mix of operations a program actually performs. Choosing well means asking: _which operations do I do most, and which must be fast?_ Then pick the structure whose cheap operations match your hot path.

A quick decision guide by dominant need:

| Need | Good choice | Why |
|---|---|---|
| Fast index access | Array | $O(1)$ random access |
| Frequent insert/remove at ends | Stack / queue / deque | $O(1)$ at the ends |
| Lookup by key | Hash table (dictionary) | $O(1)$ average by key |
| Sorted order + range queries | Balanced BST | $O(\log n)$ ordered ops |
| Repeatedly take the extreme | Heap (priority queue) | $O(1)$ peek, $O(\log n)$ update |
| Model connections | Graph | Vertices and edges |

The same task can favor different structures depending on the pattern of use. If you mostly _look items up by name_, a hash table wins; if you also need them _in sorted order_ or need _range_ queries ("all keys between X and Y"), a balanced BST is better despite slower single lookups. If you _repeatedly remove the smallest_, a heap beats sorting the whole collection each time.

The discipline generalizes the space–time trade-off: you often trade extra memory (an index, a secondary structure) for faster operations. A mature programmer profiles the workload, identifies the dominant operations, and chooses — or combines — structures to make those fast.

> **Common pitfall:** picking a data structure by habit or familiarity rather than by the workload. A hash table is a superb default for keyed lookup but is the _wrong_ choice when you need sorted order or range queries — there a balanced tree fits. Let the operations you perform most, not habit, drive the choice.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A collection holds 100 items. You must remove the smallest item five times, each time by scanning every remaining item, at a cost of one comparison per remaining item. How many comparisons in total?

**2.** *(Venn diagram)* Place each operation according to which of the two keyed structures performs it efficiently.

**3.** *(Multi select)* Select every statement the lesson supports about choosing structures.
   - [ ] There is no universally best data structure
   - [ ] The right choice depends on which operations dominate
   - [ ] Extra memory can often be traded for faster operations
   - [ ] A hash table is the correct default for every keyed problem
   - [ ] Two structures can be combined so that each handles what it is best at


---

## Debugging Structural Invariants

Every well-designed data structure maintains **invariants**: properties that must hold _before and after_ every operation. A bug in a structure is almost always a **broken invariant** — an operation that left the structure in a state its rules forbid. Making invariants explicit is one of the most powerful debugging tools there is.

Each structure has characteristic invariants:
- A **binary search tree**: for every node, left-subtree values < node < right-subtree values.
- A **heap**: every parent stands in the correct order relation to its children.
- A **doubly linked list**: for adjacent nodes, `a.next.prev == a` — the back-pointer of your successor points back to you.
- A **hash table**: every key resides in the bucket its hash function selects.

To debug, write a **checker** — a function that walks the structure and verifies its invariant holds — and run it after each operation while hunting a bug. The moment the checker fails, you have caught the operation that corrupted the structure, at the exact point of corruption, instead of discovering the damage far downstream when a later read returns nonsense.

This is the structural version of "fail fast": rather than trusting that operations preserve the invariant, you _verify_ it. Invariant checkers are cheap to write, catch whole classes of subtle bugs (a mis-linked pointer, an unbalanced subtree, a mis-hashed key), and double as executable documentation of what the structure guarantees.

> **Common pitfall:** debugging a data structure by only inspecting the _output_ of operations, rather than checking the **invariant** directly. A corrupted structure may return correct-looking results for a while before failing bizarrely much later. Checking the invariant after each operation localizes the bug to the exact operation that broke it.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A structure is claimed to be a binary search tree. Its root is 50; the root's left child is 30 and its right child is 70; node 30 has children 20 and 60. Exactly one value sits where the BST invariant forbids. Which value is it?

**2.** *(Table completion)* For each structure and stated invariant, say whether the invariant holds. Answer yes or no.

**3.** *(Category sort)* Sort each statement about a binary search tree by whether it is an invariant of the structure.

---

## Integrated Data-Structure Reasoning

Real problems rarely need a single structure — they combine several, each handling the part it makes fast. The art is decomposing a problem into sub-tasks and matching each to the right structure.

Consider a task manager that must: add tasks with priorities, always run the **most urgent** next, look up any task by **id** to update or cancel it, and list tasks in **sorted deadline** order. No one structure does all four well, so you compose:

- A **heap (priority queue)** to always extract the most urgent task in $O(\log n)$.
- A **hash table** mapping task id → task, for $O(1)$ lookup, update, and cancellation by id.
- A **balanced BST** keyed by deadline, to iterate tasks in deadline order and answer range queries ("due this week") in $O(\log n)$.

The structures cooperate: adding a task inserts it into all three; running the next task pops the heap and removes the entry from the others. The extra memory (three references to each task) buys fast operations across every access pattern the workload demands — a deliberate space–time trade-off.

This is the mature skill the unit builds toward: given a workload, identify the distinct access patterns, choose (or combine) structures so each is efficient, respect each structure's invariants, reason about the overall complexity, and test with edge cases (an empty manager, duplicate deadlines, cancelling a running task). Data structures are not isolated facts but a **toolkit you compose**.

> **Common pitfall:** forcing a single data structure to serve a workload with several distinct access patterns, and paying $O(n)$ for the operations it does not support. When a problem needs fast keyed lookup _and_ fast extreme-extraction _and_ sorted iteration, the right answer is usually to **combine** structures — each doing what it is best at — not to compromise on one.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Matrix grid)* The task manager must support four things. Assign each to the structure the lesson uses for it.

**2.** *(Venn diagram)* Place each task-manager operation according to which of the two structures makes it fast.

**3.** *(Multi select)* Select every edge case the lesson says the task manager should be tested against.
   - [ ] An empty manager with no tasks at all
   - [ ] Two tasks sharing the same deadline
   - [ ] Cancelling a task that is currently running
   - [ ] A task whose id is a very large number
   - [ ] More tasks than the machine has memory for


---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
