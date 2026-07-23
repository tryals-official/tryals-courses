# Unit 9: Calculus

## Limits and Continuity

Calculus is built on the **limit** — the value a function _approaches_ as its input approaches some point, even if the function is never actually evaluated there. We write $\lim_{x \to a} f(x) = L$ to say "as $x$ gets arbitrarily close to $a$, $f(x)$ gets arbitrarily close to $L$." Crucially, the limit is about the _approach_, not the value _at_ $a$ — the function might be undefined at $a$ yet still have a limit there.

A subtlety is **one-sided limits**: the value approached from the left ($x \to a^-$) may differ from the value approached from the right ($x \to a^+$). The (two-sided) limit exists only when both sides agree. A jump in the graph is exactly a case where the two one-sided limits differ, so no limit exists.

**Continuity** captures "no breaks in the graph." A function $f$ is continuous at $a$ when three things all hold:
1. $f(a)$ is defined,
2. $\lim_{x \to a} f(x)$ exists, and
3. the two are equal: $\lim_{x \to a} f(x) = f(a)$.

Intuitively, you can draw a continuous function without lifting your pen. Polynomials are continuous everywhere; a function with a hole, jump, or vertical asymptote is discontinuous there. Continuity matters because the powerful theorems of calculus (and reliable numerical computation) depend on it.

> **Common pitfall:** confusing the **limit** of a function at a point with its **value** at that point. $\lim_{x \to a} f(x)$ can exist even when $f(a)$ is undefined or different — the limit ignores the single point $a$ and looks only at nearby behavior. Continuity is precisely the special case where the limit and the value _agree_; assuming they always agree erases the whole point of a limit.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Table completion)* Let f(x) = (x^2 - 4) / (x - 2). The function is undefined at x = 2. Complete the table of values approaching 2 from both sides.

**2.** *(Multi select)* Select every condition that must hold for f to be continuous at the point a.
   - [ ] f(a) is defined
   - [ ] the limit of f(x) as x approaches a exists
   - [ ] the limit of f(x) as x approaches a equals f(a)
   - [ ] f(a) = 0
   - [ ] f is a polynomial


**3.** *(Ordering)* Order the steps of testing whether f is continuous at the point a.

---

## Derivatives and Rates of Change

The **derivative** measures how fast a function is changing at a single instant. It is defined as a limit of **average rates of change** over shrinking intervals:
$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}.$$
The fraction is the slope between two points on the curve; as $h \to 0$ the two points merge and the slope becomes the **slope of the tangent line** at $x$. So the derivative has two equivalent meanings: an **instantaneous rate of change** and a **tangent slope**.

The intuition is everywhere. If $f(t)$ is position, $f'(t)$ is **velocity** — the rate position changes. If $f$ is cost, $f'$ is marginal cost. If $f$ is a smooth curve, $f'(x)$ tells you how steeply it rises or falls at each point:
- $f'(x) > 0$ — the function is **increasing** there.
- $f'(x) < 0$ — the function is **decreasing** there.
- $f'(x) = 0$ — the tangent is **horizontal** (a peak, valley, or flat spot).

The notation varies: $f'(x)$, $\frac{df}{dx}$, and $\frac{dy}{dx}$ all mean the same derivative. The requirement is that the defining limit exists — a function with a sharp corner or a jump is **not differentiable** there, because the slope has no single value. Differentiability is stronger than continuity: every differentiable function is continuous, but not vice versa (a corner is continuous yet not differentiable).

> **Common pitfall:** confusing the **derivative** (a rate/slope) with the **function value**, and misreading the sign. $f'(x)$ is not $f(x)$ — a function can be large while barely changing (small derivative) or near zero while changing fast (large derivative). And $f'(x) = 0$ means the function is momentarily _flat_, **not** that $f(x) = 0$; the derivative being zero is about the slope, not the height.

A curve with a secant line through two points; the second point slides toward the first, the accent secant rotating into the tangent line as h shrinks to zero — the derivative as a limit of slopes.

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* For f(x) = x^2, compute the average rate of change between x = 3 and x = 3.5.

**2.** *(Matrix grid)* A smooth function has the derivative values listed. Classify what the function is doing at each point.

**3.** *(Cloze bank)* Complete the relationship between differentiability and continuity.

---

## Differentiation Rules

Rather than evaluate the limit definition every time, a handful of **rules** compute derivatives mechanically. Mastering them turns differentiation into routine algebra.

