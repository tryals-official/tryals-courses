# Unit 10: Physics

## Kinematics: Describing Motion

**Kinematics** describes _how_ things move, without yet asking _why_. Three quantities capture motion, each the rate of change of the one before — the direct payoff of the calculus in Unit 9:
- **Position** $x$ — where an object is.
- **Velocity** $v = \frac{dx}{dt}$ — the rate position changes (with direction; speed is its magnitude).
- **Acceleration** $a = \frac{dv}{dt}$ — the rate velocity changes.

Velocity is the derivative of position, and acceleration is the derivative of velocity — so integrating acceleration recovers velocity, and integrating velocity recovers position. Motion is a chain of derivatives and integrals.

For the important special case of **constant acceleration** (like gravity near Earth, $g \approx 9.8\,\text{m/s}^2$), the calculus gives clean **equations of motion**:
$$v = v_0 + a t, \qquad x = x_0 + v_0 t + \tfrac{1}{2} a t^2, \qquad v^2 = v_0^2 + 2a(x - x_0).$$
These predict where an object is and how fast it moves at any time, given its start.

A crucial conceptual point: velocity and acceleration are **independent**. An object can have zero velocity yet nonzero acceleration — a ball at the top of its flight is momentarily still ($v = 0$) but still accelerating downward ($a = -g$). Confusing "not moving" with "not accelerating" is a classic error.

> **Common pitfall:** conflating **velocity** with **acceleration**, or assuming zero velocity means zero acceleration. Velocity is _how fast_ you move; acceleration is _how fast the velocity changes_ — a body can be instantaneously at rest ($v = 0$) while strongly accelerating (the top of a toss). Likewise, constant velocity means _zero_ acceleration, not constant nonzero acceleration.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* An object starts with velocity 4 m/s and accelerates at a constant 3 m/s squared. What is its velocity after 5 seconds, in metres per second?

**2.** *(Pattern sequence)* A ball is dropped from rest with gravity taken as 10 m/s squared. The sequence gives the distance in metres it falls during each successive second: the first second, the second second, and so on. Fill the gap.

**3.** *(Cloze bank)* Complete the calculus relationship between the three quantities of motion.

---

## Newton's Laws and Forces

Kinematics describes motion; **dynamics** explains it, through **forces**. A force is a push or pull, a vector with magnitude and direction. **Newton's three laws** are the foundation:

