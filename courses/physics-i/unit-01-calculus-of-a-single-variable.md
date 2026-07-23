# Unit 1: Calculus of a Single Variable

## Functions, domains, and representations

A **function** assigns exactly one output to every input in its **domain**.

$$f : D \subseteq \mathbb{R} \;\longrightarrow\; \mathbb{R}$$

**Key ideas**

- The **domain** $D$ collects every $x$ for which $f(x)$ is defined. For $f(x)=\dfrac{1}{x-2}$ we need $x \neq 2$, so $D = \mathbb{R}\setminus\{2\}$.
- The **range** (or image) is the set of all values $f$ actually takes.
- The number sets nest: $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.

**Common representations**

| Form | Example |
|------|---------|
| Explicit | $y = 3x + 2$ |
| Implicit | $x^{2}+y^{2}=9$ |
| Parametric | $(x,y)=(\cos t,\;\sin t)$ |

**Symmetry check** — A function is **even** when $f(-x)=f(x)$ (symmetric about the $y$-axis) and **odd** when $f(-x)=-f(x)$ (symmetric about the origin).

> **Tip:** Always state the domain before computing. A formula without its domain is an incomplete model.

> **Common pitfall:** A formula without its domain is only half a function. $f(x) = 1/x$ and "$1/x$ for $x > 0$" are different mathematical objects with different properties.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Number line placement)* The function $f(x) = \dfrac{1}{x-2}$ is defined for every real number except one. **Place the marker on the excluded value.

**2.** *(Matching)* Match each function representation to its form.

**3.** *(Error highlight)* Highlight the incorrect statement regarding the domain of $f(x) = \sqrt{x - 3}$.

---

## Limits and continuity

The **limit** captures what value $f(x)$ *approaches* as $x$ gets arbitrarily close to a point $a$.

$$\lim_{x \to a} f(x) = L \;\;\Longleftrightarrow\;\; \forall\,\varepsilon>0,\;\exists\,\delta>0 :\; 0<|x-a|<\delta \implies |f(x)-L|<\varepsilon$$

**Types of limits**

- **Finite limit at a point:** $\lim_{x\to 3}\,(2x+1) = 7$.
- **Infinite limit:** $\lim_{x\to 0^{+}} \frac{1}{x} = +\infty$ (vertical asymptote).
- **Limit at infinity:** $\lim_{x\to\infty} \frac{1}{x} = 0$ (horizontal asymptote).

**Indeterminate forms** like $\tfrac{0}{0}$ or $\tfrac{\infty}{\infty}$ require algebraic manipulation (factoring, rationalising) or **L'Hôpital's rule** before the limit can be evaluated.

**Continuity** — $f$ is **continuous** at $a$ when three conditions hold simultaneously:

1. $f(a)$ exists.
2. $\lim_{x\to a} f(x)$ exists.
3. $\lim_{x\to a} f(x) = f(a)$.

> A function continuous on a closed interval $[a,b]$ is guaranteed to attain every value between $f(a)$ and $f(b)$ (**Intermediate Value Theorem**).

> **Common pitfall:** $\lim_{x\to a} f(x)$ is about the journey, not the destination: the limit can exist where $f(a)$ is undefined, and can differ from $f(a)$ where it is defined. Continuity is exactly the promise that they agree.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Interactive scene)* $\lim_{x\to 2} \frac{x^2-4}{x-2}$: the graph is hidden and the function is undefined AT $x=2$. Factor, then place the marker at the limit $L$.

**2.** *(Multiple choice)* A function satisfies $f(2) = 5$, but $\lim_{x\to 2} f(x) = 3$. What does the graph look like near $x = 2$?
   - A) The curve heads toward height 3, with a lone dot placed at height 5
   - B) The curve heads toward height 5, with a hole at height 3
   - C) The curve jumps from 3 up to 5 as $x$ crosses 2
   - D) Impossible — the limit must equal the value


**3.** *(Word search)* Find five key terms from the study of limits and continuity.

---

## Derivatives as local rate of change

The **derivative** of $f$ at $x$ is the limit of the difference quotient:

$$f'(x) \;=\; \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

**Geometric meaning** — $f'(a)$ is the **slope of the tangent line** to the curve at $(a,\,f(a))$.

**Physical meaning** — If $s(t)$ is position, then $s'(t)$ is **velocity** and $s''(t)$ is **acceleration**.

**Tangent-line equation**

 y - f(a) = f'(a)\,(x - a) 

This is also the best **linear approximation** of $f$ near $a$.

**Differentiability vs continuity**

- Differentiable $\Rightarrow$ Continuous.
- Continuous $\not\Rightarrow$ Differentiable (e.g., $|x|$ at $x=0$).

