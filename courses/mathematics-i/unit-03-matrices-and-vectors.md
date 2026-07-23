# Unit 3: Matrices and Vectors

## Vectors in the Plane and Space

A **vector** is a quantity with both **magnitude** and **direction**, pictured as an arrow. In coordinates, a vector in the plane is an ordered pair $(v_1, v_2)$ and in space an ordered triple $(v_1, v_2, v_3)$; in general $\mathbb{R}^n$ has $n$-component vectors. The **components** are the signed displacements along each axis, and a vector is unchanged by sliding it (position does not matter — only length and direction).

Two operations are fundamental:
- **Addition** is componentwise: $(a_1, a_2) + (b_1, b_2) = (a_1 + b_1,\, a_2 + b_2)$. Geometrically, place the arrows **tip-to-tail**; the sum runs from the first tail to the last tip (the parallelogram rule).
- **Scalar multiplication** scales each component: $c(v_1, v_2) = (cv_1, cv_2)$. This stretches ($|c| > 1$) or shrinks ($|c| < 1$) the arrow, and a negative $c$ reverses its direction.

The **magnitude** (length, or **norm**) comes from the Pythagorean theorem: $\|v\| = \sqrt{v_1^2 + v_2^2}$ in the plane, and $\sqrt{v_1^2 + v_2^2 + v_3^2}$ in space. A **unit vector** has length 1 and encodes pure direction; dividing any nonzero vector by its length **normalizes** it to a unit vector.

These operations obey the same axioms across all dimensions: addition is commutative and associative, there is a **zero vector**, every vector has a negative, and scalars distribute. That uniformity is what lets the geometry of arrows in the plane carry over unchanged to spaces we cannot draw.

> **Common pitfall:** adding vectors by adding their **magnitudes**, or confusing a vector's magnitude with its components. Vectors add **componentwise** — the length of a sum is generally _not_ the sum of the lengths ($\|u + v\| \le \|u\| + \|v\|$, with equality only when they point the same way). And the magnitude is a single number $\sqrt{v_1^2 + v_2^2}$, not the list of components.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Compute the magnitude of the vector u = (3, -4).

**2.** *(Numerical input)* The unit vector in the direction of u = (6, 8) has components (a, b). What is a?

**3.** *(Error highlight)* A student summarises vector operations. Highlight the one incorrect statement.

---

## Dot Product and Angles

The **dot product** (scalar product) combines two vectors into a single **number**. For $u = (u_1, u_2)$ and $v = (v_1, v_2)$,
$$u \cdot v = u_1 v_1 + u_2 v_2$$
(and analogously in higher dimensions: multiply matching components and sum). Despite its simplicity, it encodes the angle between vectors.

Its geometric identity is the key:
$$u \cdot v = \|u\|\,\|v\|\cos\theta,$$
where $\theta$ is the angle between the vectors. So the sign of the dot product reveals the angle:
- **Positive** — acute angle ($\theta < 90°$), the vectors broadly agree in direction.
- **Zero** — right angle; the vectors are **orthogonal** (perpendicular).
- **Negative** — obtuse angle ($\theta > 90°$), the vectors broadly oppose.

The **orthogonality test** is the workhorse: two nonzero vectors are perpendicular _exactly when their dot product is zero_ — no trigonometry required. Rearranging the identity gives the **angle** itself: $\cos\theta = \frac{u \cdot v}{\|u\|\,\|v\|}$. The dot product also recovers length, since $u \cdot u = \|u\|^2$.

The dot product underlies **projection** (the component of one vector along another is $\frac{u \cdot v}{\|v\|}$) and the **Cauchy–Schwarz inequality** $|u \cdot v| \le \|u\|\,\|v\|$, a cornerstone of geometry and analysis. Wherever "how aligned are these?" is asked, the dot product answers.

> **Common pitfall:** thinking the dot product yields a **vector**, or forgetting that **orthogonal means dot product zero**. $u \cdot v$ is a single scalar $u_1 v_1 + u_2 v_2$, not a vector. And perpendicular vectors have $u \cdot v = 0$: a positive or negative dot product signals an acute or obtuse angle, never a right angle.

Two vectors from the origin with the angle theta marked; the accent dot-product value shrinks to zero as the angle opens to 90 degrees — orthogonality at u · v = 0.

$$u \cdot v = \|u\|\,\|v\|\cos\theta$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Let u = (3, -1, 2) and v = (4, 2, -1). Compute the dot product u . v.

