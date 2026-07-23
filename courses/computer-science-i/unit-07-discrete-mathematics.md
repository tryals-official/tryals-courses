# Unit 7: Discrete Mathematics

## Sets and Set Operations

A **set** is an unordered collection of distinct objects, its **elements**. We write $x \in A$ for "$x$ is in $A$" and $x \notin A$ for "$x$ is not in $A$." Sets are the bedrock of discrete mathematics — numbers, relations, functions, and even logic are all defined in terms of sets. Two features matter: a set has **no order** ($\{1,2\} = \{2,1\}$) and **no duplicates** (listing an element twice changes nothing).

Key relationships and special sets:
- $A$ is a **subset** of $B$ (written $A \subseteq B$) if every element of $A$ is also in $B$.
- The **empty set** $\emptyset$ has no elements and is a subset of every set.
- The **cardinality** $|A|$ is the number of elements in $A$.

The operations combine sets into new sets:
- **Union** $A \cup B$ — elements in $A$ _or_ $B$ (or both).
- **Intersection** $A \cap B$ — elements in _both_ $A$ and $B$.
- **Difference** $A \setminus B$ — elements in $A$ but _not_ in $B$.
- **Complement** $\overline{A}$ — everything (in the universe) _not_ in $A$.

These mirror boolean logic exactly: union is OR, intersection is AND, complement is NOT. So **De Morgan's laws** hold for sets too: $\overline{A \cup B} = \overline{A} \cap \overline{B}$ and $\overline{A \cap B} = \overline{A} \cup \overline{B}$. A crucial counting rule is **inclusion-exclusion**: $|A \cup B| = |A| + |B| - |A \cap B|$ — you add the sizes and subtract the overlap counted twice.

> **Common pitfall:** confusing **union** with **intersection**, or forgetting the overlap in **inclusion-exclusion**. Union collects everything in _either_ set; intersection keeps only what is in _both_. And $|A \cup B|$ is _not_ simply $|A| + |B|$ — that double-counts the shared elements, so you must subtract $|A \cap B|$.

Two overlapping set circles A and B; the lens overlap flashes in accent as it is subtracted once, illustrating |A ∪ B| = |A| + |B| − |A ∩ B|.

$$|A \cup B| = |A| + |B| - |A \cap B|$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Venn diagram)* Let A be the multiples of 2 in {1, 2, ..., 12} and let B be the multiples of 3 in the same range. Place each number where it belongs.

**2.** *(Matrix grid)* Let A = {1, 2, {3, 4}} — a set with three elements, the third of which is itself a set. Decide whether each claim about A is true or false.

**3.** *(Numerical input)* Let A = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and B = {2, 4, 6, 8, 10, 12}. How many elements does A minus B have?

---

## Propositional Logic

A **proposition** is a statement that is definitely true or false — "7 is prime" (true), "$3 > 5$" (false). Propositional logic builds compound statements from simple ones using **connectives**, and gives rules to determine their truth. This is the logic underlying both mathematical proof and the boolean circuits of the previous unit — the connectives are exactly the logic gates.

The connectives, with the same truth behavior as gates:
- **Negation** $\neg p$ ("not $p$") — flips the truth value.
- **Conjunction** $p \land q$ ("$p$ and $q$") — true only when both are true.
- **Disjunction** $p \lor q$ ("$p$ or $q$") — true when at least one is true.
- **Implication** $p \to q$ ("if $p$ then $q$") — the subtle one.
- **Biconditional** $p \leftrightarrow q$ ("$p$ if and only if $q$") — true when $p$ and $q$ match.

**Implication** deserves care: $p \to q$ is false in _exactly one_ case — when $p$ is true but $q$ is false. In particular, when $p$ is _false_, the implication is **vacuously true** regardless of $q$ ("if the moon is cheese, then $2+2=5$" is a true implication). This trips up nearly everyone at first.

A **tautology** is a proposition true under _every_ assignment (like $p \lor \neg p$); a **contradiction** is false under every assignment. Two propositions are **logically equivalent** if they have the same truth table — for example, $p \to q$ is equivalent to $\neg p \lor q$, and the **contrapositive** $\neg q \to \neg p$ is equivalent to $p \to q$ (a fact heavily used in proofs).

> **Common pitfall:** misreading **implication**. $p \to q$ is _not_ false when $p$ is false — it is **vacuously true**. The only way an implication fails is a true premise with a false conclusion ($p$ true, $q$ false). Also, $p \to q$ is _not_ the same as its converse $q \to p$; confusing the two is a classic logical error.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Truth table)* Complete the output column for the implication 'if p then q'. Remember that it fails in only one case.