**Quick derivatives**

| $f(x)$ | $f'(x)$ |
|---------|----------|
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $e^{x}$ | $e^{x}$ |
| $\ln x$ | $1/x$ |

> **Tip:** The sign of $f'(x)$ tells you whether $f$ is **increasing** ($f'>0$) or **decreasing** ($f'<0$).

> **Common pitfall:** The derivative at a point is a **number** (a slope), while the derivative of a function is a new **function**. Confusing $f'(3)$ with $f'(x)$ muddles most early calculus errors.

The **derivative** $f'(x)$ measures the instantaneous rate of change of $f$ at $x$. Geometrically, it is the slope of the **tangent line**:

$$f'(x) = \lim_{h\to 0} \frac{f(x+h) - f(x)}{h}$$

Where $f'(x) > 0$ the function is increasing; where $f'(x) < 0$ it is decreasing; and $f'(x) = 0$ marks critical points.

> The tangent line is the best linear approximation to $f$ near the point of tangency.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the steps to compute f'(x) from the limit definition.

**2.** *(Crossword)* Solve the crossword using clues about derivatives.

**3.** *(Interactive scene)* For $f(x) = 0.4x^2$ the secant over $[1,\ 1+h]$ has slope $0.8 + 0.4h$. Set $h$ so the secant's slope is exactly **1.2**.

---

## Differentiation rules and composition

When functions are combined, we differentiate using three core rules.

**Product rule**

$$(u\,v)' = u'\,v + u\,v'$$

**Quotient rule**

$$\left(\frac{u}{v}\right)' = \frac{u'\,v - u\,v'}{v^{2}}$$

**Chain rule** — for composed functions $y = f(g(x))$:

$$\frac{dy}{dx} = f'\!\bigl(g(x)\bigr)\;\cdot\;g'(x)$$

**Worked example**

Differentiate $h(x) = e^{3x^{2}}$.

- Outer: $f(u)=e^{u}$, so $f'(u)=e^{u}$.
- Inner: $g(x)=3x^{2}$, so $g'(x)=6x$.
- Result: $h'(x) = 6x\,e^{3x^{2}}$.

**L'Hôpital's rule** — When a limit gives $\tfrac{0}{0}$ or $\tfrac{\infty}{\infty}$:

$$\lim_{x\to a}\frac{f(x)}{g(x)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}$$

provided the right-hand limit exists.

> **Strategy:** Always identify the **inner** and **outer** functions before applying the chain rule. Write them out explicitly to avoid sign and factor errors.

> **Common pitfall:** $(fg)' \ne f'g'$ and $(f/g)' \ne f'/g'$. Test any tempting rule on a trivial example like $f = g = x$ before trusting it — the fake product rule fails instantly.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Formula builder)* Build the **product rule**: arrange the tokens to express $\dfrac{d}{dx}\left[f(x)\,g(x)\right]$.

**2.** *(Matching)* Match each differentiation rule to its formula.

**3.** *(Error highlight)* Highlight the incorrect statement in the chain rule differentiation of $f(x) = (x^{2} + 1)^{3}$.

---

## Extrema and optimization

A **critical point** occurs where $f'(c) = 0$ or $f'(c)$ is undefined.

**First derivative test** — Track the sign of $f'$:

| $f'$ changes from | Conclusion at $c$ |
|---|---|
| $+$ to $-$ | **Local maximum** |
| $-$ to $+$ | **Local minimum** |
| no sign change | **Neither** (inflection) |

**Second derivative test** — When $f'(c)=0$:

$$f''(c) > 0 \;\Rightarrow\; \text{local minimum} \qquad f''(c) < 0 \;\Rightarrow\; \text{local maximum}$$

**Global extrema on** $[a,b]$ — Evaluate $f$ at every critical point *and* at both endpoints; the largest value is the **absolute maximum**, the smallest the **absolute minimum**.

**Mean Value Theorem**

If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, there exists $c\in(a,b)$ with

$$f'(c) = \frac{f(b)-f(a)}{b-a}$$

> **Physics link:** Minimising potential energy $U(x)$ to find the **equilibrium position** is a direct application of $U'(x)=0$.

> **Common pitfall:** $f'(c) = 0$ makes $c$ a candidate, not a winner: $x^{3}$ pauses flat at 0 mid-climb. And on closed intervals, the true extremes may hide at the **endpoints**, where the derivative never vanishes.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Interactive scene)* The curve $f(x) = 0.14x^3 - 1.05x$ is **hidden**. Solve $f'(x) = 0$ and place the marker at the local **maximum** — the curve is drawn only after you send.

