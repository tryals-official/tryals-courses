# Unit 4: Linear Algebra

## Vector Spaces

Unit 3 treated vectors as arrows and tuples. **Linear algebra** abstracts away the picture and keeps only the _operations_. A **vector space** is any set $V$ of objects (called vectors) equipped with two operations — **addition** and **scalar multiplication** — satisfying a short list of **axioms**. Anything obeying the axioms _is_ a vector space, whatever its elements look like.

The axioms formalize the familiar rules:
- Addition is **commutative** and **associative**.
- There is a **zero vector** $\mathbf{0}$ with $v + \mathbf{0} = v$.
- Every $v$ has an **additive inverse** $-v$ with $v + (-v) = \mathbf{0}$.
- Scalar multiplication **distributes** over addition ($c(u + v) = cu + cv$ and $(c + d)v = cv + dv$), is associative ($c(dv) = (cd)v$), and $1v = v$.

The power of abstraction is that many _non-arrow_ objects satisfy these axioms and so are vector spaces:
- $\mathbb{R}^n$ — the familiar tuples.
- **Polynomials** of degree $\le n$ — you can add them and scale them.
- **Matrices** of a fixed size — likewise.
- **Functions** $f : \mathbb{R} \to \mathbb{R}$ — added and scaled pointwise.
- **Solutions** to a homogeneous linear differential equation.

Because all these share the same axioms, _every_ theorem proved for abstract vector spaces applies to _all_ of them at once. Proving something about "vectors" simultaneously establishes it for tuples, polynomials, matrices, and functions — the efficiency that makes abstraction worthwhile.

> **Common pitfall:** thinking "vector" must mean an **arrow** or a **tuple of numbers**. In linear algebra a vector is _any_ element of a set satisfying the vector-space axioms — a polynomial, a matrix, or a function all qualify. What matters is that you can **add** the objects and **scale** them consistently; the geometric arrow is just one example, not the definition.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Category sort)* A vector space must be closed under addition and scaling and must contain a zero vector. Sort each set, taken with its usual operations.

**2.** *(Cloze bank)* Complete the reason abstraction is worth the effort.

**3.** *(Error highlight)* A student summarises what a vector space is. Highlight the one incorrect statement.

---

## Subspaces

A **subspace** is a subset $W$ of a vector space $V$ that is _itself_ a vector space under the same operations. Subspaces are where most of the action in linear algebra happens — solution sets, spans, kernels, and images are all subspaces.

Checking all the axioms would be tedious, but there is a shortcut. A nonempty subset $W$ is a subspace exactly when it is **closed** under the two operations:
1. **Closed under addition** — if $u, v \in W$ then $u + v \in W$.
2. **Closed under scalar multiplication** — if $v \in W$ and $c$ is a scalar then $cv \in W$.

If both hold, all the other axioms are inherited automatically from $V$. A convenient consequence: taking $c = 0$ shows every subspace must **contain the zero vector** — so a subset missing $\mathbf{0}$ can be rejected immediately.

Geometrically, the subspaces of $\mathbb{R}^3$ are exactly: the **zero subspace** $\{\mathbf{0}\}$, every **line through the origin**, every **plane through the origin**, and all of $\mathbb{R}^3$. Crucially, they must pass through the origin — a line _not_ through the origin is _not_ a subspace, because it fails closure (scaling a point on it by 0 lands off the line, and it lacks the zero vector).

Subspaces arise everywhere: the solutions of a **homogeneous** system $A\mathbf{x} = \mathbf{0}$ form a subspace (the **null space**), as do the span of any set of vectors and the range of a linear map. Recognizing a subspace lets you apply all of vector-space theory to it directly.

> **Common pitfall:** thinking a line or plane that does **not pass through the origin** is a subspace. Every subspace must contain the **zero vector** and be closed under scaling — so a line offset from the origin fails (scaling any of its points by 0 gives $\mathbf{0}$, which is not on the line). Only lines and planes _through the origin_ (plus $\{\mathbf{0}\}$ and the whole space) are subspaces.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Ordering)* Order the steps of the subspace test applied to a subset W of a vector space V, cheapest check first.

