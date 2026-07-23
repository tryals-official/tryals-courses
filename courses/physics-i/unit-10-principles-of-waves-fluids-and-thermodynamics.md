# Unit 10: Principles of Waves, Fluids and Thermodynamics

## Wave Properties and the Wave Equation

Do the stadium wave: you stand up and sit down, yet "the wave" races around the stadium. Nothing material travels — what moves is a **pattern**, carrying energy and information while the medium merely wiggles in place. That decoupling of stuff from signal is the essence of every wave.

A **wave** is a disturbance that transfers energy without transferring matter.

**The wave equation:**

$$\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 y}{\partial t^2}$$

**Travelling wave solution:**

$$y(x,t) = A\sin(kx - \omega t + \phi)$$

| Parameter | Symbol | Relation |
|-----------|--------|----------|
| Amplitude | $A$ | Maximum displacement |
| Wave number | $k$ | $k = 2\pi/\lambda$ |
| Angular frequency | $\omega$ | $\omega = 2\pi f$ |
| Speed | $v$ | $v = f\lambda = \omega/k$ |
| Period | $T$ | $T = 1/f = 2\pi/\omega$ |

**Types of waves**

- **Transverse:** displacement $\perp$ propagation (light, string waves).
- **Longitudinal:** displacement $\parallel$ propagation (sound).

**Energy in a wave** — The intensity (power per unit area) of a wave is:

$$I = \frac{1}{2}\rho v \omega^2 A^2$$

Intensity drops as $1/r^{2}$ for a point source (inverse-square law).

> **Physics link:** The wave equation appears everywhere — strings, sound, light, quantum mechanics. The solutions always have the same structure: oscillation in space and time.

> **Common pitfall:** Wave speed is a property of the **medium** (tension, density, temperature), not of the source. Shaking a rope harder makes taller waves, not faster ones — only changing the rope itself changes $v$.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Slider estimate)* A wave has frequency **4 Hz** and wavelength **2 m**. Set the slider to its speed, using $v = f\lambda$.

**2.** *(Matching)* Match each wave quantity to its SI unit.

**3.** *(Error highlight)* Find the error: 'The period of a wave with frequency $4 Hz$ is $T = 4 s$.'

---

## Superposition, Interference, and Standing Waves

Two waves can occupy the same place at the same time — try that with matter. They add point by point, sometimes reinforcing, sometimes erasing, then walk away unchanged. Confine waves between two walls and this superposition selects a discrete menu of standing patterns: the physics behind every musical instrument.

The **superposition principle** states that when two waves meet, the displacement is the sum:

$$y_{\text{total}} = y_1 + y_2$$

**Interference**

- **Constructive:** Waves in phase ($\Delta\phi = 0, 2\pi, \ldots$) $\Rightarrow$ larger amplitude.
- **Destructive:** Waves out of phase ($\Delta\phi = \pi, 3\pi, \ldots$) $\Rightarrow$ cancellation.

**Standing waves** form when two identical waves travel in opposite directions:

$$y = 2A\sin(kx)\cos(\omega t)$$

**Boundary conditions on a string**

| End condition | Nodes/antinodes | Harmonics |
|---------------|----------------|-----------|
| Both ends fixed | Nodes at ends | $\lambda_n = 2L/n$ |
| One end open | Node + antinode | $\lambda_n = 4L/n$ (odd $n$) |

**Resonant frequencies:**

$$f_n = \frac{nv}{2L} = \frac{n}{2L}\sqrt{\frac{T}{\mu}}$$

where $T$ is tension and $\mu$ is mass per unit length.

**Beats** — Two waves of slightly different frequencies produce:

$$f_{\text{beat}} = |f_1 - f_2|$$

> **Key insight:** Standing waves only form at specific frequencies — these are the **natural modes** of the system. This is why musical instruments produce distinct pitches.

> **Common pitfall:** At an instant of perfect destructive overlap the string can look completely flat — but the energy has not vanished. It is hiding in the string’s **velocity**. Displacement can cancel; energy cannot.

When two identical waves travel in opposite directions, they form a **standing wave**:

$$y(x,t) = 2A\sin(kx)\cos(\omega t)$$

The pattern has fixed **nodes** (zero displacement) and **antinodes** (maximum displacement).

For a string of length $L$ fixed at both ends:

$$\lambda_n = \frac{2L}{n}, \quad f_n = \frac{nv}{2L}$$