- **First law (inertia)** — an object at rest stays at rest, and an object in motion stays in uniform motion, _unless_ acted on by a net force. Motion does not require a force to continue; only a _change_ in motion does. This overturns the everyday intuition that things "naturally" slow down (which is really friction, a force).
- **Second law** — the net force equals mass times acceleration, $F = ma$. The acceleration is proportional to the net force and inversely proportional to the mass. This is the quantitative heart of mechanics: given the forces, you get the acceleration, and (via Unit 9's calculus) the whole motion.
- **Third law** — for every action there is an equal and opposite reaction. Forces come in pairs: if A pushes B, then B pushes A with equal magnitude in the opposite direction. Critically, these two forces act on _different_ objects, so they do not cancel.

The **net force** — the vector sum of all forces — is what matters. An object in **equilibrium** (zero net force) has zero acceleration: it is at rest _or_ moving at constant velocity. Only an _unbalanced_ force accelerates an object. Weight ($mg$), tension, friction, and the normal force are common forces you combine into the net force.

> **Common pitfall:** thinking a force is needed to _keep_ an object moving, and misapplying the **third law**. By the first law, uniform motion needs _no_ net force — a force is required only to _change_ velocity. And the third-law action-reaction pair acts on **two different objects**, so they never cancel each other; forces that cancel to give equilibrium are different forces acting on the _same_ object.

A block with two opposing force arrows; the accent net-force arrow (their vector sum) drives the acceleration a = F/m, with balanced arrows shown separately giving equilibrium.

$$F_{net} = m a$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A net force acts on a 4 kg mass and gives it an acceleration of 3 m/s squared. What is the net force, in newtons?

**2.** *(Matrix grid)* Classify each object by whether it is in equilibrium at the moment described.

**3.** *(Cloze bank)* Complete Newton's first law.

---

## Work, Energy, and Power

**Energy** is the universal currency of physics — the capacity to do work, conserved through every process. **Work** is the transfer of energy by a force: $W = F d$ for a force acting over a distance in its direction (more precisely $W = Fd\cos\theta$, so a force perpendicular to the motion does _no_ work). Work is measured in **joules**.

Two central forms of mechanical energy:
- **Kinetic energy** — energy of motion, $KE = \tfrac{1}{2} m v^2$. Note the _square_: doubling the speed **quadruples** the kinetic energy (which is why stopping distances grow so fast with speed).
- **Potential energy** — stored energy of position. Near Earth, gravitational PE is $PE = mgh$ (mass times gravity times height).

The **work-energy theorem** ties them together: the net work done on an object equals its change in kinetic energy. And the crown jewel is **conservation of energy**: in an isolated system with no friction, the total mechanical energy $KE + PE$ stays **constant** — energy merely converts between forms. A falling ball trades potential for kinetic energy; a pendulum swaps them back and forth. Energy is never created or destroyed, only transformed (friction converts it to heat, which is why real systems seem to "lose" energy).

**Power** is the _rate_ of doing work: $P = \frac{W}{t}$, measured in **watts**. Two engines can do the same total work; the more powerful one does it faster. This distinction — energy (total) versus power (rate) — is exactly the one that matters for computing hardware, where a chip's energy per operation and its power (heat) budget are separate, critical constraints.

> **Common pitfall:** confusing **energy** with **power**, and forgetting the **square** in kinetic energy. Power is the _rate_ of energy transfer ($P = W/t$), not the energy itself — a low-power device can still deliver lots of energy over time. And $KE = \frac{1}{2}mv^2$ depends on $v$ _squared_: doubling the speed quadruples the kinetic energy, not doubles it.

A ball dropping: its accent potential-energy bar shrinks as the kinetic-energy bar grows by an equal amount, their sum a constant total — energy converting form while conserved.

$$KE + PE = \text{constant}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A force of 25 N pushes a box 4 metres in the direction of the force. How much work is done, in joules?

**2.** *(Table completion)* A 2 kg object is tested at several speeds. Complete its kinetic energy at each one.

**3.** *(Error highlight)* A student explains energy and power. Highlight the one incorrect statement.

---

## Momentum and Collisions

**Momentum** measures an object's "quantity of motion", $p = mv$ — mass times velocity, a vector pointing the way the object moves. A heavy truck and a fast bullet can carry similar momentum for very different reasons. Momentum is one of the most powerful bookkeeping tools in physics because of its conservation law.

**Impulse** connects force and momentum: a force acting over a time changes momentum by $J = F\,\Delta t = \Delta p$. This is why a longer contact time softens an impact — an airbag or a bent-knee landing spreads the same momentum change over more time, reducing the peak force. Same $\Delta p$, smaller $F$ when $\Delta t$ is larger.

The headline result is **conservation of momentum**: in an isolated system (no external forces), the **total momentum stays constant**. In a collision between two objects, the momentum before equals the momentum after — even though the objects exchange velocities. This follows directly from Newton's third law (the equal-and-opposite internal forces cancel).

Collisions come in types by what happens to _energy_:
- **Elastic** — kinetic energy is also conserved (ideal, like billiard balls).
- **Inelastic** — some kinetic energy is lost to heat/deformation; in a **perfectly inelastic** collision the objects stick together.

The crucial point: momentum is conserved in _all_ collisions (elastic and inelastic alike), whereas kinetic energy is conserved _only_ in elastic ones. This distinction — momentum always conserved, kinetic energy only sometimes — is the key to analyzing any collision.

> **Common pitfall:** assuming **kinetic energy** is conserved in every collision the way **momentum** is. Momentum is conserved in _all_ collisions with no external forces; kinetic energy is conserved _only_ in elastic collisions. Inelastic collisions (especially objects sticking together) _lose_ kinetic energy to heat and deformation while _still_ conserving momentum — treating them the same is the classic error.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Number line placement)* A 3 kg object moves at 8 m/s. **Place the marker on its momentum in kilogram metres per second.

**2.** *(Numerical input)* In the earlier collision, a 2 kg cart at 6 m/s hit a stationary 4 kg cart and the pair moved off together at 2 m/s. How much kinetic energy was lost, in joules?

**3.** *(Venn diagram)* Two conservation questions are asked of each scenario: is total momentum conserved, and is total kinetic energy conserved? Place each scenario accordingly.

---

## Oscillations and Waves