**2.** *(Multi select)* Select every subset of the plane that DOES contain the zero vector but is still NOT a subspace.
   - [ ] The union of the x-axis and the y-axis
   - [ ] The line y = 2x
   - [ ] All (x, y) with x greater than or equal to 0 and y greater than or equal to 0
   - [ ] The line y = 2x + 3
   - [ ] All (x, y) with y equal to x cubed


**3.** *(Error highlight)* A student explains subspaces. Highlight the one incorrect statement.

---

## Span and Linear Combinations

A **linear combination** of vectors $v_1, \dots, v_k$ is any expression
$$c_1 v_1 + c_2 v_2 + \dots + c_k v_k$$
with scalar coefficients $c_i$. It is the most basic way to build new vectors from old ones — adding scaled copies. The collection of _all_ linear combinations of a given set is its **span**, written $\operatorname{span}\{v_1, \dots, v_k\}$ — the entire region those vectors can reach.

The span is always a **subspace** (it contains $\mathbf{0}$, taking all $c_i = 0$, and is closed under the operations). It is, in fact, the _smallest_ subspace containing the given vectors. Geometrically:
- The span of a single nonzero vector is the **line** through it.
- The span of two non-parallel vectors in the plane is the **whole plane**.
- The span of two parallel vectors is just a **line** (the second adds nothing new).

A set of vectors is a **spanning set** for a space $V$ if $\operatorname{span}$ of the set is all of $V$ — every vector in $V$ is _some_ linear combination of them. For example, $(1, 0)$ and $(0, 1)$ span $\mathbb{R}^2$: any $(a, b) = a(1,0) + b(0,1)$.

Determining whether a vector $w$ is in the span of others is exactly solving a **linear system**: $w = c_1 v_1 + \dots + c_k v_k$ is a system in the unknowns $c_i$, which has a solution precisely when $w$ lies in the span. This ties spanning directly to the Gaussian-elimination machinery of Unit 3.

> **Common pitfall:** assuming that _more_ vectors always **span more**. Adding a vector that is already a linear combination of the others does **not** enlarge the span — two parallel vectors span only a line, not a plane. What grows the span is a vector pointing in a genuinely _new_ direction (one not already reachable). Redundant vectors expand the list without expanding the reach.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Let v1 = (1, 2) and v2 = (3, -1). There are scalars c1 and c2 with c1 v1 + c2 v2 = (5, 3). Find c1.

**2.** *(Category sort)* Let W be the span of (1, 0, 1) and (0, 1, 1). Decide for each vector whether it lies in W.

**3.** *(Ordering)* Order the steps that decide whether a vector w lies in the span of v1 and v2.

---

## Linear Independence

A set of vectors is **linearly independent** if none of them can be written as a linear combination of the others — no vector is redundant. The precise definition uses the zero vector: $v_1, \dots, v_k$ are independent when the _only_ way to have
$$c_1 v_1 + c_2 v_2 + \dots + c_k v_k = \mathbf{0}$$
is with **all coefficients zero** ($c_1 = c_2 = \dots = c_k = 0$). If some _nontrivial_ combination (not all zero) gives $\mathbf{0}$, the vectors are **linearly dependent** — and then one of them can be solved for in terms of the others, exposing the redundancy.

Some quick tests and facts:
- Two vectors are dependent exactly when one is a **scalar multiple** of the other (parallel).
- Any set containing the **zero vector** is automatically dependent (take its coefficient to be 1, the rest 0).
- In $\mathbb{R}^n$, **any set of more than $n$ vectors is automatically dependent** — you cannot have more than $n$ independent directions in $n$-dimensional space.

Checking independence is, once again, a **linear system**: $c_1 v_1 + \dots + c_k v_k = \mathbf{0}$ is a homogeneous system in the $c_i$. The vectors are independent exactly when this system has _only_ the trivial (all-zero) solution — which happens precisely when the matrix with those vectors as columns has full column rank (a pivot in every column).

Independence is the key structural property: it means "no wasted vectors," which combined with spanning gives the notion of a basis in the next lesson.

