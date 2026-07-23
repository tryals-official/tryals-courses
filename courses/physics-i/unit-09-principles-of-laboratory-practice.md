# Unit 9: Principles of Laboratory Practice

## Scientific Method and Experimental Design

The **scientific method** is the systematic approach to acquiring reliable knowledge through observation, hypothesis, and experiment.

**Steps**

1. **Observe** a phenomenon and formulate a **question**.
2. Propose a **hypothesis** — a testable prediction.
3. Design an **experiment** with controlled variables.
4. Collect and **analyse** data.
5. Draw **conclusions** and compare with the hypothesis.

**Variable types**

| Type | Definition | Example |
|------|-----------|---------|
| Independent | Variable you change | Applied voltage |
| Dependent | Variable you measure | Current through resistor |
| Controlled | Variables held constant | Temperature, wire length |

**Reproducibility** — An experiment must be **repeatable** (same lab) and **reproducible** (different lab). Without this, results are not reliable.

**Null hypothesis** — Assume no effect exists ($H_0$). The experiment tries to **reject** $H_0$ with statistical confidence.

> **Key insight:** A good experiment doesn't prove a hypothesis — it fails to disprove it. One contradicting observation can overturn a theory, but no number of confirming observations can prove it absolutely.

> **Common pitfall:** An experiment that cannot fail is not an experiment. If no conceivable data would count against the hypothesis, the procedure tests nothing — build in the possibility of being wrong.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* A scientific hypothesis must be testable and falsifiable.
   - True / False


**2.** *(Matching)* Match each step of the scientific method to its description.

**3.** *(Error highlight)* Find the error: 'A theory is just a guess that has not yet been proven true by experiments.'

---

## Measurement, Uncertainty, and Error Analysis

Every measurement has **uncertainty**. Reporting a result without its uncertainty is incomplete.

**Standard notation:**

$$x = x_{\text{best}} \pm \delta x$$

**Types of error**

| Type | Cause | How to reduce |
|------|-------|---------------|
| **Random** | Fluctuations in readings | Repeat and average |
| **Systematic** | Calibration, zero offset | Improve method, calibrate |
| **Resolution** | Instrument's smallest division | Use finer instrument |

**Absolute vs. relative uncertainty**

$$\text{Absolute: } \delta x, \qquad \text{Relative: } \frac{\delta x}{x} \times 100\%$$

**Significant figures** — The last digit of a measurement reflects the uncertainty. For example, $L = 3.45$ m means the uncertainty is in the hundredths place ($\pm 0.005$ m).

**Rules for significant figures**

- Addition/subtraction: match the fewest **decimal places**.
- Multiplication/division: match the fewest **significant figures**.

> **Tip:** Always report uncertainty to **one** significant figure (two at most), and round the measurement to match. For example: $g = 9.81 \pm 0.03$ m/s$^{2}$, not $9.8134 \pm 0.0312$.

> **Common pitfall:** A measurement without an uncertainty is only half a result: "$g = 9.7$" is unfalsifiable until you say $\pm$ what. The error bar is not an admission of failure — it is the claim’s precision.

Every measurement has an associated **uncertainty**. Repeated measurements of the same quantity cluster around a mean $\bar{x}$ with spread described by the standard deviation:

$$\sigma = \sqrt{\frac{1}{N-1}\sum_{i=1}^N (x_i - \bar{x})^2}$$

The **standard error of the mean** $\sigma_{\bar{x}} = \sigma/\sqrt{N}$ shrinks as more measurements are taken.

> A result is reported as $\bar{x} \pm \sigma_{\bar{x}}$ — the uncertainty quantifies our confidence in the measurement.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* True value 10.0, your measurement 9.6. Set the percent error.

**2.** *(Multiple choice)* Five stopwatch timings of one pendulum swing: 2.01, 1.98, 2.03, 1.99, 2.02 s. A classmate reports the result as **1.98 s** "because it was measured too". What is the right report?
   - A) The mean 2.01 s, with an uncertainty estimated from the spread
   - B) The smallest value, to be conservative
   - C) The most recent measurement — practice makes it best
   - D) Whichever value appeared twice


