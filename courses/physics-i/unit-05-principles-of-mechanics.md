# Unit 5: Principles of Mechanics

## Kinematics in One Dimension

Close your eyes in a smoothly cruising train and you cannot tell how fast you are going — but the slightest braking, you feel instantly. That asymmetry is the heart of kinematics: **position** is where you are, **velocity** is how position changes, **acceleration** is how velocity changes. Each layer is the rate of change of the one above.

**Kinematics** describes motion without asking what causes it. For motion along a straight line, three quantities matter: **position** $x$, **velocity** $v$, and **acceleration** $a$.

**Definitions**

$$v = \frac{dx}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$

**Constant-acceleration equations** (the "SUVAT" equations):

| Equation | Variables |
|----------|-----------|
| $v = v_0 + at$ | $v, v_0, a, t$ |
| $x = x_0 + v_0 t + \tfrac{1}{2}at^{2}$ | $x, x_0, v_0, a, t$ |
| $v^{2} = v_0^{2} + 2a(x-x_0)$ | $v, v_0, a, x$ |
| $x = x_0 + \tfrac{1}{2}(v_0+v)t$ | $x, x_0, v_0, v, t$ |

**Free fall** is the special case where $a = -g = -9.8\;\text{m/s}^{2}$ (taking upward as positive).

**Graphical analysis**

- **Slope** of $x$-$t$ graph = velocity.
- **Slope** of $v$-$t$ graph = acceleration.
- **Area** under $v$-$t$ graph = displacement.

> **Tip:** Choose a sign convention (e.g. upward positive) at the start and stick with it throughout the problem.

> **Common pitfall:** "Negative acceleration" does not automatically mean slowing down. A ball falling faster and faster has $a < 0$ (downward) while its speed grows. Slowing down means $v$ and $a$ point in **opposite** directions — check signs, not words.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Function graph)* A cart moves with **constant velocity**. Which velocity–time graph describes it?

**2.** *(Matching)* Match each kinematic variable to its SI unit.

**3.** *(Error highlight)* Find the error: 'A ball thrown upward has positive acceleration during the entire flight because it moves upward first.'

---

## Kinematics in Two Dimensions and Projectile Motion

Fire a bullet horizontally and drop another at the same instant: they hit the ground together. Gravity is completely indifferent to horizontal motion. Every projectile problem splits into two independent one-dimensional stories — constant velocity across, free fall down — sharing only the clock.

In 2D, position, velocity, and acceleration are **vectors**. The horizontal and vertical components are independent.

**Position and velocity vectors**

$$\vec{r}(t) = x(t)\,\hat{i} + y(t)\,\hat{j}, \qquad \vec{v}(t) = \frac{d\vec{r}}{dt}$$

**Projectile motion** — Launch at speed $v_0$ and angle $\theta$ above horizontal (neglecting air resistance):

$$x(t) = v_0\cos\theta\;t, \qquad y(t) = v_0\sin\theta\;t - \tfrac{1}{2}g\,t^2$$

**Key results**

| Quantity | Formula |
|----------|---------|
| Time of flight | $T = \dfrac{2v_0\sin\theta}{g}$ |
| Maximum height | $H = \dfrac{v_0^{2}\sin^{2}\theta}{2g}$ |
| Range | $R = \dfrac{v_0^{2}\sin 2\theta}{g}$ |

**Important principles**

- The horizontal velocity $v_x = v_0\cos\theta$ is **constant** (no horizontal acceleration).
- The vertical motion is **free fall** with $a_y = -g$.
- Maximum range occurs at $\theta = 45^\circ$.
- Two angles $\theta$ and $90^\circ-\theta$ give the **same range**.

> **Physics insight:** Galileo showed that the trajectory is a **parabola** by decomposing the motion into independent horizontal and vertical components.

> **Common pitfall:** At the top of the arc the projectile is **not** momentarily "force-free". Its vertical velocity is zero for an instant, but gravity still acts at full strength — that is precisely why it comes back down.

A projectile launched with speed $v_0$ at angle $\theta$ follows a parabolic path. The horizontal and vertical motions are independent:

$$x = v_0 \cos\theta \cdot t, \quad y = v_0 \sin\theta \cdot t - \tfrac{1}{2}gt^2$$

- **Range:** $R = v_0^{2} \sin 2\theta / g$
- **Max height:** $H = v_0^{2} \sin^{2}\theta / (2g)$
- **Time of flight:** $T = 2v_0 \sin\theta / g$

> Maximum range occurs at $\theta = 45^{\circ}$ (in vacuum). Air resistance reduces this angle in practice.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Cloze bank)* Complete the following passage by choosing the correct terms from the word bank.