> **Common pitfall:** reading the definition as "no vector is a multiple of another." That is the test only for a set of **two** vectors. With three or more, a set can be dependent even though no single vector is a scalar multiple of another — e.g. a third vector might be the _sum_ of the first two. The correct definition is that the **only** combination equal to $\mathbf{0}$ is the all-zero one.

Three vectors from the origin where the accent third vector is drawn as exactly the sum of the first two (dependent), beside three vectors pointing in genuinely different directions (independent).

$$c_1 v_1 + \dots + c_k v_k = \mathbf{0} \Rightarrow \text{all } c_i = 0$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* The vectors (2, -1, 4) and (-6, 3, k) are linearly dependent. Find k.

**2.** *(Multi select)* The set {u, v, w} is linearly DEPENDENT. Select every statement that must then be true.
   - [ ] Some combination of u, v, w with not all coefficients zero equals the zero vector
   - [ ] One of the three is a scalar multiple of another
   - [ ] At least one of the three is a linear combination of the other two
   - [ ] All three vectors are equal
   - [ ] The homogeneous system with u, v, w as columns has a nonzero solution


**3.** *(Table completion)* Complete the verdicts. Answer Independent or Dependent.

---

## Basis and Dimension

A **basis** for a vector space $V$ is a set of vectors that is _both_:
- **Linearly independent** (no redundancy), and
- **Spanning** (their combinations reach every vector in $V$).

A basis is thus a **minimal spanning set** — just enough vectors, with none wasted, to build everything in $V$. Removing any basis vector loses spanning; adding any vector loses independence. The **standard basis** of $\mathbb{R}^n$ is $e_1 = (1, 0, \dots), e_2 = (0, 1, 0, \dots), \dots$, but every space has infinitely many bases.

The single most important fact: **every basis of a given space has the same number of vectors.** That number is the **dimension** of the space, $\dim V$. The plane has dimension 2, ordinary space dimension 3, the space of polynomials of degree $\le n$ has dimension $n+1$. Dimension is a fundamental invariant — it does not depend on which basis you pick.

Bases give **coordinates**: because a basis spans, every vector is _some_ combination of the basis vectors; because it is independent, that combination is **unique**. So each vector corresponds to exactly one list of coefficients — its coordinates in that basis. This is precisely why coordinates work, and it is the bridge from abstract vector spaces back to concrete tuples of numbers.

Two convenient consequences in an $n$-dimensional space: any $n$ independent vectors automatically form a basis (independence plus the right count forces spanning), and any $n$ spanning vectors are automatically independent. So once you know the dimension, you only need to check _one_ of the two basis conditions.

> **Common pitfall:** thinking any **spanning set** is a basis, or any **independent set** is a basis. A basis needs **both** properties. A spanning set with extra, dependent vectors is not a basis (too many); an independent set too small to reach everything is not a basis (too few). And every basis of the space has _exactly_ $\dim V$ vectors — no more, no fewer.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Table completion)* Complete the table of dimensions.

**2.** *(Multi select)* V is a vector space of dimension 4. Select every statement that MUST be true.
   - [ ] Every basis of V has exactly 4 vectors
   - [ ] Any 4 linearly independent vectors in V form a basis
   - [ ] Any 4 vectors in V form a basis
   - [ ] Any 5 vectors in V are linearly dependent
   - [ ] Any 3 vectors in V span V


**3.** *(Ordering)* Order these subspaces of ordinary three-dimensional space by increasing dimension.

---

## Linear Transformations

A **linear transformation** is a map $T : V \to W$ between vector spaces that **preserves the two operations**:
$$T(u + v) = T(u) + T(v), \qquad T(cv) = c\,T(v).$$
Transforming a sum equals summing the transforms, and scaling commutes with $T$. Rotations, reflections, scalings, projections, differentiation, and integration are all linear; bending a line into a curve, or adding a constant shift, is not.

An immediate consequence of linearity is that $T(\mathbf{0}) = \mathbf{0}$: a linear map **fixes the origin** (set $c = 0$ in the scaling rule). Any candidate map that moves the origin — like $T(v) = v + b$ with $b \neq \mathbf{0}$ — is therefore _not_ linear.

