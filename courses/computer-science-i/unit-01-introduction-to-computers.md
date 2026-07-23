# Unit 1: Introduction to Computers

**[Study this unit interactively on Tryals →](https://tryals.app/courses/computer-science-i)**

## Information Encoding and Binary Representation

A computer stores and processes information using just two states — on and off, high and low voltage — represented by the digits **0** and **1**. A single such digit is a **bit** (binary digit); eight bits make a **byte**. Everything a computer holds — numbers, text, images, sound, instructions — is ultimately a pattern of bits. What a pattern _means_ depends entirely on how it is _interpreted_.

Numbers are stored in **binary** (base 2), where each position is a power of 2 rather than a power of 10. Reading right to left, the positions are worth $1, 2, 4, 8, 16, \dots$. The binary number $1011$ therefore equals $8 + 0 + 2 + 1 = 11$ in decimal.

| Binary | Powers | Decimal |
|---|---|---|
| $1011$ | $8+2+1$ | $11$ |
| $10000$ | $16$ | $16$ |
| $11111111$ | $128+64+\dots+1$ | $255$ |

An 8-bit byte can represent $2^8 = 256$ distinct values, from $0$ to $255$. In general, $n$ bits give $2^n$ combinations. Because long binary strings are hard to read, programmers use **hexadecimal** (base 16, digits $0$–$9$ then $A$–$F$), where each hex digit packs exactly 4 bits — so one byte is exactly two hex digits.

Text is encoded by mapping characters to numbers: **ASCII** uses 7 bits per character (128 symbols), while **Unicode** extends this to cover every writing system.

> **Common pitfall:** thinking a bit pattern has an inherent meaning. The same byte $01000001$ is the number $65$, the letter $A$ in ASCII, or part of a color — the interpretation, not the bits, decides. Always ask _how_ a pattern is being read before deciding what it represents.

An 8-cell binary ruler: each cell labelled with its power of 2 (128 down to 1). A sample byte lights its set bits in accent, and the lit place values drop one by one into a running sum beneath.

$$d = \sum_{i=0}^{n-1} b_i \cdot 2^i$$

**Practice preview:**

**1.** *(Number base)* A file header stores the value 45. Write that value in binary.

**2.** *(Table completion)* Complete the table of byte values. Write the hexadecimal entries using capital letters and no prefix.

**3.** *(Category sort)* Four bits can hold the values 0 to 15. Sort each number by whether four bits are enough to store it.

---

## Arithmetic at Machine Level

Computers add binary numbers with the same carry rules as decimal, but with only two digits. The core facts are $0+0=0$, $0+1=1$, $1+0=1$, and $1+1=10$ (that is, $0$ carry $1$). Adding $011 + 001$ gives $100$: the rightmost column $1+1$ is $0$ carry $1$, the next column $1+0+\text{carry }1$ is $0$ carry $1$, and the last column receives that carry to give $1$.

Because a register holds a **fixed** number of bits, a sum that needs more bits than are available **overflows** — the extra high bit is lost. In an 8-bit register, $255 + 1$ wraps around to $0$, because the true answer $256$ needs a 9th bit that does not exist. Overflow is not an error the hardware raises by default; it is silent, and reasoning about it is a real part of low-level programming.

Negative numbers use **two's complement**, the near-universal scheme for signed integers. To negate a number, **invert all its bits and add 1**. In 8-bit two's complement, the leftmost bit is the **sign bit**: $0$ means non-negative, $1$ means negative. This representation has one great virtue: the ordinary binary addition circuit works correctly for signed numbers too, with no special cases — subtraction becomes "add the two's complement."

| 8-bit pattern | Two's-complement value |
|---|---|
| $00000001$ | $+1$ |
| $11111111$ | $-1$ |
| $10000000$ | $-128$ |
| $01111111$ | $+127$ |

> **Common pitfall:** assuming an integer can grow without bound. Machine integers have a fixed width, so they wrap on overflow — an 8-bit unsigned value silently goes $255 \to 0$, and a signed one goes $+127 \to -128$. Forgetting this fixed range is the source of countless real-world bugs.

**Practice preview:**

**1.** *(Truth table)* When the machine adds bits A and B in one column, it writes a sum digit in that column and may pass a carry to the next. Complete the column for the SUM digit only.

**2.** *(Numerical input)* An 8-bit unsigned register holds the value 250. The program adds 10 to it. What value does the register hold afterwards?

**3.** *(Formula builder)* Arrange the tokens into the two's-complement rule for negating a number.

---

## Processor, Memory, and Buses

Almost every modern computer follows the **von Neumann architecture**: a **central processing unit (CPU)** connected to a single **main memory** that holds _both_ the program's instructions and its data, linked by **buses**.

The **CPU** does the work. Inside it, the **control unit** fetches and decodes instructions and directs the rest of the machine, while the **arithmetic logic unit (ALU)** performs the actual computations — additions, comparisons, logical operations. The CPU also has a small set of very fast storage locations called **registers** for the values it is working on right now.

**Main memory (RAM)** is a large array of numbered cells, each holding one byte, identified by its **address**. Memory is **volatile** — its contents vanish when power is lost — and it is far larger but far slower than registers.

The **buses** are the shared wires that move information between components. Conceptually there are three: the **address bus** (the CPU puts an address on it to say _which_ cell it wants), the **data bus** (the byte travels here, in either direction), and the **control bus** (signals like "read" or "write" that say _what_ to do). The width of the address bus limits how much memory can be addressed: $n$ address lines can name $2^n$ cells.

> **Common pitfall:** believing programs and data live in separate memories. In the von Neumann design they share the _same_ main memory — a program is just data that the CPU chooses to interpret as instructions. This unification is powerful (programs can even modify programs) but also the root of whole classes of security problems.

**Practice preview:**

**1.** *(Numerical input)* An address bus has 12 lines. How many distinct memory cells can the CPU name using it?

**2.** *(Matrix grid)* Assign each job to the part of the machine that does it.

**3.** *(Error highlight)* A student describes the shape of a computer. Highlight the one incorrect statement.

---

## The Instruction Execution Cycle

A CPU runs a program by repeating one simple loop, billions of times a second: the **fetch–decode–execute cycle** (the _instruction cycle_).

1. **Fetch.** The CPU reads the next instruction from memory. A special register, the **program counter (PC)**, holds the address of that instruction. The instruction is copied into the **instruction register (IR)**, and the PC advances to point at the following instruction.
2. **Decode.** The control unit interprets the bits in the IR to determine _what operation_ is requested and _which operands_ it needs.
3. **Execute.** The CPU carries out the operation — the ALU computes, or a value is moved to or from memory or a register.

Then the loop repeats. Because the PC advances automatically, instructions normally run in sequence. A **jump** or **branch** instruction changes the game: it writes a _new_ address into the PC, so the next fetch happens somewhere else. This is exactly how loops, conditionals, and function calls are built — by controlling what the PC holds.

| Step | What happens | Key register |
|---|---|---|
| Fetch | Read instruction at PC; advance PC | Program counter (PC) |
| Decode | Interpret the operation and operands | Instruction register (IR) |
| Execute | Perform the operation | ALU / registers / memory |

> **Common pitfall:** thinking a branch or jump "skips" the cycle or works by magic. It does not — it simply _writes a different address into the program counter_. Every instruction, branches included, goes through fetch–decode–execute; a branch's whole effect is changing where the next fetch looks.

A three-box loop labelled Fetch, Decode, Execute with an accent token circulating through them, and a side program-counter that increments each pass — then a branch beat rewrites the PC and the token resumes from a.

$$\text{PC} \leftarrow \text{PC} + 1 \;\; \text{or} \;\; \text{PC} \leftarrow \text{target}$$

**Practice preview:**

**1.** *(Flow chart)* This chart is one turn of the instruction cycle. Label the three empty boxes with the three phase names — Fetch, Decode and Execute — in the order the CPU performs them. Write one word in each box.

**2.** *(Table completion)* Complete the table with the register or unit each step depends on. Use the abbreviations PC, IR and ALU.

**3.** *(Number line placement)* Instructions are 4 bytes long. The PC holds 200 and the CPU fetches the instruction there; that instruction turns out to be a jump to address 216. **Place the marker on the value the PC holds once that instruction has finished executing.

---

## Data Path and Control

The CPU's **data path** is the network of components — registers, the ALU, and the wires (and **multiplexers**) between them — through which operands flow and results return. The **control** logic sets the switches on that network so that, for each instruction, data flows along the right route.

Every CPU understands a fixed vocabulary of operations, its **instruction set architecture (ISA)**. A machine instruction is a bit pattern split into fields. The **opcode** field says _which_ operation to perform (add, load, store, jump); the **operand** fields say _what_ to operate on — which registers, or an immediate value, or a memory address. Decoding an instruction means reading these fields and configuring the data path accordingly.

Instructions fall into a few families:
- **Arithmetic/logic** (e.g. add two registers) — route operands into the ALU, result back to a register.
- **Data transfer** (load, store) — move a value between a register and memory.
- **Control flow** (jump, branch) — change the program counter.

A key ISA distinction is between **register** operands (fast, on-chip) and **immediate** operands (a constant baked into the instruction itself). The control unit's job, on every cycle, is to translate the decoded opcode into the exact set of control signals — which register to read, whether the ALU adds or subtracts, where the result is written — that steer the data path.

> **Common pitfall:** conflating the **opcode** (which operation) with the **operands** (what it acts on). "$\text{ADD } R1, R2$" has one opcode (ADD) and two operands (R1, R2). Reading the fields in the wrong roles is a classic decoding mistake — the opcode selects the operation; the operands feed it.

**Practice preview:**

**1.** *(Logic gate)* The control unit can set the ALU to perform AND, OR or XOR bit by bit. In one column the two operand bits are 1 and 0. Give the ALU's output bit for each of the three settings, in the order AND, OR, XOR.

**2.** *(Category sort)* Two instructions are given: 'ADD R1, R2' adds two registers, and 'ADDI R3, 7' adds the constant 7 to a register. Sort each field by the role it plays.

**3.** *(Multi select)* The CPU is executing ADD R1, R2, writing the result back into R1. Select every control signal the control unit must produce for this instruction.
   - [ ] Which registers to read onto the ALU's inputs
   - [ ] Whether the ALU should add or subtract
   - [ ] Which register the ALU's result is written back to
   - [ ] The main-memory address the result should be stored at
   - [ ] The new value to load into the program counter


---

## Cache and the Memory Hierarchy

There is a brutal trade-off in memory: fast storage is small and expensive, while large storage is cheap and slow. No single technology is both fast and huge, so computers use a **memory hierarchy** — a stack of layers, fast-and-small at the top, slow-and-large at the bottom.

| Level | Speed | Size | Cost per byte |
|---|---|---|---|
| Registers | Fastest | Bytes | Highest |
| Cache (L1, L2, L3) | Very fast | KB–MB | High |
| Main memory (RAM) | Fast | GB | Medium |
| Disk / SSD | Slow | TB | Low |

A **cache** is a small, fast memory that sits between the CPU and main memory and holds _copies_ of recently or frequently used data. When the CPU needs a value, it checks the cache first. A **cache hit** (the value is there) is fast; a **cache miss** forces a slow trip to main memory — and the fetched block is then copied into the cache for next time.

Caches work because real programs exhibit **locality of reference**. **Temporal locality**: a value used now is likely to be used again soon (so keep it close). **Spatial locality**: if one address is used, nearby addresses are likely to be used soon (so caches fetch a whole _block_ at once, not one byte). The fraction of accesses that hit the cache is the **hit rate**, and because a miss is so much slower than a hit, even a small drop in hit rate can badly hurt performance.

> **Common pitfall:** imagining the cache stores _different_ data than main memory. It does not — a cache holds fast **copies** of data that also lives in main memory. Its value is purely speed: keeping the data the program is likely to touch next in the layer closest to the CPU.

**Practice preview:**

**1.** *(Ordering)* Order these storage layers from fastest to slowest.

**2.** *(Venn diagram)* A cache holds copies of data, not data of its own. Place each item according to where it currently exists.

**3.** *(Grid path)* Each cell is a block of memory. The blocked cells are blocks that are NOT in the cache, so touching one forces a slow trip to main memory. Trace the route from the top-left block to the bottom-right block that stays entirely in cache, moving one step at a time.

---

## Input-Output and Peripheral Communication

A CPU on its own is deaf and mute; **input/output (I/O)** is how it communicates with peripherals — keyboards, disks, networks, displays. The challenge is that devices are enormously _slower_ than the CPU and operate on their own schedule, so the machine needs disciplined ways to coordinate.

The simplest method is **polling** (programmed I/O): the CPU repeatedly asks a device "are you ready yet?" in a loop. It is simple but wasteful — the CPU burns cycles spinning while it waits, doing no useful work.

The better method is **interrupts**. The CPU issues a request and then goes on with other work; when the device is ready, it sends an **interrupt** signal. The CPU pauses what it is doing, saves its state, runs a short **interrupt handler** (interrupt service routine) to deal with the device, then restores its state and resumes. Interrupts let a slow device get attention _only when needed_, freeing the CPU in the meantime.

For moving large blocks of data (say, from disk to memory), even interrupts-per-byte would swamp the CPU. **Direct memory access (DMA)** solves this: a dedicated **DMA controller** transfers data between a device and main memory _without the CPU moving each byte_, interrupting the CPU only once when the whole transfer is complete.

> **Common pitfall:** assuming polling is generally better because it is simpler. Polling wastes the CPU by busy-waiting; for anything but the most trivial or timing-critical cases, **interrupts** (and DMA for bulk transfers) are far more efficient, because they let the CPU do useful work instead of spinning.

**Practice preview:**

**1.** *(Flow chart)* This chart shows the CPU reading a slow device by polling. Fill the two empty boxes, choosing from these four phrases: 'Ask the device if it is ready', 'Do other useful work', 'Transfer the byte', 'Send an interrupt'. One phrase is never used.

**2.** *(Numerical input)* A 4096-byte block is moved from disk into memory. With one interrupt per byte the CPU is interrupted once for each byte transferred; with DMA it is interrupted only once, when the whole transfer finishes. How many interrupts does DMA save?

**3.** *(Cloze bank)* Complete the criticism of polling.

---

## Performance Trade-offs

Raw **clock speed** (cycles per second, measured in GHz) is the most quoted performance number, but on its own it is a poor guide. What actually matters is how much useful work gets done, which depends on three things multiplied together — captured by the **CPU performance equation**:

$$\text{time} = \text{instructions} \times \text{cycles per instruction} \times \text{time per cycle}$$

A chip with a slower clock but fewer cycles per instruction (CPI), or fewer instructions to do the same job, can easily beat a higher-GHz rival. This is why comparing two processors by clock speed alone (the old "megahertz myth") is misleading.

Real designs are full of trade-offs. A **cache** speeds up memory access but costs chip area and power. A **pipeline** overlaps the stages of successive instructions to raise throughput, but complicates control and stalls on branches. More **cores** help programs that can be split into parallel work, but do nothing for a task that is inherently sequential.

That last point is formalized by **Amdahl's law**: the speedup from parallelizing a program is limited by the fraction that _must_ run sequentially. If $10\%$ of a task cannot be parallelized, then no matter how many processors you add, you can never make the whole task more than $10\times$ faster — the serial part dominates. Amdahl's law is the sober counterweight to the hope that "just add more cores" fixes everything.

> **Common pitfall:** judging a processor purely by its clock speed (GHz). Performance is instructions × cycles-per-instruction × time-per-cycle; a lower-GHz chip with a better architecture (lower CPI, smarter caching) routinely outperforms a higher-GHz one. And by Amdahl's law, more cores help only the parallelizable part of a workload.

An Amdahl's-law speedup curve rising then flattening toward a horizontal ceiling line at 1/serial-fraction, with the serial portion of a task bar shaded in accent to show what refuses to shrink as processors are add.

$$S_{max} = \frac{1}{(1-p) + p/N}$$

**Practice preview:**

**1.** *(Numerical input)* A program executes 2,000,000,000 instructions at an average of 2 cycles per instruction on a 2 GHz processor. How many seconds does it take?

**2.** *(Pattern sequence)* The row lists the length of one clock cycle, in nanoseconds, for processors running at 1, 2, 4 and 8 GHz. Fill in the missing entry.

**3.** *(Error highlight)* A student compares two processors. Highlight the one incorrect statement.

---

## Machine-Level Debugging Logic

At the machine level, a running program is nothing but **state**: the values in the registers, the contents of memory, and the program counter saying what runs next. A bug is a point where that state diverges from what it should be. Debugging is the disciplined art of finding _where_ the divergence first happens.

The core technique is to make state **observable**. A **debugger** lets you set a **breakpoint** (pause execution at a chosen instruction), then **inspect** the registers and memory to see the actual state, and **single-step** (execute one instruction at a time) to watch the state change. The strategy is a search: confirm the state is correct at some early point, confirm it is wrong at a later point, and narrow the gap — a kind of _binary search in time_ — until you find the exact instruction that first produces the wrong value.

Machine-level bugs cluster into recognizable families: an **off-by-one** in a loop bound; **integer overflow** wrapping a value unexpectedly; reading or writing the **wrong memory address**; using an **uninitialized** register or memory cell (whose value is whatever was left there); and getting **signed vs. unsigned** interpretation wrong. Recognizing the family speeds the hunt.

The overriding principle is to **reason from evidence, not assumption**. Do not guess what the code "should" be doing — _observe_ what the state actually is at each step, and let the discrepancy point to the fault.

> **Common pitfall:** "debugging by guessing" — changing code because you _think_ you know the cause, without observing the actual state. The reliable method is to inspect real register and memory values at breakpoints and narrow down where the state first goes wrong. Evidence, not intuition, finds the bug.

**Practice preview:**

**1.** *(Matrix grid)* Assign each observed symptom to the family of machine-level bug it most likely belongs to.

**2.** *(Table completion)* Trace this instruction sequence by hand and complete the register values. R1 = 5, then R2 = 3, then R1 = R1 - R2, then R2 = R1 + R2, then R1 = R1 * R2.

**3.** *(Error highlight)* A student describes machine-level debugging. Highlight the one incorrect statement.

---

## Integrated Computer-System Reasoning

The payoff of studying a computer part by part is being able to reason about the _whole_ system for a real task — to follow information as it flows through encoding, the CPU, the memory hierarchy, and I/O, and to see where the true bottleneck lies.

Consider a simple job: read a number from the keyboard, add one to it, and store the result. Trace it: the keypress arrives as an **I/O** event (an interrupt); the character is **encoded** as bits and placed in memory; the CPU **fetches** the add instruction (checking the **cache** first, paying a slow **main-memory** access on a miss), the **ALU** performs the addition in the **data path**, possibly touching **two's-complement** rules if signs are involved; the result is **stored** back to memory. Every layer of the course appears in one small task.

The unifying lesson is that a system's performance is governed by its **bottleneck** — the slowest stage that the work must pass through. Speeding up a stage that is _not_ the bottleneck yields little; this is why measuring before optimizing matters. Because the layers differ in speed by orders of magnitude (a register access versus a disk access can differ by a factor of _millions_), the bottleneck is very often **I/O or memory**, not raw CPU arithmetic.

This is also why the **abstractions** matter: each layer (bits, ISA, memory hierarchy, I/O) hides its internal complexity behind a clean interface, so a programmer can reason at one level without tracking every wire — while knowing that the layer below is there when performance demands attention.

> **Common pitfall:** optimizing the wrong layer. Making the CPU arithmetic faster does nothing if the task spends almost all its time waiting on **I/O** or a **cache miss**. Always identify the actual bottleneck — the slowest stage on the critical path — before trying to speed a system up.

**Practice preview:**

**1.** *(Flow chart)* This chart traces the task 'read a number from the keyboard, add one to it, and store the result'. Label the three empty boxes with the part of the machine that does that step, choosing from: 'I/O interrupt', 'ALU', 'Main memory', 'Cache'. One of the four is never used.

**2.** *(Numerical input)* A task spends 10 ms in the CPU and 90 ms waiting on disk, for a total of 100 ms. An engineer makes the CPU portion twice as fast. What is the new total time, in milliseconds?

**3.** *(Category sort)* Sort each design concern into the layer of the system it belongs to.

---

*Part of [Computer Science I](README.md) — [Open University Courses by Tryals](../../README.md)*
