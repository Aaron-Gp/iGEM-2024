# Models

## Overview

在我们的设计中，我们的项目主要分为建立基于门控的微生物传感器和便携易使用的小型化设备。我们将主题分为两个方面：遗传线路、蛋白质，并为这两个方面建立了模型：基因层面主要通过Hill方程建立了与门检测线路的数学模型；模拟了细胞群体效应信号传导；在蛋白质模型中我们先预测了每种可能性的蛋白质结构模型，再通过多种软件工具进行综合考虑，选择出最优插入方案。

In our design, our project is primarily divided into two main components: the establishment of a gate-based microbial sensor and the development of a portable and user-friendly miniaturized device. We have divided the theme into two aspects: genetic circuits and proteins, and have established models for both. At the genetic level，we have simulated the signal transduction of cellular population effects. This part of the work can guide the wet lab group to establish a dual-strain co-culture detection system.In the protein model, we first predicted the structural models of each possible protein, and then selected the optimal insertion scheme through a comprehensive consideration using various software tools.This part of the work can help the wet lab group understand the binding situation of this hormone-sensitive intein with the target molecule after different modifications, and guide the wet lab group in the selection of insertion sites.

## 遗传线路模型：Genetic Circuit Model

为了进一步探索本项目设计的遗传电路的内在机制，对复杂的响应系统进行合理的分析和预测，并能够对实验提供一些反馈和建议，我们建立了数学模型，并利用多个软件工具来指导实验获取用于拟合模型的数据，并进一步优化模型。这可以为我们的项目提供更多的灵感。

我们设计了一个用于研究两种工程菌交互的数学模型，初始输入信号为**两种菌的浓度比**。假设每种菌的基因表达量与菌的浓度成正比，且每个菌含有近似相同数量的DNA拷贝。模型重点研究不同菌浓度比（如1:2、1:1、2:1……）对荧光信号响应的影响。

在本模块中，我们的最终目标是探明这两种菌的最佳浓度比是多少，从基因成分的角度给出生物实验应用的优化方向。为了达到这一目的，我们的主要工作分为两部分：利用Hill方程建立了与门检测线路的数学模型；模拟并优化细胞群体效应信号传导。

To further explore the intrinsic mechanisms of the genetic circuits designed in this project, to reasonably analyze and predict complex response systems, and to provide feedback and suggestions for experiments, we have established mathematical models and utilized multiple software tools to guide the acquisition of data for model fitting, and to further optimize the models. This can provide more inspiration for our project.

We have designed a mathematical model for studying the interactions between two engineered bacteria, with the initial input signal being the **ratio of concentrations** of the two bacteria. It is assumed that the gene expression level of each bacterium is directly proportional to its concentration, and that each bacterium contains approximately the same number of DNA copies. The model focuses on studying the impact of different bacterial concentration ratios (such as 1:2, 1:1, 2:1, etc.) on the response of the fluorescent signal.

In this section, our ultimate goal is to determine the optimal concentration ratio of these two bacteria and to provide an optimization direction for biological experimental applications from the perspective of genetic components. To achieve this goal, our main work is divided into two parts: establishing a mathematical model for the AND gate detection circuit using the Hill equation; simulating and optimizing the signal transduction of the cellular population effect.

### 一.表达式：Equations

我们首先根据第一种和第二种工程菌（以下称为菌A和菌B）的反应机理，写出描述AHL、LuxR蛋白和荧光信号（GFP）的微分方程。需要考虑AHL的生成、LuxR与AHL的结合以及荧光的生成。

在建立最终方程系统的过程中，主要需要考虑以下步骤：

We start by establishing the differential equations that describe the AHL (N-acyl homoserine lactone), LuxR protein, and fluorescent signal (GFP) based on the reaction mechanisms of the first and second engineered bacteria (hereafter referred to as Bacterium A and Bacterium B). Considerations must be given to the production of AHL, the binding of LuxR to AHL, and the generation of fluorescence.

In the process of establishing the final system of equations, the following steps need to be considered:

**AHL的生成与扩散**：

AHL通过细胞膜的通量：

#### **Production and Diffusion of AHL**:

The flux of AHL through the cell membrane:
$$
j_ 
A
​
 =−pinA+poutA