The central structural fact: **a linear transformation is completely determined by its action on a basis.** Since every vector is a unique combination of basis vectors, and $T$ preserves combinations, knowing $T(e_1), T(e_2), \dots$ pins down $T$ everywhere. For maps between finite-dimensional spaces this gives the **matrix representation**: place the images $T(e_j)$ as the **columns** of a matrix $A$, and then $T(\mathbf{v}) = A\mathbf{v}$. A matrix _is_ a linear transformation in coordinates.

Because transformations are matrices, **composing** transformations corresponds to **multiplying** matrices — and since order matters for transformations (rotate-then-reflect $\neq$ reflect-then-rotate), matrix multiplication is non-commutative, closing the loop with the matrix theory of Unit 3.

> **Common pitfall:** assuming _every_ map of vectors is linear, or forgetting that a linear map must **fix the origin**. Linearity is strict: _both_ $T(u+v) = T(u)+T(v)$ and $T(cv) = cT(v)$ must hold, which forces $T(\mathbf{0}) = \mathbf{0}$. A map that adds a nonzero constant ($T(v) = v + b$) moves the origin and is **not** linear — even though it looks simple.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Ordering)* Order the steps of finding the matrix of a linear transformation of the plane.

**2.** *(Matrix grid)* Decide whether each map is linear.

**3.** *(Multi select)* T is a linear map from three-dimensional space into the plane. Select every statement that MUST be true.
   - [ ] T sends (0, 0, 0) to (0, 0)
   - [ ] T(2u) = 2 T(u) for every u
   - [ ] T(u + v) = T(u) + T(v) for all u and v
   - [ ] T is represented by a 3x2 matrix
   - [ ] T(u - v) = T(u) - T(v) for all u and v


---

## Kernel, Image, and Rank–Nullity

Two subspaces describe any linear transformation $T : V \to W$.

The **kernel** (null space) is everything $T$ sends to zero:
$$\ker T = \{v \in V : T(v) = \mathbf{0}\}.$$
It measures what the map **collapses**. The kernel is a subspace of the _domain_. A crucial fact: **$T$ is injective (one-to-one) exactly when its kernel is just $\{\mathbf{0}\}$** — if only the zero vector maps to zero, no two distinct inputs can collide.

The **image** (range) is everything $T$ can produce:
$$\operatorname{im} T = \{T(v) : v \in V\}.$$
It measures what the map **reaches**. The image is a subspace of the _codomain_, and $T$ is surjective (onto) exactly when its image is all of $W$. The dimension of the image is the **rank** of $T$; the dimension of the kernel is the **nullity**.

These are tied by the **Rank–Nullity Theorem**, one of the central results of linear algebra:
$$\dim(\ker T) + \dim(\operatorname{im} T) = \dim V,$$
i.e. **nullity + rank = dimension of the domain.** Every dimension of the input is accounted for: some directions get collapsed (the kernel) and the rest survive into the image. If a map from $\mathbb{R}^5$ has a 2-dimensional kernel, its image is exactly 3-dimensional — the numbers must add up.

This theorem instantly settles many questions. A linear map between spaces of the _same_ finite dimension is injective if and only if it is surjective (if and only if it is bijective) — because rank + nullity is fixed, one forces the other. This is why a square matrix is invertible exactly when its kernel is trivial.

> **Common pitfall:** confusing the **kernel** (in the domain, what maps to zero) with the **image** (in the codomain, what is reached), and forgetting that rank and nullity **must sum to the domain's dimension**. If a map from an $n$-dimensional space has a $k$-dimensional kernel, its image is $(n - k)$-dimensional — not free to be anything. Rank–Nullity is a hard accounting constraint, not a rough guide.

An input space split into an accent kernel band (collapsed to the zero point) and the complementary directions surviving into the image, their dimensions summing to the domain dimension.

$$\dim(\ker T) + \dim(\operatorname{im} T) = \dim V$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A linear map from 7-dimensional space into 4-dimensional space has a 3-dimensional kernel. What is its rank?

**2.** *(Venn diagram)* T is the projection of space onto the horizontal plane: T(x, y, z) = (x, y, 0). Place each vector according to whether it is in the kernel of T and whether it is in the image of T.

