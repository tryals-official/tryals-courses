# Unit 4: Mathematics I

## Matrix Addition

A **matrix** is a rectangular array of numbers — and in business, matrices are everywhere before you notice them: a sales table (rows = products, columns = branches), a cost breakdown, a transition table of customers between plans.

**Notation**: a matrix $A$ of dimension $m \times n$ has $m$ rows and $n$ columns; the entry $a_{ij}$ sits in row $i$, column $j$. Order matters and is read _rows first_:

$$A_{2\times 3} = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \end{pmatrix}$$

**Addition** works entry by entry — and only between matrices of the **same dimension**:

$$(A+B)_{ij} = a_{ij} + b_{ij}$$

If January's sales matrix and February's sales matrix have the same layout, $A + B$ is the two-month total, cell by cell. Adding a $2\times 3$ to a $3\times 2$ is as meaningless as adding a price list to a staff roster.

**Scalar multiplication** rescales every entry at once: $ (kA)_{ij} = k\,a_{ij}$. A 10% across-the-board price rise is one scalar: $1.1\,P$. Budgeting next year as 120% of this year: $1.2\,B$.

**The algebra is friendly**: addition is commutative ($A+B = B+A$), associative, has a zero matrix, and scalars distribute: $k(A+B) = kA + kB$.

The payoff of this notation is _compression_: one symbol carries a whole spreadsheet, and one equation — $T = A + B$ or $P' = 1.1P$ — performs hundreds of cell operations in a single conceptual move. That compression is what will let us solve entire systems of equations at once in the coming lessons.

**Matrix operations, first rules**

| Operation | Requirement | Result |
|---|---|---|
| $A + B$ | Same dimension $m \times n$ | Entrywise sum |
| $\lambda A$ | None | Every entry scaled |
| $A^T$ | None | Rows become columns |

> **Common pitfall:** Reading $a_{ij}$ column-first. The convention is rows first, always: $a_{23}$ lives in row 2, column 3 — mixing this up silently transposes every calculation that follows.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Two branch sales tables are added element-wise. In cell $(2,1)$, January shows **30** and February shows **45**. **Set the total cell’s value** on the axis — no consistency hint appears until you send.

**2.** *(Multiple choice)* A retailer stores product-by-branch sales in matrix $S$ and wants next year’s targets: 25% growth everywhere. Which single expression produces the target table?
   - A) $1.25\,S$
   - B) $S + 0.25$
   - C) $S + S^2$
   - D) $25\,S$


**3.** *(Error highlight)* Highlight the incorrect step in this analyst’s reasoning.

---

## Matrix Product

Matrix multiplication is _not_ entrywise — it is the algebra of **chained dependencies**, and it works row-by-column:

$$(AB)_{ij} = \sum_k a_{ik}\,b_{kj}$$

Entry $(i,j)$ of the product is the **dot product** of row $i$ of $A$ with column $j$ of $B$: multiply matching components, add them up.

**Dimension rule**: $A_{m\times n} \cdot B_{n \times p} = C_{m\times p}$ — the inner dimensions must **match** and then disappear:

$$(m \times \underline{n})\,(\underline{n} \times p) \;\rightarrow\; m \times p$$

**Why business loves it.** Suppose $Q$ holds _units sold_ (products by branches) and each product has a price and a unit cost in matrix $V$ (values by products). Then $VQ$ delivers revenue and cost _per branch_ in one stroke. Every 'multiply quantities by rates, then total' calculation — payroll, input requirements, portfolio returns — is a matrix product.

**The famous warning: order matters.**

$$AB \ne BA \quad \text{(in general)}$$

$BA$ may have different dimensions, or not exist at all, or exist and simply differ. Chains read like processes: raw materials → components → products composes in one direction only.

**Other habits to unlearn**: $AB = 0$ does _not_ force $A=0$ or $B=0$; and you cannot cancel — $AB = AC$ does not imply $B = C$ unless $A$ is invertible (a determinant question, next lesson).

**The identity matrix** $I$ (ones on the diagonal, zeros elsewhere) is the neutral element: $AI = IA = A$ — the matrix world's multiply-by-one.

> **Tip:** Before multiplying anything, write the dimensions side by side: $(m \times n)(n \times p)$. Inner numbers must match; outer numbers announce the answer's shape. Ten seconds of dimension checking catches most errors before they exist.

