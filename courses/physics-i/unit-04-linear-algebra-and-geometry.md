# Unit 4: Linear Algebra and Geometry

**[Study this unit interactively on Tryals →](https://tryals.app/courses/physics-i)**

## Vectors in 2D and 3D

A **vector** is a quantity with both **magnitude** and **direction**. In physics we use vectors for displacement, velocity, force, and many other quantities.

**Notation and components**

$$\vec{v} = v_x\,\hat{i} + v_y\,\hat{j} + v_z\,\hat{k}$$

**Basic operations**

- **Addition:** $\vec{u}+\vec{v} = (u_x+v_x,\; u_y+v_y,\; u_z+v_z)$
- **Scalar mult.:** $\alpha\vec{v} = (\alpha v_x,\; \alpha v_y,\; \alpha v_z)$
- **Magnitude:** $\|\vec{v}\| = \sqrt{v_x^{2} + v_y^{2} + v_z^{2}}$
- **Unit vector:** $\hat{v} = \vec{v}\,/\,\|\vec{v}\|$

**Key properties**

- **Commutativity:** $\vec{u}+\vec{v} = \vec{v}+\vec{u}$
- **Associativity:** $(\vec{u}+\vec{v})+\vec{w} = \vec{u}+(\vec{v}+\vec{w})$
- **Zero vector:** $\vec{v}+\vec{0} = \vec{v}$

> **Tip:** Always sketch vectors before computing. A diagram catches sign errors that algebra misses.

> **Common pitfall:** Vectors add tip-to-tail, not by adding lengths: walking 3 km east then 4 km north displaces you 5 km, not 7. Magnitudes only add when directions align.

**Practice preview:**

**1.** *(True false)* The zero vector has a well-defined direction.
   - True / False


**2.** *(Category sort)* Sort each expression by what kind of object it produces ($u, v$ are vectors).

**3.** *(Error highlight)* Find the error in computing 2(1,3) + (4,−1).

---

## Matrices and Matrix Operations

A **matrix** is a rectangular array of numbers arranged in **rows** and **columns**. An $m \times n$ matrix has $m$ rows and $n$ columns.

 A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} 

**Matrix arithmetic**

- **Sum** ($A,B$ same size): $(A+B)_{ij} = a_{ij}+b_{ij}$
- **Scalar:** $(\alpha A)_{ij} = \alpha\,a_{ij}$
- **Product** (cols $A$ = rows $B$):

$$(AB)_{ij} = \sum_k a_{ik}\,b_{kj}$$

**Important properties**

- Multiplication is **associative**: $(AB)C = A(BC)$.
- Multiplication is **not commutative**: $AB \neq BA$ in general.
- The **identity matrix** $I_n$ satisfies $AI = IA = A$.
- The **transpose**: $(A^T)_{ij} = a_{ji}$.

> **Key insight:** Every matrix represents a **linear map** between vector spaces.

> **Common pitfall:** Matrix multiplication is not commutative: $AB \ne BA$ in general, because transformations compose in order — rotate-then-reflect differs from reflect-then-rotate. Never swap factors casually.

**Practice preview:**

**1.** *(Interactive scene)* $A = \begin{pmatrix}3&1\\0&2\end{pmatrix}$. Set the **trace** — the diagonal highlights on send.

**2.** *(Multiple choice)* For two square matrices, $AB$ and $BA$ are generally **different**. What everyday analogy captures why order matters?
   - A) Putting on socks then shoes vs. shoes then socks — operations compose in order
   - B) Adding 3 then 5 vs. adding 5 then 3 — order never matters
   - C) Shuffling a deck twice — any order gives the same shuffle
   - D) Multiplying 3 × 5 vs. 5 × 3


**3.** *(Word search)* Find five terms about matrices.

---

## Systems of Linear Equations and Gaussian Elimination

A **system of linear equations** in matrix form:

$$A\vec{x} = \vec{b}$$

**Gaussian elimination** reduces the augmented matrix $[A|\vec{b}]$ to row echelon form:

1. **Swap** two rows: $R_i \leftrightarrow R_j$.
2. **Scale** a row: $R_i \to \alpha R_i$, $\alpha \neq 0$.
3. **Add** a multiple: $R_i \to R_i + \alpha R_j$.

**Example** — Solve the $2\times 2$ system:

$$\begin{pmatrix} 2 & 1 & | & 5 \\ 4 & -1 & | & 1 \end{pmatrix} \xrightarrow{R_2 - 2R_1} \begin{pmatrix} 2 & 1 & | & 5 \\ 0 & -3 & | & -9 \end{pmatrix}$$

Back-substitution gives $y = 3$, $x = 1$.

**Solution types**

- **Unique:** $\mathrm{rk}(A) = \mathrm{rk}([A|b]) = n$
- **Infinite:** $\mathrm{rk}(A) = \mathrm{rk}([A|b]) < n$
- **None:** $\mathrm{rk}(A) < \mathrm{rk}([A|b])$

> **Tip:** Always check the rank of both $A$ and $[A|\vec{b}]$ before interpreting the solution.

> **Common pitfall:** Row operations preserve the solution set, not the matrix: the echelon form is a different matrix telling the same story. And a row $0\;0\;|\;c$ with $c \ne 0$ ends that story — no solution, stop.

**Practice preview:**

**1.** *(Timeline ordering)* Order the steps of Gaussian elimination.

**2.** *(Crossword)* Solve the crossword about linear systems.

**3.** *(Interactive scene)* Solve the system $2x + y = 5$, $x - y = 1$ and place the point where the two (hidden) lines cross.

---

## Determinants

The **determinant** is a scalar value that encodes key information about a square matrix: invertibility, volume scaling, and orientation.

**Formulas**

For a $2\times 2$ matrix:

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

For a $3\times 3$ matrix, expand along the first row (**cofactor expansion**):

 \det(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13} 

where $C_{ij} = (-1)^{i+j}M_{ij}$ and $M_{ij}$ is the minor.

**Key properties**

- $\det(AB) = \det(A)\cdot\det(B)$
- $\det(A^T) = \det(A)$
- $\det(\alpha A) = \alpha^n \det(A)$ for an $n\times n$ matrix
- A matrix is **invertible** $\iff$ $\det(A) \neq 0$

**Geometric meaning**

- In $\mathbb{R}^{2}$: $|\det(A)|$ = area of the parallelogram spanned by the column vectors.
- In $\mathbb{R}^{3}$: $|\det(A)|$ = volume of the parallelepiped.
- A **negative** determinant means the transformation **reverses orientation**.

> **Physics link:** The Jacobian determinant $\det(\partial x_i/\partial q_j)$ appears whenever you change coordinates in integrals — from Cartesian to polar, spherical, or any generalised system.

> **Common pitfall:** $\det(A+B) \ne \det A + \det B$. The determinant respects multiplication ($\det AB = \det A \det B$) but not addition — it is an area scale factor, and areas do not add across different maps.

**Practice preview:**

**1.** *(True false)* If det(A) = 0, then A is invertible.
   - True / False


**2.** *(Matching)* Match each determinant property to its statement.

**3.** *(Error highlight)* Find the error in computing det([[1,2],[3,4]]).

---

## Eigenvalues and Eigenvectors

An **eigenvector** of a matrix $A$ is a nonzero vector $\vec{v}$ that satisfies:

$$A\vec{v} = \lambda\vec{v}$$

The scalar $\lambda$ is the corresponding **eigenvalue**. The transformation $A$ only **stretches** $\vec{v}$, without changing its direction.

**Finding eigenvalues** — Solve the **characteristic equation**:

 \det(A - \lambda I) = 0 

This yields a polynomial of degree $n$ whose roots are the eigenvalues.

**Finding eigenvectors** — For each $\lambda_i$, solve the homogeneous system:

$$(A - \lambda_i I)\vec{v} = \vec{0}$$

