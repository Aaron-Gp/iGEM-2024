---
title: Description
---

## Background

Environmental endocrine disruptors (EDCs) are a class of chemical substances that can mimic or block the effects of hormones, affecting the normal development of organisms. These substances include DDT, dioxins, and phthalates, among others.

...

DDT is an insecticide that was once widely used, but due to its harmful effects on the reproductive and nervous systems of organisms, as well as its potential carcinogenicity, its use has been restricted in many countries since the 1970s and 1980s. However, as these substances have already entered the environment in large quantities, their negative effects persist even though their production has stopped for many years. They accumulate in the atmosphere, soil, water bodies, and organisms, posing a natural hazard.

In 2010, the direct social and economic loss caused by exposure to phthalate chemicals in China reached approximately 57.2 billion yuan, with the burden of male infertility being the most severe. Further calculations indicate that the total medical cost for all known EDCs exposure in China is about 429.4 billion yuan, accounting for approximately 1.07% of the annual GDP.

...

All these indicate that we must pay attention to these potential dangers and have a more comprehensive understanding and early screening of environmental endocrine disruptors. Nowadays, with the deepening research on environmental endocrine disruptors, more and more studies are beginning to focus on the relationship between endocrine disruptors and their metabolites and other toxic effects. This superposition of multiple effects provides clues to revealing the molecular mechanisms underlying many diseases.

## Problem

In fact, the role of environmental endocrine disruptors in organisms is complex, and the inference of their adverse effects needs to emphasize the adverse outcome pathway (AOP pathway, which describes the logical derivation of causally related events at different levels of biological tissues, leading to adverse effects on human or wildlife health). This requires us to describe the molecular mechanisms behind the impact comprehensively.

Currently, the methods for detecting endocrine disruptors using biological effects mainly include competitive ligand binding assays, fused cell aggregation experiments, and animal cell proliferation analysis experiments. These methods can only evaluate the endocrine disruption effect through the binding effect of hormone receptors when analyzing endocrine disruptors, and cannot judge the involvement of other effects behind the biological damage caused by endocrine disruptors, therefore, they have limitations.

More and more literature has proven the important role of oxidative damage effects in the damage caused by environmental endocrine disruptors to organisms. For example, exposure to various parabens (PBs) and their metabolites can increase the level of oxidative stress, and the superposition of oxidative damage and endocrine disruption increases the risk of impaired reproductive capacity in organisms. The collaborative analysis of environmental endocrine disruption effects and oxidative damage effects can help us predict the pathways of action of environmental endocrine disruptors on organism damage, thereby assisting us in having a clearer understanding of their damage consequences and providing a reference for regulatory authorities to implement targeted regulatory policies.

Our project is based on this concept and aims to construct microbial sensors through synthetic biology methods to provide multiple detection lines for the assessment of endocrine disruption effects and oxidative damage effects. Not only can we achieve the separate detection of the two effects, but we can also realize the collaborative analysis of the two effects through logic gate detection lines, achieving a rapid, convenient, and comprehensive assessment of environmental endocrine disruptors. Conduct more in-depth research and discussion on the impact mechanism of environmental endocrine disruptors.

## Inspiration

### biology

Initially, we planned to develop a biosensor for detecting environmental endocrine disruptors. To achieve this goal, we studied the characteristics and mechanisms of action of environmental endocrine disruptors and researched the methods for detecting them. Intein peptides are protein analogs found in self-splicing RNA introns, and their insertion can lead to the inactivation of the host protein. Typically, they excise themselves from the host cell after translation, restoring the activity of the host protein. By replacing the homing endonuclease domain in the intein peptide with a hormone receptor binding domain, we can construct a hormone-sensitive intein peptide, which can be used to create recognition elements for endocrine disruption effects. We plan to construct an estrogen-sensitive intein peptide and insert it into T7 RNA Polymerase. T7 RNA Polymerase can specifically activate the T7 promoter, thus regulating the downstream circuit to express the reporter gene upon detection of estrogen mimics through the T7 promoter.