> **Common pitfall:** Assuming $AB = BA$. Matrix multiplication is order-sensitive because it chains dependencies — applying "prices after quantities" is not "quantities after prices." Commuting matrices are the exception, never the rule.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Entry $(1,1)$ of the product $AB$ pairs row $(2, 3)$ with column $(4, 5)$. The pair-products are hidden — **set the result bar** to the $(1,1)$ entry by computing the dot product yourself.

**2.** *(Multiple choice)* Matrix $Q$ (3 products × 2 branches) holds units sold; row vector $p$ ($1\times 3$) holds unit prices. What does $pQ$ compute?
   - A) Total revenue per branch — a $1\times 2$ row
   - B) Total revenue per product — a $3\times 1$ column
   - C) It is not defined
   - D) The price of each branch’s dearest product


**3.** *(True false)* If $A$ and $B$ are nonzero matrices, their product $AB$ can still be the zero matrix.
   - True / False


---

## Determinants

The **determinant** compresses a square matrix into a single number that answers the question: _does this matrix destroy information?_

**The 2×2 case** — cross-multiply and subtract:

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

**The $3\times 3$ case** — the rule of Sarrus: three southeast diagonals minus three northeast diagonals:

$$\det A = aei + bfg + cdh - ceg - bdi - afh$$

**What the number tells you:**

- $\det A \ne 0$: the matrix is **regular (invertible)** — an inverse $A^{-1}$ exists, and the system $Ax = b$ has exactly one solution for any $b$.
- $\det A = 0$: the matrix is **singular** — no inverse; its rows (or columns) are linearly dependent: one row is redundant, a disguised copy of the others.

$$\det A \ne 0 \iff A^{-1} \text{ exists} \iff \text{unique solution}$$

**Useful properties** (each one a shortcut in real computations):

- Swap two rows → determinant changes sign.
- Multiply one row by $k$ → determinant multiplies by $k$.
- A row of zeros, or two equal rows → determinant is 0.
- $\det(AB) = \det A \cdot \det B$, and $\det A^T = \det A$.

**Business reading**: your model links choices to outcomes through $A$. If $\det A = 0$, some outcomes are simply unreachable and others have infinitely many explanations — two 'different' policy levers are secretly the same lever. The determinant is the cheapest diagnostic in linear algebra: one number, computed before you waste a week solving an unsolvable model.

**What the determinant verdict means**

| $\det A$ | Matrix is | System $Ax=b$ |
|---|---|---|
| $\ne 0$ | Regular — inverse exists | Exactly one solution |
| $= 0$ | Singular — rows dependent | None or infinitely many |

> **Tip:** Before any inverse computation, evaluate the determinant first. If it is zero you have saved yourself the whole calculation; if it is tiny, treat results with suspicion — near-singular systems amplify small data errors enormously.

Here is the picture behind the formula. Take the 2×2 matrix's two **column vectors** and draw the **parallelogram** they span. Then:

$$|\det A| = \text{area of that parallelogram}$$

The matrix $\begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$ sends the unit square to a parallelogram of area $3\cdot 2 - 1\cdot 0 = 6$: the transformation **scales all areas by 6**. In three dimensions, the determinant scales _volumes_. The sign records orientation — a negative determinant means the transformation flips the plane like a page.

**Now watch singularity happen.** Slide one column toward a multiple of the other. The parallelogram gets thinner… thinner… and at the exact moment the columns align, it **collapses to a line segment: area zero**.

$$\text{columns aligned} \iff \text{area} = 0 \iff \det = 0$$

That collapse _is_ what 'linearly dependent' means geometrically — and it shows _why_ singular matrices cannot be inverted: the transformation squashed a 2-D plane onto a 1-D line. Two different input points now land on the same output. **You cannot un-squash**: asked to reverse, the matrix wouldn't know which of the infinitely many preimages to return. Information was destroyed, and $A^{-1}$ would need to recreate it from nothing.

This is also why $\det(AB) = \det A\cdot\det B$ stops being mysterious: apply two transformations in a row and the area scalings simply multiply.

When an economic model's matrix drifts toward singularity, its solution doesn't politely fail — it first becomes hypersensitive (near-zero area, wild rescaling to invert), then non-unique. Watching the parallelogram thin out is watching a model lose its grip, one degree of alignment at a time.

