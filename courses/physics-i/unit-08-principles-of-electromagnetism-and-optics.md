# Unit 8: Principles of Electromagnetism and Optics

## Electric Charge and Coulomb's Law

Rub a balloon on your hair and it picks up roughly $10^{-9}$ of its electrons’ worth of imbalance — enough to defy the gravity of the entire planet. Electricity is astonishingly strong; we only fail to notice because matter is almost perfectly neutral, positive and negative cancelling to exquisite precision.

**Electric charge** is a fundamental property of matter. There are two types: **positive** and **negative**.

**Coulomb's law** gives the force between two point charges:

$$\vec{F} = k_e\frac{q_1 q_2}{r^2}\hat{r}, \qquad k_e = \frac{1}{4\pi\varepsilon_0} = 8.99\times 10^9\;\text{N m}^2/\text{C}^2$$

**Key properties of charge**

- **Quantised:** $q = ne$ where $e = 1.602\times 10^{-19}$ C.
- **Conserved:** Total charge in an isolated system is constant.
- **Like charges repel, opposite charges attract.**

**Superposition principle** — The force on charge $q$ due to multiple charges is the vector sum:

$$\vec{F}_{\text{net}} = \sum_i \vec{F}_i = \sum_i k_e\frac{qq_i}{r_i^2}\hat{r}_i$$

| Quantity | Symbol | SI Unit |
|----------|--------|---------|
| Charge | $q$ | C (coulomb) |
| Force | $\vec{F}$ | N (newton) |
| Permittivity | $\varepsilon_0$ | C$^{2}$/(N m$^{2}$) |

> **Physics link:** Coulomb's law has the same $1/r^{2}$ form as Newton's gravitational law. Both are inverse-square laws, but electric forces can be attractive or repulsive.

> **Common pitfall:** Coulomb’s law gives the force between **point** charges. For extended objects, each piece pulls on each piece — you may only treat a sphere as a point at its centre because of a deep theorem, not because it is obvious.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Slider estimate)* Two charges repel with **36 N**. You move them to **half** the original separation. Predict the new force.

**2.** *(Matching)* Match each charge-related concept to its description.

**3.** *(Error highlight)* Find the error: 'Coulomb's law applies to both point charges and extended charge distributions directly without modification.'

---

## Electric Field and Gauss's Law

Instead of tracking forces charge by charge, imagine every charge filling space with an invisible **field** — a ready-made instruction at every point saying which way a test charge would be pushed. Gauss’s law is the field’s conservation statement: count the field lines leaving any closed surface and you have counted the charge inside.

The **electric field** $\vec{E}$ is the force per unit charge at a point in space:

$$\vec{E} = \frac{\vec{F}}{q_0} = k_e\frac{Q}{r^2}\hat{r}$$

**Gauss's law** relates the electric flux through a closed surface to the enclosed charge:

$$\oint_S \vec{E}\cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$$

**Choosing a Gaussian surface** — Exploit symmetry:

| Charge distribution | Gaussian surface | Result |
|--------------------|--------------------|--------|
| Point charge | Sphere | $E = \dfrac{Q}{4\pi\varepsilon_0 r^{2}}$ |
| Infinite line ($\lambda$) | Cylinder | $E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$ |
| Infinite plane ($\sigma$) | Pillbox | $E = \dfrac{\sigma}{2\varepsilon_0}$ |

**Electric field lines**

- Start on positive charges, end on negative charges.
- Density of lines $\propto$ field strength.
- Never cross.

**Differential form of Gauss's law:**

$$\nabla\cdot\vec{E} = \frac{\rho}{\varepsilon_0}$$

> **Key insight:** Gauss's law is always true, but only useful for computing $\vec{E}$ when the charge distribution has enough symmetry to pull $E$ out of the integral.

> **Common pitfall:** Zero flux through a closed surface does **not** mean zero field on it. A charge sitting just outside sends field lines in one side and out the other — they cancel in the count, yet the field on the surface is far from zero.

**Gauss's Law** relates electric flux through a closed surface to the enclosed charge:

$$\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$$

For symmetric distributions, choose a **Gaussian surface** matching the symmetry so that $\vec{E}$ is constant on the surface.

A point charge produces a radial field:

$$\vec{E} = \frac{q}{4\pi\varepsilon_0 r^2}\hat{r}$$

