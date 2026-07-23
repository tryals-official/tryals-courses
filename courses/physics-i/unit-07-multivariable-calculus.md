# Unit 7: Multivariable Calculus

## Functions of Several Variables

A **function of several variables** maps a point in $\mathbb{R}^n$ to a real number:

$$f : \mathbb{R}^n \to \mathbb{R}, \qquad z = f(x, y)$$

**Key concepts**

- The **domain** is the set of points $(x,y)$ where $f$ is defined.
- A **level curve** is the set $\{(x,y) : f(x,y) = c\}$ for a constant $c$.
- Level curves are like contour lines on a topographic map — they show where the function has the same value.

**Limits and continuity** — The limit $\lim_{(x,y)\to(a,b)} f(x,y) = L$ exists only if $f$ approaches $L$ along **every** path to $(a,b)$.

**Testing for non-existence:** find two paths that give different limits.

| Path | Substitute | Result |
|------|-----------|--------|
| $y = 0$ | $f(x,0)$ | Limit along $x$-axis |
| $y = x$ | $f(x,x)$ | Limit along diagonal |
| $y = x^{2}$ | $f(x,x^{2})$ | Limit along parabola |

If any two paths give different values, the limit **does not exist**.

> **Tip:** In $\mathbb{R}^{1}$, there are only two directions to approach a point. In $\mathbb{R}^{2}$, there are infinitely many — this is why multivariable limits are harder.

> **Common pitfall:** Level curves never cross: each point has exactly one function value. Densely packed contours mean steep terrain — reading contour spacing as "value" instead of "slope" inverts the map’s message.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* The domain of $f(x,y) = \sqrt{1 - x^{2} - y^{2}}$ is the closed unit disk $x^{2}$ + $y^{2} \leq 1$.
   - True / False


**2.** *(Matching)* Match each surface to its equation.

**3.** *(Error highlight)* Find the error: 'The level curves of $f(x,y) = x^{2} + y^{2}$ are parabolas.'

---

## Partial Derivatives

A **partial derivative** measures how $f$ changes when one variable moves while the others are held fixed.

$$\frac{\partial f}{\partial x} = \lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}$$

**Notation**

$$f_x = \frac{\partial f}{\partial x}, \qquad f_y = \frac{\partial f}{\partial y}, \qquad f_{xy} = \frac{\partial^2 f}{\partial y\,\partial x}$$

**Clairaut's theorem** — If $f_{xy}$ and $f_{yx}$ are both continuous, then:

 f_{xy} = f_{yx} 

**Geometric interpretation**

- $f_x(a,b)$ is the slope of $f$ at $(a,b)$ in the $x$-direction.
- $f_y(a,b)$ is the slope of $f$ at $(a,b)$ in the $y$-direction.

**Example** — For $f(x,y) = x^{2}y + 3xy^{2}$:

 f_x = 2xy + 3y^2, \qquad f_y = x^2 + 6xy 

```python
from sympy import symbols, diff
x, y = symbols('x y')
f = x**2 * y + 3*x * y**2
print("f_x =", diff(f, x))
print("f_y =", diff(f, y))
```

> **Key insight:** Partial derivatives reduce a multivariable problem to a single-variable one by treating all other variables as constants.

> **Common pitfall:** $\partial f/\partial x$ freezes every other variable — it answers a deliberately narrow question. The real-world change of $f$ when several inputs move at once is the chain rule’s job, not a single partial’s.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* Point the arrow in the direction of steepest **ascent** — exactly perpendicular to the contour through the point, uphill.

**2.** *(Multiple choice)* The temperature in a room is $T(x, y, z, t)$. What experiment does $\partial T/\partial x$ describe?
   - A) Walk along $x$ with a thermometer while everything else is frozen, and record the rate of change
   - B) Watch the temperature change over time at a fixed spot
   - C) Measure the total temperature change while walking in any direction
   - D) Average the temperature along the $x$-axis


**3.** *(Word search)* Find five partial derivative terms.

---

## The Chain Rule and Directional Derivatives

**Multivariable chain rule** — If $z = f(x,y)$ where $x = x(t)$ and $y = y(t)$:

$$\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

More generally, if $x = x(s,t)$ and $y = y(s,t)$:

$$\frac{\partial z}{\partial s} = f_x\frac{\partial x}{\partial s} + f_y\frac{\partial y}{\partial s}$$

**The gradient** collects all partial derivatives into one vector:

$$\nabla f = \left(\frac{\partial f}{\partial x},\;\frac{\partial f}{\partial y}\right)$$

**Directional derivative** — The rate of change of $f$ in direction $\hat{u}$:

$$D_{\hat{u}}f = \nabla f \cdot \hat{u} = |\nabla f|\cos\theta$$

**Key properties of the gradient**

| Property | Statement |
|----------|-----------|
| Direction of steepest ascent | $\nabla f$ |
| Maximum rate of change | $|\nabla f|$ |
| Perpendicular to level curves | $\nabla f \perp \{f = c\}$ |
| Zero directional derivative | When $\hat{u} \perp \nabla f$ |

> **Physics link:** Temperature gradient $\nabla T$ points from cold to hot. Heat flows in the opposite direction: $\vec{q} = -k\nabla T$ (Fourier's law).

> **Common pitfall:** The directional derivative needs a **unit** vector: $D_{\vec{u}}f = \nabla f \cdot \hat{u}$. Feeding it an unnormalized direction silently scales the answer by that vector’s length.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps to compute a directional derivative Dᵤ$f(a,b)$.

**2.** *(Crossword)* Solve the crossword about the chain rule and directional derivatives.

**3.** *(Interactive scene)* $z = xy$ with $x = 2t$, $y = t^2$. Compute $dz/dt$ at $t = 1$ — two paths feed into $z$; add both contributions.

---

## Optimization: Critical Points and Lagrange Multipliers

**Finding extrema** of $f(x,y)$:

1. Compute $\nabla f = (f_x, f_y)$.
2. Solve $\nabla f = \vec{0}$ to find **critical points**.
3. Classify using the **second derivative test**.

**Second derivative test** — At a critical point $(a,b)$, define:

 D = f_{xx}f_{yy} - (f_{xy})^2 

| Condition | Classification |
|-----------|---------------|
| $D > 0$, $f_{xx} > 0$ | Local minimum |
| $D > 0$, $f_{xx} < 0$ | Local maximum |
| $D < 0$ | Saddle point |
| $D = 0$ | Inconclusive |

**Lagrange multipliers** — To optimise $f(x,y)$ subject to $g(x,y) = 0$:

$$\nabla f = \lambda\,\nabla g \qquad\text{and}\qquad g(x,y) = 0$$

The scalar $\lambda$ is the **Lagrange multiplier**. It measures how sensitive the optimum is to changes in the constraint.

**Geometric meaning:** At the optimum, the level curves of $f$ and $g$ are **tangent** — their gradients are parallel.

> **Tip:** Always check boundary behaviour too. Lagrange multipliers find constrained critical points, but the global optimum might occur at an endpoint.

> **Common pitfall:** $\nabla f = 0$ finds flat points, but in two variables flat includes **saddles** — max in one direction, min in another. The second-derivative test (via the Hessian determinant) is what separates peaks, pits and passes.

To optimise $f(x,y)$ subject to a constraint $g(x,y) = c$, the **method of Lagrange multipliers** requires:

$$\nabla f = \lambda\,\nabla g$$

At the optimum, the level curve of $f$ is **tangent** to the constraint curve $g = c$. The multiplier $\lambda$ measures how much the optimum changes if the constraint is relaxed.

> This method converts a constrained problem into a system of equations — no substitution or parameterisation needed.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* At a critical point of $f(x,y)$, both $f_{x} = 0$ and fᵧ = 0.
   - True / False


**2.** *(Matching)* Match each second derivative test outcome to the classification.

**3.** *(Error highlight)* Find the error: 'If D < 0 at a critical point, the point is a local minimum.'

---

## Double Integrals

A **double integral** computes the volume under $z = f(x,y)$ over $R$:

$$\iint_R f(x,y)\,dA$$

**Iterated integrals** — Evaluate one variable at a time:

$$\iint_R f\,dA = \int_a^b\int_{g_1(x)}^{g_2(x)} f\,dy\,dx$$

**Fubini's theorem** — If $f$ is continuous on $R$, integrate in either order.

**Applications**

- **Area:** $\iint_R 1\,dA$
- **Average value:** $\bar{f} = \frac{1}{\text{Area}(R)}\iint_R f\,dA$
- **Mass:** $M = \iint_R \rho\,dA$
- **Centre of mass:** $\bar{x} = \frac{1}{M}\iint_R x\rho\,dA$

Sketch $R$ and choose the integration order that gives simpler limits.

> **Key insight:** The key skill is setting up the correct limits of integration.

> **Common pitfall:** In iterated integrals the **inner limits may depend on the outer variable, never the reverse**. Writing $\int_0^{y}\ldots$ as the outer integral is the classic setup error — sketch the region first.

The double integral $\iint_R f(x,y)\,dA$ computes the **signed volume** between the surface $z = f(x,y)$ and the $xy$-plane over region $R$.

To evaluate, integrate iteratively:

$$\iint_R f\,dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f\,dy\,dx$$

The base region $R$ determines the limits. Choosing the right order can greatly simplify the calculation.

> Double integrals generalize single-variable integrals to two variables — the key is correct limits.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* Evaluate $\iint_R x\, dA$ over $R = [0,2]\times[0,3]$ and set the volume dial.

**2.** *(Multiple choice)* Rain falls with varying intensity $r(x,y)$ over a city. What does $\iint_{city} r(x,y)\,dA$ compute?
   - A) The total volume of water landing on the city per unit time
   - B) The average rainfall intensity
   - C) The area of the city
   - D) The peak rainfall intensity


