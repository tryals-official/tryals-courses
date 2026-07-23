# Unit 9: Scientific Programming

## Floating-Point Numbers

Scientific computing runs on **floating-point** numbers — the computer's approximation of the real numbers. Because a machine has finite memory, it cannot store infinitely many digits, so most reals are stored _approximately_. Understanding this is the foundation of trustworthy numerical work.

A floating-point number is stored like scientific notation: a **sign**, a **mantissa** (significant digits), and an **exponent** (the scale), typically in the IEEE 754 standard (32-bit single or 64-bit double precision). This gives a fixed number of significant digits — about 15–16 for a double — and a huge range of magnitudes. But between representable values there are gaps: most real numbers fall _between_ two floats and get **rounded** to the nearer one, introducing **round-off error**.

The consequences shape all numerical work:
- **No exact equality.** `0.1 + 0.2` is not exactly `0.3` — each is rounded, and the tiny errors do not cancel. Never test floats with `==`; compare within a **tolerance** $|a - b| < \epsilon$.
- **Limited precision.** Only about 15–16 significant digits survive; beyond that is noise.
- **Special values.** Operations can produce **infinity** (overflow, or $1/0$) or **NaN** ("not a number," e.g. $0/0$), which propagate through further arithmetic.

Floating-point is not a flaw to be fixed but a reality to be managed. Every serious numerical result carries some error; the art of scientific computing is keeping that error small and knowing how large it might be.

> **Common pitfall:** testing floating-point numbers for **exact equality** with `==`. Because reals are stored approximately and rounded, computations that "should" give the same value often differ in the last bits — `0.1 + 0.2 != 0.3` exactly. Always compare floats within a **tolerance** ($|a - b| < \epsilon$), never with strict equality, or a correct computation will register as unequal.

A zoomed number line with discrete floating-point ticks and gaps between them; an accent real value falls in a gap and snaps to the nearest tick, the small remaining distance labeled the round-off error.

$$|a - b| < \epsilon \text{ (compare within tolerance)}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Matrix grid)* Classify what a floating-point machine produces for each computation.

**2.** *(Cloze bank)* Complete the rule for comparing floats.

**3.** *(Numerical input)* In that same toy system, representable values are spaced 0.25 apart. What is the largest possible round-off error when a real number in that range is stored?

---

## Numerical Errors and Stability

Every numerical computation carries error; the discipline is knowing its _sources_ and keeping it _controlled_. Two fundamental kinds of error arise:
- **Round-off error** — from representing numbers with finite precision (Lesson 1). It is inherent in floating-point arithmetic.
- **Truncation error** — from approximating an infinite process by a finite one: stopping a Taylor series after a few terms, using a finite step size in a derivative, or a finite number of rectangles in an integral. It is the error of the _method_, independent of the machine.

These often trade off. Making a step size $h$ smaller reduces _truncation_ error (the method becomes more accurate) but can _increase_ round-off error (subtracting nearly equal numbers amplifies the finite-precision noise) — so there is an optimal step size, not "smaller is always better."

Errors also **propagate** through a computation, and some ways of computing are far worse than others. Two dangers:
- **Catastrophic cancellation** — subtracting two nearly equal numbers destroys significant digits, leaving mostly noise. Reformulating to avoid the subtraction preserves accuracy.
- **Error amplification** — an unstable calculation magnifies small input errors into huge output errors.

An algorithm is **numerically stable** if small errors (round-off, input noise) stay small through the computation — they do not blow up. An **unstable** algorithm amplifies them, so even exact-looking inputs can give a wildly wrong answer. Two mathematically _equivalent_ formulas can differ enormously in stability; choosing the stable one is a core skill. A related idea, **conditioning**, describes the _problem_ itself: a well-conditioned problem has an answer insensitive to input changes, while an ill-conditioned one is sensitive no matter how good the algorithm.

