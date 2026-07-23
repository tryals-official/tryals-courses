# Unit 6: Integral Calculus

## Antiderivatives and Indefinite Integrals

**Integration**, in one of its two guises, reverses differentiation. An **antiderivative** of $f$ is a function $F$ with $F'(x) = f(x)$. Where differentiation asks "what is the rate of change?", antidifferentiation asks "what function has this rate of change?" — recovering position from velocity, or a total from a rate.

A key subtlety: antiderivatives are **not unique**. Because the derivative of any constant is zero, if $F$ is an antiderivative then so is $F + C$ for any constant $C$. The **indefinite integral** therefore carries a **constant of integration**:
$$\int f(x)\, dx = F(x) + C.$$
Omitting the $+C$ is the classic mistake — the constant encodes that infinitely many functions (a whole vertical family of parallel curves) share the same derivative.

The rules reverse the differentiation rules:
- **Power rule for integration** — $\int x^n\, dx = \frac{x^{n+1}}{n+1} + C$ (for $n \neq -1$): raise the exponent by one and divide by the new exponent — the opposite of the derivative power rule.
- **Constant multiple** and **sum** rules carry over: constants factor out, and the integral of a sum is the sum of the integrals.
- Reversing standard derivatives: $\int \cos x\, dx = \sin x + C$, $\int e^x\, dx = e^x + C$, and $\int \frac{1}{x}\, dx = \ln|x| + C$ (the $n = -1$ case the power rule excludes).

More elaborate integrals use **substitution** (reversing the chain rule) and **integration by parts** (reversing the product rule), covered later, but the power rule and standard forms handle a great many.

> **Common pitfall:** forgetting the **constant of integration** $+C$, and misapplying the integration power rule. Every indefinite integral needs $+C$, because antiderivatives are unique only up to a constant. And the integration power rule **raises** the exponent and divides ($\int x^n = \frac{x^{n+1}}{n+1}$) — the reverse of the derivative rule; accidentally bringing the power _down_ (the derivative pattern) is a common slip.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Table completion)* Complete the table of indefinite integrals. Write each answer with its constant of integration.

**2.** *(Error highlight)* A student writes out four antiderivatives. Highlight the one incorrect line.

**3.** *(Multi select)* Select every function whose derivative is 3x^2.
   - [ ] x^3
   - [ ] x^3 + 7
   - [ ] 3x^3
   - [ ] x^3 - 2
   - [ ] 9x


---

## The Definite Integral

The **definite integral** $\int_a^b f(x)\, dx$ is the second face of integration: it measures the **accumulated (signed) area** between the curve $y = f(x)$ and the $x$-axis from $a$ to $b$. Where the derivative measured instantaneous rates, the definite integral measures **totals** — total distance from a velocity, total accumulation from a rate.

It is defined as a limit of **Riemann sums**. Partition $[a, b]$ into $n$ thin subintervals of width $\Delta x$, each with a sample height $f(x_i)$ from the curve. The sum of rectangle areas $\sum f(x_i)\,\Delta x$ approximates the region, and as the slices get thinner ($n \to \infty$) it becomes exact:
$$\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i)\,\Delta x.$$
(The integral sign is an elongated "S" for "sum.")

Two features to remember:
- **Signed area.** Where $f(x)$ is _below_ the axis, its contribution is _negative_. The definite integral gives **net** signed area, so parts below the axis subtract. A symmetric curve can integrate to zero while enclosing real area.
- **A number, not a function.** Unlike the indefinite integral (a family of functions with $+C$), the definite integral is a single **number**, with no constant of integration.

Basic properties follow from the area picture: $\int_a^a f = 0$, reversing limits flips the sign ($\int_b^a f = -\int_a^b f$), and integrals split over adjacent intervals ($\int_a^c = \int_a^b + \int_b^c$). Numerically, Riemann sums and refinements (trapezoidal rule, Simpson's rule) are how computers evaluate integrals with no closed form.

> **Common pitfall:** treating the definite integral as always giving the **geometric (positive) area**, and confusing it with the indefinite integral. The definite integral is **signed** — area below the axis counts as negative — so it can be zero or negative even when real area is enclosed. And it is a single **number** (no $+C$), unlike the indefinite integral, which is a family of functions.

The area under a curve approximated by rectangles that grow thinner and more numerous, the accent shaded region converging to the exact integral, with a below-axis lobe shaded to subtract.

$$\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i)\,\Delta x$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A function equals 3 on the interval from 0 to 2 and equals -3 on the interval from 2 to 5. Compute its definite integral from 0 to 5.

