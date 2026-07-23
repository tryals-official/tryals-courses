# Unit 2: Chemistry

**[Study this unit interactively on Tryals →](https://tryals.app/courses/physics-i)**

## Atomic structure and quantized description

Matter is built from **atoms**, each composed of a **nucleus** (protons + neutrons) surrounded by **electrons** in quantized energy levels.

**Quantum numbers** — Each electron is described by four numbers:

- $n$ — **Principal** ($1, 2, 3, \ldots$)
- $\ell$ — **Angular momentum** ($0$ to $n-1$)
- $m_\ell$ — **Magnetic** ($-\ell$ to $+\ell$)
- $m_s$ — **Spin** ($+\tfrac{1}{2}$ or $-\tfrac{1}{2}$)

**Key relationships**

- **Amount of substance:** $n = m/M$
- **Avogadro's number:** $N_A = 6.022\times 10^{23}\;\text{mol}^{-1}$
- **Ideal gas law:** $PV = nRT$

**Electron configuration** follows three rules:

1. **Aufbau principle** — Fill lowest energy orbitals first.
2. **Pauli exclusion** — No two electrons share all four quantum numbers.
3. **Hund's rule** — Maximise unpaired spins within a subshell.

> **Physics link:** The discrete energy levels $E_n = -13.6/n^{2}$ eV (hydrogen) come from solving the **Schrödinger equation** for the Coulomb potential.

> **Common pitfall:** Electron "orbits" are a cartoon: orbitals are probability clouds, and energy levels are discrete. An electron does not spiral between levels — it jumps, absorbing or emitting exactly the energy difference as light.

In the **Bohr model**, electrons orbit the nucleus in allowed orbits with quantized angular momentum:

$$L = n\hbar, \quad n = 1, 2, 3, \ldots$$

The energy of each orbit is:

$$E_n = -\frac{13.6}{n^2}\;\text{eV}$$

Transitions between levels emit or absorb a photon of energy $\Delta E = E_f - E_i$.

> Although superseded by quantum mechanics, the Bohr model correctly predicts hydrogen's emission spectrum.

**Practice preview:**

**1.** *(True false)* The atomic number of an element equals the number of protons in its nucleus.
   - True / False


**2.** *(Matching)* Match each quantum number to its meaning.

**3.** *(Error highlight)* Highlight the incorrect step in writing the electron configuration of sulfur ($Z = 16$).

---

## Chemical periodicity

The **Periodic Table** organises elements by increasing atomic number $Z$ and groups them by similar chemical behaviour.

**Periodic trends across a period** (left $\to right)$:

| Property | Trend | Reason |
|----------|-------|--------|
| Atomic radius | **Decreases** | Higher $Z_{\text{eff}}$ pulls electrons closer |
| Ionisation energy | **Increases** | Electrons are more tightly bound |
| Electronegativity | **Increases** | Greater attraction for bonding electrons |

**Effective nuclear charge**

$$Z_{\text{eff}} = Z - S$$

where $S$ is the **shielding constant** from inner electrons.

**Down a group** — Atomic radius increases (new shell), ionisation energy decreases, and electronegativity decreases.

**Key blocks**

- **s-block** (groups 1–2): Highly reactive metals, low ionisation energy.
- **p-block** (groups 13–18): Diverse — metals, metalloids, non-metals, noble gases.
- **d-block** (groups 3–12): Transition metals with variable oxidation states.

**Mole-mass bridge** — The molar mass $M$ on the periodic table converts grams to moles: $n = m / M$.

> **Tip:** Periodic trends are predictable because they all stem from the same underlying variable: $Z_{\text{eff}}$.

> **Common pitfall:** Periodic trends have two competing drivers — nuclear charge and shielding/distance. Across a period, charge wins (atoms shrink); down a group, distance wins (atoms grow). State which driver dominates, not just the trend.

**Practice preview:**

**1.** *(Interactive scene)* Period 2 with the sizes **hidden**: mark the element with the smallest atomic radius.

**2.** *(Multiple choice)* Moving **down** the alkali metals (Li → Na → K → Rb), the atoms get bigger — yet they give up their outer electron **more** easily. Why?
   - A) The outer electron sits farther out and is screened by more inner shells, so the nucleus grips it weakly
   - B) Bigger atoms have more protons, which push electrons away
   - C) Heavier atoms are hotter, shaking electrons loose
   - D) Lower rows have more outer electrons to spare


