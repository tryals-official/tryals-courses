# Unit 5: Differential Calculus

## Limits

The **limit** is the foundational idea of calculus. It describes the value a function _approaches_ as its input approaches some point — regardless of, and often different from, the value _at_ that point. We write
$$\lim_{x \to a} f(x) = L$$
to mean: as $x$ gets arbitrarily close to $a$ (but not equal to it), $f(x)$ gets arbitrarily close to $L$. The phrase "but not equal" is essential — the limit examines the _neighborhood_ of $a$, ignoring the single point $a$ itself.

**One-sided limits** approach from a single direction: $x \to a^-$ (from the left) and $x \to a^+$ (from the right). The two-sided limit **exists only when both one-sided limits exist and agree**. A jump in the graph is precisely where they disagree, so the limit fails to exist there.

Limits shine on **indeterminate forms** — expressions like $\frac{0}{0}$ that have no immediate value. Consider $\lim_{x \to 2}\frac{x^2 - 4}{x - 2}$: direct substitution gives $\frac{0}{0}$, but factoring the numerator as $(x-2)(x+2)$ and cancelling leaves $x + 2$, whose limit at 2 is 4. The function is undefined _at_ $x = 2$, yet the limit exists — a perfect illustration that the limit ignores the point itself.

Limits obey clean **algebraic rules**: the limit of a sum, product, or quotient is the sum, product, or quotient of the limits (provided each exists, and denominators are nonzero). These let you compute most limits by substitution, resorting to algebraic tricks only for indeterminate forms. Limits also formalize **continuity**, the **derivative**, and the **integral** — everything in calculus is built on them.

> **Common pitfall:** believing $\lim_{x \to a} f(x)$ must equal $f(a)$, or that a $\frac{0}{0}$ form means the limit does not exist. The limit ignores the point $a$ — it can exist even when $f(a)$ is undefined or different. And $\frac{0}{0}$ is **indeterminate**, not "no limit": it signals that algebra (factoring, cancelling) is needed to find the true limiting value, which often exists.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Compute the limit of $(x^{2} - 9)/(x - 3)$ as x approaches 3.

**2.** *(Matrix grid)* Let f(x) be the absolute value of x divided by x, defined for every x other than 0. Give the value of each limit.

**3.** *(Multi select)* Select every TRUE statement about limits.
   - [ ] A limit can exist at a point where the function is undefined
   - [ ] The form 0/0 means the limit does not exist
   - [ ] If the left and right limits differ, the two-sided limit does not exist
   - [ ] The limit of a sum is the sum of the limits, when both limits exist
   - [ ] The limit as x approaches a always equals f(a)


---

## Continuity

A function is **continuous** at a point $a$ when its value and its limit agree there — no jump, no hole, no gap. Formally, three conditions must all hold:
1. $f(a)$ is **defined**,
2. $\lim_{x \to a} f(x)$ **exists**, and
3. they are **equal**: $\lim_{x \to a} f(x) = f(a)$.

Intuitively, you can draw a continuous function through $a$ without lifting your pen. A function continuous at _every_ point of an interval is continuous _on_ that interval. Polynomials, $\sin$, $\cos$, and exponentials are continuous everywhere; sums, products, and compositions of continuous functions are continuous.

When continuity fails, the **discontinuity** has a type:
- **Removable** — a single hole; the limit exists but $f(a)$ is missing or misplaced (fixable by redefining one point).
- **Jump** — the one-sided limits exist but differ; the graph leaps.
- **Infinite** — the function blows up to $\pm\infty$ (a vertical asymptote).

Continuity powers two cornerstone theorems on a closed interval $[a, b]$:
- The **Intermediate Value Theorem**: a continuous function takes every value between $f(a)$ and $f(b)$. So if $f$ changes sign on $[a, b]$, it must have a **root** in between — the basis of the bisection method for solving equations.
- The **Extreme Value Theorem**: a continuous function on a closed, bounded interval attains a **maximum** and a **minimum** — guaranteeing that optimization problems have solutions.

These theorems fail without continuity, which is why continuity is a prerequisite in so much of analysis.

