# Unit 9: Mathematics II

## Partial Derivatives

When a function depends on several variables, the **partial derivative** asks: how does the output change when I nudge _one_ input, holding all others constant?

$$f(x,y) = x^2 y + 3xy^2 \qquad \frac{\partial f}{\partial x} = 2xy + 3y^2 \qquad \frac{\partial f}{\partial y} = x^2 + 6xy$$

The $\partial$ symbol replaces $d$ to remind you: other variables are frozen. Mechanically, differentiate with respect to the chosen variable and treat everything else as a constant.

**Economic interpretation**: in a production function $Q(K,L)$, the partial $\partial Q / \partial L$ is the **marginal product of labour** — how much extra output one more unit of labour produces, holding capital fixed. Similarly, $\partial Q / \partial K$ is the marginal product of capital.

**Cross-partials** (second-order mixed partials): $\partial^2 f / \partial x \partial y$ differentiates first with respect to $y$, then $x$. **Young's theorem**: if both mixed partials are continuous, order doesn't matter — $f_{xy} = f_{yx}$. Economically, the cross-partial tells you whether inputs are **complements** (the marginal product of one rises when you add more of the other) or **substitutes**.

**The gradient** $\nabla f = (f_x, f_y)$ points in the direction of steepest ascent. At an optimum (a peak or trough), $\nabla f = \mathbf{0}$ — both partials are zero. This is the first-order condition for multivariable optimisation, and it says: you can't improve by moving in any direction.

$$\text{First-order conditions}: \quad f_x = 0, \quad f_y = 0$$

Partial derivatives are the calculus of _ceteris paribus_ — the economist's favourite phrase turned into mathematics. Every marginal concept in micro and macro is a partial derivative in disguise.

**Partial derivatives in economics**

| Partial | Name | Reads as |
|---|---|---|
| $\partial Q/\partial L$ | Marginal product of labour | One more worker, capital frozen |
| $\partial Q/\partial K$ | Marginal product of capital | One more machine, labour frozen |
| $\partial U/\partial x_i$ | Marginal utility of good $i$ | One more unit, basket frozen |

> **Common pitfall:** Forgetting what "holding others constant" costs you. A partial is a laboratory experiment, not a forecast — in the real economy, hiring more labour usually changes capital use too. For total effects, you need the total differential, not one partial.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* For $f(x,y) = x^2 y$, at $(x,y)=(3,2)$: the partial with respect to $x$ is $2xy = 12$. **Drag the tangent-slope marker** to the correct value of $\partial f / \partial x$.

**2.** *(Multiple choice)* For $f(x,y) = 5x^3 y^2$, what is $\partial f / \partial y$?
   - A) $10x^3 y$
   - B) $15x^2 y^2$
   - C) $5x^3$
   - D) $10xy$


**3.** *(True false)* Young's theorem guarantees that $f_{xy} = f_{yx}$ whenever both mixed partials are continuous.
   - True / False


---

## Lagrange Multipliers

Most economic decisions are constrained: maximise utility subject to a budget, minimise cost subject to an output target, maximise profit subject to a production capacity. **Lagrange multipliers** solve these problems systematically.

**The setup**: maximise (or minimise) $f(x,y)$ subject to the constraint $g(x,y) = c$.

Form the **Lagrangian**:

$$\mathcal{L}(x,y,\lambda) = f(x,y) - \lambda \bigl(g(x,y) - c\bigr)$$

**First-order conditions** (set all partials to zero):

$$\frac{\partial \mathcal{L}}{\partial x} = f_x - \lambda g_x = 0$$
$$\frac{\partial \mathcal{L}}{\partial y} = f_y - \lambda g_y = 0$$
$$\frac{\partial \mathcal{L}}{\partial \lambda} = -(g(x,y) - c) = 0$$

The first two conditions say $f_x / g_x = f_y / g_y = \lambda$ — at the optimum, the marginal rate of return per unit of constraint cost is equalised across all choice variables. The third condition enforces the constraint itself.

**The economic meaning of $\lambda$**: it is the **shadow price** of the constraint — the rate at which the optimal value of $f$ changes if the constraint is relaxed by one unit. If $\lambda = 5$ and the constraint is a budget, then one more euro of budget buys approximately 5 units of the objective. This is the single most useful number in applied optimisation.

