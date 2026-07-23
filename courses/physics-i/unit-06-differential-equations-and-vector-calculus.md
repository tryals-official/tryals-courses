# Unit 6: Differential Equations and Vector Calculus

## First-Order Differential Equations

A **first-order ODE** has the general form:

$$\frac{dy}{dx} = f(x, y)$$

**Separable equations** — If $f(x,y) = g(x)\,h(y)$:

$$\int \frac{dy}{h(y)} = \int g(x)\,dx$$

**Linear first-order** — Form $y' + P(x)y = Q(x)$:

$$y = \frac{1}{\mu}\int \mu\,Q\,dx, \quad \mu = e^{\int P\,dx}$$

**Example** — Radioactive decay: $dN/dt = -\lambda N \implies N = N_0 e^{-\lambda t}$

**Common types**

- **Separable** $y' = g(x)h(y)$: separate variables
- **Linear** $y' + Py = Q$: integrating factor
- **Exact** $M\,dx + N\,dy = 0$: find potential
- **Bernoulli** $y' + Py = Qy^n$: substitute $v = y^{1-n}$

> **Physics link:** Newton's law of cooling $dT/dt = -k(T-T_{\text{env}})$ is a linear first-order ODE.

> **Common pitfall:** The general solution of a first-order ODE carries one arbitrary constant — forgetting "+C" (or fixing it with the wrong initial condition) yields *a* solution but not *your* solution.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(True false)* A first-order ODE involves only the first derivative of the unknown function.
   - True / False


**2.** *(Matching)* Match each ODE type to its solution method.

**3.** *(Error highlight)* Find the error: 'The general solution of dy/dx = 3y is $y = 3e^x.$'

---

## Second-Order Linear ODEs

$$ay'' + by' + cy = f(x)$$

**Homogeneous case** ($f=0$) — Try $y = e^{rx}$:

 ar^2 + br + c = 0 

**Three cases** (discriminant $\Delta = b^{2}-4ac$):

- $\Delta > 0$, two real roots $r_1 \neq r_2$:

 y = C_1 e^{r_1 x} + C_2 e^{r_2 x} 

- $\Delta = 0$, repeated root $r$:

 y = (C_1 + C_2 x)e^{rx} 

- $\Delta < 0$, complex roots $\alpha \pm \beta i$:

$$y = e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$$

**Non-homogeneous:** $y = y_h + y_p$ (use undetermined coefficients or variation of parameters).

> **Physics link:** These three cases correspond to **overdamped**, **critically damped**, and **underdamped** oscillations.

> **Common pitfall:** For linear ODEs, the full solution is homogeneous + particular. Students who stop at the particular solution lose the transient; those who stop at the homogeneous lose the steady state. You need both.

Adding damping to a harmonic oscillator:

$$m\ddot{x} + b\dot{x} + kx = 0$$

The behaviour depends on the damping ratio $\zeta = b/(2\sqrt{mk})$:

- **Underdamped** ($\zeta < 1$): oscillations with exponential decay
- **Critically damped** ($\zeta = 1$): fastest return without oscillation
- **Overdamped** ($\zeta > 1$): slow exponential return

> Critical damping is used in door closers, shock absorbers, and galvanometers — it returns to equilibrium in minimum time.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Interactive scene)* $m = 1$ kg, $\omega_0 = 3.2$ rad/s. Dial the damping coefficient to the **critical** value — the response stays hidden until you send.

**2.** *(Multiple choice)* For $y'' + by' + ky = 0$ (a damped oscillator), the roots of the characteristic equation are **complex** with negative real part. Without solving anything else, what does the solution do?
   - A) It oscillates while decaying to zero
   - B) It decays smoothly to zero with no oscillation
   - C) It oscillates forever with constant amplitude
   - D) It grows without bound


**3.** *(Word search)* Find five terms about second-order ODEs.

---

## Systems of Differential Equations

Many physical systems involve **coupled** variables. A system of two first-order ODEs:

$$\frac{d\vec{x}}{dt} = A\vec{x}, \qquad \vec{x} = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$$

**Solution method** — Find eigenvalues $\lambda_i$ and eigenvectors $\vec{v}_i$ of $A$:

$$\vec{x}(t) = C_1\,e^{\lambda_1 t}\,\vec{v}_1 + C_2\,e^{\lambda_2 t}\,\vec{v}_2$$

**Phase portrait classification**

| Eigenvalues | Type | Stability |
|-------------|------|-----------|
| $\lambda_1, \lambda_2 < 0$ real | Node | Stable |
| $\lambda_1, \lambda_2 > 0$ real | Node | Unstable |
| $\lambda_1 < 0 < \lambda_2$ real | Saddle | Unstable |
| $\alpha \pm \beta i$, $\alpha < 0$ | Spiral | Stable |
| $\alpha \pm \beta i$, $\alpha > 0$ | Spiral | Unstable |
| $\pm \beta i$ (pure imaginary) | Centre | Neutrally stable |

**Example** — Coupled spring-mass system with two masses yields a $4\times 4$ system. The eigenvalues give the **normal mode frequencies**.

```python
import numpy as np
A = np.array([[-3, 1], [2, -2]])
vals, vecs = np.linalg.eig(A)
print("Eigenvalues:", vals)
print("Eigenvectors:\n", vecs)
```

> **Key insight:** The eigenvalues of the system matrix completely determine the long-term behaviour — stability, oscillation, and decay rate.

> **Common pitfall:** In coupled systems, each equation’s rate depends on the **other** variable — solving them one at a time as if independent destroys exactly the interaction the system exists to model.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the steps for solving a 2$\times2 linear system$ $X' = AX$.

**2.** *(Crossword)* Solve the crossword about systems of ODEs.

**3.** *(Interactive scene)* Brine (2 g/L) flows into a 100 L tank at 3 L/min; the mixed tank drains at 3 L/min. Set the salt level $S_\infty$ the tank settles at — the curve is hidden.

---

## Laplace Transforms

The **Laplace transform** converts a differential equation into an algebraic equation, making it easier to solve.

**Definition**

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt$$

**Essential transform pairs**

| $f(t)$ | $F(s)$ |
|--------|--------|
| $1$ | $1/s$ |
| $t^n$ | $n!/s^{n+1}$ |
| $e^{at}$ | $1/(s-a)$ |
| $\sin(\omega t)$ | $\omega/(s^{2}+\omega^{2})$ |
| $\cos(\omega t)$ | $s/(s^{2}+\omega^{2})$ |

**Key properties**

