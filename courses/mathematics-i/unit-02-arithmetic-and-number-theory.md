# Unit 2: Arithmetic and Number Theory

## Number Systems

Mathematics builds its numbers in stages, each extending the last to solve problems the previous system could not. Understanding this hierarchy is the foundation of arithmetic.

- **Natural numbers** $\mathbb{N} = \{0, 1, 2, 3, \dots\}$ — for counting. Closed under addition and multiplication, but you cannot always subtract (e.g. $3 - 5$).
- **Integers** $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ — add negatives so subtraction always works. But you cannot always divide ($3 \div 2$ is not an integer).
- **Rational numbers** $\mathbb{Q}$ — all fractions $\frac{a}{b}$ with integers $a, b$ and $b \neq 0$. Now division (except by zero) always works. Rationals are exactly the numbers with **terminating or repeating** decimal expansions.
- **Real numbers** $\mathbb{R}$ — fill in the gaps with **irrationals** like $\sqrt{2}$ and $\pi$, whose decimals neither terminate nor repeat. The reals form a continuous line with no holes.

These sets are **nested**: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Each is a subset of the next, so every natural number is an integer, every integer is rational, and every rational is real — but not conversely.

Each extension is driven by **closure**: we enlarge the number system precisely so that an operation always has an answer. Naturals to integers makes subtraction total; integers to rationals makes division (by nonzero) total; rationals to reals makes limits and roots available. Knowing which system a number lives in tells you which operations are guaranteed to stay inside it.

> **Common pitfall:** assuming every real number is rational, or that the systems are separate rather than **nested**. Numbers like $\sqrt{2}$ and $\pi$ are real but **not** rational — their decimals never terminate or repeat. And the systems build on each other: every integer _is_ a rational (e.g. $5 = \frac{5}{1}$), so they are not disjoint categories but a chain of ever-larger sets.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Matrix grid)* Place each number in the SMALLEST number system that contains it.

**2.** *(Numerical input)* How many of these seven numbers are irrational?  1/3,  the square root of 4,  the square root of 5,  0.101010... repeating forever,  pi,  -7,  22/7

**3.** *(Error highlight)* A student summarises the number systems. Highlight the one incorrect statement.

---

## Divisibility and the Division Algorithm

Number theory begins with **divisibility**. An integer $a$ **divides** $b$ (written $a \mid b$) if $b = a k$ for some integer $k$ — that is, $b$ is a multiple of $a$ with no remainder. So $3 \mid 12$ (since $12 = 3 \cdot 4$) but $3 \nmid 13$. Divisibility is the backbone of primes, factorization, and congruences.

When $a$ does _not_ divide $b$ exactly, the **division algorithm** captures what happens. For any integer $b$ and positive integer $a$, there exist _unique_ integers $q$ (the **quotient**) and $r$ (the **remainder**) with
$$b = a q + r, \qquad 0 \le r < a.$$
The key constraint is $0 \le r < a$: the remainder is non-negative and strictly less than the divisor. For $b = 17, a = 5$: $17 = 5 \cdot 3 + 2$, so $q = 3$ and $r = 2$. Divisibility is exactly the case $r = 0$.

Divisibility has clean properties that make proofs easy:
- If $a \mid b$ and $a \mid c$, then $a \mid (b + c)$ and $a \mid (b - c)$ — a divisor of two numbers divides their sum and difference.
- If $a \mid b$ and $b \mid c$, then $a \mid c$ (transitivity).
- If $a \mid b$ then $a \mid bc$ for any integer $c$.

These properties, together with the division algorithm, are the tools behind the Euclidean algorithm, modular arithmetic, and the theory of primes that follow. The remainder, in particular, is the seed of modular arithmetic: "the remainder of $b$ on division by $a$" is exactly $b \bmod a$.

> **Common pitfall:** allowing a **remainder** that is negative or as large as the divisor. In the division algorithm the remainder must satisfy $0 \le r < a$ — it is never negative and never equals or exceeds the divisor. Writing $17 = 5 \cdot 2 + 7$ is _wrong_ even though the arithmetic checks out, because $7 \ge 5$; the correct remainder is $2$ with quotient $3$.

