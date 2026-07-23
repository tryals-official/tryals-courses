# Unit 8: Statistics

## Descriptive Statistics

**Descriptive statistics** summarize and organize a data set without drawing broader inferential conclusions beyond it. Two families of measures do most of the work. **Measures of central tendency** describe a data set's typical or center value: the **mean** (the arithmetic average, sum divided by count) is the most commonly used, but is sensitive to extreme outliers; the **median** (the middle value when data is ordered) is more robust to outliers and skewed data; the **mode** (the most frequent value) is the only measure of central tendency that works for purely categorical (non-numeric) data.

| Measure | Definition | Best used when... |
|---|---|---|
| Mean | Sum divided by count | Data is roughly symmetric, no extreme outliers |
| Median | Middle value when ordered | Data is skewed or has outliers |
| Mode | Most frequent value | Data is categorical, or multiple peaks matter |

**Measures of variability** describe how spread out a data set is around its center. The **range** (highest value minus lowest) is simple but sensitive to just two extreme points. **Variance** measures the average squared distance of each point from the mean, and the **standard deviation (SD)** — the square root of variance — expresses that spread back in the data's original units, making it far more interpretable than variance alone:

$$SD = \sqrt{\text{variance}}$$

A small standard deviation means data points cluster tightly around the mean; a large standard deviation means they are spread widely.

| Measure | What it captures |
|---|---|
| Range | Total spread, highest minus lowest |
| Variance | Average squared distance from the mean |
| Standard deviation | Variance's square root, in original units |

> **Common pitfall:** always defaulting to the mean without checking for outliers or skew first. A single extreme value (like one billionaire's income in a small sample) can drag the mean far from what most people would consider "typical" — the median is far more robust in exactly this situation.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Numerical input)* Seven employees' annual salaries, in thousands, are 32, 35, 38, 40, 42, 45, and 220. Find the MEDIAN salary (in thousands).

**2.** *(Matrix grid)* For each situation, which measure of central tendency best represents the 'typical' value? Classify each row.

**3.** *(Cloze bank)* Choose the more representative summary and the reason.

---

## The Normal Curve and Z-Scores

The **normal distribution** — the familiar symmetric "bell curve" — is one of the most important patterns in statistics: unimodal (one peak), perfectly symmetric, with its mean, median, and mode all equal and located at the exact center. Many naturally occurring psychological and biological variables (height, measurement error, IQ scores) approximate this shape closely enough to make the normal distribution's mathematical properties extremely useful.

The **empirical rule** (sometimes called the 68-95-99.7 rule) describes how data is distributed around the mean in a normal distribution:

| Range | Approximate share of data |
|---|---|
| Mean ± 1 SD | About 68% |
| Mean ± 2 SD | About 95% |
| Mean ± 3 SD | About 99.7% |

To compare a specific score to this distribution, researchers compute a **z-score**: how many standard deviations a raw score sits above or below the mean.

$$z = \frac{x - \mu}{\sigma}$$

A z-score of 0 sits exactly at the mean; a positive z-score sits above the mean, a negative one below. Because z-scores are standardized (always in units of standard deviations), they allow direct comparison of scores from entirely DIFFERENT scales — comparing a person's height percentile to their test-score percentile, for instance, becomes possible only once both are converted to the same z-score scale.

> **Common pitfall:** treating a z-score as though it directly gives a percentile. A z-score tells you HOW FAR a score sits from the mean, in standard deviation units — converting that distance into an exact percentile requires consulting the normal distribution's known area-under-the-curve properties (e.g. the empirical rule, or a full standard normal table), not just reading the z-score number itself.

A bell curve: a bare symmetric curve; the ±1 SD band shades in with "68%"; the ±2 SD band shades in wider with "95%", and a single raw-score marker drops onto the curve with its z-score value labeled beside it.

$$z = \frac{x - \mu}{\sigma}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Numerical input)* On an exam with mean 70 and standard deviation 5, a student scores 85. Compute the z-score.

**2.** *(Ordering)* Order the steps to standardize a raw score and turn it into a percentile.

**3.** *(Matrix grid)* Classify each score by where it sits relative to the mean of its distribution.

---

## Hypothesis Testing and P-Values