$$
$$
dA_ 
i/dt
​
 
​
 = 
a/v_
b
​
 
​
 ⋅j_
A
​
 +D⋅ 
 1/
v_
e
​
 

​

∑
​
 (A 
e
​
 −A 
i)/ 
d_{ij}

​
 

​
 
​
$$

in which:
$$
A_i:Consentration \ of \ AHL \ inside \ the \ bacterium
$$

$$
A_e:Consentration \ of \ AHL \ outside \ the \ bacterium
$$

$$
D:Diffusion \ Coefficient \ ofAHL
$$

$$
d_{ij}

​
 :Distance \ between \ the \ Cells
$$

$$
j_
A
​
 :The \ flux \ of \ AHL ,\ which \ is \ controlled \ by \ the \ rates \ at \ which \ AHL \ enters \ and \ leaves \ the \ cells
$$



**LuxR的生成**：菌B同时会表达出LuxR蛋白，生成分为两部分。

mRNA的生成与降解：

#### **Generation of LuxR**: 

Bacterium B also expresses the LuxR protein, with its production divided into two parts.

##### Synthesis and degradation of mRNA:


$$
dm_
R
/dt=α_{m_ R}

​
​
 N_
2
​
 −β_{m_R}

​
 
​
 m_R
​
$$
in which：


$$
m_
R
​
  ： Concentration \ LuxR \ mRNA
$$

$$
α_
{mR}
​
 
​
  ： Transcription \ rate \ of \ LuxR \ mRNA
$$

$$
N_
2
​
  ： Initial \ concentration \ of \ bacterium \ B
$$

$$
β_
{mR}
​
 
​
  ： Degradation \ rate \ constant \ of \ mRNA
$$



##### Synthesis and degradation of LuxR protein：


$$
dP_
R
/dt=α_{P_ R}

​
​
 N_
2
​
 −β_{P_R}

​
 
​
 P_R
​
$$


in which：
$$
P_
R
​
  ： Concentration \ of \ LuxR
$$

$$
α_{P_R}

​
 
​
  ：Translation \ rate \ of \ LuxR
$$

$$
β_{P_R}
​
 
​
  ： Degradation \ rate \ of \ LuxR
$$



**AHL与LuxR的结合**：

菌内的AHL与LuxR蛋白结合，形成复合物，结合过程通过Hill函数描述：

#### **AHL Binding to LuxR**:

The AHL within the cell binds to the LuxR protein to form a complex. The binding process is described by the Hill function:
$$
dC/dt
​
 =α_{Hill}
​
A_ 
i^
n
R
/(
K_
d^
n
​
 +A_ 
i^
n
)
​
 

​
 
​
−

​
 C
$$
in which：
$$
C :Concentration \ of \ complex \ LuxR-AHL
$$

$$
α_{Hill}

​
 ：Generate \ rate \ constant \ of \ the \ complex
$$

$$
n :Hill \ coefficient
$$

$$
K_
d
​
 :Dissoclation \ Constant
$$

**GFP 的生成与降解**：

由LuxR-AHL复合物激活GFP，产生荧光，其生成同样分为两部分。

GFP mRNA 的生成与降解：

#### **Generation and Degradation of GFP**:

The GFP is activated by the LuxR-AHL complex, producing fluorescence, and its production is also divided into two parts.

##### Synthesis and degradation of GFP mRNA:

$$
dm_
B/dt
​
 
​
 =α_{leak}
​
 +α_{m_B}

​
 ·
​
   
N_
B
​
 (k_
B
​
 A_
i
​
 P_
R
​
 )^
2/
[1+(k_
B
​
 A_
i
​
 P_
R
​
 )^
2]

 
​
 −β_{m_B}

​
 
​
 m_
B
​
$$
in which：
$$
α_{leak}

​
 ：Leaking \ rate \ of \ GFP
$$

$$
m_
B
​
  ： Concentraion \ of \ GFP \ mRNA
$$

$$
α_
{mB}
​
 
​
  ： Transcription \ rate \ of \ GFP \ mRNA
$$

$$
k_
B
​
  ： Binding \ constant \ of \ GFP \ promoter
$$

$$
β_
{mB}
​
 
​
  ：Degradation \ constant \ of \ GFP \ mRNA
$$