> **Common pitfall:** assuming that a **smaller step size always gives a more accurate answer**. Shrinking $h$ reduces _truncation_ error but eventually _increases_ round-off error (from subtracting nearly equal quantities), so accuracy improves only up to an optimal step size and then degrades. "Smaller is always better" ignores the round-off half of the trade-off — and, more broadly, an _unstable_ algorithm can amplify tiny errors regardless of step size.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Category sort)* Sort each source of error by its kind.

**2.** *(Table completion)* For a certain method the truncation error equals h and the round-off error equals 0.01 divided by h. Complete the total error for each step size.

**3.** *(Error highlight)* A student explains numerical error. Highlight the one incorrect statement.

---

## Root Finding

Most equations $f(x) = 0$ cannot be solved by algebra — there is no formula for the roots of a general polynomial of degree 5 or higher, let alone equations mixing polynomials, exponentials, and trig. **Root-finding** algorithms locate the solutions **numerically**, to any desired accuracy, by iterating.

**Bisection** is the simplest and most robust. It relies on the Intermediate Value Theorem (Unit 5): if a continuous $f$ has _opposite signs_ at $a$ and $b$, a root lies between them. Bisection repeatedly halves the interval, keeping the half where the sign change persists. Each step halves the error, so it is **guaranteed to converge** (given an initial sign change) but only **linearly** — steady, if slow.

**Newton's method** is far faster. From a current guess $x_n$, it follows the **tangent line** to the curve down to where it crosses zero, giving the next guess:
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}.$$
This is the linear approximation of Unit 5 turned into an iteration. Near a root, Newton's method converges **quadratically** — the number of correct digits roughly _doubles_ each step, astonishingly fast.

But Newton's speed comes with fragility, the crucial trade-off:
- It needs the **derivative** $f'$, and fails if $f'(x_n) = 0$ (a horizontal tangent shoots the next guess to infinity).
- It can **diverge** or cycle from a poor starting guess.
- It only **converges reliably when started close** to the root.

Bisection is slow but safe; Newton's is fast but needs a good start and a well-behaved function. In practice, hybrid methods combine them — bisect to get close, then switch to Newton for speed — capturing the best of both.

> **Common pitfall:** assuming **Newton's method always converges** to a root. It converges _quadratically_ only when started **near** the root and where $f'$ is well-behaved; from a poor starting guess it can **diverge, cycle, or blow up** (especially if $f'(x_n) = 0$, dividing by zero). Bisection, by contrast, is guaranteed to converge given a sign change — the safety Newton's method trades away for speed.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Bisection is applied to f(x) = x squared - 2 on the interval from 1 to 2, keeping the half where the sign change persists. The first midpoint tested is 1.5. What is the THIRD midpoint tested?

**2.** *(Numerical input)* Bisection starts from an interval of width 1. How many steps guarantee that the root has been located to within 0.001?

**3.** *(Error highlight)* A student explains root finding. Highlight the one incorrect statement.

---

## Numerical Integration

Many definite integrals have no closed-form antiderivative — $\int e^{-x^2}\, dx$ (the Gaussian) is the famous example. When the Fundamental Theorem cannot be applied, **numerical integration** (quadrature) approximates the integral directly from function values, refining the Riemann-sum idea of Unit 6.

The methods approximate the area under the curve with simple shapes on each subinterval:
- **Rectangle (midpoint) rule** — approximate each strip by a rectangle. Crude, error $\sim h^2$ per the step size $h$.
- **Trapezoidal rule** — approximate each strip by a **trapezoid** (connect adjacent points with a straight line), averaging the two endpoint heights. Better than rectangles; error $\sim h^2$ overall but with a smaller constant.
- **Simpson's rule** — fit a **parabola** through each triple of points instead of a straight line. Because parabolas hug curves far better than lines, Simpson's is dramatically more accurate: its error is $\sim h^4$, so halving the step size cuts the error by _sixteen_, not four.

The overarching principle: **finer subdivisions (smaller $h$) give more accuracy**, and **higher-order rules** (fitting richer shapes) converge faster still. Simpson's rule is exact for polynomials up to degree three, which is why it excels on smooth functions.

The subtlety that reconnects to Lesson 2: you cannot make $h$ arbitrarily small in search of perfect accuracy. Shrinking $h$ reduces the method's (truncation) error, but very small $h$ means summing very many tiny terms, so accumulated **round-off error** eventually grows. There is an optimal subdivision, and a good rule (like Simpson's) reaches high accuracy at a modest $h$, avoiding the round-off regime. Numerical integration is a workhorse across physics, statistics (integrating probability densities), and engineering.

