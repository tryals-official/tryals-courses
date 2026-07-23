# Unit 3: Computer Science

## Algorithms, variables, and control flow

An **algorithm** is a finite sequence of unambiguous steps that solves a problem. In physics, algorithms automate calculations from numerical integration to Monte Carlo simulations.

**Variables and assignment**

```python
mass = 5.0        # kilograms
velocity = 3.0    # m/s
kinetic_energy = 0.5 * mass * velocity**2
```

A variable stores a value in **RAM** (main memory) and can be updated at any time.

**Control flow structures**

**Conditional** — Execute code only when a condition is true:

```python
if temperature > 100:
    print("Boiling!")
elif temperature > 0:
    print("Liquid")
else:
    print("Frozen")
```

**Loop** — Repeat a block of code:

```python
# Euler method: simple numerical integration
x, v, dt = 0.0, 10.0, 0.01
for step in range(1000):
    x += v * dt
    v += -9.8 * dt   # gravity
```

**Key hardware context**

- The **processor (CPU)** executes instructions one at a time (or in parallel on multiple cores).
- **Main memory (RAM)** holds data during execution — fast but volatile.
- **Secondary storage** (SSD/HDD) persists data after power-off.

> **Tip:** Always initialise variables before using them. An uninitialised variable is the most common source of bugs in scientific code.

> **Common pitfall:** The computer does exactly what the code says, never what you meant. Off-by-one boundaries in loops and conditions are where the gap between intention and instruction bites hardest.

> **Practice preview** — try all 10 questions interactively on [Tryals](https://tryals.app)

**1.** *(Truth table)* A loop runs while `A and not B` holds. **Fill in the truth table**: for each input row, does the loop keep running?

**2.** *(Matching)* Match each control-flow keyword to its purpose.

**3.** *(Error highlight)* Find the incorrect step in this trace of a for-loop that prints 1 to 5.

---

## Functions and modular decomposition

A **function** encapsulates a reusable block of logic. It takes **parameters**, performs a computation, and **returns** a result.

```python
def kinetic_energy(mass, velocity):
    # Compute KE = (1/2)mv^{2}
    return 0.5 * mass * velocity**2
```

**Why functions matter in physics**

- **Reusability:** Write the formula once, call it for every data point.
- **Readability:** `kinetic_energy(m, v)` is clearer than `0.5 * m * v**2` scattered throughout code.
- **Testability:** You can verify each function independently.

**Scope** — Variables defined inside a function are **local**; they do not exist outside it.

```python
def f(x):
    result = x ** 2    # 'result' is local to f
    return result

# print(result)  → NameError!
```

**Modular decomposition** — Break a complex problem into smaller functions, each solving one sub-task:

```
main_simulation()
├── initialise_state()
├── compute_forces()
├── update_positions()
└── write_output()
```

**Pure vs impure functions** — A **pure** function depends only on its inputs and has no side effects. Pure functions are easier to test and debug.

> **Key insight:** If you find yourself copy-pasting code, extract it into a function. The **DRY principle** (Don't Repeat Yourself) reduces bugs and simplifies maintenance.

> **Common pitfall:** A function that **prints** a result and one that **returns** it look identical when run alone — but only the returner composes with other code. Printing is for humans; returning is for programs.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* `fact(n)` returns 1 when $n \le 1$, else `n * fact(n-1)`. Calling `fact(5)`: set how many stack frames open before the base case stops the recursion.

**2.** *(Multiple choice)* A 300-line script computes a rocket trajectory in one giant block. It works. Why would a good engineer still break it into functions?
   - A) Each piece can be understood, tested and fixed alone — and reused elsewhere
   - B) Shorter files run faster on modern CPUs
   - C) The compiler requires functions beyond 100 lines
   - D) Functions reduce the program’s memory footprint


**3.** *(Word search)* Find five key terms about functions and modularity.

---

## Data representation and basic types

Computers represent all data as **binary** (base 2). Understanding how numbers and text are encoded prevents subtle bugs in scientific computing.