**2.** *(Numerical input)* A compound proposition is built from 4 distinct propositional variables. How many rows does its complete truth table have?

**3.** *(Category sort)* Two original statements are given: 'If it rains then the match is cancelled' and 'If n is even then n squared is even'. Sort each statement below by its relationship to the matching original.

---

## Predicate Logic and Quantifiers

Propositional logic cannot express "every integer has a successor" — it has no way to talk about _all_ or _some_ objects. **Predicate logic** adds **predicates** — statements $P(x)$ with a variable, true or false depending on $x$ — and **quantifiers** that range over a domain.

The two quantifiers:
- **Universal** $\forall x\, P(x)$ — "for _all_ $x$, $P(x)$": true when $P(x)$ holds for every $x$ in the domain.
- **Existential** $\exists x\, P(x)$ — "there _exists_ an $x$ with $P(x)$": true when at least one $x$ satisfies $P$.

The order of mixed quantifiers matters enormously. $\forall x\, \exists y\, P(x,y)$ ("every $x$ has some $y$") is generally _different_ from $\exists y\, \forall x\, P(x,y)$ ("some single $y$ works for all $x$") — the second is much stronger. "Every person has a mother" is true; "there is one mother of everyone" is false. Swapping quantifiers can silently change the meaning.

Negating quantified statements follows a clean rule that flips the quantifier and negates the predicate:
$$\neg \forall x\, P(x) \equiv \exists x\, \neg P(x), \qquad \neg \exists x\, P(x) \equiv \forall x\, \neg P(x).$$
In words: the negation of "all are $P$" is "some is not $P$" (one **counterexample** suffices), and the negation of "some is $P$" is "none is $P$." This is why a universal claim is disproved by a single counterexample.

> **Common pitfall:** swapping the **order of quantifiers** or negating them incorrectly. $\forall x\, \exists y$ is not the same as $\exists y\, \forall x$. And $\neg \forall x\, P(x)$ is $\exists x\, \neg P(x)$ — "not all" means "at least one isn't," _not_ "none is." Negation flips $\forall$ to $\exists$ (and vice versa) while negating the inside.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Matrix grid)* The domain is {1, 2, 3, 4, 5, 6}. Decide whether each quantified statement is true or false over that domain.

**2.** *(Numerical input)* The domain is {1, 2, 3, 4, 5, 6} and the predicate P(x) says that x squared is greater than 10. For how many values of x in the domain is P(x) true?

**3.** *(Ordering)* Four statements are built from the same two-place predicate P(x, y). Order them from the weakest claim, which is the easiest to satisfy, to the strongest.

---

## Proof Techniques

Mathematics advances by **proof** — an airtight chain of logical steps from accepted premises (axioms, definitions, prior theorems) to a conclusion. Unlike experiment, a correct proof settles a claim for _all_ cases at once, forever. Several standard techniques cover most theorems.

**Direct proof** assumes the hypothesis and derives the conclusion step by step. To prove "if $n$ is even then $n^2$ is even," write $n = 2k$, so $n^2 = 4k^2 = 2(2k^2)$, which is even. Straight-line reasoning from assumption to conclusion.

**Proof by contrapositive** proves $p \to q$ by instead proving the equivalent $\neg q \to \neg p$. Since a statement and its contrapositive are logically equivalent (Lesson 2), this is completely valid, and sometimes the contrapositive is far easier. To prove "if $n^2$ is even then $n$ is even," it is cleaner to prove "if $n$ is odd then $n^2$ is odd."

**Proof by contradiction** assumes the claim is _false_, then derives a logical impossibility, so the assumption must have been wrong. The classic example proves $\sqrt{2}$ is irrational: assume it equals a fraction in lowest terms, and derive that both numerator and denominator are even — contradicting "lowest terms."

**Disproof** is different and often easier: to show a universal claim is false, exhibit a single **counterexample**. One example where the claim fails demolishes it; you never need to prove the negation for all cases.

> **Common pitfall:** confusing **proof by contradiction** with **proof by contrapositive**, and misusing counterexamples. Contradiction assumes the whole statement is false and seeks _any_ absurdity; contrapositive proves the equivalent $\neg q \to \neg p$ directly. And a counterexample _disproves_ a universal but a single supporting example never _proves_ one — "it works for $n=1,2,3$" is not a proof.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Ordering)* Order the steps of a direct proof that if n is even then n squared is even.