**2.** *(Table completion)* Complete the dot products.

**3.** *(Error highlight)* A student describes the dot product. Highlight the one incorrect statement.

---

## Cross Product and Geometry in Space

In three dimensions there is a second product, the **cross product** $u \times v$, which — unlike the dot product — returns a **vector**. Its two defining geometric features:
- **Direction:** $u \times v$ is **perpendicular to both** $u$ and $v$, pointing along the normal to the plane they span (with orientation given by the right-hand rule).
- **Magnitude:** $\|u \times v\| = \|u\|\,\|v\|\sin\theta$, which is exactly the **area of the parallelogram** formed by $u$ and $v$.

So the cross product answers geometric questions the dot product cannot: it produces a normal direction and measures area. Note the sine (versus the dot product's cosine): the cross product is **largest when the vectors are perpendicular** and **zero when they are parallel** — parallel vectors span no area. This gives a **parallelism test**: $u \times v = \mathbf{0}$ exactly when $u$ and $v$ are parallel (the mirror of the dot product's orthogonality test).

The cross product is **anticommutative**: $u \times v = -(v \times u)$ — swapping the order reverses the resulting vector. This is unlike ordinary multiplication and unlike the dot product (which is symmetric), and it reflects the two possible perpendicular directions.

A related quantity, the **scalar triple product** $u \cdot (v \times w)$, gives the **signed volume** of the parallelepiped spanned by three vectors; it is zero exactly when the three vectors are **coplanar** (lie in a common plane), a clean test for whether three directions are independent in space.

> **Common pitfall:** expecting the cross product to be **commutative**, or confusing it with the dot product. $u \times v = -(v \times u)$ — order matters and flips the direction (anticommutative), whereas the dot product is symmetric. And the cross product returns a **vector** perpendicular to both inputs (magnitude $\|u\|\|v\|\sin\theta$), while the dot product returns a **scalar** ($\|u\|\|v\|\cos\theta$) — different outputs, different geometry.

Two vectors spanning a parallelogram, the accent cross-product vector rising perpendicular from the plane and the shaded area labeled |u||v|sin(theta) — direction and area together.

$$\|u \times v\| = \|u\|\,\|v\|\sin\theta$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Let u = (2, 1, 0) and v = (1, 3, 0). Compute the third component of the cross product u x v.

**2.** *(Matrix grid)* Assign each property to the product it belongs to.

**3.** *(Cloze bank)* Complete the magnitude formula for the cross product.

---

## Matrices and Matrix Operations

A **matrix** is a rectangular array of numbers in **rows** and **columns**; an $m \times n$ matrix has $m$ rows and $n$ columns. Matrices represent linear systems, transformations, and data — one of the central objects of linear algebra.

The operations:
- **Addition** — two matrices of the _same shape_ add entry by entry.
- **Scalar multiplication** — multiply every entry by a number.
- **Matrix multiplication** — the important, non-obvious one. The product $AB$ is defined only when the number of _columns of $A$_ equals the number of _rows of $B$_ (the inner dimensions match). Entry $(i, j)$ of $AB$ is the **dot product** of row $i$ of $A$ with column $j$ of $B$. An $m \times n$ times an $n \times p$ matrix gives an $m \times p$ result.

Matrix multiplication has crucial quirks:
- It is **not commutative** — in general $AB \neq BA$, and often only one order is even defined.
- It _is_ **associative**: $A(BC) = (AB)C$.
- The **identity matrix** $I$ (ones on the diagonal, zeros elsewhere) satisfies $AI = A = IA$, playing the role of 1.
- Some square matrices have an **inverse** $A^{-1}$ with $AA^{-1} = A^{-1}A = I$; those are the **invertible** (nonsingular) matrices.

The "row-times-column" rule looks strange until you know its purpose: a matrix represents a **linear transformation**, and matrix multiplication **composes** transformations. That is why the rule is exactly right, and why order matters — applying $A$ then $B$ differs from $B$ then $A$, just as function composition does.

> **Common pitfall:** assuming matrix multiplication is **commutative**, or multiplying **entry-by-entry** like addition. In general $AB \neq BA$ (order matters, and often only one order is defined). And the product is _not_ formed by multiplying corresponding entries — each result entry is a **dot product of a row and a column**, so the inner dimensions must match ($A$'s columns $=$ $B$'s rows).