**Example**

 A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \implies \det(A-\lambda I) = \lambda^2 - 7\lambda + 10 = 0 

So $\lambda_1 = 5$, $\lambda_2 = 2$.

**Diagonalisation** — If $A$ has $n$ linearly independent eigenvectors, then:

 A = PDP^{-1} 

where $D = \text{diag}(\lambda_1,\ldots,\lambda_n)$ and $P$ has eigenvectors as columns. This makes computing $A^k = PD^kP^{-1}$ trivial.

> **Physics link:** Normal modes of coupled oscillators are eigenvectors of the system matrix. Each eigenvalue gives $\omega^{2}$, the squared angular frequency of that mode.

> **Common pitfall:** Eigen-vectors keep their **line**, not their length or even sense: eigenvalues may be negative (flips), zero (collapse), or fractional (shrink). "Unchanged by the matrix" is only true when $\lambda = 1$.

An **eigenvector** $\vec{v}$ of a matrix $A$ satisfies:

$$A\vec{v} = \lambda\vec{v}$$

The scalar $\lambda$ is the corresponding **eigenvalue**. Under the transformation $A$, eigenvectors only scale — they do not rotate.

Eigenvalues are found from the **characteristic equation** $\det(A - \lambda I) = 0$.

> Eigenvectors reveal the intrinsic axes of a transformation — diagonalisation, stability analysis, and PCA all depend on them.

**Practice preview:**

**1.** *(Interactive scene)* $A$ has columns $(1.2, 0.3)$ and $(0.6, 1.1)$. Place your prediction where $A$ sends $p = (2, 1)$ — the grid warps only after you send.

**2.** *(Multiple choice)* A transformation stretches the plane. Vector $v \ne 0$ satisfies $Av = 3v$. What is geometrically special about $v$’s **direction**?
   - A) The transformation keeps that direction fixed, merely stretching along it 3×
   - B) The transformation rotates $v$ by exactly 3 radians
   - C) $v$ is unaffected by the transformation entirely
   - D) $v$ is perpendicular to everything the matrix produces


**3.** *(Word search)* Find five terms about eigenvalues and eigenvectors.

---

## Vector Spaces and Subspaces

A **vector space** $V$ over $\mathbb{R}$ is a set equipped with **addition** and **scalar multiplication** satisfying eight axioms.

**Subspace test** — $W \subseteq V$ is a **subspace** if:

1. $\vec{0} \in W$
2. Closed under addition
3. Closed under scalar multiplication

**Key concepts**

- **Span:** all linear combinations of a set of vectors
- **Linear independence:** no vector is a combination of the others
- **Basis:** a linearly independent spanning set
- **Dimension:** number of vectors in any basis

**Fundamental subspaces** of $A_{m\times n}$:

- **Column space** $\mathrm{Col}(A) \subseteq \mathbb{R}^m$
- **Null space** $\mathrm{Null}(A) \subseteq \mathbb{R}^n$
- **Rank-nullity:** $\mathrm{rk}(A) + \mathrm{null}(A) = n$

> **Tip:** To find a basis for $\mathrm{Col}(A)$, row-reduce and take columns at pivot positions.

> **Common pitfall:** A subspace must contain the zero vector — that is the fastest test to run. The solutions of $Ax = b$ with $b \ne 0$ never form a subspace, however plane-like they look.

**Practice preview:**

**1.** *(Timeline ordering)* Order these steps to check if a set S is a subspace of ℝⁿ.

**2.** *(Crossword)* Solve the crossword about vector spaces.

**3.** *(Interactive scene)* A **3×4** matrix has rank 3. Set the dimension of its null space — pivot and free columns highlight on send.

---

## Linear Transformations

A function $T: V \to W$ is a **linear transformation** if for all $\vec{u},\vec{v}\in V$ and $\alpha\in\mathbb{R}$:

$$T(\vec{u}+\vec{v}) = T(\vec{u})+T(\vec{v}) \qquad T(\alpha\vec{u}) = \alpha\,T(\vec{u})$$