**2.** *(Numerical input)* Consider the claim that every odd integer greater than 1 is prime. What is the smallest counterexample?

**3.** *(Matching)* Match each proof technique to the move that defines it.

---

## Mathematical Induction

Many statements must hold for _every_ natural number — "the sum $1 + 2 + \dots + n = \frac{n(n+1)}{2}$ for all $n$." You cannot check infinitely many cases, so **mathematical induction** proves them all at once. The image is a line of dominoes: if the first falls, and each falling domino knocks the next, then _all_ fall.

Induction has two parts:
1. **Base case** — prove the statement for the smallest value (usually $n = 1$ or $n = 0$). This is knocking over the first domino.
2. **Inductive step** — assume the statement holds for an arbitrary $n = k$ (the **inductive hypothesis**), and prove it then holds for $n = k+1$. This is showing each domino knocks the next.

Together they establish the statement for all $n \ge$ the base. Neither part alone is enough: the base case without the step proves only one value; the step without the base proves nothing (the dominoes might all be standing, with none pushed).

**Strong induction** is a variant where the inductive step may assume the statement for _all_ values up to $k$ (not just $k$) — useful when a case depends on several smaller ones, as in proving every integer $> 1$ has a prime factorization. It is logically equivalent to ordinary induction but often more convenient.

Induction is not just a proof tool; it mirrors **recursion** in programming — a base case plus a step that reduces to a smaller instance is exactly how recursive functions terminate and how their correctness is proved.

> **Common pitfall:** forgetting the **base case**, or misusing the **inductive hypothesis**. Without the base case, the inductive step proves nothing — you have shown "if $k$ then $k+1$" but never started the chain. And the inductive step must _use_ the assumption for $k$ to establish $k+1$; a step that re-proves $k+1$ from scratch, ignoring the hypothesis, is not an induction (and usually is circular).

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Ordering)* Order the parts of a proof by induction that the sum of the first n positive integers equals n(n+1)/2.

**2.** *(Table completion)* Complete the table comparing the running sum with the closed formula n(n+1)/2.

**3.** *(Category sort)* Four attempted proofs by induction are described. Sort each by whether it is complete, and if not, by what is missing.

---

## Relations

A **binary relation** $R$ on a set is a collection of ordered pairs — it says which elements are "related." "Is less than," "is equal to," "divides," and "is a sibling of" are all relations. Formally, $R$ is a subset of the set of all pairs $(a, b)$, and we write $a\, R\, b$ when the pair is in $R$. Relations underlie ordering, equivalence, databases, and graphs.

Three properties classify relations:
- **Reflexive** — every element relates to itself: $a\, R\, a$ for all $a$.
- **Symmetric** — if $a\, R\, b$ then $b\, R\, a$.
- **Transitive** — if $a\, R\, b$ and $b\, R\, c$ then $a\, R\, c$.

Two combinations are especially important. An **equivalence relation** is reflexive, symmetric, _and_ transitive — it behaves like "sameness" and **partitions** the set into disjoint **equivalence classes** (all elements equivalent to each other). "Has the same remainder mod 5" is an equivalence relation; its classes are the five remainder groups. A **partial order** is reflexive, _antisymmetric_ (if $a\,R\,b$ and $b\,R\,a$ then $a = b$), and transitive — it captures "ordering" like $\le$ or "divides" or subset inclusion, where some elements may be incomparable.

The power of these properties is that they let us reason about a relation abstractly: knowing a relation is an equivalence relation _immediately_ tells us it partitions the set, no matter what the relation actually is.

> **Common pitfall:** confusing **symmetric** with **transitive**, or assuming a relation with one property has the others. Symmetry is about reversing a _single_ pair ($a\,R\,b \Rightarrow b\,R\,a$); transitivity chains _two_ pairs into a third ($a\,R\,b, b\,R\,c \Rightarrow a\,R\,c$). A relation can easily have one without the other — "is one mile from" is symmetric but not transitive.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Matrix grid)* Classify each relation by whether it is an equivalence relation, a partial order, or neither.

**2.** *(Numerical input)* The relation 'has the same remainder when divided by 5' is an equivalence relation on the integers. How many equivalence classes does it produce?

**3.** *(Venn diagram)* Place each relation according to which of the two properties it has.

---

## Functions