$$\lambda \approx \frac{\Delta f^*}{\Delta c}$$

**Geometric intuition**: at the constrained optimum, the gradient of $f$ is proportional to the gradient of $g$ — the objective's level curves are _tangent_ to the constraint curve. Moving along the constraint in either direction reduces the objective; you're at the best feasible point.

**The Lagrange recipe**

| Step | Action |
|---|---|
| 1 | Write $\mathcal{L} = f - \lambda(g - c)$ |
| 2 | Set $\partial\mathcal{L}/\partial x = 0$, $\partial\mathcal{L}/\partial y = 0$ |
| 3 | Set $\partial\mathcal{L}/\partial\lambda = 0$ (recovers the constraint) |
| 4 | Solve the system; read $\lambda$ as the bonus |

> **Tip:** The geometric heart: at the constrained optimum, the level curve of $f$ and the constraint curve are _tangent_ — their gradients align, and $\lambda$ is precisely the proportionality factor between them.

The multiplier $\lambda$ is not just a mathematical by-product — it is the answer to the most important practical question in constrained optimisation: **how much is the constraint costing me?**

**Example**: a firm maximises output $Q(K,L)$ subject to a cost constraint $wL + rK = C$. The Lagrangian gives $\lambda$ as the marginal product of budget — one more euro of spending buys $\lambda$ units of output. If $\lambda$ is large, the firm is severely constrained (it has high-return investments it can't afford); if $\lambda$ is near zero, the constraint isn't binding much (extra budget would add little).

$$\lambda_{\text{large}} \Rightarrow \text{tight constraint, relaxation valuable}$$
$$\lambda_{\text{small}} \Rightarrow \text{slack constraint, relaxation cheap}$$

**Utility maximisation**: a consumer maximises $U(x,y)$ subject to $p_x x + p_y y = M$. The first-order conditions give the **tangency condition**:

$$\frac{MU_x}{p_x} = \frac{MU_y}{p_y} = \lambda$$

This says: at the optimum, the marginal utility per euro spent is equalised across all goods — and that common ratio is $\lambda$, the marginal utility of income. If you equalise bang-for-buck across goods, you've maximised total bang.

**In practice**: linear programming, cost-benefit analysis, engineering design, and portfolio optimisation all use shadow prices. When a government asks "how much is this environmental regulation costing us in GDP?", the answer is a Lagrange multiplier — the shadow price of the constraint.

> **Tip:** Always report $\lambda$ alongside the optimum — it prices the constraint. In a budget problem it answers "what would one more euro buy?"; in a capacity problem, "what is one more machine-hour worth?" That number _is_ the business case for relaxing the constraint.

> **Common pitfall:** Paying more than $\lambda$ to relax a constraint. If overtime capacity costs 40€/hour but the shadow price is 25€/hour, the expansion destroys value — the multiplier is the ceiling on what relaxation is worth.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* A firm maximises output subject to a budget of **100**. The Lagrange multiplier is $\lambda = 3$. If the budget increases to **105**, output rises by approximately how much? **Drag the output-change marker.

**2.** *(Error highlight)* Highlight the Lagrange error.

**3.** *(True false)* At the constrained optimum, the level curves of the objective function are tangent to the constraint curve.
   - True / False


---

## Unconstrained Multivariable Extrema

To find extrema of $f(x,y)$ without constraints:

**Step 1 — First-order conditions**: set $f_x = 0$ and $f_y = 0$. Solutions are **critical points** — candidates for maxima, minima, or saddle points.

**Step 2 — Second-order conditions**: the **Hessian matrix** classifies each critical point:

$$H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{pmatrix}$$

Compute the **determinant** $D = f_{xx} f_{yy} - (f_{xy})^2$:

- $D > 0$ and $f_{xx} < 0$: **local maximum** (the surface curves downward in all directions).
- $D > 0$ and $f_{xx} > 0$: **local minimum** (curves upward in all directions).
- $D < 0$: **saddle point** (curves up in one direction, down in another — a mountain pass).
- $D = 0$: **inconclusive** — higher-order analysis needed.

$$D = f_{xx} f_{yy} - f_{xy}^2 \qquad \begin{cases} D>0, f_{xx}<0 \Rightarrow \text{max} \\ D>0, f_{xx}>0 \Rightarrow \text{min} \\ D<0 \Rightarrow \text{saddle} \end{cases}$$

**Economic application**: a firm chooses output level $q$ and advertising expenditure $a$ to maximise profit $\pi(q,a)$. The FOCs give the candidate; the Hessian confirms it is a maximum (profit function should be concave — diminishing returns to both quantity and advertising). If the Hessian says saddle, the firm is at a pass, not a peak — increasing one variable while decreasing the other would improve profit.

**The Hessian verdicts**

| $D = f_{xx}f_{yy} - f_{xy}^2$ | $f_{xx}$ | Verdict |
|---|---|---|
| $D > 0$ | $< 0$ | Local maximum |
| $D > 0$ | $> 0$ | Local minimum |
| $D < 0$ | — | Saddle point |
| $D = 0$ | — | Inconclusive |

> **Common pitfall:** Checking $f_{xx} < 0$ and $f_{yy} < 0$ separately and declaring a maximum. The cross-term can betray you: with a large $f_{xy}$, the surface can still be a saddle. Only the determinant test sees the interaction.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* For $f(x,y) = -x^2 - y^2 + 4x + 6y$, the critical point is at $(2,3)$. The Hessian determinant is $D = (-2)(-2) - 0 = 4 > 0$ and $f_{xx} = -2 < 0$. **Drag the classification label** to the correct type.

**2.** *(Multiple choice)* For $f(x,y) = x^2 - y^2$, the origin is a critical point. $f_{xx} = 2$, $f_{yy} = -2$, $f_{xy} = 0$. The determinant is:
   - A) $D = (2)(-2) - 0 = -4$: saddle point
   - B) $D = 4$: local minimum
   - C) $D = 0$: inconclusive
   - D) $D = -4$: local maximum


