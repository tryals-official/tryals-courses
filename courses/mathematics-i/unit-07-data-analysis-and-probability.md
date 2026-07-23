# Unit 7: Data Analysis and Probability

## Descriptive Statistics

**Descriptive statistics** condense a dataset into a few informative numbers, separating the essential shape of the data from its raw bulk. Two questions matter most: where is the **centre**, and how much **spread** is there?

Measures of **centre** (central tendency):
- **Mean** — the arithmetic average, $\bar{x} = \frac{1}{n}\sum x_i$. Sensitive to every value, including outliers.
- **Median** — the middle value when the data are sorted. Robust: a few extreme values barely move it.
- **Mode** — the most frequent value. The only one usable for purely categorical data.

Measures of **spread** (dispersion):
- **Range** — largest minus smallest; crude and outlier-sensitive.
- **Variance** $\sigma^2 = \frac{1}{n}\sum (x_i - \bar{x})^2$ — the average squared deviation from the mean.
- **Standard deviation** $\sigma = \sqrt{\sigma^2}$ — the square root of the variance, in the _same units_ as the data, so it is the interpretable measure of typical deviation.

The **mean-versus-median** distinction is the practical heart of this lesson. For a symmetric dataset they roughly coincide, but for a **skewed** dataset they diverge: the mean is pulled toward the long tail while the median stays central. A few billionaires make _mean_ income far exceed _median_ income; the median better represents a "typical" value when data are skewed or have outliers. Choosing the right summary depends on the data's shape.

> **Common pitfall:** using the **mean** as "the typical value" when data are **skewed or contain outliers**. The mean is pulled toward extreme values, so for a long-tailed distribution it can misrepresent the centre — the **median** is more robust and usually more representative. (Likewise, report the **standard deviation**, not the raw variance, when you want spread in the data's own units.)

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Compute the mean of the dataset 2, 4, 4, 5, 10.

**2.** *(Numerical input)* Compute the variance of the dataset 2, 4, 4, 5, 10, using the average of the squared deviations from the mean.

**3.** *(Ordering)* Order the steps for computing the standard deviation of a dataset.

---

## Data Visualisation

A well-chosen graph reveals patterns that a table of numbers hides. **Data visualisation** matches the _type_ of data to the _right_ display, so structure — shape, trend, relationship, outliers — becomes visible at a glance.

The core chart types and their purposes:
- **Histogram** — the **distribution** of a single numerical variable, grouping values into bins whose bar heights show frequency. It reveals shape (symmetric, skewed), spread, and outliers.
- **Bar chart** — compares a numerical value across **categories** (distinct, unordered groups). Bars have gaps, unlike a histogram's touching bins.
- **Scatter plot** — the **relationship between two numerical variables**, each point a data pair. It exposes correlation, clusters, and outliers in two dimensions.
- **Line chart** — a value over an ordered sequence, usually **time** (a trend).
- **Box plot** — a compact summary of a distribution via its five-number summary (min, quartiles, max), excellent for **comparing groups** and spotting outliers.

The crucial distinction is **histogram versus bar chart**, which look similar but display different data. A histogram bins a _continuous numerical_ variable — the horizontal axis is a number line, and bars _touch_ because the bins are adjacent intervals. A bar chart compares _categorical_ groups — the horizontal axis has distinct labels, and bars have _gaps_ because the categories are separate. Using one where the other belongs misrepresents the data.

Good visualisation also means honest design: a truthful axis (usually starting at zero for bar heights), no distorting 3D effects, and a scale that neither exaggerates nor flattens the real differences. A misleading chart can distort the same data as badly as a wrong number.

> **Common pitfall:** confusing a **histogram** with a **bar chart**. A histogram shows the **distribution of a numerical variable** (binned, bars touching, axis is a number line); a bar chart **compares categories** (distinct labels, bars separated by gaps). They look alike but answer different questions — using a bar chart for continuous data, or a histogram for categories, misrepresents what the data actually shows.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Matrix grid)* Choose the right display for each task.

**2.** *(Numerical input)* A box plot shows a box running from 12 to 28, with the median line at 20. Compute the interquartile range.

**3.** *(Error highlight)* A student explains chart choice. Highlight the one incorrect sentence.

---

## Introduction to Probability