**2.** *(Matrix grid)* Without evaluating anything exactly, decide the sign of each definite integral from the area picture.

**3.** *(Numerical input)* The definite integral of f from 0 to 3 equals 7, and the definite integral of f from 3 to 5 equals -2. Compute the definite integral of f from 0 to 5.

---

## The Fundamental Theorem of Calculus

Integration has worn two faces — **antiderivatives** (reversing differentiation) and **definite integrals** (accumulated area). The **Fundamental Theorem of Calculus (FTC)** reveals they are two sides of one coin. It is the central theorem of calculus, uniting its two halves.

The theorem has two parts:
- **Part 1** — if $F(x) = \int_a^x f(t)\, dt$ (an area-accumulating function), then $F'(x) = f(x)$. In words, _the derivative of the accumulated area is the height of the curve_: differentiation and integration undo each other.
- **Part 2** (the evaluation rule) — to compute a definite integral, find _any_ antiderivative $F$ and take the difference at the endpoints:
$$\int_a^b f(x)\, dx = F(b) - F(a).$$

Part 2 is the practical powerhouse. You never need Riemann sums to evaluate an integral exactly — just find an antiderivative and subtract its endpoint values. For example $\int_0^2 x\, dx = \left[\frac{x^2}{2}\right]_0^2 = 2 - 0 = 2$, matching the triangle's area, with no summation.

Conceptually, the FTC says **accumulation and rate-of-change are inverse operations**. This is why velocity integrates to displacement, why any rate integrates to a total, and why the two operations learned separately turn out to be one. The $+C$ of the antiderivative does not matter in Part 2 — it cancels in the subtraction $F(b) - F(a)$ — which is exactly why _any_ antiderivative works.

> **Common pitfall:** in Part 2, subtracting the endpoints in the **wrong order**. The rule is $F(b) - F(a)$ — the _upper_ limit minus the _lower_ limit; reversing them flips the sign of the answer. And remember it evaluates the _definite_ integral: any antiderivative works (the $+C$ cancels), so do not fret over which one to choose.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Use the evaluation rule to compute the definite integral of x squared from 1 to 4.

**2.** *(Formula builder)* The definite integral of 2x from 1 to 3 is evaluated with the antiderivative x squared. Build the correct endpoint expression.

**3.** *(Numerical input)* Let F(x) be the integral of (t squared + 1) dt from 0 to x. Compute F'(3).

---

## Integration by Substitution

Just as differentiation has the chain rule for compositions, integration has **substitution** — the reverse of the chain rule, and the most-used integration technique. It transforms a hard integral into an easy one by a clever change of variable.

The idea: if the integrand contains an "inner function" $u = g(x)$ together with (a multiple of) its derivative $g'(x)$, substitute:
$$\int f(g(x))\,g'(x)\, dx = \int f(u)\, du, \qquad u = g(x),\ du = g'(x)\, dx.$$
Replacing $g(x)$ by $u$ and $g'(x)\,dx$ by $du$ collapses the composite into a simple integral in $u$, which you evaluate and then convert back. For example $\int 2x\cos(x^2)\, dx$: let $u = x^2$, so $du = 2x\, dx$, giving $\int \cos u\, du = \sin u + C = \sin(x^2) + C$.

The recipe:
1. **Choose $u$** — usually the inner function whose derivative also appears (up to a constant).
2. **Compute $du = g'(x)\, dx$** and rewrite the whole integral in terms of $u$.
3. **Integrate** in $u$, then **substitute back** $u = g(x)$ (for an indefinite integral).

For a **definite** integral, either substitute back and use the original limits, or — cleaner — **change the limits** to $u$-values ($x = a \Rightarrow u = g(a)$) and evaluate directly in $u$, never converting back.