The basic rules:
- **Power rule** — $\frac{d}{dx} x^n = n\, x^{n-1}$. Bring the exponent down and reduce it by one. So $\frac{d}{dx} x^3 = 3x^2$.
- **Constant multiple** — $\frac{d}{dx}(c\,f) = c\, f'$; constants factor out.
- **Sum rule** — the derivative of a sum is the sum of the derivatives.

The two rules for combining functions are where care is needed:
- **Product rule** — $(fg)' = f'g + f g'$. The derivative of a product is _not_ the product of the derivatives; you must add the two "one factor differentiated at a time" terms.
- **Quotient rule** — $\left(\frac{f}{g}\right)' = \frac{f'g - f g'}{g^2}$. Note the _minus_ sign and the order.
- **Chain rule** — for a composition $f(g(x))$, the derivative is $f'(g(x)) \cdot g'(x)$: differentiate the outer function (leaving the inner alone), then _multiply_ by the derivative of the inner. This "outer times inner" rule is the most important and most error-prone.

Standard derivatives round out the toolkit: $\frac{d}{dx}\sin x = \cos x$, $\frac{d}{dx}e^x = e^x$ (its own derivative), and $\frac{d}{dx}\ln x = \frac{1}{x}$. With these plus the four combination rules, you can differentiate essentially any elementary function.

> **Common pitfall:** thinking the derivative of a **product** is the product of the derivatives, or forgetting the **chain rule** on a composition. $(fg)' = f'g + fg'$, _not_ $f'g'$. And for $f(g(x))$ you must multiply by $g'(x)$ — e.g. $\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x$, not just $\cos(x^2)$. Omitting the inner derivative is the single most common differentiation mistake.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Table completion)* Apply the power rule, the constant multiple rule and the sum rule. Complete the derivatives.

**2.** *(Numerical input)* Let f(x) = x^2 and g(x) = x + 1. Using the product rule, compute the derivative of f(x) g(x) at x = 2.

**3.** *(Error highlight)* A student lists the differentiation rules. Highlight the one incorrect statement.

---

## Applications of Derivatives

One of the most useful things derivatives do is **optimisation** — finding where a quantity is largest or smallest. Because the tangent is horizontal at a peak or a valley, the derivative is **zero** at these interior extreme points. This turns "find the maximum" into "solve $f'(x) = 0$."

The systematic method:
1. Find the **critical points** — where $f'(x) = 0$ (or where the derivative does not exist).
2. **Classify** each: a **maximum**, a **minimum**, or neither.
3. On a closed interval, also check the **endpoints**, since the extreme value can occur there even when the derivative is not zero.

To classify a critical point, use the derivative's sign or the second derivative:
- **First-derivative test** — if $f'$ changes from $+$ to $-$ at the point, it is a **local maximum** (rising then falling); from $-$ to $+$, a **local minimum**.
- **Second-derivative test** — the **second derivative** $f''$ measures concavity. $f'' > 0$ means the curve is **concave up** (cup-shaped, so a critical point there is a minimum); $f'' < 0$ means **concave down** (a maximum). Where $f''$ changes sign is an **inflection point**.

