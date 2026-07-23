# Unit 6: Basic Digital Design

**[Study this unit interactively on Tryals →](https://tryals.app/courses/computer-science-i)**

## Boolean Variables and Logic Gates

Digital circuits compute with just two voltage levels, interpreted as the **boolean** values **1** (true, high) and **0** (false, low). Every digital operation is built from tiny hardware elements called **logic gates**, each computing one boolean function of its inputs.

The three fundamental gates are:
- **AND** — outputs 1 only when _all_ inputs are 1.
- **OR** — outputs 1 when _at least one_ input is 1.
- **NOT** (inverter) — one input; outputs the opposite value.

From these, a few compound gates are so useful they get their own symbols:
- **NAND** (NOT-AND) — outputs 0 only when all inputs are 1 (the inverse of AND).
- **NOR** (NOT-OR) — outputs 1 only when all inputs are 0 (the inverse of OR).
- **XOR** (exclusive-OR) — outputs 1 when the inputs _differ_ (an odd number of 1s).

| Gate | Output is 1 when... |
|---|---|
| AND | all inputs are 1 |
| OR | at least one input is 1 |
| NOT | the single input is 0 |
| XOR | the inputs differ |

A remarkable fact underlies all of digital design: **NAND is universal** — any boolean function whatsoever can be built using only NAND gates (NOR is universal too). This is why a single cheap gate type can, in principle, implement an entire computer. Gates are the physical atoms; everything from an adder to a processor is gates wired together.

> **Common pitfall:** confusing **OR** with **XOR**. OR outputs 1 when _at least one_ input is 1 (including when _both_ are 1); XOR (exclusive-OR) outputs 1 only when the inputs _differ_ — so for inputs 1 and 1, OR gives 1 but XOR gives 0. Watch the "both are 1" case, where they disagree.

The four basic gate symbols (AND, OR, NOT, XOR) each with input switches and an accent output LED, shown side by side lit for the inputs (1,1) so OR glows and XOR stays dark — the OR-vs-XOR distinction on the both-1.

$$A \oplus B = 1 \iff A \neq B$$

**Practice preview:**

**1.** *(Logic gate)* The same two wires, both carrying 1, are fed into three separate gates: an AND, an OR and an XOR. Give the output bit of each gate, in that order.

**2.** *(Numerical input)* A three-input XOR gate outputs 1 when an odd number of its inputs are 1. Of its 8 possible input combinations, how many produce an output of 1?

**3.** *(Table completion)* Complete the output columns for a NAND gate and a NOR gate. Write each entry as 0 or 1.

---

## Truth Tables and Logical Equivalence

A **truth table** lists the output of a boolean function for _every_ possible combination of its inputs. Because each input is 0 or 1, a function of $n$ inputs has $2^n$ rows — a 2-input function has 4 rows, a 3-input function has 8. The truth table is the _complete_ specification of a boolean function: two expressions compute the same function if and only if their truth tables match, row for row.

This gives a foolproof test for **logical equivalence**: to check whether two boolean expressions are equal, build both truth tables and compare. If they agree on every row, the expressions are equivalent, no matter how different they look.

Truth tables also let you _verify_ the laws of **boolean algebra** — the rules for manipulating expressions:
- **Identity:** $A + 0 = A$, $\quad A \cdot 1 = A$.
- **Complement:** $A + \overline{A} = 1$, $\quad A \cdot \overline{A} = 0$.
- **De Morgan's laws:** $\overline{A \cdot B} = \overline{A} + \overline{B}$ and $\overline{A + B} = \overline{A} \cdot \overline{B}$ — negation turns AND into OR and vice versa. These are among the most useful identities in all of digital design.

Each row of a truth table where the output is 1 is a **minterm**. Reading off the minterms and OR-ing them together gives a canonical expression (sum-of-products) that realizes _any_ truth table — proving that every boolean function can be written as a formula, and hence built from gates.

> **Common pitfall:** applying **De Morgan's law** incorrectly — writing $\overline{A \cdot B} = \overline{A} \cdot \overline{B}$ (wrong) instead of $\overline{A} + \overline{B}$ (right). De Morgan's law _flips the operator_: the negation of an AND is the OR of the negations, and the negation of an OR is the AND of the negations. Forgetting to flip the operator is one of the most common boolean-algebra mistakes.

**Practice preview:**

**1.** *(Truth table)* De Morgan's laws claim that the negation of an AND equals the OR of the negations. Complete the output column for the expression on the right-hand side of that claim.

**2.** *(Matrix grid)* For each pair of expressions, build both truth tables in your head and decide whether they agree on every row.

**3.** *(Table completion)* One way to build XOR is as (A OR B) AND NOT (A AND B). Complete the working columns and the output. Write each entry as 0 or 1.

---

## Combinational Circuit Design

A **combinational circuit** is one whose outputs depend _only_ on its _current_ inputs — it has no memory of the past. (Circuits that _do_ remember are _sequential_, covered later.) Combinational logic implements a pure boolean function: given the inputs now, the outputs are determined now.

Designing a combinational circuit from a specification follows a reliable recipe:
1. **Specify** the function with a **truth table** — list the desired output for every input combination.
2. **Derive an expression** from the table — read off the minterms (the 1-rows) and OR them into a **sum-of-products** formula, or simplify (next lesson).
3. **Draw the circuit** — translate the expression into gates: each AND term is an AND gate, the terms feed an OR gate, and inputs are inverted with NOT gates as needed.

For example, a circuit that outputs 1 when a 2-bit input is _odd_ is just the low bit passed through — a one-wire circuit. A "majority" circuit (output 1 when at least two of three inputs are 1) is a sum of the AND-pairs. The point is that _any_ truth table can be mechanically turned into a circuit.

Two practical concerns shape real designs. **Fan-in** is how many inputs a single gate takes (real gates have limits, so wide functions are built from trees of smaller gates), and **fan-out** is how many gate inputs one output can drive before its signal weakens. And **gate count / depth** matter: fewer gates is cheaper, and fewer gates _in series_ (shallower depth) is faster, since each gate adds delay.

> **Common pitfall:** treating a combinational circuit as if it had memory. Its output is a pure function of the _present_ inputs — the same inputs always give the same outputs, with no dependence on history. Anything that must _remember_ a previous value needs a _sequential_ element (a latch or flip-flop), not combinational logic.

**Practice preview:**

**1.** *(Flow chart)* This chart is the standard recipe for turning a specification into a circuit. Fill the two empty boxes, choosing from these four phrases: 'Read off the minterms as a sum of products', 'Draw the gates for each term', 'Add a flip-flop to hold the result', 'Wait for the next clock edge'. Two phrases are never used.

**2.** *(Numerical input)* A sum-of-products circuit is built so that a signal passes through one NOT gate, then one AND gate, then one OR gate before reaching the output. Every gate has a propagation delay of 2 nanoseconds. What is the total delay along that path, in nanoseconds?

**3.** *(Logic gate)* During testing, one input line of a circuit is held at 0 and the other at 1. Give the output of each of the five gates being probed, in the order AND, OR, NAND, NOR, XOR.

---

## Minimisation and Canonical Forms

A boolean function can be written in many equivalent forms, and a simpler expression means a **cheaper, faster circuit** — fewer gates, less delay, less power. **Minimisation** is finding an equivalent expression with as few terms and literals as possible.

Two **canonical forms** name a function unambiguously. **Sum-of-products (SOP)** is an OR of AND terms (like $A\overline{B} + \overline{A}B$). **Product-of-sums (POS)** is an AND of OR terms. Canonical forms are useful as a starting point, but they are usually not minimal.

Two tools do the simplifying:
- **Boolean algebra** applies the identities directly. For instance, $AB + A\overline{B} = A(B + \overline{B}) = A \cdot 1 = A$ — two terms collapse to one because the $B$ variable is _redundant_.
- The **Karnaugh map (K-map)** is a visual method: a grid arranged so that adjacent cells differ in exactly one variable. You circle groups of adjacent 1s (in powers of two: 1, 2, 4, 8 cells), and each group becomes one simplified term. Larger groups eliminate more variables, so bigger circles mean simpler expressions. K-maps make it easy to spot simplifications the eye would miss in algebra.

The payoff is concrete: a function that naively needs a dozen gates may reduce to three. In an era of billions of transistors this still matters — minimisation reduces power and delay at every level, and the same idea (finding the simplest equivalent form) recurs throughout computing.

> **Common pitfall:** in a Karnaugh map, circling groups whose size is _not_ a power of two, or missing the map's **wrap-around** adjacency (the left and right edges, and top and bottom, are neighbors). Valid K-map groups must contain exactly $1, 2, 4, 8, \dots$ cells and may wrap around the edges — overlooking either yields a non-minimal or incorrect result.

**Practice preview:**

**1.** *(Grid path)* This 4 by 4 grid is a Karnaugh map: neighbouring cells differ in exactly one variable, and the blocked cells are the ones where the function is 0. Trace a route of 1-cells from the top-left cell to the bottom-right cell, stepping only between neighbouring cells.

**2.** *(Numerical input)* In a Karnaugh map of a four-variable function, a legal group covers 4 cells. How many literals does the single product term for that group contain?

**3.** *(Formula builder)* Arrange the tokens into the algebraic derivation that shows why a 2-cell Karnaugh group eliminates one variable.

---

## Adders, Multiplexers, and Decoders

Rather than design every circuit from raw gates, engineers assemble **standard building blocks** — combinational modules so common they are used like Lego pieces.

The **adder** does binary addition. A **half adder** adds two bits, producing a **sum** ($A \oplus B$, the XOR) and a **carry** ($A \cdot B$, the AND). A **full adder** adds three bits — two operands plus a **carry-in** — producing a sum and a **carry-out**, so full adders can be chained: the carry-out of one feeds the carry-in of the next. Chaining $n$ full adders makes a **ripple-carry adder** that adds two $n$-bit numbers (with the carry rippling along, which also explains why addition takes longer for wider numbers).

A **multiplexer (MUX)** is a data selector: it has several data inputs, some **select** lines, and one output, and it routes the _chosen_ input to the output. A MUX with $2^k$ data inputs needs $k$ select lines. MUXes are how a circuit chooses between sources — the hardware equivalent of an if/else.

A **decoder** does the opposite: it takes a $k$-bit input and activates exactly _one_ of $2^k$ output lines — the one whose number matches the input. Decoders select a specific memory row or device from an address. Its inverse, an **encoder**, turns a one-active-line input back into a binary number.

| Block | Function |
|---|---|
| Half / full adder | Add bits, producing sum and carry |
| Multiplexer (MUX) | Route one of several inputs to the output |
| Decoder | Activate one of $2^k$ outputs from a $k$-bit input |

> **Common pitfall:** mixing up a **multiplexer** and a **decoder**. A MUX has _many inputs and one output_ (it _selects_ one input to pass through); a decoder has _one small input and many outputs_ (it _activates_ exactly one output line). They are near-opposites — one narrows, the other fans out.

A 4-to-1 multiplexer with four data lines converging; the two select bits choose one path that lights in accent through to the single output — beside a decoder fanning one 2-bit input out to activate one of four out.

$$2^k \text{ inputs} \Rightarrow k \text{ select lines}$$

**Practice preview:**

**1.** *(Logic gate)* A half adder is two gates fed by the same two bits: an XOR produces the sum and an AND produces the carry. The adder is given the bits 1 and 1. Give the output of each gate, XOR first.

**2.** *(Number line placement)* A multiplexer must choose between 64 data inputs. **Place the marker on the number of select lines it needs.

**3.** *(Numerical input)* Eight full adders are chained into a ripple-carry adder. Each stage takes 3 nanoseconds to produce a valid carry-out once its carry-in is valid, and the carry must pass through every stage in turn. What is the worst-case delay before the final carry-out is valid, in nanoseconds?

---

## Sequential Logic and State

Combinational circuits are memoryless — the same inputs always give the same outputs. But a computer must _remember_: a register holds a value, a counter tracks a count. **Sequential logic** adds **state** — the circuit's output depends not only on current inputs but on stored information about the past.

Memory in hardware comes from **feedback**: an output is wired back to an input, so the circuit can hold a value. The simplest memory element is a **latch**, which can store one bit. Left alone, it keeps its stored bit; with the right inputs, it can be _set_ to 1 or _reset_ to 0.

Uncontrolled feedback is chaotic, so real designs are **synchronous**: governed by a **clock**, a signal that ticks at a fixed rate. State updates happen only at a clock **edge** (the rising or falling transition), so the whole system advances in lock-step, one well-defined step per tick. Between edges, combinational logic settles; at each edge, the new state is captured. This discipline is what makes complex digital systems predictable.

The general shape of a sequential system is a **finite state machine (FSM)**: a set of states, plus rules that, given the current state and inputs, determine the _next_ state and the outputs. A traffic light, a vending machine, and a CPU's control unit are all finite state machines. The **state register** (built from flip-flops, next lesson) holds the current state; combinational logic computes the next state; the clock advances it.

> **Common pitfall:** thinking a sequential circuit responds to its inputs _continuously_, like combinational logic. In a synchronous design, state changes only at **clock edges** — inputs are sampled and the state advances one step per tick. Reasoning about a sequential circuit means reasoning tick by tick, not moment by moment.

A finite state machine drawn as labeled state circles with transition arrows; an accent "current state" token hops from state to state on each clock-edge pulse, showing state advancing one step per tick.

$$\text{next state} = f(\text{state}, \text{input})$$

**Practice preview:**

**1.** *(Flow chart)* This chart is one tick of a synchronous sequential circuit. Fill the two empty boxes, choosing from these four phrases: 'Combinational logic computes the next state from the current state and the inputs', 'The computed next state waits at the register input until the following edge', 'The output changes the instant any input changes', 'The clock is paused until the logic has settled'. Two phrases are never used.

**2.** *(Numerical input)* A traffic-light controller needs 10 distinct states. What is the smallest number of flip-flops its state register can have?

**3.** *(Category sort)* In a synchronous sequential circuit, sort each item by which part of the circuit supplies it.

---

## Flip-Flops and Registers

A **flip-flop** is a one-bit memory element that changes state only on a clock **edge** — the instant the clock transitions (typically rising, 0 to 1). This edge-triggering is the key refinement over a plain latch (which is level-sensitive and can change whenever its inputs do): a flip-flop samples its input at the exact clock edge and holds that value steady until the next edge. Predictable, once-per-tick updates are what flip-flops provide.

The most common is the **D flip-flop** ("data" flip-flop): on each clock edge, its output $Q$ takes the value of its input $D$. In words, "remember whatever $D$ was at the tick." That simple behavior is the foundation of almost all storage in a processor. Other types exist (JK, T for toggling), but D flip-flops dominate modern design.

Wiring $n$ D flip-flops side by side, all driven by the _same_ clock, makes an **$n$-bit register** — a unit that stores an $n$-bit value and updates it all at once on each edge. Registers are the fast working storage inside a CPU (Unit 1's registers are exactly these).

Feed a register's output back through combinational logic and you build stateful machines: a **counter** (a register whose next value is current + 1) increments each tick; a **shift register** moves its bits one position per tick. All follow the same pattern: flip-flops hold the state, combinational logic computes the next state, the clock advances it — the finite-state-machine shape made concrete.

> **Common pitfall:** confusing an edge-triggered **flip-flop** with a level-sensitive **latch**. A latch is "transparent" while its enable is active — its output can follow the input continuously during that window. A flip-flop captures the input only at the clock _edge_ and then holds it. Using a latch where an edge-triggered flip-flop is needed causes subtle timing bugs.

**Practice preview:**

**1.** *(Table completion)* A four-bit shift register moves every stored bit one place to the right on each clock edge; the bit shifted in enters at the left and the rightmost bit falls off the end. It starts holding 1011. Complete the trace.

**2.** *(Matrix grid)* Decide whether each description belongs to a level-sensitive latch or to an edge-triggered flip-flop.

**3.** *(Ordering)* A two-bit counter holds 00 and increments on every clock edge, wrapping after its largest value. Order the values it holds after the next four edges.

---

## Timing, Hazards, and Reliability

Real gates are not instantaneous. **Propagation delay** is the time for a change at a gate's input to appear at its output. Signals travel through _chains_ of gates, so the delay accumulates along a path; the **critical path** — the longest delay path between registers — sets how fast the whole circuit can run.

Flip-flops impose timing requirements around the clock edge. The input must be stable for a short window _before_ the edge (the **setup time**) and _after_ it (the **hold time**); violate either and the flip-flop may capture a wrong or unstable value. Combining these gives the fundamental limit: the **clock period** must be long enough for a signal to leave one register, propagate through the worst-case combinational path, and satisfy the next register's setup time. That is:

$$T_{clock} \ge t_{cq} + t_{critical\ path} + t_{setup}$$

So the **critical path bounds the maximum clock frequency** — you cannot clock a circuit faster than its slowest path allows. Speeding a circuit up means shortening that path (fewer gates in series, or **pipelining** to break it into shorter stages).

Two reliability hazards arise from timing. A **glitch** (hazard) is a brief, unwanted output pulse when signals along different paths arrive at slightly different times; in synchronous designs, sampling only at the clock edge (after signals settle) hides glitches. **Metastability** is a deeper danger: if a flip-flop's setup/hold is violated (often by an input from another, unsynchronized clock domain), it can enter an unstable in-between state for an unpredictable time — mitigated, never fully eliminated, by synchronizer flip-flops.

> **Common pitfall:** assuming a circuit can be clocked arbitrarily fast just by raising the clock frequency. The clock period is bounded below by the **critical path** delay plus setup time — clock faster than that and signals will not have settled, causing setup violations and wrong results. To go faster you must shorten the critical path, not merely crank the clock.

**Practice preview:**

**1.** *(Numerical input)* Between two registers, the launching flip-flop takes 2 ns to put a new value on its output, the combinational logic on the worst path takes 11 ns, and the capturing flip-flop needs its input stable for 2 ns before the edge. What is the shortest clock period the circuit can be run at, in nanoseconds?

**2.** *(Ordering)* Order what happens to a signal travelling between two registers during a single clock period.

**3.** *(Category sort)* Sort each description under the timing requirement it describes.

---

## Hardware Description Thinking

Modern chips have billions of gates — no one draws them by hand. Instead, engineers write a **hardware description language (HDL)** such as Verilog or VHDL, describing _what_ the hardware should do, and a tool called a **synthesizer** turns that description into an actual gate-level circuit. Learning to _think_ in HDL terms is central to digital design.

An HDL description works at two levels. A **structural** description says how components are _wired together_ — "this MUX's output connects to that register's input" — mirroring a schematic. A **behavioral** description instead says what the hardware should _do_ — "on each clock edge, if reset, set count to 0, else count to count + 1" — leaving the synthesizer to work out the gates. Behavioral descriptions are far more productive; you specify intent and let the tool implement it.

The crucial mindset shift is that HDL is **not** sequential software. HDL statements describe hardware that all exists and operates **in parallel** — everything happens at once, on every clock edge, not line by line. An assignment in HDL creates a permanent connection or a register update, not a one-time step in a procedure. Beginners who read HDL like a program misunderstand it badly.

**Synthesis** maps the description to a specific technology's gates and cells, optimizing for area, speed, or power, then **place-and-route** decides where each cell sits and how wires connect. The designer works at the behavioral level; the tools handle the millions of low-level decisions — the same abstraction-layering seen throughout computing.

> **Common pitfall:** reading a hardware description language like ordinary sequential code, where statements run one after another. HDL describes hardware that operates **concurrently** — all blocks act in parallel, on every clock edge. An HDL "assignment" is a persistent hardware connection or a clocked update, not a sequential instruction; missing this leads to fundamentally wrong designs.

**Practice preview:**

**1.** *(Flow chart)* This chart shows what one behavioural HDL block describes happening at each clock edge. Fill the two empty boxes, choosing from these four phrases: 'Set count to 0', 'Set count to count plus 1', 'Run both assignments one after the other', 'Stop the clock until the logic settles'. Two phrases are never used.

**2.** *(Numerical input)* A behavioural description says that on every clock edge, count becomes count plus 3. The register count is 4 bits wide and starts at 0. What value does count hold after 6 clock edges?

**3.** *(Ordering)* Order the stages by which a hardware description becomes a physical chip.

---

## Integrated Digital-System Reasoning

Every concept in this unit assembles into the standard shape of a digital system: a **datapath** (combinational logic plus registers that move and transform data) directed by a **control** unit (a finite state machine that says what to do each cycle). This datapath-plus-control structure is exactly how a CPU — and countless smaller systems — is organized.

Trace a simple example: a circuit that reads a number, and on each clock tick adds a fixed step, stopping when it reaches a target. It needs:
- A **register** (flip-flops) to hold the current value — _sequential_.
- An **adder** (combinational) to compute current + step.
- A **comparator** (combinational) to test whether the target is reached.
- A **control FSM** with states like _running_ and _done_, advancing on the clock, that enables the register while running and halts at the target.
- A **clock** to advance the whole system one well-defined step per tick, within the period the **critical path** allows.

Every unit theme appears: gates and boolean logic build the adder and comparator; minimisation keeps them cheap; sequential logic and flip-flops hold state; timing analysis sets the clock speed; and an HDL would describe it all behaviorally for synthesis.

The unifying lesson is that digital systems are built by **composition and abstraction**: gates form blocks (adders, MUXes), blocks form a datapath, a control FSM sequences it, and a clock disciplines the whole. Each layer hides the one below, so a designer reasons at the level that matters — the same layered structure that lets a few boolean values, disciplined by a clock, become a working computer.

> **Common pitfall:** trying to reason about a whole digital system at the individual-gate level. Real design works by **composition** — think in terms of blocks (registers, adders, an FSM controller) and their interfaces, not thousands of gates. Descend to the gate level only when a specific block or timing path needs it; otherwise reason about the datapath and control abstractly.

**Practice preview:**

**1.** *(Table completion)* A datapath holds a value in a register, adds a step of 7 to it on every clock tick, and its control machine leaves the Running state for Done as soon as the value reaches 30 or more. The register starts at 0. Complete the trace.

**2.** *(Flow chart)* This chart shows how that system behaves. Fill the two empty boxes, choosing from these four phrases: 'Add the step to the value and write the result back into the register', 'Enter the Done state and stop enabling the register', 'Reset the register to zero', 'Increase the clock frequency'. Two phrases are never used.

**3.** *(Numerical input)* The system needs 6 clock ticks to finish its job and runs at a clock period of 11 nanoseconds. How long does the whole computation take, in nanoseconds?

---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