##### Synthesis and degradation of GFP protein:


$$
dP_
B
/dt=α_{P_ B}

​
​
m_B
​
 −β_{P_B}

​
 
​
 P_B
​
$$


in which：
$$
P_
B
​
  ： Concentration \ of \ GFP \ protein
$$

$$
α_{P_B}

​
 
​
  ：Translation \ rate \ of \ GFP \ protein
$$

$$
β_{P_B}
​
 
​
  ： Degradation \ rate \ of \ GFP \ protein
$$

### 二.系统的平衡状态：System Equilibrium State

为理解系统的长期状态，验证模型的稳定性，我们对系统的平衡状态进行分析。系统的平衡状态是指当时间趋于无穷大时，所有变量的变化率为零，即 

In order to comprehend the persistent state of the system and to substantiate the model's stability, we conduct an analysis of the system's equilibrium state. The equilibrium state of the system is defined as the condition in which all variables' rates of change tend to naught as time approaches infinity, which is:
$$
 
𝑑
𝑥/
𝑑
𝑡


​
 =0
$$
在此模型中，平衡状态意味着 AHL、LuxR 和 GFP 的生成和降解达到平衡，各变量不再随时间变化。为了分析平衡状态，我们需要将每个微分方程的导数项设为零，并通过代数方程求解系统的平衡状态。

我们列出平衡态方程如下：

对于细胞内外的 AHL 浓度，平衡状态下的方程为：

In this model, the equilibrium state implies that the synthesis and degradation of AHL, LuxR, and GFP have reached a balance, and the variables no longer change over time. To analyze the equilibrium state, we need to set the derivative terms of each differential equation to zero and solve the system's equilibrium state through algebraic equations.

We list the equilibrium equations as follows:

For the intracellular and extracellular concentrations of AHL, the equations at equilibrium are:
$$
0= 
aj_
A
/v_
b

​
 
​
 + 
D
​
 

​
( A_
e
​
 −A_
i)/
d_{ij}

​
 
v_
e

​
 
​
$$
通过解该方程，可以得到 Ae 和 Ai的平衡状态。

 对于LuxR mRNA 和蛋白的平衡状态，其平衡方程为：

By solving this equation, we can obtain the equilibrium states for Ae (extracellular AHL concentration) and Ai (intracellular AHL concentration).

For the equilibrium states of LuxR mRNA and protein, their balance equations are:
$$
0=α_{m_ R}

​
​
 N_
2
​
 −β_{m_R}

​
 
​
 m_R
​
$$

$$
0=α_{P_R}

​
 
​
 m_R
​
 −β_{P_R}
​
 
​
 P_R
​
$$


which infers to：
$$
m_
R
​
 = 


​
 
​
 
α_{m_R}

​
 
​
 N_
2/β_{m_R}
​
 
​
$$

$$
P_
R
​
 = 


​
 
​
 
α_{P_R}
α_{m_R}
​
 
​
 N_
2/β_{m_R}
​β_{P_R}
 
​
$$

在平衡状态下，LuxR-AHL 复合物的浓度满足：
$$
C
​
 =α_{Hill}
​
A_ 
i^
n
P_
R
/(
K_
d^
n
​
 +A_ 
i^
n
)
$$
对于GFP mRNA 和蛋白的平衡状态，其平衡方程为：

As for the equilibrium state of GFP mRNA and protein, its equilibrium equation is:
$$
0
​
 
​
 =α_{leak}
​
 +α_{m_B}

​
 ·
​
   
N_
B
​
 (k_
B
​
 A_
i
​
 P_
R
​
 )^
2/
[1+(k_
B
​
 A_
i
​
 P_
R
​
 )^
2]

 
​
 −β_{m_B}

​
 
​
 m_
B
​
$$



$$
0=α_{P_ B}

​
​
m_B
​
 −β_{P_B}

​
 
​
 P_B
​
$$

which infers to:

【运算结果1.png 注意插入后的缩放大小为67%】
$$
P_
B
​
 = 


​
 
​
 
α_{P_B}

​
 
​
 m_
B/β_{P_B}
​
 
​
$$


### 三.确定参数：Determining Parameters

根据文献确定模型中的常数参数为：

To establish the constants within our model, we refer to literature for the following parameters:

【模型参数1.png】