> **Common pitfall:** substituting for $u$ but **forgetting to convert $dx$ into $du$** (i.e. neglecting the $g'(x)\,dx = du$ factor), and, in a definite integral, **using the old $x$-limits with the new $u$-variable**. Every $x$ (including the differential) must become $u$: if you change the variable, change the limits too — or substitute back before applying them. Leaving a stray $dx$ or mismatched limits is the defining error of substitution.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Table completion)* For each integral, complete the substitution you would make.

**2.** *(Ordering)* Order the steps of integration by substitution for an indefinite integral.

**3.** *(Cloze bank)* Complete the rule for definite integrals under substitution.

---

## Integration by Parts

**Integration by parts** is the integration technique that reverses the **product rule**. It handles integrals of _products_ — especially a polynomial times an exponential, logarithm, or trig function — that substitution cannot touch. The formula, derived by integrating the product rule, is:
$$\int u\, dv = uv - \int v\, du.$$
You split the integrand into a part $u$ (to differentiate) and a part $dv$ (to integrate), then trade the original integral for a hopefully simpler one, $\int v\, du$.

The art is **choosing $u$ and $dv$ wisely** — you want $\int v\, du$ to be easier than what you started with. A useful guide is the mnemonic **LIATE**, ordering good choices for $u$: **L**ogarithmic, **I**nverse trig, **A**lgebraic (polynomial), **T**rigonometric, **E**xponential. Pick $u$ to be whichever type appears earliest in this list, and let $dv$ be the rest.

For example, $\int x\, e^x\, dx$: choose $u = x$ (algebraic, so $du = dx$) and $dv = e^x\, dx$ (so $v = e^x$). Then
$$\int x e^x\, dx = x e^x - \int e^x\, dx = x e^x - e^x + C.$$
The new integral $\int e^x\, dx$ is trivial — a good sign the choice was right. Sometimes parts must be applied **twice** (e.g. $\int x^2 e^x\, dx$), and occasionally it produces the original integral again, which you solve algebraically.

Substitution and parts are the two workhorses: substitution for **compositions**, parts for **products**. Recognizing which structure an integral has is the first step in choosing the technique.

> **Common pitfall:** choosing $u$ and $dv$ **badly**, so the new integral $\int v\, du$ is _harder_ than the original. The goal is to make it simpler — pick $u$ to be the part that gets _simpler_ when differentiated (a polynomial eventually becomes a constant), following LIATE. Choosing $u = e^x$ in $\int x e^x\, dx$, for instance, leads nowhere; the right choice ($u = x$) makes the remaining integral trivial.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Formula builder)* Build the integration by parts formula: arrange the tokens to complete 'the integral of u dv equals ...'.

**2.** *(Ordering)* Order the steps of integration by parts.

**3.** *(Error highlight)* A student discusses integration by parts. Highlight the one incorrect sentence.

---

## Area Between Curves

A natural application of the definite integral is the **area between two curves**. If $f(x) \ge g(x)$ on $[a, b]$, the area of the region trapped between them is
$$A = \int_a^b \big(f(x) - g(x)\big)\, dx.$$
The idea generalizes the "area under a curve": each thin vertical strip has height (top curve minus bottom curve) and width $dx$, and integrating adds them all up. The key is always **top minus bottom** — the upper curve's function minus the lower one's, so the height is nonnegative.

The method:
1. **Find the intersection points** — solve $f(x) = g(x)$ to get the limits $a$ and $b$ where the region begins and ends.
2. **Determine which curve is on top** over each interval (they may swap; if so, split the integral at the crossing and take top-minus-bottom on each piece).
3. **Integrate** the difference.

Because you subtract $g$ from $f$, the answer is a genuine geometric **area** (always positive), even if part of the region lies below the $x$-axis — the axis is irrelevant when measuring between two curves. This is a crucial difference from a single definite integral (which is signed): between-curves area uses the _difference_ of the functions, sidestepping sign issues.

Sometimes it is easier to integrate with respect to $y$ (horizontal strips, right curve minus left) — a useful alternative when the curves are naturally functions of $y$. Either way, the principle is the same: integrate the width of the region across its extent.

> **Common pitfall:** integrating $f - g$ **without checking which curve is on top**, or forgetting that the curves may **cross** within the interval. The height must be **top minus bottom** (nonnegative); if you subtract in the wrong order you get a negative "area," and if the curves swap places inside $[a, b]$ you must **split** the integral at the crossing point and take top-minus-bottom on each piece separately.

Two curves crossing to enclose a lens-shaped region filled with accent vertical strips, each strip labeled top-minus-bottom, summing to the enclosed area.

$$A = \int_a^b \big(f(x) - g(x)\big)\, dx$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Ordering)* Order the steps for finding the area of the region enclosed between two curves.

**2.** *(Formula builder)* Build the formula for the area between two curves on an interval where they do not cross.

**3.** *(Error highlight)* A student explains area between curves. Highlight the one incorrect sentence.

---

## Volumes of Revolution