Building on the logic of null-hypothesis testing introduced earlier in this course, this lesson looks at the statistical MACHINERY behind a p-value. A **test statistic** (such as a t-statistic or z-statistic) converts the observed data into a single standardized number measuring how far the result sits from what the null hypothesis predicts. That test statistic is then compared to a **critical value**: the threshold the test statistic must exceed for the result to be declared statistically significant at the chosen alpha level.

Tests can be **one-tailed** or **two-tailed**, depending on the hypothesis being tested. A one-tailed test predicts an effect in ONE specific direction only (e.g. "the new therapy will reduce anxiety," not simply "change" it) and places the entire rejection region in one tail of the distribution. A two-tailed test allows for an effect in EITHER direction (e.g. "the new therapy will change anxiety, somehow") and splits the rejection region between both tails — making a two-tailed test more conservative, since it requires a more extreme result in the ONE relevant direction to reach the same overall significance level.

| Test type | Predicts | Rejection region |
|---|---|---|
| One-tailed | An effect in one specific direction | Entirely in one tail |
| Two-tailed | An effect in either direction | Split between both tails |

An increasingly favored companion (and, some argue, alternative) to the p-value is the **confidence interval (CI)**: a range of plausible values for the true population effect, computed from the sample data. A 95% confidence interval means that if the same study were repeated many times, about 95% of the resulting intervals would contain the true population value. Confidence intervals convey not just WHETHER an effect is statistically significant, but a sense of its plausible SIZE and precision — information a bare p-value discards entirely.

> **Common pitfall:** interpreting a 95% confidence interval as meaning "there is a 95% probability the true value falls within THIS SPECIFIC interval." The more precise interpretation is about the LONG-RUN PROCESS: if the study were repeated many times, about 95% of the resulting intervals (which would differ from sample to sample) would capture the true value — a subtle but real distinction from a probability statement about this one particular interval.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Truth table)* A Type I error occurs when a researcher rejects the null hypothesis (R) AND the null is actually true (T). Fill the output column for 'Type I error = R AND T'.

**2.** *(Numerical input)* Alpha is set at 0.05. Of these five study p-values, how many are statistically significant: 0.04, 0.06, 0.01, 0.20, 0.049?

**3.** *(Cloze bank)* Complete the comparison of test types.

---

## Statistical Tests and Correlation

The **Pearson correlation coefficient (r)** quantifies the strength and direction of a LINEAR relationship between two continuous variables, ranging from $-1$ (a perfect negative relationship) through $0$ (no linear relationship) to $+1$ (a perfect positive relationship). The closer $|r|$ is to 1, the stronger the linear relationship; a scatterplot is the natural visual companion, since $r$ only captures LINEAR patterns and can badly understate a strong but curved (non-linear) relationship.

Beyond correlation, different research questions call for different statistical tests, chosen mainly by how many groups are being compared and what kind of data is involved:

| Test | Used for |
|---|---|
| Pearson correlation (r) | Strength/direction of a linear relationship between two continuous variables |
| T-test | Comparing the means of exactly TWO groups |
| ANOVA (Analysis of Variance) | Comparing the means of THREE OR MORE groups |
| Chi-square test | Testing relationships between CATEGORICAL variables (frequencies/counts) |

A key reason **ANOVA** exists, rather than just running many separate t-tests across multiple group pairs, is that each additional t-test inflates the overall chance of a **Type I error** (a false positive) somewhere across the whole set of comparisons — ANOVA tests all groups together in one single analysis, controlling this inflated error rate, and (if significant) is typically followed by more targeted "post-hoc" tests to pinpoint exactly which specific groups differ.

> **Common pitfall:** running many separate t-tests across multiple group pairs instead of one ANOVA, assuming this is equivalent and error-free. Each additional t-test compounds the overall Type I error rate across the full set of comparisons — which is exactly the statistical problem ANOVA is designed to solve.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Matrix grid)* For each research question, choose the appropriate statistical tool.

**2.** *(Numerical input)* A researcher compares 4 groups by running a separate t-test for every possible PAIR of groups. How many separate t-tests is that?

**3.** *(Number line placement)* Two variables show a strong but not perfect tendency: as one rises, the other falls. **Place the marker at the most plausible Pearson r for this relationship.