**3.** *(Word search)* Find five measurement-related terms.

---

## Propagation of Errors

When $R = f(x, y)$, uncertainty propagates:

$$\delta R = \sqrt{\left(\frac{\partial f}{\partial x}\delta x\right)^2 + \left(\frac{\partial f}{\partial y}\delta y\right)^2}$$

**Common cases**

- **Sum/difference** ($R = x \pm y$):

$$\delta R = \sqrt{(\delta x)^2 + (\delta y)^2}$$

- **Product or quotient** ($R = xy$ or $x/y$):

$$\frac{\delta R}{R} = \sqrt{(\delta x/x)^2 + (\delta y/y)^2}$$

- **Power** ($R = x^n$): $\delta R / R = |n|\cdot\delta x / x$

**Example** — $v = d/t$ with $d = 2.50 \pm 0.02$ m, $t = 1.20 \pm 0.05$ s:

$$v = 2.08 \pm 0.09\;\text{m/s}$$

> **Key insight:** The quantity with the largest relative uncertainty dominates. Improve that measurement first.

> **Common pitfall:** Independent uncertainties combine in quadrature ($\sqrt{a^{2}+b^{2}}$), not by addition — and powers multiply relative errors by the exponent. Adding everything linearly overstates the error; ignoring exponents understates it.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps for propagating uncertainty through a calculation.

**2.** *(Crossword)* Solve the crossword about error propagation.

**3.** *(Interactive scene)* Fit the trend line by eye — the residuals are **hidden** and get scored only when you send.

---

## Statistical Analysis of Experimental Data

When you repeat a measurement $N$ times, **statistics** summarises the results.

**Mean** (best estimate):

$$\bar{x} = \frac{1}{N}\sum_{i=1}^N x_i$$

**Standard deviation** (spread of individual measurements):

$$s = \sqrt{\frac{1}{N-1}\sum_{i=1}^N (x_i - \bar{x})^2}$$

**Standard error of the mean** (uncertainty in $\bar{x}$):

$$\sigma_{\bar{x}} = \frac{s}{\sqrt{N}}$$

**Key relationships**

| Quantity | What it measures |
|----------|-----------------|
| $s$ | Spread of the data |
| $\sigma_{\bar{x}}$ | Uncertainty in the mean |
| $N$ | More repeats $\to$ smaller $\sigma_{\bar{x}}$ |

**Gaussian distribution** — For many random errors, measurements follow a bell curve where $\approx 68\%$ of values lie within $\bar{x} \pm s$ and $\approx 95\%$ within $\bar{x} \pm 2s$.

**Outlier detection** — A point more than $3s$ from the mean is suspicious. Use **Chauvenet's criterion** or the **Grubbs test** to decide whether to reject it.

> **Tip:** Increasing $N$ from 4 to 16 halves the standard error. But going from 100 to 400 only halves it again — diminishing returns set in.

> **Common pitfall:** The standard deviation describes the scatter of single readings; the standard error ($\sigma/\sqrt{N}$) describes the reliability of the **mean**. Quoting the wrong one misstates your precision by a factor of $\sqrt{N}$.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Probability spinner)* Random measurement errors follow a normal distribution. **Set the spinner fractions** for where a single measurement lands relative to the mean.

**2.** *(Matching)* Match each statistical term to its definition.

**3.** *(Error highlight)* Find the error: 'To reduce random error, you should recalibrate the instrument.'

---

## Graphical Analysis and Curve Fitting

**Graphical analysis** is the primary tool for extracting physical relationships from data.

**Plotting conventions**

- Independent variable on the $x$-axis, dependent on the $y$-axis.
- Label axes with **quantity, symbol, and units**: e.g. "Force $F$ (N)".
- Include **error bars** showing measurement uncertainty.