**3.** *(Word search)* Find five terms related to periodicity and the periodic table.

---

## Bonding and molecular geometry

Atoms bond to reach a **lower energy state**. The type of bond determines molecular properties.

**Bond types**

| Bond | Description | Example |
|------|-------------|---------|
| **Ionic** | Electron transfer; $\Delta\chi > 1.7$ | NaCl |
| **Covalent** | Electron sharing; $\Delta\chi < 1.7$ | H$_2$O |
| **Metallic** | Delocalised electron sea | Cu |

**Lewis structures** — Count valence electrons, draw bonds (shared pairs) and lone pairs. The **octet rule** guides most main-group atoms.

**VSEPR theory** — Electron-pair geometry determines **molecular shape**:

$$\text{Steric number} = \text{bonding pairs} + \text{lone pairs}$$

| Steric no. | Geometry | Example |
|------------|----------|---------|
| 2 | Linear | CO$_2$ |
| 3 | Trigonal planar | BF$_3$ |
| 4 | Tetrahedral | CH$_4$ |

**Bond enthalpy**

$$\Delta H_{\text{rxn}} = \sum D_{\text{broken}} - \sum D_{\text{formed}}$$

A **negative** $\Delta H$ means the reaction is **exothermic**.

**Dipole moments** — The molecular dipole is the vector sum of individual bond dipoles: $\vec{\mu}_{\text{total}} = \sum \vec{\mu}_i$.

> **Key insight:** Symmetric molecules (like CO$_2$) can have polar bonds yet **zero net dipole** because the bond vectors cancel.

> **Common pitfall:** Molecular shape is set by **all** electron groups, including invisible lone pairs — but the named geometry describes only the atoms. Water has four tetrahedral electron groups yet is called "bent".

**Practice preview:**

**1.** *(Timeline ordering)* Order the steps to predict molecular geometry using VSEPR theory.

**2.** *(Crossword)* Solve the crossword about chemical bonding.

**3.** *(Interactive scene)* Four electron domains repel to the tetrahedral ideal. Set the bond angle to that value — recall it, the scene won't tell you.

---

## Intermolecular interactions

While **intramolecular** bonds hold atoms together inside a molecule, **intermolecular forces** act *between* molecules and govern macroscopic properties like boiling point and viscosity.

**Types of intermolecular forces** (weakest $\to strongest)$:

| Force | Origin | Strength |
|-------|--------|----------|
| **London dispersion** | Temporary dipoles in all molecules | Weak; scales with size |
| **Dipole-dipole** | Permanent dipoles align | Moderate |
| **Hydrogen bonding** | H bonded to N, O, or F | Strong |

**Van der Waals potential**

$$V(r) \propto -\frac{1}{r^{6}} \quad \text{(attractive at moderate } r \text{)}$$

**Phase and energy**

- **Gibbs free energy:** $\Delta G = \Delta H - T\Delta S$.
- A process is **spontaneous** when $\Delta G < 0$.
- **Boltzmann distribution:** $P(\text{state}) \propto e^{-E/k_BT}$.

**Connecting forces to phases**

- **Gases:** Weak interactions; molecules move freely.
- **Liquids:** Moderate interactions; molecules slide past each other.
- **Solids:** Strong interactions; molecules locked in a lattice.

> **Physics link:** The depth of the intermolecular potential well determines the **boiling point** — deeper well means more energy needed to vaporise.

> **Common pitfall:** Hydrogen bonds are **between** molecules, not within them: they are attractions between an H bonded to N/O/F and a lone pair on a neighbouring molecule — about 20× weaker than the covalent bonds inside molecules.

**Practice preview:**

**1.** *(Venn diagram)* Sort each substance by the intermolecular forces present **between its molecules**.

**2.** *(Matching)* Match each intermolecular force to its description.