**Number systems**

| Base | Name | Digits | Example ($13_{10}$) |
|------|------|--------|---------------------|
| 2 | Binary | 0, 1 | $1101_2$ |
| 10 | Decimal | 0–9 | $13_{10}$ |
| 16 | Hexadecimal | 0–9, A–F | $\text{D}_{16}$ |

**Conversion:** $1101_2 = 1\!\cdot\!2^{3} + 1\!\cdot\!2^{2} + 0\!\cdot\!2^{1} + 1\!\cdot\!2^{0} = 13_{10}$.

**Basic Python types**

```python
x = 42          # int   — exact integer
y = 3.14        # float — IEEE 754 double (≈15 decimal digits)
s = "physics"   # str   — text
b = True        # bool  — True / False
```

**Floating-point caution** — Not all decimals are exact in binary:

```python
>>> 0.1 + 0.2
0.30000000000000004
```

For scientific work, compare floats with a **tolerance**: `abs(a - b) < 1e-9`.

**Type conversion**

```python
n = int("42")      # str → int
x = float("3.14")  # str → float
s = str(99)        # int → str
```

> **Physics link:** When a simulation gives unexpected results, check for **integer division** (`5 // 2 = 2`) vs **float division** (`5 / 2 = 2.5`). This is a classic source of off-by-one physics errors.

> **Common pitfall:** Floats are not real numbers: 0.1 + 0.2 ≠ 0.3 exactly. Compare numerical results with a tolerance, never with ==, or your simulation will "fail" for reasons that are pure representation.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps to convert the decimal number 13 to binary.

**2.** *(Crossword)* Solve the crossword about data types.

**3.** *(Interactive scene)* A sensor must encode **200 distinct values**. Set the minimum number of bits.

---

## Lists, arrays, and structured storage

Physics simulations deal with collections of data: time series, particle positions, field values. Python provides **lists** and NumPy provides **arrays**.

**Python lists** — Ordered, mutable, can hold mixed types:

```python
temperatures = [20.1, 21.3, 19.8, 22.0]
temperatures.append(23.5)       # add element
print(temperatures[0])          # → 20.1 (0-indexed)
print(len(temperatures))        # → 5
```

**NumPy arrays** — Homogeneous, fast, support vectorised operations:

```python
import numpy as np

t = np.linspace(0, 10, 1000)      # 1000 points from 0 to 10
x = np.sin(2 * np.pi * t)         # element-wise sine

mean_x = np.mean(x)               # statistical operations
```

**Why arrays over lists?**

- **Speed:** NumPy operations run in compiled C, not interpreted Python.
- **Broadcasting:** `a * 2` multiplies every element — no loop needed.
- **Memory:** Arrays store raw numbers; lists store Python objects with overhead.

**Slicing**

```python
data = np.array([10, 20, 30, 40, 50])
data[1:4]    # → [20, 30, 40]   (indices 1, 2, 3)
data[::2]    # → [10, 30, 50]   (every 2nd element)
```

> **Tip:** Use `np.array` for numerical computation and Python `list` for heterogeneous or small collections. Never loop over array elements when a vectorised operation exists.

> **Common pitfall:** Assigning a list copies a **reference**, not the data: after `b = a`, mutating `b` mutates `a` too. Deliberate copies (`list(a)`, slicing) are how you actually fork data.

> **Practice preview** — try all 10 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* Accessing an element by index in an array takes O(n) time.
   - True / False


**2.** *(Matching)* Match each list operation to its description.

**3.** *(Error highlight)* Find the error in this description of accessing the last element of a 5-element list.

---

## Searching and sorting ideas

Finding and ordering data efficiently is fundamental to computational physics — from locating a particle in a grid to ranking eigenvalues.

**Linear search** — Check every element one by one. Cost: $O(n)$.

```python
def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1
```

**Binary search** — Requires a **sorted** array. Repeatedly halve the search space. Cost: $O(\log n)$.

```python
def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
```