> **Common pitfall:** thinking a function is continuous merely because its **limit exists** at a point. Continuity requires _all three_ conditions — the value $f(a)$ must exist _and equal_ the limit. A **removable discontinuity** (a hole) has a perfectly good limit yet is _not_ continuous, because $f(a)$ is missing or does not match. Existence of the limit is necessary but not sufficient.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* The function $(x^{2} - x - 6)/(x - 3)$ has a removable discontinuity at x = 3. What value must be assigned to it at x = 3 to make it continuous there?

**2.** *(Ordering)* Order the checks that establish continuity of f at the point a.

**3.** *(Multi select)* f is continuous on the closed interval from 0 to 4. Select every statement that MUST be true.
   - [ ] f attains a maximum value on that interval
   - [ ] f attains a minimum value on that interval
   - [ ] f takes every value between f(0) and f(4)
   - [ ] f has a root somewhere in the interval
   - [ ] f is differentiable on the interval


---

## The Derivative

The **derivative** measures how fast a function changes at an instant. It is defined as the limit of **average rates of change** over shrinking intervals:
$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}.$$
The fraction is the slope of the **secant line** through two points on the graph; as $h \to 0$ those points merge and the secant becomes the **tangent line**. So the derivative has two equivalent meanings: the **instantaneous rate of change** of $f$, and the **slope of the tangent** at $x$.

The sign of the derivative reads off the function's behavior:
- $f'(x) > 0$ — the function is **increasing** there.
- $f'(x) < 0$ — the function is **decreasing** there.
- $f'(x) = 0$ — the tangent is **horizontal** (a candidate peak, valley, or flat spot).

Notation varies but means the same thing: $f'(x)$, $\frac{df}{dx}$, $\frac{dy}{dx}$, and $Df$. The requirement for the derivative to exist is that the defining limit exists — the function must be **differentiable** at $x$.

Differentiability is **stronger than continuity**: every differentiable function is continuous, but not conversely. A **sharp corner** (like $|x|$ at 0) is continuous yet _not_ differentiable, because the left and right slopes disagree — the secant slope has no single limit. Likewise a vertical tangent or a discontinuity blocks differentiability. So smoothness (differentiability) implies no breaks (continuity), but no breaks does not imply smoothness.

> **Common pitfall:** confusing the **derivative** (a rate/slope) with the **function value**, or reading $f'(x) = 0$ as $f(x) = 0$. $f'(x)$ is the slope, not the height — a function can be large while barely changing, or near zero while changing fast. And $f'(x) = 0$ means the graph is momentarily **flat** at $x$, not that its value is zero.

A curve with a secant through two points; the second slides toward the first, the accent secant rotating into the tangent as h shrinks to zero — the derivative as a limit of slopes.

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* Let $f(x) = x^{2}$ and take the point x = 3. Complete the table of difference quotients, that is, of (f(3 + h) - f(3))/h.

**2.** *(Venn diagram)* Two properties at the point x = 0: being continuous there, and being differentiable there. Place each function.

**3.** *(Ordering)* Order the steps of computing f'(x) for $f(x) = x^{2}$ from the limit definition.

---

## Differentiation Rules

Evaluating the limit definition each time is impractical. A handful of **rules** make differentiation routine algebra.

The basic rules:
- **Power rule** — $\frac{d}{dx}x^n = n\,x^{n-1}$: bring the exponent down, reduce it by one. So $\frac{d}{dx}x^3 = 3x^2$.
- **Constant multiple** — $\frac{d}{dx}(c f) = c f'$; constants factor out.
- **Sum rule** — the derivative of a sum is the sum of the derivatives.

The rules for _combining_ functions require care:
- **Product rule** — $(fg)' = f'g + fg'$. The derivative of a product is _not_ the product of the derivatives; you add the two "differentiate one factor at a time" terms.
- **Quotient rule** — $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$. Note the _minus_ sign and the order.
- **Chain rule** — for a composition $f(g(x))$, the derivative is $f'(g(x))\cdot g'(x)$: differentiate the outer function (leaving the inner alone), then _multiply_ by the derivative of the inner. This "outer times inner" rule is the most important and the most error-prone.