**3.** *(Error highlight)* Highlight the incorrect statement about intermolecular forces.

---

## States of matter and phase behaviour

The three classical **phases** — solid, liquid, gas — are distinguished by the balance between **thermal energy** $k_BT$ and **intermolecular potential energy**.

**Phase diagrams** plot pressure $P$ vs temperature $T$ and show:

- **Phase boundaries:** Curves where two phases coexist.
- **Triple point:** All three phases coexist simultaneously.
- **Critical point:** Above this $(T_c, P_c)$, liquid and gas become indistinguishable (**supercritical fluid**).

**Clausius–Clapeyron equation**

$$\ln\frac{P_2}{P_1} = -\frac{\Delta H_{\text{vap}}}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)$$

This relates vapour pressure to temperature along the liquid-gas boundary.

**Solutions and Raoult's law**

 P_i = x_i\,P_i^{*} 

where $x_i$ is the **mole fraction** and $P_i^*$ is the pure-component vapour pressure.

**Colligative properties** depend only on the number of dissolved particles:

- **Boiling-point elevation:** $\Delta T_b = i\,K_b\,m$.
- **Freezing-point depression:** $\Delta T_f = i\,K_f\,m$.

> **Key insight:** Adding a non-volatile solute always lowers vapour pressure and raises the boiling point — this is why salted water boils at a higher temperature.

> **Common pitfall:** During a phase change, added heat does not raise the temperature — it pays the latent-heat cost of rearranging molecules. A boiling pot stays at 100 °C no matter how high the flame.

Matter exists in three main phases, distinguished by particle arrangement and energy:

- **Solid:** particles in a fixed lattice, vibrating about equilibrium positions.
- **Liquid:** particles close together but free to slide past one another.
- **Gas:** particles far apart, moving rapidly with high kinetic energy.

Phase transitions occur when thermal energy overcomes intermolecular forces. The **latent heat** $L$ is the energy per unit mass required for the transition: $Q = mL$.

> Temperature stays constant during a phase change — all added energy goes into breaking bonds.

**Practice preview:**

**1.** *(Interactive scene)* A sealed piston holds **4 L at 1 atm**, constant temperature. It is compressed to **1 L** — set the final pressure; the gauge turns on when you send.

**2.** *(Multiple choice)* Sweat cools you even on a hot day. At the molecular level, why does **evaporation** lower the temperature of the liquid left behind?
   - A) Only the fastest molecules escape, so the average energy of those remaining drops
   - B) Evaporating molecules absorb cold from the air and bring it back
   - C) The liquid shrinks, concentrating its heat into less volume
   - D) Escaping molecules push heat away as they leave


**3.** *(Word search)* Find five phase-behaviour terms.

---

## Stoichiometric relationships

**Stoichiometry** is the quantitative backbone of chemistry — it links the amounts of reactants consumed to products formed via **mole ratios**.

**Balanced equation**

$$a\,A + b\,B \;\longrightarrow\; c\,C + d\,D$$

The coefficients $a, b, c, d$ are the **stoichiometric coefficients**. Mass and charge must be conserved.

**Conversion chain**

$$\text{grams} \;\xrightarrow{\div\,M}\; \text{moles} \;\xrightarrow{\times\,\text{ratio}}\; \text{moles of target} \;\xrightarrow{\times\,M}\; \text{grams}$$

**Limiting reagent** — The reactant that runs out first determines the maximum yield. To find it, convert all reactants to moles and compare to the required ratio.

**Concentration measures**

| Measure | Formula |
|---------|---------|
| **Molarity** $M$ | $\dfrac{n_{\text{solute}}}{V_{\text{solution}}}$ |
| **Mole fraction** $x_i$ | $\dfrac{n_i}{\sum n_j}$ |
| **Molality** $m$ | $\dfrac{n_{\text{solute}}}{m_{\text{solvent (kg)}}}$ |

**Percent yield**

$$\%\;\text{yield} = \frac{\text{actual yield}}{\text{theoretical yield}}\times 100$$

> **Tip:** Dimensional analysis is your best friend. Track units through every step and cancel them — if the units come out wrong, the calculation is wrong.