The conclusion is obtained from https://2019.igem.org/Team:iBowu-China/

【模型参数2.png】

出自论文”A Cell-Based Model for Quorum Sensing in

Heterogeneous Bacterial Colonies“（即参考文献3）。在这里我们只使用其pin，pout。故不受数据集差异的影响。

同时，我们适当假设某些不易测得的数值如细胞间距离，细胞外体积。最终在matlab求解这一微分方程系统的程序中，采用如下参数设置：

which is based on the paper "A Cell-Based Model for Quorum Sensing in Heterogeneous Bacterial Colonies" (referring to reference 3), from which we only use its pin and pout values. Therefore, it is not affected by the differences in datasets.

At the same time, we make appropriate assumptions about some values that are not easily measurable, such as the distance between cells and the extracellular volume. Eventually, in the MATLAB program for solving this system of differential equations, the following parameter settings are used:

【模型参数3.png】

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



### 四.求解方程：Solving the Equations

我们使用数值方法——Matlab的ODE求解器——对微分方程进行数值求解。最终通过遍历不同的菌浓度比，得到不同的荧光强度信号，并将结果绘制成图。如下图所示：

We employ a numerical method—the ODE solver in Matlab—to numerically solve the differential equations. Ultimately, by iterating through different bacterial concentration ratios, we obtain varying fluorescence intensity signals and plot the results graphically. The figure below illustrates the results:

【数学建模结果1.png】

从中我们发现，两种菌的最佳浓度比是1:2，这可以作为wet lab中构建最佳反应体系的指导。

From this, we find that the optimal concentration ratio of the two bacteria is 1:2, which can serve as a guide for constructing the best reaction system in the wet lab.

### 五.展望：对生物实验的其他指导Outlook: Guidance for Biological Experiments

既然已经构建好了这一微分方程系统，我们可以利用它为wet lab进行一些建议。譬如通过预测LuxR mRNA与LuxR 蛋白质随时间变化在反应体系中的含量，我们可以给出最佳培养时间方面的建议。这部分工作已经有了结果，如下图所示：

Now that we have established this system of differential equations, we can use it to make some suggestions for the wet lab. For example, by predicting the amount of LuxR mRNA and LuxR protein over time in the reaction system, we can provide recommendations on the optimal cultivation time. This part of the work has already yielded results, as shown in the figure below:

【数学建模结果2.png】

我们同样可以通过调整初始AHL浓度来影响反应体系，不过这部分影响机理较为复杂，目前尚未很好的探明，这或许可以成为我们未来的研究方向。

We can also influence the reaction system by adjusting the initial AHL concentration, but the mechanism behind this effect is quite complex and has not yet been fully elucidated. This could potentially become a direction for our future research.



## 蛋白质模型：Protein Model

我们设计的生物传感器使用了来自结核分枝杆菌 (Mtu)的内含肽RecA。我们想将其放入我们的工程菌中，其中我们需要稳定的RecA intein并将其插入T7 RNAP中，以检测内分泌干扰效应。这就提出了一个有趣的问题，即“我们将RecA插入在哪里才能得到最高效稳定的T7RNAP-intein？“这为使用 Dry Lab 来指导我们在 Wet Lab 中所做的工作提供了机会，因为鉴于没有评价蛋白质效果的统一方法，我们决定模拟 T7 RNAP的每种可能的插入位点所形成的蛋白质，以及从空间折叠情况、与雌二醇的结合效果、静电势分析、蛋白质的溶剂可接触表面积（SASA）等角度综合评估选择最优蛋白质。

The biosensor we designed utilizes the intein RecA from Mycobacterium tuberculosis (Mtu). We intend to incorporate it into our engineered bacteria, where we need a stable RecA intein and insert it into T7RNAP to detect endocrine disruption effects. This raises an interesting question: "Where should we insert RecA to obtain the most efficient and stable T7RNAP-intein?" This provides an opportunity to use Dry Lab to guide the work we do in Wet Lab, because given the lack of a unified method to evaluate protein effects, we decided to simulate the proteins formed by each possible insertion site of T7RNAP, and comprehensively assess and select the optimal protein from perspectives such as spatial folding, binding effect with estradiol, electrostatic potential analysis, and the solvent-accessible surface area (SASA) of the protein.

