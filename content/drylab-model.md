---
title: Model
---


## Overview

In our design, our project is primarily divided into two main components: the establishment of a gate-based microbial sensor and the development of a portable and user-friendly miniaturized device. We have divided the theme into two aspects: genetic circuits and proteins, and have established models for both. At the genetic level，we have simulated the signal transduction of cellular population effects. This part of the work can guide the wet lab group to establish a dual-strain co-culture detection system.In the protein model, we first predicted the structural models of each possible protein, and then selected the optimal insertion scheme through a comprehensive consideration using various software tools.This part of the work can help the wet lab group understand the binding situation of this hormone-sensitive intein with the target molecule after different modifications, and guide the wet lab group in the selection of insertion sites.

## Genetic Circuit Model

To further explore the intrinsic mechanisms of the genetic circuits designed in this project, to reasonably analyze and predict complex response systems, and to provide feedback and suggestions for experiments, we have established mathematical models and utilized multiple software tools to guide the acquisition of data for model fitting, and to further optimize the models. This can provide more inspiration for our project.

We have designed a mathematical model for studying the interactions between two engineered bacteria, with the initial input signal being the **ratio of concentrations** of the two bacteria. It is assumed that the gene expression level of each bacterium is directly proportional to its concentration, and that each bacterium contains approximately the same number of DNA copies. The model focuses on studying the impact of different bacterial concentration ratios (such as 1:2, 1:1, 2:1, etc.) on the response of the fluorescent signal.

In this section, our ultimate goal is to determine the optimal concentration ratio of these two bacteria and to provide an optimization direction for biological experimental applications from the perspective of genetic components. To achieve this goal, our main work is divided into two parts: establishing a mathematical model for the AND gate detection circuit using the Hill equation; simulating and optimizing the signal transduction of the cellular population effect.

### Equations


We start by establishing the differential equations that describe the AHL (N-acyl homoserine lactone), LuxR protein, and fluorescent signal (GFP) based on the reaction mechanisms of the first and second engineered bacteria (hereafter referred to as Bacterium A and Bacterium B). Considerations must be given to the production of AHL, the binding of LuxR to AHL, and the generation of fluorescence.

In the process of establishing the final system of equations, the following steps need to be considered:


#### **Production and Diffusion of AHL**:

The flux of AHL through the cell membrane:

![](https://static.igem.wiki/teams/5358/model/latex/1.svg)


in which:

![](https://static.igem.wiki/teams/5358/model/latex/2.svg)



#### **Generation of LuxR**: 

Bacterium B also expresses the LuxR protein, with its production divided into two parts.

##### Synthesis and degradation of mRNA:

![](https://static.igem.wiki/teams/5358/model/latex/3.svg)


in which：

![](https://static.igem.wiki/teams/5358/model/latex/4.svg)




##### Synthesis and degradation of LuxR protein：

![](https://static.igem.wiki/teams/5358/model/latex/5.svg)


in which：

![](https://static.igem.wiki/teams/5358/model/latex/6.svg)


#### **AHL Binding to LuxR**:

The AHL within the cell binds to the LuxR protein to form a complex. The binding process is described by the Hill function:

![](https://static.igem.wiki/teams/5358/model/latex/7.svg)

in which：

![](https://static.igem.wiki/teams/5358/model/latex/8.svg)

#### **Generation and Degradation of GFP**:

The GFP is activated by the LuxR-AHL complex, producing fluorescence, and its production is also divided into two parts.

##### Synthesis and degradation of GFP mRNA:

![](https://static.igem.wiki/teams/5358/model/latex/9.svg)

in which：

![](https://static.igem.wiki/teams/5358/model/latex/10.svg)


##### Synthesis and de gradation of GFP protein:

![](https://static.igem.wiki/teams/5358/model/latex/11.svg)



in which：

![](https://static.igem.wiki/teams/5358/model/latex/12.svg)


### System Equilibrium State

state of the system and to substantiate the model's stability, we conduct an analysis of the system's equilibrium state. The equilibrium state of the system is defined as the condition in which all variables' rates of change tend to naught as time approaches infinity, which is:

![](https://static.igem.wiki/teams/5358/model/latex/13.svg)

In this model, the equilibrium state implies that the synthesis and degradation of AHL, LuxR, and GFP have reached a balance, and the variables no longer change over time. To analyze the equilibrium state, we need to set the derivative terms of each differential equation to zero and solve the system's equilibrium state through algebraic equations.

We list the equilibrium equations as follows:

For the intracellular and extracellular concentrations of AHL, the equations at equilibrium are:

![](https://static.igem.wiki/teams/5358/model/latex/14.svg)

By solving this equation, we can obtain the equilibrium states for Ae (extracellular AHL concentration) and Ai (intracellular AHL concentration).

For the equilibrium states of LuxR mRNA and protein, their balance equations are:

![](https://static.igem.wiki/teams/5358/model/latex/15.svg)

which infers to：

![](https://static.igem.wiki/teams/5358/model/latex/16.svg)



![](https://static.igem.wiki/teams/5358/model/latex/17.svg)

As for the equilibrium state of GFP mRNA and protein, its equilibrium equation is:

![](https://static.igem.wiki/teams/5358/model/latex/18.svg)


![](https://static.igem.wiki/teams/5358/bsfbfp/21.svg)

which infers to:

![](https://static.igem.wiki/teams/5358/model/latex/20.svg)



### Determining Parameters

To establish the constants within our model, we refer to literature for the following parameters:

![](https://static.igem.wiki/teams/5358/model/moxingcanshu1.png)

The conclusion is obtained from https://2019.igem.org/Team:iBowu-China/

![](https://static.igem.wiki/teams/5358/model/moxingcanshu2.png)

which is based on the paper "A Cell-Based Model for Quorum Sensing in Heterogeneous Bacterial Colonies" (referring to reference 3), from which we only use its pin and pout values. Therefore, it is not affected by the differences in datasets.

At the same time, we make appropriate assumptions about some values that are not easily measurable, such as the distance between cells and the extracellular volume. Eventually, in the MATLAB program for solving this system of differential equations, the following parameter settings are used:

![](https://static.igem.wiki/teams/5358/model/moxingcanshu3.png)


|                     Parameter                     |  Value   |
| :-----------------------------------------------: | :------: |
|       The flux of AHL enter the cell (pinA)       |   0.1    |
|      The flux of AHL leave the cell (poutA)       |   0.1    |
|          Intracellular AHL activity (ai)          |   1.0    |
|          Extracellular AHL activity (ae)          |   0.8    |
|                 Cell volume (vb)                  |   1.0    |
|         Diffusion coefficient of AHL (D)          |   0.1    |
|             Extracellular volume (ve)             |   1.0    |
|           Distance between cells (dij)            |   1.0    |
|         Generate rate of LuxR mRNA (αmR)          |  0.161   |
|        Degradation rate of LuxR mRNA (βmR)        |  2.657   |
|        Generate rate of LuxR protein (αPR)        |  0.360   |
|      Degradation rate of LuxR protein (βPR)       |  2.658   |
|            Leaking rate of GFP (αleak)            | 1.13e-16 |
|          Generate rate of GFP mRNA (αmB)          |  5.269   |
| Binding constant of GFP transcription factor (kB) |  0.696   |
|        Degradation rate of GFP mRNA (βmB)         |  0.231   |
|        Generate rate of GFP protein (αPB)         |  2.297   |
|       Degradation rate of GFP protein (βPB)       |  0.181   |
|     Binding rate in the Hill equation (αHill)     |   0.1    |
|          Hill dissociation constant (Kd)          |   2e-7   |
|               Hill coefficient (n)                |    2     |



### Solving the Equations

We employ a numerical method—the ODE solver in Matlab—to numerically solve the differential equations. Ultimately, by iterating through different bacterial concentration ratios, we obtain varying fluorescence intensity signals and plot the results graphically. The figure below illustrates the results:

![](https://static.igem.wiki/teams/5358/model/shuxuejianmojieguo1.png)

From this, we find that the optimal concentration ratio of the two bacteria is 1:2, which can serve as a guide for constructing the best reaction system in the wet lab.

### Outlook: Guidance for Biological Experiments



Now that we have established this system of differential equations, we can use it to make some suggestions for the wet lab. For example, by predicting the amount of LuxR mRNA and LuxR protein over time in the reaction system, we can provide recommendations on the optimal cultivation time. This part of the work has already yielded results, as shown in the figure below:

![](https://static.igem.wiki/teams/5358/model/shuxuejianmojieguo2.png)

We can also influence the reaction system by adjusting the initial AHL concentration, but the mechanism behind this effect is quite complex and has not yet been fully elucidated. This could potentially become a direction for our future research.


## Protein Model

The biosensor we designed utilizes the intein RecA from Mycobacterium tuberculosis (Mtu). We intend to incorporate it into our engineered bacteria, where we need a stable RecA intein and insert it into T7RNAP to detect endocrine disruption effects. This raises an interesting question: "Where should we insert RecA to obtain the most efficient and stable T7RNAP-intein?" This provides an opportunity to use Dry Lab to guide the work we do in Wet Lab, because given the lack of a unified method to evaluate protein effects, we decided to simulate the proteins formed by each possible insertion site of T7RNAP, and comprehensively assess and select the optimal protein from perspectives such as spatial folding, binding effect with estradiol, electrostatic potential analysis, and the solvent-accessible surface area (SASA) of the protein.

### Protein Structure Prediction

Upon reviewing the literature 【Reference 1】, it has been determined that the potential insertion sites for RecA are concentrated near cysteine residues. Consequently, based on the peptide chain of T7 RNAP, twelve possible engineered proteins, T7RNAP-intein, have been derived. AlphaFold3 was utilized for structural prediction, and SWISS-Model homology modeling was employed for validation purposes.

The twelve distinct engineered proteins, T7RNAP-intein, obtained from the modeling process are named according to their insertion sites as 125C, 216C, 271C, 347C, 467C, 492C, 510C, 515C, 530C, 540C, 723C, and 839C. Due to the high structural similarity and negligible differences in properties among 467C to 540C, our discussion will focus solely on 510C. Should 510C be ultimately determined as the optimal protein, a subsequent discussion will ensue to compare the performance merits of 467C, 492C, 510C, 515C, 530C, and 540C.


The results generated by AlphaFold3 are as follows:


::glb-viewer{model="models/m125.glb"}

::

::glb-viewer{model="models/m271.glb"}

::

::glb-viewer{model="models/m347.glb"}

::

::glb-viewer{model="models/m510.glb"}

::

::glb-viewer{model="models/m723.glb"}

::

::glb-viewer{model="models/m839.glb"}

::



The structure of 125C predicted by SWISS-Model is as follows:

![](https://static.igem.wiki/teams/5358/model/510swissmodel.png)

Comparing the results predicted by AlphaFold3 with those obtained from SWISS-Model, a high degree of similarity was found, which serves to validate the accuracy of the AlphaFold3 modeling.

### Estrogen Effect Efficacy

The ultimate goal of constructing engineered proteins is to achieve more efficient binding with estrogens. Therefore, we would like to first use molecular docking tools to visually complete this process.

Due to the large size of the engineered proteins, the processing speed of SwissDock is relatively slow. We ultimately decided to use the EasyMD tool to accomplish this. To ensure the accuracy of EasyMD, we used it to predict the binding between the estrogen receptor ER-α and estradiol, and then compared the obtained data and result graphs with the results in reference paper 2. The paper mentioned four modes of binding between estrogens and receptors, among which the binding of estradiol, namely ERα-estradiol, the binding energy measured in a neutral liquid solvent is shown in the table below:

![](https://static.igem.wiki/teams/5358/model/cankaoshuju.png)



The result of prediction using EasyMD is shown in the table below

![](https://static.igem.wiki/teams/5358/model/cankaojieguoshengchengtu.jpg)


Its binding energy:

![](https://static.igem.wiki/teams/5358/model/qinhelibiao.jpg)

It can be seen that the affinity table predicts a variety of docking modes. Based on the first measured docking mode, the RMSD value is continuously assessed. RMSD is the root mean square deviation between the molecular structure docking results and the reference structure; the closer the value is to 0, the smaller the difference between the structures. RMSD l.b. refers to the lower limit in the calculation, usually corresponding to the key residues or structural parts of the docking, and the closer the value is to 0, the closer the posture is to the reference structure. RMSD u.b. represents the upper limit of the overall structural difference, and a higher value indicates that some docking poses may deviate significantly in non-critical areas.

The average binding energy of all docking modes in the affinity table is approximately -6kcal/mol, which is almost the same as the binding energy of ERα-estradiol in the reference paper. Therefore, it can be considered that the docking data generated by EasyMD is accurate. The docking data generated by EasyMD can be used to evaluate the binding energy of each engineered protein docking with estradiol to form a complex, and the results are organized in the following csv file:

::pdf-viewer1

::

In the figure, the highlighted in red represents the most stable and closest to the reference conformation among all docking modes for each engineered protein (i.e., the smallest Affinity and RMSD values closest to 0). Therefore, it is concluded that 510C is the most stable engineered protein in binding with estradiol. 125C is the next most stable, followed by 271C, 374C, and 732C, which are quite similar to each other. 839C is the least stable.

### Spatial Folding Situation

However, the most stable binding with estradiol does not necessarily mean that it binds most easily with estradiol. We believe there are other factors that affect the binding of the engineered protein with estradiol, such as the spatial structure of the protein.

Hydrogen bonds and hydrophobic interactions are the two strongest intermolecular forces and are also the main forces that shape the spatial structure of proteins. To examine the spatial folding, we can start with hydrogen bonds. Our analysis can observe the number and length of hydrogen bonds (which can measure the impact of hydrogen bonds) within the active site segment (i.e., the part of the engineered protein that is the estrogen receptor), while also focusing on intra-segment and inter-segment hydrogen bonds. The hydrogen bonds are further divided into N-terminal and C-terminal to accurately analyze the different effects of hydrogen bonds in different directions.

Using the hydrogen bond display function of pymol, as shown in the figure below, we can observe all hydrogen bonds near the selected active site segment. So we wrote a script (the content of the script is shown below) to summarize the hydrogen bond information in the following csv file.

::pdf-viewer1

::

From this, we found that the engineered proteins formed at six different insertion sites have almost identical numbers and lengths of hydrogen bonds at four different positions: internal, external, N-terminal, and C-terminal. Considering that they are composed of exactly the same amino acids, just in different positions, it is understandable to arrive at such a conclusion.

Therefore, we conclude that it is difficult to judge the spatial folding situation based on the number, distribution, and bond length of hydrogen bonds.

### Solvent-Accessible Surface Area (SASA) Analysis of Proteins

Since it is difficult to judge the spatial structure of different engineered proteins through hydrogen bonds, we shifted our focus again - studying the essence of protein spatial structure is to study the size of the protein's reactive area in the solvent, in order to predict and judge the actual reaction rate of the engineered protein with estradiol.

Thus, we assessed whether the insertion of the estrogen receptor increased the exposure of hydrophobic areas by calculating the solvent-accessible surface area (SASA) of the protein. That is, we checked whether the insertion of the estrogen receptor increased the exposed hydrophobic areas of the protein, and the increased hydrophobic areas may lead to protein aggregation or inactivation.

As the calculation process is relatively straightforward, we chose CABS-flex as the calculation tool.

Considering a general solvent environment, we selected a radius of the water probe (A) of 1.4 Å, and the solution environment was set to neutral conditions.

We summarized the calculation results in the following csv file:

![](https://static.igem.wiki/teams/5358/model/sasa.jpg)

Based on the calculation results, there can be a difference of up to several thousand square Ångströms (Å²) between different engineered proteins. Therefore, we conclude that 271C has the largest solvent-accessible surface area, with the others differing by less than 2000Å², all significantly lower than 271C.

### Electrostatic Potential Analysis

In addition to the contact area, both proteins and estradiol will carry certain charges in the solution environment. Whether they can attract each other smoothly and bind also depends on the potential distribution of the engineered proteins.

The APBS plugin in pymol can analyze and calculate the potential distribution, especially the charge distribution around the active sites. It is not difficult to find that the insertion sites with uniform potential distribution and reasonable distribution of positive and negative charges without significant interference with the active sites are more optimal.

Considering that under physiological pH conditions, the hydroxyl groups (-OH) on the estradiol molecule can ionize to form negative charges, it is best for the protein receptor to have a uniform distribution of positive charges to facilitate binding and thus exert biological functions. Therefore, we have marked the potential of the estrogen binding domain as an isosurface with a potential of 1.0 (which can be approximated as positive charges) in the figure.

![](https://static.igem.wiki/teams/5358/model/125-dianshi.png)

![](https://static.igem.wiki/teams/5358/model/271-dianshi.png)

![](https://static.igem.wiki/teams/5358/model/347-dianshi.png)

![](https://static.igem.wiki/teams/5358/model/510-dianshi.png)

![](https://static.igem.wiki/teams/5358/model/723-dianshi.png)

![](https://static.igem.wiki/teams/5358/model/839-dianshi.png)

In the previous section, we have verified that the binding region for estrogen is indicated by the red circle in the figure. Upon detailed observation and analysis of this part, we concluded that the binding areas around 125C, 271C, and 723C have large positively charged regions, which are not conducive to the binding with estrogen; the binding area of 347C is almost devoid of positive charges, making it even more difficult to react; although 839C has a uniform distribution of positive charges, they are relatively sparse. In comparison, 510C has the most uniform and abundant distribution.

### Conclusion and Outlook

Given the lack of a unified method for evaluating the efficacy of proteins, we have decided to take a goal-oriented approach to discuss how to enable engineered proteins to bind estradiol more efficiently. We have considered the vast majority of factors affecting this process and identified suitable computational tools and paradigms that can serve as a reference for other researchers.

At the same time, after the above multi-angle analysis, the optimal engineered protein is identified as 510C, which meets the following criteria:

a. The protein folding is stable, and the key functional domains are unaffected. The complex formed by 510C binding with estradiol has the lowest energy, thus being the most stable and most conducive to binding with estradiol.

b. It has a relatively large solvent-accessible surface area (SASA) (although not the largest, it is not significantly lower than other engineered proteins except for 271C).

c. The potential distribution is reasonable and does not severely interfere with the functional region.

Combining the above, **qualitative analysis concludes that the best engineered protein is 510C.** Since we represent the six engineered proteins with similar insertion sites with "510C," we will further study the detailed comparison of 467C, 492C, 510C, 515C, 530C, and 540C. However, due to their high structural similarity, there will be no significant performance differences in the production process, and this engineered protein can be directly used to construct biosensors. (Due to the delay in the delivery of experimental components, we are currently unable to verify the correctness of this modeling process in a wet lab. Nevertheless, its logical completeness and diverse perspectives can still serve as a reference for other researchers.)



## *Reference*

::mdc-wrap{:class="reference"}

1. Liang Rubing, et al. "Construction of a Bacterial Assay for Estrogen Detection Based on an Estrogen-Sensitive Intein". Applied and Environmental Microbiology, vol.77, 2011, pp.2488-2495, https://doi.org/10.1128/AEM.02336-10.
2. 王婷.某些植物雌激素与ERα及ERβ蛋白相互作用的分子动力学研究[D]. 烟台大学, 2020. DOI:10.27437/d.cnki.gytdu.2020.000133. 
3. Melke Pontus, et al. "A Cell-Based Model for Quorum Sensing in Heterogeneous Bacterial Colonies". PLOS Computational Biology, vol.6, 2010, pp.e1000819, https://doi.org/10.1371/journal.pcbi.1000819.

::