Standard derivatives complete the toolkit: $\frac{d}{dx}\sin x = \cos x$, $\frac{d}{dx}\cos x = -\sin x$, $\frac{d}{dx}e^x = e^x$ (its own derivative), and $\frac{d}{dx}\ln x = \frac{1}{x}$. With these plus the four combination rules, essentially any elementary function can be differentiated.

> **Common pitfall:** treating the derivative of a **product** as the product of derivatives, or dropping the inner factor in the **chain rule**. $(fg)' = f'g + fg'$, _not_ $f'g'$. And for $f(g(x))$ you must multiply by $g'(x)$: $\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x$, not just $\cos(x^2)$. Forgetting the inner derivative is the single most common differentiation error.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* Complete the table of standard derivatives.

**2.** *(Numerical input)* Let $f(x) = (3x + 1)^{4}$. Compute f'(1).

**3.** *(Multi select)* Select every derivative below that is CORRECT.
   - [ ] the derivative of x to the seventh is 7 x to the sixth
   - [ ] the derivative of sin(x squared) is cos(x squared)
   - [ ] the derivative of cos x is -sin x
   - [ ] the derivative of (x squared)(x cubed) is 2x times 3 x squared
   - [ ] the derivative of ln x is 1/x


---

## Higher Derivatives and Concavity

Differentiating a derivative gives the **second derivative** $f''(x)$ — the rate of change _of the rate of change_. If $f$ is position, $f'$ is velocity and $f''$ is **acceleration**. Higher derivatives ($f'''$, and so on) continue the pattern, each measuring the change of the one before.

The second derivative reveals **concavity** — how a curve bends:
- $f''(x) > 0$ — the curve is **concave up** (cup-shaped, holds water); the slope is _increasing_.
- $f''(x) < 0$ — the curve is **concave down** (cap-shaped, spills water); the slope is _decreasing_.

A point where concavity **changes sign** is an **inflection point** — the curve switches from bending one way to the other. At an inflection point $f''$ is zero (or undefined), but the reverse is not guaranteed: $f'' = 0$ is necessary, not sufficient, for an inflection (concavity must actually _change_).

