# Unit 10: Microeconomics

## Consumer Preferences

Microeconomics begins with the consumer — and the consumer begins with **preferences**.

**Three axioms of rational preference**:
1. **Completeness**: for any two bundles $A$ and $B$, the consumer can rank them — prefers $A$, prefers $B$, or is indifferent.
2. **Transitivity**: if $A \succsim B$ and $B \succsim C$, then $A \succsim C$. No preference cycles.
3. **Non-satiation** ("more is better"): a bundle with more of at least one good (and no less of any other) is strictly preferred.

**Indifference curves** connect all bundles the consumer considers equally good. Properties:
- They slope **downward** (giving up one good requires compensation with the other).
- They **never cross** (crossing would violate transitivity).
- **Higher curves are preferred** (non-satiation pushes the consumer northeast).

**The marginal rate of substitution** (MRS) is the slope of the indifference curve — the rate at which the consumer willingly trades one good for another:

$$MRS = -\frac{\Delta y}{\Delta x} = \frac{MU_x}{MU_y}$$

The MRS typically **diminishes**: the more $x$ you have (relative to $y$), the less $y$ you're willing to give up for another unit of $x$. This gives indifference curves their characteristic **convex** shape — bowed toward the origin.

**Special cases**: perfect substitutes (straight-line indifference curves, constant MRS), perfect complements (L-shaped curves, consumed in fixed proportions), and Cobb-Douglas (smooth, convex, the workhorse case).

**The three axioms**

| Axiom | Says | Rules out |
|---|---|---|
| Completeness | Any two bundles can be ranked | "I can't compare them" |
| Transitivity | $A \succsim B$, $B \succsim C$ → $A \succsim C$ | Preference cycles |
| Non-satiation | More is better | Bliss points inside the map |

> **Tip:** Each indifference-curve property is an axiom made visible: downward slope comes from non-satiation, non-crossing from transitivity. If a drawn map violates one, an axiom has been broken somewhere.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* An indifference curve through bundle $(4, 6)$ has $MRS = 2$. If the consumer gives up 1 unit of $y$, they need approximately **2 more units of $x$** to stay indifferent. **Drag the new bundle marker** to approximately $(6, 5)$.

**2.** *(Matrix grid)* Classify each indifference curve shape by its preference type.

**3.** *(Cloze bank)* Complete the MRS definition.

---

## Utility Maximization

The consumer wants the highest indifference curve they can reach — but they face a **budget constraint**:

$$p_x x + p_y y = M$$

where $p_x, p_y$ are prices and $M$ is income. The **budget line** has slope $-p_x/p_y$ (the market exchange rate) and intercepts $M/p_x$ and $M/p_y$.

**The optimal bundle** is where the highest indifference curve is **tangent** to the budget line. At tangency:

$$MRS = \frac{MU_x}{MU_y} = \frac{p_x}{p_y}$$

This is the **tangency condition**: the consumer's willingness to trade ($MRS$) equals the market's exchange rate ($p_x/p_y$). Equivalently:

$$\frac{MU_x}{p_x} = \frac{MU_y}{p_y}$$

**Marginal utility per euro is equalised** across all goods — no reallocation of spending can improve utility. If $MU_x/p_x > MU_y/p_y$, the consumer should buy more $x$ and less $y$.

**Corner solutions**: if the MRS is always above or below the price ratio, the consumer buys only one good. This happens with perfect substitutes when one good is strictly cheaper per unit of utility.

**Cobb-Douglas utility** $U = x^a y^{1-a}$: the optimal shares are constant — spend fraction $a$ of income on $x$ and $(1-a)$ on $y$, regardless of prices. This makes Cobb-Douglas the workhorse for textbook examples.

**Reading the tangency**

| Object | Slope | Meaning |
|---|---|---|
| Budget line | $-p_x/p_y$ | The market's exchange rate |
| Indifference curve | $-MRS$ | The consumer's exchange rate |
| Optimum | Equal | No beneficial trade remains |

