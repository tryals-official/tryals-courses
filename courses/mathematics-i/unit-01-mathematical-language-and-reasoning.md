# Unit 1: Mathematical Language and Reasoning

**[Study this unit interactively on Tryals →](https://tryals.app/courses/mathematics-i)**

## Mathematical Statements and Logic

Mathematics is written in a language of unusual precision. Its sentences are **statements** (propositions): declarative assertions that are unambiguously either **true** or **false** — never both, never neither. "$7$ is prime" is a true statement; "$4 > 9$" is a false one; "$x + 1$" and "is this prime?" are _not_ statements, because they assert nothing with a definite truth value.

Simple statements combine into compound ones using **logical connectives**, each with a fixed meaning:
- **Negation** ($\neg p$, "not $p$") — reverses the truth value.
- **Conjunction** ($p \land q$, "$p$ and $q$") — true exactly when _both_ are true.
- **Disjunction** ($p \lor q$, "$p$ or $q$") — true when _at least one_ is true. Note this is the **inclusive** or: $p \lor q$ is true even when both hold.

The meaning of a connective is captured completely by its **truth table**, which lists the result for every combination of inputs. Because each component is true or false, a compound of $n$ simple statements has $2^n$ rows.

Two statements are **logically equivalent** when they have identical truth tables — they say the same thing, however differently phrased. This is the bedrock of proof: replacing a statement by an equivalent one preserves truth. Mathematical logic gives us the rules that guarantee our reasoning transports truth from premises to conclusions without leaks.

> **Common pitfall:** reading mathematical "**or**" as the everyday **exclusive** or ("one or the other, but not both"). In mathematics $p \lor q$ is **inclusive**: it is true when $p$ is true, when $q$ is true, _and_ when both are true. "$x > 0$ or $x < 5$" holds for $x = 3$ even though both parts are true. Only explicitly stated exclusive-or means "not both."

A truth table for p OR q with all four rows shown, the both-true row (p=1, q=1) highlighted in accent as still TRUE — the inclusive nature of mathematical disjunction.

$$p \lor q \text{ is true} \iff p \text{ or } q \text{ (or both)}$$

**Practice preview:**

**1.** *(Truth table)* Complete the truth table for the INCLUSIVE or: P OR Q.

**2.** *(Memory pairs)* Match each connective to the exact condition under which it is true.

**3.** *(Multi select)* Let p be TRUE and q be TRUE. Select every statement that is FALSE.
   - [ ] p AND q
   - [ ] NOT p
   - [ ] p OR (NOT q)
   - [ ] (NOT p) AND q
   - [ ] NOT (p OR q)


---

## Sets and Set-Builder Notation

A **set** is a well-defined collection of distinct objects, its **elements**. Sets are the fundamental objects of modern mathematics — nearly everything else is defined in terms of them. We write $x \in A$ for membership and $x \notin A$ for non-membership. A set is determined _entirely_ by its elements: order and repetition are irrelevant, so $\{1, 2, 2, 3\}$ is the same set as $\{1, 2, 3\}$ and as $\{3, 1, 2\}$.

Sets can be specified two ways. **Roster notation** lists the elements: $\{2, 4, 6, 8\}$. **Set-builder notation** states a defining property: $\{x \in \mathbb{Z} : x \text{ is even and } 0 < x < 10\}$, read "the set of integers $x$ such that...". Set-builder is essential for infinite or complex sets that cannot be listed.

Standard number sets have reserved symbols: $\mathbb{N}$ (naturals), $\mathbb{Z}$ (integers), $\mathbb{Q}$ (rationals), $\mathbb{R}$ (reals). Key relationships:
- $A \subseteq B$ (**subset**) — every element of $A$ is in $B$.
- The **empty set** $\emptyset$ has no elements; it is a subset of _every_ set.
- The **cardinality** $|A|$ is the number of elements.
- The **power set** $\mathcal{P}(A)$ is the set of _all_ subsets of $A$; a set with $n$ elements has $2^n$ subsets.

Notice the layering: elements belong to sets, sets can be elements of other sets (the power set), and this careful distinction between $\in$ (membership) and $\subseteq$ (subset) is where precision matters most.

> **Common pitfall:** confusing **membership** ($\in$) with the **subset** relation ($\subseteq$). "$3 \in \{1,2,3\}$" is true ($3$ is an _element_), but "$3 \subseteq \{1,2,3\}$" is nonsense — $3$ is not a set. Meanwhile "$\{3\} \subseteq \{1,2,3\}$" is true (the _set_ $\{3\}$ is a subset) but "$\{3\} \in \{1,2,3\}$" is false. An element is _in_ a set; a subset is _contained in_ a set.

A 3-element set with its 8 subsets drawn as a small lattice, the empty set at the bottom and the full set at the top in accent — the power set of size 2^3.

$$|\mathcal{P}(A)| = 2^{|A|}$$

**Practice preview:**

**1.** *(Venn diagram)* A = even numbers in {1..10}. B = multiples of 3 in {1..10}. Place each number where it belongs.

**2.** *(Memory pairs)* Match each symbol to its meaning.

**3.** *(Formula builder)* Build the set-builder description of the strictly positive even integers.

---

## Quantifiers and Predicates

A **predicate** is a statement _with a variable_, like $P(x): \text{"}x^2 \ge 0\text{"}$ — it becomes true or false only once $x$ is specified. To make definite statements about _all_ or _some_ values, mathematics uses **quantifiers**, which bind the variable and range over a **domain**.

The two quantifiers:
- **Universal** $\forall x\, P(x)$ — "for _all_ $x$, $P(x)$": true when $P$ holds for every element of the domain.
- **Existential** $\exists x\, P(x)$ — "there _exists_ $x$ with $P(x)$": true when at least one element satisfies $P$.

Order matters when quantifiers mix. $\forall x\, \exists y\, P(x, y)$ ("for every $x$ there is some $y$") is generally weaker than $\exists y\, \forall x\, P(x, y)$ ("there is one $y$ that works for every $x$"). Over the integers, "for every $x$ there is a larger $y$" is true, but "there is a $y$ larger than every $x$" is false. Swapping quantifier order can change a true statement into a false one.

**Negation** follows a precise rule — push the negation inward, flipping each quantifier and negating the predicate:
$$\neg \forall x\, P(x) \;\equiv\; \exists x\, \neg P(x), \qquad \neg \exists x\, P(x) \;\equiv\; \forall x\, \neg P(x).$$
So the negation of "all are $P$" is "some is not $P$" — which is why a single **counterexample** disproves a universal claim, and why "there is no $x$ with $P$" means "every $x$ fails $P$."

> **Common pitfall:** swapping the **order of mixed quantifiers** or negating them incorrectly. $\forall x\, \exists y$ is not interchangeable with $\exists y\, \forall x$. And $\neg \forall x\, P(x)$ is $\exists x\, \neg P(x)$ — "not all are $P$" means "at least one is not," **not** "none is $P$." Negation flips $\forall \leftrightarrow \exists$ while negating the inside.

**Practice preview:**

**1.** *(Matrix grid)* The domain is the integers. Give the truth value of each quantified statement.

**2.** *(Cloze bank)* Complete the rule for refuting a universal claim.

**3.** *(Numerical input)* The domain is {1, 2, ..., 10}. For how many values of x is the predicate 'x squared > 20' true?

---

## Implication and Equivalence

The **implication** (conditional) $p \to q$ — "if $p$ then $q$" — is the connective at the heart of every theorem. Its truth table has one subtle feature: $p \to q$ is **false in exactly one case**, when $p$ is true but $q$ is false. In every other case it is true — including, crucially, when $p$ is _false_, where the implication is **vacuously true** regardless of $q$. The premise $p$ is called the **hypothesis** and $q$ the **conclusion**.

From any implication $p \to q$ we form three related statements:
- **Converse** $q \to p$ — swap hypothesis and conclusion.
- **Inverse** $\neg p \to \neg q$ — negate both.
- **Contrapositive** $\neg q \to \neg p$ — negate and swap.

The essential fact: an implication is **logically equivalent to its contrapositive**, but **not** to its converse or inverse. "If it is raining, the ground is wet" and "if the ground is not wet, it is not raining" say the same thing; but "if the ground is wet, it is raining" (converse) does not follow. Confusing an implication with its converse is one of the most common reasoning errors.

The **biconditional** $p \leftrightarrow q$ — "$p$ if and only if $q$" — asserts that $p$ and $q$ have the _same_ truth value; it is true exactly when both $p \to q$ and its converse $q \to p$ hold. This is the "iff" of definitions and equivalences: $p \leftrightarrow q$ means each implies the other, so they stand or fall together.

> **Common pitfall:** treating an implication as equivalent to its **converse** (affirming the converse). $p \to q$ does **not** give you $q \to p$. It _is_ equivalent to its **contrapositive** $\neg q \to \neg p$. Also, when $p$ is false, $p \to q$ is **vacuously true** — a false hypothesis never makes an implication false; only a true hypothesis with a false conclusion does.

**Practice preview:**

**1.** *(Truth table)* Complete the truth table for the implication: if P then Q.

**2.** *(Cloze bank)* Complete the rule for the conditional.

**3.** *(Truth table)* Complete the truth table for the biconditional: P if and only if Q.

---

## Direct Proof and Counterexample

A **proof** is a finite chain of logically valid steps that establishes a statement beyond doubt, from **axioms**, **definitions**, and previously proven **theorems**. Unlike scientific evidence, a proof settles a claim for _all_ cases at once and permanently. The most fundamental technique is the **direct proof**.

To prove an implication "if $p$ then $q$" directly, you **assume $p$** and derive $q$ through a sequence of justified steps. Consider proving "if $n$ is even, then $n^2$ is even": assume $n$ is even, so $n = 2k$ for some integer $k$; then $n^2 = 4k^2 = 2(2k^2)$, which is even. Each step uses a definition ("even means $2k$") or basic algebra, and the conclusion follows inescapably. Proving a **universal** ("for all $n$, ...") means giving an argument that works for an _arbitrary_ element, so it covers every case.

The mirror image is **disproof by counterexample**. To show a universal claim is _false_, you exhibit a single instance where it fails. To refute "every prime is odd," you name $2$ — a prime that is even. Just one counterexample demolishes a universal statement, because (from Lesson 3) its negation is an existential.

The asymmetry is fundamental: **a universal statement is proved by a general argument but disproved by a single example.** You can never prove a universal by checking examples — "it works for $n = 1, 2, 3$" is not a proof — but you can always disprove one with a single failure.

> **Common pitfall:** trying to **prove a universal statement by examples**. Verifying a claim for several cases — even many — never establishes it for _all_ cases; you need a general argument covering an arbitrary element. (Examples _can_ disprove a universal, via one counterexample, but never prove it.) Confusing "true for the cases I checked" with "true in general" is a core reasoning error.

**Practice preview:**

**1.** *(Ordering)* Order the steps of a direct proof that the sum of two even integers is even.

**2.** *(Category sort)* Sort each claim by what it would take to settle it.

**3.** *(Matrix grid)* Decide whether each universal claim about integers is true or false.

---

## Proof by Contradiction and Contrapositive

Sometimes a direct proof is awkward, and an **indirect** technique is cleaner. Two are essential.

**Proof by contrapositive** proves "if $p$ then $q$" by instead proving the equivalent statement "if $\neg q$ then $\neg p$" (Lesson 4: a conditional and its contrapositive are logically equivalent). This is useful when negating the conclusion gives a better starting point. To prove "if $n^2$ is even then $n$ is even," it is cleaner to prove the contrapositive "if $n$ is odd then $n^2$ is odd": write $n = 2k+1$, so $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd.

**Proof by contradiction** (_reductio ad absurdum_) assumes the statement to be proved is **false**, then derives a logical **contradiction** — something that cannot be, like $0 = 1$ or "$n$ is both even and odd." Since valid reasoning cannot lead from a true assumption to a contradiction, the assumption must have been false, so the original statement is true. The classic example proves $\sqrt{2}$ is **irrational**: assume $\sqrt{2} = a/b$ in lowest terms; squaring gives $a^2 = 2b^2$, forcing $a$ even, then $b$ even too — contradicting "lowest terms."

The two are related but distinct: contrapositive proves $p \to q$ by directly proving $\neg q \to \neg p$ (no contradiction needed); contradiction assumes the _whole statement_ false and hunts for _any_ absurdity. Contradiction is more general (it can attack any statement, not just conditionals), while the contrapositive is often more direct when it applies.

> **Common pitfall:** conflating **contradiction** with **contrapositive**. The contrapositive proves $p \to q$ by proving the _equivalent_ conditional $\neg q \to \neg p$ directly — no absurdity is sought. Proof by contradiction assumes the statement is _false_ and derives an impossibility. They begin with different assumptions and have different structures; mixing them up muddles the logic of the argument.

**Practice preview:**

**1.** *(Ordering)* Order the steps of the classic proof by contradiction that the square root of 2 is irrational.

**2.** *(Matrix grid)* For the statement 'if it rained then the ground is wet', classify each sentence.

**3.** *(Error highlight)* A student attempts a proof by contradiction. Highlight the one incorrect step.

---

## Mathematical Induction

Some statements must hold for _every_ natural number — for instance $1 + 2 + \dots + n = \frac{n(n+1)}{2}$ for all $n \ge 1$. Since there are infinitely many cases, **mathematical induction** proves them all with a finite argument. The intuition is a line of dominoes: if the first falls, and each falling domino knocks the next, then _all_ fall.

An induction proof has two parts:
1. **Base case** — prove the statement for the smallest value (usually $n = 1$ or $n = 0$). This tips the first domino.
2. **Inductive step** — assume the statement holds for an arbitrary $n = k$ (the **inductive hypothesis**) and prove it then holds for $n = k + 1$. This shows each domino knocks the next.

Together these establish the statement for all $n$ at or above the base. **Both** parts are essential: the base case alone proves only one value, and the inductive step alone proves "if $k$ then $k+1$" but never gets the chain started — the dominoes could all be standing.

**Strong induction** is a variant whose inductive step may assume the statement for _all_ values from the base up to $k$, not just $k$. This helps when a case depends on several earlier ones, as in proving every integer $> 1$ has a prime factorization. It is logically equivalent to ordinary induction but often more convenient.

Induction is the natural proof method for anything defined recursively, and it recurs throughout mathematics and computer science (where it proves the correctness of recursive algorithms). To prove $1 + 2 + \dots + n = \frac{n(n+1)}{2}$: the base case $n=1$ gives $1 = \frac{1 \cdot 2}{2}$; assuming it for $k$, adding $k+1$ to both sides yields the formula for $k+1$.

> **Common pitfall:** omitting the **base case** or misusing the **inductive hypothesis**. Without a base case, the inductive step proves nothing — "if $k$ then $k+1$" never starts the chain, so all cases could be false. And the inductive step must _use_ the assumption for $k$ to reach $k+1$; a step that ignores the hypothesis and re-proves $k+1$ from scratch is not a valid induction.

**Practice preview:**

**1.** *(Ordering)* Order the parts of a proof by induction that 1 + 2 + ... + n = n(n+1)/2.

**2.** *(Error highlight)* A student presents an induction proof. Highlight the one incorrect line.

**3.** *(Formula builder)* Build the closed form for 1 + 2 + ... + n.

---

## Functions as Mappings

A **function** $f : A \to B$ is a rule assigning to _each_ element of the **domain** $A$ exactly _one_ element of the **codomain** $B$. The "exactly one output per input" requirement is what distinguishes a function from an arbitrary correspondence. The **image** (or range) is the subset of $B$ actually produced as outputs; it may be smaller than the whole codomain.

Functions are classified by how they map:
- **Injective** (one-to-one) — different inputs give different outputs: $f(a) = f(a') \Rightarrow a = a'$. No two inputs collide.
- **Surjective** (onto) — every element of the codomain is an output: the image _is_ all of $B$.
- **Bijective** — both injective and surjective, a perfect pairing between domain and codomain.

Bijections are exactly the **invertible** functions: a bijection $f$ has a unique inverse $f^{-1}$ satisfying $f^{-1}(f(a)) = a$. They also formalize "same size" — two sets have equal cardinality precisely when a bijection exists between them, a definition powerful enough to compare _infinite_ sets (which is how we learn $\mathbb{Q}$ is countable but $\mathbb{R}$ is not).

Functions **compose**: for $f : A \to B$ and $g : B \to C$, the composition $(g \circ f)(x) = g(f(x))$ applies $f$ first, then $g$ — read right to left. Composition is associative, and the composition of two bijections is again a bijection. Functions are the connective tissue of mathematics, linking one structure to another while preserving or transforming information.

> **Common pitfall:** confusing **injective** (one-to-one) with **surjective** (onto), and reading **composition** left to right. Injective forbids input _collisions_; surjective requires the codomain to be _fully covered_ — a function can be one without the other. And $g \circ f$ means "$f$ then $g$": the function on the _right_ acts _first_. Reversing the order gives the wrong result whenever $f$ and $g$ do not commute.

A domain column and codomain column of dots joined by arrows; an accent collision (two arrows into one target) fails injectivity, and an unhit target fails surjectivity.

$$f(a) = f(a') \Rightarrow a = a'$$

**Practice preview:**

**1.** *(Category sort)* A function assigns exactly one output to each input. Sort each correspondence.

**2.** *(Numerical input)* Let f have domain {-2, -1, 0, 1, 2} and rule f(n) = n squared. How many distinct elements are in its image?

**3.** *(Error highlight)* A student describes functions. Highlight the one incorrect statement.

---

## Relations and Equivalence

A **binary relation** $R$ on a set $A$ is a set of ordered pairs from $A$ — it records which elements are "related." We write $a\, R\, b$ when $(a, b) \in R$. "Equals," "is less than," "divides," and "is congruent to mod $n$" are all relations. A function is a special relation; more generally, relations model any pairwise connection.

Three properties classify relations:
- **Reflexive** — $a\, R\, a$ for every $a$ (each element relates to itself).
- **Symmetric** — $a\, R\, b \Rightarrow b\, R\, a$ (relatedness is mutual).
- **Transitive** — $a\, R\, b$ and $b\, R\, c \Rightarrow a\, R\, c$ (relatedness chains).

A relation with _all three_ properties is an **equivalence relation**. Equivalence relations behave like "sameness in some respect" and have a beautiful structure: each **partitions** the set $A$ into disjoint **equivalence classes** — maximal groups of mutually related elements — that together cover all of $A$. "Congruent mod $5$" partitions the integers into the five remainder classes $\{0, 5, 10, \dots\}, \{1, 6, 11, \dots\}, \dots$. Conversely, every partition arises from an equivalence relation, so equivalence relations and partitions are two views of the same idea.

A different combination — reflexive, **antisymmetric** ($a\,R\,b$ and $b\,R\,a \Rightarrow a = b$), and transitive — is a **partial order**, capturing "ordering" like $\le$ or subset inclusion, where some elements may be incomparable. Recognizing which properties a relation has tells you its structure immediately, without examining every pair.

> **Common pitfall:** confusing **symmetric** with **transitive**, or assuming a relation with one property has the others. Symmetry reverses a _single_ pair ($a\,R\,b \Rightarrow b\,R\,a$); transitivity chains _two_ pairs into a third. A relation can have one without the other — "is one step from" (on a number line) is symmetric but not transitive. Only relations with _all three_ of reflexive, symmetric, and transitive are equivalence relations.

**Practice preview:**

**1.** *(Matrix grid)* Each relation is on the set of integers. Mark the ONE property that fails for each.

**2.** *(Memory pairs)* Match each property to its defining condition.

**3.** *(Error highlight)* A student discusses relations. Highlight the one incorrect statement.

---

## The Structure of Mathematical Reasoning

This closing lesson steps back to see how the tools of the unit fit together into the **architecture of mathematics** — a structure of remarkable rigor and cumulative power. Every field of mathematics is built on the same foundation.

The building blocks form a hierarchy:
- **Axioms** — statements accepted _without_ proof, the starting assumptions of a theory (e.g. the axioms of a group, or Euclid's postulates). They are the agreed-upon ground.
- **Definitions** — precise specifications of terms, giving each concept an exact meaning so reasoning cannot slip on ambiguity.
- **Theorems** — statements _proved_ from axioms, definitions, and prior theorems. A **lemma** is a helper theorem proved along the way; a **corollary** follows quickly from a theorem.
- **Proofs** — the valid logical arguments (direct, contrapositive, contradiction, induction) that establish theorems.

Everything chains together: definitions fix meaning, axioms provide the ground, and proofs derive theorems that become available to prove further theorems. This is why mathematics is **cumulative** — once a theorem is proved, it stands forever and can be used freely, so knowledge accumulates without ever being overturned (unlike empirical science, where theories are revised).

The logic of this unit is the connective tissue: **statements and connectives** express claims precisely, **quantifiers** scope them over domains, **implication** structures every "if-then" theorem, and the **proof techniques** are the sanctioned ways to move from premises to conclusions. **Sets, functions, and relations** provide the objects that theorems are about. Mastering this language is the true prerequisite for all higher mathematics: not any single topic, but the disciplined habit of stating claims precisely and justifying them with airtight reasoning.

> **Common pitfall:** blurring the distinction between an **axiom** (assumed without proof) and a **theorem** (proved from axioms). Axioms are the accepted starting points; theorems are _earned_ by proof. Treating a theorem as if it needed no justification — or an axiom as if it required one — misunderstands the structure. Likewise, a definition is a _stipulation_ of meaning, not a claim to be proved.

**Practice preview:**

**1.** *(Ordering)* Order the layers of mathematical architecture, from the assumed foundation upward.

**2.** *(Matrix grid)* Classify each statement by whether it requires proof.

**3.** *(Error highlight)* A student describes how mathematics is built. Highlight the one incorrect statement.

---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