### 1. 蛋白质结构预测Protein Structure Prediction

查阅资料得知【参考文献1】，RecA可能的插入位点集中在半胱氨酸旁，于是根据T7 RNAP的肽链得到十二种可能的工程蛋白T7RNAP-intein。并使用alphafold3来进行结构预测。同时作为参照采取SWISS Model同源建模方式加以佐证。

建模得到的12种不同的工程蛋白T7RNAP-intein根据插入的位点不同，命名为125C,216C,271C,347C,467C,492C,510C,515C,530C,540C,723C,839C。由于467C至540C的结构过于相似，各种性质相差不大，所以我们只讨论510C。若最终判断为510C为最优蛋白质，后续再展开讨论467C,492C,510C,515C,530C,540C的性能优劣。

Upon reviewing the literature 【Reference 1】, it has been determined that the potential insertion sites for RecA are concentrated near cysteine residues. Consequently, based on the peptide chain of T7 RNAP, twelve possible engineered proteins, T7RNAP-intein, have been derived. AlphaFold3 was utilized for structural prediction, and SWISS-Model homology modeling was employed for validation purposes.

The twelve distinct engineered proteins, T7RNAP-intein, obtained from the modeling process are named according to their insertion sites as 125C, 216C, 271C, 347C, 467C, 492C, 510C, 515C, 530C, 540C, 723C, and 839C. Due to the high structural similarity and negligible differences in properties among 467C to 540C, our discussion will focus solely on 510C. Should 510C be ultimately determined as the optimal protein, a subsequent discussion will ensue to compare the performance merits of 467C, 492C, 510C, 515C, 530C, and 540C.

其用alphafold3生成的结果如下

The results generated by AlphaFold3 are as follows:

【12个gltb】

其用swissmodel预测出的125C结构如下：

The structure of 125C predicted by SWISS-Model is as follows:

【1个截图：510swissmodel.png】

与alphafold3所预测出的结果对比发现，相似度很高，可以验证alphafold3的建模准确性。

Comparing the results predicted by AlphaFold3 with those obtained from SWISS-Model, a high degree of similarity was found, which serves to validate the accuracy of the AlphaFold3 modeling.

### 2. 雌激素结合效果Estrogen Effect Efficacy

构建工程蛋白的最终目的是更高效的与雌激素相结合，于是我们想先用分子对接工具直观的完成这一过程。

由于工程蛋白较大，SwissDock 的处理速度较为缓慢，我们最终决定使用EasyMD这一工具完成，为确保EasyMD的准确性，我们使用其预测雌激素受体ER-α与雌二醇之间的结合，并将得到的数据和结果图与参考论文2中的结果作对比。论文中提到了四种雌激素与受体的结合方式，其中雌二醇的结合，即ERα-estradiol，在中性液体溶剂中测得的结合能量如下表所示：

The ultimate goal of constructing engineered proteins is to achieve more efficient binding with estrogens. Therefore, we would like to first use molecular docking tools to visually complete this process.

Due to the large size of the engineered proteins, the processing speed of SwissDock is relatively slow. We ultimately decided to use the EasyMD tool to accomplish this. To ensure the accuracy of EasyMD, we used it to predict the binding between the estrogen receptor ER-α and estradiol, and then compared the obtained data and result graphs with the results in reference paper 2. The paper mentioned four modes of binding between estrogens and receptors, among which the binding of estradiol, namely ERα-estradiol, the binding energy measured in a neutral liquid solvent is shown in the table below:

【参考数据.png】

而使用EasyMD的预测结果为下图：

The result of prediction using EasyMD is shown in the table below

【参考结果生成图.png】

其结合能量为：

Its binding energy:

【亲和力表.csv】

可以看出亲和力表中预测了许多种对接方式，以最先测得的一种对接方式为基础，不断评估RMSD值。RMSD是对分子结构对接结果与参考结构之间差异的均方根偏差，数值越接近0表示结构之间的差异越小。RMSD l.b. 指的是计算时的下限，通常对应对接的关键残基或结构部分，数值越接近0，表示姿态越接近参考结构。RMSD u.b. 代表的是结构整体的上限差异，较高的值表明某些对接姿态在非关键区域可能有较大偏离。