> Gauss's Law is one of **Maxwell's four equations** and is equivalent to Coulomb's law for electrostatics.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* $I = 3$ A through $R = 4$ Ω: set the power dissipated — the bulb lights on send.

**2.** *(Multiple choice)* A balloon is charged and its charge stays fixed. If you **double the radius** of an imaginary sphere drawn around it, what happens to the total electric **flux** through the sphere?
   - A) Nothing — flux depends only on the enclosed charge
   - B) It drops to one quarter, like the field strength
   - C) It doubles, because the surface is farther out
   - D) It quadruples with the surface area


**3.** *(Word search)* Find five electrostatics terms.

---

## Electric Potential and Capacitance

Potential is the "height map" of the electric world: charges roll downhill through voltage the way balls roll downhill through altitude. One number per point (not three, like the field) — which is why circuit analysis speaks in volts, not field vectors.

The **electric potential** $V$ is the potential energy per unit charge:

$$V = -\int_{\text{ref}}^{\vec{r}} \vec{E}\cdot d\vec{l}, \qquad \vec{E} = -\nabla V$$

**Potential of a point charge:**

$$V = k_e\frac{Q}{r}$$

**Key relationships**

| Concept | Formula |
|---------|---------|
| Potential energy | $U = qV$ |
| Work by field | $W = q(V_A - V_B)$ |
| Equipotential surfaces | $V = \text{const}$, $\perp$ to $\vec{E}$ |

**Capacitance** — A capacitor stores charge and energy:

$$C = \frac{Q}{V}, \qquad U = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$

**Parallel-plate capacitor:**

$$C = \varepsilon_0\frac{A}{d}$$

**Combinations**

- **Parallel:** $C_{\text{eq}} = C_1 + C_2$
- **Series:** $\dfrac{1}{C_{\text{eq}}} = \dfrac{1}{C_1} + \dfrac{1}{C_2}$

> **Physics link:** Potential is a scalar — much easier to compute than the vector field $\vec{E}$. Find $V$ first, then take the gradient to get $\vec{E}$.

> **Common pitfall:** Zero potential does not mean zero field, and zero field does not mean zero potential. The field is the **slope** of the potential: midway between two equal positive charges the field vanishes while the potential is large.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps to find the potential difference between two points due to a point charge.

**2.** *(Crossword)* Solve the crossword about electric potential.

**3.** *(Interactive scene)* A **3 μF** capacitor charged to **4 V**: set the charge stored on it — the plates fill charge by charge after you send.

---

## Current, Resistance, and DC Circuits

A copper wire carries no more charge when current flows than when it does not — the electrons were always there, drifting slower than honey (about 0.1 mm/s). What makes a bulb light instantly is that the **push** propagates near light speed, like water pressure through a full hose.

**Electric current** is the rate of charge flow:

$$I = \frac{dQ}{dt}, \qquad \text{unit: ampere (A)}$$

**Ohm's law** relates voltage, current, and resistance:

 V = IR 

**Resistivity** — $R = \rho L/A$, where $\rho$ is the material's resistivity, $L$ is length, and $A$ is cross-sectional area.

**Power dissipated** in a resistor:

$$P = IV = I^2R = \frac{V^2}{R}$$

**Resistor combinations**

| Configuration | Equivalent $R$ |
|---------------|---------------|
| Series | $R_{\text{eq}} = R_1 + R_2 + \cdot s$ |
| Parallel | $\dfrac{1}{R_{\text{eq}}} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \cdot s$ |

**Joule heating** — Energy dissipated as heat: $E = Pt = I^{2}Rt$. This is why transmission lines use high voltage and low current.

```python
V = 12.0   # volts (battery)
R1, R2 = 100, 200  # ohms in series
I = V / (R1 + R2)
P = I**2 * (R1 + R2)
print(f"Current = {I:.4f} A, Power = {P:.4f} W")
```

> **Key insight:** Resistors in series share the same current; resistors in parallel share the same voltage. This determines which combination rule to use.

> **Common pitfall:** Current is not "used up" around a circuit. The same current that leaves the battery returns to it; what gets spent is **energy per charge** (voltage). Series bulbs share voltage, not diminishing current.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Resistor color)* Read this resistor’s colour bands and enter its resistance in ohms. (Digit values: red = 2, violet = 7; multiplier brown = ×10.)