**Probability** measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). It is the mathematics of uncertainty, underlying statistics, physics, finance, and machine learning.

The setup:
- The **sample space** $S$ is the set of all possible outcomes of an experiment (for a die, $\{1, 2, 3, 4, 5, 6\}$).
- An **event** is a subset of the sample space (e.g. "even," $\{2, 4, 6\}$).
- The **probability** $P(E)$ is a number in $[0, 1]$ assigned to each event.

For **equally likely** outcomes, probability is a ratio of counts:
$$P(E) = \frac{\text{number of favorable outcomes}}{\text{total number of outcomes}}.$$
So $P(\text{even}) = \frac{3}{6} = \frac{1}{2}$ for a fair die. This connects probability directly to the counting techniques of combinatorics.

Probability obeys three **axioms** (Kolmogorov's):
1. $P(E) \ge 0$ for every event.
2. $P(S) = 1$ — some outcome certainly occurs.
3. For **mutually exclusive** events (disjoint, cannot both happen), probabilities **add**: $P(A \cup B) = P(A) + P(B)$.

From these follow all the rules, including the **complement rule**: $P(\text{not } E) = 1 - P(E)$ — often the easiest route ("at least one" problems are usually solved via "none"). For events that _can_ overlap, the general **addition rule** subtracts the double-counted intersection: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ — the same inclusion-exclusion seen with sets.

> **Common pitfall:** adding probabilities as $P(A) + P(B)$ when the events **can overlap**. Simple addition is valid only for **mutually exclusive** events. If $A$ and $B$ can both occur, you must subtract the overlap: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, or you double-count the shared outcomes and can even exceed 1.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Two fair dice are rolled. How many of the 36 equally likely outcomes give a total of 7?

**2.** *(Numerical input)* Events A and B satisfy P(A) = 0.5, P(B) = 0.4 and P(A and B) = 0.2. Compute P(A or B).

**3.** *(Formula builder)* Build the general addition rule for P(A or B).

---

## Conditional Probability and Independence

New information changes probabilities. The **conditional probability** of $A$ given $B$ — the probability that $A$ occurs _knowing_ that $B$ has occurred — is
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \qquad P(B) > 0.$$
Conditioning on $B$ **restricts the sample space** to the outcomes where $B$ holds, and asks what fraction of _those_ also have $A$. This is how evidence updates belief.

Rearranging gives the **multiplication rule**: $P(A \cap B) = P(A \mid B)\,P(B)$ — the probability both occur is the probability of one times the conditional probability of the other.

Two events are **independent** when knowing one occurred does _not_ change the probability of the other: $P(A \mid B) = P(A)$. Equivalently and more symmetrically:
$$P(A \cap B) = P(A)\,P(B).$$
Independent probabilities **multiply**. Successive fair coin flips are independent, so two heads have probability $\frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$.

The crucial distinction is **independent** versus **mutually exclusive** — often confused, yet nearly opposite. Mutually exclusive events _cannot both happen_ ($P(A \cap B) = 0$), so knowing one occurred tells you the other _did not_ — that is a strong _dependence_, not independence. Independent events, by contrast, can both happen and their joint probability is the product. Two events with positive probability cannot be both independent and mutually exclusive.

> **Common pitfall:** confusing **independent** with **mutually exclusive**. Mutually exclusive means the events _cannot co-occur_ ($P(A \cap B) = 0$); independent means one _does not affect_ the other's probability ($P(A \cap B) = P(A)P(B)$). These are nearly opposite: mutually exclusive events are strongly _dependent_ (if one happens, the other cannot), so for events with nonzero probability, the two notions never coincide.

Two overlapping event regions A and B; conditioning greys out everything outside B (accent), leaving the overlap as a fraction of the restricted region — P(A | B).

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Events A and B satisfy P(A and B) = 0.12 and P(B) = 0.3. Compute P(A given B).

**2.** *(Numerical input)* A and B are independent, with P(A) = 0.6 and P(B) = 0.5. Compute P(A and B).

**3.** *(Cloze bank)* Complete the relationship between the two most-confused notions.

---

## Random Variables and Distributions

A **random variable** assigns a _number_ to each outcome of a random experiment — turning "heads or tails" into "number of heads." This lets us do arithmetic and calculus with chance. Random variables come in two kinds:
- **Discrete** — takes countable, separate values (a die roll, a count). Its **probability mass function** gives $P(X = x)$ for each value, and the masses sum to 1.
- **Continuous** — takes any value in a range (a height, a time). Its **probability density function** $f(x)$ gives probabilities via _areas_: $P(a \le X \le b) = \int_a^b f(x)\, dx$, and the total area is 1.

A key subtlety for continuous variables: the probability of any _single exact value_ is **zero** — probability lives in intervals (areas under the density), not at points. This is the integral calculus of Unit 6 applied to chance.

Two numbers summarise a random variable:
- **Expected value** (mean) $E[X]$ — the long-run average, a probability-weighted sum $\sum x\, P(X = x)$ for discrete (or $\int x f(x)\, dx$ for continuous). It is the "centre of mass" of the distribution.
- **Variance** $\operatorname{Var}(X) = E[(X - \mu)^2]$ — the expected squared deviation, measuring spread, with standard deviation its square root.

Expectation is **linear**: $E[aX + b] = a\,E[X] + b$, and $E[X + Y] = E[X] + E[Y]$ for _any_ $X, Y$ (independent or not). Variance is _not_ linear — $\operatorname{Var}(aX) = a^2\operatorname{Var}(X)$, and variances add only for _independent_ variables. Random variables are the bridge from raw probability to statistics and the modelling of real quantities.

> **Common pitfall:** thinking a **continuous** random variable has a positive probability at a **single exact value**. For a continuous distribution, $P(X = c) = 0$ for any specific $c$ — probability is the **area** under the density over an _interval_, and a single point has zero width, hence zero area. Only for **discrete** variables does an individual value carry positive probability.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Table completion)* Let X be the number of heads in two flips of a fair coin. Complete its probability mass function.