> **Common pitfall:** Balanced coefficients relate **moles**, never grams. Converting masses to moles before using the ratio — and back after — is the non-negotiable detour of every stoichiometry problem.

**Practice preview:**

**1.** *(Timeline ordering)* Order the steps to balance a chemical equation by inspection.

**2.** *(Crossword)* Solve the crossword about stoichiometry.

**3.** *(Interactive scene)* $2H_2 + O_2 \to 2H_2O$, starting from **6 H₂ and 2 O₂**. One reactant runs out first — set how many H₂O form.

---

## Reaction rates and collision reasoning

**Chemical kinetics** studies *how fast* reactions proceed, not just whether they are thermodynamically favourable.

**Rate law**

$$v = k\,[A]^{m}\,[B]^{n}$$

The exponents $m, n$ are the **reaction orders** (determined experimentally, *not* from the balanced equation).

**Collision theory** — For a reaction to occur, molecules must:

1. **Collide** with sufficient **kinetic energy** $\geq E_a$ (activation energy).
2. Have the correct **orientation**.

**Arrhenius equation**

 k = A\,e^{-E_a / RT} 

- $A$: pre-exponential (frequency) factor.
- $E_a$: activation energy.
- $R = 8.314\;\text{J mol}^{-1}\text{K}^{-1}$.

**Temperature dependence** — Taking the logarithm gives a linear form:

$$\ln k = \ln A - \frac{E_a}{R}\cdot\frac{1}{T}$$

A plot of $\ln k$ vs $1/T$ yields a straight line with slope $-E_a/R$.

**Catalysts** lower $E_a$ without being consumed, increasing the rate without shifting equilibrium.

> **Key insight:** Doubling the temperature does not simply double the rate — the exponential Arrhenius dependence means the effect is much larger.

> **Common pitfall:** A catalyst speeds the journey but never moves the destination: it lowers the activation barrier for forward and reverse reactions equally, changing the rate, not the equilibrium.

**Practice preview:**

**1.** *(True false)* Increasing temperature increases reaction rate by providing more molecules with $energy \geq E$ₐ.
   - True / False


**2.** *(Matching)* Match each factor to its effect on reaction rate.

**3.** *(Error highlight)* Highlight the incorrect requirement of collision theory.

---

## Acid-base language and solution thinking

**Brønsted–Lowry definition** — An **acid** donates a proton (H$^+$); a **base** accepts one.

**pH scale**

$$\text{pH} = -\log_{10}[\text{H}_3\text{O}^+]$$

- pH $< 7$: acidic. pH $= 7$: neutral. pH $> 7$: basic.
- **Autoprotolysis of water:** $K_w = [\text{H}_3\text{O}^+][\text{OH}^-] = 10^{-14}$ at $25 ^{\circ}C$.

**Weak acid equilibrium**

$$\text{HA} + \text{H}_2\text{O} \rightleftharpoons \text{A}^- + \text{H}_3\text{O}^+ \qquad K_a = \frac{[\text{A}^-][\text{H}_3\text{O}^+]}{[\text{HA}]}$$

**Henderson–Hasselbalch equation** for buffer solutions:

$$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$$

**Titration** — Adding a strong base to a weak acid traces a characteristic **S-shaped curve**:

- **Half-equivalence point:** $\text{pH} = \text{p}K_a$ (buffer capacity is maximum).
- **Equivalence point:** Moles of acid = moles of base; pH $> 7$ for a weak acid.
- **Indicator choice:** Select a dye whose colour change occurs near the equivalence pH.

> **Tip:** The Henderson–Hasselbalch equation only works when the buffer ratio $[\text{A}^-]/[\text{HA}]$ is between about 0.1 and 10.

> **Common pitfall:** pH is logarithmic: each unit is a factor of 10 in $H^{+}$. pH 3 is not "a bit" more acidic than pH 5 — it is one hundred times more.

**Practice preview:**

**1.** *(Interactive scene)* You need **100 mL of 1.5 M** acid from a **6 M** stock. Set how many mL of stock to pour before topping up with water.