**3.** *(Error highlight)* A student states the Rank-Nullity facts. Highlight the one incorrect line.

---

## Eigenvalues and Eigenvectors

Most vectors change direction under a linear transformation. But some special nonzero vectors are only **scaled** — the transformation stretches or shrinks them without rotating. Such a vector is an **eigenvector**, and its scale factor is the **eigenvalue** $\lambda$. The defining equation:
$$A v = \lambda v, \qquad v \neq \mathbf{0}.$$
Applying $A$ to its eigenvector $v$ returns $v$ scaled by $\lambda$ — same direction (or exactly reversed), new length. Eigenvectors are the "natural axes" along which a complicated transformation acts simply, as pure scaling.

To **find** eigenvalues, rewrite $Av = \lambda v$ as $(A - \lambda I)v = \mathbf{0}$. For a nonzero $v$ to exist, the matrix $A - \lambda I$ must be **singular**, i.e. have zero determinant. This gives the **characteristic equation**:
$$\det(A - \lambda I) = 0,$$
a polynomial in $\lambda$ (the characteristic polynomial) whose roots are the eigenvalues. Once an eigenvalue $\lambda$ is known, its eigenvectors are the nonzero solutions of $(A - \lambda I)v = \mathbf{0}$ — the null space of $A - \lambda I$, called the **eigenspace**.

Eigenvalues reveal a transformation's behavior:
- Magnitude $> 1$ stretches that direction; $< 1$ shrinks it; negative also flips it.
- Under repeated application ($A^k$), the largest-magnitude eigenvalue dominates the long-term behavior — the key to dynamical systems, Markov chains, and iterative methods.
- The eigenvalues of a matrix sum to its **trace** and multiply to its **determinant** — handy consistency checks.

> **Common pitfall:** forgetting that an eigenvector must be **nonzero** and keeps its **direction** (only length changes). The zero vector satisfies $A\mathbf{0} = \lambda\mathbf{0}$ for _every_ $\lambda$, so it is excluded by definition. And an eigenvector is not merely a vector whose _length_ the matrix changes — it must map to a **scalar multiple of itself** (same or exactly opposite direction), not one that rotates.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Let A = [4, 1 ; 2, 3], written as rows separated by a semicolon. Its characteristic equation is lambda squared - 7 lambda + 10 = 0. What is the LARGER eigenvalue?

**2.** *(Matrix grid)* Let A = [2, 1 ; 1, 2], written as rows separated by a semicolon. Its eigenvalues are 3 and 1. Classify each vector.

**3.** *(Numerical input)* A 3x3 matrix has eigenvalues 2, -1 and 4. What is its determinant?

---

## Diagonalization

Eigenvectors give a matrix its "natural axes." **Diagonalization** exploits this: if a matrix has enough independent eigenvectors to form a basis, then in _that_ basis the transformation is simply a scaling along each axis — a **diagonal matrix**. Complicated becomes simple, just by choosing the right coordinates.

Concretely, a square matrix $A$ is **diagonalizable** if it can be written
$$A = P D P^{-1},$$
where $D$ is **diagonal** (the eigenvalues on its diagonal) and $P$ has the corresponding **eigenvectors as its columns**. The condition is exactly having a **basis of eigenvectors**: an $n \times n$ matrix is diagonalizable if and only if it has $n$ linearly independent eigenvectors. (A sufficient condition: $n$ _distinct_ eigenvalues guarantees it, since eigenvectors for distinct eigenvalues are automatically independent.)

Not every matrix is diagonalizable — a matrix with a repeated eigenvalue that lacks enough independent eigenvectors (a **defective** matrix) cannot be diagonalized. So diagonalizability is a genuine property, not automatic.

The payoff is computational. Powers become trivial: $A^k = P D^k P^{-1}$, and $D^k$ just raises each diagonal entry to the $k$. Computing $A^{100}$ by repeated multiplication is enormous work; via diagonalization it is one matrix of easy powers, sandwiched by $P$ and $P^{-1}$. This is exactly how one solves systems of linear recurrences and differential equations, and how the long-term behavior of dynamical systems (dominant eigenvalue) is read off. Diagonalization is the practical reason eigenvalues matter.