A row of b unit blocks grouped into equal piles of size a; the q full piles form the quotient and the accent leftover blocks (fewer than a) form the remainder — the division algorithm made visible.

$$b = aq + r,\quad 0 \le r < a$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* Apply the division algorithm b = a q + r with 0 <= r < a. Complete the quotients and remainders.

**2.** *(Category sort)* Each line below is arithmetically correct. Sort them by whether they are a VALID application of the division algorithm, which demands 0 <= r < a.

**3.** *(Error highlight)* A student lists properties of divisibility. Highlight the one incorrect statement.

---

## Primes and the Fundamental Theorem of Arithmetic

A **prime** is an integer greater than 1 whose only positive divisors are 1 and itself: $2, 3, 5, 7, 11, \dots$. An integer greater than 1 that is not prime is **composite** — it factors into smaller pieces. The number $1$ is neither prime nor composite (by convention, and for good reason — see below). Primes are the multiplicative "atoms" of the integers.

The central result is the **Fundamental Theorem of Arithmetic**: every integer greater than 1 can be written as a product of primes, and this factorization is **unique** up to the order of the factors. For example $60 = 2^2 \cdot 3 \cdot 5$, and no other set of primes multiplies to $60$. This uniqueness is why primes are the fundamental building blocks — every integer has exactly one "prime fingerprint."

This is also _why_ $1$ is excluded from the primes: if $1$ were prime, factorizations would no longer be unique (you could insert any number of $1$s), breaking the theorem. Definitions in mathematics are chosen to make the important theorems clean.

Two classic facts round out the theory:
- **There are infinitely many primes** (Euclid's theorem). The proof is a gem of contradiction: assume finitely many, multiply them all and add 1; the result is divisible by none of them, a contradiction.
- To **test** whether $n$ is prime, you need only check for divisors up to $\sqrt{n}$: if $n = ab$ with $a \le b$, then $a \le \sqrt{n}$, so a factor below the square root must exist if any factor does.

Prime factorization underlies the gcd, the lcm, modular arithmetic, and modern cryptography (whose security rests on factoring being hard for large numbers).

> **Common pitfall:** thinking **1 is prime**, or that a number needs checking for divisors all the way up to itself. By definition a prime is _greater than 1_, and 1 is neither prime nor composite. And to test primality you only check divisors up to $\sqrt{n}$ — any composite $n$ must have a factor at or below its square root, so finding none there proves $n$ prime.

A factor tree for 60 branching 60 to 2 and 30, 30 to 2 and 15, 15 to 3 and 5, the accent leaves 2, 2, 3, 5 collected as the unique prime factorization.

$$n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Matrix grid)* Classify each integer.

**2.** *(Numerical input)* How many DISTINCT prime factors does 360 have?

**3.** *(Cloze bank)* Complete the reason for a definitional choice.

---

## GCD and the Euclidean Algorithm

The **greatest common divisor** $\gcd(a, b)$ is the largest positive integer dividing both $a$ and $b$. For $\gcd(12, 18) = 6$, since 6 divides both and nothing larger does. Its partner, the **least common multiple** $\operatorname{lcm}(a, b)$, is the smallest positive integer that both $a$ and $b$ divide. These govern fraction arithmetic, tiling problems, and modular equations.

You _could_ compute the gcd from prime factorizations (take the lower power of each shared prime), but the **Euclidean algorithm** is far faster and needs no factoring. It rests on a single fact: $\gcd(a, b) = \gcd(b, r)$ where $r$ is the remainder of $a$ divided by $b$. Repeatedly replace the pair by (divisor, remainder) until the remainder is 0; the last nonzero remainder is the gcd. For $\gcd(48, 18)$:
$$48 = 2 \cdot 18 + 12, \quad 18 = 1 \cdot 12 + 6, \quad 12 = 2 \cdot 6 + 0 \;\Rightarrow\; \gcd = 6.$$
This terminates quickly because the remainders shrink rapidly — it is one of the oldest and most elegant algorithms known.