**3.** *(Word search)* Find five double integral terms.

---

## Triple Integrals

$$\iiint_E f(x,y,z)\,dV$$

**Evaluation** — Iterate from outside in:

$$\int_a^b\int_{g_1}^{g_2}\int_{h_1}^{h_2} f\,dz\,dy\,dx$$

**Applications**

- **Volume:** $\iiint_E 1\,dV$
- **Mass:** $M = \iiint_E \rho\,dV$
- **Moment of inertia** ($z$-axis):

 I_z = \iiint_E (x^2+y^2)\rho\,dV 

**Setting up limits:**

1. Sketch the region $E$.
2. Project onto a coordinate plane for the outer limits.
3. For each $(x,y)$, find the $z$-range.

**Example** — Sphere $x^{2}+y^{2}+z^{2} \leq R^{2}$: $V = \frac{4}{3}\pi R^{3}$.

> **Tip:** If the region has symmetry, switch coordinates before integrating.

> **Common pitfall:** Reversing the order of integration is not swapping the limit expressions — the region must be re-described from scratch. The picture, not the algebra, dictates the new limits.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps to evaluate a triple integral ∭_E f dV.

**2.** *(Crossword)* Solve the crossword about triple integrals.

**3.** *(Cloze bank)* Complete the statement with the correct term.

---

## Polar, Cylindrical, and Spherical Coordinates

Choosing the right coordinate system simplifies integration dramatically.

**Polar coordinates** $(r, \theta)$ in $\mathbb{R}^{2}$:

$$x = r\cos\theta, \quad y = r\sin\theta, \quad dA = r\,dr\,d\theta$$

**Cylindrical coordinates** $(r, \theta, z)$ in $\mathbb{R}^{3}$:

$$x = r\cos\theta, \quad y = r\sin\theta, \quad z = z, \quad dV = r\,dr\,d\theta\,dz$$

**Spherical coordinates** $(\rho, \theta, \phi)$ in $\mathbb{R}^{3}$:

$$x = \rho\sin\phi\cos\theta, \quad y = \rho\sin\phi\sin\theta, \quad z = \rho\cos\phi$$

$$dV = \rho^2\sin\phi\,d\rho\,d\phi\,d\theta$$

**When to use each**

| Symmetry | Coordinate system |
|----------|------------------|
| Circular (2D) | Polar |
| Cylindrical (pipe, disk) | Cylindrical |
| Spherical (ball, cone) | Spherical |

**Example** — Volume of a sphere of radius $R$:

$$V = \int_0^{2\pi}\int_0^{\pi}\int_0^R \rho^2\sin\phi\,d\rho\,d\phi\,d\theta = \frac{4}{3}\pi R^3$$

> **Physics link:** Gravitational and electric potentials have spherical symmetry. The Laplacian $\nabla^{2}$ in spherical coordinates is essential for solving Laplace's and Poisson's equations.

> **Common pitfall:** Spherical convention clash: mathematicians and physicists swap the names of $\theta$ and $\varphi$. Check which angle runs from the pole (0 to $\pi$) before copying any formula between sources.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* In cylindrical coordinates, the volume element is $dV = r$ dr d$\theta dz$.
   - True / False


**2.** *(Matching)* Match each coordinate system to its volume element.

**3.** *(Error highlight)* Find the error: 'In spherical coordinates, the volume element is $dV = \rho^{2} \cos \varphi d\rho d\varphi d\theta$.'

---

## Change of Variables and the Jacobian

A **change of variables** transforms an integral into a more convenient coordinate system.

**General formula** — If $T : (u,v) \mapsto (x,y)$ maps $S$ to $R$:

$$\iint_R f(x,y)\,dA = \iint_S f(x(u,v),y(u,v))\;|J|\;du\,dv$$

where $J$ is the **Jacobian determinant**:

$$J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}$$

**Common Jacobians**