> **Tip:** Carry the picture, not just the formula: the determinant is the area-scaling factor of the transformation. $|\det| = 6$ means every region comes out 6 times larger; $\det < 0$ means the plane was flipped; $\det = 0$ means everything got flattened onto a line — information destroyed.

> **Common pitfall:** Forgetting the absolute value. The parallelogram's _area_ is $|\det A|$; the sign is separate information about orientation, not a negative area.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* The matrix $\begin{pmatrix} 2 & k \\ 3 & 6 \end{pmatrix}$ maps the unit square to a parallelogram. **Drag $k$** until the parallelogram collapses to a line — the singular moment where the determinant hits zero.

**2.** *(Matching)* Match each statement to its equivalent.

**3.** *(Graph identification)* Plot $\det\begin{pmatrix} 2 & k \\ 3 & 6 \end{pmatrix}$ as $k$ varies. Which graph is it?

---

## Systems of Linear Equations

A **system of linear equations** is business modeling's native language: production plans meeting capacity limits, budgets split across departments, markets clearing. In matrix form, all of it is one line:

$$Ax = b$$

**Three possible fates** (Rouché–Frobenius): compare the rank of $A$ with the rank of the augmented matrix $(A|b)$ and the number of unknowns $n$:

- **Unique solution** (_compatible determinate_): $rank(A) = rank(A|b) = n$. The lines/planes meet at exactly one point.
- **Infinitely many** (_compatible indeterminate_): $rank(A) = rank(A|b) < n$ — free parameters remain; the equations overlap.
- **No solution** (_incompatible_): $rank(A) < rank(A|b)$ — the equations contradict; parallel lines that never meet.

**Gaussian elimination** is the workhorse: use row operations (swap rows, scale a row, add a multiple of one row to another) to sweep the matrix into a **triangular** shape, then back-substitute from the bottom up. Each row operation preserves the solution set — you are rewriting the story, not changing its ending.

**Cramer's rule** is the determinant shortcut for square systems with $\det A \ne 0$:

$$x_i = \frac{\det A_i}{\det A}$$

where $A_i$ is $A$ with column $i$ replaced by $b$. Elegant for $2\times 2$ and $3\times 3$; Gaussian elimination wins for anything bigger.

**The geometry to keep**: two lines in a plane either cross once (unique), coincide (infinite), or run parallel (none). Every 1,000-variable production model ends in one of the same three fates — and last lesson's determinant is the early warning: $\det A \ne 0$ guarantees the first, happiest case.

**The Rouché–Frobenius verdicts**

| Comparison | Verdict | Geometry |
|---|---|---|
| $rank(A) = rank(A \mid b) = n$ | Unique solution | Lines meet at one point |
| $rank(A) = rank(A \mid b) < n$ | Infinitely many | Equations overlap |
| $rank(A) < rank(A \mid b)$ | No solution | Parallel — contradiction |

> **Common pitfall:** Declaring "no solution" the moment a row of zeros appears in elimination. A zero row of the form $0 = 0$ signals redundancy (infinitely many solutions); only $0 = c$ with $c \ne 0$ signals contradiction.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* The system $y = 2x + 1$ and $y = kx + 3$ is plotted live. **Drag $k$** until the system becomes _incompatible_ — the intersection point flees to infinity as the lines turn parallel.

**2.** *(Multi select)* A factory models output with $Ax = b$ and finds the system incompatible. Which statements are true?
   - [ ] The constraints contradict each other — no production plan satisfies all of them
   - [ ] Geometrically, some constraint lines/planes never meet
   - [ ] $rank(A|b)$ exceeds $rank(A)$
   - [ ] Doubling all capacities ($2b$) automatically restores a solution


**3.** *(Timeline ordering)* Order the steps of solving $Ax = b$ by Gaussian elimination.

---

## Vector Spaces

A **vector** is a list of numbers — a portfolio's asset weights, a product's resource requirements, a week of daily sales. A **vector space** is the world of everything you can build from vectors using two moves: adding them and scaling them.

**Linear combination** — the building move:

$$w = \lambda_1 v_1 + \lambda_2 v_2 + \dots + \lambda_k v_k$$

Mix a bond portfolio and a stock portfolio in any proportions: every mix is a linear combination. The set of _all_ combinations of some vectors is their **span** — the entire territory reachable from them.