Row i of A sweeping across column j of B, each pair multiplied and summed into the accent (i,j) entry of AB — the row-times-column rule.

$$(AB)_{ij} = \sum_k A_{ik} B_{kj}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* Give the shape of each product, or write 'undefined' if the product does not exist.

**2.** *(Matrix grid)* Decide whether each statement about matrix operations is true or false.

**3.** *(Ordering)* Order the steps of computing the entry in row 2, column 3 of the product AB.

---

## Systems of Linear Equations

A **linear equation** relates variables using only sums and scalar multiples — no powers or products of variables, like $2x + 3y = 6$. A **system** is several such equations required to hold simultaneously. Solving systems is one of the core tasks of linear algebra, and it can be written compactly as a matrix equation $A\mathbf{x} = \mathbf{b}$.

Geometrically, a linear equation in two variables is a **line**, and a solution is a point on _all_ the lines at once. This reveals exactly three possibilities:
- **Exactly one solution** — the lines cross at a single point (consistent, independent).
- **No solution** — the lines are parallel and distinct (inconsistent).
- **Infinitely many solutions** — the equations describe the same line (dependent).

The systematic method is **Gaussian elimination**: use **row operations** — swap two rows, scale a row, or add a multiple of one row to another — to reduce the system to a triangular (row-echelon) form, then **back-substitute**. Row operations never change the solution set, and they reveal which of the three cases holds. In matrix language, you row-reduce the **augmented matrix** $[A \mid \mathbf{b}]$.

The number of solutions connects to independence: a system with as many _independent_ equations as unknowns has a unique solution; fewer independent equations leave **free variables** (infinitely many solutions); contradictory equations (a row like $0 = 1$) give none. This same machinery generalizes to any number of variables and is the computational heart of linear algebra.

> **Common pitfall:** assuming every linear system has a **unique** solution. Depending on the geometry, a system can have **one, none, or infinitely many** solutions. Parallel-but-distinct equations are inconsistent (none); duplicate or dependent equations leave free variables (infinitely many). A row reducing to $0 = 1$ signals no solution, while a row of all zeros signals a free variable — jumping straight to "one solution" misses both.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Matrix grid)* Classify each system of two equations by how many solutions it has.

**2.** *(Table completion)* Back-substitute in the triangular system x + 2y + z = 9, y + 3z = 8, z = 2.

**3.** *(Error highlight)* A student discusses linear systems. Highlight the one incorrect statement.

---

## Gaussian Elimination and Rank

**Gaussian elimination** is the algorithm behind solving linear systems, and it also reveals a matrix's deepest numerical feature. The goal is to reach **row echelon form**: a staircase pattern where each row's leading nonzero entry (its **pivot**) sits strictly to the right of the pivot above, and all-zero rows sink to the bottom. **Reduced** row echelon form goes further — each pivot is 1 and is the only nonzero entry in its column, giving a unique canonical form.

The process uses only the three **row operations** (swap, scale, add a multiple), applied to clear out entries below each pivot in turn. Because these operations preserve the solution set, the echelon form has the same solutions as the original system but is trivial to solve by back-substitution.

The number of pivots is the matrix's **rank** — the count of independent rows (equivalently, independent columns). Rank measures how much genuine information the matrix carries:
- Rank tells you the number of independent equations in a system.
- For an $n \times n$ matrix, **full rank** ($\text{rank} = n$) means the matrix is invertible and the system $A\mathbf{x} = \mathbf{b}$ has a unique solution.
- **Rank deficiency** (rank $< n$) means dependent rows, hence free variables — no unique solution.

Rank also governs solution counts precisely (the **Rank–Nullity** picture): variables without pivots are **free**, and the number of free variables is (number of unknowns) minus rank. Zero free variables gives a unique solution; more give infinitely many (or, if an inconsistent row appears, none).

> **Common pitfall:** confusing the presence of a **zero row** with the system having **no solution**. A row of all zeros in the coefficient part just signals a **dependent equation** (a free variable, hence infinitely many solutions). "No solution" comes instead from an **inconsistent** row — zeros in the coefficients but a nonzero constant, i.e. $0 = 1$. A zero row means _redundancy_; a $0 = 1$ row means _contradiction_.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* A consistent system has a 3 by 5 coefficient matrix of rank 2. How many free variables does it have?

**2.** *(Table completion)* For each consistent system, work out the number of free variables. Remember that the unknowns correspond to the columns.