**2.** *(Matching)* Match each circuit quantity to its SI unit.

**3.** *(Error highlight)* Find the error: 'Two 6 $\Omega resistors in parallel have an equivalent resistance of 12 \Omega$.'

---

## Kirchhoff's Laws and Circuit Analysis

Kirchhoff’s two rules are conservation laws wearing electrical clothing: junctions conserve **charge** (what flows in flows out) and loops conserve **energy** (a charge returning to its start must break even). Every circuit, however tangled, yields to these two bookkeeping rules.

**Kirchhoff's two laws** are the foundation of circuit analysis.

**Junction rule** (KCL — conservation of charge):

$$\sum I_{\text{in}} = \sum I_{\text{out}}$$

**Loop rule** (KVL — conservation of energy):

$$\sum \Delta V = 0 \quad\text{around any closed loop}$$

**Sign conventions for the loop rule**

| Element | Traversal direction | $\Delta V$ |
|---------|-------------------|------------|
| Battery ($+$ to $-$) | In direction of EMF | $+\varepsilon$ |
| Battery ($-$ to $+$) | Against EMF | $-\varepsilon$ |
| Resistor | In direction of $I$ | $-IR$ |
| Resistor | Against $I$ | $+IR$ |

**Systematic procedure**

1. Assign current variables and directions to each branch.
2. Write KCL equations at each junction (except one).
3. Write KVL equations around independent loops.
4. Solve the system of linear equations.

**RC circuits** — Charging a capacitor through a resistor:

 V_C(t) = \varepsilon\left(1 - e^{-t/RC}\right), \qquad \tau = RC 

The time constant $\tau = RC$ is the time to reach $\approx 63\%$ of the final voltage.

> **Tip:** The number of independent equations always equals the number of unknown currents. If it doesn't, you missed a loop or junction.

> **Common pitfall:** Sign errors kill more circuit solutions than concept errors. Fix a travel direction around each loop first, then let the algebra decide: a negative answer just means the true current flows opposite your guess — it is not a mistake.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* A 12 V battery drives $R_1 = 2\ \Omega$ in series with $R_2$. Choose $R_2$ so the loop current is exactly **2 A** — the ammeter is off until you send.

**2.** *(Multiple choice)* Three identical bulbs: A is in series with the battery; the pair B and C are in parallel with each other after A. If bulb **C burns out** (breaks the branch), what happens to bulb A?
   - A) A gets dimmer — total resistance rose, so less current flows
   - B) A gets brighter — the circuit has fewer bulbs to feed
   - C) A is unchanged — it is on its own branch
   - D) A goes out too


**3.** *(Word search)* Find five circuit analysis terms.

---

## Magnetic Field and Ampere's Law

Magnetism is electricity’s velocity-dependent twin: it acts only on **moving** charges, always at right angles to their motion. A force that can never do work, only steer — which is why magnetic fields curl particle paths into circles and why a compass needle twists rather than launches.

Moving charges create and experience **magnetic fields**. The magnetic force on a charge is:

$$\vec{F} = q\vec{v}\times\vec{B}$$

This force is always **perpendicular** to $\vec{v}$ — it changes direction but not speed.

**Biot-Savart law** — Field from a current element:

$$d\vec{B} = \frac{\mu_0}{4\pi}\frac{I\,d\vec{l}\times\hat{r}}{r^2}$$

**Ampere's law** — For steady currents with symmetry:

$$\oint_C \vec{B}\cdot d\vec{l} = \mu_0 I_{\text{enc}}$$

**Key results from Ampere's law**

| Source | Field |
|--------|-------|
| Long straight wire | $B = \dfrac{\mu_0 I}{2\pi r}$ |
| Solenoid (inside) | $B = \mu_0 n I$ |
| Toroid (inside) | $B = \dfrac{\mu_0 N I}{2\pi r}$ |

**Force between parallel wires** carrying currents $I_1$ and $I_2$:

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

Parallel currents attract; antiparallel currents repel.

> **Physics link:** A charged particle in a uniform $\vec{B}$ moves in a circle of radius $r = mv/(qB)$. This is the principle behind cyclotrons and mass spectrometers.

