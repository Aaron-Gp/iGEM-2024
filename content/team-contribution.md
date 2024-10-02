---
title: Contribution
---

## Abstrct

| Type     | Introduction                                                 |
| -------- | ------------------------------------------------------------ |
| Part     | Update experimental data of existing part                    |
| Hardware | Provide modeling files and size parameters of hardware devices |
| Software | Provide the source code of software                          |
| HP       | Provide a novel and integrated concept to conduct human practice |
| model    | Provide protein model and                                    |
| design   | Provide editable illustration materials designed by team BIT |

## Part：Experimental data 

This year, Team BIT is committed to developing a synergistic toxicological assessment system for endocrine disruptors and DNA-damaging substances. The core goal is to develop a highly sensitive microbial sensor. The principle of the sensor's response to DNA damage is based on the intein's cleavage and the bacterial SOS response, which initiates downstream transcriptional activity and expresses fluorescent proteins. We will collaboratively develop portable detection hardware to achieve efficient and portable detection outdoors. The hardware will provide an approximately anaerobic environment to ensure stable characterization under anoxic conditions. To ensure sufficient fluorescence intensity while achieving a high limit of detection, we have used BsFbFp as the final characterization signal and registered part [BBa_K5358010](https://parts.igem.org/Part:BBa_K5358010).

See more in [**result**](https://2024.igem.wiki/bit/result)

## **Hardware :Modeling files and Size parameters**

This year's BIT team has developed a high-throughput EDCs detection platform characterized by its compact, portable, and highly integrated design, demonstrating excellent performance in testing. We will provide detailed insights into the hardware design philosophy, structural construction, and implementation methods. Additionally, we will make all parts' SolidWorks 3D models publicly available, hoping that other teams can replicate our product or draw some inspiration from it.

### **Design Philosophy:** 

The goal of the hardware device is to construct a platform that includes a reaction vessel, temperature control, and fluorescence detection. To achieve this, we adopted the typical engineering and project design approach as shown in Figure 1, underwent several design iterations, and ultimately selected an integrated, high-throughput solution.


![img](https://static.igem.wiki/teams/5358/contribution/hardware-fig1.png)

[Figure 1 Hardware Design Flowchart]{.fig-title}

### **Structural Construction:**

The final structure is primarily divided into a sampling area and a detection area.


l Sampling Area: An aluminum alloy temperature-controlled slot houses multiple reaction tubes, with temperature control achieved through a temperature control module.

l Detection Area: A linear slide rail drives the fluorescence detector to sequentially inspect each reaction tube, enabling high-throughput detection. 

The functions of each module are centrally controlled using an MCU chip.


![img](https://static.igem.wiki/teams/5358/contribution/hardware-fig2.png) 

[Figure 2 Hardware Structure Diagram]{.fig-title}

### **System Implementation:**

The main components selected for the hardware device are shown in the table below:

|                                  | ***components*** |
| -------------------------------- | -------------------- |
| ***MCU***                    | Arduino Nano ESP32   |
| ***Temperature Control***    | TCM1040              |
| ***Temperature Sensor***     | NTC                  |
| ***Heat Source***            | Heating FILM         |
| ***Fluorescence Detection*** | FM-4A                |
| ***Reaction Platform***      | Slide Rail Platform  |
| ***Motor Drive***            | 2830 Stepper Motor   |
 


![img](https://static.igem.wiki/teams/5358/contribution/hardware-fig3.png) 

[Figure 3 Final Model Diagram]{.fig-title}

Please contact us via the email address at the bottom to obtain all component models and the complete modeling files!

## **Software :The Source Code**

The software portion of this project involved the design of a mobile app that leverages Bluetooth communication to automate control of the hardware device and to acquire fluorescence signals in real-time. The signals, after data processing, yield detection results that are then visualized.

The project's software is written in QT. Please contact us to obtain the source code!

## Human Practice：New concept of Conducting HP 

### “BRIEF”cycle for conducting HP

![](https://static.igem.wiki/teams/5358/ihp/brief.jpg)

This year, we innovatively put forward the "BRIEF" cycle to guide the development of Human Practice. This system divides HP's work into five phases: Brainstorming, Researching, Insight Integrating, Executing and Adjusting, and Feedback recollecting. iGEMer will propose a project with both research and practical significance through Brainstorming, and conduct in-depth investigation on the relevant field through Researching. After Insight Integrating, Executing and Adjusting, Feedback Recollecting, a logical closed loop will be formed, putting forward ideas, searching for significance, seeking external insights, and constantly connecting our project with the world.

See more in [**Human-practices**](https://2024.igem.wiki/bit/human-practices)

## Model: Protein Model

In our bio-detection project this year, we've integrated a hormone-sensitive intein into T7 RNA polymerase to create a recognition element for environmental endocrine disruptors (EDCs). The intein is inserted following a cysteine residue at the C-terminus of the host protein. With 12 cysteines in T7 RNA polymerase, this provides 12 potential insertion sites.

To analyze all possible insertions, we first modeled the protein with the intein at each of the 12 sites. These models serve as a reference for other iGEMers. We then analyzed these models from various perspectives: molecular docking, spatial folding, protein SASA (Surface Area Solvent Accessible) analysis, and electrostatic potential analysis. These processes offer a roadmap for other iGEMers in protein analysis work.

For spatial folding analysis, we wrote a script to identify hydrogen bonds in proteins. The script is available on our wiki for any iGEMers who need it.

See more in [**Model**](https://2024.igem.wiki/bit/model)

## Design: Editable Illustration Materials

This year, our graphic designer, Li Sixuan, has created a series of wiki elements with a unique style, including animations for the home page as well as borders and decorations for each interface. These wiki elements can be referred to by all iGEMers and can be downloaded at any time from our website.

![](https://static.igem.wiki/teams/5358/contribution/art3.png)

![](https://static.igem.wiki/teams/5358/contribution/art2.png)

![](https://static.igem.wiki/teams/5358/contribution/home-3.png)