Subsequently, through more in-depth researches, it was found that the effects of environmental endocrine disruptors in organisms are complex. An increasing number of studies have demonstrated the significant role of oxidative stress in the damage caused by environmental endocrine disruptors. For example, exposure to various paraben compounds (PBs) and their metabolites can increase oxidative stress levels. The combined oxidative damage and endocrine disruption can heighten the risk of impaired reproductive capability in organisms. A synergistic analysis of the effects of environmental endocrine disruption and oxidative damage can help us predict the pathways through which these disruptors cause harm to organisms, thereby assisting us in gaining a clearer understanding of their damaging consequences. Therefore, we plan to incorporate DNA damage detection, designing an and gate detection circuit capable of simultaneously detecting endocrine disruption effects and DNA oxidative damage effects.

DNA damage detection is based on the SOS response mechanism in *Escherichia coli*, which is an inducible DNA repair system activated when bacterial DNA is damaged. When bacteria detect DNA damage, the expression levels of genes associated with the SOS response mechanism significantly increase, leading to the expression of proteases that relieve the repression of target proteins, initiating the repair process. We chose the recA promoter to detect DNA damage, when bacteria sense DNA damage, the expression level of this promoter rises significantly, thereby activating downstream reporter genes.

To construct the logic gate, we introduced the hrp system, which consists of the hrpR and hrpS genes along with the HrpL promoter regulated by the sigma54 factor. The hrpL promoter is activated only when both hrpR and hrpS genes are expressed simultaneously.

We plan to insert the hrpR gene downstream of the P recA promoter, which will be activated in response to DNA damage effects; the hrpS gene will be inserted downstream of the P T7 promoter, which will be activated after the peptide-specific binding domain binds to estrogen analogs. The reporter gene egfp will be inserted downstream of the P hrpL promoter, resulting in a two-input AND gate circuit.

However, the entire circuit is too large, posing significant challenges to the stability of the plasmid and the burden on the engineered bacteria. Therefore, we plan to divide the entire circuit into two parts, each constructed in different engineered bacteria, inserting new components to enable signal transmission between the two engineered bacterias.

Throughout the system, we have always planned to use the egfp gene as the reporter gene. However, this gene requires the presence of oxygen molecules as a cofactor for its luminescence, while the cultivation chamber of our designed hardware is in a low-oxygen environment. As a result, we tested a new reporter gene, BsFbFp, which can express significantly enhanced in vivo fluorescence in both aerobic and anaerobic environments, ensuring that the engineered bacteria can effectively express fluorescent signals in low-oxygen conditions.

Thus, the construction of the biological part of our circuit has been completed.

### Hardware

Point of Care Testing (POCT) is a form of rapid on-site testing/near-patient testing method which has been particularly impactful and is playing an increasingly vital role in the fields of medical diagnostics and environmental health monitoring due to its speed, convenience, and ease of operation. Traditional water contaminant detection technologies are often constrained by the need for costly equipment and a professional laboratory environment. In contrast, novel biosensor detection devices based on compact POCT equipment, when connected to an interactive app for operational control and visual data analysis, can effectively facilitate the rapid and efficient screening of emerging waterborne pollutants. This approach holds broad prospects for application in the field of environmental monitoring and assessment.

## Solution

### biology

To achieve signal communication between the two engineered bacteria, we studied the bacterial quorum sensing mechanism. This mechanism allows bacteria to exchange information and coordinate population behaviors when their numbers reach a certain density, regulating gene expression. When activated, bacteria secrete signal molecules that can freely diffuse across the cell membrane. Once the concentration of these signal molecules in the environment reaches a certain threshold, it induces the expression of specific genes in the bacteria. We introduced the LuxI/R system, where AHL (N-acyl homoserine lactone) is produced catalytically by the expression of the LuxI gene as a signaling molecule. This AHL freely diffuses into the second engineered bacteria and binds with the LuxR protein released by the activation of the LuxR gene, activating the P LuxR promoter to initiate downstream gene expression.