> **Common pitfall:** Because $\vec{F} = q\vec{v}\times\vec{B}$ is perpendicular to $\vec{v}$, a magnetic field can never change a particle’s **speed** or kinetic energy — only its direction. If a problem needs energy added, some electric field must be doing it.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps to find the magnetic field using Ampere's law.

**2.** *(Crossword)* Solve the crossword about magnetic fields.

**3.** *(Cloze bank)* Complete the statement with the correct term.

---

## Electromagnetic Induction and Faraday's Law

Faraday’s discovery powers civilization: move a magnet near a coil and current flows — mechanical motion transmuted into electricity. The rule has a stubborn personality (Lenz’s law): induced currents always fight the change that made them, which is why generators resist being turned and why that resistance *is* the coal you burn.

A changing magnetic flux through a loop induces an **EMF** (voltage):

$$\varepsilon = -\frac{d\Phi_B}{dt}, \qquad \Phi_B = \int_S \vec{B}\cdot d\vec{A}$$

The minus sign is **Lenz's law**: the induced current opposes the change in flux.

**Ways to change flux**

- Change $B$ (strengthen/weaken the field).
- Change $A$ (expand/shrink the loop).
- Change $\theta$ (rotate the loop).

**Motional EMF** — A conductor of length $L$ moving with velocity $v$ through field $B$:

$$\varepsilon = BLv$$

**Self-inductance** — A coil opposes changes in its own current:

$$\varepsilon = -L\frac{dI}{dt}, \qquad L = \frac{N\Phi_B}{I}$$

**Energy stored in an inductor:**

$$U = \frac{1}{2}LI^2$$

| Quantity | Symbol | SI Unit |
|----------|--------|---------|
| Magnetic flux | $\Phi_B$ | Wb (weber) |
| EMF | $\varepsilon$ | V (volt) |
| Inductance | $L$ | H (henry) |

> **Key insight:** Faraday's law is the basis of generators, transformers, and wireless charging. A changing magnetic field creates an electric field — even in empty space.

> **Common pitfall:** Induction responds to **changing flux**, not to flux itself. A coil soaked in an enormous steady field induces nothing; a tiny field that wobbles induces plenty. Check $d\Phi/dt$, never $\Phi$.

A changing magnetic flux through a loop induces an EMF:

$$\mathcal{E} = -\frac{d\Phi_B}{dt}$$

where $\Phi_B = \int \vec{B} \cdot d\vec{A}$ is the magnetic flux. The negative sign is **Lenz's law**: the induced current opposes the change that caused it.

For a coil of $N$ turns: $\mathcal{E} = -N\,d\Phi_B/dt$.

> Faraday's law is the principle behind generators, transformers, and wireless charging.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* Faraday's law states that a changing magnetic flux through a loop induces an EMF.
   - True / False


**2.** *(Matching)* Match each induction concept to its formula.

**3.** *(Error highlight)* Find the error: 'According to Lenz's law, the induced current flows in the same direction as the change in flux.'

---

## Maxwell's Equations

Four equations, and everything electrical, magnetic and optical follows — including the punchline hiding in the algebra: fields can chase each other through empty space at $1/\sqrt{\mu_0\varepsilon_0}$, which works out to the measured speed of light. Light is not *like* electromagnetism; it **is** electromagnetism.

**Maxwell's four equations** unify electricity, magnetism, and light.