**3.** *(Ordering)* Order the steps of running Gaussian elimination on a 3 by 3 coefficient matrix.

---

## Determinants

The **determinant** is a single number computed from a _square_ matrix that captures essential information about it. For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$,
$$\det = ad - bc.$$
Larger determinants are computed by **cofactor expansion** along a row or column (or, in practice, via row reduction), but the $2 \times 2$ case shows the essential idea.

Geometrically, the determinant is the **signed area** (in 2D) or **signed volume** (in 3D) scaling factor of the linear map the matrix represents. A determinant of 2 doubles areas; of 1 preserves them; of 0 collapses space onto a lower dimension. The **sign** records orientation: a negative determinant means the transformation includes a **reflection** (flips orientation).

The single most important fact ties the determinant to invertibility: **a square matrix is invertible if and only if its determinant is nonzero.** A zero determinant means the matrix squashes space, losing information irreversibly — it is **singular** (no inverse). Equivalently, $A\mathbf{x} = \mathbf{b}$ has a unique solution exactly when $\det A \neq 0$, and the columns are linearly independent exactly then.

Useful properties: $\det(AB) = \det(A)\det(B)$ (the determinant of a product is the product of determinants); swapping two rows negates the determinant; and a matrix with a repeated or zero row has determinant 0. These make the determinant a compact detector of independence, invertibility, and solvability all at once.

> **Common pitfall:** getting the $2 \times 2$ determinant wrong ($ad - bc$, **not** $ab - cd$ or $ad + bc$), and reversing the **invertibility** rule. A matrix is invertible when its determinant is **nonzero**; a **zero** determinant means singular (no inverse). Thinking "zero determinant means invertible" is exactly backwards — zero is precisely the non-invertible case.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Compute the determinant of the matrix with rows (3, 5) and (2, 4).

**2.** *(Table completion)* Complete the determinants of these 2 by 2 matrices.

**3.** *(Error highlight)* A student lists facts about determinants. Highlight the one incorrect statement.

---

## Matrix Inverses

The **inverse** of a square matrix $A$ is the matrix $A^{-1}$ that "undoes" it: $AA^{-1} = A^{-1}A = I$, the identity. Not every matrix has one — a matrix with an inverse is **invertible** (or nonsingular), and the criterion is exactly the determinant: **$A$ is invertible if and only if $\det A \neq 0$** (Lesson 7). Singular matrices ($\det A = 0$) have no inverse because they collapse space, and collapsing loses information that no matrix can restore.

For a $2 \times 2$ matrix there is a tidy formula:
$$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \;\Rightarrow\; A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.$$
Swap the diagonal entries, negate the off-diagonal ones, and divide by the determinant. The division by $\det A$ makes the "no inverse when $\det = 0$" rule vivid — you cannot divide by zero.

The inverse's chief use is **solving linear systems**. If $A\mathbf{x} = \mathbf{b}$ and $A$ is invertible, multiply both sides by $A^{-1}$:
$$\mathbf{x} = A^{-1}\mathbf{b}.$$
This gives the unique solution directly. (In practice, for large systems, Gaussian elimination is faster than computing the inverse, but conceptually the inverse packages the solution.)

Key algebraic facts: the inverse is **unique** when it exists; $(A^{-1})^{-1} = A$; and the inverse of a product reverses the order, $(AB)^{-1} = B^{-1}A^{-1}$ (like putting on socks then shoes, and reversing to take them off). This order-reversal mirrors the non-commutativity of matrix multiplication.

> **Common pitfall:** thinking every square matrix has an inverse, or writing $(AB)^{-1} = A^{-1}B^{-1}$. Only matrices with **nonzero determinant** are invertible; singular matrices have none. And the inverse of a product **reverses the order**: $(AB)^{-1} = B^{-1}A^{-1}$, not $A^{-1}B^{-1}$ — because multiplication is non-commutative, the undoing must happen in the opposite sequence.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Let A have rows (3, 1) and (5, 2). What is the entry in row 1, column 1 of the inverse of A?

**2.** *(Category sort)* Sort each statement about inverses by whether it is true or false.

**3.** *(Error highlight)* A student discusses matrix inverses. Highlight the one incorrect statement.

---

## Lines and Planes in Space

Vectors give clean descriptions of the basic objects of geometry — **lines** and **planes** — in any dimension. The idea: locate a point, then move along direction vectors.