Concavity gives the **second-derivative test** for classifying critical points (where $f'(x) = 0$):
- $f''(x) > 0$ at a critical point $\Rightarrow$ **local minimum** (bottom of a cup).
- $f''(x) < 0$ at a critical point $\Rightarrow$ **local maximum** (top of a cap).
- $f''(x) = 0$ $\Rightarrow$ the test is **inconclusive**; fall back on the first-derivative sign test.

Together, the first derivative (increasing/decreasing, critical points) and the second (concavity, inflections) determine a curve's full shape, which is the heart of **curve sketching** and of optimization in the next lesson.

> **Common pitfall:** assuming that $f''(x) = 0$ **guarantees** an inflection point. A zero second derivative is only a _candidate_ — an inflection requires the concavity to actually **change sign** across the point. For example $f(x) = x^4$ has $f''(0) = 0$, yet it is concave up on both sides, so $x = 0$ is _not_ an inflection point. Always check that concavity switches.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* Let $f(x) = x^{4} - 4x^{3}$. Complete the table of derivatives and their values at x = 1.

**2.** *(Matrix grid)* Let $f(x) = x^{3}$, so f''(x) = 6x. Classify the curve at each point.

**3.** *(Multi select)* Let c be a critical point of f, so f'(c) = 0. Select every correct conclusion.
   - [ ] If f''(c) > 0 then c is a local minimum
   - [ ] If f''(c) < 0 then c is a local maximum
   - [ ] If f''(c) = 0 then c is an inflection point
   - [ ] If f''(c) = 0 the second-derivative test gives no verdict
   - [ ] f''(c) > 0 means the curve is concave up at c


---

## Optimization and Extrema

**Optimization** — locating maxima and minima — is one of calculus's most powerful applications. Because a smooth function's tangent is horizontal at an interior peak or valley, the derivative is **zero** at these extreme points. This converts "find the maximum" into "solve $f'(x) = 0$."

The systematic method for a function on an interval:
1. Find the **critical points** — where $f'(x) = 0$ or where $f'$ is undefined.
2. **Classify** each as a local maximum, local minimum, or neither.
3. On a **closed interval** $[a, b]$, also evaluate the **endpoints**, since the extreme value may occur there even when the derivative is not zero.

Two tests classify a critical point:
- **First-derivative test** — examine the sign of $f'$ around the point: $+$ to $-$ marks a **local maximum** (rising then falling); $-$ to $+$ a **local minimum**.
- **Second-derivative test** — at a critical point, $f'' > 0$ gives a minimum (concave up), $f'' < 0$ a maximum (concave down); $f'' = 0$ is inconclusive.

The distinction between **local** and **global** (absolute) extrema matters: a local extremum is best only in its neighborhood; the global extremum is best over the whole domain. On a closed, bounded interval, the global max and min are found by comparing all critical-point values with the endpoint values — the largest and smallest among them.

Optimization is everywhere: minimizing cost or error, maximizing area or profit, finding the least-material design. Setting a derivative to zero to find the best choice is one of the most-used ideas in all of applied mathematics.

> **Common pitfall:** assuming every point with $f'(x) = 0$ is a max or min, and **forgetting the endpoints**. A zero derivative marks a _critical point_, but it could be an **inflection/saddle** (like $x^3$ at 0, neither a max nor a min) — you must classify it. And on a closed interval the true (global) extreme may sit at an **endpoint**, where the derivative need not vanish; checking only $f'(x) = 0$ can miss the actual maximum.

A curve on a closed interval with accent horizontal tangents at interior peaks and valleys, plus the two endpoints flagged, and the tallest of all points circled as the global maximum.

$$f'(x) = 0 \text{ at interior extrema; check endpoints too}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Let $f(x) = x^{2} - 8x + 3$ on the closed interval from 0 to 6. What is the global MINIMUM value of f on that interval?

**2.** *(Matrix grid)* Each point below is a critical point. Classify it using the second-derivative test or by direct inspection.

**3.** *(Multi select)* Select every TRUE statement about maxima and minima.
   - [ ] Every point with f'(x) = 0 is a local maximum or minimum
   - [ ] The first-derivative test reads a local maximum from f' going from positive to negative
   - [ ] On a closed bounded interval, a continuous function attains a global maximum and minimum
   - [ ] A global extremum on a closed interval can occur at an endpoint where f' is not zero
   - [ ] If f'' = 0 at a critical point, that point is neither a maximum nor a minimum


---

## Related Rates and Implicit Differentiation

Not every relationship is written as $y = f(x)$. An **implicit** relation like $x^2 + y^2 = 25$ (a circle) defines $y$ in terms of $x$ without solving for it. **Implicit differentiation** finds $\frac{dy}{dx}$ anyway: differentiate _both sides_ with respect to $x$, treating $y$ as a function of $x$ and applying the **chain rule** to every $y$-term (so $\frac{d}{dx}y^2 = 2y\frac{dy}{dx}$), then solve for $\frac{dy}{dx}$. For the circle, $2x + 2y\frac{dy}{dx} = 0$, giving $\frac{dy}{dx} = -\frac{x}{y}$. This handles curves that are not functions and relations too tangled to solve explicitly.

The same chain-rule idea powers **related rates**: when several quantities change over _time_ and are linked by an equation, their _rates_ are linked too. Differentiate the relating equation **with respect to time** $t$, and every variable contributes a rate ($\frac{d}{dt}$). Given some rates, you solve for an unknown one.

The standard method:
1. Write the equation relating the quantities.
2. Differentiate **both sides with respect to $t$** (chain rule on every variable).
3. Substitute the known values and rates, and solve for the unknown rate.

For example, if a balloon's volume $V = \frac{4}{3}\pi r^3$ inflates at a known $\frac{dV}{dt}$, differentiating gives $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$, linking the volume rate to the radius rate. Related rates are the calculus of "how fast does _this_ change when _that_ changes," essential in physics and engineering.

> **Common pitfall:** forgetting the **chain rule** on the dependent variable — differentiating $y^2$ as $2y$ instead of $2y\frac{dy}{dx}$, or a time-varying term without its $\frac{d}{dt}$ factor. Because $y$ (or every quantity in a related-rates problem) is itself changing, each such term carries an extra derivative factor ($\frac{dy}{dx}$ or $\frac{dr}{dt}$). Omitting it is the defining error of implicit and related-rate differentiation.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* For the circle $x^{2} + y^{2} = 25$, implicit differentiation gives dy/dx = -x/y. Compute dy/dx at the point (3, 4).

**2.** *(Table completion)* Differentiate each expression with respect to x, treating y as a function of x.

**3.** *(Multi select)* y is a function of x. Select every derivative with respect to x that is CORRECT.
   - [ ] the derivative of y to the fourth is 4 y cubed dy/dx
   - [ ] the derivative of (x squared)(y) is 2xy + x squared dy/dx
   - [ ] the derivative of sin y is cos y
   - [ ] the derivative of y is dy/dx
   - [ ] the derivative of x y squared is y squared + 2xy


---

## Taylor Approximation

Complicated functions like $\sin x$, $e^x$, or $\ln x$ can be approximated near a point by **polynomials** built from their derivatives. Since polynomials use only addition and multiplication, this is how such functions are actually computed, and it is a central tool of analysis.

The simplest case is the **linear (tangent-line) approximation**:
$$f(x) \approx f(a) + f'(a)(x - a),$$
the value plus the slope times the displacement — literally the tangent line at $a$. It is excellent for $x$ near $a$ and is the basis of Newton's method and differentials.

The **Taylor polynomial** improves accuracy by adding higher-derivative terms:
$$f(x) \approx f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots$$
Each term corrects the fit a little more: the constant matches the **value**, the linear term the **slope**, the quadratic the **curvature**, and so on. The special case $a = 0$ (a **Maclaurin** series) gives clean expansions like $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$.

The key practical facts:
- **More terms** generally improve accuracy and widen the region where the approximation is good.
- The approximation is **local** — most accurate _near_ the expansion point $a$, degrading as $|x - a|$ grows.
- The **remainder** (error) can be bounded, telling you how many terms you need for a desired accuracy.

Taylor approximation replaces a hard function by an easy polynomial that matches it locally — the workhorse behind numerical computation, physics approximations, and much of applied analysis.

> **Common pitfall:** expecting a truncated Taylor polynomial to be accurate **far** from the expansion point. The approximation matches $f$ best **near** the center $a$, and the error typically grows as $|x - a|$ increases — a few terms good near $a$ can be wildly wrong far away. More terms widen the accurate region but a finite polynomial never matches everywhere; the approximation is fundamentally **local**.

A smooth curve with successive Taylor polynomials (degree 1, 2, 3) overlaid, each accent curve hugging the function over a wider region near the center point as the degree increases.

$$f(x) \approx f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Use the linear approximation of $f(x) = x^{2}$ at a = 2 to estimate f(2.1).

**2.** *(Formula builder)* Build the linear (tangent-line) approximation of f near the point a.

**3.** *(Multi select)* Select every TRUE statement about Taylor approximation.
   - [ ] The approximation is most accurate near the centre a
   - [ ] Adding more terms generally improves accuracy
   - [ ] A finite Taylor polynomial matches f exactly everywhere
   - [ ] The linear approximation is the tangent line at a
   - [ ] A Maclaurin series is a Taylor series centred at a = 0


---

## Curve Sketching

**Curve sketching** brings the whole differential toolkit together: from a formula alone, produce an accurate graph by systematically extracting each feature. It is the ultimate exercise in reading what the derivatives say.

The checklist:
- **Domain and intercepts** — where the function is defined, and where it crosses the axes ($x$-intercepts at $f(x) = 0$, the $y$-intercept at $f(0)$).
- **Asymptotes** — vertical (where $f \to \pm\infty$, often at zeros of a denominator) and horizontal (the limit as $x \to \pm\infty$), the lines the graph approaches.
- **Increasing/decreasing** — from the sign of $f'$: positive means rising, negative means falling.
- **Local extrema** — at critical points ($f'(x) = 0$), classified by the first- or second-derivative test.
- **Concavity and inflections** — from the sign of $f''$: positive is concave up, negative concave down, sign changes are inflection points.
- **Symmetry** — even functions ($f(-x) = f(x)$) are symmetric about the $y$-axis; odd functions ($f(-x) = -f(x)$) about the origin.

Working through this list turns the abstract formula into a picture: the first derivative gives the "up-and-down" skeleton (where it rises, falls, and turns), and the second derivative gives the "bending" refinement (where it cups up or down). Together they pin down the shape between the intercepts and asymptotes.

Curve sketching is not just an exercise — it is how one _understands_ a function's behavior, spots its important features, and communicates them. The habit of asking "what do $f'$ and $f''$ tell me here?" is the essence of differential calculus applied.

> **Common pitfall:** relying on the **first derivative alone** and ignoring the **second**. The first derivative tells you where the function rises and falls and locates the turning points, but only the second derivative reveals **concavity** and **inflection points** — the bending that distinguishes, say, a gentle rise from an accelerating one. A sketch built from $f'$ alone gets the up-and-down right but the _shape_ wrong; both derivatives are needed.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Numerical input)* Let $f(x) = x^{3} - 3x^{2}$. Apart from x = 0, at which x does the graph cross the x-axis?

**2.** *(Matrix grid)* For $f(x) = x^{3} - 3x^{2}$, with f'(x) = 3x(x - 2) and f''(x) = 6x - 6, classify the curve at each point.

**3.** *(Multi select)* Let $f(x) = (x + 1)/(x - 3)$. Select every TRUE statement about its graph.
   - [ ] There is a vertical asymptote at x = 3
   - [ ] The y-intercept is -1/3
   - [ ] The x-intercept is at x = -1
   - [ ] The horizontal asymptote is the line y = 0
   - [ ] The horizontal asymptote is the line y = 1


---

## Applications of Differentiation

This closing lesson surveys how the derivative — a single idea, the instantaneous rate of change — models an astonishing range of phenomena. Wherever something _changes_, a derivative describes _how fast_.

**Motion.** If $x(t)$ is position, then $x'(t)$ is **velocity** and $x''(t)$ is **acceleration**. All of kinematics is derivatives of position, and Newton's second law $F = ma$ links force to the _second_ derivative — the reason calculus and physics grew up together.

**Growth and decay.** Many quantities change at a rate proportional to their current amount: $\frac{dN}{dt} = kN$. This differential equation models **exponential growth** ($k > 0$: populations, compound interest) and **decay** ($k < 0$: radioactivity, cooling), with solution $N = N_0 e^{kt}$ — the derivative determining the whole trajectory.

**Optimization.** Setting a derivative to zero finds the best choice: minimum cost, maximum profit, least material, shortest time. From economics (marginal cost is a derivative) to engineering design, "differentiate and set to zero" is ubiquitous.

**Approximation and numerics.** The linear approximation underlies **Newton's method** for solving equations (repeatedly stepping along the tangent to a root) and **differentials** for error estimation. Marginal analysis in economics — marginal cost, marginal revenue — is exactly the derivative of the total.

The unifying insight is that the derivative converts a _static_ description (a formula) into a _dynamic_ one (rates and change), and that rates in turn determine behavior over time. Mastering differentiation means being able to ask, of any changing system, "what is its rate, and what does that rate imply?" — which is the language of nearly all quantitative science.

> **Common pitfall:** seeing these applications — motion, growth, optimization, marginal analysis — as separate topics rather than one idea. They are all the **derivative** (instantaneous rate of change) applied to different quantities: velocity is the rate of position, marginal cost is the rate of total cost, growth rate is the rate of a population. Missing the common thread makes each look like a new technique when it is one concept reused.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/mathematics-i)

**1.** *(Table completion)* A particle has position $s(t) = t^{3} - 6t^{2} + 9t$, so its velocity is 3 t squared - 12t + 9 and its acceleration is 6t - 12. Complete the table.

**2.** *(Matrix grid)* Match each derivative to the quantity it measures.

**3.** *(Multi select)* The model $N = N_{0}e^{kt}$ solves dN/dt = kN. Select every TRUE statement.
   - [ ] A positive k gives growth
   - [ ] A negative k gives decay
   - [ ] The rate dN/dt is proportional to the current amount N
   - [ ] N_0 is the amount present at time zero
   - [ ] The rate dN/dt stays constant over time


---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