- **Polar** $(r,\theta)$: $|J| = r$
- **Cylindrical** $(r,\theta,z)$: $|J| = r$
- **Spherical** $(\rho,\phi,\theta)$: $|J| = \rho^{2}\sin\phi$

The Jacobian measures how the transformation **scales area** (or volume).

> **Key insight:** The Jacobian generalises the substitution rule $dx = g'(u)\,du$ to multiple variables.

> **Common pitfall:** Changing variables without the Jacobian silently rescales all areas and volumes: polar needs $r$, spherical needs $\rho^{2}\sin\varphi$. If your disk integral came out as $2\pi R$ instead of $\pi R^{2}$, the missing $r$ is the culprit.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* A polar patch at $r = 2$ with $dr = 0.5$ and $d\theta = 0.5$ rad: set its area. Careful — it is NOT $dr \times d\theta$.

**2.** *(Multiple choice)* When you switch a double integral to polar coordinates, $dA$ becomes $r\,dr\,d\theta$ — not just $dr\,d\theta$. What does that extra $r$ pay for?
   - A) Area cells far from the origin are physically bigger — a $d\theta$ sweep covers an arc of length $r\,d\theta$
   - B) It converts degrees to radians
   - C) It corrects for the origin being excluded
   - D) It is a convention with no geometric meaning


**3.** *(Word search)* Find five change-of-variables terms.

---

## Green's Theorem

$$\oint_C (P\,dx + Q\,dy) = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA$$

where $C$ is a positively oriented, simple, closed curve bounding $D$.

**When to use**

- Line integral is hard, curl expression is simple → double integral
- Double integral is hard, boundary is simple → line integral

**Area formulas**

- $A = \oint_C x\,dy$
- $A = -\oint_C y\,dx$
- $A = \frac{1}{2}\oint_C (x\,dy - y\,dx)$

**Connection to curl** — The integrand is the $z$-component of $\nabla\times\vec{F}$ for $\vec{F} = (P, Q, 0)$.

> **Key insight:** Green's theorem is Stokes' theorem in $\mathbb{R}^{2}$.

> **Common pitfall:** Green’s theorem requires a **closed** curve, positive (counterclockwise) orientation, and a field smooth throughout the enclosed region. A single interior singularity — a vortex at the origin — breaks the equality outright.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps to apply Green's theorem ∮_C (P dx + Q dy) = ∬_D ($\partial Q/\partial x$ − $\partial P/\partial y$) dA.

**2.** *(Crossword)* Solve the crossword about Green's theorem.

**3.** *(Cloze bank)* Complete the statement with the correct term.

---

## Problem-Solving: Multivariable Calculus

Multivariable calculus problems require matching the right technique to the structure of the problem.

**Decision guide**

| Task | Tool |
|------|------|
| Rate of change in a direction | Directional derivative $D_{\hat{u}}f$ |
| Find extrema of $f$ | $\nabla f = 0$ + second derivative test |
| Optimise with constraint | Lagrange multipliers |
| Integrate over a region | Double/triple integral |
| Circular/spherical symmetry | Change to polar/spherical coordinates |
| Line integral of conservative field | $\phi(B) - \phi(A)$ |
| Closed-curve line integral | Green's theorem |

**Problem-solving checklist**

1. **Sketch** the region or curve.
2. **Identify** the symmetry — choose coordinates accordingly.
3. **Set up** the integral with correct limits before computing.
4. **Verify** dimensions and limiting cases.

```python
import numpy as np
from scipy import integrate
def f(y, x):
    return x**2 + y**2
result, _ = integrate.dblquad(f, 0, 1, 0, 1)
print(f"Integral of x^{2}+y^{2} over [0,1]x[0,1] = {result:.4f}")
```

**Common mistakes**

- Wrong order of limits in iterated integrals.
- Forgetting the Jacobian factor ($r$, $\rho^{2}\sin\phi$) when changing coordinates.
- Applying Green's theorem to a non-closed curve.

> **Tip:** Before computing, ask: is there a symmetry argument that makes the integral zero or reduces it? Exploit symmetry first, compute second.

> **Common pitfall:** In multivariable problems, the decisive move happens before any integration: choosing coordinates that fit the region’s symmetry. Fighting a sphere with Cartesian limits is a self-inflicted wound.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* Fubini's theorem allows changing the order of integration in a double integral when the integrand is continuous.
   - True / False


**2.** *(Matching)* Match each problem type to the best multivariable technique.

**3.** *(Error highlight)* Find the error: 'To find the area enclosed by $r = 2 \cos \theta$, integrate $A =  \int_{0}^{2\pi} 2 \cos \theta d\theta$.'

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