> **Common pitfall:** assuming that **more subdivisions always give a better answer**, without limit. A smaller step size reduces the _truncation_ error of the rule, but summing ever more tiny contributions eventually lets _round-off_ error accumulate and dominate — so accuracy improves only up to an optimal $h$. Using a **higher-order rule** (Simpson's over trapezoidal) is usually the better path to accuracy than blindly shrinking $h$.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Number line placement)* Approximate the integral of x squared from 0 to 2 by the trapezoidal rule with two strips of width 1, using the heights at 0, 1 and 2. **Place the marker on the resulting estimate.

**2.** *(Matrix grid)* Match each description to the rule it belongs to.

**3.** *(Numerical input)* Measured values of a function at x = 0, 1, 2, 3 are 1, 3, 5 and 9. Apply the trapezoidal rule with step size 1 to estimate the integral from 0 to 3.

---

## Solving Linear Systems Numerically

Solving $A\mathbf{x} = \mathbf{b}$ is one of the most common tasks in scientific computing — arising in simulations, data fitting, and optimization, often with thousands or millions of unknowns. The theory (Unit 3) says to use **Gaussian elimination**; making it work reliably at scale is the numerical challenge.

The direct method row-reduces $A$ to triangular form and back-substitutes, at a cost of about $\frac{2}{3}n^3$ operations for an $n \times n$ system — cubic, so doubling $n$ multiplies the work eightfold. For very large or sparse systems, **iterative methods** (Jacobi, Gauss–Seidel, conjugate gradient) instead refine an approximate solution step by step, often far cheaper.

A crucial numerical refinement is **pivoting**. Plain Gaussian elimination divides by the pivot element; if a pivot is _zero_, it fails, and if a pivot is merely _small_, dividing by it amplifies round-off error catastrophically. **Partial pivoting** — swapping rows to put the largest available entry on the pivot — avoids both, making the elimination **numerically stable**. It is essential in practice, not optional.

Even with a perfect algorithm, some systems are inherently hard. The **condition number** of $A$ measures how sensitive the solution is to small changes in $A$ or $\mathbf{b}$:
- A **well-conditioned** system (small condition number) has a solution robust to input errors.
- An **ill-conditioned** system (large condition number) has a solution that swings wildly with tiny input changes — geometrically, its equations are _nearly parallel_, so their intersection point is poorly determined.

For an ill-conditioned system, _no_ algorithm can deliver an accurate answer from imprecise data — the problem itself amplifies error. Recognizing conditioning tells you whether a computed solution can be trusted.

> **Common pitfall:** blaming a wildly wrong solution on the **algorithm** when the **problem is ill-conditioned**. A large condition number means the solution is intrinsically hyper-sensitive to input error — nearly parallel equations whose intersection shifts enormously with tiny data changes. Even a perfect, stable solver cannot rescue an ill-conditioned system from imprecise inputs; the error lives in the _problem_, not the method. (And use **pivoting** — dividing by a small pivot is a self-inflicted instability.)

Two nearly parallel lines whose accent intersection point slides far along the lines when one is nudged slightly, beside two perpendicular lines whose intersection barely moves — ill- versus well-conditioning.

$$\text{large condition number} \Rightarrow \text{sensitive solution}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Direct Gaussian elimination costs about two thirds of n cubed operations. If solving a 1000 by 1000 system takes 2 seconds, roughly how many seconds does a 2000 by 2000 system take?

**2.** *(Table completion)* Back-substitute the triangular system: x + y + z = 6, 2y + z = 7, 3z = 9. Complete the values in the order they are found.

**3.** *(Error highlight)* A student explains solving linear systems. Highlight the one incorrect statement.

---

## Interpolation and Curve Fitting

Given a set of data points, we often want a _function_ that describes them — to fill in gaps, smooth noise, or make predictions. Two related but distinct approaches serve different goals.

**Interpolation** finds a function that passes _exactly through_ every data point. Given $n+1$ points, there is a unique **interpolating polynomial** of degree $n$ through them. **Spline interpolation** instead joins the points with low-degree (often cubic) pieces, matching smoothly at each point — the standard choice, because a single high-degree polynomial through many points can oscillate wildly between them (Runge's phenomenon). Interpolation assumes the data are _exact_ and the goal is to reconstruct the underlying function precisely at the given points.

**Curve fitting** (regression) instead finds a function of a chosen form that comes _close_ to the points without necessarily hitting any of them, by minimizing the total error. **Least-squares fitting** minimizes the sum of squared vertical distances (residuals) from the points to the curve — the same idea as Unit 7's linear regression, extended to any model form. Fitting assumes the data contain **noise**, and the goal is to capture the underlying _trend_, not the individual jitter.

The choice hinges on whether the data are exact or noisy:
- **Exact data, want the true function** → **interpolate** (pass through every point).
- **Noisy data, want the trend** → **fit** (approximate, minimize error).

Forcing a curve through _every_ noisy point (over-interpolating) chases the noise and gives a wiggly, useless model — the classic **overfitting** trap. Conversely, fitting a too-simple curve to structured data misses real features (**underfitting**). Choosing the right approach and model complexity is central to data science and numerical modeling.

> **Common pitfall:** **interpolating noisy data** — forcing a curve through every point when the data contain measurement noise. This makes the curve chase the random jitter, producing wild oscillations and poor predictions (overfitting). When data are noisy, **fit** a simpler model by least squares to capture the trend, rather than interpolating every point exactly; interpolation is for data you trust as exact.

Noisy scatter points with an accent wiggly high-degree interpolant threading every point (overfit) beside a smooth least-squares line capturing the trend — interpolation versus fitting on noisy data.

$$\text{exact data: interpolate} \;;\; \text{noisy data: fit}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Through a set of 5 data points there is a unique interpolating polynomial. What is its degree?

**2.** *(Table completion)* A fitted line predicts y = 2x + 1. Complete the predictions and residuals for the data below.

**3.** *(Error highlight)* A student explains interpolation and fitting. Highlight the one incorrect statement.

---

## Simulation and Monte Carlo Methods

Some problems are too complex to solve exactly but can be **estimated by random sampling**. **Monte Carlo methods** use randomness deliberately: generate many random scenarios, and use their statistics to approximate an answer. Counterintuitively, injecting randomness solves _deterministic_ problems — estimating integrals, areas, and probabilities that resist analytic attack.

The classic illustration estimates $\pi$. Scatter random points uniformly in a unit square containing a quarter-circle of radius 1. The fraction landing _inside_ the quarter-circle approximates its area, $\frac{\pi}{4}$, so
$$\pi \approx 4 \cdot \frac{\text{points inside}}{\text{total points}}.$$
More points give a better estimate. Monte Carlo shines especially for **high-dimensional integrals**, where grid-based methods fail (a grid needs exponentially many points as dimensions grow, but Monte Carlo's cost does not).

The defining characteristic — and the crucial caveat — is **convergence rate**. A Monte Carlo estimate's error shrinks like $\frac{1}{\sqrt{N}}$ with the number of samples $N$. This is _slow_: to get one more decimal digit of accuracy (tenfold error reduction), you need **one hundred times** as many samples. So Monte Carlo gives quick rough answers but expensive precise ones — it is a tool for estimation, not high-accuracy computation.

Monte Carlo methods also **simulate** stochastic systems directly: modeling particle diffusion, financial-market scenarios, queueing systems, or the spread of a disease by playing out many random trials and averaging. Random sampling also underlies **randomized algorithms** and much of modern statistics and machine learning. Its power is turning an intractable exact problem into a tractable statistical estimate.

> **Common pitfall:** expecting Monte Carlo estimates to be **highly precise** or to improve quickly with more samples. The error shrinks only as $\frac{1}{\sqrt{N}}$, so each additional decimal digit of accuracy costs **100 times** more samples — Monte Carlo is inherently slow to converge. It is excellent for quick estimates and high-dimensional problems, but a poor choice when many accurate digits are needed; do not treat a Monte Carlo result as exact or assume doubling the samples halves the error (it only cuts it by $\sqrt{2}$).

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* In a Monte Carlo estimate of pi, 3140 of 4000 random points in the unit square land inside the quarter-circle. What estimate of pi does this give?

**2.** *(Table completion)* The error of a Monte Carlo estimate is proportional to 1 divided by the square root of N. Complete the table.

**3.** *(Error highlight)* A student explains Monte Carlo methods. Highlight the one incorrect statement.

---

## Vectorised Computation and Libraries

Scientific computing rarely means writing every algorithm from scratch. Modern practice rests on two pillars: **vectorised computation** and **numerical libraries**.

**Vectorisation** expresses operations on _whole arrays_ at once rather than element by element with explicit loops. Instead of "for each i, set `c[i] = a[i] + b[i]`," you write `c = a + b` — one operation on entire arrays. This is not just shorter; it is dramatically **faster**. Explicit loops in a high-level interpreted language are slow, but a vectorised operation dispatches to highly optimized, compiled code (often using the CPU's parallel SIMD instructions) that processes many elements per cycle. Vectorised code is both more readable (it looks like the mathematics) and far more efficient.

**Numerical libraries** provide expertly implemented, tested, and optimized routines so you never reimplement the fundamentals. The scientific stack — array libraries (NumPy-style), linear-algebra packages (built on BLAS/LAPACK), and plotting and data tools — offers matrix operations, solvers, transforms, statistics, and more. These libraries encode decades of numerical expertise: they handle pivoting, stability, and edge cases correctly, which naive hand-written code usually does not.

The professional principle: **do not reinvent the wheel.** A hand-coded linear solver will almost certainly be slower and less numerically robust than the library routine, which has been refined and stress-tested for years. The scientific programmer's skill is _composing_ well-chosen library operations — and knowing what they do and their limitations — rather than reimplementing them. Vectorised thinking (operate on arrays) plus library fluency (call the right optimized routine) is the modern idiom of scientific computing.

> **Common pitfall:** writing slow **explicit element-by-element loops** where a **vectorised array operation** would be far faster, and **reimplementing** numerical routines that robust libraries already provide. In array-based scientific computing, an explicit loop over elements can be orders of magnitude slower than the equivalent whole-array operation dispatched to optimized compiled code. And a hand-written solver rarely matches a library's speed or numerical robustness — prefer well-tested library routines to reinventing the wheel.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* An explicit element-by-element loop over 10 million values takes 8 seconds, while the vectorised version of the same computation takes 0.05 seconds. By what factor is the vectorised version faster?

**2.** *(Matrix grid)* Decide whether each task calls for a library routine or for code you must write yourself.

**3.** *(Error highlight)* A student explains vectorisation and libraries. Highlight the one incorrect statement.

---

## Reproducibility and Good Practice

A scientific result produced by code is only as credible as the code that produced it. **Reproducibility** — the ability for others (and your future self) to re-run an analysis and obtain the same result — is a cornerstone of scientific integrity, and it depends on disciplined software practice, not just correct algorithms.

The essential practices:
- **Version control** (e.g. Git) tracks every change to the code over time, records who changed what and why, and lets you return to any previous state. It makes collaboration safe and results traceable — the single most important tool for reproducible work.
- **Testing** verifies that code does what it should. **Unit tests** check individual functions against known answers; running them after each change catches **regressions** (newly introduced bugs) immediately. Testing turns "it seemed to work" into "it demonstrably works on these cases."
- **Documentation** — comments and clear names explaining _why_ (not just what) — so the code can be understood and correctly reused, by others and by you months later.
- **Managing randomness.** Simulations use random numbers, which threaten reproducibility. Setting a **random seed** fixes the sequence of "random" values, so a stochastic computation gives the _same_ result every run — reproducible despite using randomness.
- **Recording the environment** — the exact library versions and parameters used — since results can change with different software versions.

The deeper point for a mathematician-turned-programmer: a computation that _runs_ is not automatically a computation that is _correct_ or _trustworthy_. Good practice — version control, tests, documentation, controlled randomness — is what separates a throwaway script from a reliable scientific instrument. These habits are as much a part of rigorous computational science as the mathematics itself.

> **Common pitfall:** treating code that **runs without error** as automatically **correct and trustworthy**. Running is not the same as being right — a program can execute flawlessly and still produce wrong answers from a logic bug, and an un-versioned, untested, seed-less script is not reproducible even if its output looks fine. Trustworthy computation requires **testing** (verify against known answers), **version control** (traceable changes), and **a fixed random seed** (reproducible randomness) — not merely the absence of crashes.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Category sort)* Sort each practice by its effect on reproducibility.

**2.** *(Cloze bank)* Complete the purpose of a test suite.

**3.** *(Multi select)* A colleague sends a script and the number it printed. Select everything you still need before that result can be called reproducible.
   - [ ] The exact version of the code that produced it
   - [ ] The random seed that was used
   - [ ] The library versions it ran against
   - [ ] A faster computer
   - [ ] A proof that the algorithm is optimal


---

## Scientific Computing in Practice

This closing lesson assembles the unit's methods into the **workflow** of real scientific computing — how a scientist or engineer turns a real-world problem into a trustworthy numerical answer. Computation has become the "third pillar" of science, letting us study systems too complex for pure theory and too costly or impossible for experiment.

The typical pipeline:
1. **Model** — translate the real problem into mathematics: equations, often **differential equations** (a climate model, fluid flow, population dynamics) or an optimization problem.
2. **Discretise** — replace the continuous model with a finite, computable approximation: a grid in space and time, a finite set of unknowns. The continuous derivatives and integrals become the numerical schemes of this unit.
3. **Solve** — apply the numerical methods: root-finders, linear-system solvers, numerical integration, time-stepping, all built on vectorised code and libraries.
4. **Validate** — check the result against known cases, conservation laws, or experiment; assess the **error** and **stability**; test convergence as the grid is refined.
5. **Interpret and visualise** — turn numbers into understanding.

Every theme of the unit appears: floating-point limits and error analysis bound the accuracy; stability and conditioning decide whether the answer is trustworthy; efficient algorithms and vectorised libraries make large problems feasible; reproducible practice makes the result credible.

The unifying lesson — and the essential mindset — is that **numerical results are approximate and must be validated**. A simulation produces numbers no matter what; the scientist's job is to know _how accurate_ they are, _whether_ they can be trusted, and _where_ they might fail. Blindly trusting a computation is as unscientific as blindly trusting an unverified proof. Scientific computing is powerful precisely when paired with the rigour, scepticism, and error-awareness that mathematics demands — a numerical experiment held to the same standard as any other scientific claim.

> **Common pitfall:** treating a **simulation's output as reliable truth without validation**. A numerical model always produces numbers, but they are approximate and can be wrong from discretisation error, instability, ill-conditioning, or a modeling mistake. The scientific computing workflow **requires a validation step** — checking against known cases, conservation laws, or experiment, and assessing error and convergence. An unvalidated computation is not a scientific result; the numbers must be earned, not assumed.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Ordering)* Order the stages of the scientific computing workflow.

**2.** *(Numerical input)* A second-order scheme has an error of 0.08 on the current grid. Refining the grid by a factor of 2 changes the error to what value?

**3.** *(Category sort)* Sort each claim by whether the computation described actually justifies it.

---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