Many systems **oscillate** — repeat a motion around an equilibrium. The ideal model is **simple harmonic motion (SHM)**, which arises whenever the restoring force is proportional to the displacement (a mass on a spring: $F = -kx$, **Hooke's law**). SHM traces a smooth sinusoid in time, described by:
- **Amplitude** $A$ — the maximum displacement from equilibrium.
- **Period** $T$ — the time for one full cycle.
- **Frequency** $f = \frac{1}{T}$ — cycles per second, in **hertz**. Period and frequency are reciprocals.

A defining feature of SHM: the period does _not_ depend on the amplitude (for an ideal spring or small-swing pendulum). A big swing and a small swing take the same time — the property that makes pendulums good clocks.

A **wave** is a disturbance that travels through space, carrying **energy** without transporting matter. Key quantities are **wavelength** $\lambda$ (distance between repeats), frequency $f$, and wave **speed** $v$, tied by the fundamental relation:
$$v = f\lambda.$$
Waves come in two types: **transverse** (oscillation perpendicular to travel, like light or a plucked string) and **longitudinal** (oscillation along the travel direction, like sound). Waves also **interfere** — overlapping waves add, giving **constructive** (reinforcing) or **destructive** (cancelling) interference — the basis of everything from noise-cancelling headphones to the diffraction limits of chip manufacturing.

> **Common pitfall:** thinking a wave carries **matter** along with it, and confusing **frequency** with **period**. A wave transports _energy_, not the medium — a cork on water bobs in place as waves pass; the water does not travel with the wave. And frequency and period are **reciprocals** ($f = 1/T$), not the same thing: high frequency means _short_ period, so a large frequency pairs with a small period.

A transverse wave with wavelength marked between crests and a single accent point oscillating up and down in place as the wave travels rightward — energy moving, matter staying.

$$v = f\lambda,\quad f = 1/T$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A wave has a frequency of 50 Hz and a wavelength of 4 metres. What is its speed, in metres per second?

**2.** *(Numerical input)* A sound wave travels at 340 m/s with a frequency of 680 Hz. What is its wavelength, in metres?

**3.** *(Error highlight)* A student explains oscillations and waves. Highlight the one incorrect statement.

---

## Electric Charge and Fields

All of electronics — and thus all of computing hardware — rests on **electric charge**. Charge comes in two signs, **positive** and **negative**, carried by protons and electrons. The fundamental rule: **like charges repel, opposite charges attract**. Charge is **conserved** (never created or destroyed, only moved) and **quantized** (it comes in whole multiples of the elementary charge $e$).

The force between two point charges is **Coulomb's law**:
$$F = k\frac{q_1 q_2}{r^2},$$
proportional to the product of the charges and _inversely proportional to the square of the distance_. This inverse-square form means the force weakens rapidly with separation — doubling the distance quarters the force. It is strikingly similar in form to gravity, but electric forces are vastly stronger and can both attract and repel.

Rather than think of charges reaching across empty space, physics uses the **electric field** $E$: a charge creates a field in the space around it, and _another_ charge placed there feels a force $F = qE$. The field is the force per unit charge, pointing away from positive charges and toward negative ones. This "field" idea — a quantity defined at every point of space — is one of physics' most important abstractions and returns in electromagnetism and, ultimately, light.

**Voltage** (electric potential) is the potential energy per unit charge — the "electrical height" that drives charges to move. A charge moves from high to low potential just as a ball rolls downhill, and the voltage _difference_ between two points is what pushes current through a circuit (next lesson). Voltage is why a battery can do work on charges.

> **Common pitfall:** getting the sign of the force wrong (**like charges repel**, opposites attract — not the reverse), and forgetting the **inverse-square** distance dependence. Coulomb's force falls off as $1/r^2$, so it drops _fast_ with distance — doubling the separation cuts the force to a _quarter_, not a half. And two positive (or two negative) charges push _apart_; attraction requires _opposite_ signs.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* Two point charges a certain distance apart repel with a force of 36 N. They are moved apart until the separation is three times as large. What is the force now, in newtons?

**2.** *(Pattern sequence)* Two charges are separated by 1, 2, 4, 8 and 16 units in turn. The sequence gives the force between them in newtons at each separation, starting from 64 N. Fill the gap.

**3.** *(Cloze bank)* Complete the description of the direction of an electric field.

---

## Electric Circuits

A **circuit** is a closed loop through which charge flows. Three quantities describe it:
- **Current** $I$ — the rate of charge flow, in **amperes** (coulombs per second). Conventional current flows from high to low potential.
- **Voltage** $V$ — the potential difference driving the current, in **volts** (from the previous lesson).
- **Resistance** $R$ — how much a component opposes current flow, in **ohms**.

These are tied by **Ohm's law**, the single most-used equation in electronics:
$$V = I R.$$
For a fixed resistance, more voltage drives more current; for a fixed voltage, more resistance means less current. Rearranged, $I = V/R$ — the current is the voltage divided by the resistance. The **power** dissipated (as heat) is $P = IV = I^2 R$, which is why resistors and chips get hot.

Components combine in two basic ways, with opposite rules:
- **Series** — components in a single line share the _same current_; their resistances **add** ($R = R_1 + R_2 + \dots$). Adding series resistance _increases_ total resistance.
- **Parallel** — components across the same two nodes share the _same voltage_; the current _splits_ among them, and the total resistance is _less_ than any single branch (for two, $R = \frac{R_1 R_2}{R_1 + R_2}$). Adding parallel paths _decreases_ total resistance.

This is the foundation of every electronic device. A processor is, at bottom, an astronomically complex circuit of transistors switching currents — and the same $V = IR$ and series/parallel reasoning analyzes both a flashlight and a chip's power delivery.

> **Common pitfall:** swapping the **series vs parallel** resistance rules, or misapplying **Ohm's law**. In _series_, resistances **add** (total goes _up_); in _parallel_, the total is _smaller_ than the smallest branch (adding paths _lowers_ resistance) — reversing these is the classic mistake. And $V = IR$ must be rearranged carefully: current is $I = V/R$ (voltage _over_ resistance), so more resistance means _less_ current, not more.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Numerical input)* A 12 volt supply is connected across a 4 ohm resistor. What current flows, in amperes?

**2.** *(Table completion)* Each row describes one resistor obeying Ohm's law, with the power it dissipates. Complete the table.

**3.** *(Multi select)* Select every statement that is TRUE of resistors in circuits.
   - [ ] Components in series carry the same current
   - [ ] Components in parallel have the same voltage across them
   - [ ] Two resistors in parallel have a total resistance larger than either one
   - [ ] In series the resistances add
   - [ ] Power dissipated in a resistor is the current squared times the resistance


---

## Magnetism and Electromagnetism

**Magnetism** and electricity, once thought separate, are two aspects of one **electromagnetic** force — a unification that is among physics' greatest achievements and the basis of motors, generators, and data storage.

The key discoveries:
- **Moving charges create magnetic fields.** A current-carrying wire produces a magnetic field circling around it. Electricity _makes_ magnetism.
- **Magnetic fields exert forces on moving charges.** A charge moving through a magnetic field feels a force perpendicular to _both_ its velocity and the field. This force is what spins an electric **motor** — current in a field experiences a force that produces rotation.
- **Electromagnetic induction (Faraday's law).** A _changing_ magnetic field induces a voltage (and current) in a nearby loop. Crucially, it is the _change_ that matters — a steady field induces nothing; only a changing flux drives a current. This runs in reverse of the motor: motion in a field _generates_ electricity, the principle of every **generator** and of the read heads that recover data from a spinning disk.

So electricity and magnetism are deeply intertwined: currents make fields, changing fields make currents. Maxwell's synthesis showed that oscillating electric and magnetic fields sustain each other and propagate as **electromagnetic waves** — which _is_ light (and radio, and every wireless signal). The screen you are reading, the Wi-Fi carrying this text, and the hard drive storing it all rest on electromagnetism.

> **Common pitfall:** thinking a **steady** magnetic field induces a current, when only a **changing** field does. Faraday's law of induction depends on the _rate of change_ of magnetic flux — a magnet sitting motionless near a coil induces _nothing_; the current appears only while the field is _changing_ (the magnet moving, or the current producing it varying). "Field present" is not enough; "field changing" is the requirement.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Matrix grid)* Faraday's law says a voltage is induced only while the magnetic flux through a loop is changing. Decide what each situation induces.

**2.** *(Error highlight)* A student explains electromagnetism. Highlight the one incorrect statement.

**3.** *(Memory pairs)* Match each device to the principle it runs on.

---

## Semiconductors and Transistors

Every logic gate in Unit 6 is ultimately a **transistor** — a tiny electronic switch — and transistors are made possible by the physics of **semiconductors**. This lesson connects the physics unit back to the digital hardware at the heart of the course.

Materials fall into three electrical classes by how easily charge moves: **conductors** (metals, charge flows freely), **insulators** (charge barely moves), and **semiconductors** (in between — and controllable). **Silicon** is the workhorse semiconductor. On its own it conducts poorly, but its conductivity can be tuned by **doping** — adding tiny amounts of impurity atoms:
- **n-type** — dopants that add extra mobile _electrons_ (negative carriers).
- **p-type** — dopants that create "**holes**," absences of electrons that act as mobile _positive_ carriers.

Joining p-type and n-type silicon makes a **p-n junction (diode)**, which conducts in only _one_ direction — the basis of rectifiers and LEDs. Combining junctions makes a **transistor**, whose central trick is that a small voltage on a **control terminal (gate)** switches a much larger current between the other two terminals **on or off**. A transistor is thus a voltage-controlled switch — and a switch is exactly what you need to build a logic gate: 1 = on, 0 = off.

This is the bridge that makes computing physical. Billions of transistors, each a microscopic silicon switch, are etched onto a chip; wired together they form the gates, adders, registers, and processors of the earlier units. **Moore's law** — the decades-long doubling of transistors per chip — came from making these switches ever smaller. The abstract 0s and 1s of computation are, at the deepest level, transistors turning currents on and off.

> **Common pitfall:** thinking a transistor is just a passive resistor or wire, rather than a **switch/amplifier** controlled by a third terminal. A transistor's defining feature is that a _small_ signal on its **gate** controls a _large_ current between its other terminals — turning it fully on or off. That controllability (not mere conduction) is what lets transistors compute; a plain resistor cannot switch or amplify.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Matrix grid)* Classify each material by how readily charge moves through it.

**2.** *(Truth table)* Two transistor switches are wired side by side across the same two points, so current reaches the output if either one is on. Complete the output column.

**3.** *(Memory pairs)* Match each term to what it means.

---

## Information, Signals, and the Physics of Computing

This closing lesson unites the physics and the computing halves of the course with one idea: **computation is a physical process**. Every bit stored, every gate switched, and every message sent obeys the laws of physics — which both _enable_ computing and _limit_ it.

**Signals carry information physically.** A bit is represented by a physical quantity — a voltage level in a wire (Unit 6's 0 and 1), a charge in a memory cell, a pulse of light in a fiber, a magnetic orientation on a disk. Real signals are **analog** (continuous voltages) that we interpret **digitally** by thresholding — above a level is 1, below is 0. This digital abstraction gives **noise immunity**: small analog disturbances do not flip the interpreted bit, which is why digital systems are so reliable. Converting between the continuous physical world and discrete bits (analog-to-digital conversion) is itself governed by physics (the sampling theorem).

**Physics sets hard limits.** Switching a transistor takes **energy** and produces **heat** (Unit 3's power, $P = I^2R$) — so a chip's performance is bounded by how fast heat can be removed, the reason clock speeds plateaued and computing went parallel. The **speed of light** limits how fast a signal crosses a chip, bounding the clock (Unit 6's critical path). And thermodynamics sets a theoretical floor on the energy to erase a bit (Landauer's principle).

**Physics enables new computing.** Semiconductors gave us the transistor; light gives us fiber-optic communication; and **quantum mechanics** — where a bit becomes a **qubit** in superposition — promises a fundamentally new model of computation. The abstract world of algorithms and the physical world of electrons, photons, and heat are inseparable: mastering computing ultimately means understanding that information is always _embodied_ in something physical.

> **Common pitfall:** treating computation as purely abstract, divorced from physics. Every bit is _embodied_ — as a voltage, charge, or magnetic state — and every operation costs **energy** and **time** bounded by physical law (heat dissipation, the speed of light, thermodynamic limits). Ignoring this makes real constraints (why chips run hot, why clocks stopped getting faster, why signals need thresholds) inexplicable; computation is physical, not free-floating.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/computer-science-i)

**1.** *(Number base)* An analog-to-digital converter measures a sensor voltage and assigns it to quantisation level 13 out of the 16 available levels. Levels are transmitted as 4-bit codes. Write the code sent for level 13.

**2.** *(Matrix grid)* Every bit is embodied in something physical. Match each storage or transmission medium to the physical quantity carrying the bit.

**3.** *(Error highlight)* A student explains the physics of computing. Highlight the one incorrect statement.

---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