- **Linearity:** $\mathcal{L}\{af+bg\} = aF + bG$
- **Derivative:** $\mathcal{L}\{f'\} = sF(s) - f(0)$
- **Second derivative:** $\mathcal{L}\{f''\} = s^{2}F(s) - sf(0) - f'(0)$

**Solving an ODE** — Example: $y'' + 4y = 0$, $y(0)=1$, $y'(0)=0$

1. Transform: $s^{2}Y - s + 4Y = 0$
2. Solve: $Y = \dfrac{s}{s^{2}+4}$
3. Inverse: $y = \cos(2t)$

**Partial fractions** are used to invert complex $F(s)$ expressions back to $f(t)$.

> **Physics link:** Laplace transforms are the standard tool for analysing **linear circuits** and **control systems**, where initial conditions appear naturally in the transformed equation.

> **Common pitfall:** Laplace transforms absorb initial conditions at the very first step, via $\mathcal{L}\{y'\} = sY - y(0)$. Bolting the conditions on at the end, ODE-style, double-counts or drops them.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(True false)* The Laplace transform converts a differential equation into an algebraic equation.
   - True / False


**2.** *(Matching)* Match each function $f(t)$ to its Laplace transform $F(s)$.

**3.** *(Error highlight)* Find the error: 'L{$\cos(\omega t)$} = $\omega$/($s^{2}$ + $\omega$²).'

---

## Gradient, Divergence, and Curl

These three **differential operators** describe how scalar and vector fields change in space.

**Gradient** — Acts on a scalar field $\phi(x,y,z)$, producing a vector:

$$\nabla\phi = \frac{\partial\phi}{\partial x}\hat{i} + \frac{\partial\phi}{\partial y}\hat{j} + \frac{\partial\phi}{\partial z}\hat{k}$$

$\nabla\phi$ points in the direction of **steepest increase** and its magnitude is the rate of change.

**Divergence** — Acts on a vector field $\vec{F}$, producing a scalar:

$$\nabla\cdot\vec{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}$$

Measures the **net outward flux** per unit volume — sources ($>0$) and sinks ($<0$).

**Curl** — Acts on a vector field $\vec{F}$, producing a vector:

$$\nabla\times\vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \partial_x & \partial_y & \partial_z \\ F_x & F_y & F_z \end{vmatrix}$$

Measures the **local rotation** of the field.

**Key identities**

- $\nabla\times(\nabla\phi) = \vec{0}$ (curl of gradient is zero)
- $\nabla\cdot(\nabla\times\vec{F}) = 0$ (divergence of curl is zero)
- $\nabla^{2}\phi = \nabla\cdot(\nabla\phi)$ (the **Laplacian**)

> **Physics link:** $\vec{E} = -\nabla V$ (electric field is the negative gradient of potential) and $\nabla\cdot\vec{E} = \rho/\varepsilon_0$ (Gauss's law in differential form).

> **Common pitfall:** Gradient, divergence and curl take different objects in and out: grad turns scalars into vectors; div turns vectors into scalars; curl turns vectors into vectors. Type-check before computing — "div of a scalar" is meaningless.

A **vector field** assigns a vector $\vec{F}(x,y)$ to every point in a region.

The **gradient** of a scalar field $f$ is:

$$\nabla f = \frac{\partial f}{\partial x}\hat{i} + \frac{\partial f}{\partial y}\hat{j}$$

It points in the direction of steepest increase; its magnitude is the rate of change.

A field like $\vec{F} = (-y, x)$ is **rotational**: streamlines form closed loops, with curl $\nabla \times \vec{F} = 2\hat{k}$.

> Gradient, divergence, and curl are the building blocks of vector calculus.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Interactive scene)* $\vec F = (x^2,\ y)$. Compute the divergence at the marked point $P(1.5, 0)$ and set the dial.

**2.** *(Multiple choice)* You stand on a hillside where the height is $h(x,y)$. What does the **gradient** $\nabla h$ at your feet tell you?
   - A) The direction of steepest ascent, with magnitude equal to that steepest slope
   - B) The direction water would flow, with magnitude equal to your altitude
   - C) The compass direction of the summit
   - D) The curvature of the hill at your position


**3.** *(Word search)* Find five vector calculus terms.

---

## Line Integrals

A **line integral** computes the accumulation of a field along a curve.

**Scalar line integral** — Integrate a scalar field $f$ along curve $C$:

$$\int_C f\,ds = \int_a^b f(\vec{r}(t))\,\|\vec{r}'(t)\|\,dt$$

**Vector line integral** — Integrate a vector field $\vec{F}$ along $C$:

$$\int_C \vec{F}\cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(t))\cdot\vec{r}'(t)\,dt$$

This computes the **work** done by $\vec{F}$ along the path.

**Conservative fields** — A field $\vec{F}$ is **conservative** if $\vec{F} = \nabla\phi$ for some potential $\phi$. Then:

$$\int_C \vec{F}\cdot d\vec{r} = \phi(\vec{r}_B) - \phi(\vec{r}_A)$$

The integral depends only on the **endpoints**, not the path.

**Test for conservativeness** in $\mathbb{R}^{3}$:

$$\nabla\times\vec{F} = \vec{0}$$

**Example** — Work done by gravity moving from height $h_1$ to $h_2$:

$$W = \int_C \vec{F}_g\cdot d\vec{r} = -mg(h_2-h_1)$$

This is path-independent because gravity is conservative with $\phi = mgh$.

> **Key insight:** If $\nabla\times\vec{F}=\vec{0}$ on a simply connected domain, then $\vec{F}$ is conservative and you can find a potential function instead of computing the integral directly.

> **Common pitfall:** Path-independence is a privilege of conservative fields, not a general truth. Before replacing a line integral by endpoint values, verify $\vec{F} = \nabla f$ (e.g. check the curl vanishes on a simply connected region).

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the steps to evaluate a line integral $\int_C F \cdot dr$.