Integration extends from area to **volume**. A **solid of revolution** is formed by rotating a plane region about an axis — spinning a curve to sweep out a 3D shape (a sphere from a semicircle, a cone from a line). Its volume is found by slicing it into thin pieces whose volumes integrate up, exactly as areas were built from thin strips.

The **disk method** slices _perpendicular_ to the axis of rotation. Each slice is a thin **disk** of radius $r(x)$ (the distance from the axis to the curve) and thickness $dx$, with volume $\pi r(x)^2\, dx$. Integrating gives
$$V = \int_a^b \pi\, [r(x)]^2\, dx.$$
For a region rotated about the $x$-axis with $r(x) = f(x)$, this is $\int_a^b \pi f(x)^2\, dx$. If the region has a hole (rotated with a gap from the axis), the **washer method** subtracts the inner disk: $\pi(R^2 - r^2)$.

The **shell method** slices _parallel_ to the axis, into thin cylindrical **shells** of radius $x$, height $f(x)$, and thickness $dx$. Unrolling a shell gives volume $2\pi x\, f(x)\, dx$, so
$$V = \int_a^b 2\pi x\, f(x)\, dx.$$
Disks and shells are two ways to slice the _same_ solid; often one is far easier to set up than the other depending on the axis and the region.

The unifying idea — **slice, approximate each slice's volume, integrate** — is the same principle as Riemann sums, now in three dimensions. It also computes arc length, surface area, work, and center of mass: any quantity that accumulates over an extent is an integral of its infinitesimal pieces.

> **Common pitfall:** forgetting to **square the radius** in the disk method, or confusing the disk and shell setups. A disk's cross-sectional area is $\pi r^2$ (area of a circle), so its volume element is $\pi [r(x)]^2\, dx$ — the radius is **squared**. And disks slice _perpendicular_ to the axis while shells slice _parallel_; mixing up which method matches the geometry (or dropping the $2\pi x$ factor in shells) produces the wrong integral.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Formula builder)* Build the disk method formula for a volume of revolution.

**2.** *(Matrix grid)* Assign each description to the slicing method it belongs to.

**3.** *(Number line placement)* The region between y = 3 and y = 1, for x from 0 to 4, is rotated about the x-axis, giving a tube. Its volume equals k times pi. **Place the marker on k.

---

## Improper Integrals

An ordinary definite integral has finite limits and a bounded integrand. An **improper integral** relaxes one of these: either the **interval is infinite** (a limit is $\pm\infty$) or the **integrand becomes unbounded** (a vertical asymptote in the interval). Remarkably, such integrals can still yield a finite value — an infinite region with a finite area.

Improper integrals are defined as **limits** of proper ones. For an infinite upper limit:
$$\int_a^{\infty} f(x)\, dx = \lim_{b \to \infty} \int_a^b f(x)\, dx.$$
If the limit exists and is finite, the integral **converges** to that value; otherwise it **diverges**. The same limit device handles an integrand that blows up at an endpoint (approach the bad point with a limit).

The behavior can be surprising. Consider the family $\int_1^{\infty} \frac{1}{x^p}\, dx$:
- It **converges** when $p > 1$ (the tail shrinks fast enough).
- It **diverges** when $p \le 1$.
So $\int_1^{\infty} \frac{1}{x^2}\, dx = 1$ (finite!) but $\int_1^{\infty} \frac{1}{x}\, dx = \infty$ — even though both integrands go to zero, only the first decays quickly enough for a finite total. Convergence depends delicately on _how fast_ the function decays.

When an integral is hard to evaluate exactly, **comparison** settles convergence: if $0 \le f \le g$ and $\int g$ converges, then $\int f$ converges too (and if $\int f$ diverges, so does $\int g$). Improper integrals matter throughout probability (total probability over an infinite range), physics (fields extending to infinity), and the theory of series.

> **Common pitfall:** assuming that because the integrand **goes to zero**, the improper integral must **converge**. Decay to zero is necessary but not sufficient — $\frac{1}{x} \to 0$ yet $\int_1^{\infty}\frac{1}{x}\, dx$ **diverges**. Convergence depends on _how fast_ the function decays (for $\frac{1}{x^p}$, you need $p > 1$). Never conclude convergence from "the terms get small" alone; evaluate the limit or compare.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Matrix grid)* For each improper integral over the interval from 1 to infinity, decide whether it converges.

**2.** *(Table completion)* Complete the table for the family of integrals of 1/x^p from 1 to infinity.

**3.** *(Error highlight)* A student evaluates improper integrals. Highlight the one incorrect sentence.

---

## Introduction to Differential Equations