> **Common pitfall:** assuming **every** square matrix is diagonalizable. Diagonalization requires a full set of $n$ **independent eigenvectors**; a defective matrix (too few independent eigenvectors, from a repeated eigenvalue) cannot be diagonalized. Having $n$ _distinct_ eigenvalues is _sufficient_ but not _necessary_ — some repeated-eigenvalue matrices are still diagonalizable, and some are not; you must check the eigenvectors.

A skewed eigenvector grid straightened by P^{-1} into axis-aligned coordinates where the accent diagonal matrix D simply scales each axis, then mapped back by P — diagonalization as a change of coordinates.

$$A = P D P^{-1},\quad A^k = P D^k P^{-1}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A = P D P inverse, where D is the diagonal matrix with entries 1 and 2. Compute the TRACE of A to the tenth power.

**2.** *(Ordering)* Order the steps of diagonalizing an n by n matrix A.

**3.** *(Formula builder)* Build the formula that makes high powers of a diagonalizable matrix cheap.

---

## Inner Product Spaces and Orthogonality

The dot product of Unit 3 gave $\mathbb{R}^n$ its geometry — lengths and angles. An **inner product** $\langle u, v \rangle$ generalizes this to _any_ vector space, including spaces of functions. It must be symmetric, linear in each argument, and **positive definite** ($\langle v, v \rangle > 0$ for $v \neq \mathbf{0}$). From it come the **norm** $\|v\| = \sqrt{\langle v, v \rangle}$ (length) and the **angle** via $\cos\theta = \frac{\langle u, v \rangle}{\|u\|\,\|v\|}$. This closes the unit by returning geometry to abstract spaces.

Two vectors are **orthogonal** when $\langle u, v \rangle = 0$ — the generalized perpendicularity. A set of mutually orthogonal nonzero vectors is automatically **linearly independent**, so orthogonal sets make especially convenient bases. An **orthonormal basis** is orthogonal _and_ each vector has length 1; in such a basis, coordinates are trivial to compute — the $i$-th coordinate of $v$ is just $\langle v, e_i \rangle$ (no system to solve).

**Orthogonal projection** finds the closest point in a subspace to a given vector. The projection of $v$ onto a subspace $W$ is the vector in $W$ nearest to $v$, and the error $v - \operatorname{proj}_W v$ is orthogonal to all of $W$. This is the geometric heart of **least-squares approximation**: when a system $A\mathbf{x} = \mathbf{b}$ has no exact solution, the least-squares solution projects $\mathbf{b}$ onto the column space, giving the best approximate fit — the foundation of data fitting and regression.

The **Gram–Schmidt process** turns any basis into an orthonormal one, systematically subtracting off components along the vectors already chosen. Orthonormal bases and projections make computation clean and are central to Fourier analysis, least squares, and much of applied mathematics — a fitting close to the linear-algebra unit.

> **Common pitfall:** assuming an **orthogonal projection** is just "drop the extra coordinates," or that any set of vectors gives easy coordinates. Projection onto a subspace $W$ finds the **nearest** vector in $W$, with the residual $v - \operatorname{proj}_W v$ **orthogonal** to $W$ — it is a specific geometric construction, not mere truncation. And coordinates are trivial ($\langle v, e_i \rangle$) only in an **orthonormal** basis; in a general basis you must solve a linear system.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Compute the inner product (the dot product) of u = (1, 2, -2) and v = (3, 0, 4).

**2.** *(Category sort)* Sort each pair of vectors by whether the two are orthogonal.

**3.** *(Multi select)* Select every TRUE statement about inner products and orthogonality.
   - [ ] Two vectors are orthogonal exactly when their inner product is 0
   - [ ] In an orthonormal basis, the i-th coordinate of v is the inner product of v with the i-th basis vector
   - [ ] A set of mutually orthogonal nonzero vectors is linearly independent
   - [ ] Every orthogonal set is orthonormal
   - [ ] The zero vector is orthogonal to every vector


---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