---

## Data Visualization

Different data situations call for different visualizations, and choosing the wrong one can obscure or actively mislead. A **histogram** shows the distribution of a single CONTINUOUS variable, grouping values into bins to reveal its overall shape (normal, skewed, bimodal). A **bar chart** compares values across distinct CATEGORIES (with gaps between bars, unlike a histogram's touching bars, signaling that the categories are not continuous). A **scatterplot** shows the relationship between two CONTINUOUS variables, one point per case, revealing patterns a correlation coefficient alone can only summarize numerically. A **box plot** (or box-and-whisker plot) visually summarizes a data set's five-number summary (minimum, first quartile, median, third quartile, maximum) at a glance, making outliers easy to spot. A **line graph** shows how a variable changes over ordered, typically time-based, intervals.

| Chart | Best for |
|---|---|
| Histogram | Distribution shape of one continuous variable |
| Bar chart | Comparing values across categories |
| Scatterplot | Relationship between two continuous variables |
| Box plot | Five-number summary and outliers at a glance |
| Line graph | Trends over time |

Visualizations can also actively MISLEAD, even using accurate underlying data. A **truncated y-axis** (starting at a value other than zero) can make a small difference look dramatic. Inconsistent scaling, cherry-picked time windows, and 3D effects that distort area/volume perception are further common tricks (intentional or not) that visually exaggerate a pattern beyond what the actual numbers support.

> **Common pitfall:** using a bar chart (with a truncated y-axis) to compare two very similar values, making a genuinely small difference look enormous. Always check where a chart's axis actually starts — a bar chart's height comparisons are only honestly interpretable when the axis begins at zero.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Matrix grid)* For each data situation, choose the most appropriate chart.

**2.** *(Cloze bank)* Choose the right chart for the goal.

**3.** *(Table completion)* For each visualization goal, name the best chart.

---

## Data Distributions and Skewness

Not all data distributions are symmetric like the normal curve. **Skewness** describes the direction and degree of asymmetry in a distribution. In a **positively (right) skewed** distribution, most values cluster at the lower end with a long tail stretching toward higher values — household income is a classic real-world example, since a small number of very high earners stretch the tail rightward. In a **negatively (left) skewed** distribution, most values cluster at the higher end with a long tail stretching toward lower values — age at retirement in a population with mandatory retirement policies can show this pattern, with a long tail of early retirees.

Skew directly affects the relationship between the mean and median: in a positively skewed distribution, the **mean is pulled toward the tail**, so mean > median; in a negatively skewed distribution, the mean is pulled the other way, so mean < median. In a perfectly symmetric distribution, mean = median.

| Skew direction | Tail points | Mean vs. median |
|---|---|---|
| Positive (right) skew | Toward higher values | Mean > median |
| Negative (left) skew | Toward lower values | Mean < median |
| No skew (symmetric) | No tail | Mean = median |

This is precisely why the choice of central tendency measure, discussed earlier in this course, matters so much: for skewed data, the median better represents the "typical" case, since the mean gets dragged toward the direction of the long tail by relatively few extreme values. **Kurtosis** is a related, less commonly discussed property describing how sharply PEAKED or flat a distribution is, independent of its skew.

> **Common pitfall:** confusing which direction of skew is named for the TAIL versus the BULK of the data. Skew is always named for where the TAIL points, not where most of the data sits — a positively (right) skewed distribution has most of its data on the LEFT (lower) side, with the defining long tail stretching to the right.

Three small histograms: a right-skewed shape with mean-marker right of median-marker; a symmetric bell with both markers overlapping.

$$\text{Positive skew: mean} > \text{median}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Matrix grid)* Classify each distribution by its skew.

**2.** *(Error highlight)* A student explains skewness. Highlight the one incorrect statement.

**3.** *(Table completion)* Complete the skewness summary table.

---

## Sampling and Representativeness

Building on the sampling TECHNIQUES covered earlier in this course, this lesson looks at the underlying STATISTICAL THEORY explaining why sample means behave so predictably. If you drew many different random samples from the same population and computed each sample's mean, those sample means would themselves form a distribution — called the **sampling distribution of the mean**. Even if the original population's distribution is skewed or oddly shaped, the **Central Limit Theorem** guarantees that this sampling distribution of the mean approaches a NORMAL distribution as sample size grows large enough (conventionally, around $n \geq 30$ is often used as a rough rule of thumb) — a remarkable and extremely useful result, since it lets researchers apply normal-distribution-based statistics even when the underlying population itself is not normally distributed.