亲和力表中全部对接方式的结合能大致平均为-6kcal/mol，与参考论文中ERα-estradiol的结合能几乎相同。因此，可以认为通过EasyMD生成的对接数据是准确的。即可用EasyMD生成的对接数据来评估每种工程蛋白对接雌二醇形成的复合物的结合能，结果整理在下面的csv文件中：

It can be seen that the affinity table predicts a variety of docking modes. Based on the first measured docking mode, the RMSD value is continuously assessed. RMSD is the root mean square deviation between the molecular structure docking results and the reference structure; the closer the value is to 0, the smaller the difference between the structures. RMSD l.b. refers to the lower limit in the calculation, usually corresponding to the key residues or structural parts of the docking, and the closer the value is to 0, the closer the posture is to the reference structure. RMSD u.b. represents the upper limit of the overall structural difference, and a higher value indicates that some docking poses may deviate significantly in non-critical areas.

The average binding energy of all docking modes in the affinity table is approximately -6kcal/mol, which is almost the same as the binding energy of ERα-estradiol in the reference paper. Therefore, it can be considered that the docking data generated by EasyMD is accurate. The docking data generated by EasyMD can be used to evaluate the binding energy of each engineered protein docking with estradiol to form a complex, and the results are organized in the following csv file:

【雌激素结合数据.csv】

图中标红的为每个工程蛋白的所有对接方式中最稳定，最接近参考构象的方式（即Affinity最小，RMSD值最接近0）。因此得出**结论：510C是与雌二醇结合最稳定的一种工程蛋白。125C次之，271C，374C，732C相差不多。839C最不稳定。**

In the figure, the highlighted in red represents the most stable and closest to the reference conformation among all docking modes for each engineered protein (i.e., the smallest Affinity and RMSD values closest to 0). Therefore, it is concluded that 510C is the most stable engineered protein in binding with estradiol. 125C is the next most stable, followed by 271C, 374C, and 732C, which are quite similar to each other. 839C is the least stable.

### 3. 空间折叠情况Spatial Folding Situation

然而，与雌二醇结合最稳定并不一定意味着最容易与雌二醇结合。我们认为还有其他的因素会影响工程蛋白与雌二醇的结合。比如蛋白质的空间结构。

氢键和疏水作用力是最强的两种分子间作用力，也是形成蛋白质空间结构的主要力量。要考察空间折叠情况，就可以从氢键入手。我们分析，可以观察活性位点段（即工程蛋白中雌激素受体的部分）内部的氢键数量与键长（可以衡量氢键影响的大小），同时分别关注段内氢键，段间氢键。再将氢键分为N端与C端，以求精确的分析不同方向氢键的不同影响。

利用pymol的氢键显示功能，如下图所示，我们能够观察到选中的活性位点段附近的所有氢键。于是我们写出了一个脚本（脚本内容见下），将氢键信息汇总至以下csv中。

However, the most stable binding with estradiol does not necessarily mean that it binds most easily with estradiol. We believe there are other factors that affect the binding of the engineered protein with estradiol, such as the spatial structure of the protein.

Hydrogen bonds and hydrophobic interactions are the two strongest intermolecular forces and are also the main forces that shape the spatial structure of proteins. To examine the spatial folding, we can start with hydrogen bonds. Our analysis can observe the number and length of hydrogen bonds (which can measure the impact of hydrogen bonds) within the active site segment (i.e., the part of the engineered protein that is the estrogen receptor), while also focusing on intra-segment and inter-segment hydrogen bonds. The hydrogen bonds are further divided into N-terminal and C-terminal to accurately analyze the different effects of hydrogen bonds in different directions.

Using the hydrogen bond display function of pymol, as shown in the figure below, we can observe all hydrogen bonds near the selected active site segment. So we wrote a script (the content of the script is shown below) to summarize the hydrogen bond information in the following csv file.

【export_honds.py】

【氢键数据.csv】

从中我们发现，六种不同插入位点下形成的工程蛋白，在内部，外部，N端，C端四个不同位置的氢键数目与键长几乎完全相同。考虑到组成它们的氨基酸完全相同，只是位置有区别，得到这样的结论是可以理解的。

因此**得出结论：我们很难根据氢键数量、分布及键长来判断空间折叠情况。**