**2.** *(Interactive scene)* The ball leaves the 4 m platform horizontally at 4 m/s. Place the marker where it lands. (How long does *anything* take to fall 4 m?)

**3.** *(Word search)* Find five projectile-motion terms.

---

## Newton's Laws of Motion

Newton’s deepest insight is what does **not** need explaining: steady motion needs no force at all. Forces explain *changes* in motion. Ask "what net force acts?" and you know the acceleration; ask "what acceleration do I see?" and you know the net force. The second law runs in both directions.

**Newton's three laws** form the foundation of classical mechanics.

**The laws**

1. **First law (Inertia):** A body remains at rest or in uniform motion unless acted on by a net external force.
2. **Second law:** $\vec{F}_{\text{net}} = m\vec{a}$
3. **Third law:** If body A exerts a force on body B, then B exerts an equal and opposite force on A.

**Free-body diagrams** — The essential tool for applying Newton's laws:

1. Isolate the object.
2. Draw all forces acting **on** it (weight, normal, tension, friction, etc.).
3. Choose coordinate axes (often along and perpendicular to the surface).
4. Apply $\sum F_x = ma_x$ and $\sum F_y = ma_y$.

**Common forces**

| Force | Formula | Direction |
|-------|---------|-----------|
| Weight | $W = mg$ | Downward |
| Normal | $N$ | Perpendicular to surface |
| Kinetic friction | $f_k = \mu_k N$ | Opposing motion |
| Static friction | $f_s \leq \mu_s N$ | Opposing tendency to slide |
| Tension | $T$ | Along the string |

> **Key insight:** Newton's second law is not $F=ma$ — it is $\vec{F}_{\text{net}}=m\vec{a}$. Only the **vector sum** of all forces determines acceleration.

> **Common pitfall:** Action–reaction pairs never cancel, because they act on **different** bodies. The book’s weight and the table’s normal force on it are NOT such a pair — both act on the book; its true partner forces act on the Earth and the table.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the steps for solving a Newton's second law problem.

**2.** *(Crossword)* Solve the crossword about forces and Newton's laws.

**3.** *(Interactive scene)* A 2 kg cart starts from rest and must cross the flag 4 m away at exactly $t = 2$ s. Set the pulling force — the stopwatch starts when you send.

---

## Work, Energy, and the Work-Energy Theorem

Energy bookkeeping often beats force analysis: you can predict a rollercoaster’s speed at the bottom of any hill without knowing anything about the track’s twists — because work only cares about force **along** the motion, and gravity’s work only cares about height.

**Work** is the mechanism by which forces transfer **energy** to or from an object.

**Work done by a constant force**

$$W = \vec{F}\cdot\vec{d} = Fd\cos\theta$$

where $\theta$ is the angle between $\vec{F}$ and the displacement $\vec{d}$. Work is measured in **joules** ($J = N\,m$).

**Work-energy theorem**

$$W_{\text{net}} = \Delta KE = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

The net work equals the change in **kinetic energy**.

**Work done by a variable force**

$$W = \int_{x_i}^{x_f} F(x)\,dx$$

**Power** is the rate of doing work:

$$P = \frac{dW}{dt} = \vec{F}\cdot\vec{v}$$

| Quantity | Symbol | SI Unit |
|----------|--------|---------|
| Work | $W$ | J (joule) |
| Kinetic energy | $KE$ | J |
| Power | $P$ | W (watt) |

> **Physics link:** The work-energy theorem is not a new law — it is derived directly from Newton's second law via integration. It reframes $F=ma$ in terms of energy, which is often easier to use.

> **Common pitfall:** A force does zero work when it is perpendicular to the motion — no matter how large it is. String tension in circular motion and the normal force on a sliding block are hard at work holding geometry, yet transfer no energy.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Slider estimate)* You drag a crate 2.0 m with a 10 N force at **60°** above the horizontal. Set the slider to the work done, using $W = Fd\cos\theta$ ($\cos 60° = 0.5$).

**2.** *(Matching)* Match each quantity to its SI unit.

**3.** *(Error highlight)* Find the error: 'A person carrying a heavy box horizontally at constant speed does positive work on the box.'

---

## Conservation of Energy

Conservation laws are physics’ accounting tricks: instead of following every push and pull through time, compare two snapshots — energy before, energy after. If only conservative forces acted in between, the books must balance, whatever happened in the middle.

In an **isolated system** where only **conservative forces** act, the total mechanical energy is conserved:

$$E = KE + PE = \text{constant}$$

**Potential energy** for common forces:

| Force | Potential energy |
|-------|-----------------|
| Gravity (near surface) | $PE = mgh$ |
| Gravity (universal) | $PE = -\dfrac{GMm}{r}$ |
| Spring (Hooke's law) | $PE = \dfrac{1}{2}kx^{2}$ |

**Energy conservation equation**

$$\frac{1}{2}mv_i^2 + PE_i = \frac{1}{2}mv_f^2 + PE_f$$

When **non-conservative forces** (e.g. friction) are present:

$$E_f = E_i + W_{\text{nc}}$$

where $W_{\text{nc}} < 0$ for friction (energy lost as heat).

**Conservative vs. non-conservative**

- A force is **conservative** if the work it does is **path-independent** (depends only on start and end points).
- Equivalently: the work around any closed loop is zero.
- Gravity and spring forces are conservative; friction and air resistance are not.

> **Problem-solving tip:** Energy methods bypass the need for acceleration and time. If the problem asks for speed at a given position, try energy conservation before $F=ma$.

> **Common pitfall:** "Energy is conserved" does not mean "mechanical energy is conserved". Friction quietly converts $KE$ into thermal energy: total energy survives, but the mechanical books alone stop balancing the moment sliding friction appears.

For a system with only conservative forces, total mechanical energy is constant:

$$E = K + U = \text{const}$$

where $K = \tfrac{1}{2}mv^{2}$ is kinetic energy and $U = mgh$ is gravitational potential energy.

On an inclined plane, the forces on a body are:

- **Weight** $P = mg$ (vertically downward)
- **Normal** $N$ (perpendicular to the surface)
- **Friction** $F_f$ (parallel, opposing motion)

When friction is present: $\Delta E = -F_f \cdot d$.

> Energy is never created or destroyed — only converted between kinetic, potential, and thermal forms.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Cloze bank)* Complete the following passage by choosing the correct terms from the word bank.

**2.** *(Interactive scene)* A frictionless valley: the far side climbs to a **1.2 m ledge**. Set the release height so the ball leaves the ledge moving at exactly **2.8 m/s**.

**3.** *(Word search)* Find five terms about energy conservation.

---

## Linear Momentum, Impulse, and Collisions

Why do airbags save lives? They cannot change your momentum — that is fixed by how fast you were going. What they change is the **time** over which momentum drains away: $F\Delta t = \Delta p$, so ten times the stopping time means one tenth the force. Momentum thinking is collision thinking.

**Linear momentum** is defined as:

$$\vec{p} = m\vec{v}$$

Newton's second law in terms of momentum: $\vec{F}_{\text{net}} = \dfrac{d\vec{p}}{dt}$.

**Impulse** is the change in momentum produced by a force:

$$\vec{J} = \int_{t_i}^{t_f}\vec{F}\,dt = \Delta\vec{p}$$

**Conservation of momentum** — In a system with no external forces:

$$\vec{p}_{\text{total}} = m_1\vec{v}_1 + m_2\vec{v}_2 = \text{constant}$$

**Collision types**

| Type | Momentum | Kinetic energy |
|------|----------|---------------|
| **Elastic** | Conserved | Conserved |
| **Inelastic** | Conserved | Not conserved |
| **Perfectly inelastic** | Conserved | Maximum loss (objects stick) |

**Elastic collision in 1D** (equal masses): the objects **exchange velocities**.

**Centre of mass**

$$\vec{r}_{\text{cm}} = \frac{m_1\vec{r}_1 + m_2\vec{r}_2}{m_1+m_2}$$

The centre of mass moves as if all external forces act on a single particle of total mass $M$.

> **Key insight:** Momentum conservation is a consequence of Newton's third law. Internal forces cancel in pairs, so only external forces can change the total momentum.

> **Common pitfall:** Momentum is conserved in **every** collision, elastic or not — as long as no external force intervenes. What inelastic collisions lose is kinetic **energy**, never momentum. Conserve $p$ always; conserve $KE$ only when told the collision is elastic.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the stages of a perfectly inelastic collision between two objects.

**2.** *(Crossword)* Solve the crossword about momentum.

**3.** *(Interactive scene)* A 3 kg cart at rest takes a **12 N·s** impulse. Set the speed it rolls away with.

---

## Rotational Kinematics and Torque

Everything from door handles to wrenches exploits one idea: rotational effect = force × lever arm. Rotation has a full parallel dictionary to linear motion — $\theta, \omega, \alpha$ mirror $x, v, a$; torque mirrors force; moment of inertia mirrors mass. Learn the dictionary once and every linear result translates.

**Rotational motion** has direct analogues to every translational quantity.

**Angular quantities**