> Standing waves appear wherever boundaries reflect travelling waves — strings, pipes, and resonant cavities.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* A string is clamped at both walls, $L = 6$ m. Set the wavelength of the **third harmonic** — the string is flat until you send, then it oscillates with YOUR λ.

**2.** *(Multiple choice)* Two identical wave pulses — one upright, one inverted — travel toward each other on a string. At the instant they perfectly overlap, the string is **completely flat**. Where did the energy go?
   - A) Into the string’s motion — it is flat but moving, carrying all the energy as kinetic
   - B) It cancelled permanently, like the displacements did
   - C) It converted to heat at the overlap point
   - D) It reflected back toward both sources


**3.** *(Word search)* Find the five standing-wave and interference terms hidden in the grid.

---

## Sound Waves and the Doppler Effect

The siren’s pitch drops the moment the ambulance passes — you have heard the Doppler effect your whole life. Wavefronts bunch ahead of a moving source and stretch behind it. The same compression of waves, applied to starlight, is how we learned the universe is expanding.

**Sound** is a longitudinal pressure wave in a medium.

**Speed of sound** depends on the medium:

$$v = \sqrt{\frac{B}{\rho}} \quad\text{(general)}, \qquad v = 331 + 0.6T_C \;\text{m/s (air)}$$

where $B$ is the bulk modulus, $\rho$ is density, and $T_C$ is temperature in Celsius.

**Sound intensity level** (decibels):

$$\beta = 10\log_{10}\left(\frac{I}{I_0}\right), \qquad I_0 = 10^{-12}\;\text{W/m}^2$$

| Sound | Intensity level |
|-------|----------------|
| Threshold of hearing | $0$ dB |
| Normal conversation | $60$ dB |
| Rock concert | $110$ dB |
| Pain threshold | $130$ dB |

**Doppler effect** — The observed frequency shifts when source or observer moves:

$$f' = f\left(\frac{v \pm v_o}{v \mp v_s}\right)$$

Upper signs when approaching, lower when receding.

**Applications:** radar speed guns, medical ultrasound, redshift of galaxies.

> **Physics link:** The Doppler effect for light gives $f' = f\sqrt{(1\pm\beta)/(1\mp\beta)}$ (relativistic). The cosmic redshift $z = \Delta\lambda/\lambda$ tells us the universe is expanding.

> **Common pitfall:** For a source moving at constant speed the pitch does not slide continuously — you hear one steady raised pitch approaching, one steady lowered pitch receding, with the drop concentrated at the moment of passing.

When a wave source moves relative to an observer, the observed frequency shifts:

$$f' = f \frac{v \pm v_o}{v \mp v_s}$$

where $v$ is the wave speed, $v_s$ the source speed, and $v_o$ the observer speed.

- Source **approaching**: wavefronts compress → higher frequency (blueshift)
- Source **receding**: wavefronts stretch → lower frequency (redshift)

> The Doppler effect is used in radar, medical ultrasound, and measuring the expansion of the universe.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order these milestones in the history of acoustics.

**2.** *(Crossword)* Solve the crossword about sound waves.

**3.** *(Interactive scene)* Waves leave the source at $c = 1.6$ u/s. Set the source speed so the wavelength **ahead** of it is squeezed to HALF — the wavefronts appear only after you send.

---

## Fluid Statics: Pressure and Buoyancy

Water does not know or care what is above it — pressure at depth $h$ is $\rho g h$ whether the container is a thimble-thin tube or a lake. That single fact lets a syringe of fluid lift a car (hydraulics) and explains why dams are thick at the **bottom**, not the top.

**Pressure** is force per unit area: $P = F/A$, measured in pascals ($Pa = N/m ^{2}$).

**Hydrostatic pressure** at depth $h$ below the surface:

 P = P_0 + \rho g h 

where $P_0$ is atmospheric pressure ($\approx 1.013\times 10^{5}$ Pa).

**Pascal's principle** — Pressure applied to a confined fluid is transmitted equally throughout:

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

This is the basis of hydraulic systems.

**Archimedes' principle** — The buoyant force equals the weight of displaced fluid:

$$F_b = \rho_{\text{fluid}}\,g\,V_{\text{displaced}}$$

**Floating condition:** An object floats when $\rho_{\text{object}} < \rho_{\text{fluid}}$. The fraction submerged is:

$$\frac{V_{\text{sub}}}{V_{\text{total}}} = \frac{\rho_{\text{object}}}{\rho_{\text{fluid}}}$$

| Instrument | Principle |
|-----------|-----------|
| Manometer | Hydrostatic pressure |
| Barometer | Atmospheric pressure |
| Hydraulic press | Pascal's principle |
| Hydrometer | Buoyancy |