From this, we found that the engineered proteins formed at six different insertion sites have almost identical numbers and lengths of hydrogen bonds at four different positions: internal, external, N-terminal, and C-terminal. Considering that they are composed of exactly the same amino acids, just in different positions, it is understandable to arrive at such a conclusion.

Therefore, we conclude that it is difficult to judge the spatial folding situation based on the number, distribution, and bond length of hydrogen bonds.

### 4. 蛋白质的溶剂可接触表面积（SASA）分析Solvent-Accessible Surface Area (SASA) Analysis of Proteins

既然很难通过氢键来判断不同工程蛋白的空间结构，我们再次转换思路——研究蛋白质空间结构的本质是为了研究蛋白质在溶剂中的反应面积大小，以此才能预测判断工程蛋白实际中与雌二醇的反应速率。

于是我们通过计算蛋白质的溶剂可接触表面积（SASA），评估插入雌激素受体后蛋白质是否增加暴露的疏水区域。即查看插入雌激素受体后，蛋白质暴露的疏水区域是否增加，增加的疏水区域可能导致蛋白质聚集或失活。

由于计算过程较为简明，我们选择CABS-flex作为计算工具。

考虑到一般的溶剂环境，我们选择的 radius of the water probe(A) 为1.4 Å，溶液环境为中性条件。

我们将计算结果汇总在以下csv中：

Since it is difficult to judge the spatial structure of different engineered proteins through hydrogen bonds, we shifted our focus again - studying the essence of protein spatial structure is to study the size of the protein's reactive area in the solvent, in order to predict and judge the actual reaction rate of the engineered protein with estradiol.

Thus, we assessed whether the insertion of the estrogen receptor increased the exposure of hydrophobic areas by calculating the solvent-accessible surface area (SASA) of the protein. That is, we checked whether the insertion of the estrogen receptor increased the exposed hydrophobic areas of the protein, and the increased hydrophobic areas may lead to protein aggregation or inactivation.

As the calculation process is relatively straightforward, we chose CABS-flex as the calculation tool.

Considering a general solvent environment, we selected a radius of the water probe (A) of 1.4 Å, and the solution environment was set to neutral conditions.

We summarized the calculation results in the following csv file:

【SASA结果csv】

根据计算结果，不同的工程蛋白间最多可差几千Å²。因此得出结论：271C的溶剂可接触表面积最大，其余的工程蛋白之间相差不到2000Å²，均明显低于271C。

Based on the calculation results, there can be a difference of up to several thousand square Ångströms (Å²) between different engineered proteins. Therefore, we conclude that 271C has the largest solvent-accessible surface area, with the others differing by less than 2000Å², all significantly lower than 271C.

### 5. 静电势分析Electrostatic Potential Analysis

除了接触面积之外，蛋白质与雌二醇均会在溶液环境中携带一定电荷，能否顺利相互吸引并结合，还受工程蛋白的电势分布影响。

pymol的APBS插件能够分析并计算电势分布，特别是活性位点周围的电荷分布。不难发现，电势分布均匀、正负电荷合理分布且未明显干扰活性位点的插入位点更优。

考虑到在生理pH条件下，雌二醇分子上的羟基(-OH)可以电离形成负电荷，则蛋白质受体最好有均匀的正电荷分布，才更有利于结合，进而发挥生物学功能。于是我们在图中标注了雌激素结合域部分的电势为1.0（可近似视作正电荷）的等势面。

In addition to the contact area, both proteins and estradiol will carry certain charges in the solution environment. Whether they can attract each other smoothly and bind also depends on the potential distribution of the engineered proteins.

The APBS plugin in pymol can analyze and calculate the potential distribution, especially the charge distribution around the active sites. It is not difficult to find that the insertion sites with uniform potential distribution and reasonable distribution of positive and negative charges without significant interference with the active sites are more optimal.

Considering that under physiological pH conditions, the hydroxyl groups (-OH) on the estradiol molecule can ionize to form negative charges, it is best for the protein receptor to have a uniform distribution of positive charges to facilitate binding and thus exert biological functions. Therefore, we have marked the potential of the estrogen binding domain as an isosurface with a potential of 1.0 (which can be approximated as positive charges) in the figure.

【6个截图：125-dianshi.png 、…… 、839-dianshi.png】

