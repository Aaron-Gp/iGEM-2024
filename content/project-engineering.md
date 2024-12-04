## Overview

The goal of the BIT team is to build a gate circuit that can work effectively in a low-oxygen environment and integrate miniaturized devices as a reaction platform to adjust application requirements. Therefore, we followed the DBTL principle and the engineering design cycle, dividing our work into two modules: Biosensor and Hardware.

## Biosensor

### Luminescence

#### Circle: Design recA-BsFbFp

##### Design

​In order to adapt to the low oxygen environment of the hardware design, we replaced the egfp gene, which strictly requires oxygen molecules as a cofactor for its luminescence, with the reporter gene BsFbFp. This gene can effectively express fluorescent signals in low or anaerobic environments.

##### Build


![BsFbFp circuits](https://static.igem.wiki/teams/5358/engineering-success/bsfbfp-circuits.png)

[Figure 1. BsFbFp circuits]{.fig-title}


​Genetic circuit: Gene recA and BsFbFp were all synthesized by Sangon Biotech according to BIOBRICK standard, and the gene circuit was obtained by PCR and verified by agarose gel electrophoresis.



![build results of BsFbFp ](https://static.igem.wiki/teams/5358/engineering-success/build-results-of-bsfbfp.png)

[Figure 2. Build results of BsFbfP]{.fig-title}


​Construction of plasmid: The results of the agarose gel electrophoresis successfully showed bands for recA, the vector and BsFbFp, confirming that the gene circuit was successfully connected to the vector.

​Ideal Strain: The successfully constructed plasmid was transformed into BL21 competent cells and cultured on LB solid medium with ampicillin.

##### Test

​Adding 600μL of bacterial solution and 30μL of ampicillin to 30mL of fresh culture medium, logarithmic growth was performed. Then, NA (Nalidixic Acid) was added in a gradient based on concentration to induce the bacteria. Subsequently, 250μL from each group was added to a anaerobic chamber and incubated on a shaking incubator at 37°C with a speed of 180 r/min. After 2 hours, the OD value and fluorescence intensity were measured.


![RFU-BsFbFp in 10lianpaichip(anaerobic chamber)](https://static.igem.wiki/teams/5358/engineering-success/rfu-bsfbfp-in-10lianpaichip-anaerobic-chamber.jpg)

[Figure 3. RFU-BsFbFp in 10lianpaichip(anaerobic chamber)]{.fig-title}


​The RFU (Relative Fluorescence Units) of the three groups of engineered bacteria increased linearly with the amount of NA (Nalidixic Acid) added. The results indicate that the fluorescent expression circuit of BsFbFp has been successfully constructed, and the engineered bacteria can effectively express fluorescence in an anaerobic environment.

##### Learn

​In conclusion，the plasmid constructed using BsFbFp as a reporter gene can effectively express fluorescence in low-oxygen or anaerobic environments, which is beneficial for the design of the hardware components.

​So we believed that the work in this cycle has been successfully accomplished., and we obtained the engineered bacteria needed for our goals.

### AND Gate Design

#### Circle 1: Design pET28-recA-HRP-egfp 

##### Design

​To construct the and gate, we introduced the hrp system, composed of the hrpR gene and hrpS gene, as well as the HrpL promoter regulated by the sigma54 factor. The hrpL promoter will only be activated when both the hrpR gene and the hrpS gene are expressed simultaneously.

​In 2023, the BIT team successfully constructed P recA, the Hrp system, and egfp on the pUC19 plasmid. However, tests showed that the expression level of the circuit constructed using the pUC19 plasmid as a vector was relatively low, significantly deviating from the expected results. Therefore, we plan to switch to the pET28 plasmid, which has a more prominent expression level, to facilitate the synergistic assessment of endocrine disruption effects and oxidative damage effects.

##### Build

​Genetic circuit: recA-HRP-egfp were synthesized by Sangon Biotech according to BIOBRICK standard， the pET28 was obtained by enzyme digestion and the gene circuit was obtained by PCR.


![Cir1-1](https://static.igem.wiki/teams/5358/engineering-success/cir1-1.png)

[Figure 4. enzyme digestion result of circle 1]{.fig-title}

​
The results of the agarose gel electrophoresis indicated that the vector was successfully digested and the target fragment was successfully amplified by PCR. The ligation was carried out at a 1:4 ratio of vector to target fragment, followed by transformation into DH5α competent cells and verification through agarose gel electrophoresis.


![Cir1-2](https://static.igem.wiki/teams/5358/engineering-success/cir1-2.png)

[Figure 5. build result of circle 1]{.fig-title}

​
Verification results: In multiple rounds of construction validation experiments, the target fragment showed no band in the agarose gel electrophoresis results, and the restriction enzyme digestion verification indicated self-ligation of the vector, proving that the construction in this cycle has failed.

##### Test

​Due to the failure of the target plasmid construction in this cycle, it is necessary to analyze the issues present in the plasmid design and construction process and make corrections.

##### Learn

​During this construction process, we overlooked the reagent concentration ratio of the vector to the target fragment in our ligation system, which may be a major factor contributing to the failure of ligation. We plan to introduce the concentration factor of the ligation reagents into the ratio to improve the efficiency of ligation.

#### Circle 2: Adjust the ligation system and reconstruct the plasmid pET28-recA-HRP-egfp.

##### Design

​Based on the experience learned from Circle 1, we plan to use a new ligation system, increase the dosage of the target fragment, and improve the ligation efficiency.

##### Build

​The construction process used three different ligation systems, with the ratios of vector to target fragment being 1:4, 1:5, and 1:6, respectively. The constructed plasmids were extracted and verified by PCR followed by agarose gel electrophoresis.


![Cir2](https://static.igem.wiki/teams/5358/engineering-success/cir2.png)

[Figure 6. built result of circle 2]{.fig-title}

​
Construction of plasmid: In the multi-round adjustment experiments of the ligation system construction, the agarose gel electrophoresis results still did not show a band for the target fragment, indicating that the construction in this cycle was unsuccessful.

##### Test

​Due to the failure of target plasmid construction in this cycle, testing cannot be carried out.

##### Learn

​In this cycle, we have corrected the ligation system, removing this influencing factor. Therefore, we suspect that the low partial digestion efficiency at the target sequence enzyme cutting sites may be the cause. This could be due to issues with the setting of protective bases near the enzyme cutting sites when designing the PCR primers, leading to another ligation failure. As such, we plan to redesign the PCR primers and increase the number of protective bases on both sides of the enzyme cutting sites from one or none to three to improve the success rate of the ligation.

#### Circle 3: Redesign the primers, increase protective bases, and reconstruct pET28-recA-HRP-egfp

##### Design

​Based on the experience learned from Circle 2, we have redesigned the PCR primers for the target fragment and added protective bases to them, and we are reconstructing the pET28-recA-HRP-egfp plasmid.

##### Build

​After changing to new PCR primers and setting the protective bases on both sides of the restriction enzyme cutting sites to 3, the construction was carried out. Genetic circuits: recA-HRP-egfp were synthesized by Sangon Biotech according the BIOBRICK standard, the pET28 was obtained by enzyme digestion and the gene circuit was obtained by PCR.


![Cir3](https://static.igem.wiki/teams/5358/engineering-success/cir3.png)

[Figure 7. built result of circle 3]{.fig-title}

​
The agarose gel electrophoresis results showed that after redesigning the PCR primers and increasing the number of protective bases on both sides of the restriction enzyme cutting sites from one or none to three, only one band was observed for the target fragment, indicating that the new PCR primers have strong specificity and the target fragment was successfully obtained.
​
However, due to time constraints, we did not proceed with the subsequent experiments.

##### Test

​Limited by time, we were unable to complete the reconstruction, and therefore have no test results.

##### Learn

​In this cycle, the new PCR primers and the addition of protective bases at both ends of the restriction enzyme sites are beneficial for improving the success rate of enzyme ligation, thereby providing an experimental basis for the successful construction of the gate circuit.

## Hardware

#### Objectives

1. To provide a high-throughput portable reaction vessel.

2. To provide stable physical conditions for detection.

3. High-sensitivity fluorescence detection.

#### Design

​Our entire device mainly consists of three major parts: the outer casing that encases the entire device, the reaction area located in the upper layer, and the detection area situated in the lower layer. In the initial design, we utilized an STM32 chip as the main controller to regulate temperature control, fluorescence detection, and Bluetooth communication functions. In the second iteration, we replaced the main controller with an ESP32 chip that integrates a wireless communication module, and we adopted integrated temperature control and detection modules, which further enhances the system's stability and accuracy. To meet the need for simultaneous detection of multiple samples, we also redesigned the high-throughput reaction chambers, achieving rapid successive detection through a linear slide rail system.


|                                  | ***Initial Scheme*** | ***Final Scheme*** | ***Advantages After Improvement***                       |
| -------------------------------- | ------------------------ | ---------------------- | ------------------------------------------------------------ |
| ***MCU***                    | STM32F103C8T6            | Arduino Nano ESP32     | Integrate Bluetooth communication module, reduce the complexity of the design |
| ***Temperature Control***    | TB6612FNG                | TCM1040                | More precise control of temperature                          |
| ***Fluorescence Detection*** | AS7341                   | FM-4A                  | Integrate excitation light and fluorescent sensor to make the detection result more stable. |
| ***Reaction Platform***      | Single Reaction Tube     | Slide Rail Platform    | Achieve high-throughput detection                            |

[Table 1. Scheme difference]{.tab-title}

​
In terms of material selection, we have adopted a black silicone kit and an aluminum alloy temperature-controlled slot as the environment for the centrifuge tubes. This scheme can excellently meet the insulation requirements of the design.


![Edition Scheme Process](https://static.igem.wiki/teams/5358/engineering-success/edition-scheme-process.png)

[Figure 8. Edition Scheme Process]{.fig-title}


#### Establishment

​The system construction utilized common integrated modules, with the main controller being an ESP32 chip, and temperature control and detection were accomplished using the TCM temperature control module and LIDE Technology's FM series digital fluorescence detection module, respectively. We employed industrial processing techniques to fabricate the aluminum alloy temperature-controlled slots, while the casing and other components were created using 3D printing technology.


![Schematic Diagram of Hardware Equipment](https://static.igem.wiki/teams/5358/engineering-success/new.png)

[Figure 9. Schematic Diagram of Hardware Equipment]{.fig-title}


![Model Diagram of Hardware Equipment](https://static.igem.wiki/teams/5358/engineering-success/model-diagram-of-hardware-equipment.png)

[Figure 10. Model Diagram of Hardware Equipment]{.fig-title}

#### Test

​After finalizing the initial plan, we first carried out feasibility tests to verify the functionality of the fluorescence system and the temperature control system. After assembling the initial version of the model, numerous issues were identified through usage testing and preliminary risk analysis, such as the susceptibility of the fluorescence system to interference and the instability of the temperature control system. Through a cycle of testing, feedback, improvement, and retesting, the final version of the model demonstrated excellent performance across all aspects. Experiments showed that fluorescence identification was highly accurate, and the overall aesthetics were significantly enhanced.


![Results of Temperature Control Experiment](https://static.igem.wiki/teams/5358/engineering-success/results-of-temperature-control-experiment.png)

[Figure 11. Results of Temperature Control Experiment]{.fig-title}


![Results of Flurescence Verification Experiment](https://static.igem.wiki/teams/5358/engineering-success/results-of-flurescence-verification-experiment.png)

[Figure 12. Results of Flurescence Verification Experiment]{.fig-title}

#### Learn

​During the process of designing the device, we encountered various challenges, such as overly complex control systems, insufficient stability, inability to conduct multi-sample testing, and issues with the optical path design. Throughout the real-time testing and discussion phases, we continuously documented various issues, proposed improvement plans, and actively sought help from knowledgeable teachers and consultants. Eventually, we completed a hardware design that met the requirements. Through continuous learning, improvement, and questioning, our expertise in the relevant fields has been greatly boosted.

## Software

#### Objectives

1. To implement human-machine interaction for information exchange with hardware.

2. To automatically process data sent by the hardware.

3. To visualize data.

#### Design

​The main body is divided into two parts—the Bluetooth reception module and the plotting module.

#### Bluetooth module receives data


```
CREATE discoveryAgent AS new BluetoothDeviceDiscoveryAgent
​
CONNECT discoveryAgent.deviceDiscovered TO this.deviceDiscovered
CONNECT discoveryAgent.finished TO this.onDeviceConnected
​
// Start searching for Bluetooth devices
CALL discoveryAgent.start()
​
// Initialize Bluetooth Socket
CREATE socket AS new BluetoothSocket USING RfcommProtocol
​
// Connect button click signal to send STARTSTART command
CONNECT ui.pushButton.clicked TO this.sendStartSignal
```


#### Plotting module performs data visualization

```
FUNCTION updateGraphs()
  // Create canvas
  CREATE new scene
  SET scene to graphicsView
​
  // Draw temperature graph
  FOR i FROM 1 TO size of temperatureData - 1 DO
    ADD line FROM (i-1, temperatureData[i-1]) TO (i, temperatureData[i]) WITH color red
​
  // Draw fluorescence intensity graph
  FOR i FROM 1 TO size of fluorescenceData - 1 DO
    ADD line FROM (i-1, fluorescenceData[i-1]) TO (i, fluorescenceData[i]) WITH color blue
​
  UPDATE graphicsView
END FUNCTION
```

#### Data segmentation module

```
FUNCTION splitAndFindMax(dataPoints, zeroThresholdCount)
    INITIALIZE maxValues AS empty list
    INITIALIZE currentSegment AS empty list
    SET zeroCount TO 0
​
    FOR each point IN dataPoints DO
        IF point.value == 0.0 THEN
            INCREMENT zeroCount
            IF zeroCount >= zeroThresholdCount THEN
                IF currentSegment is not empty THEN
                    SET maxVal TO maximum value in currentSegment
                    ADD maxVal TO maxValues
                    CLEAR currentSegment
                    SET zeroCount TO 0  // Reset the counter​
                CONTINUE  // Skip the current point, do not include in currentSegment​
            END IF
        ELSE
            SET zeroCount TO 0  // Reset the counter because a non-zero value was encountered
        END IF
​
        //Add the current point to the currentSegment
        ADD point TO currentSegment
    END FOR
​
    // Process the last segment
    IF currentSegment is not empty THEN
        SET maxVal TO maximum value in currentSegment
        ADD maxVal TO maxValues
    END IF
    RETURN maxValues
END FUNCTION
```


