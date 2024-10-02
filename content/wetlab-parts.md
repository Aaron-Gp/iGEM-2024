---
title: Parts
---

Team BIT registered 2 basic parts and  8 new composite parts.

The sequence source and construction method of the composite part are demonstrated in the Experiments section and Results section. Please click on the Part Name to shift to the registry for viewing further information.

## Basic Parts

| Part Code    | Part Name                    | Type     |
| ------------ | ---------------------------- | -------- |
| BBa_K5358010 | BsFbFp                       | Reporter |
| BBa_K5358011 | (N)T7RNAP-ERintein-(C)T7RNAP | Coding   |

## Composite Parts

### PrecA-hrpR-T

When cells are subjected to oxidative damage, PrecA initiates the expression of the downstream hrpR gene.

![img](https://static.igem.wiki/teams/5358/parts/image1.png) 

### Pj23100-LuxR-T

Pj23100 is a constitutive promoter that enables the constitutive expression of LuxR.

![img](https://static.igem.wiki/teams/5358/parts/image2.png) 

### PluxR-hrpS-T

Used for the constitutive regulation circuit with LuxR.

![img](https://static.igem.wiki/teams/5358/parts/image3.png) 

### PhrpL-BsFbFp-T

Used for the constitutive regulation characterization project with hrpR.

![img](https://static.igem.wiki/teams/5358/parts/image4.png) 

### PgapA-N-T7RNAP-ER-LBD intein-C-T7RNAP-T

PgapA is a constitutive promoter that enables the constitutive expression of intein.

![img](https://static.igem.wiki/teams/5358/parts/image5.png) 

### PT7-LuxI-T

Used to construct a regulatory circuit with T7 polymerase.

![img](https://static.igem.wiki/teams/5358/parts/image6.png) 

### PrecA-hrpR-T- Pj23100-LuxR- PluxR-hrpS-T- PhrpL-BsFbFp-T

PrecA responds to cellular oxidative stress damage and expresses hrpR. PluxR responds to the binding of LuxR and AHL, ultimately leading to the expression of hrpS. HrpS and hrpR together activate PhrpL, which expresses BsFbFp, resulting in fluorescence characterization in bacteria. 

![img](https://static.igem.wiki/teams/5358/parts/image7.png) 

### Pj23100-N-T7RNAP-ER-LBD intein-C-T7RNAP-T- PT7-LuxI-T

PgapA constitutively initiates the expression of intein. When cells are affected by endocrine disruptors, intein is cleaved, allowing the N-terminal and C-terminal of T7 polymerase to come together and activate PT7 to express LuxI, which collaborates with other bacteria to initiate signaling expression.

![img](https://static.igem.wiki/teams/5358/parts/image8.png) The composite part is composed of 12 basic parts, which can realize the detection of oxidative stress damage level and signal amplification function of E.coli.

Our part successfully detected DNA damage and endocrine disruptors caused by the damaging reagent NA. Increasing the signal output while improving the sensitivity of the sensor, which broadens the application range of the sensor and is more suitable for the detection of new chemical reagents.

## Reference Parts:


| Part Name    | Type              | Description                                                  | Length |
| ------------ | ----------------- | ------------------------------------------------------------ | ------ |
| BBa_K629001  | Regulatory        | This part could be started with exposure to irradiation, UV, nalidixic acid and activate SOS system to activate DNA repair. | 124bp  |
| BBa_K2967008 | Coding            | The activator protein HrpR in hrp gene regulatory network    | 948 bp |
| BBa_K2967009 | Coding            | The activator protein HrpS in hrp gene regulatory network    | 912pb  |
| BBa_K2967011 | Regulatory        | The inducible promoter in hrp gene regulatory network        | 208 bp |
| BBa_B0015    | Terminator        | double terminator (B0010-B0012)                              | 129bp  |
| BBa_K081005  | Regulatory        | Constitutive promoters of gene circuits                      | 58bp   |
| BBa_J37019   | Regulatory-Coding | The inducible promoter in Lux gene regulatory network andthe LuxI-mediated response proteins LuxR in hrp gene regulatory network | 862bp  |
| BBa_C0261    | Coding            | The activator protein LuxI in Lux gene regulatory network    | 661bp  |
| BBa_E0840    | Coding            | Green fluorescent protein                                    | 878bp  |
| BBa_I712074  | Regulatory        | The inducible promoter in T7 gene regulatory network         | 46 bp  |
| BBa_B0030    | RBS               | Modified from R. Weiss                                       | 15bp   |
| BBa_K2610040 | Regulatory        | Constitutive promoters of gene circuits                      | 15bp   |
| BBa_R0062    | Regulatory        | The inducible promoter in lux gene regulatory network        | 55bp   |
| BBa_C0062    | Coding            | The activator protein luxR in lux gene regulatory network    | 781bp  |