**2.** *(Crossword)* Solve the crossword about line integrals.

**3.** *(Cloze bank)* Complete the statement with the correct term.

---

## Surface Integrals

A **surface integral** extends integration from curves to two-dimensional surfaces in $\mathbb{R}^{3}$.

**Parametric surface** — A surface $S$ parametrised by $(u,v)$:

$$\vec{r}(u,v) = x(u,v)\,\hat{i} + y(u,v)\,\hat{j} + z(u,v)\,\hat{k}$$

**Normal vector and area element**

$$d\vec{S} = \left(\frac{\partial\vec{r}}{\partial u}\times\frac{\partial\vec{r}}{\partial v}\right)du\,dv$$

**Scalar surface integral**

$$\iint_S f\,dS = \iint_D f(\vec{r}(u,v))\,\left\|\frac{\partial\vec{r}}{\partial u}\times\frac{\partial\vec{r}}{\partial v}\right\|\,du\,dv$$

**Flux integral** — The flow of $\vec{F}$ through $S$:

$$\Phi = \iint_S \vec{F}\cdot d\vec{S} = \iint_S \vec{F}\cdot\hat{n}\,dS$$

**Special case** — If $S$ is a graph $z = g(x,y)$:

$$d\vec{S} = (-g_x\,\hat{i} - g_y\,\hat{j} + \hat{k})\,dx\,dy$$

**Orientation** matters: the choice of $\hat{n}$ (outward vs. inward for a closed surface) determines the sign of the flux.

> **Physics link:** Electric flux through a closed surface gives the enclosed charge: $\Phi_E = \oiint_S \vec{E}\cdot d\vec{S} = Q_{\text{enc}}/\varepsilon_0$ (Gauss's law in integral form).

> **Common pitfall:** Flux integrals are orientation-sensitive: flipping the surface normal flips the sign. Fix the normal’s direction (outward? upward?) before integrating, or the "right" magnitude arrives with the wrong sign.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(True false)* A surface integral ∬_S F $\cdot dS measures the total flux of F through the surface S$.
   - True / False


**2.** *(Matching)* Match each surface integral concept to its meaning.

**3.** *(Error highlight)* Find the error: 'For a closed surface, the outward flux is always positive.'

---

## The Divergence Theorem

The **divergence theorem** (Gauss's theorem) connects a **volume integral** of divergence to a **surface integral** of flux:

$$\oiint_S \vec{F}\cdot d\vec{S} = \iiint_V (\nabla\cdot\vec{F})\,dV$$

where $S$ is the closed surface bounding the volume $V$, with outward-pointing normal.

**Physical meaning** — The total flux leaving a closed surface equals the total "source strength" inside the volume.

**When to use it**

| Situation | Direction |
|-----------|-----------|
| Surface integral is hard, divergence is simple | Surface $\to$ volume |
| Volume integral is hard, flux is simple | Volume $\to$ surface |
| $\nabla\cdot\vec{F} = 0$ everywhere | Flux through any closed surface is zero |

**Example** — Verify for $\vec{F} = x\,\hat{i} + y\,\hat{j} + z\,\hat{k}$ over the unit sphere:

- $\nabla\cdot\vec{F} = 1+1+1 = 3$
- Volume integral: $\iiint_V 3\,dV = 3\cdot\dfrac{4\pi}{3} = 4\pi$
- Flux integral: $\oiint_S \vec{F}\cdot\hat{n}\,dS = 4\pi$ (confirms the theorem)

**Applications in physics**

- **Gauss's law:** $\nabla\cdot\vec{E} = \rho/\varepsilon_0$
- **Continuity equation:** $\nabla\cdot\vec{J} + \dfrac{\partial\rho}{\partial t} = 0$

> **Key insight:** The divergence theorem reduces a 2D surface integral to a 3D volume integral (or vice versa). Choose whichever side is easier to compute.

> **Common pitfall:** The divergence theorem needs a **closed** surface enclosing a volume where the field is smooth. An open surface, or a singularity inside (like $1/r^{2}$ at the origin), voids the equality.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Cloze bank)* Complete the following passage by choosing the correct terms from the word bank.

**2.** *(Multiple choice)* A vector field has $\nabla\cdot\vec{F} = 0$ **everywhere** inside a closed surface $S$. What is the total flux of $\vec{F}$ out through $S$?
   - A) Exactly zero — no sources inside means nothing net flows out
   - B) Positive if the field is strong at the surface
   - C) Cannot be determined without knowing $\vec{F}$ on the surface
   - D) Zero only if the field is also curl-free