> **Key insight:** Pressure in a static fluid depends only on **depth**, not on the shape of the container. This is the hydrostatic paradox.

> **Common pitfall:** Buoyancy depends on the **displaced fluid’s** weight, not the object’s. A steel ship floats because its hull displaces a huge volume of water; solid steel of the same mass, displacing only its own small volume, sinks instantly.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Function graph)* How does **pressure** change with **depth** in a still lake? Pick the correct curve of $P$ versus depth $d$.

**2.** *(Matching)* Match each fluid-statics concept to its statement.

**3.** *(Error highlight)* Find the error: 'The pressure at the bottom of a lake depends on the surface area of the lake.'

---

## Fluid Dynamics: Continuity and Bernoulli's Equation

Fluids obey a traffic law: what flows in must flow out. Squeeze the pipe and the fluid must speed up ($A_1v_1 = A_2v_2$) — and, counterintuitively, its pressure **drops** where it moves fastest. That inverse pairing lifts airplane wings, curves soccer balls, and powers perfume atomizers.

For an **ideal fluid** (incompressible, non-viscous, steady flow):

**Continuity equation** (conservation of mass):

$$A_1 v_1 = A_2 v_2$$

Where the pipe narrows, the fluid speeds up.

**Bernoulli's equation** (conservation of energy along a streamline):

$$P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}$$

**Applications**

| Application | Key simplification |
|-------------|-------------------|
| Torricelli's theorem | $v = \sqrt{2gh}$ (drain speed) |
| Venturi tube | $P$ drops where $v$ increases |
| Pitot tube | Measures flow speed from pressure difference |
| Airplane lift | Faster air over wing $\to$ lower pressure |

**Real fluids** — Viscosity introduces friction. For laminar flow in a pipe:

**Poiseuille's law:**

$$Q = \frac{\pi r^4 \Delta P}{8\eta L}$$

**Reynolds number** predicts flow regime:

$$\text{Re} = \frac{\rho v D}{\eta}$$

- $\text{Re} < 2000$: laminar flow.
- $\text{Re} > 4000$: turbulent flow.

> **Physics link:** Bernoulli's equation is just the work-energy theorem applied to a fluid element. Each term represents a form of energy per unit volume.

> **Common pitfall:** Bernoulli’s equation holds along a streamline of **smooth, steady** flow with negligible friction. Applying it across turbulent, viscous or unconnected regions — like directly comparing two different pipes — produces confident nonsense.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* Water flows at 1 m/s where the pipe is 4 cm²; the throat narrows to 1 cm². Set the speed in the throat — the flow starts when you send.

**2.** *(Multiple choice)* You partly block a garden hose with your thumb and the water **jets out faster**. What made the water speed up?
   - A) The same flow must squeeze through a smaller area — continuity demands more speed
   - B) Your thumb raises the pressure at the opening, and high pressure means high speed
   - C) The water gains energy from friction with your thumb
   - D) It doesn’t speed up; it only looks that way because the stream is thinner


**3.** *(Word search)* Find the five fluid dynamics terms hidden in the grid.

---

## Temperature and Thermal Properties of Matter

Temperature is not a substance but a census: the average kinetic energy of molecules too small to see. Once you buy that, thermal phenomena become mechanics — expansion is atoms jostling for elbow room, and the absolute zero of temperature is simply the floor where jostling stops.

**Temperature** measures the average kinetic energy of molecules. **Heat** is energy transferred due to a temperature difference.

**Temperature scales**

$$T_K = T_C + 273.15, \qquad T_F = \frac{9}{5}T_C + 32$$

**Thermal expansion** — Most materials expand when heated:

$$\Delta L = \alpha L_0 \Delta T \quad\text{(linear)}, \qquad \Delta V = \beta V_0 \Delta T \quad\text{(volume)}$$

where $\beta \approx 3\alpha$.

**Heat capacity** — The energy needed to raise the temperature:

$$Q = mc\Delta T$$

| Substance | $c$ (J/(kg K)) |
|-----------|----------------|
| Water | $4186$ |
| Aluminium | $900$ |
| Copper | $385$ |
| Iron | $449$ |

**Phase changes** occur at constant temperature:

 Q = mL 

where $L$ is the **latent heat** (of fusion or vaporisation).

**Calorimetry** — In an isolated system, heat lost = heat gained:

$$\sum Q_i = 0 \implies m_1 c_1(T_f - T_1) + m_2 c_2(T_f - T_2) = 0$$