This is the mathematical core of a vast range of computing: training a machine-learning model _minimises_ a loss function, resource allocation _maximises_ utility, and countless engineering designs optimise some objective. Gradient descent (next lessons' multivariable version) is exactly "follow the derivative downhill to a minimum."

> **Common pitfall:** assuming every point with $f'(x) = 0$ is a maximum or minimum, and forgetting the **endpoints**. A zero derivative marks a _critical point_, but it could be an **inflection point** (like $x^3$ at 0, which is neither a max nor a min) — you must classify it. And on a closed interval the true extreme may sit at an **endpoint**, where the derivative need not be zero, so checking only $f'(x)=0$ can miss the actual maximum.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Let f(x) = x^2 - 6x + 5. At which value of x is the critical point?

**2.** *(Table completion)* Let f(x) = x^3 - 3x, so f'(x) = 3x^2 - 3 and f''(x) = 6x. Complete the table and classify each critical point.

**3.** *(Error highlight)* A student explains optimisation. Highlight the one incorrect statement.

---

## Integration and Antiderivatives

**Integration** is, in one of its two guises, the _reverse_ of differentiation. An **antiderivative** of $f$ is a function $F$ whose derivative is $f$: $F'(x) = f(x)$. If differentiation asks "what is the rate of change?", antidifferentiation asks "what function has this rate of change?" — recovering position from velocity, or total from marginal.

A key subtlety: antiderivatives are not unique. Since the derivative of any constant is zero, if $F$ is an antiderivative then so is $F + C$ for _any_ constant $C$. So the **indefinite integral** carries a **constant of integration**:
$$\int f(x)\, dx = F(x) + C.$$
Forgetting the $+C$ is the classic omission — the constant encodes that infinitely many functions share the same derivative, differing only by a vertical shift.

The rules reverse the differentiation rules:
- **Power rule for integration** — $\int x^n\, dx = \frac{x^{n+1}}{n+1} + C$ (for $n \neq -1$). Raise the exponent by one and divide by the new exponent — the opposite of the derivative power rule.
- **Constant multiple** and **sum** rules carry over: constants factor out, and the integral of a sum is the sum of the integrals.
- Reversing standard derivatives: $\int \cos x\, dx = \sin x + C$, $\int e^x\, dx = e^x + C$, and $\int \frac{1}{x}\, dx = \ln|x| + C$ (the $n = -1$ case the power rule excludes).

More involved integrals use techniques like **substitution** (reversing the chain rule) and **integration by parts** (reversing the product rule), but the power rule plus the standard forms handle a great many cases.

> **Common pitfall:** forgetting the **constant of integration** $+C$, and misapplying the integration power rule. Every indefinite integral needs $+C$, because antiderivatives are unique only up to a constant. And the integral power rule _raises_ the exponent and divides ($\int x^n = \frac{x^{n+1}}{n+1}$) — the reverse of the derivative rule; using the derivative pattern (bringing the power down) for integration is a common slip.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Table completion)* Reverse each differentiation rule. Complete the antiderivatives, omitting the constant of integration in the table.

**2.** *(Matrix grid)* Match each integrand to the form of its antiderivative.

**3.** *(Multi select)* Select every function below that is an antiderivative of f(x) = 2x.
   - [ ] x^2
   - [ ] x^2 + 7
   - [ ] x^2 - 3
   - [ ] 2
   - [ ] x^3 / 3


---

## The Definite Integral and Area

The **definite integral** $\int_a^b f(x)\, dx$ is the second face of integration: it measures the **accumulated area** between the curve $y = f(x)$ and the $x$-axis, from $x = a$ to $x = b$. Where the derivative was about instantaneous rates, the definite integral is about _totals_ — the total distance from a velocity, the total accumulated from a rate.

The definition is a limit of **Riemann sums**: slice the interval $[a, b]$ into $n$ thin rectangles of width $\Delta x$, each with height $f(x_i)$ given by the curve. The sum of rectangle areas $\sum f(x_i)\,\Delta x$ approximates the region, and as the slices get thinner ($n \to \infty$) the approximation becomes exact:
$$\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i)\,\Delta x.$$
This is why the integral sign $\int$ is an elongated "S" for "sum."

Two important features:
- **Signed area.** Where $f(x)$ is _below_ the axis (negative), its contribution is _negative_. The definite integral gives net signed area, so regions below the axis subtract.
- **A number, not a function.** Unlike the indefinite integral (a family of functions with $+C$), the definite integral is a single **number** — there is no constant of integration.

Numerically, Riemann sums (and refinements like the trapezoidal rule and Simpson's rule) are exactly how computers evaluate integrals that have no closed form — a cornerstone of scientific computing.

> **Common pitfall:** treating the definite integral as always giving the _geometric_ (positive) area, and confusing it with the indefinite integral. The definite integral is **signed** — area below the axis counts as negative, so a symmetric curve can integrate to zero even though it encloses real area. And a definite integral is a single **number** (no $+C$), unlike the indefinite integral, which is a family of functions.

The area under a curve approximated by rectangles that grow thinner and more numerous, the accent shaded region converging to the exact integral, with a below-axis lobe shaded to subtract.

$$\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i)\,\Delta x$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Approximate the area under f(x) = x^2 from x = 0 to x = 4 using four rectangles of width 1 whose heights are taken at the LEFT endpoint of each strip. What is the total?

**2.** *(Numerical input)* Compute the definite integral of f(x) = x from x = -2 to x = 2, remembering that the integral counts signed area.

**3.** *(Cloze bank)* Complete the formula for the strip width in a Riemann sum.

---

## The Fundamental Theorem of Calculus