**3.** *(True false)* A saddle point is a critical point where the function is a maximum in one direction and a minimum in another.
   - True / False


---

## Multiple Integration

A **double integral** sums a function over a two-dimensional region — the natural extension of single-variable integration from intervals to areas.

$$\iint_R f(x,y)\, dA$$

**Iterated integration** evaluates a double integral as two nested single integrals. For a rectangular region $[a,b] \times [c,d]$:

$$\iint_R f(x,y)\, dA = \int_a^b \left(\int_c^d f(x,y)\, dy\right) dx$$

**Fubini's theorem**: if $f$ is continuous on the rectangle, the order of integration doesn't matter — integrate first with respect to $y$ then $x$, or vice versa. The result is the same.

**Non-rectangular regions**: if the region is bounded by curves, the limits of the inner integral become functions. For example, the region below $y = g(x)$ and above $y = h(x)$:

$$\int_a^b \int_{h(x)}^{g(x)} f(x,y)\, dy\, dx$$

**Economic application — consumer surplus**: the area between the demand curve $P = D(Q)$ and the market price $P^*$ is consumer surplus. In a two-good setting, the joint surplus involves a double integral over the region where willingness to pay exceeds the price.

$$CS = \int_0^{Q^*} \bigl(D(Q) - P^*\bigr)\, dQ$$

This extends to producer surplus, total welfare, and deadweight loss — all defined as areas (single integrals) or volumes (double integrals) between economic curves.

**Change of variables**: just as $u$-substitution works in one dimension, the **Jacobian** handles coordinate transformations in two dimensions:

$$\iint f(x,y)\, dx\, dy = \iint f\bigl(x(u,v), y(u,v)\bigr) |J|\, du\, dv$$

where $|J| = |\partial(x,y)/\partial(u,v)|$ is the absolute value of the Jacobian determinant. This is essential when the region is naturally circular (use polar coordinates) or when a linear substitution simplifies the integrand.

> **Tip:** Fubini lets you _choose_ the integration order — and the right choice can turn an impossible inner integral into a routine one. If the first order you try gets ugly, swap before you fight it.