A **function** $f: A \to B$ assigns to _each_ element of the **domain** $A$ exactly _one_ element of the **codomain** $B$. It is a special kind of relation — the "exactly one output per input" requirement is what distinguishes a function from a general relation. The **image** (or range) is the set of outputs actually hit.

Three properties describe how a function maps:
- **Injective** (one-to-one) — different inputs give different outputs: $f(a) = f(a')$ forces $a = a'$. No two inputs collide.
- **Surjective** (onto) — every element of the codomain is hit by some input: the image is all of $B$.
- **Bijective** — both injective and surjective: a perfect one-to-one pairing between $A$ and $B$.

Bijections are special because they are exactly the **invertible** functions — a bijection $f$ has an inverse $f^{-1}$ that undoes it. They also formalize "same size": two sets have the same cardinality precisely when a bijection exists between them, which is how we compare even _infinite_ sets.

Functions **compose**: given $f: A \to B$ and $g: B \to C$, the composition $g \circ f: A \to C$ applies $f$ first, then $g$ — note the right-to-left order. Composition is central everywhere in computing, since a program is essentially a composition of functions transforming data.

> **Common pitfall:** mixing up **injective** and **surjective**, and misreading **composition order**. Injective is about inputs _not colliding_ (one-to-one); surjective is about the codomain being _fully covered_ (onto) — a function can be one without the other. And $g \circ f$ means "$f$ then $g$" — the function written on the _right_ is applied _first_, which looks backwards until you get used to it.

A domain column and codomain column of dots with arrows; a collision (two arrows into one target) flashes in accent to fail injectivity and an unhit target flashes to fail surjectivity.

$$f(a) = f(a') \Rightarrow a = a'$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Matrix grid)* Each row describes a function by listing its values. Classify each one.

**2.** *(Table completion)* Let f(x) = 2x + 1 and g(x) = x squared. Complete the table of values.

**3.** *(Numerical input)* Let f map {1, 2, 3, 4, 5} into {a, b, c} with f(1)=a, f(2)=b, f(3)=a, f(4)=c and f(5)=b. How many elements does the image of f contain?

---

## Counting and Combinatorics

**Combinatorics** answers "how many ways?" — how many passwords, how many committees, how many outcomes. It underpins probability, algorithm analysis, and cryptography. Two basic rules build everything:
- **Sum rule** — if one choice can be made in $m$ ways _or_ another in $n$ ways (mutually exclusive), there are $m + n$ ways total.
- **Product rule** — if one choice is made in $m$ ways _and then_ another in $n$ ways, there are $m \times n$ ways. "And" multiplies; "or" adds.

Two headline formulas count arrangements and selections:
- **Permutations** count _ordered_ arrangements. The number of ways to arrange all $n$ distinct items is $n!$ ($n$ **factorial** $= n \times (n-1) \times \dots \times 1$). Choosing and ordering $k$ from $n$ is $P(n,k) = \frac{n!}{(n-k)!}$.
- **Combinations** count _unordered_ selections — how many $k$-element subsets of $n$, written $C(n,k) = \binom{n}{k} = \frac{n!}{k!\,(n-k)!}$.

The single most important distinction is **order**. If rearranging the chosen items gives a _different_ outcome (a race podium, a password), use permutations; if order is irrelevant (a committee, a hand of cards), use combinations. Combinations are smaller — dividing by $k!$ removes the $k!$ orderings of each selection that permutations counted separately.

> **Common pitfall:** using a **permutation** where order does not matter (or vice versa), and mixing up the **sum vs product** rule. If order is irrelevant — a committee, a subset, a poker hand — use combinations $\binom{n}{k}$, not permutations. And "and" (sequential choices) _multiplies_ while "or" (alternative choices) _adds_ — reaching for the wrong one inflates or deflates the count by a lot.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* In how many different orders can 5 distinct books be arranged on a shelf?

**2.** *(Matrix grid)* Decide which counting rule or formula each problem calls for.

**3.** *(Pattern sequence)* The number of ways to arrange n distinct items, for n = 1, 2, 3, 4 and 5, forms the sequence below. Fill the gap.

---

## Recurrence Relations

A **recurrence relation** defines each term of a sequence using _earlier_ terms, plus one or more **initial conditions** to start. The most famous is the **Fibonacci** sequence: $F(n) = F(n-1) + F(n-2)$ with $F(0) = 0, F(1) = 1$, giving $0, 1, 1, 2, 3, 5, 8, 13, \dots$. Recurrences are how we describe processes that build on their own previous state — and they are the mathematical shadow of **recursion** in programming.

To _evaluate_ a recurrence you **unfold** it from the initial conditions forward. To _understand_ it you often want a **closed form** — a direct formula for $F(n)$ that avoids computing all earlier terms. For example, the recurrence $a(n) = 2\,a(n-1)$ with $a(0) = 1$ has the closed form $a(n) = 2^n$. Finding closed forms uses techniques like the **characteristic equation** for linear recurrences.

Recurrences are central to **algorithm analysis**. A divide-and-conquer algorithm that splits a problem of size $n$ into two halves and does linear work has running time $T(n) = 2\,T(n/2) + n$ — a recurrence whose solution ($n \log n$) is the algorithm's complexity. The **Master Theorem** solves this whole family of divide-and-conquer recurrences at a glance, which is why recurrences and complexity are studied together.

Two essentials make a recurrence well-defined: the **recursive rule** (how a term depends on earlier ones) and the **initial conditions** (the starting values). Omit the initial conditions and the sequence is undetermined — exactly like a recursive function with no base case, which never terminates.

> **Common pitfall:** forgetting the **initial conditions**, or misreading which earlier terms a recurrence depends on. Without initial values a recurrence defines no specific sequence — just as a recursive function without a base case recurses forever. And $F(n) = F(n-1) + F(n-2)$ needs _two_ starting values (not one), because each term reaches back two steps; supplying too few initial conditions leaves the sequence undefined.

The Fibonacci sequence as a row of values; each new term is drawn as the accent sum of the two preceding boxes, unfolding 0, 1, 1, 2, 3, 5, 8.

$$F(n) = F(n-1) + F(n-2)$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Pattern sequence)* The Fibonacci sequence is defined by F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. Fill the gap in its opening terms.