So far integration has worn two faces — **antiderivatives** (reversing differentiation) and **definite integrals** (accumulated area). The **Fundamental Theorem of Calculus (FTC)** reveals that these are two sides of one coin. It is arguably the most important theorem in calculus, uniting the subject's two halves.

The theorem has two parts:
- **Part 1** — if you define an area-accumulating function $F(x) = \int_a^x f(t)\, dt$, then its derivative is the original function: $F'(x) = f(x)$. In words, _the derivative of the accumulated area is the height of the curve_. Differentiation and integration undo each other.
- **Part 2** (the evaluation rule) — to compute a definite integral, find _any_ antiderivative $F$ and take the difference at the endpoints:
$$\int_a^b f(x)\, dx = F(b) - F(a).$$

Part 2 is the practical powerhouse. It means you don't need Riemann sums to evaluate an integral exactly — just find an antiderivative and subtract its endpoint values. For example, $\int_0^2 x\, dx = \left[\frac{x^2}{2}\right]_0^2 = 2 - 0 = 2$, matching the triangle's area, with no summation at all.

Conceptually, the FTC says **accumulation and rate-of-change are inverse operations**. This is why velocity integrates to displacement, why a rate integrates to a total, and why the whole edifice of calculus hangs together. The two operations you learned separately are revealed as one.

> **Common pitfall:** in Part 2, subtracting the endpoints in the **wrong order**, or forgetting it applies to the _definite_ integral only. The rule is $F(b) - F(a)$ — the _upper_ limit minus the _lower_ limit; reversing them flips the sign. And the $+C$ of the antiderivative does not matter here (it cancels in the subtraction), which is why _any_ antiderivative works.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Use the evaluation rule to compute the definite integral of f(x) = x^2 from x = 0 to x = 3.

**2.** *(Flow chart)* This flow chart shows how the Fundamental Theorem turns a definite integral into arithmetic. Fill in the missing boxes.

**3.** *(Cloze bank)* Complete the statement of the first part of the theorem.

---

## Sequences and Series

A **sequence** is an ordered infinite list of numbers $a_1, a_2, a_3, \dots$; a **series** is what you get by _adding_ a sequence's terms: $\sum_{n=1}^{\infty} a_n$. The central question is **convergence** — does adding infinitely many terms approach a finite total, or grow without bound?

A sequence **converges** to a limit $L$ if its terms get arbitrarily close to $L$ (e.g. $\frac{1}{n} \to 0$). A series converges if its **partial sums** $S_N = a_1 + \dots + a_N$ approach a finite limit as $N \to \infty$. Remarkably, an infinite sum of positive terms can be finite:
$$\sum_{n=0}^{\infty} \frac{1}{2^n} = 1 + \tfrac12 + \tfrac14 + \tfrac18 + \dots = 2.$$
This is a **geometric series** $\sum r^n$, which converges precisely when $|r| < 1$, to the neat sum $\frac{1}{1 - r}$ (starting from $n = 0$).

A necessary warning sign: if the terms $a_n$ do _not_ shrink to zero, the series **cannot converge** (the **term test**). But shrinking to zero is _not sufficient_ — the classic **harmonic series** $\sum \frac{1}{n}$ has terms going to zero yet **diverges** (grows without bound). Convergence is subtler than "terms get small," and mathematicians use tests (comparison, ratio, integral) to decide it.

Series are foundational in computing: they define functions (next lesson's Taylor series), analyze algorithm running times (summing costs across recursion levels), and underlie numerical methods. Knowing whether and how fast a series converges is a practical, not just theoretical, concern.

> **Common pitfall:** assuming that if the terms $a_n \to 0$ the series must converge. That is **false** — the harmonic series $\sum \frac{1}{n}$ has terms going to zero yet diverges. Terms shrinking to zero is _necessary_ but _not sufficient_ for convergence. (The valid one-way rule is the contrapositive: if the terms do _not_ go to zero, the series definitely diverges.)

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Pattern sequence)* The partial sums of the series 1 + 1/2 + 1/4 + 1/8 + ... are listed in order. Fill the gap.

**2.** *(Category sort)* Sort each series by whether it converges.

**3.** *(Cloze bank)* Complete the correct statement of the term test.

---

## Taylor Series and Approximation

Computers cannot directly evaluate $\sin x$, $e^x$, or $\ln x$ — these are defined by limits, not arithmetic. The resolution is **Taylor series**: any smooth function can be approximated (often exactly represented) by a **polynomial** built from its derivatives at a single point. Since polynomials need only addition and multiplication, this is _how_ calculators and libraries actually compute these functions.