> **Tip:** Always check whether a phase change occurs before assuming $Q = mc\Delta T$. If the system reaches $0^{\circ}$C or $100^{\circ}$C, account for latent heat.

> **Common pitfall:** Temperature and heat are different currencies. A sparkler at 1000 °C holds far less thermal energy than a bathtub at 40 °C — temperature is the average per molecule; heat depends on how many molecules are paying in.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order these milestones in the history of thermometry and thermal physics.

**2.** *(Crossword)* Solve the crossword about temperature and thermal properties.

**3.** *(Interactive scene)* Heat **2 kg of water** ($c = 4200$ J/(kg·K)) by **30 K**. Set the energy required in kJ — the burner runs after you send.

---

## Heat Transfer: Conduction, Convection, Radiation

Touch a metal bench and a wooden one on the same cold morning: same temperature, wildly different feel. Your skin measures heat **flow**, not temperature — and conduction, convection and radiation are the three highways that flow can take. Engineering a thermos is just blocking all three at once.

There are three mechanisms of **heat transfer**.

**Conduction** — Heat flows through a material by molecular collisions:

$$\frac{dQ}{dt} = -kA\frac{dT}{dx} \qquad\text{(Fourier's law)}$$

where $k$ is **thermal conductivity** (W/(m K)).

**Thermal resistance** for a slab of thickness $L$:

$$R_{\text{th}} = \frac{L}{kA}, \qquad \frac{dQ}{dt} = \frac{\Delta T}{R_{\text{th}}}$$

**Convection** — Heat carried by fluid motion:

$$\frac{dQ}{dt} = hA(T_s - T_\infty)$$

where $h$ is the convective heat transfer coefficient.

**Radiation** — All objects emit thermal radiation:

$$P = \varepsilon\sigma A T^4 \qquad\text{(Stefan-Boltzmann law)}$$

| Constant | Value |
|----------|-------|
| $\sigma$ (Stefan-Boltzmann) | $5.67\times 10^{-8}$ W/(m$^{2}$ K$^{4}$) |
| $\varepsilon$ (emissivity) | $0$ (perfect reflector) to $1$ (blackbody) |

**Wien's displacement law** — Peak wavelength of blackbody radiation:

$$\lambda_{\max} T = 2.898\times 10^{-3}\;\text{m K}$$

> **Physics link:** The Sun ($T \approx 5778$ K) peaks at $\lambda \approx 500$ nm (visible light). The Earth ($T \approx 288$ K) peaks at $\lambda \approx 10\;\mu$m (infrared).

> **Common pitfall:** "Cold" is not a thing that flows into you. There is only heat flowing **out**. Every heat-transfer analysis tracks energy moving from hot to cold; reversing the bookkeeping direction is the fastest way to sign errors.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* Thermal radiation can transfer heat through a vacuum because it travels as electromagnetic waves.
   - True / False


**2.** *(Matching)* Match each heat transfer mechanism to its description.

**3.** *(Error highlight)* Find the error: 'Conduction requires fluid motion to transfer heat from hot to cold regions.'

---

## First Law of Thermodynamics

The first law is the universe’s unbreakable accounting rule: a system’s internal energy changes only by heat in or work out. A bicycle pump warms as you compress (work becomes internal energy); a spray can chills as gas expands (internal energy becomes work). No process ever cheats the ledger.

$$\Delta U = Q - W$$

where $\Delta U$ is internal energy change, $Q$ is heat added, $W$ is work done **by** the system.

**Work by a gas:** $W = \int_{V_i}^{V_f} P\,dV$

**Ideal gas processes**

- **Isothermal** ($T$ const): $W = nRT\ln(V_f/V_i)$, $Q = W$
- **Isobaric** ($P$ const): $W = P\Delta V$, $Q = nC_P\Delta T$
- **Isochoric** ($V$ const): $W = 0$, $Q = nC_V\Delta T$
- **Adiabatic** ($Q = 0$): $W = -\Delta U$

**Internal energy:** $U = nC_V T$

**Mayer's relation:** $C_P - C_V = R$

**Adiabatic relations:**

$$PV^\gamma = \text{const}, \quad TV^{\gamma-1} = \text{const}$$

where $\gamma = C_P/C_V$.

> **Key insight:** The first law conserves energy but doesn't say which processes are possible — that requires the second law.

> **Common pitfall:** $Q = 0$ (no heat exchanged) does not mean $\Delta T = 0$. Adiabatic compression raises temperature purely through work — that is how a diesel engine ignites fuel with no spark plug at all.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Cloze bank)* Complete the following passage by choosing the correct terms from the word bank.

**2.** *(Multiple choice)* A gas in an insulated cylinder (no heat exchange) is **compressed** by pushing the piston in. What happens to the gas temperature?
   - A) It rises — the work done on the gas becomes internal energy
   - B) It stays constant because no heat was added
   - C) It falls, since compression removes energy
   - D) It cannot be determined without knowing the gas