Every linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$ can be represented by an $m\times n$ **matrix**.

**Common transformations in** $\mathbb{R}^{2}$

| Transformation | Matrix |
|----------------|--------|
| Rotation by $\theta$ | $\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$ |
| Reflection in $x$-axis | $\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$ |
| Scaling by $k$ | $\begin{pmatrix}k & 0 \\ 0 & k\end{pmatrix}$ |
| Shear along $x$ | $\begin{pmatrix}1 & k \\ 0 & 1\end{pmatrix}$ |

**Kernel and image**

- $\ker(T) = \{\vec{v} \in V : T(\vec{v})=\vec{0}\}$ — the **null space**.
- $\text{Im}(T) = \{T(\vec{v}) : \vec{v}\in V\}$ — the **column space**.
- $T$ is **injective** $\iff$ $\ker(T) = \{\vec{0}\}$.
- $T$ is **surjective** $\iff$ $\text{Im}(T) = W$.

> **Physics link:** Rotations, reflections, and Lorentz boosts are all linear transformations. The matrix representation lets us compose them by simple multiplication.

> **Common pitfall:** A matrix’s columns are the images of the basis vectors — that is the decoding key. Guessing a transformation from its entries without this reading is how rotations get mistaken for shears.

A **linear transformation** $T: \mathbb{R}^n \to \mathbb{R}^m$ satisfies:

$$T(\alpha\vec{u} + \beta\vec{v}) = \alpha\,T(\vec{u}) + \beta\,T(\vec{v})$$

Every linear map is represented by a matrix $A$ such that $T(\vec{x}) = A\vec{x}$. The columns of $A$ are the images of the standard basis vectors.

Common transformations: **rotations**, **reflections**, **scaling**, **shearing**.

> $|\det A|$ measures how the map scales areas. If $\det A < 0$, it reverses orientation.

**Practice preview:**

**1.** *(True false)* Every matrix multiplication Ax defines a linear transformation.
   - True / False


**2.** *(Matching)* Match each transformation to its geometric effect.

**3.** *(Error highlight)* Find the error in checking linearity of T(x,y) = (x+1, y).

---

## Dot Product, Cross Product, and Applications

**Dot product** (scalar result):

$$\vec{u}\cdot\vec{v} = u_xv_x + u_yv_y + u_zv_z = \|\vec{u}\|\,\|\vec{v}\|\cos\theta$$

**Cross product** (vector result, 3D only):

$$\vec{u}\times\vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ u_x & u_y & u_z \\ v_x & v_y & v_z \end{vmatrix}$$

**Comparison**

- Dot → scalar; cross → vector
- Dot is commutative; cross is anti-commutative
- Dot measures **projection**; cross measures **area**
- $Dot = 0 when  \perp$; cross = $\vec{0}$ when $\parallel$

**Applications in physics**

- **Work:** $W = \vec{F}\cdot\vec{d}$
- **Torque:** $\vec{\tau} = \vec{r}\times\vec{F}$
- **Magnetic force:** $\vec{F} = q\vec{v}\times\vec{B}$
- **Angular momentum:** $\vec{L} = \vec{r}\times\vec{p}$

> **Key insight:** The dot product measures **alignment**; the cross product measures **perpendicularity**.

> **Common pitfall:** The dot product peaks for **parallel** vectors and dies at 90°; the cross product does the exact opposite. Picking the wrong product silently zeroes out the very geometry you meant to measure.

**Practice preview:**

**1.** *(Interactive scene)* $\vec a = (3, 0)$, $\vec b = (1, 2)$. Set $|\vec a \times \vec b|$ — the area of the parallelogram they span (drawn only after you send).

**2.** *(Multiple choice)* You pull a sled with force 100 N at some angle to the ground, moving it 10 m. Which single quantity decides how much **work** ($\vec{F}\cdot\vec{d}$) you did?
   - A) The angle between your pull and the motion — only the aligned component counts
   - B) The total force — direction is irrelevant to work
   - C) The sled’s weight
   - D) The time the pull lasted