**3.** *(Word search)* Find five divergence theorem terms.

---

## Stokes' Theorem

**Stokes' theorem** relates a surface integral of the curl to a line integral:

$$\oint_C \vec{F}\cdot d\vec{r} = \iint_S (\nabla\times\vec{F})\cdot d\vec{S}$$

where $C = \partial S$ is the boundary, oriented by the right-hand rule.

**Physical meaning** — Circulation around a loop equals the total curl through any surface it bounds.

**Special cases**

- $\nabla\times\vec{F} = \vec{0}$ → $\oint \vec{F}\cdot d\vec{r} = 0$ (conservative field)
- **Green's theorem** is Stokes in $\mathbb{R}^{2}$

**Green's theorem**

$$\oint_C (P\,dx + Q\,dy) = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA$$

**The three integral theorems:**

- **Fundamental thm:** $f(b)-f(a) = \int f'\,dx$
- **Stokes:** boundary line integral = interior curl integral
- **Divergence:** boundary flux = interior divergence integral

> **Key insight:** What happens on the boundary determines what happens inside.

> **Common pitfall:** In Stokes’ theorem, the curve’s direction and the surface’s normal are chained by the right-hand rule. Choosing them independently produces answers that are perfectly computed and off by a sign.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the steps to apply Stokes' theorem to evaluate a line integral.

**2.** *(Crossword)* Solve the crossword about Stokes' theorem.

**3.** *(Interactive scene)* $\vec F = (-y,\ x)$ — the field Stokes' theorem loves. Compute its curl and set the dial; the paddle wheel at P spins only after you send.

---

## Problem-Solving: Differential Equations

Differential equations and vector calculus problems require choosing the right technique for each situation.

**ODE decision tree**

1. **First-order?** Check if separable, linear, exact, or Bernoulli.
2. **Second-order with constant coefficients?** Write the characteristic equation.
3. **Non-homogeneous?** Find $y_h$ first, then $y_p$ by undetermined coefficients or variation of parameters.
4. **System?** Write as $\vec{x}' = A\vec{x}$ and find eigenvalues.
5. **Initial-value problem with discontinuities?** Use Laplace transforms.

**Vector calculus decision tree**

| Need to compute | Tool |
|-----------------|------|
| Work along a path | Line integral $\int\vec{F}\cdot d\vec{r}$ |
| Flux through surface | Surface integral $\iint\vec{F}\cdot d\vec{S}$ |
| Simplify closed-surface flux | Divergence theorem |
| Simplify circulation integral | Stokes' theorem |
| Check if $\vec{F}$ is conservative | $\nabla\times\vec{F} = \vec{0}$? |

```python
from sympy import symbols, Function, dsolve, Eq
t = symbols('t')
y = Function('y')
ode = Eq(y(t).diff(t, 2) + 4*y(t), 0)
sol = dsolve(ode, y(t))
print(sol)
```

**Verification checklist**

- Substitute solution back into the original ODE.
- Check that initial/boundary conditions are satisfied.
- Confirm units are consistent throughout.

> **Tip:** The hardest part of DEs is recognising the type. Once classified, the solution method is mechanical. Practice classification on sight.

> **Common pitfall:** The big theorems (Green, Stokes, divergence) trade a boundary integral for an interior one — the win comes from picking whichever side is easier. If both sides look equally hard, you have not yet exploited the freedom to choose the surface or region.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(True false)* The superposition principle applies to all linear differential equations (homogeneous and nonhomogeneous).
   - True / False


**2.** *(Matching)* Match each differential equation application to its model.

**3.** *(Error highlight)* Find the error: 'To solve y'' + 4$y = \sin(2t) by undetermined coefficients, guess y$_$p = A \sin(2t).$'

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