**2.** *(Table completion)* A sequence is defined by a(n) = 3 a(n-1) - 2 with a(0) = 3. Unfold it to complete the table.

**3.** *(Matrix grid)* Match each recurrence, with its initial condition, to its closed form.

---

## Graphs and Trees

A **graph** is a set of **vertices** (nodes) joined by **edges** — a mathematical model of connections, from road maps to social networks to program control flow. Graphs are one of the most useful structures in all of computing, and this discrete-math view is exactly what the data-structures unit implements.

Core terminology:
- The **degree** of a vertex is its number of incident edges.
- A **path** is a sequence of vertices connected by edges; a **cycle** is a path returning to its start.
- A graph is **connected** if there is a path between every pair of vertices.
- Edges may be **directed** (one-way, a **digraph**) or **undirected** (two-way), and may carry **weights** (costs).

A beautiful early result is the **handshaking lemma**: the sum of all vertex degrees equals _twice_ the number of edges, $\sum \deg(v) = 2|E|$, because every edge contributes to exactly two vertices' degrees. An immediate corollary: the number of odd-degree vertices is always even.

A **tree** is a special graph: **connected and acyclic** (no cycles). Trees have elegant properties — a tree with $n$ vertices has _exactly_ $n - 1$ edges, and there is a _unique_ path between any two vertices. **Rooted trees** (with a designated root) model hierarchies and are the backbone of the data-structures unit (binary trees, heaps, tries). The whole discrete-math toolkit — sets, relations, induction, counting — comes together in graph theory, which is why it closes the unit.

> **Common pitfall:** miscounting with the **handshaking lemma**, or forgetting a tree's defining constraints. The sum of degrees is $2|E|$, _twice_ the edge count, not the edge count itself — every edge is counted at both its endpoints. And a **tree** must be _both_ connected _and_ acyclic; a graph that is acyclic but disconnected is a forest, not a single tree, and a tree on $n$ vertices always has exactly $n-1$ edges (no more, no fewer).

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Grid path)* This grid is a graph: each open cell is a vertex, and edges join cells that touch horizontally or vertically. The blocked cells are vertices that have been deleted. Trace a path from the top-left vertex to the bottom-right vertex.

**2.** *(Table completion)* Complete the table using the handshaking lemma, which says the degrees of all the vertices sum to twice the number of edges.

**3.** *(Multi select)* Select every statement that must be true of any tree with n vertices.
   - [ ] It has exactly n minus 1 edges
   - [ ] There is exactly one path between any two of its vertices
   - [ ] It contains at least one cycle
   - [ ] It is connected
   - [ ] Every vertex has degree at least 2


---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