**Sorting algorithms**

| Algorithm | Average cost | Stable? |
|-----------|-------------|---------|
| Bubble sort | $O(n^{2})$ | Yes |
| Merge sort | $O(n\log n)$ | Yes |
| Quick sort | $O(n\log n)$ | No |

In practice, use Python's built-in `sorted()` or `np.sort()`, which use highly optimised $O(n\log n)$ algorithms.

> **Key insight:** Binary search is $O(\log n)$ — searching 1 billion sorted elements takes only about 30 comparisons. But the data must be sorted first.

> **Common pitfall:** Binary search demands **sorted** input — on unsorted data it fails silently, confidently returning wrong answers. Fast algorithms usually buy their speed with preconditions; know what you promised.

The efficiency of a sorting algorithm is measured by comparisons as a function of input size $n$.

- **$O(n^{2})$** algorithms (bubble sort, insertion sort) compare every pair.
- **$O(n \log n)$** algorithms (merge sort, quicksort) use divide-and-conquer.

The **lower bound** for comparison sorting is $\Omega(n \log n)$ — no comparison-based algorithm can do better.

> Choosing the right algorithm can mean the difference between seconds and hours on large datasets.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Interactive scene)* 15 sorted cells, searching for 11. Mark the FIRST cell binary search inspects.

**2.** *(Multiple choice)* You guess a number between 1 and 1000; after each guess you learn "higher" or "lower". A smart player needs at most **10 guesses**. What strategy achieves this?
   - A) Always guess the middle of the remaining range, halving it each time
   - B) Guess randomly to avoid worst cases
   - C) Start at 1 and count upward
   - D) Guess multiples of 100 first, then narrow down


**3.** *(Word search)* Find five terms about searching and sorting.

---

## Complexity and efficiency basics

**Big-O notation** describes how an algorithm's run time scales with input size $n$.

**Common complexity classes**

| Big-O | Name | Example |
|-------|------|---------|
| $O(1)$ | Constant | Array index access |
| $O(\log n)$ | Logarithmic | Binary search |
| $O(n)$ | Linear | Single loop |
| $O(n\log n)$ | Linearithmic | Merge sort |
| $O(n^{2})$ | Quadratic | Nested loops |
| $O(2^n)$ | Exponential | Brute-force subsets |

**How to determine complexity**

- A single `for` loop over $n$ items → $O(n)$.
- A nested `for` loop (both over $n$) → $O(n^{2})$.
- Halving the problem each step → $O(\log n)$.

**Space complexity** measures memory usage by the same logic.

**Practical example** — Computing all pairwise distances between $n$ particles:

```python
# O(n^{2}) — unavoidable for all-pairs
for i in range(n):
    for j in range(i + 1, n):
        dist = np.linalg.norm(pos[i] - pos[j])
```

For large $n$, algorithms like **Barnes-Hut** ($O(n\log n)$) use spatial trees to approximate distant interactions.

> **Physics link:** Molecular dynamics with $N$ particles requires $O(N^{2})$ force evaluations per time step. Reducing this to $O(N\log N)$ via fast multipole methods enabled simulations of millions of atoms.

> **Common pitfall:** Big-O hides constants: an $O(n^2)$ method can beat an $O(n\log n)$ one on small inputs. Complexity classes predict **scaling**, not which code wins today’s benchmark.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order these complexity classes from fastest to slowest growth.

**2.** *(Crossword)* Solve the crossword about algorithm efficiency.

**3.** *(Interactive scene)* The quadratic algorithm does $n^2$ steps, the linear one does $n$. Place the cursor at the $n$ where the quadratic does exactly **5×** the work.

---

## Simulation and numerical experimentation

When analytical solutions are impossible, we use **numerical methods** to approximate the physics.

**Euler method** — The simplest ODE integrator:

$$y_{n+1} = y_n + h\,f(t_n,\,y_n)$$