**Linearisation** — Many physical laws become linear with the right transformation:

| Law | Plot | Slope |
|-----|------|-------|
| $y = ax + b$ | $y$ vs $x$ | $a$ |
| $y = ax^{2}$ | $y$ vs $x^{2}$ | $a$ |
| $y = ae^{bx}$ | $\ln y$ vs $x$ | $b$ |
| $y = ax^n$ | $\log y$ vs $\log x$ | $n$ |

**Least-squares fit** — For $y = mx + c$, minimise:

$$\chi^2 = \sum_{i=1}^N \frac{(y_i - mx_i - c)^2}{\sigma_i^2}$$

**Reduced chi-squared** — $\chi^{2}_\nu = \chi^{2}/(N-p)$ where $p$ is the number of fit parameters. A good fit gives $\chi^{2}_\nu \approx 1$.

```python
import numpy as np
x = np.array([1, 2, 3, 4, 5])
y = np.array([2.1, 3.9, 6.2, 7.8, 10.1])
m, c = np.polyfit(x, y, 1)
print(f"Slope = {m:.2f}, Intercept = {c:.2f}")
```

> **Key insight:** If your data doesn't linearise as expected, the assumed model may be wrong. The graph tells you this before any statistical test does.

> **Common pitfall:** Fitting a curve to data proves little by itself — enough parameters fit anything. Linearize so theory predicts a **straight line**, then let the residuals judge: structure in the residuals means the model, not the data, is wrong.

A **best-fit line** $y = mx + b$ minimises the sum of squared residuals:

$$S = \sum_{i=1}^{n} (y_i - mx_i - b)^2$$

Setting $\partial S/\partial m = 0$ and $\partial S/\partial b = 0$ yields slope and intercept.

The **correlation coefficient** $r^{2}$ quantifies fit quality (1 = perfect, 0 = none).

> A poor fit may indicate systematic errors or an incorrect theoretical model.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* Mass vs volume: (4 mL, 10 g), (8 mL, 20 g), (12 mL, 30 g). The density is the **slope** — set it.

**2.** *(Multiple choice)* Theory says the pendulum obeys $T = 2\pi\sqrt{L/g}$. You want a **straight-line** plot whose slope reveals $g$. What should you plot?
   - A) $T^{2}$ against $L$ — slope $4\pi^{2}/g$
   - B) $T$ against $L$ — slope $2\pi/g$
   - C) $T$ against $L^{2}$ — slope $\sqrt{g}$
   - D) $L$ against $\sqrt{T}$ — slope $g/4$


**3.** *(Word search)* Find five graphing terms.

---

## Laboratory Safety and Equipment

A physics laboratory requires both **safety awareness** and **equipment competence**.

**Safety hierarchy**

1. **Eliminate** the hazard if possible.
2. **Substitute** with a safer alternative.
3. **Engineering controls** (fume hoods, shields).
4. **Administrative controls** (procedures, training).
5. **Personal protective equipment** (goggles, gloves).

**Common lab instruments**

| Instrument | Measures | Typical resolution |
|------------|----------|-------------------|
| Vernier caliper | Length | $\pm 0.02$ mm |
| Micrometer | Thickness | $\pm 0.01$ mm |
| Digital balance | Mass | $\pm 0.01$ g |
| Multimeter | $V$, $I$, $R$ | Varies by range |
| Oscilloscope | Time-varying signals | $\mu$s resolution |

**Reading instruments**

- **Analogue:** Read to half the smallest division.
- **Digital:** The last displayed digit is the resolution.
- **Vernier scales:** The aligned mark on the vernier gives the extra digit.

**Lab notebook rules**

- Record **all** data directly in the notebook, never on loose paper.
- Write in pen — cross out mistakes, don't erase.
- Include date, setup sketch, and units for every measurement.

> **Tip:** Before starting an experiment, estimate the expected result. If your measurement is wildly different, check for setup errors before repeating.