Two numbers are **coprime** (relatively prime) when $\gcd(a, b) = 1$ — they share no prime factor. Coprimality is central to modular arithmetic (a number has a multiplicative inverse mod $n$ exactly when it is coprime to $n$).

A beautiful identity links gcd and lcm: $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = a \cdot b$. So once you have the gcd (fast via Euclid), the lcm is just $\frac{ab}{\gcd(a,b)}$ — you never need to factor to find either.

> **Common pitfall:** confusing the **gcd** (greatest common _divisor_, a factor of both) with the **lcm** (least common _multiple_, a multiple of both). The gcd is _at most_ the smaller number; the lcm is _at least_ the larger. For 12 and 18, gcd = 6 (small) and lcm = 36 (large) — mixing them up inverts the relationship. Remember $\gcd \cdot \operatorname{lcm} = ab$.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Ordering)* Order the lines of the Euclidean algorithm computing gcd(1071, 462).

**2.** *(Table completion)* Complete the Euclidean algorithm trace for gcd(84, 30).

**3.** *(Cloze bank)* Complete the fact the Euclidean algorithm is built on.

---

## Modular Arithmetic

**Modular arithmetic** is arithmetic with remainders — the mathematics of things that cycle, like clocks, days of the week, and digital registers. We say $a$ is **congruent to** $b$ **modulo** $n$, written
$$a \equiv b \pmod{n},$$
when $a$ and $b$ leave the same remainder on division by $n$ — equivalently, when $n \mid (a - b)$. On a 12-hour clock, $15 \equiv 3 \pmod{12}$: 15:00 shows as 3 o'clock.

Congruence modulo $n$ is an **equivalence relation** (Unit 1): it partitions the integers into $n$ **residue classes**, one per possible remainder $0, 1, \dots, n-1$. All integers in a class are interchangeable for mod-$n$ purposes.

The power of the notation is that congruence is **compatible with arithmetic**. If $a \equiv b$ and $c \equiv d \pmod n$, then:
$$a + c \equiv b + d, \qquad a \cdot c \equiv b \cdot d \pmod{n}.$$
You may add, subtract, and multiply congruences just like equations — which means you can **reduce as you go**, replacing any number by its remainder at any step. To find $17 \cdot 17 \bmod 5$, note $17 \equiv 2$, so $17 \cdot 17 \equiv 2 \cdot 2 = 4 \pmod 5$ — no need to compute 289. This is what makes modular arithmetic computationally tame even for huge numbers.

**Division is the exception.** You cannot freely divide congruences: $a \equiv b \pmod n$ does not always let you cancel a common factor. Division mod $n$ works only via **multiplicative inverses**, which exist only when the number is coprime to $n$ — the reason coprimality (Lesson 4) matters here.

> **Common pitfall:** assuming you can **divide** or **cancel** in congruences as freely as you add and multiply. Addition, subtraction, and multiplication respect congruence, but cancellation does _not_ in general: $6 \equiv 2 \pmod 4$ but you cannot cancel the common factor 2 to get $3 \equiv 1 \pmod 4$ (which is false). Division mod $n$ requires a multiplicative inverse, available only for numbers coprime to $n$.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* Reduce each integer modulo 7. Remember the result must lie between 0 and 6.

**2.** *(Matrix grid)* Decide whether each congruence is true or false. Recall that a is congruent to b mod n exactly when n divides a - b.

**3.** *(Multi select)* Select every operation you may perform on congruences modulo n with no extra conditions.
   - [ ] Add two congruences
   - [ ] Subtract two congruences
   - [ ] Multiply two congruences
   - [ ] Cancel a common factor from both sides
   - [ ] Replace any number by its remainder mod n at any stage


---

## Congruences and Applications

Modular arithmetic is not just theory — it powers check digits, hashing, calendars, and cryptography. This lesson develops the tools to _solve_ modular equations and see where they apply.