The **Taylor series** of $f$ about a point $a$ is
$$f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f'''(a)}{3!}(x - a)^3 + \dots$$
Each term uses a higher derivative and a higher power. Intuitively: the constant term matches the function's _value_, the linear term matches its _slope_, the quadratic term matches its _curvature_, and so on — each term correcting the approximation a little more. Truncating after a few terms gives a **Taylor polynomial** that hugs the function near $a$.

The special case $a = 0$ (a **Maclaurin series**) gives famously clean expansions:
$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$
and similar series for $\sin x$ and $\cos x$. Keeping more terms improves accuracy; the **linear approximation** $f(x) \approx f(a) + f'(a)(x-a)$ (just the first two terms) is the simplest and is the basis of Newton's method and many numerical algorithms.

The key idea for computing: **replace a hard function by an easy polynomial that matches it locally**. The approximation is best _near_ the expansion point $a$ and generally degrades as you move away — so choosing a good center, and enough terms, is a practical trade-off between accuracy and cost.

> **Common pitfall:** expecting a truncated Taylor polynomial to be accurate _far_ from the expansion point. A Taylor polynomial matches the function best **near** the center $a$ and its error typically grows as $|x - a|$ increases — a few terms good near $a$ can be wildly wrong far away. More terms extend the accurate region but never make a finite polynomial match everywhere; the approximation is fundamentally _local_.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* The Maclaurin series for e^x begins 1 + x + x^2/2 + ... Keeping only those three terms, estimate e^1.

**2.** *(Numerical input)* Use the linear approximation of f(x) = the square root of x about the point a = 4, where f(4) = 2 and f'(4) = 0.25, to estimate the square root of 4.4.

**3.** *(Error highlight)* A student explains Taylor series. Highlight the one incorrect statement.

---

## Multivariable Calculus and Gradients

Real problems depend on _many_ variables — a machine-learning model's error depends on thousands of parameters. **Multivariable calculus** extends derivatives to functions like $f(x, y)$ of several inputs, and its central tool, the **gradient**, is the engine behind modern machine learning.

A **partial derivative** measures the rate of change with respect to _one_ variable while holding the others fixed. For $f(x, y)$, the partial $\frac{\partial f}{\partial x}$ is the ordinary derivative treating $y$ as a constant, and $\frac{\partial f}{\partial y}$ treats $x$ as constant. Each partial is a slope along one axis.

The **gradient** $\nabla f$ collects all the partials into a vector: $\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right)$. Its meaning is geometric and powerful: the gradient **points in the direction of steepest increase** of $f$, and its magnitude is how steep that increase is. At a maximum or minimum, the gradient is the **zero vector** — the multivariable analogue of $f'(x) = 0$.

This drives **gradient descent**, the workhorse optimisation algorithm: to _minimise_ a function, repeatedly step in the direction _opposite_ the gradient (steepest _descent_), by a small **learning-rate** amount, until the gradient is near zero. Training a neural network is gradient descent on a loss function of millions of parameters; the gradients themselves are computed by the chain rule (backpropagation). Everything in this unit — derivatives, the chain rule, optimisation — culminates here in the mathematics that powers modern AI.

> **Common pitfall:** taking a partial derivative without **holding the other variables constant**, and mistaking the direction of **gradient descent**. When differentiating $\frac{\partial f}{\partial x}$, every other variable is treated as a _constant_, not as another thing to differentiate. And gradient _descent_ moves **opposite** the gradient (the gradient points _uphill_, toward steepest increase) — stepping _along_ the gradient would _maximise_, not minimise, the function.

A contour map of a bowl with the accent gradient arrow at a point pointing uphill (steepest increase) and a descent step arrow pointing the opposite way toward the central minimum.

$$\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right)$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Let f(x, y) = 3x^2 y + y^3. Compute the partial derivative with respect to x at the point (2, 1).

**2.** *(Grid path)* A loss surface is sampled on a 4 by 4 grid. Reading the heights row by row from the top: the first row is 9, 8, 7, 6; the second is 9, blocked, 6, 5; the third is 9, 9, blocked, 4; the fourth is 9, 9, 9, 3. The blocked cells cannot be entered. Starting at the top-left cell and moving only up, down, left or right, trace the route to the bottom-right cell along which the height strictly decreases at every step.

**3.** *(Cloze bank)* Complete the update rule of gradient descent.

---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