**2.** *(Multiple choice)* $f'(c) = 0$ at an interior point $c$. A classmate concludes "$f$ has a max or min at $c$." What is the verdict?
   - A) Not necessarily — the graph can flatten momentarily and keep climbing, like $x^{3}$ at 0
   - B) Correct — zero slope always means a peak or valley
   - C) Correct, provided $f$ is continuous
   - D) Wrong — extrema require $f'(c)$ to be undefined


**3.** *(Word search)* Find five optimisation-related terms.

---

## Integrals as accumulation

The **definite integral** measures the signed area under a curve:

$$\int_{a}^{b} f(x)\,dx \;=\; \lim_{n\to\infty}\sum_{i=1}^{n} f(x_{i}^{*})\,\Delta x$$

**Riemann sums** — Partition $[a,b]$ into $n$ sub-intervals of width $\Delta x = \tfrac{b-a}{n}$, pick a sample point $x_i^*$ in each, and sum.

**Properties**

- **Linearity:**

$$\int_a^b [\alpha f + \beta g]\,dx = \alpha\int_a^b f\,dx + \beta\int_a^b g\,dx$$

- **Additivity:**

$$\int_a^c f\,dx = \int_a^b f\,dx + \int_b^c f\,dx$$

- **Average value:**

$$f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)\,dx$$

**Basic antiderivatives**

- $x^{n}$ → $\frac{x^{n+1}}{n+1}+C$ (for $n\neq -1$)
- $1/x$ → $\ln|x|+C$
- $e^{x}$ → $e^{x}+C$

> **Physics link:** Work done by a variable force is $W=\int_{a}^{b}F(x)\,dx$.

> **Common pitfall:** A definite integral is a signed number, not an area: regions below the axis count negative. "Total area enclosed" questions require splitting at the zero crossings first.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the steps in constructing a Riemann sum to define the definite integral.

**2.** *(Crossword)* Solve the crossword using integration clues.

**3.** *(Interactive scene)* A car starts at $v(0) = 4$ m/s and slows as $v(t) = 4 - t$. Place the time marker at the FIRST moment it has covered exactly **6 m** — the odometer is off until you send.

---

## Fundamental theorem of calculus

The **FTC** bridges differentiation and integration in two parts.

**Part 1 (Derivative of an integral)**

If $F(x) = \displaystyle\int_{a}^{x} f(t)\,dt$, then

 F'(x) = f(x) 

**Part 2 (Evaluation)**

If $F$ is *any* antiderivative of $f$ on $[a,b]$, then

$$\int_{a}^{b} f(x)\,dx = F(b) - F(a)$$

**Integration techniques**

- **Substitution:** Let $u=g(x)$, then $du=g'(x)\,dx$.
- **Integration by parts:** $\displaystyle\int u\,dv = uv - \int v\,du$.
- **Partial fractions:** Decompose rational integrands before integrating.

**Improper integrals** — When a limit of integration is $\pm\infty$ or the integrand is unbounded:

$$\int_{1}^{\infty}\frac{1}{x^{2}}\,dx = \lim_{R\to\infty}\left[-\frac{1}{x}\right]_{1}^{R} = 1$$

> **Key insight:** The FTC says that computing a definite integral reduces to finding *one* antiderivative and evaluating it at two points.

> **Common pitfall:** The two parts of the fundamental theorem point in different directions: one says accumulation functions have derivative $f$, the other evaluates integrals from antiderivatives. Keep straight which one a problem invokes.

The **Fundamental Theorem** has two parts that link differentiation and integration.

**Part I:** If $F(x) = \int_a^x f(t)\,dt$, then $F'(x) = f(x)$.

**Part II:**

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

where $F$ is any antiderivative of $f$.

> This theorem shows that differentiation and integration are **inverse operations** — the central idea of calculus.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(True false)* FTC Part 1 states: if $F(x)$ = $\int_a^x f(t) dt$ then $F'(x) = f(x)$.
   - True / False


**2.** *(Matching)* Match each FTC concept to its description.

**3.** *(Error highlight)* Highlight the incorrect step when evaluating $\int_{0}^{2} (x^{2} + 1) dx$.

---

## Differential models in one variable

A **differential equation** (DE) relates a function to its derivatives. In physics, DEs describe how systems evolve.

**Separable DEs**

$$\frac{dy}{dx} = g(x)\,h(y) \;\;\Longrightarrow\;\; \int\frac{dy}{h(y)} = \int g(x)\,dx$$

**Exponential growth / decay**

$$\frac{dN}{dt} = kN \;\;\Longrightarrow\;\; N(t) = N_0\,e^{kt}$$

- $k>0$: population growth, compound interest.
- $k<0$: radioactive decay, cooling.

**Newton's law of cooling**