A **linear congruence** has the form $ax \equiv b \pmod{n}$ — solve for the unknown residue $x$. The key is the **multiplicative inverse**: $a^{-1}$ is a residue with $a \cdot a^{-1} \equiv 1 \pmod n$. When it exists, multiply both sides by it to get $x \equiv a^{-1} b$. The crucial fact from Lesson 4: **$a$ has an inverse mod $n$ if and only if $\gcd(a, n) = 1$** (they are coprime). So $ax \equiv b \pmod n$ has a unique solution exactly when $a$ and $n$ are coprime; otherwise it may have several solutions or none.

Two celebrated theorems make computation easy:
- **Fermat's little theorem** — if $p$ is prime and $p \nmid a$, then $a^{p-1} \equiv 1 \pmod p$. This gives inverses ($a^{-1} \equiv a^{p-2}$) and fast primality tests.
- **The Chinese remainder theorem** — a system of congruences with coprime moduli has a unique solution modulo the product of the moduli, letting you reassemble a number from its remainders.

**Applications** are everywhere. Check digits (ISBN, credit cards) append a digit making a weighted sum $\equiv 0 \pmod{n}$, so single-digit errors are caught. Hash functions reduce keys mod a table size. And **public-key cryptography** (RSA) rests entirely on modular exponentiation being easy while its inverse (factoring, or the discrete logarithm) is hard — the coprimality and inverse ideas of this unit, scaled to enormous numbers.

> **Common pitfall:** trying to solve $ax \equiv b \pmod n$ by "dividing by $a$" when $a$ and $n$ are **not coprime**. The inverse $a^{-1}$ exists only when $\gcd(a, n) = 1$; without it you cannot simply divide. When $\gcd(a, n) > 1$ the congruence has either _no_ solution or _several_ (never a single unique one) — checking coprimality first tells you which case you are in.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Number line placement)* Solve the congruence 3x is congruent to 1 mod 7. **Place the marker on the solution x with 0 <= x < 7.

**2.** *(Cloze bank)* Complete the solvability criterion.

**3.** *(Multi select)* Select every statement that is TRUE.
   - [ ] a has an inverse mod n exactly when gcd(a, n) = 1
   - [ ] Every nonzero residue mod 7 has an inverse
   - [ ] Every nonzero residue mod 8 has an inverse
   - [ ] An ISBN check digit makes a weighted sum congruent to 0 mod 11
   - [ ] RSA is secure because its algorithm is kept secret


---

## Rational and Irrational Numbers

The **rational numbers** $\mathbb{Q}$ are ratios $\frac{a}{b}$ of integers ($b \neq 0$). Every rational has a **lowest-terms** form, obtained by dividing numerator and denominator by their gcd — the unique representative with $\gcd(a, b) = 1$. Fraction arithmetic follows fixed rules: a common denominator to add ($\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$), and numerator-times-numerator over denominator-times-denominator to multiply.

Rationals have a clean decimal signature: **a number is rational exactly when its decimal expansion terminates or eventually repeats.** $\frac{1}{4} = 0.25$ (terminates), $\frac{1}{3} = 0.333\dots$ (repeats), $\frac{1}{7} = 0.\overline{142857}$ (repeats with period 6). Conversely, any terminating or repeating decimal can be written as a fraction. This is a complete characterization: terminating-or-repeating $\Leftrightarrow$ rational.

The **irrational numbers** are the reals that are _not_ rational — their decimals go on forever without repeating. Famous examples are $\sqrt{2}$, $\pi$, and $e$. That $\sqrt{2}$ is irrational is proved by **contradiction** (Unit 1): assume $\sqrt{2} = \frac{a}{b}$ in lowest terms; then $a^2 = 2b^2$, forcing $a$ even, hence $b$ even too — contradicting lowest terms. So no such fraction exists.

A surprising fact about how these mix: between _any_ two distinct real numbers lie both a rational and an irrational — both sets are **dense** in the line. Yet the rationals are **countable** (listable in a sequence) while the irrationals are **uncountable**, so in a precise sense "almost all" real numbers are irrational, even though the rationals are everywhere.