> **Common pitfall:** Instrument placement is physics, not convention: an ammeter across a source is a short circuit; a voltmeter in series blocks the current it should measure. Know each meter’s internal resistance and the rule explains itself.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the correct response to a chemical spill on skin.

**2.** *(Crossword)* Solve the crossword about lab safety.

**3.** *(Interactive scene)* $A = 5.2 \pm 0.3$, $B = 2.8 \pm 0.4$. Their sum is $8.0 \pm\,?$ — set the combined uncertainty.

---

## Scientific Report Writing

A scientific report communicates your experiment clearly and completely so others can **evaluate** and **reproduce** your work.

**Standard sections**

1. **Title** — Concise description of the experiment.
2. **Abstract** — One-paragraph summary of aim, method, result.
3. **Introduction** — Background theory and purpose.
4. **Method** — Equipment, procedure, and diagram.
5. **Results** — Data tables, graphs, and calculations.
6. **Discussion** — Interpretation, comparison with theory, error analysis.
7. **Conclusion** — Summary of findings with uncertainties.

**Writing data tables**

| Column header | Units | Example |
|--------------|-------|---------|
| Trial number | — | 1, 2, 3 |
| Measured quantity | SI units | $2.34 \pm 0.02$ m |
| Calculated quantity | SI units | $9.78$ m/s$^{2}$ |

**Common mistakes**

- Reporting results without uncertainty.
- Confusing precision with accuracy.
- Claiming "human error" instead of identifying specific sources.
- Plotting data without error bars.

**Figures and graphs**

- Number all figures and refer to them in the text.
- Include a caption explaining what the figure shows.
- Use consistent formatting throughout.

> **Key insight:** The discussion section is the most important part. It shows that you understand your results — not just that you can collect data.

> **Common pitfall:** "The result was verified" is not a conclusion. Compare quantitatively: measured value ± uncertainty against the accepted value, discrepancy in sigmas, dominant error source named. Numbers, not adjectives.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* The abstract of a scientific report should be written last, after all other sections are complete.
   - True / False


**2.** *(Matching)* Match each section of a scientific report to its content.

**3.** *(Error highlight)* Find the error: 'In a lab report, you should write in first person and use informal language to engage the reader.'

---

## Calibration and Systematic Errors

**Calibration** links an instrument's reading to a known standard. Without it, all measurements may be **systematically shifted**.

**Types of systematic error**

| Error | Description | Example |
|-------|-------------|---------|
| **Zero offset** | Instrument doesn't read zero at zero input | Scale reads $0.3 g$ with nothing on it |
| **Scale factor** | Readings are consistently too high/low | Ruler expanded by heat |
| **Non-linearity** | Error varies across the range | Spring beyond Hooke's law |
| **Hysteresis** | Reading depends on direction of change | Mechanical backlash |

**Calibration procedure**

1. Measure a set of **known standards** spanning your range.
2. Plot measured vs. true values.
3. Fit a **calibration curve** (ideally linear: $y = mx + b$).
4. Use the inverse to **correct** all future readings.

**Detecting systematic errors**

- Compare your result with an **accepted value**.
- Use **different methods** or instruments to measure the same quantity.
- Look for trends in **residuals** (measured $-$ fitted values).

**Accuracy vs. precision**

- **Accurate:** close to the true value (low systematic error).
- **Precise:** measurements cluster tightly (low random error).
- A measurement can be precise but inaccurate (or vice versa).

> **Tip:** Systematic errors do not decrease with more measurements. The only cure is to identify and remove the source.

> **Common pitfall:** Averaging cures only random error. A miscalibrated instrument delivers beautifully repeatable wrong numbers — precision without accuracy. Calibration against a known standard is the only cure for systematic bias.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* A balance reads **0.3 N with nothing on it**. With your sample it reads **2.7 N**. Set the sample's true weight.