```python
def euler(f, y0, t0, t_end, h):
    t, y = t0, y0
    trajectory = [(t, y)]
    while t < t_end:
        y = y + h * f(t, y)
        t = t + h
        trajectory.append((t, y))
    return trajectory
```

**Better integrators**

- **Midpoint (RK2):** Evaluate slope at the midpoint for better accuracy.
- **RK4 (Runge-Kutta 4):** Four slope evaluations per step — the workhorse of physics simulations.
- Error scales as $O(h^{p})$ where $p$ is the method's order (Euler: $p=1$, RK4: $p=4$).

**Monte Carlo methods** — Use random sampling to estimate quantities:

```python
import random
inside = sum(1 for _ in range(N)
             if random.random()**2 + random.random()**2 <= 1)
pi_estimate = 4 * inside / N
```

**Convergence check** — Run the simulation with step size $h$ and $h/2$. If results agree to the desired precision, the solution is converged.

> **Tip:** Always validate your simulation against a known analytical case before applying it to a new problem. If Euler's method can't match $e^{-t}$ for exponential decay, it won't be reliable for anything more complex.

> **Common pitfall:** A simulation that runs without errors is not a simulation that is right. Validate against a case with a known answer (analytic solution, conservation law) before trusting any new output.

**Monte Carlo methods** use random sampling to estimate numerical quantities.

To estimate $\pi$: place random points in a unit square. The fraction that falls inside the inscribed quarter-circle ($x^{2} + y^{2} \leq 1$) converges to $\pi/4$:

$$\pi \approx 4 \cdot \frac{\text{points inside}}{\text{total points}}$$

Accuracy improves as $O(1/\sqrt{N})$ — quadrupling points halves the error.

> Monte Carlo methods are essential when analytical integration is intractable.

> **Practice preview** — try all 10 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* A pseudorandom number generator produces truly unpredictable output.
   - True / False


**2.** *(Matching)* Match each simulation concept to its description.

**3.** *(Error highlight)* Find the error in this Monte Carlo $\pi procedure$.

---

## Debugging and validation

Writing code that runs is not enough — it must produce **correct** results. Debugging and validation are essential skills for computational physicists.

**Common bug categories**

| Bug type | Example | Fix |
|----------|---------|-----|
| **Syntax** | Missing colon after `if` | Read the error message |
| **Runtime** | Division by zero | Add a guard: `if x != 0` |
| **Logic** | Off-by-one in loop bounds | Trace with a small example |
| **Numerical** | Floating-point drift | Use higher precision or smaller $h$ |

**Debugging strategies**

```python
# 1. Print intermediate values
print(f"Step {i}: x={x:.6f}, v={v:.6f}")

# 2. Use assertions to catch invariants
assert energy > 0, f"Energy went negative at step {i}"

# 3. Test with known inputs
assert abs(kinetic_energy(2.0, 3.0) - 9.0) < 1e-10
```

**Validation hierarchy**

1. **Unit tests** — Does each function return the correct output for known inputs?
2. **Conservation laws** — Does total energy / momentum stay constant (within numerical tolerance)?
3. **Convergence tests** — Does halving $h$ improve the answer?
4. **Comparison** — Does the code reproduce published results or analytical solutions?

> **Key insight:** The hardest bugs are **silent** — the code runs without errors but gives wrong results. Conservation-law checks are your best defence: if energy isn't conserved, something is wrong.

> **Common pitfall:** Fixing the symptom where the crash occurred often leaves the cause upstream untouched. Trace the bad value back to where it was **born** — the crash site is usually just the victim.

> **Practice preview** — try all 13 questions interactively on [Tryals](https://tryals.app)

**1.** *(Cloze bank)* Complete the description of debugging.

**2.** *(Multiple choice)* Your projectile simulation says a thrown ball climbs forever. Which debugging move gives the **most information first**?
   - A) Print the velocity every timestep and inspect where its sign should flip
   - B) Rerun the program — it may pass this time
   - C) Rewrite the whole simulation from scratch
   - D) Reduce the timestep 1000× and hope precision fixes it


