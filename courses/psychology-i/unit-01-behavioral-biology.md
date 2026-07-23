# Unit 1: Behavioral Biology

**[Study this unit interactively on Tryals →](https://tryals.app/courses/psychology-i)**

## Resting Potential

Every neuron holds a static electrical charge across its membrane even when it is transmitting nothing at all. This baseline, the **resting potential**, sits at about $-70$ millivolts (the inside of the cell negative relative to the outside) and is not a passive accident — it is an actively maintained state that gives the neuron the "loaded spring" it needs to fire.

Two forces set the resting value. First, **ion gradients**: sodium (Na+) and chloride (Cl-) are far more concentrated outside the cell, while potassium (K+) and large organic anions are far more concentrated inside. Second, **selective permeability**: the resting membrane leaks K+ far more easily than it leaks Na+, so the membrane potential settles close to the equilibrium potential for K+ rather than halfway between the two ions.

| Ion | Concentration | Resting permeability |
|---|---|---|
| Na+ | High outside | Low |
| K+ | High inside | High |
| Cl- | High outside | Moderate |
| A- (organic anions) | High inside | Impermeant |

Left alone, K+ would keep leaking out and Na+ would keep leaking in until the gradients collapsed. The **sodium-potassium pump** prevents that: using one molecule of ATP per cycle, it exports _three_ Na+ ions for every _two_ K+ ions it imports. Because it moves three positive charges out for only two in, the pump is itself slightly electrogenic — it adds a small extra negativity on top of the diffusion potential.

> **Common pitfall:** treating the resting potential as "the membrane has no charge." It is not neutral — it is a steady $-70$ mV, held there by continuous active transport. Cut off the ATP supply and the resting potential does not vanish instantly, but it decays as the pump stops fighting the leaks.

Membrane cross-section: resting ion gradient shown as dot-density outside (Na+/Cl-) versus inside (K+/A-) the membrane; the Na+/K+ pump animates one cycle, 3 accent dots crossing out and 2 crossing in.

$$V_{rest} \approx -70\text{ mV}$$

**Practice preview:**

**1.** *(Numerical input)* The sodium-potassium pump ejects 3 Na+ and admits 2 K+ per cycle, so each cycle leaves a net of one extra positive charge outside the cell. Purely from this pumping, how many net positive charges are moved out of the cell over 12 complete cycles?

**2.** *(Cloze bank)* Predict the consequence: reason from mechanism to outcome.

**3.** *(Table completion)* Complete the resting-membrane table. Remember: the membrane rests near the equilibrium potential of whichever ion it is MOST permeable to.

---

## Action Potential

If enough excitatory input pushes a neuron's membrane from its $-70$ mV resting potential up to about $-55$ mV, it crosses **threshold** and fires an **action potential** — a rapid, stereotyped voltage spike that travels down the axon. Crucially, the action potential obeys the **all-or-none law**: once threshold is crossed the spike always reaches the same peak (about $+40$ mV), regardless of how much the threshold was exceeded. A stimulus that never reaches threshold produces no action potential at all.

| Phase | What happens |
|---|---|
| Depolarization | Voltage-gated Na+ channels open; Na+ rushes in, driving the membrane toward $+40$ mV |
| Repolarization | Na+ channels inactivate; voltage-gated K+ channels open, and K+ rushes out |
| Hyperpolarization | K+ channels close slowly, so the membrane briefly overshoots below $-70$ mV |
| Return to rest | The Na+/K+ pump and leak channels restore the resting potential |

During the **absolute refractory period** (while Na+ channels are inactivated), no stimulus, however strong, can trigger a second spike — this enforces one-way propagation down the axon. During the following **relative refractory period**, only an unusually strong stimulus can fire a second spike. **Myelin** speeds conduction dramatically: the impulse jumps between unmyelinated gaps called **Nodes of Ranvier** in a process called _saltatory conduction_, reaching up to 120 meters per second in large myelinated axons versus about 1 meter per second in unmyelinated ones.

> **Common pitfall:** thinking a stronger stimulus produces a "bigger" action potential. It does not — intensity is coded by _how often_ a neuron fires (firing rate), not by the size of any single spike, which is fixed once threshold is crossed.

A single accent trace sweeping left to right on a voltage-vs-time axis: flat at rest, rising through threshold, peaking at overshoot, falling through repolarization, dipping through hyperpolarization.

$$V_{rest} \approx -70\text{ mV}, V_{peak} \approx +40\text{ mV}$$

**Practice preview:**

**1.** *(Truth table)* A spike fires only when the membrane reaches threshold (T) AND the neuron is not in its refractory period (R). Fill the output column for 'Fires = T AND NOT R'. (T = threshold reached; R = in refractory period.)

**2.** *(Cloze bank)* Complete the reasoning about the absolute refractory period.

**3.** *(Number line placement)* A summed input depolarizes the membrane to -50 mV, just past the -55 mV threshold. **Place the marker at the PEAK voltage (mV) the resulting action potential reaches.

---

## Synaptic Transmission

Neurons do not physically touch. They communicate across the **synaptic cleft**, a microscopic gap between the presynaptic terminal button and the postsynaptic membrane. When an action potential reaches the terminal button, voltage-gated **calcium (Ca2+) channels** open, and the resulting Ca2+ influx causes **synaptic vesicles** — small sacs packed with neurotransmitter — to fuse with the membrane and spill their contents into the cleft.

Released neurotransmitter diffuses across the cleft and binds **receptors** on the postsynaptic membrane. Two receptor families respond differently: **ionotropic** receptors are ligand-gated ion channels that open immediately for a brief, fast effect; **metabotropic** receptors are G-protein-coupled and trigger slower, longer-lasting second-messenger cascades. Binding can produce an **EPSP** (excitatory postsynaptic potential — depolarizing, e.g. via Na+ influx, moving the neuron toward threshold) or an **IPSP** (inhibitory postsynaptic potential — hyperpolarizing, e.g. via Cl- influx or K+ efflux, moving it away from threshold).

A single EPSP is rarely enough to reach threshold on its own. **Summation** solves this: _temporal summation_ adds up EPSPs from one synapse firing repeatedly in quick succession, while _spatial summation_ adds up EPSPs (and subtracts IPSPs) arriving from many synapses at once. The postsynaptic neuron's decision to fire is really a running tally of excitation minus inhibition at the axon hillock.

Once the signal has been passed on, neurotransmitter must be cleared quickly or the postsynaptic cell would stay switched on. **Reuptake** pumps leftover transmitter back into the presynaptic terminal for recycling, while **enzymatic degradation** (e.g. acetylcholinesterase breaking down acetylcholine) destroys it in the cleft.

> **Common pitfall:** assuming every synaptic signal is excitatory. Roughly as much synaptic traffic is inhibitory (IPSPs) as excitatory (EPSPs) — cognition depends as much on well-timed inhibition as on excitation.

**Practice preview:**

**1.** *(Ordering)* Put the events of chemical synaptic transmission in causal order.

**2.** *(Category sort)* Sort each scenario by the kind of summation it illustrates.

**3.** *(Error highlight)* A student summarizes synaptic transmission. Highlight the one incorrect statement.

---

## Neurotransmitters

Different neurotransmitters specialize in different jobs. **Acetylcholine (ACh)** activates skeletal muscle at the neuromuscular junction and supports memory in the brain; its loss is strongly linked to Alzheimer's disease. **Dopamine** drives reward, motivation, and motor control — too little in the substantia nigra produces the motor symptoms of Parkinson's disease, while dopamine excess is implicated in the positive symptoms of schizophrenia. **Serotonin** regulates mood, sleep, and appetite and is the target of SSRIs (selective serotonin reuptake inhibitors) used to treat depression. **Norepinephrine** promotes arousal and alertness and is central to the fight-or-flight response.

Two neurotransmitters dominate ordinary synaptic traffic by sheer volume: **glutamate**, the brain's main _excitatory_ transmitter and essential for learning and long-term potentiation, and **GABA** (gamma-aminobutyric acid), the main _inhibitory_ transmitter, which dampens neural excitability and is boosted by anti-anxiety drugs like benzodiazepines. **Endorphins** are the brain's own opioid-like painkillers, released during stress or exertion.

| Term | Effect on the receptor | Example |
|---|---|---|
| Agonist | Mimics or enhances the neurotransmitter's effect | Nicotine mimics ACh at its receptors |
| Antagonist | Blocks or reduces the neurotransmitter's effect | Curare blocks ACh receptors, causing paralysis |

An agonist can act _directly_ (binding and activating the receptor itself) or _indirectly_ (increasing how much natural neurotransmitter is available, e.g. by blocking reuptake). An antagonist typically works by occupying the receptor site without activating it, physically preventing the natural neurotransmitter from binding.

> **Common pitfall:** assuming "antagonist" always means "produces no effect." An antagonist has a very real effect — it is just the effect of _removing_ the neurotransmitter's normal action, which can itself be dramatic, as when naloxone rapidly reverses an opioid overdose.

**Practice preview:**

**1.** *(Matrix grid)* Match each clinical or functional clue to the neurotransmitter it points to.

**2.** *(Error highlight)* A student describes drug actions at synapses. Highlight the one incorrect statement.

**3.** *(Memory pairs)* Match each drug to how it works and what it does.

---

## Central Nervous System

The **Central Nervous System (CNS)** — the brain and spinal cord — is the body's command center, and it is guarded accordingly. Three protective membranes called the **meninges** wrap around it: the tough outer **dura mater**, the web-like middle **arachnoid mater**, and the delicate inner **pia mater**, which hugs the neural tissue directly. Between the arachnoid and pia lies the subarachnoid space, filled with **cerebrospinal fluid (CSF)** — produced in the brain's ventricles, it cushions the CNS against impact and helps maintain a stable chemical environment. The **blood-brain barrier**, formed by tight junctions in the capillary walls, further filters what can pass from the bloodstream into brain tissue, admitting small lipid-soluble molecules (like alcohol or nicotine) far more readily than most drugs or pathogens.

Structurally, the spinal cord inverts the brain's layout: in the brain, grey matter (cell bodies) forms the outer cortex around an inner core of white matter (myelinated axon tracts); in the spinal cord, white matter is on the outside and an H-shaped column of grey matter sits at the core.

The spinal cord also runs its own fast, local circuits called **reflex arcs**, which react to danger without waiting for the brain. A withdrawal reflex, for instance, routes the signal from a **sensory (afferent) neuron**, through an **interneuron** in the spinal cord, straight to a **motor (efferent) neuron** — the hand pulls back from the heat before pain even reaches conscious awareness.

> **Common pitfall:** assuming a spinal reflex still involves the brain "just very quickly." It does not need to — the entire arc can complete inside the spinal cord, which is precisely why it is faster than any voluntary response.

**Practice preview:**

**1.** *(Ordering)* Order the events of a withdrawal reflex, from stimulus to the moment you feel it.

**2.** *(Memory pairs)* Match each protective layer or fluid to its description.

**3.** *(Multi select)* Select every statement that is TRUE about the CNS.
   - [ ] Cerebrospinal fluid is produced in the brain's ventricles.
   - [ ] The blood-brain barrier blocks all molecules from entering brain tissue.
   - [ ] In the spinal cord, white matter lies outside and grey matter at the core.
   - [ ] A spinal reflex arc must route through the brain before the muscle responds.
   - [ ] The pia mater is the innermost meninx.


---

## Peripheral Nervous System

The **Peripheral Nervous System (PNS)** is everything outside the brain and spinal cord — the network of nerves linking the CNS to the rest of the body. It splits into two functional divisions. The **somatic nervous system** handles voluntary control: **afferent (sensory)** nerves carry information inward from skin, muscles, and joints, while **efferent (motor)** nerves carry commands outward to skeletal muscle.

The **autonomic nervous system (ANS)** governs involuntary functions — heart rate, digestion, glandular secretion — and itself splits into two branches that typically oppose each other on the same organs.

| Branch | Nickname | Typical effects |
|---|---|---|
| Sympathetic | "Fight-or-flight" | Heart rate up, pupils dilate, digestion inhibited, adrenaline released |
| Parasympathetic | "Rest-and-digest" | Heart rate down, pupils constrict, digestion stimulated, saliva flows |

The sympathetic branch mobilizes the body for an emergency: the **adrenal medulla** releases adrenaline into the bloodstream, amplifying and prolonging the nervous signal. The parasympathetic branch, dominated by the **vagus nerve**, restores and conserves resources once the threat has passed. Most internal organs receive input from both branches, so organ state at any moment reflects the _balance_ between the two — not one branch simply switching off while the other switches on.

> **Common pitfall:** treating "sympathetic" and "parasympathetic" as switches for good and bad states. Both are essential and constantly active to different degrees; chronic sympathetic dominance from unrelieved stress — not sympathetic activation itself — is what damages health over time.

**Practice preview:**

**1.** *(Category sort)* Sort each scenario by which autonomic branch is driving it.

**2.** *(Error highlight)* A student describes the autonomic nervous system. Highlight the one incorrect statement.

**3.** *(Matching)* Match each observation to the branch or structure responsible for it.

---

## Endocrine System

Where the nervous system fires fast, local, millisecond signals across synapses, the **endocrine system** releases **hormones** into the bloodstream — slower to arrive, but capable of affecting distant organs for minutes, hours, or longer. The **pituitary gland**, seated beneath the brain and controlled directly by the **hypothalamus**, is often called the "master gland" because many of the hormones it releases regulate other glands in turn.

The pituitary itself has two functionally distinct parts. The **anterior pituitary** synthesizes and releases its own hormones (such as ACTH and growth hormone) under hypothalamic control. The **posterior pituitary** does not manufacture anything itself — it simply stores and releases two hormones, oxytocin and vasopressin, that are actually produced in the hypothalamus.

The **HPA axis**, the body's central stress pathway, illustrates the endocrine system's cascading logic: the hypothalamus releases a triggering hormone, which prompts the anterior pituitary to release a second hormone, which prompts the adrenal cortex to release **cortisol** — and rising cortisol eventually feeds back to shut the cascade off again. This is distinct from the adrenal **medulla**, which releases **adrenaline** almost instantly under direct sympathetic nervous system control, not through the slower HPA cascade.

Other glands run their own dedicated systems: the **thyroid** sets the body's baseline metabolic rate via thyroxine, and the **gonads** (ovaries and testes) release estrogen and testosterone, driving sexual development and reproductive behavior.

> **Common pitfall:** confusing the fast adrenaline surge (adrenal medulla, seconds) with the slow cortisol response (adrenal cortex via the HPA axis, minutes to hours) — both come from the adrenal gland, but via entirely different control pathways and timescales.

**Practice preview:**

**1.** *(Ordering)* Order the steps of the HPA axis, the body's central stress pathway.

**2.** *(Cloze bank)* Explain the purpose of the HPA feedback loop.

**3.** *(Matching)* Match each gland to the hormone or role it is responsible for.

---

## Hindbrain and Midbrain

The **hindbrain**, evolutionarily the oldest part of the brain, sits at the base of the skull and keeps the body alive moment to moment. The **medulla oblongata** controls heartbeat, breathing, and other vital autonomic functions — damage here is often fatal. The **pons** ("bridge") connects the cerebellum to the rest of the brain and helps regulate sleep and arousal. The **cerebellum** ("little brain"), tucked beneath the cerebral hemispheres, is essential for motor coordination, balance, and procedural (motor) memory; damage produces **ataxia** — jerky, poorly coordinated movement — even though basic strength and sensation remain intact. Although the cerebellum attaches to the brainstem via the pons, it is _not_ itself classified as part of the brainstem, which consists only of the medulla, pons, and midbrain.

The **midbrain**, a small relay region above the hindbrain, contains two key structures. The **tectum** houses the superior colliculus (visual orienting reflexes) and inferior colliculus (auditory orienting reflexes) — together they let you snap your head toward a sudden flash or bang before you consciously register what happened. The **tegmentum** contains the **substantia nigra**, a major dopamine-producing region whose degeneration causes the motor symptoms of Parkinson's disease, and forms part of the **reticular formation**, a network running the length of the brainstem that regulates arousal and consciousness.

> **Common pitfall:** mixing up the superior and inferior colliculus. _Superior_ handles seeing (visual); _inferior_ handles hearing (auditory) — and "superior" comes before "inferior" in that same order alphabetically, if that helps it stick.

**Practice preview:**

**1.** *(Matrix grid)* Each row is a clinical picture. Assign it to the structure whose damage would produce it.

**2.** *(Memory pairs)* Match each deficit to the structure whose damage would cause it.

**3.** *(Multi select)* Select every statement that is TRUE.
   - [ ] Damage to the medulla is often fatal.
   - [ ] The cerebellum is part of the brainstem.
   - [ ] The reticular formation regulates arousal and consciousness.
   - [ ] The superior colliculus mediates visual orienting reflexes.
   - [ ] Cerebellar damage abolishes muscle strength and sensation.


---

## The Forebrain

The **forebrain** contains both subcortical regulatory structures and the cerebral cortex itself. The **thalamus** is the brain's central relay station, routing nearly all incoming sensory information to the correct cortical area — with one famous exception: smell (olfaction) bypasses the thalamus and projects directly to cortical and limbic targets. The **hypothalamus**, just below the thalamus, is the master regulator of homeostasis, controlling hunger, thirst, temperature, and sexual behavior (sometimes summarized as the "four Fs") while also directing the pituitary gland. The **basal ganglia** form a set of nuclei that govern voluntary movement initiation and procedural learning; their dysfunction underlies both Parkinson's and Huntington's disease.

The **limbic system** — most centrally the **hippocampus** and **amygdala** — governs emotion, motivation, and memory. The hippocampus is essential for forming new long-term _declarative_ memories (facts and events) and for spatial navigation; the famous patient H.M., who had both hippocampi removed to control epilepsy, lost the ability to form any new long-term memories afterward, though his memories from before the surgery, and his ability to learn new motor skills, remained intact. The **amygdala** evaluates emotional significance, especially fear, and tags emotionally charged experiences for stronger memory encoding.

| Structure | Core role |
|---|---|
| Thalamus | Sensory relay (except smell) |
| Hypothalamus | Homeostasis; controls the pituitary |
| Basal ganglia | Voluntary movement, procedural learning |
| Hippocampus | New long-term declarative memory, spatial navigation |
| Amygdala | Fear and emotional memory |

> **Common pitfall:** assuming H.M.'s amnesia proves the hippocampus stores memories permanently. It does not — it is needed to _form_ new long-term memories, not to store old ones, which is why H.M. could still recall his childhood.

**Practice preview:**

**1.** *(Matrix grid)* Each row is a patient presentation. Assign it to the forebrain structure whose damage best explains it.

**2.** *(Formula builder)* Build the normal route sensory information takes to the cortex.

**3.** *(Multi select)* Select every statement that is TRUE about the forebrain.
   - [ ] Smell is the sensory pathway that does NOT route through the thalamus.
   - [ ] The hypothalamus controls the pituitary gland.
   - [ ] H.M. was unable to learn any new motor skills after his surgery.
   - [ ] The amygdala strengthens memory for emotionally charged events.
   - [ ] The basal ganglia are mainly responsible for producing spoken language.


---

## Hemispheric Specialization

The **cerebral cortex** — the brain's outer, deeply folded layer — is split into two **hemispheres** joined by the **corpus callosum**, a thick cable of roughly 200 million nerve fibers that keeps them in constant communication. Each hemisphere is organized into four lobes: the **frontal lobe** (executive function, motor control, and — in most people, on the left — Broca's area for speech production), the **parietal lobe** (somatosensory and spatial processing), the **temporal lobe** (auditory processing and, on the left, Wernicke's area for language comprehension), and the **occipital lobe** (visual processing). Each hemisphere also exercises **contralateral control**, primarily managing sensation and movement on the _opposite_ side of the body.

For most people, especially right-handers, the **left hemisphere** dominates language, logical sequencing, and analytic processing, while the **right hemisphere** specializes in spatial reasoning, facial recognition, and the emotional tone (prosody) of speech. Roger Sperry and Michael Gazzaniga's studies of **split-brain patients** — whose corpus callosum had been surgically cut to control severe epilepsy — revealed this most vividly: information shown only to the right hemisphere (via the left visual field) could be pointed to with the left hand but could not be named aloud, because language production requires the left hemisphere, and with the callosum severed, the right hemisphere's knowledge could no longer reach it.

> **Common pitfall:** taking "left-brained" and "right-brained" personality talk literally. Real lateralization is a matter of _relative specialization_ for particular cognitive functions, not a wholesale split of personality or thinking style — both hemispheres contribute to nearly everything you do, constantly exchanging information through the corpus callosum.

A brain viewed from above, split down the corpus callosum: intact callosum shown as a bridge of parallel accent fibers linking both hemispheres, information flowing freely across.

$$\text{Left hemisphere} \to \text{speech}, \text{Right hemisphere} \to \text{spatial}$$

**Practice preview:**

**1.** *(Matrix grid)* Each row is what a lesion leaves impaired. Assign it to the lobe that was damaged.

**2.** *(Table completion)* Because of contralateral control, which hemisphere moves each body part? Fill each blank with Left or Right.

**3.** *(Multi select)* Select every statement that is TRUE about hemispheric specialization.
   - [ ] The corpus callosum was cut in split-brain patients to control severe epilepsy.
   - [ ] In split-brain studies, the right hemisphere could name objects aloud.
   - [ ] The left hemisphere controls movement on the right side of the body.
   - [ ] Real lateralization means relative specialization, not a split of personality.
   - [ ] Cutting the corpus callosum lets each hemisphere share information faster.


---

*Part of [Psychology I](README.md) — [Open University Courses by Tryals](../../README.md)*