**3.** *(Word search)* Find five terms about dot and cross products.

---

## Lines, Planes, and Geometric Transformations

**Line in** $\mathbb{R}^{3}$ — point $P_0$ and direction $\vec{d}$:

$$\vec{r}(t) = P_0 + t\,\vec{d}$$

**Plane in** $\mathbb{R}^{3}$ — point $P_0$ and normal $\vec{n}=(a,b,c)$:

 ax+by+cz = d 

**Key formulas**

- **Distance (point to plane):**

$$D = \frac{|ax_0+by_0+cz_0-d|}{\sqrt{a^2+b^2+c^2}}$$

- **Angle between planes:**

$$\cos\theta = \frac{|\vec{n}_1\cdot\vec{n}_2|}{\|\vec{n}_1\|\,\|\vec{n}_2\|}$$

- **Parallel:** $\vec{n}_1 \times \vec{n}_2 = \vec{0}$
- **Line-plane intersection:** substitute $\vec{r}(t)$ into the plane equation

**Geometric transformations** compose as matrix products. In **homogeneous coordinates** rotation + translation becomes a single matrix multiplication.

> **Tip:** The intersection of two planes is a line with direction $\vec{n}_1\times\vec{n}_2$.

> **Common pitfall:** A plane’s normal vector is perpendicular to every vector **in** the plane — the normal’s components come from the plane’s equation coefficients, not from points on the plane.

**Practice preview:**

**1.** *(Timeline ordering)* Order the steps to find the equation of a plane through 3 points.

**2.** *(Crossword)* Solve the crossword about lines and planes in 3D.

**3.** *(Interactive scene)* Rotate $p = (2, 1)$ by **90° counter-clockwise** about the origin. Place your prediction — the point sweeps its arc after you send.

---

## Problem-Solving: Linear Algebra

Mastering linear algebra requires connecting **algebraic** procedures with **geometric** intuition. Here is a structured approach.

**Step-by-step strategy**

1. **Identify** the objects: vectors, matrices, transformations, or subspaces.
2. **Translate** the problem into a matrix equation $A\vec{x}=\vec{b}$.
3. **Reduce** using Gaussian elimination or compute eigenvalues as needed.
4. **Interpret** the result geometrically.

**Common problem types**

| Problem | Tool |
|---------|------|
| Solve $A\vec{x}=\vec{b}$ | Row reduction |
| Is $A$ invertible? | $\det(A)\neq 0$ or rank $= n$ |
| Find eigenvalues | Characteristic polynomial |
| Diagonalise $A$ | $A = PDP^{-1}$ |
| Change of basis | $[\vec{v}]_{B'} = P^{-1}[\vec{v}]_B$ |

```python
import numpy as np
A = np.array([[2, 1], [1, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print("Eigenvalues:", eigenvalues)
print("Eigenvectors:\n", eigenvectors)
print("Determinant:", np.linalg.det(A))
```

**Checklist before submitting**

- Verify dimensions match in every multiplication.
- Check: does $\det(A)=0$? If so, expect infinite or no solutions.
- Substitute your answer back into the original equation.

> **Key insight:** Linear algebra problems almost always reduce to one question: what does the matrix $A$ do to vectors? Eigenvalues and rank answer that question completely.

> **Common pitfall:** Invertibility is all-or-nothing: one collapsed direction (one zero eigenvalue, $\det = 0$, dependent columns) breaks every equivalent property at once. Check the cheapest condition and conclude the rest.

**Practice preview:**

**1.** *(True false)* If A is a 3$\times3 matrix with rank 2, then the system$ $Ax = b$ has a unique solution for every b.
   - True / False


**2.** *(Matching)* Match each problem to the linear algebra tool best suited to solve it.

**3.** *(Error highlight)* Find the error in this argument about solving $Ax = b$.

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