**3.** *(Word search)* Find five terms about debugging and testing.

---

## Visualising scientific computation

Visualisation turns raw numbers into physical insight. A well-chosen plot can reveal patterns that spreadsheets hide.

**Matplotlib basics**

```python
import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
plt.plot(t, np.sin(t), label="sin(t)")
plt.plot(t, np.cos(t), label="cos(t)")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.title("Simple Harmonic Motion")
plt.legend()
plt.grid(True)
plt.show()
```

**Essential plot types for physics**

| Plot | Use case |
|------|----------|
| **Line plot** | Time series, trajectories |
| **Scatter plot** | Experimental data points |
| **Histogram** | Distribution of measurements |
| **Contour / heatmap** | 2D scalar fields (temperature, potential) |
| **Vector field** | Force or velocity fields |

**Good visualisation practices**

- Always label axes with **units**.
- Use a **legend** when multiple series appear.
- Choose a **colour map** appropriate for the data (sequential for magnitudes, diverging for deviations from zero).
- Add **error bars** for experimental data: `plt.errorbar(x, y, yerr=err)`.

> **Tip:** Save figures in vector format (`plt.savefig("plot.pdf")`) for publications. PNG is fine for quick inspection but loses quality when scaled.

> **Common pitfall:** Axis choices can manufacture or hide stories: truncated y-axes exaggerate trends, log scales linearize exponentials. Read (and label) the axes before believing any plot — including your own.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app)

**1.** *(Timeline ordering)* Order the steps to create a scientific plot from raw data.

**2.** *(Crossword)* Solve the crossword about data visualisation.

**3.** *(Cloze bank)* Complete the statement with the correct term.

---

## Integrated computational problem solving

This lesson combines algorithms, data structures, numerical methods, and visualisation into complete scientific workflows.

**Typical computational physics pipeline**

```
Define problem → Model equations → Implement code
    → Validate → Run simulation → Analyse & visualise
```

**Example: projectile with drag**

```python
import numpy as np
import matplotlib.pyplot as plt

g, b = 9.8, 0.1          # gravity, drag coefficient
dt, t_max = 0.01, 10.0
N = int(t_max / dt)

x = np.zeros(N); y = np.zeros(N)
vx = np.full(N, 20.0); vy = np.full(N, 30.0)

for i in range(1, N):
    speed = np.sqrt(vx[i-1]**2 + vy[i-1]**2)
    vx[i] = vx[i-1] - b * speed * vx[i-1] * dt
    vy[i] = vy[i-1] - (g + b * speed * vy[i-1]) * dt
    x[i]  = x[i-1] + vx[i] * dt
    y[i]  = y[i-1] + vy[i] * dt
    if y[i] < 0:
        break

plt.plot(x[:i], y[:i])
plt.xlabel("x (m)"); plt.ylabel("y (m)")
plt.title("Projectile with Air Resistance")
plt.grid(True); plt.show()
```

**Workflow checklist**

1. **Model** — Write the governing equations (here: Newton's second law with drag).
2. **Discretise** — Choose a numerical method and time step.
3. **Code** — Implement with clear variable names and modular functions.
4. **Validate** — Check limiting cases (e.g., $b=0$ should give parabolic trajectory).
5. **Visualise** — Plot results and compare with expectations.

> **Strategy:** Start simple (no drag, no friction) and add complexity incrementally. Each addition should be validated before proceeding to the next.

> **Common pitfall:** Premature optimization wastes more effort than slow code ever did: first make it correct and clear, then measure, and only then speed up the part the measurement actually indicts.

> **Practice preview** — try all 10 questions interactively on [Tryals](https://tryals.app)

**1.** *(True false)* Decomposition means breaking a complex problem into smaller, manageable sub-problems.
   - True / False


**2.** *(Matching)* Match each problem-solving strategy to its description.

**3.** *(Error highlight)* Find the error in this computational problem-solving workflow.

---

*Part of [Physics I](README.md) — [Open University Courses by Tryals](../../README.md)*