**2.** *(Numerical input)* A random variable X has E[X] = 4. Compute E[3X + 2].

**3.** *(Formula builder)* Build the expression for the expected value of a discrete random variable X.

---

## The Normal Distribution

The **normal distribution** (Gaussian) is the most important continuous distribution in all of statistics. Its density is the symmetric, bell-shaped curve, fully determined by two parameters: the **mean** $\mu$ (its centre, where the peak sits) and the **standard deviation** $\sigma$ (its spread — larger $\sigma$ means a wider, flatter bell). It is written $N(\mu, \sigma^2)$.

The normal distribution is ubiquitous because of the **Central Limit Theorem** (next lesson): sums and averages of many independent effects tend toward normality, so measurement errors, heights, and countless natural quantities are approximately normal.

Its symmetric shape gives the memorable **empirical rule (68–95–99.7)** for how data cluster around the mean:
- About **68%** of values lie within **1** standard deviation of the mean ($\mu \pm \sigma$).
- About **95%** lie within **2** standard deviations ($\mu \pm 2\sigma$).
- About **99.7%** lie within **3** standard deviations ($\mu \pm 3\sigma$).

This lets you judge how unusual a value is at a glance: beyond $2\sigma$ is fairly rare, beyond $3\sigma$ very rare.

**Standardisation** converts any normal value to a **z-score**:
$$z = \frac{x - \mu}{\sigma},$$
the number of standard deviations $x$ lies from the mean. This maps any $N(\mu, \sigma^2)$ onto the **standard normal** $N(0, 1)$, so a single table (or function) handles all normal probabilities. A z-score of $+2$ means "two standard deviations above average" — a universal, unit-free way to compare values across different normal distributions.

> **Common pitfall:** confusing the **z-score** with a raw value or a probability. A z-score is the number of **standard deviations from the mean** ($z = \frac{x - \mu}{\sigma}$), not the value itself and not a probability. To get a probability you convert the z-score through the standard normal (table or function). Reading $z = 2$ as "probability 2" (impossible) or as the raw data value mistakes what standardisation produces.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* Exam scores are normally distributed with mean 70 and standard deviation 8. Compute the z-score of a score of 86.

**2.** *(Table completion)* Complete the empirical rule table for a normal distribution.

**3.** *(Cloze bank)* Complete the effect of the parameters on the shape of the curve.

---

## Sampling and the Central Limit Theorem

Statistics uses a **sample** — a subset of data actually collected — to infer properties of a **population** — the whole group of interest. A population characteristic (like the true mean $\mu$) is a **parameter**; the corresponding sample quantity (like $\bar{x}$) is a **statistic** that _estimates_ it. The gap between them is what statistical inference must bridge.