> **Common pitfall:** Equalising marginal utilities instead of marginal utility _per euro_. The rule is $MU_x/p_x = MU_y/p_y$ — a good with twice the marginal utility is only worth buying if it costs less than twice as much.

The budget line shifts when income or prices change — and each shift reveals something about the consumer's response.

**Income increase** ($M$ rises): the budget line shifts **outward** (parallel — slope unchanged, because relative prices haven't changed). The consumer can reach a higher indifference curve. The path connecting optimal bundles at different income levels is the **income-consumption curve** (ICC); plotted as quantity vs income, it is the **Engel curve**.

**Price decrease** ($p_x$ falls): the budget line **pivots outward** from the $y$-intercept (the $x$-intercept moves right; the $y$-intercept stays). The consumer substitutes toward the cheaper good AND has greater real purchasing power.

$$\text{New } x\text{-intercept} = M / p_x' > M / p_x$$

**Taxes and subsidies** modify the effective budget constraint:
- A **per-unit tax** on $x$ steepens the budget line (raises $p_x$).
- A **lump-sum tax** shifts the line inward (reduces $M$, slope unchanged).
- Economic insight: a lump-sum tax raising the same revenue leaves the consumer better off than a per-unit tax, because it doesn't distort relative prices.

**The budget set** (the triangle below the budget line) contains all affordable bundles. Rational consumers choose a point on the line itself (non-satiation) — interior points waste purchasing power.

**Two moves of the budget line**

| Change | Budget line | What it reveals |
|---|---|---|
| Income rises | Parallel shift out | Engel curve — normal vs inferior |
| $p_x$ falls | Pivots out from $y$-intercept | Demand curve for $x$ |

> **Tip:** Watch the intercepts, not the middle: an income change moves _both_ intercepts proportionally (slope fixed); a price change moves _one_ intercept only (slope changes). That single observation decodes any budget-line diagram.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Income is 100, $p_x = 5$, $p_y = 10$. The budget line has $x$-intercept $100/5 = 20$ and $y$-intercept $100/10 = 10$. **Drag the optimal bundle** to the tangency point where $MRS = p_x/p_y = 0.5$.

**2.** *(Error highlight)* Highlight the optimisation error.

**3.** *(Multi select)* Which are true at the optimal consumption bundle?
   - [ ] $MRS = p_x / p_y$
   - [ ] $MU_x / p_x = MU_y / p_y$
   - [ ] The indifference curve is tangent to the budget line
   - [ ] The consumer can afford a higher indifference curve


---

## Demand and Elasticity

The **demand curve** traces how the optimal quantity of a good changes as its price varies (holding income and other prices constant). It is derived from the utility-maximisation problem:

1. At each price $p_x$, solve for $x^*(p_x, p_y, M)$.
2. Plot $(p_x, x^*)$ — this is the demand curve.

For most goods, demand slopes **downward**: higher price, lower quantity demanded. The **law of demand** holds unless the good is a Giffen good (an extreme inferior good where the income effect overwhelms the substitution effect).

**Price elasticity of demand** measures responsiveness:

$$\varepsilon_p = \frac{\%\Delta Q}{\%\Delta P} = \frac{dQ}{dP} \cdot \frac{P}{Q}$$

- $|\varepsilon| > 1$: **elastic** — quantity responds more than proportionally to price.
- $|\varepsilon| < 1$: **inelastic** — quantity responds less.
- $|\varepsilon| = 1$: **unit elastic** — proportional response.

**Revenue implications**: total revenue $R = P \times Q$.
- Elastic demand: price increase lowers revenue (quantity falls proportionally more).
- Inelastic demand: price increase raises revenue.
- Unit elastic: revenue is maximised.

**Determinants of elasticity**: availability of substitutes (more substitutes = more elastic), time horizon (long run = more elastic), necessity vs luxury (necessities = more inelastic), share of budget (larger share = more elastic).

**Elasticity vocabulary**

| Value | Label | Revenue when price rises |
|---|---|---|
| $\vert\varepsilon\vert > 1$ | Elastic | Falls |
| $\vert\varepsilon\vert = 1$ | Unit elastic | Unchanged (maximum) |
| $\vert\varepsilon\vert < 1$ | Inelastic | Rises |

> **Common pitfall:** Confusing slope with elasticity. Slope is $dQ/dP$ in units; elasticity re-scales it by $P/Q$ into percentages. Two curves with identical slopes can have wildly different elasticities at the same price.

A crucial subtlety: elasticity **changes** along a linear demand curve, even though the slope is constant.

For $Q = a - bP$: the slope $dQ/dP = -b$ is constant, but elasticity $\varepsilon = -b \cdot P/Q$ varies because $P/Q$ changes.

$$\varepsilon = -b \cdot \frac{P}{a - bP}$$

- At the **top** of the demand curve (high $P$, low $Q$): $P/Q$ is large, so $|\varepsilon| > 1$ — elastic.
- At the **bottom** (low $P$, high $Q$): $P/Q$ is small, so $|\varepsilon| < 1$ — inelastic.
- At the **midpoint**: $|\varepsilon| = 1$ — unit elastic, revenue maximised.

$$\text{Revenue} = P \times Q = P(a - bP) = aP - bP^2$$

This is a parabola in $P$, maximised at $P^* = a/(2b)$ — exactly the midpoint of the demand curve.

**Cross-price elasticity**: $\varepsilon_{xy} = (\%\Delta Q_x)/(\%\Delta P_y)$. Positive for substitutes (Coke price rises, Pepsi demand rises), negative for complements (petrol price rises, car demand falls).

**Income elasticity**: $\varepsilon_M = (\%\Delta Q)/(\%\Delta M)$. Positive for normal goods, negative for inferior goods. Luxuries have $\varepsilon_M > 1$ (demand rises faster than income).

> **Tip:** On any linear demand curve, find the midpoint — everything above it is elastic territory (cut price to raise revenue), everything below is inelastic (raise price to raise revenue), and the midpoint itself is where revenue peaks.

> **Common pitfall:** "Constant slope means constant elasticity." The ratio $P/Q$ silently changes as you slide down the line — elasticity runs from infinite at the choke price to zero where the curve hits the quantity axis.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Demand is $Q = 100 - 4P$. At $P = 15$, $Q = 40$. The elasticity is $\varepsilon = -4 \times 15/40$. **Drag the elasticity marker** to the correct value.

**2.** *(Category sort)* Sort by cross-price elasticity sign.

**3.** *(True false)* A firm facing inelastic demand can increase revenue by raising its price.
   - True / False


---

## Income and Substitution Effects

When the price of good $x$ falls, quantity demanded rises for two reasons:

1. **Substitution effect**: $x$ is now relatively cheaper — the consumer substitutes toward $x$ and away from $y$. This effect **always** increases $x$ (the substitution effect is always negative: price falls, quantity rises).

2. **Income effect**: the lower price increases **real purchasing power** — the consumer can afford more of everything. For a **normal good**, this increases demand for $x$ further. For an **inferior good**, this decreases demand for $x$ (more income means switching to better alternatives).

**Total effect** = substitution effect + income effect.

$$\Delta x^* = \underbrace{\Delta x^s}_{\text{substitution}} + \underbrace{\Delta x^n}_{\text{income}}$$

**Normal good** ($\varepsilon_M > 0$): both effects work in the same direction — demand definitely slopes down.

**Inferior good** ($\varepsilon_M < 0$): the income effect opposes the substitution effect, but the substitution effect usually dominates — demand still slopes down.

**Giffen good**: the extreme case where the income effect is so strong that it overwhelms the substitution effect — demand slopes **upward**. This requires the good to be both inferior and a large share of the budget (historically: bread for very poor households). Giffen goods are theoretically possible but extremely rare in practice.

**Graphically**: the substitution effect is the movement along the original indifference curve to the new price ratio; the income effect is the shift to the new indifference curve at the new prices.

**The decomposition table**

| Good type | Substitution | Income | Total |
|---|---|---|---|
| Normal | Positive | Positive | Strongly positive |
| Inferior | Positive | Negative | Positive (usually) |
| Giffen | Positive | Very negative | **Negative** — law of demand breaks |

> **Tip:** The substitution effect never betrays you — cheaper always pulls quantity up along the compensated curve. All the drama lives in the income effect: its sign (normal vs inferior) and its size (Giffen) decide the total.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Good $x$ is normal. Its price drops. The substitution effect increases $x$ by 5 units, and the income effect adds 3 more. **Drag the total-effect marker** to the correct value.

**2.** *(Graph identification)* Which diagram shows the Slutsky decomposition: from the original bundle to the substitution bundle (same indifference curve, new prices), then to the final bundle?

**3.** *(Number line placement)* The income elasticity of a luxury good is $\varepsilon_M = 2.5$. If income rises 10%, demand rises 25%. Place $\varepsilon_M$ on the number line.

---

## Production and Costs

**Production functions** map inputs to output: $Q = f(K, L)$. The **isoquant** (analogous to indifference curves) shows all input combinations producing the same output.

**Short run** (capital fixed): the **total product curve** $TP(L)$ shows output as a function of labour alone. **Marginal product** $MP_L = \Delta Q / \Delta L$ eventually diminishes (law of diminishing returns).

**Cost curves** in the short run:

$$TC = FC + VC(Q)$$
$$AC = TC/Q = AFC + AVC$$
$$MC = \Delta TC / \Delta Q$$

**Key relationships**:
- $MC$ intersects $AC$ and $AVC$ at their **minimum** points (when marginal is below average, average falls; when above, it rises).
- $AFC = FC/Q$ always declines (spreading fixed costs).
- $MC$ first falls (increasing returns from specialisation), then rises (diminishing returns).

**Long run** (all inputs variable): the firm chooses the cost-minimising input mix. The **isocost line** $wL + rK = C$ is the firm's budget constraint. Cost minimisation requires **tangency**: $MRTS = w/r$ (analogous to $MRS = p_x/p_y$ in consumer theory).

$$MRTS = \frac{MP_L}{MP_K} = \frac{w}{r}$$

**Returns to scale**:
- Constant: doubling inputs doubles output.
- Increasing: doubling inputs more than doubles output (economies of scale).
- Decreasing: doubling inputs less than doubles output (diseconomies).

The **long-run average cost** (LRAC) curve is U-shaped: economies of scale at low output, constant returns in the middle, diseconomies at high output.

**The cost-curve choreography**

| Curve | Shape | Driven by |
|---|---|---|
| $AFC$ | Always falling | Fixed cost spread over more units |
| $AVC$ | U-shaped | Diminishing marginal product |
| $AC$ | U-shaped, above $AVC$ | $AFC + AVC$ |
| $MC$ | U-shaped, cuts both at their minima | Marginal product mirror |

> **Tip:** The averages-and-marginal logic is universal: when the marginal is below the average, it drags the average down; above, it pulls it up — so $MC$ must cross $AC$ and $AVC$ exactly at their minimum points. Same reason one bad exam drags your GPA down.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* A firm has $FC = 200$, $VC = 5Q + 0.1Q^2$. At $Q = 20$: $TC = 200 + 100 + 40 = 340$, $AC = 340/20 = 17$. **Drag the AC marker** to the correct value.

**2.** *(Error highlight)* Highlight the cost-curve error.

**3.** *(Slider estimate)* A firm has $FC = 500$ and produces 50 units. **Estimate AFC.

---

## Perfect Competition

**Perfect competition** is the benchmark market structure:
- Many small firms, each a **price taker** ($P$ is given by the market).
- **Homogeneous product** (one firm's output is identical to another's).
- **Free entry and exit** in the long run.
- **Perfect information** about prices and technology.

**The firm's problem**: choose output $Q$ to maximise profit $\pi = TR - TC = PQ - TC(Q)$.

First-order condition: $\frac{d\pi}{dQ} = P - MC = 0$, so:

$$P = MC$$

The competitive firm produces where price equals marginal cost. Since the firm is a price taker, its demand curve is a **horizontal line** at the market price.

**Short-run supply**: the MC curve above the minimum AVC (the **shutdown point**). If $P < AVC_{\min}$, the firm shuts down (loses only FC rather than FC + variable losses).

**Long-run equilibrium**: free entry/exit drives **economic profit to zero**:

$$P = MC = AC_{\min}$$

Firms produce at minimum average cost — the most efficient scale. Any profit attracts entry; any loss triggers exit. The long-run supply curve is **perfectly elastic** at $P = AC_{\min}$ (constant-cost industry).

**Welfare**: perfect competition maximises total surplus (consumer + producer). There is no deadweight loss — every unit where the consumer's willingness to pay exceeds the marginal cost is produced. This is the **first theorem of welfare economics**: competitive equilibrium is Pareto efficient.

**The competitive firm's decision card**

| Condition | Decision |
|---|---|
| $P > AC$ | Produce; economic profit |
| $AVC < P < AC$ | Produce at a loss — covers part of fixed costs |
| $P < AVC$ | Shut down — every unit deepens the loss |

> **Common pitfall:** Shutting down as soon as profit turns negative. Between $AVC$ and $AC$, operating loses less than closing: revenue covers all variable costs plus a slice of the fixed costs you owe anyway.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* A competitive firm has $MC = 2 + 0.5Q$. The market price is $P = 12$. Setting $P = MC$: $12 = 2 + 0.5Q$. **Drag the output marker** to the profit-maximising quantity.

**2.** *(Error highlight)* Highlight the competitive market error.

**3.** *(Slider estimate)* A firm has $TR = 10 \times 30 = 300$ and $TC = 250$. **Estimate profit.

---

## Monopoly

A **monopoly** is a single seller — it faces the entire market demand curve and **chooses** its price (or equivalently, its quantity). Unlike a competitive firm, the monopolist is a **price maker**.

**Key insight**: marginal revenue is less than price. To sell one more unit, the monopolist must lower the price on ALL units (not just the marginal one):

$$MR = P + Q \cdot \frac{dP}{dQ} < P$$

For a linear demand $P = a - bQ$: $TR = (a - bQ)Q = aQ - bQ^2$, so:

$$MR = a - 2bQ$$

MR has **twice the slope** of the demand curve — it falls faster and hits zero at half the demand-curve intercept.

**Profit maximisation**: $MR = MC$, then read the **price** from the demand curve above:

$$\pi = (P - AC) \times Q$$

**Deadweight loss**: the monopolist restricts output below the competitive level ($Q_m < Q_c$) and charges a higher price ($P_m > P_c$). Units between $Q_m$ and $Q_c$ have willing buyers and affordable production costs but are NOT produced — this is the **deadweight loss** triangle.

**Price discrimination**:
- **First degree** (perfect): charge each consumer their maximum willingness to pay — captures all surplus.
- **Second degree**: offer different packages (bulk discounts, versioning) — consumers self-select.
- **Third degree**: charge different prices to different groups (student discounts, peak pricing) — requires identifiable segments with different elasticities.

**Sources of monopoly power**: legal barriers (patents, licences), economies of scale (natural monopoly), control of essential resources, network effects.

**Monopoly vs competition**

| | Perfect competition | Monopoly |
|---|---|---|
| Price | $P = MC$ | $P > MR = MC$ |
| Output | Higher | Restricted |
| Surplus | Maximised | Deadweight loss triangle |
| Long-run profit | Zero | Persists behind barriers |

> **Common pitfall:** Reading the monopoly price off the $MR$ curve. The sequence is: find $Q^*$ where $MR = MC$, then climb _up to the demand curve_ to read the price customers will pay for that quantity.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* Demand is $P = 50 - 2Q$, so $MR = 50 - 4Q$. If $MC = 10$, the monopolist sets $MR = MC$: $50 - 4Q = 10$. **Drag the output marker** to $Q_m$.

**2.** *(Error highlight)* Highlight the monopoly error.

**3.** *(True false)* A perfectly price-discriminating monopolist produces the same quantity as a competitive market.
   - True / False


---

## Monopolistic Competition and Oligopoly

Most real markets are neither perfectly competitive nor monopolistic — they lie between.

**Monopolistic competition** (Chamberlin):
- Many firms, each with a **slightly differentiated** product (brands, locations, features).
- Each firm faces a downward-sloping demand (some market power) but there is **free entry**.
- Short run: like monopoly ($MR = MC$, possible profit).
- Long run: entry erodes profit, demand shifts left until $P = AC$ (tangency) — **zero economic profit** but at a point LEFT of $AC_{\min}$. The firm has **excess capacity**.

$$\text{Long run}: P = AC > AC_{\min} \qquad (\text{excess capacity})$$

**Oligopoly**: a few large firms whose decisions **interact strategically**.

**Cournot duopoly**: two firms simultaneously choose quantities. Each firm's optimal output depends on the other's — a **reaction function**:

$$q_1^*(q_2) = \frac{a - c}{2b} - \frac{q_2}{2}$$

The **Nash equilibrium** is where reaction functions intersect — neither firm can improve by changing its output alone.

**Other models**:
- **Bertrand**: firms compete on **price** — with identical products, price falls to marginal cost (the Bertrand paradox: two firms suffice for competition).
- **Stackelberg**: one firm moves first (leader), committing to output — the leader gains a strategic advantage.
- **Cartel/collusion**: firms coordinate to restrict output (joint profit maximisation), but each has an incentive to **cheat** (prisoner's dilemma).

**Concentration ratios** and the **Herfindahl-Hirschman Index** (HHI = sum of squared market shares) measure market power. Higher HHI → more concentrated → more oligopolistic.

**The between-markets compared**

| | Monopolistic competition | Oligopoly (Cournot) |
|---|---|---|
| Firms | Many, differentiated | Few, strategic |
| Entry | Free | Barriers |
| Long-run profit | Zero (tangency) | Positive, shared |
| Signature result | Excess capacity | Output between monopoly and competition |

> **Tip:** The Cournot result is worth memorising as a scale: monopoly output < Cournot duopoly total < competitive output — and as the number of Cournot firms grows, the market glides smoothly toward the competitive benchmark.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* In a Cournot duopoly with $P = 100 - Q$, $MC = 10$: each firm's reaction function is $q_i = 45 - q_j/2$. At Nash equilibrium, $q_1 = q_2 = 30$. **Drag the equilibrium marker** to the correct total output $Q$.

**2.** *(Error highlight)* Highlight the oligopoly error.

**3.** *(True false)* In the Bertrand model with identical products and equal costs, two firms are enough to drive the price to marginal cost.
   - True / False


---

## Factor Markets

**Factor markets** (labour, capital, land) are the flip side of product markets — firms are **buyers** and households are **sellers**.

**Labour demand**: a profit-maximising firm hires workers until the value of the last worker's output equals the wage:

$$VMP_L = P \times MP_L = w$$

The **value of marginal product** ($VMP_L$) curve is the firm's labour demand curve. It slopes downward because of diminishing marginal returns.

**Market wage determination**: labour supply and demand intersect to give the equilibrium wage. In competitive labour markets, workers earn their marginal product.

**Monopsony**: a single buyer of labour (like a company town). The monopsonist faces an upward-sloping labour supply — to hire more workers, it must raise the wage for ALL workers. This makes the marginal cost of labour exceed the wage:

$$MCL > w \qquad (\text{analogous to } MR < P \text{ in monopoly})$$

The monopsonist hires fewer workers and pays a lower wage than the competitive outcome — a mirror image of monopoly's restriction.

**Human capital** (Becker): education and training increase worker productivity, justifying higher wages. The decision to invest in education is a cost-benefit analysis:

$$\text{NPV of education} = \sum \frac{w_{\text{skilled}} - w_{\text{unskilled}}}{(1+r)^t} - \text{tuition and foregone wages}$$

**Wage differentials** arise from: human capital differences, compensating differentials (dangerous or unpleasant jobs pay more), discrimination, union bargaining power, and efficiency wages (firms pay above market to reduce turnover).

**Competitive vs monopsony hiring**

| | Competitive buyer | Monopsonist |
|---|---|---|
| Faces | Market wage (flat) | Upward-sloping labour supply |
| Hires until | $VMP_L = w$ | $VMP_L = MC_L > w$ |
| Result | Efficient employment | Fewer workers, lower wage |

> **Tip:** Monopsony is why a minimum wage can _raise_ employment — a floor above the monopsony wage but below $VMP_L$ removes the incentive to restrict hiring, moving the market toward the competitive outcome.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* A firm sells output at $P = 20$ and has $MP_L = 10 - 0.5L$. The wage is $w = 100$. Setting $VMP_L = w$: $20(10 - 0.5L) = 100$. **Drag the hiring marker** to the optimal number of workers.

**2.** *(Error highlight)* Highlight the monopsony error.

**3.** *(True false)* In a competitive labour market, workers are paid their value of marginal product.
   - True / False


---

## Externalities and Public Goods

Perfect competition achieves Pareto efficiency — but only when there are no **externalities** (costs or benefits that fall on third parties).

**Negative externality** (e.g., pollution): the private cost of production is less than the **social cost**. The firm ignores the damage to others:

$$MSC = MPC + MEC$$

where $MEC$ is the marginal external cost. The market overproduces: $Q_{\text{market}} > Q_{\text{social}}$. The gap is **deadweight loss from overproduction**.

**Positive externality** (e.g., education, vaccination): the private benefit is less than the **social benefit**. The market underproduces.

$$MSB = MPB + MEB$$

**Solutions**:
- **Pigouvian tax** (Pigou): tax the externality-generating activity at a rate equal to $MEC$ at the social optimum. This internalises the externality — the private cost becomes the social cost.
- **Pigouvian subsidy**: for positive externalities, subsidise to close the gap between private and social benefit.
- **Coase theorem** (Coase): if property rights are well-defined and transaction costs are low, private bargaining between the parties can achieve the social optimum regardless of who holds the property right. The allocation of rights affects **distribution** but not **efficiency**.
- **Cap and trade**: set a total pollution cap, issue tradeable permits. Firms that can abate cheaply sell permits to firms that find it expensive — achieving the target at minimum total cost.

**Public goods** have two properties:
- **Non-excludable**: you cannot prevent someone from consuming it (national defence, lighthouse).
- **Non-rival**: one person's consumption does not reduce another's.

Markets underprovide public goods because of the **free-rider problem**: individuals benefit without paying. Government provision, funded by taxes, is the standard solution.

$$\text{Optimal provision}: \sum MB_i = MC$$

The social optimum requires the **vertical sum** of individual demand curves (because all consumers enjoy the same unit) to equal marginal cost.

**Externalities and their fixes**

| Externality | Market outcome | Classic fix |
|---|---|---|
| Negative (pollution) | Overproduction | Pigouvian tax = $MEC$ |
| Positive (education) | Underproduction | Subsidy = $MEB$ |
| Either, with clear property rights | Bargaining possible | Coase: parties negotiate |

> **Common pitfall:** Setting the Pigouvian tax to eliminate the externality entirely. The efficient tax equals marginal external cost _at the optimum_ — some pollution is efficient when abating it costs more than the harm it does. The goal is the right quantity, not zero.

> **Practice preview** — try all 12 questions interactively on [Tryals](https://tryals.app/courses/business-i)

**1.** *(Interactive scene)* A factory produces widgets at $MPC = 10$ but imposes pollution damage $MEC = 5$ per widget. The socially optimal tax is $t = MEC = 5$. **Drag the Pigouvian tax marker** to the correct level.

**2.** *(Matching)* Match each concept to its definition.

**3.** *(True false)* A Pigouvian tax on pollution is set equal to the marginal external cost at the socially optimal quantity.
   - True / False


---

*Part of [Business I](README.md) — [Open University Courses by Tryals](../../README.md)*