| Translational | Rotational | Relation |
|---------------|------------|----------|
| $x$ (position) | $\theta$ (angle) | $s = r\theta$ |
| $v$ (velocity) | $\omega$ (angular velocity) | $v = r\omega$ |
| $a$ (acceleration) | $\alpha$ (angular acceleration) | $a_t = r\alpha$ |

**Constant angular acceleration equations**

$$\omega = \omega_0 + \alpha t, \qquad \theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2$$

**Torque** is the rotational analogue of force:

$$\vec{\tau} = \vec{r}\times\vec{F}, \qquad |\tau| = rF\sin\theta$$

**Newton's second law for rotation**

$$\tau_{\text{net}} = I\alpha$$

where $I = \sum m_i r_i^{2}$ is the **moment of inertia**.

**Common moments of inertia**

- Solid cylinder: $I = \tfrac{1}{2}MR^{2}$
- Solid sphere: $I = \tfrac{2}{5}MR^{2}$
- Thin rod (centre): $I = \tfrac{1}{12}ML^{2}$
- Thin hoop: $I = MR^{2}$

> **Physics link:** The **parallel axis theorem** $I = I_{\text{cm}} + Md^{2}$ lets you compute $I$ about any axis from the centre-of-mass value.

> **Common pitfall:** Moment of inertia is not just "how much mass" but "**where** the mass sits": $I = \sum m r^{2}$. A hoop and a disk of equal mass and radius have different $I$ — the $r^{2}$ weighting makes rim mass count far more than hub mass.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Balance scale)* The left pan holds **2.0 kg and 1.5 kg**. Select masses for the right pan to balance the scale.

**2.** *(Matching)* Match each rotational quantity to its translational analogue.

**3.** *(Error highlight)* Find the error: 'Doubling the radius of a solid cylinder doubles its moment of inertia.'

---

## Angular Momentum and Conservation

A spinning skater pulls her arms in and inexplicably speeds up — nobody pushed her. With no external torque, the product $L = I\omega$ is locked; shrink $I$ and $\omega$ must rise. Angular momentum conservation shapes everything from figure skating to why neutron stars spin hundreds of times a second.

**Angular momentum** is the rotational analogue of linear momentum:

$$\vec{L} = \vec{r}\times\vec{p} = I\vec{\omega} \quad\text{(for rigid bodies)}$$

**Newton's second law (rotational form)**

$$\vec{\tau}_{\text{net}} = \frac{d\vec{L}}{dt}$$

If the net external torque is zero, angular momentum is **conserved**:

$$\vec{L}_i = \vec{L}_f \quad\Longrightarrow\quad I_i\omega_i = I_f\omega_f$$

**Classic example** — An ice skater pulls their arms in:
- $I$ decreases (mass moves closer to axis).
- $\omega$ increases to conserve $L$.
- Rotational $KE =  \tfrac{1}{2}I\omega^{2}$ increases — the skater does work by pulling inward.

**Rotational kinetic energy**

$$KE_{\text{rot}} = \frac{1}{2}I\omega^2$$

For **rolling without slipping**, $v_{\text{cm}} = R\omega$ and total KE is:

$$KE_{\text{total}} = \frac{1}{2}mv_{\text{cm}}^2 + \frac{1}{2}I\omega^2$$

**Summary of analogues**

| Translation | Rotation |
|-------------|----------|
| $\vec{F}$ | $\vec{\tau}$ |
| $\vec{p}=m\vec{v}$ | $\vec{L}=I\vec{\omega}$ |
| $KE=\tfrac{1}{2}mv^{2}$ | $KE=\tfrac{1}{2}I\omega^{2}$ |

> **Key insight:** Angular momentum conservation explains phenomena from spinning galaxies to gyroscopic stability — any system with no external torque.

> **Common pitfall:** Conserving $L$ does not conserve rotational kinetic energy. The skater’s $KE = L^{2}/2I$ **increases** as she pulls her arms in — her muscles supply the difference. One conservation law never implies another.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Interactive scene)* Shape the orbit so aphelion is exactly **3×** the perihelion distance. Only $e$ is displayed — the two distances stay hidden until you send.

**2.** *(Multiple choice)* A spinning figure skater pulls her arms in and speeds up (angular momentum is conserved). What happens to her **rotational kinetic energy**?
   - A) It increases — her muscles do work pulling her arms inward
   - B) It stays the same, because angular momentum is conserved
   - C) It decreases, because her moment of inertia decreases
   - D) It stays the same, because no external torque acts


**3.** *(Word search)* Find five rotational dynamics terms.

---

## Oscillations and Simple Harmonic Motion