$$\frac{dT}{dt} = -\lambda\,(T - T_{\text{env}})$$

Solution: $T(t) = T_{\text{env}} + (T_0 - T_{\text{env}})\,e^{-\lambda t}$.

**Initial conditions** — The constant $C$ from integration is fixed by a known state: $y(t_0)=y_0$.

**Step-by-step method**

1. Separate variables onto each side.
2. Integrate both sides.
3. Solve for $y$.
4. Apply the initial condition to find $C$.

> **Tip:** Always check units. If $[k]=\text{s}^{-1}$, then $kt$ is dimensionless, which is consistent with the exponent of $e$.

> **Common pitfall:** "Grows at a rate proportional to itself" gives $e^{kt}$ — but "grows at a constant rate" gives a straight line. Translating words to the wrong rate law dooms a model before any calculus happens.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Cloze bank)* Complete the description of a separable first-order ODE.

**2.** *(Multiple choice)* Money grows as $dP/dt = 0.05P$ (5% continuous interest). A friend says: "It grows by the same amount every year." What is the truth?
   - A) It grows by the same **percentage** each year — the absolute gain keeps increasing
   - B) The friend is right: linear growth of 5% of the initial deposit
   - C) It grows more slowly each year as the interest dilutes
   - D) It alternates between fast and slow years


**3.** *(Word search)* Find five differential equation terms.

---

## Graphs, approximation, and numerical sense

**Taylor polynomials** approximate a smooth function near a point $a$:

$$f(x) \approx P_n(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k$$

**Common Taylor expansions** (around $a=0$)

$$e^{x} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$$

**Euler's formula** links exponentials to trigonometry in the **complex plane** $\mathbb{C}$:

$$e^{i\theta} = \cos\theta + i\sin\theta$$

A complex number $z = a + bi$ can be written in **polar form** as $z = r\,e^{i\theta}$, where $r=|z|$ and $\theta=\arg(z)$.

**Graphical reading skills**

- **Concavity:** $f''>0$ means the curve bends upward; $f''<0$ means it bends downward.
- **Inflection point:** Where concavity changes sign.
- **Asymptotes:** Horizontal ($x\to\pm\infty$), vertical (denominator $\to 0$).

> **Key insight:** A Taylor polynomial of degree 1 is just the tangent line. Higher degrees capture curvature and beyond.

> **Common pitfall:** Linear approximation is a **local** promise: $\sqrt{16.4} \approx 4.05$ works beautifully, while using the same tangent line for $\sqrt{25}$ fails badly. Always ask how far you have drifted from the anchor point.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the steps in one iteration of Newton's method for root-finding.

**2.** *(Crossword)* Solve the crossword about approximation methods.

**3.** *(Interactive scene)* Newton's method on $f(x) = x^2 - 9$ from $x_0 = 5$: compute one step $x_1 = x_0 - f(x_0)/f'(x_0)$ and mark it on the axis.

---

## Integrated single-variable calculus problems

This lesson combines all tools — limits, derivatives, integrals, Taylor series, and complex numbers — into multi-step problem solving.

**Synthesis checklist**

1. **Model the system** — Translate the physical description into a function $f(x)$ with a clear domain.
2. **Differentiate** — Find critical points, rates of change, or slopes.
3. **Integrate** — Compute totals (area, work, accumulated quantity).
4. **Approximate** — Use Taylor polynomials when exact solutions are impractical.
5. **Validate** — Check units, signs, boundary behaviour, and limiting cases.

**Example: area between curves**

$$A = \int_{a}^{b}\bigl|f(x)-g(x)\bigr|\,dx$$

**Example: arc length**

$$L = \int_{a}^{b}\sqrt{1+\bigl(f'(x)\bigr)^{2}}\,dx$$

**Complex-number toolkit**

- **Modulus:** $|z| = \sqrt{a^{2}+b^{2}}$.
- **Conjugate:** $\overline{z} = a - bi$, so $z\,\overline{z}=|z|^{2}$.
- **Roots of unity:** The $n$-th roots of 1 are $e^{2\pi i k/n}$, $k=0,\ldots,n-1$.

> **Strategy:** When facing a multi-step problem, sketch the function first. A good graph reveals domain restrictions, symmetry, and the location of extrema — all before you compute a single derivative.

> **Common pitfall:** In applied problems the hardest step is not the calculus but the setup: naming variables, writing the constraint, identifying what is being extremized or accumulated. If the setup is wrong, perfect differentiation cannot save it.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Venn diagram)* Sort each function by its behaviour **at $x = 0$**.

**2.** *(Matching)* Match each calculus concept to its definition.

**3.** *(Error highlight)* Highlight the incorrect guideline for solving a related-rates problem.

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