For the sample to represent the population, it should be a **random sample** — every member equally likely to be chosen — avoiding **bias** (systematic error from non-random selection, like polling only one neighbourhood). No amount of clever analysis fixes a biased sample; representativeness comes first.

Because a sample is random, a statistic like $\bar{x}$ is itself a **random variable** that varies from sample to sample. Its distribution — the **sampling distribution** — describes how the estimate fluctuates. Two facts about the sample mean's sampling distribution:
- Its **centre** equals the population mean $\mu$ (the sample mean is _unbiased_).
- Its **spread** is $\frac{\sigma}{\sqrt{n}}$ (the **standard error**): larger samples give more precise estimates, but only as $\sqrt{n}$, so quartering the error needs four times the data.

The crowning result is the **Central Limit Theorem (CLT)**: for a large enough sample, the sampling distribution of the mean is **approximately normal**, _regardless of the population's own shape_. Averages of many independent draws become bell-shaped even when the underlying data are skewed. This is why the normal distribution is everywhere, and why we can attach confidence intervals and tests to sample means.

> **Common pitfall:** thinking the Central Limit Theorem says the **raw data** become normal, or that larger samples make the population itself normal. The CLT is about the **sampling distribution of the mean** — the _averages_ become approximately normal as $n$ grows, even if the individual data are skewed. The population's shape does not change; it is the distribution of the _statistic_ (the mean), not the data, that turns normal.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A population has standard deviation 20. A random sample of size 100 is drawn. Compute the standard error of the sample mean.

**2.** *(Category sort)* Sort each quantity by whether it describes the population or the sample.

**3.** *(Error highlight)* A student explains the Central Limit Theorem. Highlight the one incorrect sentence.

---

## Confidence Intervals and Estimation

A single number from a sample (a **point estimate** like $\bar{x}$) almost never equals the true parameter exactly. A **confidence interval** does better: it gives a _range_ of plausible values together with a stated **confidence level**, honestly conveying the uncertainty of the estimate.

A confidence interval for the mean has the form
$$\bar{x} \pm (\text{critical value}) \times \text{standard error},$$
i.e. the point estimate plus or minus a **margin of error**. The margin combines a **critical value** (from the normal or t distribution, set by the confidence level — about $1.96$ for 95%) with the **standard error** $\frac{\sigma}{\sqrt{n}}$. A common 95% interval is roughly $\bar{x} \pm 2\,\text{SE}$.

Two levers control the interval's width:
- **Higher confidence** (99% vs 95%) uses a larger critical value, giving a **wider** interval — more certainty of capture requires a bigger net.
- **Larger sample size** $n$ shrinks the standard error, giving a **narrower** interval — more data means more precision.

The **interpretation** of "95% confidence" is subtle and the source of the most common error. It does _not_ mean "there is a 95% probability the true parameter lies in _this_ particular interval" — the true parameter is fixed, and this interval either contains it or not. Rather, the confidence level describes the **procedure**: if you repeated the sampling many times, about 95% of the intervals constructed this way would contain the true parameter. Confidence is a property of the _method_, not of any single interval.

> **Common pitfall:** interpreting a 95% confidence interval as "**95% probability the true value is in this interval**." The parameter is fixed and the interval is what varies across samples — so a computed interval either does or does not contain the truth. The 95% refers to the **long-run success rate of the procedure**: about 95% of such intervals capture the parameter. It is a statement about the method, not a probability about one specific interval.

A vertical stack of accent confidence intervals from repeated samples around a fixed true-value line, about 95% of them crossing the line and a few missing — confidence as a property of the procedure.

$$\bar{x} \pm z \cdot \frac{\sigma}{\sqrt{n}}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A sample of size 25 from a population with standard deviation 10 has sample mean 50. Using the approximate 95% interval of the sample mean plus or minus 2 standard errors, find the upper endpoint.

**2.** *(Number line placement)* A sample has mean 20 and standard error 1.5. The 95% interval is taken as the mean plus or minus 2 standard errors. **Place one marker on each endpoint of the interval.

**3.** *(Formula builder)* Build the general form of a confidence interval for a mean.

---

## Hypothesis Testing