**3.** *(Word search)* Find the five thermodynamics terms hidden in the grid.

---

## Second Law of Thermodynamics and Entropy

Break an egg, stir cream into coffee, let perfume fill a room — you never see the reverse, though no law of mechanics forbids it. The second law is a law of **probability**: disordered arrangements so overwhelmingly outnumber ordered ones that, with $10^{23}$ players, "unlikely" becomes "never". Entropy is the arrow on time’s compass.

The **second law** determines the direction of natural processes.

**Statements**

- **Clausius:** Heat cannot spontaneously flow from cold to hot.
- **Kelvin-Planck:** No engine can convert heat entirely into work.

**Entropy** measures disorder:

$$\Delta S = \int \frac{dQ_{\text{rev}}}{T} \geq 0 \quad\text{(for an isolated system)}$$

**Carnot engine** — The most efficient heat engine operating between $T_H$ and $T_C$:

$$\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$$

No real engine can exceed Carnot efficiency.

**Entropy changes**

| Process | $\Delta S$ |
|---------|-----------|
| Isothermal heat transfer | $Q/T$ |
| Heating from $T_1$ to $T_2$ | $mc\ln(T_2/T_1)$ |
| Mixing (irreversible) | $> 0$ |
| Free expansion | $nR\ln(V_f/V_i) > 0$ |

**Statistical interpretation** — Boltzmann:

 S = k_B\ln\Omega 

where $\Omega$ is the number of microstates. Systems evolve toward the macrostate with the largest $\Omega$.

> **Key insight:** Entropy always increases in isolated systems. This defines the **arrow of time** — the past had lower entropy than the future.

> **Common pitfall:** Entropy can decrease locally — your freezer does it nightly — as long as more entropy is exported elsewhere (the warm air behind it). The law binds only the **total**: system plus surroundings, never a subsystem alone.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order these milestones in the history of entropy and the second law.

**2.** *(Crossword)* Solve the crossword about entropy and the second law.

**3.** *(Interactive scene)* A heat engine runs between $T_h = 500$ K and $T_c = 300$ K. Set the **maximum possible** efficiency — the energy split shows after you send.

---

## Problem-Solving: Waves, Fluids, and Thermodynamics

One toolkit now spans an astonishing range: the same wave equation runs guitar strings and earthquake tremors, the same Bernoulli logic flies aircraft and bursts pipes, the same thermodynamic laws grade power plants and refrigerators. Capstone problems are exercises in **recognizing** which of these few deep patterns is wearing a costume.

**Decision guide**

- Wave speed: $v = f\lambda$
- Standing waves: boundary conditions
- Fluid at rest: $P = P_0 + \rho g h$
- Fluid flow: Bernoulli's equation
- Temperature change: $Q = mc\Delta T$
- Phase change: $Q = mL$
- Heat engine: $\eta = W/Q_H$
- Entropy: $\Delta S = \int dQ/T$

**General strategy**

1. **Identify** the system and draw a diagram.
2. **List** knowns and unknowns with units.
3. **Choose** the governing equation(s).
4. **Solve** algebraically before substituting.
5. **Check** units and limiting cases.

**Common mistakes**

- Using gauge instead of absolute pressure in gas laws.
- Forgetting to convert to kelvin.
- Ignoring the sign convention for $W$ and $Q$.

> **Tip:** Dimensional analysis is your most powerful sanity check.

> **Common pitfall:** Real problems rarely announce their chapter. Before computing, classify: is this a wave phenomenon (interference? Doppler?), a fluid balance (continuity? buoyancy?), or an energy ledger (first law? Carnot limit?). A minute of classification saves an hour of wrong formulas.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* Bernoulli's equation P + $\frac{1}{2} \rho v^{2}$ + $\rho gh = constant$ applies to ideal, incompressible, steady, irrotational flow along a streamline.
   - True / False


**2.** *(Matching)* Match each physical law to the domain it primarily governs.

**3.** *(Error highlight)* Find the error: 'The Carnot efficiency η = 1 − $T_h$/$T_c$ gives the maximum efficiency of a heat engine.'

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