The spread of this sampling distribution is captured by the **standard error (SE)**: how much sample means are expected to vary from the true population mean, purely due to random sampling variation.

$$SE = \frac{\sigma}{\sqrt{n}}$$

Standard error shrinks as sample size ($n$) grows — larger samples produce more precise, less variable estimates of the population mean, which is exactly why confidence intervals (covered earlier in this course) narrow as sample size increases.

| Concept | Meaning |
|---|---|
| Sampling distribution of the mean | The distribution of means from many repeated samples |
| Central Limit Theorem | This distribution approaches normal as n grows, regardless of population shape |
| Standard error | The spread of the sampling distribution; shrinks as n grows |

> **Common pitfall:** confusing standard deviation (SD) with standard error (SE). Standard deviation describes the spread of INDIVIDUAL data points around the mean; standard error describes the spread of SAMPLE MEANS around the true population mean across many hypothetical samples — a related but distinct concept, and SE is always smaller than SD for the same data (since it shrinks further as sample size grows).

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Numerical input)* A population has standard deviation (sigma) = 20. A researcher draws a sample of n = 100. Compute the standard error of the mean.

**2.** *(Formula builder)* Assemble the formula for the standard error of the mean, left to right.

**3.** *(Category sort)* Sort each description under standard deviation or standard error.

---

## Power and Effect Size

**Statistical power**, introduced earlier in this course, is a study's probability of correctly detecting a true effect when one genuinely exists (formally, $1 - \beta$, where beta is the Type II error rate). Power depends on four main factors: a larger **sample size** raises power; a larger **effect size** (a bigger true difference) raises power, since bigger effects are easier to detect; a larger **alpha level** (a more lenient significance threshold) raises power, at the cost of a higher Type I error rate; and lower **variability** in the data raises power, since less "noise" makes a true signal easier to detect.

| Factor | Effect on power |
|---|---|
| Larger sample size | Increases power |
| Larger effect size | Increases power |
| More lenient alpha | Increases power (but raises Type I error risk) |
| Lower data variability | Increases power |

**Effect size** measures the MAGNITUDE of a difference or relationship, independent of sample size — a crucial complement to the p-value, since a p-value alone conflates "how big" with "how much data." **Cohen's d** is a widely used standardized effect size for comparing two group means, expressing the difference in standard deviation units:

$$d = \frac{M_1 - M_2}{SD}$$

Jacob Cohen proposed rough conventions for interpreting d: **small** (around 0.2), **medium** (around 0.5), and **large** (around 0.8) — though these are general guidelines, not rigid cutoffs, and what counts as a practically meaningful effect size can vary considerably by research area.

> **Common pitfall:** treating statistical significance (a small p-value) as automatically meaning a LARGE, practically important effect. With a big enough sample size, even a tiny, practically trivial effect size can reach statistical significance — which is exactly why researchers report effect size ALONGSIDE significance, not instead of it.

Two overlapping bell curves: two curves heavily overlapping (small d); they separate further apart (medium d), overlap visibly shrinking; they separate to barely touch (large d).

$$d = \frac{M_1 - M_2}{SD}$$

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Numerical input)* Group 1 has a mean of 80, Group 2 a mean of 74, and the pooled standard deviation is 8. Compute Cohen's d.

**2.** *(Error highlight)* A student explains power and effect size. Highlight the one incorrect statement.

**3.** *(Number line placement)* Two groups' means differ by 2, and the pooled standard deviation is 8. **Place the marker on Cohen's d for this comparison.

---

## Qualitative Data Analysis

Analyzing qualitative data — interview transcripts, open-ended responses, field notes — requires systematic methods of its own, distinct from statistical analysis of numbers. **Thematic analysis**, one of the most widely used approaches (formalized by Virginia Braun and Victoria Clarke), typically proceeds through a structured sequence: familiarizing oneself with the data, generating initial **codes** (labels marking meaningful segments of text), searching for broader **themes** among those codes, reviewing and refining candidate themes, clearly defining and naming each final theme, and writing up the analysis with illustrative quotes.