> **Common pitfall:** Keeping constant limits when the region isn't a rectangle. Over the triangle below $y = x$, the inner limits must be functions ($y$ from $0$ to $x$) — copying rectangle limits silently integrates over the wrong region.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* Demand is $P = 20 - 2Q$; the market price is $P^* = 8$ and the equilibrium quantity is $Q^* = 6$. The surplus triangle is hidden — **set the meter** to the consumer surplus you compute.

**2.** *(Error highlight)* Highlight the integration error.

**3.** *(True false)* Fubini's theorem requires the function to be continuous on the region of integration.
   - True / False


---

## Eigenvalues and Eigenvectors

Given a square matrix $A$, an **eigenvector** $\mathbf{v}$ is a non-zero vector that $A$ merely _scales_ — it doesn't change direction:

$$A\mathbf{v} = \lambda \mathbf{v}$$

The scalar $\lambda$ is the **eigenvalue** — the factor by which $A$ stretches (or compresses, or flips) the eigenvector.

**Finding eigenvalues**: rearrange as $(A - \lambda I)\mathbf{v} = \mathbf{0}$. For a non-trivial solution, the matrix $(A - \lambda I)$ must be singular:

$$\det(A - \lambda I) = 0$$

This is the **characteristic equation** — a polynomial in $\lambda$ whose roots are the eigenvalues.

**For a $2 \times 2$ matrix** $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$\det(A - \lambda I) = \lambda^2 - (a+d)\lambda + (ad - bc) = 0$$

The sum of eigenvalues equals the **trace** ($a + d$); the product equals the **determinant** ($ad - bc$). These shortcuts are useful for quick checks.

**Economic applications**:
- **Input-output models** (Leontief): the dominant eigenvalue of the technology matrix determines whether the economy can produce a net surplus — if it exceeds 1, some sector consumes more than it produces.
- **Dynamic systems**: eigenvalues of the transition matrix determine **stability**. If all $|\lambda| < 1$, the system converges to a steady state; if any $|\lambda| > 1$, it explodes.
- **Markov chains**: the stationary distribution is the eigenvector corresponding to $\lambda = 1$.
- **Principal Component Analysis**: eigenvectors of the covariance matrix are the principal components — the directions of greatest variation in the data.

Eigenvalues answer the most fundamental question about a linear system: **does it grow, shrink, or stay the same — and in which directions?**

**The $2 \times 2$ shortcut**

| Quantity | Formula | Check |
|---|---|---|
| Characteristic equation | $\lambda^2 - tr(A)\lambda + \det A = 0$ | — |
| Sum of eigenvalues | $\lambda_1 + \lambda_2 = tr(A)$ | Fast error catch |
| Product of eigenvalues | $\lambda_1 \lambda_2 = \det A$ | Fast error catch |

> **Tip:** For any $2 \times 2$ matrix, skip the determinant expansion: write $\lambda^2 - (\text{trace})\lambda + \det = 0$ directly, then verify roots against trace and determinant. Twenty seconds, self-checking.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* The matrix $A = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$ stretches the $x$-direction by 3 and leaves the $y$-direction unchanged. **Drag the eigenvalue markers** to the correct values.

**2.** *(Numerical input)* For $A = \begin{pmatrix} 5 & 2 \\ 0 & 3 \end{pmatrix}$, the trace is $5 + 3 = 8$ and the determinant is $15$. What is $\lambda_1 + \lambda_2$?

**3.** *(Graph identification)* A system has eigenvalues $\lambda_1 = 0.8$ and $\lambda_2 = 0.5$. Which graph shows the decaying component $0.8^t$?

---

## Matrix Diagonalisation

A matrix $A$ is **diagonalisable** if it can be written as:

$$A = PDP^{-1}$$

where $D$ is a **diagonal matrix** of eigenvalues and $P$ is the matrix whose columns are the corresponding eigenvectors.

**Why this matters**: once diagonalised, matrix powers become trivial:

$$A^n = PD^nP^{-1}$$

Since $D$ is diagonal, $D^n$ just raises each diagonal entry to the $n$-th power — no matrix multiplication needed. This is the key to computing **long-run behaviour** of linear dynamic systems.