> **Common pitfall:** believing that any decimal that "looks endless" is irrational. A decimal is irrational only if it is both non-terminating _and_ non-repeating. $0.333\dots$ and $0.\overline{142857}$ run forever but **repeat**, so they are perfectly rational ($\frac{1}{3}$ and $\frac{1}{7}$). Endlessness alone does not make a number irrational — the absence of a repeating pattern does.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* Complete the decimal expansions. Each of these fractions terminates.

**2.** *(Matrix grid)* Classify each number by the shape of its decimal expansion.

**3.** *(Numerical input)* Compute 2/3 + 3/4 and write the result in lowest terms. What is the numerator?

---

## Real Numbers and the Number Line

The **real numbers** $\mathbb{R}$ complete the rationals by filling every gap, forming a continuous line with no holes. The property that distinguishes $\mathbb{R}$ from $\mathbb{Q}$ is **completeness**: every set of reals that is bounded above has a **least upper bound** (supremum) that is itself a real number. The rationals lack this — the set of rationals with square less than 2 has no rational least upper bound (it "wants" to be $\sqrt{2}$, which is missing). Completeness is what makes calculus possible; limits always land somewhere real.

Everyday tools describe positions and distances on this line:
- **Intervals** name connected stretches: $[a, b]$ is **closed** (endpoints included), $(a, b)$ is **open** (endpoints excluded), and half-open forms mix.
- **Absolute value** $|x|$ is the distance from $x$ to $0$: $|x| = x$ if $x \ge 0$, else $-x$. More usefully, $|x - y|$ is the **distance between** $x$ and $y$.
- A set is **bounded above** if some number exceeds all its elements (an **upper bound**); **bounded below** likewise. Bounded both ways means simply **bounded**.

The absolute value obeys the **triangle inequality** $|x + y| \le |x| + |y|$ — the length of a combined step never exceeds the sum of the individual step lengths. This small inequality is one of the most-used tools in all of analysis, underlying estimates and the very definition of limits.

Between the density of the rationals and the completeness of the reals lies the full picture: the rationals are everywhere but full of invisible gaps, and the reals seal those gaps to make the continuum on which calculus is built.

> **Common pitfall:** confusing an **upper bound** with the **least** upper bound (supremum), or treating open and closed intervals as interchangeable. Any number above a set is _an_ upper bound; the supremum is the _smallest_ such number. And $[a, b]$ **includes** its endpoints while $(a, b)$ **excludes** them — a distinction that matters for whether a maximum is attained. Completeness guarantees the supremum exists in $\mathbb{R}$, but it need not be a member of the set.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Compute the value of |3 - 11| + |-4|.

**2.** *(Category sort)* Sort each number by whether it lies in the interval from -2 to 3, including -2 but excluding 3.

**3.** *(Error highlight)* A student describes the real line. Highlight the one incorrect statement.

---

## Arithmetic and Geometric Sequences

A **sequence** is an ordered list of numbers $a_1, a_2, a_3, \dots$. Two patterns are so common they have names and formulas.

An **arithmetic sequence** adds a fixed **common difference** $d$ each step: $a_n = a_1 + (n-1)d$. For $2, 5, 8, 11, \dots$, $d = 3$. The sum of the first $n$ terms (an **arithmetic series**) has a famous closed form:
$$S_n = \frac{n}{2}(a_1 + a_n) = \frac{n}{2}\big(2a_1 + (n-1)d\big).$$
The first form is the memorable one: the sum equals the number of terms times the _average_ of the first and last. (This is the trick young Gauss used to add $1$ to $100$ instantly: $\frac{100}{2}(1 + 100) = 5050$.)