A **differential equation** relates a function to its **derivatives** — for example $\frac{dy}{dx} = 2y$, which says "the rate of change of $y$ equals twice $y$." Differential equations are the language of change: they describe how quantities evolve, and solving one means _finding the function_ that satisfies the relationship. They are arguably the most important application of calculus in science.

A **solution** is a function that satisfies the equation. Differential equations typically have a **family** of solutions (with a constant), reflecting the constant of integration; a specific **initial condition** (like $y(0) = 3$) pins down one particular solution. The **order** of a differential equation is that of the highest derivative appearing.

The simplest solvable type is a **first-order separable** equation, where the variables can be separated onto opposite sides:
$$\frac{dy}{dx} = g(x)h(y) \;\Rightarrow\; \frac{dy}{h(y)} = g(x)\, dx.$$
Then **integrate both sides** to find the solution. For the growth equation $\frac{dy}{dx} = ky$: separate to $\frac{dy}{y} = k\, dx$, integrate to $\ln|y| = kx + C$, and exponentiate to $y = y_0 e^{kx}$ — the exponential growth/decay law, derived directly.

This connects to earlier units: exponential growth ($\frac{dN}{dt} = kN$), radioactive decay, Newton's law of cooling ($\frac{dT}{dt} = -k(T - T_{env})$), and simple population models are all separable first-order equations solved by this integrate-both-sides method. Differential equations are where calculus becomes the engine of modeling the physical world.

> **Common pitfall:** forgetting that a differential equation has a **family** of solutions and that an **initial condition** is needed to select one — and dropping the **constant of integration** when solving. Integrating both sides of a separable equation introduces a $+C$ (the general solution is a family); only an initial condition fixes $C$ to give the one particular solution. Omitting $C$, or treating the general solution as a single function, loses the whole family.

A slope field of little accent tangent segments with one solution curve threading through them from an initial point, following the prescribed dy/dx at each location.

$$\frac{dy}{dx} = ky \;\Rightarrow\; y = y_0 e^{kx}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* What is the order of the differential equation y'' + 3y' = x?

**2.** *(Table completion)* Each equation below is solved subject to y(0) = 4. Complete the table.

**3.** *(Error highlight)* A student discusses differential equations. Highlight the one incorrect sentence.

---

## Applications of Integration

This closing lesson surveys how the integral — the accumulation of infinitesimal pieces — models totals across science. The unifying idea mirrors the derivative's: wherever a quantity **accumulates** over an extent (length, time, area), an integral computes the total.

**From rates to totals.** The integral undoes the derivative, so it recovers a total from a rate: integrating **velocity** over time gives **displacement**; integrating a **flow rate** gives total volume; integrating a **marginal cost** gives total cost. This is the Fundamental Theorem in action — accumulation is the inverse of rate.

**Physics.** **Work** is the integral of force over distance, $W = \int F\, dx$; the **center of mass** and **moment of inertia** are integrals of mass distributions; **electric and gravitational fields** integrate contributions over extended bodies. Any physical total built from infinitesimal contributions is an integral.

**Probability.** For a continuous random variable with **probability density** $f(x)$, the probability of landing in an interval is the **integral of the density** over that interval, and the total integral over all values is 1. The **mean** (expected value) is $\int x f(x)\, dx$. Continuous probability is fundamentally integral calculus — the normal distribution, exponential distribution, and all others are defined and used through integration.

**Geometry.** Area between curves, volumes of revolution, arc length, and surface area are all integrals of infinitesimal geometric pieces, as seen in this unit.

The overarching lesson pairs with differential calculus: the **derivative** breaks a total into its instantaneous rate, and the **integral** reassembles a total from its infinitesimal pieces. Together — linked by the Fundamental Theorem — they are the two complementary operations at the heart of all quantitative modeling.

> **Common pitfall:** viewing these applications — displacement, work, probability, geometry — as separate formulas rather than one idea. They are all the **integral** (accumulation of infinitesimal pieces) applied to different quantities: force over distance, density over an interval, area over a width. Recognizing the common "sum up the little pieces" structure is what lets you set up any of them; missing it makes each look like a formula to memorize.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A variable force F(x) = 6x newtons acts along a straight line from x = 0 to x = 4 metres. Compute the work done, in joules.

**2.** *(Table completion)* Complete the table of rates and the totals they accumulate to.

**3.** *(Numerical input)* A tap runs at r(t) = 2t litres per minute for t from 0 to 3 minutes. How many litres are delivered in total?

---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