$$\nabla\cdot\vec{E} = \frac{\rho}{\varepsilon_0} \qquad\text{(Gauss's law for E)}$$

$$\nabla\cdot\vec{B} = 0 \qquad\text{(No magnetic monopoles)}$$

$$\nabla\times\vec{E} = -\frac{\partial\vec{B}}{\partial t} \qquad\text{(Faraday's law)}$$

$$\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t} \qquad\text{(Ampere-Maxwell)}$$

**Displacement current** — Maxwell added $\varepsilon_0\dfrac{\partial\vec{E}}{\partial t}$ to Ampere's law. This term allows electromagnetic waves to exist in vacuum.

**Electromagnetic waves** — Maxwell's equations predict waves travelling at:

$$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = 3.00\times 10^8\;\text{m/s}$$

| Property | Expression |
|----------|-----------|
| Speed | $c = f\lambda$ |
| $E/B$ ratio | $E = cB$ |
| Energy density | $u = \varepsilon_0 E^{2} = B^{2}/\mu_0$ |
| Poynting vector | $\vec{S} = \dfrac{1}{\mu_0}\vec{E}\times\vec{B}$ |

> **Key insight:** Maxwell showed that light is an electromagnetic wave. This unified optics with electromagnetism — one of the greatest achievements in physics.

> **Common pitfall:** An electromagnetic wave needs no medium — the fields sustain each other. The $E$ and $B$ fields are in phase, mutually perpendicular, and both perpendicular to the travel direction; a common error is drawing them out of phase like energy-trading oscillators.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Cloze bank)* Complete the following passage by choosing the correct terms from the word bank.

**2.** *(Matching)* Match each of Maxwell’s equations to the physical statement it encodes.

**3.** *(Word search)* Find five Maxwell's equations terms.

---

## Geometric Optics: Reflection and Refraction

A straw in a glass of water looks broken because your brain insists light travels in straight lines — it traces the bent rays backwards and hallucinates the straw where they seem to come from. All of geometric optics is this one game: follow rays that bend at surfaces, then ask where the brain would put the image.

When light encounters a boundary between media, it can be **reflected** and **refracted**.

**Law of reflection:**

$$\theta_i = \theta_r$$

**Snell's law of refraction:**

$$n_1\sin\theta_1 = n_2\sin\theta_2$$

where $n = c/v$ is the **refractive index** of the medium.

**Total internal reflection** occurs when light travels from a denser medium ($n_1 > n_2$) and:

$$\theta_1 > \theta_c = \arcsin\left(\frac{n_2}{n_1}\right)$$

**Thin lens equation:**

$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

**Magnification:**

$$m = -\frac{d_i}{d_o}$$

| Sign | $d_i > 0$ | $d_i < 0$ |
|------|-----------|-----------|
| Image | Real (opposite side) | Virtual (same side) |
| $m > 0$ | Upright | — |
| $m < 0$ | Inverted | — |

**Mirror equation** has the same form, with $f = R/2$ for a spherical mirror of radius $R$.

> **Tip:** Always draw a ray diagram with at least two principal rays. The diagram catches sign errors and gives physical intuition about image location.

> **Common pitfall:** Total internal reflection happens only when light tries to leave a **slower** (denser) medium for a faster one, beyond the critical angle. Going the other way — air into glass — light always enters, no matter the angle.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps for tracing a ray through a converging lens.

**2.** *(Crossword)* Solve the crossword about geometric optics.

**3.** *(Interactive scene)* Light hits glass ($n = 1.5$) at $\theta_1 = 45°$ from the normal. Aim the refracted ray — Snell first, the protractor won't help.

---

## Wave Optics: Interference and Diffraction

Shine light through two close slits and the screen shows stripes — places where light plus light equals **darkness**. Only waves can cancel. This experiment settled a century-long debate about light’s nature, and its logic (path difference → phase difference → interference) recurs from soap films to gravitational-wave detectors.

When light is treated as a **wave**, interference and diffraction emerge.

**Young's double-slit** — slits separated by $d$:

- Bright fringes: $d\sin\theta = m\lambda$
- Dark fringes: $d\sin\theta = (m+\tfrac{1}{2})\lambda$

**Single-slit diffraction** — slit width $a$:

$$a\sin\theta = m\lambda \;(\text{dark fringes})$$

**Diffraction grating** — $N$ slits give sharper maxima; resolution $R = mN$.

**Thin-film interference**

Phase shifts come from path difference $\Delta = 2nt$ and reflection at a higher-$n$ boundary (extra $\lambda/2$).

- **One reflection shift:** constructive at $2nt = (m+\tfrac{1}{2})\lambda$
- **No or two shifts:** constructive at $2nt = m\lambda$

> **Physics link:** Telescope resolution is limited by diffraction: $\theta_{\min} = 1.22\lambda/D$.

> **Common pitfall:** Interference does not create or destroy energy — dark fringes are matched by doubly-bright ones; energy is redistributed, never lost. If your fringe accounting seems to delete energy, the analysis (not physics) has a bug.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* In Young's double-slit experiment, bright fringes occur where the path difference is an integer multiple of the wavelength.
   - True / False


**2.** *(Matching)* Match each wave optics phenomenon to its key equation.

**3.** *(Error highlight)* Find the error: 'Increasing the slit width in single-slit diffraction makes the central maximum wider.'

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