**Linear independence** — the no-redundancy test. Vectors are independent if none of them is a combination of the others; equivalently, the only combination giving the zero vector is the all-zero one. Dependent vectors carry redundant information: if fund C is always 50/50 of funds A and B, adding C to your menu **spans nothing new**.

**Basis** = a set that is both _independent_ (no waste) and _spanning_ (no gaps): a minimal coordinate system. Every vector of the space is then a **unique** combination of basis vectors.

**Dimension** = the number of vectors in any basis — the space's count of genuine degrees of freedom:

> **Key idea:** Dimension counts independent directions, not listed products.

A catalog of 40 mutual funds may live in a 5-dimensional space: five real bets dressed up forty ways. Diversifying across dependent assets is buying the same risk in different wrappers — the most expensive way to feel safe.

**Connection backwards**: $n$ vectors in $\mathbb{R}^n$ are independent exactly when the matrix stacking them has $\det \ne 0$. Determinants, rank, and dimension are three languages for one question: _how much genuine variety is here?_

> **Tip:** To test independence in practice, stack the vectors as columns and compute the rank: rank = number of vectors means independent; a smaller rank tells you exactly how many are redundant.

> **Common pitfall:** Confusing the number of vectors you _listed_ with the dimension of what they _span_. Three portfolios built from the same two funds still span only a two-dimensional space — dimension counts independent directions, not products in the catalogue.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Vectors $v = (2, 1)$ and $w = (4, c)$ are drawn from the origin, their span shading the plane. **Drag $c$** until the span collapses from the whole plane to a single line — the moment $w$ stops adding anything new.

**2.** *(Multiple choice)* A basis of $\mathbb{R}^3$ must have…
   - A) Exactly 3 vectors, independent and spanning
   - B) At least 4 vectors, to be safe
   - C) Any number of vectors, as long as they span
   - D) Exactly 3 vectors, and they may be dependent


**3.** *(Function graph)* Mixing two funds: $\lambda$ in fund A (return 4%) and $1-\lambda$ in fund B (return 10%). Which line shows the portfolio return across all combinations $\lambda \in [0,1]$?

---

## Eigenvalues and Eigenvectors

Apply a matrix to most vectors and they rotate _and_ stretch. But some special directions only get **scaled** — the matrix cannot bend them off their line. These are the **eigenvectors**, and their scaling factors are the **eigenvalues**:

$$Av = \lambda v, \qquad v \ne 0$$

**Finding them**: rewrite as $(A - \lambda I)v = 0$. A nonzero solution $v$ exists only if $A - \lambda I$ is singular — a determinant question again:

$$\det(A - \lambda I) = 0$$

This is the **characteristic polynomial**; its roots are the eigenvalues. For each root, solving $(A-\lambda I)v = 0$ yields the **eigenspace** — the full line (or plane) of eigenvectors sharing that $\lambda$.

For a triangular matrix the eigenvalues sit conveniently **on the diagonal**. And two checksums catch errors: the eigenvalues sum to the **trace** and multiply to the **determinant**.

**Why business cares — dynamics.** Many systems evolve by repeated multiplication: market shares next month = $M \cdot$ shares this month; a customer-loyalty transition table applied year after year. After many steps, the state aligns with the **dominant eigenvector** (largest $|\lambda|$), and the eigenvalue dictates the fate:

$$|\lambda| > 1: \text{explosive growth} \qquad |\lambda| < 1: \text{decay} \qquad \lambda = 1: \text{steady state}$$

A Markov market-share matrix always has $\lambda = 1$; its eigenvector _is_ the long-run market share — the split the market drifts to no matter where it starts. Google's PageRank is exactly this: the web's dominant eigenvector.

Eigenvalues are the matrix's tempo markings: they tell you not what happens in one step, but what the _repetition_ of that step converges to.

**The eigen-recipe**

| Step | Equation | Yields |
|---|---|---|
| 1. Characteristic polynomial | $\det(A - \lambda I) = 0$ | The eigenvalues $\lambda$ |
| 2. Solve $(A-\lambda I)v = 0$ | For each $\lambda$ | The eigenspace of $v$'s |
| Check: trace | $\sum \lambda_i = tr(A)$ | Fast error detection |
| Check: determinant | $\prod \lambda_i = \det A$ | Fast error detection |

> **Tip:** Always run both checks — the eigenvalues must sum to the trace and multiply to the determinant. Thirty seconds of verification catches nearly every root-finding slip.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* The matrix $A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$ acts on a direction vector you control. **Rotate the vector** until $Av$ lands exactly on the same line as $v$ — then read off how much it stretched.