**2.** *(Multiple choice)* Your electronic balance reads **0.3 g with nothing on it**. You then weigh ten samples without fixing this. What kind of error infects the data, and what repairs it?
   - A) A systematic offset — subtract 0.3 g from every reading (or tare/calibrate first)
   - B) Random error — average enough samples and it disappears
   - C) No error, since all samples share the shift
   - D) A blunder — all ten measurements must be discarded


**3.** *(Word search)* Find five calibration-related terms.

---

## Kinematics and Dynamics Lab Experiments

Laboratory experiments in mechanics test the predictions of **kinematics** and **dynamics** against real data.

**Classic experiments**

| Experiment | Measured | Key equation |
|-----------|----------|-------------|
| Free fall | $t$ vs $h$ | $h = \frac{1}{2}gt^{2}$ |
| Inclined plane | $a$ vs $\sin\theta$ | $a = g\sin\theta$ |
| Newton's second law | $a$ vs $F$ | $F = ma$ |
| Simple pendulum | $T$ vs $L$ | $T = 2\pi\sqrt{L/g}$ |
| Spring constant | $F$ vs $x$ | $F = kx$ |

**Measuring $g$ from a pendulum**

$$g = \frac{4\pi^2 L}{T^2}$$

Plot $T^{2}$ vs $L$: the slope is $4\pi^{2}/g$.

**Practical tips**

- Use **photogates** or **video analysis** for accurate timing.
- Measure **multiple periods** and divide: $T = t_{10}/10$ reduces timing error by $10\times$.
- **Friction** is the main source of systematic error — minimise it or account for it.

```python
import math
L = 1.00    # metres
T = 2.006   # seconds (measured)
g = 4 * math.pi**2 * L / T**2
print(f"g = {g:.2f} m/s^{2}")
```

> **Key insight:** The best lab experiments are designed so that one variable is plotted against another to give a **straight line**. The slope or intercept gives the physical quantity of interest.

> **Common pitfall:** Change one variable at a time. Varying mass and force together "to save runs" produces data from which neither effect can be untangled — a lost afternoon disguised as efficiency.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps for a free-fall experiment to measure g.

**2.** *(Crossword)* Solve the crossword about lab mechanics experiments.

**3.** *(Cloze bank)* Complete the statement with the correct term.

---

## Problem-Solving: Laboratory Practice

Effective laboratory work combines experimental skill with rigorous data analysis.

**Before the experiment**

1. Read the theory and predict the expected result.
2. Identify which variables to control, vary, and measure.
3. Estimate the required precision and choose appropriate instruments.

**During the experiment**

- Record raw data immediately in a table with units.
- Take at least 5 repeated measurements for each data point.
- Note any anomalies or unexpected observations.

**After the experiment**

| Step | Action |
|------|--------|
| 1 | Calculate means and standard errors |
| 2 | Plot data with error bars |
| 3 | Fit a line or curve |
| 4 | Extract physical quantities from fit parameters |
| 5 | Propagate uncertainties to the final result |
| 6 | Compare with accepted values |

**Assessing agreement** — Two results $A \pm \delta A$ and $B \pm \delta B$ agree if:

$$|A - B| \leq 2\sqrt{(\delta A)^2 + (\delta B)^2}$$

**Common pitfalls**

- Discarding "bad" data without a valid statistical reason.
- Confusing the uncertainty in a single measurement with the uncertainty in the mean.
- Forgetting to include units at every stage of calculation.

> **Tip:** The goal is not to "get the right answer" but to demonstrate understanding of the physics and honest analysis of the data. A well-analysed "wrong" result with good error bars is better than an unexplained "right" one.

> **Common pitfall:** Two results disagree only if their uncertainty intervals fail to overlap. Comparing bare central values — declaring 9.79 "wrong" because the handbook says 9.81 — ignores the very error analysis the lab exists to teach.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* Systematic errors can be reduced by simply taking more measurements and averaging.
   - True / False


**2.** *(Matching)* Match each problem-solving strategy to its description.

**3.** *(Error highlight)* Find the error: 'If your experimental result disagrees with the accepted value, you should adjust your data until they match.'

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