**When is $A$ diagonalisable?** A sufficient condition: $A$ has $n$ **distinct** eigenvalues (for an $n \times n$ matrix). If eigenvalues repeat, diagonalisability depends on whether there are enough linearly independent eigenvectors.

**The recipe**:
1. Find eigenvalues by solving $\det(A - \lambda I) = 0$.
2. For each eigenvalue, find the eigenvector by solving $(A - \lambda I)\mathbf{v} = \mathbf{0}$.
3. Form $P$ (eigenvectors as columns) and $D$ (eigenvalues on diagonal).
4. Verify: $A = PDP^{-1}$.

**Economic application**: in a Leontief model, the economy's state after $n$ periods is $\mathbf{x}_n = A^n \mathbf{x}_0$. Diagonalising $A$ makes this computation practical — and reveals which sectors dominate in the long run (the eigenvector of the largest eigenvalue).

**Why diagonalise**

| Problem | Without $PDP^{-1}$ | With it |
|---|---|---|
| $A^{100}$ | 99 matrix multiplications | Raise two diagonal numbers to 100 |
| Long-run behaviour | Simulate and hope | Read off the dominant eigenvalue |
| System of ODEs | Coupled, messy | Decoupled, one equation each |

> **Common pitfall:** Assuming every matrix diagonalises. Distinct eigenvalues guarantee it; repeated eigenvalues may not deliver enough independent eigenvectors — check before you decompose.

Diagonalisation turns the intimidating problem of computing $A^{100}$ into something a pocket calculator can handle.

**Example**: let $A = \begin{pmatrix} 0.6 & 0.3 \\ 0.4 & 0.7 \end{pmatrix}$ — a Markov transition matrix (columns sum to 1). The eigenvalues are $\lambda_1 = 1$ and $\lambda_2 = 0.3$.

$$A^n = PD^nP^{-1} = P \begin{pmatrix} 1^n & 0 \\ 0 & 0.3^n \end{pmatrix} P^{-1}$$

As $n \to \infty$, $0.3^n \to 0$, so $A^n$ converges to a matrix determined entirely by the $\lambda = 1$ eigenvector — the **stationary distribution**.

$$\lim_{n\to\infty} A^n = P \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} P^{-1}$$

**Key insight**: the long-run behaviour of a linear system is controlled by the **dominant eigenvalue**. If $|\lambda_{\text{max}}| < 1$, the system decays to zero. If $|\lambda_{\text{max}}| = 1$ (Markov), it converges to a steady state. If $|\lambda_{\text{max}}| > 1$, it explodes.

**Practical use**: population dynamics, market-share evolution, economic growth models, and any system described by a linear recurrence $\mathbf{x}_{n+1} = A\mathbf{x}_n$ — diagonalisation gives you the closed-form solution in one step.

$$\mathbf{x}_n = c_1 \lambda_1^n \mathbf{v}_1 + c_2 \lambda_2^n \mathbf{v}_2$$

Each term is an eigenvalue raised to a power times an eigenvector — the system decomposes into independent exponential modes.

> **Tip:** In any Markov matrix the dominant eigenvalue is exactly 1, and its eigenvector — normalised to sum to one — _is_ the long-run market share. Everything else decays at the second eigenvalue's rate: $|\lambda_2|$ close to 1 means slow convergence, close to 0 means the past is forgotten fast.

> **Common pitfall:** Believing the starting distribution matters in the long run. It doesn't — the stationary distribution is a property of the transition matrix alone. Initial conditions only decide _how long_ the transient lasts.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* A Markov chain has eigenvalues $\lambda_1 = 1$ and $\lambda_2 = 0.4$. After many iterations, $\lambda_2^n \to 0$. **Drag the convergence indicator** to show which eigenvalue dominates the long-run state.

**2.** *(Error highlight)* Highlight the diagonalisation error.

**3.** *(True false)* In the decomposition $A = PDP^{-1}$, the columns of $P$ are the eigenvectors of $A$.
   - True / False


---

## Quadratic Forms

A **quadratic form** in $n$ variables is a function $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$, where $A$ is a symmetric matrix. In two variables:

$$Q(x_1, x_2) = a_{11}x_1^2 + 2a_{12}x_1 x_2 + a_{22}x_2^2$$

**Definiteness** classifies the shape:

- **Positive definite** ($Q > 0$ for all $\mathbf{x} \neq \mathbf{0}$): a bowl curving upward in every direction. Local minimum.
- **Negative definite** ($Q < 0$ for all $\mathbf{x} \neq \mathbf{0}$): a dome curving downward. Local maximum.
- **Indefinite** ($Q$ takes both signs): a saddle. Neither max nor min.
- **Semidefinite** ($Q \geq 0$ or $Q \leq 0$, touching zero): boundary case — flat in some direction.

**Principal-minor test** (Sylvester's criterion) — check the leading **principal minors** $\Delta_k$ of $A$:

$$\Delta_1 = a_{11}, \qquad \Delta_2 = \begin{vmatrix} a_{11} & a_{12} \\ a_{12} & a_{22} \end{vmatrix} = a_{11}a_{22} - a_{12}^2$$

For a 2x2 matrix:
- **Positive definite**: $\Delta_1 > 0$ and $\Delta_2 > 0$.
- **Negative definite**: $\Delta_1 < 0$ and $\Delta_2 > 0$ (alternating signs).
- If neither pattern holds: indefinite or semidefinite.

**Connection to optimisation**: the Hessian matrix $H$ at a critical point is exactly the matrix of a quadratic form (the second-order Taylor approximation). The definiteness of $H$ determines the nature of the critical point:

$$H \text{ positive definite} \Rightarrow \text{local minimum}$$
$$H \text{ negative definite} \Rightarrow \text{local maximum}$$
$$H \text{ indefinite} \Rightarrow \text{saddle point}$$

This is a more general version of the Hessian test from Lesson 3, extended to any number of variables.

**Definiteness at a glance**

| Type | $Q(\mathbf{x})$ behaves as | Shape | Optimum |
|---|---|---|---|
| Positive definite | $> 0$ always | Bowl | Minimum |
| Negative definite | $< 0$ always | Dome | Maximum |
| Indefinite | Both signs | Saddle | Neither |
| Semidefinite | Touches zero | Flat direction | Boundary case |

> **Tip:** Sylvester's criterion in two variables is quick: $\Delta_1 = a_{11}$ and $\Delta_2 = \det A$. Both positive → positive definite; signs alternating ($\Delta_1 < 0$, $\Delta_2 > 0$) → negative definite. Anything else, check further.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* For the matrix $A = \begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix}$, $\Delta_1 = 4 > 0$ and $\Delta_2 = 12 - 1 = 11 > 0$. **Drag the classification** to the correct definiteness.

**2.** *(Matching)* Match each definiteness type to its geometric shape.

**3.** *(True false)* A symmetric matrix with all positive eigenvalues is positive definite.
   - True / False


---

## First-Order Differential Equations

A **differential equation** relates a function to its derivatives — it describes _how_ something changes rather than _what_ it is.

**First-order ODEs** involve the first derivative only: $\frac{dy}{dt} = f(t, y)$.

**Separable equations**: if $f(t,y) = g(t) h(y)$, separate variables and integrate both sides:

$$\frac{dy}{h(y)} = g(t)\, dt \qquad \Rightarrow \qquad \int \frac{dy}{h(y)} = \int g(t)\, dt$$

**Linear first-order ODEs**: $\frac{dy}{dt} + p(t) y = q(t)$. Solved by the **integrating factor** $\mu(t) = e^{\int p(t)\, dt}$:

$$y(t) = \frac{1}{\mu(t)} \int \mu(t) q(t)\, dt$$

**The exponential growth/decay model**: $\frac{dy}{dt} = ky$ has solution $y(t) = y_0 e^{kt}$. If $k > 0$: growth; if $k < 0$: decay. This is the simplest and most important ODE in economics.

$$y(t) = y_0 e^{kt}$$

**Economic applications**:
- **Continuous compound interest**: $\frac{dA}{dt} = rA$ → $A(t) = A_0 e^{rt}$.
- **Price adjustment**: $\frac{dp}{dt} = \alpha(D - S)$ — price rises when demand exceeds supply.
- **Solow growth model**: $\dot{k} = sf(k) - \delta k$ — capital accumulation as saving minus depreciation.
- **Advertising decay**: brand awareness $A(t) = A_0 e^{-\delta t}$ — without reinforcement, awareness fades exponentially.

The steady state (equilibrium) is where $dy/dt = 0$ — the system stops changing. Stability depends on whether deviations from equilibrium grow ($k > 0$: unstable) or shrink ($k < 0$: stable).

**Stability criterion**: for $\dot{y} = f(y)$ near equilibrium $y^*$: if $f'(y^*) < 0$, the equilibrium is **stable** (deviations shrink); if $f'(y^*) > 0$, it is **unstable** (deviations grow).

**The first-order toolkit**

| Type | Form | Method |
|---|---|---|
| Separable | $dy/dt = g(t)h(y)$ | Separate and integrate |
| Linear | $dy/dt + p(t)y = q(t)$ | Integrating factor $e^{\int p\,dt}$ |
| Exponential | $dy/dt = ky$ | Direct: $y_0 e^{kt}$ |

> **Common pitfall:** Losing solutions when separating. Dividing by $h(y)$ assumes $h(y) \ne 0$ — the constant solutions where $h(y) = 0$ (often the equilibria you care most about) must be checked separately.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* An investment of 1,000 grows at continuous rate $r = 0.05$. After 10 years, $A = 1000 e^{0.5}$. **Drag the value marker** to the approximate final amount.

**2.** *(Matching)* Match each ODE to its economic model.

**3.** *(Graph identification)* Which curve shows the Solow steady state — capital accumulation $sf(k)$ exceeding depreciation $\delta k$ at low $k$, then crossing?

---

## Systems of Differential Equations

Many economic systems involve two or more variables that evolve simultaneously and influence each other. A **system of ODEs** captures this:

$$\dot{x} = f(x, y), \qquad \dot{y} = g(x, y)$$

**Linear systems**: when $f$ and $g$ are linear, the system can be written in matrix form:

$$\dot{\mathbf{x}} = A\mathbf{x}, \qquad \text{where } A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$$

The solution involves the **eigenvalues** of $A$, connecting this lesson to Lesson 5:

$$\mathbf{x}(t) = c_1 e^{\lambda_1 t} \mathbf{v}_1 + c_2 e^{\lambda_2 t} \mathbf{v}_2$$

**Phase diagrams** show trajectories in the $(x, y)$ plane — how the system evolves from any starting point. The **equilibrium** $(x^*, y^*)$ is where $\dot{x} = 0$ and $\dot{y} = 0$ simultaneously.

**Classification by eigenvalues**:
- Both $\lambda < 0$: **stable node** — all trajectories converge to equilibrium.
- Both $\lambda > 0$: **unstable node** — trajectories diverge from equilibrium.
- $\lambda_1 < 0 < \lambda_2$: **saddle point** — stable in one direction, unstable in another.
- Complex eigenvalues with negative real part: **stable spiral** — oscillating convergence.
- Complex with positive real part: **unstable spiral** — oscillating divergence.

**Economic examples**:
- **IS-LM dynamics**: output and interest rate adjust simultaneously — output responds to interest rates, interest rates respond to money demand (which depends on output).
- **Predator-prey in markets**: firms and consumers interact — market share dynamics where one firm's gain is another's loss.
- **Ramsey growth model**: consumption and capital evolve jointly — the saddle-path solution is the unique trajectory leading to the steady state.

**The saddle path** is especially important in economics: forward-looking agents (who expect the economy to reach equilibrium) choose the initial conditions that place the system on the stable manifold of the saddle point. This is the mathematical foundation of rational-expectations macroeconomics.

**Eigenvalues decide the fate**

| Eigenvalues | Equilibrium type | Behaviour |
|---|---|---|
| Both real, negative | Stable node | Everything converges |
| Both real, positive | Unstable node | Everything diverges |
| Opposite signs | Saddle | Converges only along one line |
| Complex, negative real part | Stable spiral | Oscillates inward |
| Complex, positive real part | Unstable spiral | Oscillates outward |

> **Tip:** You rarely need the full solution — the eigenvalues alone classify the equilibrium. Real parts answer "stable or not"; imaginary parts answer "does it oscillate." That is usually the whole economic question.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* A linear system has eigenvalues $\lambda_1 = -0.5$ and $\lambda_2 = -0.2$. Both are negative. **Drag the phase-diagram label** to the correct equilibrium type.

**2.** *(Error highlight)* Highlight the classification error.

**3.** *(Multi select)* Which systems have a stable equilibrium?
   - [ ] Both eigenvalues negative (stable node)
   - [ ] Complex eigenvalues with negative real part (stable spiral)
   - [ ] One positive, one negative eigenvalue (saddle)
   - [ ] Both eigenvalues positive (unstable node)


---

## Economic Applications

This lesson synthesises the mathematical tools of Units 4 and 9 into their most important economic applications.

**Elasticity** — the economist's favourite derivative. The price elasticity of demand is:

$$\varepsilon = \frac{\%\Delta Q}{\%\Delta P} = \frac{dQ}{dP} \cdot \frac{P}{Q}$$

Elasticity is a _unitless_ measure of responsiveness: $|\varepsilon| > 1$ means demand is elastic (revenue falls if price rises); $|\varepsilon| < 1$ means inelastic (revenue rises). At $|\varepsilon| = 1$, revenue is maximised.

**Cobb-Douglas production** — the workhorse of economic modelling:

$$Q = AK^\alpha L^{1-\alpha}$$

- $\alpha$ is capital's share of output (and income, under perfect competition).
- **Returns to scale**: the exponents sum to 1, so the function exhibits **constant returns to scale** — doubling all inputs doubles output.
- **Marginal products**: $MP_K = \alpha Q/K$, $MP_L = (1-\alpha) Q/L$ — proportional to the average product, a defining feature of Cobb-Douglas.

**Input-output analysis** (Leontief): the economy's total output $\mathbf{x}$ satisfies:

$$\mathbf{x} = A\mathbf{x} + \mathbf{d}$$

where $A$ is the matrix of inter-industry requirements and $\mathbf{d}$ is final demand. Solving:

$$(I - A)\mathbf{x} = \mathbf{d} \qquad \Rightarrow \qquad \mathbf{x} = (I - A)^{-1}\mathbf{d}$$

The **Leontief inverse** $(I - A)^{-1}$ gives the total output multiplier — including all indirect requirements rippling through the supply chain.

**The envelope theorem**: in an optimised system, the effect of a parameter change on the optimised value equals the direct effect only — you can ignore the indirect effect through the optimised variables:

$$\frac{dV^*}{d\theta} = \frac{\partial \mathcal{L}}{\partial \theta}\bigg|_{\text{optimum}}$$

This is why $\lambda$ (the Lagrange multiplier) is the shadow price: it is the direct effect of relaxing the constraint on the optimised objective.

**The synthesis toolkit**

| Tool | Formula | Answers |
|---|---|---|
| Elasticity | $\varepsilon = \frac{dQ}{dP}\cdot\frac{P}{Q}$ | How responsive is demand? |
| Cobb-Douglas | $Q = AK^{\alpha}L^{1-\alpha}$ | How do inputs make output? |
| Leontief inverse | $(I-A)^{-1}\mathbf{d}$ | Total output including ripples |
| Shadow price | $\lambda$ | What is the constraint worth? |

> **Tip:** The envelope theorem is the great labour-saver: at an optimum, a small parameter change affects the optimised value only _directly_ — the induced re-optimisation contributes nothing to first order. That is exactly why $\lambda$ prices the constraint without further calculation.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* Demand is $Q = 100 - 2P$. At $P = 20$, $Q = 60$. The elasticity is $\varepsilon = -2 \times 20/60$. **Drag the elasticity marker** to the correct value.

**2.** *(Error highlight)* Highlight the elasticity error.

**3.** *(True false)* In a Cobb-Douglas function $Q = AK^{0.4}L^{0.6}$, the exponent 0.4 is capital's share of output (and income under perfect competition).
   - True / False


---

*Part of [Business I](README.md) — [Open University Courses by Tryals](../../README.md)*