![img](https://static.igem.wiki/teams/5358/description/biocircuit-p1.png)

![img](https://static.igem.wiki/teams/5358/description/biocircuit-p2.png)

![img](https://static.igem.wiki/teams/5358/description/biocircuit-p3.png)

![img](https://static.igem.wiki/teams/5358/description/biocircuit-p4.png)

### Hardware

In response to the demands for standardized cultivation of engineered bacteria and high-sensitivity detection, we have designed a highly integrated and automated system that encompasses the entire process of bacterial strain revival, cultivation, detection, and analysis. The system utilizes an ESP32 chip as the main controller, interfaces with a temperature control system and a fluorescence detection system, employs a linear slide rail structure for high-throughput detection, and leverages a mobile app for automated device control and visualization of detection results. This system overcomes the limitations of time and space associated with traditional detection equipment, providing a versatile, portable, and highly sensitive solution for the detection of EDCs in aquatic environments across various scenarios.

## *Reference*

::mdc-wrap{:class="reference"}

1. Cao Y, Li L, Shen KH, Liu JG. Disease burden attributable to endocrine-disrupting chemicals exposure in China: A case study of phthalates. Science of the Total Environment, 2019, Vol. 662(1): 615-621

2. Nematollah Asadi, Mahmoud Bahmani, Arash Kheradmand, Mahmoud Rafieian-Kopaei. The Impact of Oxidative Stress on Testicular Function and the Role of Antioxidants in Improving it: A Review. Journal of Clinical and Diagnostic Research, 2017, Vol. 11(5): IE1-IE5

3. Ma Ya, Liu Haohao, Wu Jinxia, Yuan Le, Wang Yueqin, Du Xingde, Wang Rui, Marwa Phelisters Wegesa, Petlulu Pavankumar, Chen Xinghai, Zhang Huizhen. The adverse health effects of bisphenol A and related toxicity mechanisms. Environmental Research, 2019, Vol. 176: 108

4. Liang R , Zhou J , Liu J. Construction of a Bacterial Assay for Estrogen Detection Based on an Estrogen-Sensitive Intein. Applied & Environmental Microbiology, 2011, 77(7):2488.DOI:10.1128/AEM.02336-10.

5. Ma Ya, Liu Haohao, Wu Jinxia, Yuan Le, Wang Yueqin, Du Xingde, Wang Rui, Marwa, Phelisters Wegesa, Petlulu, Pavankumar, Chen Xinghai, Zhang Huizhen.The adverse health effects of bisphenol A and related toxicity mechanisms.Environmental Research, 2019, Vol.176: 108575

6. LIANG Jing-jia, GU Ai-hua. Multigenerational and cross-generational effect of environmental endocrine disruptors on reproductive system in male animals. *Chinese Journal of Public Health*, 2021, 37(2): 375-380.

7. Nematollah Asadi, Mahmoud Bahmani, Arash Kheradmand, Mahmoud Rafieian-Kopaei.The Impact of Oxidative Stress on Testicular Function and the Role of Antioxidants in Improving it: A Review.Journal of Clinical and Diagnostic Research, 2017, Vol.11(5): IE1-IE5

8. Mondal Shirsha, Ghosh Songita, Bhattacharya Samir, Mukherjee Sutapa. Chronic dietary administration of lower levels of diethyl phthalate induces murine testicular germ cell inflammation and sperm pathologies: Involvement of oxidative stress. Chemosphere, 2019, Vol.229: 443-451

9. Maslowska K H, Karolina Makiela‐Dzbenska, Fijalkowska I J. The SOS system: A complex and tightly regulated response to DNA damage. John Wiley & Sons, Ltd, 2019(4). DOI:10.1002/em.22267.

10. Baojun W, Mauricio B, Martin B. Engineering modular and tunable genetic amplifiers for scaling transcriptional signals in cascaded gene networks. Nucleic Acids Research, 2014(14): 9484-9492. DOI:10.1093/nar/gku593.

11. Xiao Y, Zou H, Li J, Song T, Lv W, Wang W, Wang Z, Tao S. Impact of quorum sensing signaling molecules in gram-negative bacteria on host cells: current understanding and future perspectives. Gut Microbes. 2022 Jan-Dec, 14(1):2039048. doi: 10.1080/19490976.2022.2039048.

12. Drepper T, Eggert T, Circolone F, et al. Reporter proteins for in vivo fluorescence without oxygen. Nature Biotechnology, 2007, 25(4):443-445.DOI:10.1038/nbt1293.

13. Mukherjee A, Schroeder C M, Sikes H D, et al. Flavin-based fluorescent proteins: emerging paradigms in biological imaging. *This review comes from a themed issue on Analytical biotechnology*. 2015.

::