**2.** *(Multiple choice)* Lemon juice is pH 2; black coffee is pH 5. How much more acidic (higher $H^{+}$ concentration) is the lemon juice?
   - A) 1000× — each pH unit is a factor of 10
   - B) 3× — three units difference
   - C) 30× — ten times three units
   - D) 8× — two cubed


**3.** *(Word search)* Find five acid-base chemistry terms.

---

## Representations from particles to formulas

Chemistry operates at multiple scales simultaneously. Connecting the **particulate** (atoms, ions) to the **symbolic** (formulas, equations) and the **macroscopic** (mass, volume, colour) is a core skill.

**Ionic equilibrium**

For a sparingly soluble salt $A_b B_a$:

 K_{sp} = [A^{m+}]^{b}\,[B^{n-}]^{a} 

If the **ion product** $Q > K_{sp}$, a **precipitate** forms.

**Ionic strength**

$$I = \frac{1}{2}\sum c_i\,z_i^{2}$$

At high ionic strength, activities $a_i = \gamma_i [C_i]$ deviate from concentrations, and we must use **activity coefficients** $\gamma_i$.

**Titration curves revisited**

- The curve's shape depends on whether the acid/base is strong or weak.
- **Buffer regions** resist pH change; they appear before the equivalence point.
- The **inflection point** of the curve marks the equivalence.

**Representation triangle**

$$\text{Particulate} \;\longleftrightarrow\; \text{Symbolic} \;\longleftrightarrow\; \text{Macroscopic}$$

Being able to move fluidly between these three levels is what separates formula plugging from genuine chemical understanding.

> **Key insight:** $K_{sp}$ is an equilibrium constant — it is fixed at a given temperature. Adding a common ion shifts the equilibrium and *reduces* solubility (**common-ion effect**).

> **Common pitfall:** Same formula, different substance: isomers like ethanol and dimethyl ether share C₂H₆O but differ completely in properties. A molecular formula records composition, not identity.

**Practice preview:**

**1.** *(Timeline ordering)* Order the levels of chemical representation from smallest (sub-atomic) to largest (macroscopic).

**2.** *(Crossword)* Solve the crossword about chemical formulas.

**3.** *(Cloze bank)* Complete the statement with the correct term.

---

## Integrated chemical reasoning

This lesson synthesises all prior chemistry topics into multi-step problem solving.

**Problem-solving framework**

1. **Identify the system** — What species are present? What phase(s)?
2. **Write the balanced equation** — Ensure mass and charge conservation.
3. **Apply the relevant model** — Stoichiometry, equilibrium, kinetics, or thermodynamics.
4. **Compute** — Use $n = m/M$, rate laws, $K_{sp}$, or $\Delta G$ as needed.
5. **Validate** — Check units, significant figures, and physical reasonableness.

**Connecting thermodynamics to equilibrium**

$$\Delta G^\circ = -RT\ln K$$

This links the **standard free energy change** to the **equilibrium constant**: a large negative $\Delta G^\circ$ means a large $K$ (products strongly favoured).

**Le Chatelier's principle** — When a system at equilibrium is disturbed, it shifts to partially oppose the change:

- Add reactant → shift right.
- Increase temperature (exothermic rxn) → shift left.
- Increase pressure → shift toward fewer moles of gas.

**Electrochemistry preview**

$$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$$

A positive $E^\circ_{\text{cell}}$ means the reaction is spontaneous as written.

> **Strategy:** In multi-step problems, draw a roadmap before computing. Identify which concepts connect (e.g., stoichiometry feeds into equilibrium, which feeds into pH) and solve in the right order.

> **Common pitfall:** Chemical intuition lives at three levels at once — particles, symbols, and bulk observations. Most confusion comes from silently switching level mid-argument; name the level you are reasoning at.

**Practice preview:**

**1.** *(True false)* Le Chatelier's principle states that a system at equilibrium will shift to partially oppose any stress applied to it.
   - True / False


**2.** *(Matching)* Match each thermodynamic sign convention to its meaning.

**3.** *(Error highlight)* Highlight the incorrect step in applying Le Chatelier's principle.

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
