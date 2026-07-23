# Unit 10: Physics

**[Study this unit interactively on Tryals →](https://tryals.app/courses/mathematics-i)**

## Kinematics and the Language of Motion

Physics is where the mathematics of the preceding units meets the physical world, and **kinematics** — the description of motion — is calculus made concrete. Three quantities describe how an object moves, each the **derivative** of the one before (Unit 5):
- **Position** $x(t)$ — where the object is.
- **Velocity** $v = \frac{dx}{dt}$ — the rate of change of position (a vector, with direction; speed is its magnitude).
- **Acceleration** $a = \frac{dv}{dt} = \frac{d^2x}{dt^2}$ — the rate of change of velocity.

The relationship runs both ways via integration (Unit 6): integrating acceleration recovers velocity, and integrating velocity recovers position. Motion is a chain of derivatives going one way and integrals going the other — the Fundamental Theorem of Calculus embodied in physics.

For the important case of **constant acceleration** (a falling body near Earth, $g \approx 9.8\,\text{m/s}^2$), integrating gives the clean **equations of motion**:
$$v = v_0 + at, \qquad x = x_0 + v_0 t + \tfrac{1}{2}at^2, \qquad v^2 = v_0^2 + 2a(x - x_0).$$
These predict position and velocity at any time from the initial state.

A conceptual essential: **velocity and acceleration are independent** quantities. An object can have zero velocity yet nonzero acceleration — a ball at the peak of its flight is momentarily at rest ($v = 0$) while still accelerating downward ($a = -g$). "Not moving" is not "not accelerating." Vectors matter too: velocity and acceleration have direction, so an object moving in a circle at constant _speed_ is still _accelerating_, because its velocity's direction is changing.

> **Common pitfall:** conflating **velocity** with **acceleration**, or assuming zero velocity means zero acceleration. Velocity is _how fast_ you move; acceleration is _how fast the velocity changes_ — a body can be instantaneously at rest ($v = 0$) while strongly accelerating (the top of a toss). And constant _speed_ around a curve still involves acceleration, because velocity is a vector whose _direction_ is changing.

**Practice preview:**

**1.** *(Numerical input)* A car starts from rest and accelerates in a straight line at a constant 3 m/s squared. How far, in metres, has it travelled after 6 seconds?

**2.** *(Matrix grid)* Velocity and acceleration are independent quantities. Classify each situation.

**3.** *(Multi select)* A stone is whirled in a horizontal circle at a constant speed of 5 m/s. Select every statement that is TRUE.
   - [ ] Its speed is constant
   - [ ] Its velocity is constant
   - [ ] Its acceleration is zero
   - [ ] It is accelerating
   - [ ] The direction of its velocity is changing


---

## Newton's Laws and Dynamics

Kinematics describes motion; **dynamics** explains it through **forces**. A force is a push or pull — a **vector** with magnitude and direction. **Newton's three laws** are the foundation of classical mechanics.

- **First law (inertia)** — an object at rest stays at rest, and an object in motion stays in uniform motion, _unless_ acted on by a net force. Motion does not require a force to _continue_; only a _change_ in motion does. Everyday slowing-down is really friction, itself a force.
- **Second law** — the net force equals mass times acceleration, $\vec{F} = m\vec{a}$. Acceleration is proportional to the net force and inversely proportional to the mass. This is the quantitative engine: given the forces, you get the acceleration, and (via calculus) the whole motion. It is a **differential equation** — $\vec{F} = m\ddot{x}$ — whose solution is the trajectory.
- **Third law** — for every action there is an equal and opposite reaction. Forces come in pairs acting on _different_ objects: if A pushes B, then B pushes A with equal magnitude in the opposite direction.

The **net force** — the vector sum of _all_ forces — is what governs the motion. An object in **equilibrium** (zero net force) has zero acceleration: it is at rest _or_ moving at constant velocity. Only an _unbalanced_ force accelerates an object. Common forces combine into the net: weight ($mg$), tension, friction, the normal force.

Because forces are **vectors**, they add by vector addition, and you often resolve them into components along chosen axes. Newton's second law then applies component by component — the bridge from the vector algebra of Unit 3 to physical prediction.

> **Common pitfall:** thinking a force is needed to _keep_ an object moving, and misapplying the **third law**. By the first law, uniform motion needs _no_ net force — force is required only to _change_ velocity. And the third-law action-reaction pair acts on **two different objects**, so the two forces never cancel each other; forces that cancel to give equilibrium are different forces acting on the _same_ object.

A block with two opposing force arrows; the accent net-force arrow (their vector sum) drives the acceleration a = F/m, with balanced arrows shown separately giving equilibrium.

$$\vec{F}_{net} = m\vec{a}$$

**Practice preview:**

**1.** *(Numerical input)* Two horizontal forces act on a 5 kg crate on frictionless ice: 18 N to the east and 8 N to the west. What is the magnitude of the crate's acceleration, in m/s squared?

**2.** *(Numerical input)* A 2 kg lamp hangs at rest from a single vertical rope. Taking g = 10 m/s squared, what is the tension in the rope, in newtons?

**3.** *(Multi select)* Select every statement that is consistent with Newton's laws.
   - [ ] An object moving at constant velocity has zero net force on it
   - [ ] A force is needed to keep an object moving at constant velocity
   - [ ] The two forces of an action-reaction pair act on the same object and cancel
   - [ ] Doubling the net force on a fixed mass doubles its acceleration
   - [ ] For a fixed net force, doubling the mass halves the acceleration


---

## Energy and Conservation Laws

**Energy** is a conserved quantity that flows through every physical process — the universal currency of physics. **Work** is the transfer of energy by a force acting over a distance: $W = \int \vec{F} \cdot d\vec{x}$, reducing to $W = Fd$ for a constant force along the motion (and $W = Fd\cos\theta$ in general, so a force perpendicular to the motion does _no_ work). Work is measured in **joules**.

Two central forms of mechanical energy:
- **Kinetic energy** — energy of motion, $KE = \tfrac{1}{2}mv^2$. Note the _square_: doubling the speed **quadruples** the kinetic energy.
- **Potential energy** — stored energy of configuration. Gravitational PE near Earth is $PE = mgh$; a spring stores $\tfrac{1}{2}kx^2$.

The **work–energy theorem** ties work to motion: the net work on an object equals its change in kinetic energy. The crown jewel is **conservation of energy**: in an isolated system with only conservative forces (no friction), total mechanical energy $KE + PE$ is **constant** — energy converts between forms but is never created or destroyed. A falling ball trades potential for kinetic energy; a pendulum swaps them back and forth. Friction converts mechanical energy to heat, which is why real systems appear to "lose" energy — the energy is not gone, just transformed.

**Power** is the _rate_ of doing work, $P = \frac{dW}{dt}$, in **watts** — distinct from energy (the total). Conservation laws are among the most powerful tools in physics: they let you relate initial and final states _without_ tracking the detailed motion in between, turning hard dynamics problems into simple bookkeeping. Momentum and angular momentum are conserved too, each tied (by Noether's theorem) to a symmetry of nature.

> **Common pitfall:** confusing **energy** with **power**, and forgetting the **square** in kinetic energy. Power is the _rate_ of energy transfer ($P = W/t$), not the energy itself. And $KE = \frac{1}{2}mv^2$ depends on $v$ _squared_: doubling the speed **quadruples** the kinetic energy, not doubles it (which is why stopping distances grow so sharply with speed).

A ball dropping: its accent potential-energy bar shrinks as the kinetic-energy bar grows by an equal amount, their sum a constant total — energy converting form while conserved.

$$KE + PE = \text{constant}$$

**Practice preview:**

**1.** *(Numerical input)* A 2 kg ball moves at 6 m/s. What is its kinetic energy, in joules?

**2.** *(Formula builder)* Build the statement of conservation of mechanical energy for a mass moving under gravity.

**3.** *(Matrix grid)* Work is Fd cos of the angle between the force and the motion. Classify the work done by each force.

---

## Oscillations and Periodic Motion

**Oscillation** — motion that repeats around an equilibrium — is one of the most universal patterns in physics, from pendulums to atoms to alternating current. Its ideal form is **simple harmonic motion (SHM)**, which arises whenever the **restoring force is proportional to the displacement** and directed back toward equilibrium: **Hooke's law**, $F = -kx$.

Combining Hooke's law with Newton's second law gives a **differential equation** — the mathematics of Units 5–6 producing physical prediction:
$$m\ddot{x} = -kx \;\Rightarrow\; \ddot{x} = -\omega^2 x, \qquad \omega = \sqrt{k/m}.$$
Its solution is a **sinusoid**, $x(t) = A\cos(\omega t + \phi)$ — the position oscillates as a cosine. The motion is described by:
- **Amplitude** $A$ — the maximum displacement.
- **Angular frequency** $\omega$ — how fast it oscillates; the **period** is $T = \frac{2\pi}{\omega}$ and the **frequency** $f = \frac{1}{T}$.

A defining and counterintuitive feature of ideal SHM: the **period is independent of the amplitude**. A large swing and a small swing (of an ideal spring, or a small-angle pendulum) take the _same_ time, because a larger displacement brings a proportionally larger restoring force. This is why pendulums make good clocks.

Real oscillators experience **damping** (friction), which gradually shrinks the amplitude. When an oscillator is driven by a periodic force at its natural frequency $\omega$, **resonance** occurs: energy accumulates and the amplitude grows dramatically. Resonance explains musical instruments, tuned circuits, and — destructively — why soldiers break step on bridges. Oscillation and waves (built from oscillations) are ubiquitous, and SHM is the mathematical prototype underlying them all.

> **Common pitfall:** thinking a larger **amplitude** makes an ideal oscillator take **longer** per cycle. For simple harmonic motion the **period is independent of amplitude** — a bigger swing also feels a proportionally bigger restoring force, so it covers the extra distance in the same time. (This holds for an ideal spring and a _small-angle_ pendulum; large-angle pendulums deviate, but the SHM idealisation does not.)

**Practice preview:**

**1.** *(Numerical input)* A mass on a spring completes 20 full oscillations in 5 seconds. What is its frequency, in hertz?

**2.** *(Formula builder)* Build the expression for the angular frequency of a mass on a spring.

**3.** *(Memory pairs)* Match each term to its meaning for a simple harmonic oscillator.

---

## Waves

A **wave** is a disturbance that travels through space, carrying **energy** without transporting matter. Waves are built from oscillations (Lesson 4): each point of the medium oscillates in place while the disturbance propagates. Water waves, sound, light, and vibrations on a string are all waves, described by the same mathematics.

Key quantities:
- **Wavelength** $\lambda$ — the distance between successive repeats (crest to crest).
- **Frequency** $f$ — oscillations per second (hertz); the **period** is $T = 1/f$.
- **Amplitude** — the maximum displacement, related to the wave's energy.
- **Speed** $v$ — how fast the disturbance travels, tied to the others by the fundamental **wave relation**:
$$v = f\lambda.$$

Waves come in two types by the direction of oscillation: **transverse** (medium oscillates _perpendicular_ to travel — light, a plucked string) and **longitudinal** (oscillation _along_ the travel direction — sound).

The signature behavior that distinguishes waves from particles is **superposition and interference**: when two waves overlap, their displacements _add_. Where crests align, they reinforce — **constructive** interference (larger amplitude); where a crest meets a trough, they cancel — **destructive** interference. This produces standing waves, beats, and the interference patterns that reveal the wave nature of light. **Diffraction** (bending around obstacles) and the **Doppler effect** (frequency shift from relative motion) are further wave hallmarks.

A crucial conceptual point already noted: a wave carries **energy, not matter**. A cork bobs up and down as water waves pass but does not travel with them; the medium oscillates locally while the wave — and its energy — moves onward. This distinguishes a wave from a stream of moving particles.

> **Common pitfall:** thinking a wave carries **matter** along with it, and confusing **frequency** with **period**. A wave transports _energy_ — the medium oscillates in place (a cork bobs without drifting). And frequency and period are **reciprocals** ($f = 1/T$), not the same: high frequency means _short_ period, so a large frequency pairs with a small period, not a large one.

**Practice preview:**

**1.** *(Numerical input)* A wave has a frequency of 50 Hz and a wavelength of 4 m. What is its speed, in m/s?

**2.** *(Category sort)* Sort each wave by the direction in which the medium oscillates relative to the direction of travel.

**3.** *(Cloze bank)* Complete the statement about what a wave carries.

---

## Thermodynamics and Statistical Ideas

**Thermodynamics** governs heat, temperature, and the flow of energy in systems of many particles. Its central insight connects the microscopic (countless molecules in random motion) to the macroscopic (temperature, pressure, heat) — a bridge that makes it a showcase for probability and statistics.

**Temperature** is a measure of the average kinetic energy of a system's particles: hotter means faster random motion. **Heat** is energy transferred because of a temperature difference, always flowing spontaneously from hot to cold. These are different concepts — temperature is an intensive property (a level), heat is energy in transit (an amount).

The laws of thermodynamics:
- **First law** — energy is **conserved**: the change in a system's internal energy equals heat added minus work done, $\Delta U = Q - W$. It is conservation of energy extended to heat.
- **Second law** — the total **entropy** of an isolated system never decreases. **Entropy** measures disorder — the number of microscopic arrangements consistent with the macroscopic state. Systems evolve toward more probable, higher-entropy configurations.
- **Third law** — entropy approaches a minimum as temperature approaches absolute zero.

The **second law** is the deep one, and it is fundamentally **statistical**. It does not say order is _impossible_, but that disorder is _overwhelmingly more probable_: there are vastly more disordered microstates than ordered ones, so a system left alone drifts toward disorder simply by the odds. This gives time a direction — the "arrow of time" — and explains why heat flows hot-to-cold, why perpetual-motion machines fail, and why processes are irreversible. Statistical mechanics derives these macroscopic laws from the probability of microscopic states, uniting thermodynamics with the probability of Unit 7.

> **Common pitfall:** confusing **heat** with **temperature**, and reading the second law as "order is impossible." Temperature is the _average_ particle energy (a level); heat is energy _transferred_ due to a temperature difference (an amount) — a large cool object can hold more heat energy than a small hot one. And the second law is _statistical_: entropy _tends_ to increase because disordered states are overwhelmingly more probable, not because order is forbidden — local order can form (a fridge, a crystal) as long as total entropy rises elsewhere.

A box of particles evolving from an ordered corner cluster to an accent spread-out disordered state, the entropy bar rising as the system moves to the overwhelmingly more probable configuration.

$$\Delta S_{isolated} \ge 0$$

**Practice preview:**

**1.** *(Numerical input)* A gas absorbs 500 J of heat and does 200 J of work on its surroundings. Using the first law, by how many joules does its internal energy change?

**2.** *(Matrix grid)* Heat and temperature are different concepts. Classify each description.

**3.** *(Cloze bank)* Complete the statistical reading of the second law.

---

## Electromagnetism

**Electromagnetism** governs the forces between charged particles and underlies electricity, magnetism, and light. It rests on **electric charge**, which comes in two signs: **like charges repel, opposite charges attract**, with charge conserved and quantized.

The force between two point charges is **Coulomb's law**:
$$F = k\frac{q_1 q_2}{r^2},$$
proportional to the product of the charges and _inversely proportional to the square of the distance_ — so doubling the separation quarters the force. Rather than picture action at a distance, physics uses the **electric field** $\vec{E}$: a charge creates a field in the surrounding space, and another charge feels a force $\vec{F} = q\vec{E}$. The field is a quantity defined at every point — one of physics' most powerful abstractions.

Electricity and magnetism, once thought separate, are two aspects of one **electromagnetic** force:
- **Moving charges create magnetic fields** (a current in a wire produces a circling field).
- **Magnetic fields exert forces on moving charges** (the basis of motors).
- **A changing magnetic field induces a voltage** (Faraday's law) — the basis of generators. Crucially, only a _changing_ field induces; a steady field induces nothing.

**Maxwell's equations** unified all of this into four laws and revealed something profound: oscillating electric and magnetic fields sustain each other and **propagate as electromagnetic waves** traveling at the speed of light. **Light itself is an electromagnetic wave** — as are radio, microwaves, and X-rays, differing only in frequency. This unification, connecting electricity, magnetism, and optics, is one of the crowning achievements of physics, and it rests on the vector calculus and wave mathematics of earlier units.

> **Common pitfall:** getting the sign of the Coulomb force wrong (**like charges repel**, opposites attract), and thinking a **steady** magnetic field induces a current. The force falls off as $1/r^2$, so doubling the distance quarters it — and two like charges push _apart_. For induction, Faraday's law depends on the _rate of change_ of the magnetic field: a motionless magnet near a coil induces **nothing**; current appears only while the field is _changing_.

**Practice preview:**

**1.** *(Numerical input)* Two point charges exert a force of 36 N on each other. If the separation is tripled and the charges are unchanged, what is the new force, in newtons?

**2.** *(Category sort)* Sort each pair of charged objects by the direction of the force between them.

**3.** *(Multi select)* Select every statement that is TRUE about electromagnetism.
   - [ ] Light is an electromagnetic wave
   - [ ] Doubling the distance between two charges halves the force
   - [ ] Moving charges create magnetic fields
   - [ ] A steady magnetic field induces a voltage in a stationary coil
   - [ ] Radio waves and X-rays differ from visible light only in frequency


---

## Introduction to Modern Physics

By 1900 classical physics — Newton, Maxwell, thermodynamics — seemed nearly complete. Then two revolutions overturned it at the extremes of the very fast and the very small: **relativity** and **quantum mechanics**. Both defy everyday intuition, and both rest on deep mathematics.

**Special relativity** (Einstein, 1905) begins from one startling postulate: the **speed of light is the same for all observers**, regardless of their motion. To keep this consistent, space and time themselves must be relative:
- **Time dilation** — a moving clock runs slow relative to a stationary observer.
- **Length contraction** — a moving object is shortened along its motion.
- **Mass–energy equivalence** — $E = mc^2$: mass is a form of energy, and a tiny mass holds enormous energy (the basis of nuclear power).

These effects are negligible at everyday speeds but dominate near the speed of light. **General relativity** extends this to gravity, reinterpreting it as the **curvature of spacetime** by mass.

**Quantum mechanics** governs the atomic scale and is even stranger:
- **Wave–particle duality** — light and matter behave as _both_ waves and particles depending on how they are observed.
- **Quantization** — energy comes in discrete packets (**quanta**), not a continuum; electrons occupy specific energy levels.
- **The uncertainty principle** — you cannot know a particle's position and momentum both precisely; the more you pin down one, the less you know the other. This is a fundamental limit of nature, not a measurement flaw.
- **Probability** — quantum mechanics predicts _probabilities_ of outcomes, not certainties; the theory is inherently statistical, described by a wavefunction.

Classical physics remains an excellent approximation in its domain — everyday sizes and speeds — but relativity and quantum mechanics are the deeper truth, and both are thoroughly mathematical theories built on the calculus, linear algebra, and probability of this course.

> **Common pitfall:** thinking the **uncertainty principle** is about clumsy measurement disturbing the system, or that quantum mechanics gives **definite** predictions like classical physics. The uncertainty principle is a _fundamental limit of nature_ — position and momentum cannot _both_ have precise values simultaneously, regardless of measurement quality. And quantum mechanics is inherently **probabilistic**: it predicts the _probabilities_ of outcomes, not certain results — a deep departure from deterministic classical physics.

**Practice preview:**

**1.** *(Numerical input)* Take the speed of light as 3 x 10^8 m/s. Fully converting 2 kg of matter to energy gives E = 1.8 x 10^n joules. Enter the value of n.

**2.** *(Cloze bank)* Complete the founding postulate of special relativity.

**3.** *(Error highlight)* A student summarises modern physics. Highlight the one incorrect statement.

---

## Mathematical Methods in Physics

This lesson makes explicit what the whole unit has shown: **mathematics is the language in which physical laws are written.** Physics does not merely _use_ mathematics; its deepest laws _are_ mathematical statements, and the mathematics of this course is exactly the toolkit.

**Differential equations** are the heart of it. Nearly every fundamental law is a differential equation relating quantities to their rates of change: Newton's $\vec{F} = m\ddot{x}$, the wave equation, the heat equation, Maxwell's equations, and the Schrödinger equation of quantum mechanics. Solving them (Units 5–6, 9) predicts how systems evolve. Physics is largely the art of writing down the right differential equation and solving it, exactly or numerically.

**Vectors and linear algebra** (Units 3–4) express quantities with direction — force, velocity, fields — and their transformations. Rotations are matrices; quantum states are vectors in an abstract space; the eigenvalues of an operator are the possible measured energies. Linear algebra is not incidental to quantum mechanics; it _is_ its framework.

**Symmetry and conservation** reveal a profound link. **Noether's theorem** states that every continuous symmetry of a physical system corresponds to a **conserved quantity**: time-translation symmetry gives conservation of _energy_, spatial-translation symmetry gives conservation of _momentum_, and rotational symmetry gives conservation of _angular momentum_. Deep physical laws follow from the mathematics of symmetry.

**Probability and statistics** (Unit 7) govern thermodynamics (entropy as a count of microstates) and quantum mechanics (outcomes as probabilities). And **numerical methods** (Unit 9) solve the equations that have no closed form, making computational physics a third pillar alongside theory and experiment.

The unifying lesson: the abstract mathematics studied for its own structure turns out to be precisely what nature runs on. **Calculus, linear algebra, differential equations, and probability are the grammar of physical law** — which is why a mathematician is, in a deep sense, already a physicist in training.

> **Common pitfall:** viewing the mathematics of physics as a mere **calculation tool** bolted onto physical ideas, rather than the **language of the laws themselves**. Fundamental physical laws _are_ mathematical statements — differential equations, vector relations, symmetry principles — not physical intuitions later dressed in formulas. Symmetries _imply_ conservation laws (Noether), quantum states _are_ vectors, and a law _is_ its equation; treating the math as optional decoration misses that the structure of physics is inseparable from its mathematics.

**Practice preview:**

**1.** *(Matching)* Match each physical object or law to the mathematical object it actually IS.

**2.** *(Numerical input)* Newton's second law written as F = m times the second derivative of x with respect to t is a differential equation. What is its order?

**3.** *(Cloze bank)* Complete the statement of Noether's theorem.

---

## Physics as Applied Mathematics

This final lesson closes both the unit and the course by drawing the grand connection: **physics is applied mathematics**, and the entire Mathematics I curriculum is precisely the toolkit that describes the physical universe. Every unit finds its application here.

- **Logic and proof** (Unit 1) give physics its rigor — deriving consequences from principles with airtight reasoning.
- **Number theory and the real numbers** (Unit 2) underlie measurement and the continuum of physical quantities.
- **Vectors and matrices** (Unit 3) represent forces, fields, rotations, and states.
- **Linear algebra** (Unit 4) frames quantum mechanics, normal modes, and transformations; eigenvalues are physical quantities.
- **Differential calculus** (Unit 5) defines velocity, acceleration, and rates of change throughout physics.
- **Integral calculus** (Unit 6) computes work, flux, fields, and totals; differential equations model evolution.
- **Probability and statistics** (Unit 7) govern thermodynamics, quantum outcomes, and the analysis of data.
- **Programming** (Unit 8) turns methods into executable procedures.
- **Scientific computing** (Unit 9) solves the equations no formula can, making computational physics possible.

The **modeling cycle** ties it together: observe a phenomenon, **abstract** it into a mathematical model (usually differential equations with the right variables), **solve** the model (analytically or numerically), and **compare** the predictions with experiment — refining the model when they disagree. This loop, powered by the mathematics of this course, is how physics advances.

The overarching truth, voiced by Wigner as the "unreasonable effectiveness of mathematics," is that abstract mathematics — developed for its own logical beauty — turns out to describe nature with astonishing precision. Why the universe should be so deeply mathematical is a genuine mystery. But the practical lesson for you is clear: the mathematics you have studied is not an end in itself but a lens on reality. **To understand the physical world quantitatively is to think mathematically** — and that fluency, across logic, algebra, calculus, probability, and computation, is what this course has built.

> **Common pitfall:** treating physics and mathematics as **separate subjects** that merely happen to interact. Physics _is_ applied mathematics — its models are mathematical structures, its laws are equations, and understanding a physical system quantitatively _means_ analysing its mathematics. The "unreasonable effectiveness of mathematics" is not a coincidence to note in passing but the central fact: the abstract tools of this course are the very language in which the physical world is understood.

**Practice preview:**

**1.** *(Ordering)* Order the stages of the modeling cycle described in this lesson.

**2.** *(Numerical input)* A 3 kg mass hangs on a spring of stiffness k = 48 N/m. Using omega equal to the square root of k over m, what is its angular frequency, in rad/s?

**3.** *(Formula builder)* Build the general definition of the work done by a force that varies along the path.

---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