**2.** *(Multiple choice)* Two phone carriers trade customers monthly by a fixed transition matrix. Whatever the starting split, shares always drift to 60/40 and stay. In eigen-language, $(0.6, 0.4)$ is…
   - A) The eigenvector of eigenvalue 1 — the steady state
   - B) An eigenvector of eigenvalue 0
   - C) The characteristic polynomial
   - D) Proof that the matrix is singular


**3.** *(Function graph)* A state aligned with the dominant eigenvector evolves as $x_t = 100\,\lambda^t$. Which curve corresponds to $\lambda = 0.8$ — a brand losing relevance each period?

---

## Calculus of Variations

Ordinary optimization picks the best **number**: the profit-maximizing price, the cost-minimizing batch size. The **calculus of variations** picks the best **function** — an entire path through time.

The object being scored is a **functional**: a rule that eats a whole curve and returns one number.

$$J[x] = \int_0^T F\big(t,\, x(t),\, \dot{x}(t)\big)\,dt$$

Examples of $J$: total cost of a production ramp-up plan; lifetime utility of a consumption path; total fuel along a trajectory. Change the path anywhere, and the score changes.

**The classical warm-up**: which curve between two points has the least length? Of all the infinitely many candidates, the straight line wins — and _proving_ that (rather than assuming it) is the field's founding exercise.

**The Euler–Lagrange idea.** At an optimal _number_, the derivative is zero. At an optimal _path_, no small deformation — no 'variation' — of the path can improve the score. Pushing that condition through the integral yields the **Euler–Lagrange equation**:

$$\frac{\partial F}{\partial x} - \frac{d}{dt}\frac{\partial F}{\partial \dot{x}} = 0$$

A differential equation the optimal path must satisfy at _every instant_ — local perfection everywhere, forced by global optimality.

**Economic classics** built exactly this way: the **Ramsey model** (how a nation should split output between consumption and investment over decades), optimal advertising spend over a product's life cycle, extracting a finite resource so profit is highest across the whole horizon, not just today.

The mental upgrade this lesson installs: stop asking _what is the best level?_ and start asking _what is the best trajectory?_ — because most business decisions are movies, not photographs.

> **Tip:** Keep the object hierarchy straight: a _function_ eats a number and returns a number; a _functional_ eats an entire curve and returns a number. Optimization over functionals is choosing the best whole path, not the best single value.

> **Common pitfall:** Solving a path problem by optimizing each instant separately. The Euler–Lagrange logic exists because the best path balances _across_ time — sprinting production today changes tomorrow's costs, and only the whole-path view sees it.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* A path from $(0,0)$ to $(10,10)$ passes through a midpoint you control. **Drag the midpoint’s height** to minimize the total path length — the length meter reruns the integral live as you move.

**2.** *(Multi select)* Which are genuine functionals — rules assigning one number to a whole path?
   - [ ] Total fuel consumed along a delivery route
   - [ ] Lifetime utility of a consumption plan $c(t)$
   - [ ] The temperature at exactly 3 pm
   - [ ] Total advertising cost of a spend schedule over a year


**3.** *(Cloze bank)* Complete the central distinction.

---

## Optimization in Economics

Economics runs on optimization: firms maximize profit, consumers maximize utility, planners minimize cost. Calculus turns 'find the best' into a two-step ritual.

**First-order condition (FOC)** — at an interior optimum, the derivative vanishes:

$$f'(x^*) = 0$$

At the top of a hill, the ground is momentarily flat. If $f'(x) > 0$ you gain by moving right; if $f'(x) < 0$, by moving left. Only where the derivative is zero is there nothing left to grab.

**Second-order condition (SOC)** — flat ground could be a peak, a valley, or a saddle-flat shelf:

$$f''(x^*) < 0: \text{maximum} \qquad f''(x^*) > 0: \text{minimum}$$

**The economic translation is marginal analysis.** Profit $\pi(q) = R(q) - C(q)$ peaks where

$$MR = MC$$

marginal revenue equals marginal cost. While one more unit brings in more than it costs, produce it; the optimum is exactly where the last unit _breaks even at the margin_. The FOC isn't a math trick — it is the formal version of 'expand until the next step stops paying.'

**Discipline the ritual enforces:**