**Hypothesis testing** is a formal procedure for deciding whether data provide enough evidence to support a claim. It frames the question as a contest between two hypotheses:
- The **null hypothesis** $H_0$ — the default, "no effect / no difference" claim (e.g. "the coin is fair").
- The **alternative hypothesis** $H_1$ — the claim you are gathering evidence for (e.g. "the coin is biased").

The logic is like a courtroom: $H_0$ is _presumed true_ until the evidence is strong enough to reject it. You compute a **test statistic** from the data, then the **p-value** — the probability of observing data _at least as extreme_ as yours **if $H_0$ were true**. A **small p-value** means the data would be very surprising under $H_0$, so you **reject $H_0$** in favour of $H_1$; a large p-value means the data are consistent with $H_0$, so you **fail to reject** it. The threshold is the **significance level** $\alpha$ (commonly 0.05): reject when $p < \alpha$.

Because the decision is based on chance data, two errors are possible:
- **Type I error** — rejecting a _true_ $H_0$ (a false positive). Its probability is $\alpha$.
- **Type II error** — failing to reject a _false_ $H_0$ (a false negative).

There is a trade-off: lowering $\alpha$ reduces false positives but raises false negatives.

A critical interpretive point: "fail to reject $H_0$" is **not** "prove $H_0$ true." Absence of strong evidence against the null is not evidence _for_ it — the test may simply lack power (too little data). And the p-value is _not_ the probability that $H_0$ is true; it is the probability of the _data_ given $H_0$.

> **Common pitfall:** reading a **p-value** as "the probability that $H_0$ is true," or treating "**fail to reject $H_0$**" as "$H_0$ is proven true." The p-value is the probability of data at least as extreme as observed **assuming $H_0$ holds** — a statement about the data, not about the hypothesis. And failing to reject means only that the evidence was insufficient, not that the null is established; you never _prove_ the null.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Matrix grid)* Assign each claim to the hypothesis it belongs to.

**2.** *(Table completion)* Complete the decision column for each test.

**3.** *(Ordering)* Order the steps of a hypothesis test.

---

## Correlation and Regression

When two numerical variables are measured together, we want to know how they **relate**. Two tools answer this.

**Correlation** measures the strength and direction of a _linear_ relationship with a single number, the correlation coefficient $r$, which always lies in $[-1, 1]$:
- $r$ near $+1$ — strong **positive** linear relationship (both rise together).
- $r$ near $-1$ — strong **negative** linear relationship (one rises as the other falls).
- $r$ near $0$ — no _linear_ relationship (though a nonlinear one may still exist).

Correlation only detects _linear_ association; a perfect parabola can have $r = 0$ despite a clear relationship.

**Linear regression** goes further: it fits the **line of best fit** $\hat{y} = mx + b$ through the data, chosen by **least squares** — minimising the sum of squared vertical distances (residuals) from the points to the line. The line lets you _predict_ $y$ from $x$ and interpret the slope as "the average change in $y$ per unit change in $x$." Regression and correlation are linked: $r$ measures how tightly the points cluster around that best-fit line.

The single most important caution in all of statistics: **correlation does not imply causation.** A strong $r$ means the variables _move together_, not that one _causes_ the other. The association could run the other way, or arise from a **confounding variable** driving both (ice-cream sales and drownings correlate — both are driven by hot weather, not by each other). Establishing causation requires controlled experiments or careful causal reasoning, never correlation alone.

> **Common pitfall:** concluding that because two variables are **correlated**, one **causes** the other. Correlation measures only that they move together; a **confounding variable** may drive both, or the causal direction may be reversed, or the link may be coincidence. "Correlation does not imply causation" — causal claims require experiments or explicit causal reasoning, not a high $r$ alone.

A scatter plot with the accent least-squares line minimising the vertical residual segments from each point, the tightness of clustering illustrating the correlation strength.

$$-1 \le r \le 1,\quad \hat{y} = mx + b$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app)

**1.** *(Numerical input)* A regression line has equation y = 3x + 5. Predict the value of y when x = 4.

**2.** *(Number line placement)* A set of points lies exactly on the line y = -2x + 7. **Place the marker on the correlation coefficient r for this data.

**3.** *(Formula builder)* Build the equation of the least squares line of best fit.

---

*Part of [Mathematics I](README.md) — [Open University Courses by Tryals](../../README.md)*
