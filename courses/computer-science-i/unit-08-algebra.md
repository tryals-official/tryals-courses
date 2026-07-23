# Unit 8: Algebra

**[Study this unit interactively on Tryals →](https://tryals.app/courses/computer-science-i)**

## Vectors and Vector Spaces

A **vector** is an object that has both **magnitude** and **direction** — a displacement, a velocity, a force. In coordinates, a vector in the plane is a pair $(v_1, v_2)$ and in $n$ dimensions an $n$-tuple. But the deeper idea is structural: a **vector space** is any set of objects that can be **added** together and **scaled** by numbers (scalars), obeying a short list of natural rules.

Two operations define a vector space:
- **Vector addition** — add componentwise: $(a_1, a_2) + (b_1, b_2) = (a_1 + b_1, a_2 + b_2)$. Geometrically, place them tip-to-tail.
- **Scalar multiplication** — stretch or shrink: $c(v_1, v_2) = (c v_1, c v_2)$. A negative scalar also reverses direction.

These obey the **vector-space axioms**: addition is commutative and associative, there is a **zero vector** $\mathbf{0}$ (adding it changes nothing), every vector has a negative, and scalar multiplication distributes over addition. Any set satisfying these axioms _is_ a vector space — and remarkably, this includes not just arrows but polynomials, matrices, and functions, which is why the abstraction is so powerful.

The magnitude (**norm**) of a vector measures its length: in the plane, $\|v\| = \sqrt{v_1^2 + v_2^2}$ by the Pythagorean theorem. A **unit vector** has norm 1 and captures pure direction. In computing, vectors are everywhere — coordinates in graphics, feature vectors in machine learning, embeddings in language models.

> **Common pitfall:** treating vectors as mere lists of numbers and losing the operations, or confusing a vector's **magnitude** with its **components**. A vector is defined by how it _adds_ and _scales_, not just its entries; and its magnitude is $\sqrt{v_1^2 + v_2^2}$ (a single length), not the individual components $v_1, v_2$. Adding vectors is componentwise — you do _not_ add magnitudes (the length of a sum is generally _not_ the sum of the lengths).

Two vectors from the origin joined tip-to-tail, the accent resultant drawn from start to final tip, with its Pythagorean length labeled — showing componentwise addition, not magnitude addition.

$$\|v\| = \sqrt{v_1^2 + v_2^2}$$

**Practice preview:**

**1.** *(Table completion)* Let u = (3, -1) and v = (-2, 5). Complete the table. Write each answer in the form (a, b).

**2.** *(Matrix grid)* Let u and v be vectors in the plane and c a scalar. Classify what each expression produces.

**3.** *(Formula builder)* Arrange the tokens to state correctly how the norm of a vector in the plane is computed.

---

## Dot Product and Orthogonality

The **dot product** takes two vectors and returns a single _number_ (a scalar). For $u = (u_1, u_2)$ and $v = (v_1, v_2)$:
$$u \cdot v = u_1 v_1 + u_2 v_2.$$
Multiply matching components and add. This simple operation encodes a surprising amount of geometry.

Its geometric meaning is the key: $u \cdot v = \|u\|\,\|v\|\cos\theta$, where $\theta$ is the angle between the vectors. So the dot product measures **how aligned** two vectors are:
- **Positive** — the vectors point in broadly the same direction ($\theta < 90°$).
- **Zero** — the vectors are **orthogonal** (perpendicular, $\theta = 90°$).
- **Negative** — they point in broadly opposite directions ($\theta > 90°$).

The orthogonality test is the most-used consequence: two nonzero vectors are perpendicular _exactly when their dot product is zero_. No angle computation needed — just check if $u \cdot v = 0$. This is how graphics code tests perpendicularity and how projections are computed.

The dot product also recovers length ($u \cdot u = \|u\|^2$) and lets you find the **angle** between vectors via $\cos\theta = \frac{u \cdot v}{\|u\|\,\|v\|}$. In machine learning, the closely related **cosine similarity** uses exactly this to measure how similar two feature vectors are — the backbone of search and recommendation.

> **Common pitfall:** confusing the **dot product** (which returns a _number_) with scaling or componentwise multiplication that returns a _vector_, and forgetting that **orthogonal means dot product zero**. $u \cdot v$ is a single scalar $u_1 v_1 + u_2 v_2$, not a vector. And perpendicular vectors have $u \cdot v = 0$ — a positive or negative dot product means the angle is acute or obtuse, never a right angle.

**Practice preview:**

**1.** *(Numerical input)* Let u = (3, -2) and v = (4, 6). Compute the dot product u dot v.

**2.** *(Matrix grid)* Classify the angle between each pair of vectors, using the dot product.

**3.** *(Cloze bank)* Complete the orthogonality test.

---

## Systems of Linear Equations

A **linear equation** relates variables with only addition and scalar multiples — no powers, products, or functions of the variables, like $2x + 3y = 6$. A **system** is several such equations that must hold simultaneously. Solving them is one of the most common tasks in all of computing — from graphics to economics to machine learning.

Geometrically, each linear equation in two variables is a **line**; a solution to the system is a point lying on _all_ the lines at once. This reveals the three possible outcomes for a linear system:
- **Exactly one solution** — the lines cross at a single point (the system is _consistent and independent_).
- **No solution** — the lines are parallel and never meet (the system is _inconsistent_).
- **Infinitely many solutions** — the equations describe the _same_ line, so every point on it works (the system is _dependent_).

The systematic solving method is **Gaussian elimination**: use row operations (scale a row, swap two rows, add a multiple of one row to another) to eliminate variables one at a time until the system is in a simple triangular form, then **back-substitute**. This is exactly what computers do, and it generalizes to any number of variables. The same operations can also reveal _which_ of the three cases you are in.

The number of solutions connects to the earlier idea of independence: a system with as many independent equations as unknowns has a unique solution; fewer independent equations leave free variables (infinitely many solutions), and contradictory equations give none.

> **Common pitfall:** assuming every linear system has exactly one solution. A system can have **one, none, or infinitely many** solutions depending on whether the lines cross, are parallel, or coincide. Parallel-but-distinct equations are inconsistent (no solution), and duplicate equations are dependent (infinitely many) — jumping straight to "one solution" misses these cases.

**Practice preview:**

**1.** *(Matrix grid)* Each 2x2 system is shown by its two lines. Classify how many solutions it has.

**2.** *(Cloze bank)* Complete the classification of linear systems.

**3.** *(Multi select)* The system 'x + y = 4, 2x + 2y = 8' has infinitely many solutions. Select every pair (x, y) that is a solution.
   - [ ] (0, 4)
   - [ ] (1, 3)
   - [ ] (4, 0)
   - [ ] (2, 3)
   - [ ] (-1, 5)


---

## Matrices and Matrix Operations

A **matrix** is a rectangular array of numbers arranged in **rows** and **columns**; an $m \times n$ matrix has $m$ rows and $n$ columns. Matrices compactly represent linear systems, transformations, graphs (adjacency matrices), and data tables — they are one of computing's workhorse structures.

The operations:
- **Addition** — add two matrices of the _same shape_ entry by entry.
- **Scalar multiplication** — multiply every entry by a number.
- **Matrix multiplication** — the important, non-obvious one. The product $AB$ is defined only when the number of _columns of $A$_ equals the number of _rows of $B$_. Entry $(i, j)$ of $AB$ is the **dot product** of row $i$ of $A$ with column $j$ of $B$. An $m \times n$ times an $n \times p$ matrix gives an $m \times p$ result.

Matrix multiplication has a crucial quirk: it is **not commutative** — in general $AB \neq BA$, and often only one order is even defined. (It _is_ associative, $A(BC) = (AB)C$.) The **identity matrix** $I$ (ones on the diagonal, zeros elsewhere) acts like the number 1: $AI = A$. A square matrix may have an **inverse** $A^{-1}$ with $AA^{-1} = I$, which "undoes" it — but not all matrices are invertible.

Why does this odd multiplication rule matter? Because a matrix _represents a linear transformation_, and multiplying matrices _composes_ the transformations. Applying two transformations in sequence corresponds to one matrix product — which is why the "row-times-column" rule is exactly the right definition, and why order matters (doing A then B differs from B then A).

> **Common pitfall:** assuming matrix multiplication is commutative, or multiplying entry-by-entry like addition. In general $AB \neq BA$ (order matters, and often only one order is defined). And the product is _not_ formed by multiplying corresponding entries — each result entry is a **dot product of a row and a column**, so shapes must match ($A$'s columns $=$ $B$'s rows).

**Practice preview:**

**1.** *(Numerical input)* Let A be the 2x2 matrix with rows (1, 2) and (3, 4), and B have rows (5, 6) and (7, 8). In A + B, what is the top-left entry?

**2.** *(Table completion)* Let A have rows (2, 0) and (1, 3). Complete the table for the scalar multiple 4A.

**3.** *(Ordering)* Order the steps to compute entry (2,1) of AB, where A has rows (1,2),(3,4) and B has rows (5,6),(7,8).

---

## Determinants and Invertibility

The **determinant** is a single number computed from a _square_ matrix that captures essential information about the transformation the matrix represents. For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the determinant is
$$\det = ad - bc.$$
Larger matrices have determinants too, computed by expansion, but the $2 \times 2$ case shows the idea.

Geometrically, the determinant measures how the transformation **scales area** (or volume in higher dimensions). A determinant of 2 doubles areas; a determinant of 1 preserves them; a determinant of 0 collapses everything onto a line or point — the transformation _flattens_ space. A **negative** determinant means the transformation also _flips_ orientation (like a mirror).

The single most important fact ties the determinant to the previous lesson's inverse: **a square matrix is invertible if and only if its determinant is nonzero.** A zero determinant means the matrix squashes space, losing information that cannot be recovered — so no inverse exists (the matrix is **singular**). This also decides linear systems: $A\mathbf{x} = \mathbf{b}$ has a unique solution exactly when $\det A \neq 0$.

The determinant thus unifies several threads: it detects invertibility, tells whether a linear system has a unique solution, and measures area/volume scaling. In computing it appears in graphics (orientation, area), solving systems, and testing whether vectors are linearly independent (a zero determinant means they are dependent).

> **Common pitfall:** getting the sign or terms of the $2 \times 2$ determinant wrong ($ad - bc$, _not_ $ab - cd$ or $ad + bc$), and mishandling the invertibility rule. The matrix is invertible when the determinant is **nonzero**; a **zero** determinant means it is singular (no inverse). Reversing this — thinking a zero determinant means invertible — is a fundamental error.

A unit square mapped by a 2x2 matrix into a parallelogram whose accent-shaded area equals the determinant; as the matrix nears singular, the parallelogram flattens to a line (determinant 0).

$$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

**Practice preview:**

**1.** *(Numerical input)* Compute the determinant of the 2x2 matrix with rows (3, 2) and (1, 4). Use det = ad - bc.

**2.** *(Cloze bank)* Complete the invertibility criterion.

**3.** *(Table completion)* Complete the table of determinants. Each row shows a 2x2 matrix by its rows; compute det = ad - bc.

---

## Linear Independence and Basis

A **linear combination** of vectors $v_1, \dots, v_k$ is any sum $c_1 v_1 + \dots + c_k v_k$ with scalar coefficients. The set of _all_ linear combinations of some vectors is their **span** — the whole region they can reach. In the plane, the span of two non-parallel vectors is the entire plane; the span of a single vector is just a line.

Vectors are **linearly independent** if _none_ of them is a linear combination of the others — equivalently, the only way to write $c_1 v_1 + \dots + c_k v_k = \mathbf{0}$ is with all coefficients zero. If some nontrivial combination gives zero, the vectors are **dependent** — one is redundant, expressible from the others. Independence means "no wasted vectors."

A **basis** for a vector space is a set of vectors that is _both_:
- **Linearly independent** (no redundancy), and
- **Spanning** (their combinations reach every vector in the space).

A basis is a minimal spanning set — just enough vectors, with none wasted, to build everything. The number of vectors in a basis is the **dimension** of the space (the plane has dimension 2, ordinary space dimension 3). Every vector has a _unique_ expression in a given basis — the essence of coordinates. This ties everything together: coordinates, determinants (nonzero means the columns are independent, i.e. a basis), and solving systems.

> **Common pitfall:** confusing **spanning** with **independence**, or thinking any spanning set is a basis. Spanning means the vectors _reach_ everything (possibly with redundancy); independence means _no redundancy_ (but possibly not reaching everything). A **basis** needs _both_ — a spanning set with extra, dependent vectors is not a basis, and neither is an independent set too small to span.

**Practice preview:**

**1.** *(Matrix grid)* Classify each set of vectors in the plane as linearly independent or dependent.

**2.** *(Category sort)* In the plane R^2, sort each set of vectors by what it does.

**3.** *(Numerical input)* A basis for a vector space has 5 vectors. What is the dimension of that space?

---

## Linear Transformations

A **linear transformation** is a function $T$ between vector spaces that **preserves the vector-space operations**:
$$T(u + v) = T(u) + T(v), \qquad T(cv) = c\,T(v).$$
In words, transforming a sum equals summing the transforms, and scaling before or after transforming gives the same result. Rotations, reflections, scalings, and projections are all linear; bending a line into a curve is not.

The central fact is that **every linear transformation (between finite-dimensional spaces) is represented by a matrix**, and applying the transformation is just matrix-times-vector multiplication: $T(v) = A v$. This is _why_ matrices are defined the way they are — a matrix _is_ a linear transformation in coordinates. To find the matrix, see where the transformation sends the basis vectors; those images become its columns.

Because transformations are matrices, **composing** transformations (doing one then another) corresponds to **multiplying** their matrices — and since order matters for transformations (rotate-then-reflect $\neq$ reflect-then-rotate), matrix multiplication is non-commutative, closing the loop with Lesson 4. Two structural quantities describe a transformation: its **kernel** (vectors sent to zero) and its **image** (vectors it can reach); a transformation is invertible exactly when its matrix is (nonzero determinant).

Linear transformations are everywhere in computing: graphics pipelines are chains of matrix transformations (rotate, scale, project a 3D scene to the screen); machine-learning layers are linear transformations followed by nonlinearities; and coordinate changes are transformations between bases.

> **Common pitfall:** assuming _every_ function of vectors is linear, or forgetting that a linear transformation must **fix the origin** and preserve both operations. A transformation that adds a constant shift (like $T(v) = v + b$ with $b \neq 0$) is _not_ linear — it moves the origin and fails $T(u+v) = T(u)+T(v)$. Linearity is a strict requirement: both additivity and scaling must hold, which forces $T(\mathbf{0}) = \mathbf{0}$.

**Practice preview:**

**1.** *(Numerical input)* A linear transformation has matrix with rows (2, 0) and (0, 3). Apply it to the vector (4, 1). What is the first component of the result?

**2.** *(Cloze bank)* Complete the rule for finding a transformation's matrix.

**3.** *(Ordering)* Order the steps to find the matrix of a linear transformation T on the plane.

---

## Eigenvalues and Eigenvectors

Most vectors change direction under a linear transformation. But some special vectors are only **scaled** — the transformation stretches or shrinks them without rotating them. Such a vector is an **eigenvector**, and its scale factor is the **eigenvalue** $\lambda$. The defining equation is beautifully simple:
$$A v = \lambda v, \qquad v \neq \mathbf{0}.$$
Applying the matrix $A$ to its eigenvector $v$ gives back $v$ scaled by $\lambda$ — same direction, new length.

Eigenvalues reveal the "natural axes" of a transformation. Along an eigenvector, the complicated matrix action becomes simple multiplication by a number. This is why they matter:
- An eigenvalue of magnitude $> 1$ means that direction is **stretched**; magnitude $< 1$ means **shrunk**; a negative eigenvalue also **flips** the direction.
- Repeatedly applying $A$ (as in a dynamical system or a Markov chain) is governed by the eigenvalues — the largest-magnitude one eventually dominates.

To find eigenvalues you solve the **characteristic equation** $\det(A - \lambda I) = 0$ — reusing the determinant's "singular" test, because $Av = \lambda v$ means $(A - \lambda I)v = 0$ has a nonzero solution, which requires $A - \lambda I$ to be singular.

Eigenvalues are among computing's most applied ideas: **PageRank** ranks web pages via the dominant eigenvector of a link matrix; **principal component analysis** compresses data along top eigenvectors; and stability of systems, vibration modes, and quantum states are all eigenvalue problems.

> **Common pitfall:** forgetting that an eigenvector must be **nonzero** and that it keeps its **direction** (only the length changes). The zero vector trivially satisfies $Av = \lambda v$ for any $\lambda$, so it is excluded by definition. And an eigenvector is not just any vector the matrix scales the length of — it must map to a **scalar multiple of itself** (same or exactly opposite direction), not merely change in size while rotating.

**Practice preview:**

**1.** *(Numerical input)* The matrix A with rows (2, 0) and (0, 3) has eigenvector (1, 0). Since A(1,0) = (2, 0) = 2 times (1, 0), what is the corresponding eigenvalue?

**2.** *(Matrix grid)* An eigenvalue lambda controls what happens along its eigenvector. Classify each value.

**3.** *(Cloze bank)* Complete the reason eigenvalues matter for repeated application.

---

## Complex Numbers

Some equations, like $x^2 = -1$, have no real solution — no real number squares to a negative. Mathematicians extend the reals by introducing the **imaginary unit** $i$, defined by $i^2 = -1$. A **complex number** then has the form $z = a + bi$, with a **real part** $a$ and an **imaginary part** $b$. This modest extension makes _every_ polynomial equation solvable — the Fundamental Theorem of Algebra.

Arithmetic works by treating $i$ as a symbol with $i^2 = -1$:
- **Addition** — add real and imaginary parts separately: $(a + bi) + (c + di) = (a + c) + (b + d)i$.
- **Multiplication** — expand and use $i^2 = -1$: $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.
- The **conjugate** of $a + bi$ is $a - bi$; multiplying a number by its conjugate gives the real value $a^2 + b^2$.

Geometrically, a complex number is a **point in the plane** — real part on the horizontal axis, imaginary part on the vertical. Its **modulus** $|z| = \sqrt{a^2 + b^2}$ is its distance from the origin, and its **argument** is the angle it makes. In this view, _multiplying_ complex numbers **adds their angles and multiplies their moduli** — so multiplication by a unit complex number is a **rotation**. This deep link between complex arithmetic and rotation powers signal processing (the Fourier transform), computer graphics, and quantum computing.

> **Common pitfall:** mishandling $i^2$, or adding complex numbers as if the parts mix. Remember $i^2 = -1$ (not $+1$), so a product like $(bi)(di) = bd\,i^2 = -bd$ contributes to the _real_ part. And addition keeps the parts separate — real adds to real, imaginary to imaginary; you never add a real part to an imaginary part.

**Practice preview:**

**1.** *(Multi select)* Let z = 3 + 2i and w = 1 + 5i. Select every TRUE statement about z + w.
   - [ ] The real part is 4
   - [ ] The imaginary part is 7
   - [ ] z + w = 4 + 7i
   - [ ] The real part is 3
   - [ ] z + w = 3 + 10i


**2.** *(Table completion)* Complete the table of complex arithmetic. Let z = 4 + 3i.

**3.** *(Category sort)* Sort each number by whether it is real, purely imaginary, or a general complex number.

---

## Applications of Linear Algebra in Computing

Linear algebra is arguably the most _applied_ area of mathematics in computing — this closing lesson connects the unit's ideas to the systems students use every day. The recurring theme is that data and geometry are represented as **vectors and matrices**, and computation becomes **matrix arithmetic**.

**Computer graphics.** Every 3D scene is a cloud of points (vectors). Moving, rotating, scaling, and projecting them onto the screen are **linear transformations** — matrix multiplications. The graphics pipeline chains these matrices; a GPU is, at heart, a machine for doing enormous numbers of matrix-vector products fast.

**Data and machine learning.** A dataset is a matrix (rows = samples, columns = features). **Principal component analysis** finds the top **eigenvectors** of the data's covariance matrix to compress it along its most informative directions. A neural network layer is a **matrix multiply** (weights times inputs) followed by a nonlinearity; training adjusts those matrices. **Cosine similarity** — a normalized **dot product** — measures how alike two feature vectors or word embeddings are, powering search and recommendation.

**Networks and ranking.** A graph's connections form an **adjacency matrix**. **PageRank** computes the dominant **eigenvector** of the web's link matrix to rank pages; the same eigenvector idea ranks nodes in social and citation networks.

The unifying lesson: represent the problem with vectors and matrices, and the heavy lifting becomes standardized linear-algebra operations that decades of highly optimized libraries (and specialized hardware) can execute at massive scale. Mastering this language is foundational for graphics, data science, machine learning, and scientific computing.

> **Common pitfall:** treating these applications as unrelated tricks rather than one idea. Graphics transformations, PCA, neural-network layers, and PageRank are _all_ the same core operations — **matrix-vector products, dot products, and eigenvectors** — applied to different data. Missing the common thread makes each look like a separate topic to memorize, when they are one toolkit reused.

A point cloud flowing left to right through two matrix stages (rotation then scaling), the accent tracked point transformed at each stage to its final screen position — a graphics pipeline as composed transformation.

$$v_{out} = M_2 (M_1 v)$$

**Practice preview:**

**1.** *(Matrix grid)* Match each computing application to the linear-algebra object it relies on most directly.

**2.** *(Numerical input)* A dataset has 1000 samples, each with 20 features. Represented as a matrix with rows = samples and columns = features, how many columns does it have?

**3.** *(Memory pairs)* Match each application to its core linear-algebra idea.

---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