Push almost anything slightly away from equilibrium — a pendulum, a guitar string, an atom in a crystal — and the restoring force is, to first approximation, proportional to the displacement. That single fact makes the sine wave the universal motion of the gently disturbed world.

**Simple harmonic motion** (SHM) occurs when the restoring force is proportional to displacement:

$$F = -kx \quad\Longrightarrow\quad \frac{d^2x}{dt^2} = -\omega^2 x$$

where $\omega = \sqrt{k/m}$ is the **angular frequency**.

**Solution**

$$x(t) = A\cos(\omega t + \phi)$$

| Parameter | Meaning |
|-----------|---------|
| $A$ | Amplitude (maximum displacement) |
| $\omega$ | Angular frequency ($\text{rad/s}$) |
| $\phi$ | Phase constant |
| $T = 2\pi/\omega$ | Period |
| $f = 1/T$ | Frequency (Hz) |

**Energy in SHM** — Total energy oscillates between kinetic and potential:

$$E = \frac{1}{2}kA^2 = \frac{1}{2}mv^2 + \frac{1}{2}kx^2$$

At $x=0$: all kinetic. At $x=\pm A$: all potential.

**Common oscillators**

- **Mass-spring:** $T = 2\pi\sqrt{m/k}$
- **Simple pendulum:** $T = 2\pi\sqrt{L/g}$ (for small angles $\theta \ll 1$)

**Damped oscillations** add a friction term: $\ddot{x} + 2\gamma\dot{x} + \omega_0^{2} x = 0$, producing exponentially decaying amplitude $Ae^{-\gamma t}$.

> **Physics link:** SHM is the universal model for small oscillations about any stable equilibrium. Taylor-expand the potential to second order and you always get $F \approx -kx$.

> **Common pitfall:** The period of a mass–spring oscillator does not depend on amplitude. A bigger swing travels farther but moves proportionally faster, and the two effects cancel exactly — that is what makes harmonic oscillators good clocks.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(Timeline ordering)* Order the phases of one full cycle of a mass on a spring (starting from maximum compression).

**2.** *(Crossword)* Solve the crossword about oscillations.

**3.** *(Interactive scene)* A mass hangs from a spring: $k = 49$ N/m, $m = 1$ kg. Predict the stretch at equilibrium — the mass is released when you send.

---

## Problem-Solving: Mechanics

Expert problem-solvers do not start with formulas — they start by choosing a **law**: does this need Newton, energy, or momentum? Collisions call for momentum, smooth height changes call for energy, and "find the force" calls for Newton. Multi-stage problems chain different laws across different stages.

Mechanics problems follow a systematic approach. Applying a clear strategy prevents errors and builds physical intuition.

**General strategy**

1. **Draw** a diagram with all forces and a coordinate system.
2. **List** the knowns and unknowns.
3. **Choose** the right principle:

| Situation | Best approach |
|-----------|---------------|
| Find acceleration | Newton's second law |
| Find speed at a position | Energy conservation |
| Collision or explosion | Momentum conservation |
| Rotating object | Torque and $I\alpha$ |
| Oscillation | SHM equations |

4. **Write** the equations and solve algebraically before substituting numbers.
5. **Check** units, limiting cases, and sign conventions.

**Dimensional analysis** — Every equation must be dimensionally consistent:

$$[F] = \text{kg}\cdot\text{m/s}^2, \qquad [E] = \text{kg}\cdot\text{m}^2/\text{s}^2$$

```python
g = 9.8      # m/s^{2}
m = 2.0      # kg
v0 = 15.0    # m/s
theta = 45   # degrees
import math
R = v0**2 * math.sin(2*math.radians(theta)) / g
print(f"Range = {R:.2f} m")
```

**Common pitfalls**

- Forgetting that $\vec{F}_{\text{net}}$ is a **vector sum**, not a scalar sum.
- Using energy conservation when **non-conservative** forces do work.
- Confusing $g = 9.8$ with $g = -9.8$ — the sign depends on your axis choice.

> **Tip:** When stuck, count equations and unknowns. If you have fewer equations than unknowns, you need another physical principle or constraint.

> **Common pitfall:** Applying energy conservation **across** a sticking collision. Perfectly inelastic impacts always destroy kinetic energy; only momentum bridges that moment. Split the problem at the collision and switch tools.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/physics-i)

**1.** *(True false)* When solving mechanics problems, choosing the right coordinate system can simplify the equations significantly.
   - True / False


**2.** *(Matching)* Match each problem type to the best conservation law or principle.

**3.** *(Error highlight)* Find the error: 'On a banked curve with no friction, the car's weight provides the centripetal force.'

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