- Check the SOC: $MR = MC$ also holds at profit _minima_.
- Check boundaries: if the feasible range is $[0, capacity]$, the best point may be a corner where no derivative vanishes.
- Compare candidate points by their actual values — the derivative finds candidates, the objective crowns the winner.

Marginal reasoning is the single most transferable idea in this course: hire until the marginal worker pays for herself, advertise until the marginal euro returns a euro, and stop everywhere the margin hits zero.

**The optimization ritual**

| Step | Condition | What it does |
|---|---|---|
| FOC | $f'(x^*) = 0$ | Finds the flat candidates |
| SOC | Sign of $f''(x^*)$ | Peak, valley, or shelf |
| Boundaries | Check endpoints | Corners beat interior flats sometimes |
| Compare | Evaluate $f$ at all candidates | The objective crowns the winner |

> **Common pitfall:** Stopping at the FOC. $MR = MC$ also holds at profit _minima_ — without the second-order check and a boundary scan, the "optimum" you report may be the worst point on the curve.

Here is the picture professional economists carry: two curves — **marginal revenue** sloping down, **marginal cost** sloping up — and the optimum living at their **crossing**.

$$q^*: \quad MR(q^*) = MC(q^*)$$

**Why the crossing, seen three ways:**

- **Left of $q^*$**: $MR > MC$ — the next unit adds more revenue than cost. The gap between the curves is pure profit being _left on the table_ by stopping here.
- **Right of $q^*$**: $MR < MC$ — each extra unit destroys value. The gap is now a loss per unit of overreach.
- **At $q^*$**: the gaps vanish. Total profit equals the accumulated area between the curves up to the crossing — and that area is as large as it will ever be.

$$\pi(q^*) = \int_0^{q^*}\big(MR - MC\big)\,dq$$

**The classic error this picture kills**: 'we're profitable, so produce more.' Total profit being positive says nothing about the _margin_. Past $q^*$ you remain profitable for a while — while shrinking. Firms don't feel the peak; totals still look good on the way down. Only the margin knows.

**Reading real decisions with it:**

- A consultant works overtime until the marginal hour's fee no longer beats its (rising) personal cost.
- A retailer adds opening hours until the marginal hour's contribution hits its staffing cost.
- An ad budget grows until the marginal euro of spend returns exactly one euro of margin.

Every one of these is the same crossing with different axis labels. When you can _see_ any business question as two curves hunting for their intersection, you are doing economics rather than arithmetic — and the flat-derivative ritual of e01 becomes something you could re-derive on a napkin.

> **Tip:** Read the two curves as a conversation: left of the crossing, every unit is money left on the table; right of it, every unit is self-inflicted loss. Total profit is the accumulated area between the curves — largest exactly at the crossing.

> **Common pitfall:** Maximizing revenue instead of profit. Revenue peaks where $MR = 0$ — well past the profit optimum at $MR = MC$. The units between those two quantities all sell, and all lose money.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Profit is $\pi(q) = -q^2 + 20q$ — a hill over output. **Drag the output marker** along the curve; the tangent line tilts as you move. Park it exactly where the tangent lies flat.

**2.** *(Matching)* Match each condition to what it establishes.

**3.** *(Graph identification)* Which graph shows a function whose stationary point is a **minimum** — the case the SOC must catch?

---

## Integral Calculus

If the derivative slices totals into margins, the **integral** reassembles margins into totals. The two operations undo each other — that is the **Fundamental Theorem of Calculus**:

$$\int_a^b f(x)\,dx = F(b) - F(a), \qquad F' = f$$

**Antiderivatives**: $F$ is an antiderivative of $f$ if $F' = f$. Power rule in reverse:

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \ne -1)$$

The $+C$ matters in economics: knowing marginal cost pins total cost only _up to fixed costs_ — the constant is the part the margin cannot see.

**The definite integral is an area** — and business areas are money:

- Marginal cost integrated from 0 to $q$ = **total variable cost** of producing $q$.
- A sales _rate_ (units/day) integrated over a month = **total units sold**.
- Marginal profit integrated between two outputs = the profit _change_ between them.

**Consumer surplus** — the lesson's star application. The demand curve reads as willingness to pay: the first units would have been bought even at high prices. Everyone pays the _same_ market price $p^*$, so buyers who valued the good above $p^*$ pocket the difference. Total windfall:

$$CS = \int_0^{q^*} \big(D(q) - p^*\big)\,dq$$

— the area between the demand curve and the price line. For linear demand it is a triangle: $CS = \tfrac{1}{2}\,q^*\,(p_{max} - p^*)$.

Producer surplus mirrors it below the price line, above supply. Markets create value on _both_ sides of every trade, and the integral is how you measure it in euros rather than adjectives.

**Margins reassembled into totals**

| Integrate… | Over… | You get |
|---|---|---|
| Marginal cost | $0$ to $q$ | Total variable cost |
| Sales rate (units/day) | A month | Total units sold |
| Marginal profit | $0$ to $q^*$ | Total operating profit |

> **Common pitfall:** Dropping the constant of integration. Marginal cost knows nothing about fixed costs — integrating it recovers total cost only _up to_ $FC$, and forgetting that constant understates every cost estimate by exactly the rent.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Demand is $p = 20 - q$ and the market price is **8€**. **Drag the shading boundary** to capture exactly the consumer-surplus region — the € counter integrates the shaded area live.

**2.** *(Multiple choice)* A CFO knows marginal cost perfectly but says total cost is still undetermined. Why is she right?
   - A) Integration recovers totals only up to a constant — the fixed costs
   - B) Marginal cost cannot be integrated
   - C) Total cost is always lower than integrated marginal cost
   - D) She is wrong: margins determine totals exactly


**3.** *(Cloze bank)* Complete the Fundamental Theorem in business terms.

---

## Differential Equations

A **differential equation** relates a quantity to its own rate of change — and its solution is not a number but a **function of time**. Business is full of them, because most business laws are statements about _rates_: growth rates, decay rates, adjustment speeds.

**The king of them all:**

$$\frac{dx}{dt} = r\,x \qquad\Rightarrow\qquad x(t) = x_0\,e^{rt}$$

'The change is proportional to the current size.' Deposits earning continuous interest, subscriber bases growing by word of mouth, debts compounding: all obey it, growing exponentially for $r > 0$ and decaying for $r < 0$ (depreciation, brand recall fading, radioactive inventory of relevance).

**Reading the solution:**

- $x_0$ is the initial condition — the same ODE with different starting points draws parallel destinies.
- **Doubling time**: $t_2 = \ln 2 / r \approx 70/(100r)$ — the famous _rule of 70_.
- Continuous compounding at rate $r$ beats annual compounding at the same nominal rate: $e^r > 1 + r$.

**One step richer — growth with a ceiling.** Markets saturate; nothing exponential survives contact with a finite world. The **logistic equation** adds the brake:

$$\frac{dx}{dt} = r\,x\left(1 - \frac{x}{K}\right)$$

where $K$ is the market's capacity. Early on ($x \ll K$) it looks exponential; as $x \to K$ growth chokes to zero. The solution is the **S-curve** — the shape of every successful product's adoption: slow start, explosive middle, saturated plateau.

**The modeling discipline**: write what you _know_ (the rate law), solve for what you _want_ (the trajectory), then fit $x_0$ and $r$ to data. An ODE is a business assumption wearing mathematical clothes — and the solution curve is that assumption's forecast, laid bare for checking.

**Reading $x(t) = x_0 e^{rt}$**

| Component | Business meaning |
|---|---|
| $x_0$ | Where you start — initial deposit, first cohort |
| $r > 0$ | Compound growth — interest, viral adoption |
| $r < 0$ | Decay — depreciation, churn, fading recall |
| $\ln 2 / r$ | Doubling (or halving) time |

> **Tip:** The doubling-time shortcut $t_2 = \ln 2 / r \approx 0.69/r$ is the continuous cousin of the rule of 70. A process growing at a continuous 7% doubles in about ten periods — no calculator needed.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* A deposit grows by $dx/dt = rx$ (continuous compounding). **Drag the growth rate $r$** until the balance curve doubles the initial deposit in exactly **10 years** — the doubling flag snaps to the curve as you tune.

**2.** *(Slider estimate)* Equipment worth 80k€ depreciates continuously at $r = -10\%$/year. Set the slider to its approximate value after 7 years (k€). Note $e^{-0.7} \approx 0.5$.

**3.** *(Ordering)* Order the steps of ODE-based forecasting.

---

*Part of [Business I](README.md) — [Open University Courses by Tryals](../../README.md)*