A **geometric sequence** multiplies by a fixed **common ratio** $r$ each step: $a_n = a_1 r^{n-1}$. For $3, 6, 12, 24, \dots$, $r = 2$. Its finite sum is
$$S_n = a_1 \frac{r^n - 1}{r - 1} \quad (r \neq 1).$$
When $|r| < 1$, the _infinite_ geometric series converges to $\frac{a_1}{1 - r}$ — infinitely many terms with a finite total, as with $1 + \tfrac12 + \tfrac14 + \dots = 2$.

The essential distinction is **additive versus multiplicative growth**. Arithmetic sequences change by a constant _difference_ (linear growth — a straight line); geometric sequences change by a constant _ratio_ (exponential growth — accelerating or decaying). Telling them apart is the first step in analyzing any pattern: check whether successive terms _differ_ by a constant or are in a constant _ratio_.

> **Common pitfall:** mixing up **arithmetic** (constant _difference_) with **geometric** (constant _ratio_) sequences, or their formulas. In an arithmetic sequence you _add_ $d$; in a geometric sequence you _multiply_ by $r$. So $2, 5, 8, 11$ is arithmetic ($+3$) while $2, 6, 18, 54$ is geometric ($\times 3$). Applying the arithmetic sum formula to a geometric sequence (or vice versa) gives nonsense — first identify which pattern you have.

Two bar rows: an arithmetic sequence with equal accent steps added (a straight-line top) beside a geometric sequence with each bar a constant multiple of the last (an accelerating curve) — additive versus multiplica.

$$a_n = a_1 + (n-1)d \;;\; a_n = a_1 r^{n-1}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* Work out the pattern in each sequence and supply the next term.

**2.** *(Numerical input)* A geometric sequence has first term 5 and common ratio 3. Find the sixth term.

**3.** *(Formula builder)* Assemble the formula for the nth term of an arithmetic sequence.

---

## Number Theory in Action

Number theory was long prized as the "purest" mathematics — studied for its beauty, seemingly without application. Today it secures nearly every online transaction. This closing lesson connects the unit's ideas to the systems that rely on them.

**Error detection and correction.** Check digits (Lesson 6) use modular arithmetic to catch mistakes: an ISBN's last digit makes a weighted sum $\equiv 0 \pmod{11}$, so a single wrong or transposed digit breaks the congruence and is flagged. The same modular idea, extended, lets **error-correcting codes** not just detect but _repair_ corrupted data in storage and transmission.

**Hashing.** A **hash function** maps keys to a fixed range, typically by reducing modulo a table size (often chosen prime, to spread values evenly). This gives hash tables their near-instant lookup — a direct application of "reduce mod $n$."

**Cryptography.** The crown jewel is **public-key cryptography** (RSA), which rests entirely on number theory:
- It uses two large **primes** whose product is public but whose factors are secret.
- Encryption and decryption are **modular exponentiation** — fast to compute.
- Security rests on **factoring being hard**: recovering the primes from their product is computationally infeasible for large numbers, even though multiplying them is easy.
- **Fermat's/Euler's theorems** (Lesson 6) guarantee that decryption undoes encryption.

The lesson is that the unit's abstract tools — **divisibility, primes, gcd, coprimality, modular arithmetic, and inverses** — are exactly the machinery of modern digital security and data integrity. What Euclid and Fermat studied for its elegance turns out to be indispensable, a striking example of pure mathematics becoming essential technology.

> **Common pitfall:** thinking cryptographic security comes from a _secret algorithm_ rather than a _hard mathematical problem_. RSA's method is completely public; its security rests on the number-theoretic fact that **factoring a large number into its prime factors is computationally hard**, while multiplying primes is easy. The secret is the _prime factors_, not the procedure — hiding the algorithm is neither necessary nor what protects the data.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* An ISBN-10 has digits d1 through d10 and must satisfy: 1 x d1 + 2 x d2 + ... + 10 x d10 is congruent to 0 mod 11. The first nine digits are 0, 3, 0, 6, 4, 0, 6, 1, 5. Find the check digit d10.

**2.** *(Category sort)* Sort each application by the number-theoretic idea it chiefly rests on.

**3.** *(Error highlight)* A student reviews the applications of number theory. Highlight the one incorrect statement.

---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