在上一部分中我们已验证雌激素的结合区域为图中红圈所示部分。对该部分进行详细观察分析。**得到结论：发现125C，271C，723C结合部分周围有巨大正电荷区域，不利于雌激素相结合；347C结合部分几乎完全无正电荷，更加难以反应；839C正电荷分布虽然均匀但较为稀疏。相比之下，510C分布最为均匀且丰富。**

In the previous section, we have verified that the binding region for estrogen is indicated by the red circle in the figure. Upon detailed observation and analysis of this part, we concluded that the binding areas around 125C, 271C, and 723C have large positively charged regions, which are not conducive to the binding with estrogen; the binding area of 347C is almost devoid of positive charges, making it even more difficult to react; although 839C has a uniform distribution of positive charges, they are relatively sparse. In comparison, 510C has the most uniform and abundant distribution.

### 6. 结论与展望Conclusion and Outlook

鉴于没有评价蛋白质效果的统一方法，我们决定以目的为导向，关于如何更高效的让工程蛋白结合雌二醇展开讨论。顾及了这一过程中绝大多数的影响因素，并找到了合适的计算工具与范式，可以作为其他同行的借鉴。

同时，经过上述的多角度分析，最优工程蛋白应是510C，他满足以下条件：

a. 蛋白质折叠稳定且关键功能域未受影响。510C与雌二醇结合后形成的复合物是能量最低的，因此最稳定，最有利于结合雌二醇。

b. SASA较大（虽然不是最大的，但是并不明显低于除了271C外的其他工程蛋白）

c. 电势分布合理，未严重干扰功能区域。

综合以上，**定性分析得出最好的工程蛋白为510C。**由于我们把插入位点相近的6种工程蛋白均用“510C”做代表，随后我们会更进一步的研究467C，492C，510C，515C，530C，540C的详细比较。不过由于结构的高度相似，在生产过程中他们的性能不会存在较大差异，可以直接以这种工程蛋白构建生物传感器。（限于实验部件没有送达原因，我们目前无法在wet lab中验证这个建模过程的正确性，不过他逻辑完备，讨论的角度多样，仍然可以作为其他同行的借鉴）

Given the lack of a unified method for evaluating the efficacy of proteins, we have decided to take a goal-oriented approach to discuss how to enable engineered proteins to bind estradiol more efficiently. We have considered the vast majority of factors affecting this process and identified suitable computational tools and paradigms that can serve as a reference for other researchers.

At the same time, after the above multi-angle analysis, the optimal engineered protein is identified as 510C, which meets the following criteria:

a. The protein folding is stable, and the key functional domains are unaffected. The complex formed by 510C binding with estradiol has the lowest energy, thus being the most stable and most conducive to binding with estradiol.

b. It has a relatively large solvent-accessible surface area (SASA) (although not the largest, it is not significantly lower than other engineered proteins except for 271C).

c. The potential distribution is reasonable and does not severely interfere with the functional region.

Combining the above, **qualitative analysis concludes that the best engineered protein is 510C.** Since we represent the six engineered proteins with similar insertion sites with "510C," we will further study the detailed comparison of 467C, 492C, 510C, 515C, 530C, and 540C. However, due to their high structural similarity, there will be no significant performance differences in the production process, and this engineered protein can be directly used to construct biosensors. (Due to the delay in the delivery of experimental components, we are currently unable to verify the correctness of this modeling process in a wet lab. Nevertheless, its logical completeness and diverse perspectives can still serve as a reference for other researchers.)





## Reference:

1.Liang,Rubing,et al."Construction of a Bacterial Assay for Estrogen Detection Based on an Estrogen-Sensitive Intein".Applied and Environmental Microbiology,vol.77,2011,pp.2488-2495,https://doi.org/10.1128/AEM.02336-10.

2.王婷.某些植物雌激素与ERα及ERβ蛋白相互作用的分子动力学研究[D].烟台大学,2020.DOI:10.27437/d.cnki.gytdu.2020.000133. 

3.Melke,Pontus,et al."A Cell-Based Model for Quorum Sensing in Heterogeneous Bacterial Colonies".PLOS Computational Biology,vol.6,2010,pp.e1000819,https://doi.org/10.1371/journal.pcbi.1000819.