**Coding** itself can proceed in different ways: **open coding** applies labels to the data with minimal preconceived categories, staying close to what is actually present, while **axial coding** (used especially in grounded theory) looks for relationships and connections BETWEEN the codes generated during open coding, building toward a more integrated structure.

| Stage/Concept | What it involves |
|---|---|
| Open coding | Labeling data with minimal preconceived categories |
| Axial coding | Finding relationships between codes |
| Theme | A broader pattern uniting related codes |

**Grounded theory** (Barney Glaser and Anselm Strauss) is a distinctive qualitative approach in which theory is built INDUCTIVELY, emerging FROM the data through this coding process, rather than being formulated in advance and then tested against the data (the more typical, DEDUCTIVE approach in much quantitative research). This makes grounded theory especially well suited to genuinely novel or under-studied phenomena, where an existing theoretical framework may not yet exist to test.

Just as in quantitative research, qualitative analysis benefits from checking **inter-rater reliability**: having multiple independent researchers code the same material and comparing their codes for agreement, which helps guard against one researcher's idiosyncratic interpretation dominating the analysis.

> **Common pitfall:** assuming qualitative coding is a purely subjective, "anything goes" free-for-all with no rigor at all. Systematic procedures (explicit coding schemes, checking inter-rater reliability, actively searching for evidence that contradicts an emerging theme) are exactly what distinguish careful qualitative analysis from casual, unsystematic impression.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Ordering)* Put the stages of thematic analysis (Braun and Clarke) in order.

**2.** *(Error highlight)* A student explains qualitative analysis. Highlight the one incorrect statement.

**3.** *(Matrix grid)* Classify each research approach as inductive or deductive.

---

## Advanced Methodologies

When many individual studies address the same question, two related methods help synthesize the evidence. A **systematic review** comprehensively and methodically identifies, evaluates, and summarizes ALL available research on a specific question, following an explicit, pre-specified search and inclusion process (to avoid cherry-picking only supportive studies). A **meta-analysis** goes a step further, STATISTICALLY combining the numerical results (typically effect sizes) from many individual studies into one overall, more precise estimate — a study of studies, effectively pooling many smaller samples into a much larger combined one, increasing statistical power well beyond what any single original study achieved alone.

| Method | What it does |
|---|---|
| Systematic review | Comprehensively identifies and summarizes existing research |
| Meta-analysis | Statistically combines numerical results across studies into one estimate |

Developmental psychologists (and psychologists generally) also choose between two contrasting designs for studying change over time. A **longitudinal design** follows the SAME group of individuals over an extended period, directly tracking real change within each person — but it is time-consuming, expensive, and vulnerable to participant dropout ("attrition") over the years. A **cross-sectional design** instead compares DIFFERENT age groups all measured at a single point in time — much faster and cheaper, but vulnerable to **cohort effects**: apparent "age differences" that are actually generational differences in life experience, unrelated to aging itself (comparing today's 20-year-olds to today's 70-year-olds conflates true age effects with the very different historical contexts each group grew up in).

| Design | Tracks | Key strength | Key weakness |
|---|---|---|---|
| Longitudinal | Same people, over time | Directly measures real change | Slow, costly, attrition |
| Cross-sectional | Different age groups, one time point | Fast, cheap | Confounded by cohort effects |

> **Common pitfall:** treating a cross-sectional age difference as automatically proving something changes WITH AGE. Because different age groups in a cross-sectional study also grew up in different historical eras, an observed "age difference" could just as easily be a cohort effect — a longitudinal design, tracking the same people over time, is needed to cleanly separate true aging effects from cohort effects.

> **Practice preview** — try all 11 questions interactively on [Tryals](https://tryals.app/courses/psychology-i)

**1.** *(Matrix grid)* Classify each described method or design.

**2.** *(Error highlight)* A student explains evidence synthesis and study designs. Highlight the one incorrect statement.

**3.** *(Matching)* Match each concrete research goal to the method it calls for.

---

*Part of [Psychology I](README.md) — [Open University Courses by Tryals](../../README.md)*