A **line** through a point $P_0$ (position vector $\mathbf{r}_0$) with direction vector $\mathbf{d}$ is the set of points
$$\mathbf{r} = \mathbf{r}_0 + t\,\mathbf{d}, \qquad t \in \mathbb{R}.$$
The parameter $t$ slides you along the line; the direction $\mathbf{d}$ sets the heading. This **parametric** form works identically in 2D, 3D, or higher, unlike slope-intercept form which is stuck in the plane.

A **plane** is captured most elegantly by a **normal vector** $\mathbf{n}$ — a vector perpendicular to the plane. A point $\mathbf{r}$ lies in the plane through $P_0$ with normal $\mathbf{n}$ exactly when the displacement $\mathbf{r} - \mathbf{r}_0$ is perpendicular to $\mathbf{n}$:
$$\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0.$$
Expanded, this is the familiar $ax + by + cz = d$, where $(a, b, c)$ **is** the normal vector — reading the coefficients off a plane's equation gives its normal directly.

These descriptions turn geometry into vector algebra. The **angle between two planes** is the angle between their normals (via the dot product); two planes are **parallel** when their normals are parallel and **perpendicular** when their normals are orthogonal. The distance from a point to a plane, the intersection of a line and a plane, and whether lines are skew all reduce to dot and cross products — the payoff of the vector machinery built in this unit.

> **Common pitfall:** confusing a plane's **normal vector** with a direction lying **in** the plane. The normal is **perpendicular** to the plane — and it is exactly the coefficient vector $(a, b, c)$ in $ax + by + cz = d$, _not_ a vector pointing along the plane. Two planes are parallel when their **normals** are parallel; using a within-plane direction instead of the normal inverts the geometry.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* The plane 2x - 3y + z = 7 has normal vector (a, b, c). What is b?

**2.** *(Numerical input)* A plane has the form 2x + y - z = d and passes through the point (1, 2, 3). Find d.

**3.** *(Error highlight)* A student describes lines and planes. Highlight the one incorrect statement.

---

## Applications of Matrices and Vectors

This closing lesson gathers the unit's tools — vectors, matrices, systems, determinants, inverses — and shows the range of problems they solve. The unifying theme: represent a problem with **vectors and matrices**, and computation becomes **matrix arithmetic**.

**Geometric transformations.** A matrix _is_ a linear map, so rotating, scaling, reflecting, or shearing points in the plane or space is a **matrix–vector product** $\mathbf{x} \mapsto A\mathbf{x}$. Chaining transformations is **matrix multiplication**, and the determinant tells you how areas scale (and whether orientation flips). This is the mathematics of computer graphics and robotics.

**Solving real systems.** Countless problems — balancing chemical equations, analyzing electrical circuits (Kirchhoff's laws), fitting supply to demand — reduce to a linear system $A\mathbf{x} = \mathbf{b}$, solved by Gaussian elimination or, conceptually, $\mathbf{x} = A^{-1}\mathbf{b}$.

**Networks and data.** A network's connections form an **adjacency matrix**; powers of that matrix count paths of a given length. A dataset is a matrix (rows = samples, columns = features), and operations like averaging, projecting, and correlating are matrix computations. Even ranking (as in web search) reduces to matrix and vector operations.

The deeper message is one of **abstraction and reuse**: wildly different problems, once phrased in the language of vectors and matrices, become the _same_ handful of operations — matrix products, determinants, solving $A\mathbf{x} = \mathbf{b}$. Decades of optimized linear-algebra libraries then solve them all. This is why linear algebra is among the most widely applied areas of mathematics, and why fluency in it unlocks so much of science and engineering.

> **Common pitfall:** viewing these applications as unrelated tricks instead of one framework. Graphics transformations, circuit equations, network path-counting, and data operations are _all_ the same core operations — **matrix–vector products, matrix multiplication, and solving $A\mathbf{x} = \mathbf{b}$** — applied to different data. Missing the common structure makes each look like a separate topic when they are one reusable toolkit.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* A three-node network has adjacency matrix with rows (0, 1, 1), (1, 0, 1) and (1, 1, 0). The entry in row 1, column 1 of the square of that matrix counts the walks of length 2 from node 1 back to itself. Compute it.

**2.** *(Matrix grid)* Match each task to the matrix operation that carries it out.

**3.** *(Error highlight)* A student reviews the applications of linear algebra. Highlight the one incorrect statement.

---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
