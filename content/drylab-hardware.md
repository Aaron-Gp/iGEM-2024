---
title: Hardware
---

This year, the core objective of the BIT team is to develop **a initiative detection system for EDCs in aquatic environments based on E.coli biosensors.** Traditional detection methods, such as chromatography and immunoassays, require cumbersome procedures like sampling, pre-treatment, and laboratory examination, in addition to expensive laboratory equipment (e.g., chromatographs, microplate reader) and professional experimental techniques. These methods are time-consuming and costly.

As EDCs continue to threaten aquatic environments and the quality of drinking water for residents, it is crucial to achieve portable detection and rapid response to EDCs. To meet the requirement, our goal is to develop a low costing, highly integrated, compact, portable, and user-friendly hardware platform that can be combined with smartphone software to automate the cultivation of engineering bacteria and the analysis of fluorescence **detection**.

To ensure that the hardware device truly meets the needs of system construction, we have adopted a typical engineering and project design approach, namely: **demand analysis, scheme proposal, feasibility verification, feedback , system improvement, and goal achievement.** This process is an iterative one, and after several cycles, it ultimately meets all the needs and objectives.

![](https://static.igem.wiki/teams/5358/hardware/1.png)

[Figure 1 Hardware Design Flowchart]{.fig-title}


## Demand Analysis

To ensure the stability and accuracy of **fluorescence detection**, it is necessary to standardize the detection process and use high sensitive detection units.

Standardization of the detection process requires a continuous and stable chemical and physical environment during the resuscitation of engineering bacteria and fluorescence detection. The standardization of the chemical environment is mainly ensured by the quantified operation of experimental steps (including control of sample volume and the number of engineering bacteria, control of the chemical composition and concentration of the culture medium), and the standardization of the physical environment is mainly ensured by the stability of light source, temperature, and humidity. Among them, light exposure problem has been solved by the sealed and light-proof nature of the device, and the humidity in the sealed environment is mainly determined by temperature. The standardization of the detection process mainly aims to achieve **constant temperature control** of the hardware device.

Since the concentration of **EDCs** in the detection samples is very low，which also refer to the low intensity of fluorescence, coupled with the portability requirements of the equipment, the detection method required must be high sensitive and can be integrated into small devices. Common chemical detection methods cannot meet the requirements, so adopting a more sensitive, portable, and efficient detection method is crucial for the realization of our POCT system.

In order to enable smartphone software to automate the control of hardware devices and visualize the detection results, the construction of hardware devices needs to consider the transmission of data between software and hardware.


## Scheme Proposal

![](https://static.igem.wiki/teams/5358/hardware/2.png)

[Figure 2 First Edition Design Scheme]{.fig-title}


![](https://static.igem.wiki/teams/5358/hardware/3.png)

[Figure 3 Circuit Diagram]{.fig-title}


In the construction of the **temperature control module**, we employed an NTC thermistor as the **temperature sensor**, utilizing heating FILM and fan as the heat and cold sources respectively. To achieve **PID regulation** for **temperature sensing and control**, we used the PWM wave output from the **TB6612FNG motor drive** to adjust the power of the fan and heating FILM, thereby maintaining dynamic temperature stability.

For the selection of the detection scheme, we comprehensively considered the detection accuracy and the portability of the device, ultimately choosing the **fluorescence detection module**. We initially selected the AS7341 as **fluorescence sensor** [1]. Concurrently, to ensure consistent fluorescence generation, we redesigned and optimized the optical path.

After the marked fluorescence is excited by a blue LED, the fluorescence sensor collect and record real-time fluorescence signals, which can be visualized on the mobile software via a **communication module**.

For the communication module, we used the HC-05 Bluetooth module to connect the hardware system with the mobile software, enabling real-time monitoring of the hardware device's operating status and feedback of the detection results.

In the initial version of the scheme, we used an STM32 chip as the **microcontroller Unit(MCU)**, connecting temperature control module, fluorescence detection module, and Bluetooth communication module, ensuring the normal operation of the device through programming instructions.


::mdc-wrap{:class="table-fig"}

| ![](https://static.igem.wiki/teams/5358/hardware/4.png)   | ![](https://static.igem.wiki/teams/5358/hardware/5.png)   |
| :------------------------------------------------------------: | :-----------------------------------------------------------: |
|   Figure 5:  First Edition Implementation Scheme                                                           |  Figure 6: First Edition Equipment Model Diagram                                                            |

::



### Feasibility Verification

### Temperature Stability Verification

To verify the constant temperature effect of the temperature control system, we designed a temperature stability test experiment. When the temperature first reached 37°C, the temperature was recorded every 10 seconds for an additional 60 seconds. From the results shown in Figure 6, it can be concluded that the absolute difference between the average temperature and the set temperature was no greater than 1.1°C, and the temperature curve consistently fluctuated around 37°C. This indicates that the temperature control system can achieve dynamic temperature regulation, capable of maintaining the temperature close to 37°C. However, this temperature control method generates relatively large temperature fluctuations.


[![](https://static.igem.wiki/teams/5358/hardware/6.png) ![](https://static.igem.wiki/teams/5358/hardware/7.png)]{.flex .gap-4}

[Figure 7 Measurement Results of  Initial Scheme's Temperature Stability]{.fig-title}

### Gradient Fluoresce in Sodium Fluorescence Detection Verification

The AS7341 fluorescence sensor, by integrating filters of different wavelength bands, achieves the function of detecting light intensity (Lux) at specific wavelengths, which is equivalent to detecting the corresponding fluorescence intensity. To verify whether this sensor can correctly reflect the signal from the sample, we designed an experiment to explore the relationship between the concentration gradient of fluoresce in sodium and Lux. We prepared a series of fluoresce in sodium solutions with different gradients in a 2mL centrifuge tube for signal collection using the AS734. The results shown in Figure 8 indicate that the measured Lux values have a good linear correlation with the concentration gradient of fluoresce in sodium, demonstrating that our fluorescence detection module can accurately reflect the concentration of substances and is capable of conducting fluorescence detection.

![](https://static.igem.wiki/teams/5358/hardware/8.png)

[Figure 8 Initial Scheme's Fluorescence Verification Fitting Curve]{.fig-title}

The above feasibility verification demonstrates that the temperature control module and fluorescence detection module designed in the first version of the scheme can meet the design requirements and are feasible.



## Feedback

We engaged in in-depth discussions with the biology team, design team, and professional instructors regarding our hardware design, obtaining extremely valuable feedback. This feedback is instrumental in guiding our further improvements.

**1.MCU:** The STM32 requires an external wireless communication module to implement Bluetooth functionality, which increases the complexity of the design.

**2.Temperature Control Module:** Using the TB6612FNG to drive temperature control presents issues with heat dissipation and difficulties in achieving integration.

**3.Detection Module:** The scheme of combining a fluorescence sensor with an optical path tends to have fluctuations in the excitation light source, and the optical path alignment is challenging and susceptible to environmental interference.

**4.Biological Requirements:** The current design only allows for single detection, and frequent changes in the **reaction tube** can affect the stability of the detection environment, ultimately leading to inaccurate results.

In response to the issues raised and the suggestions from the instructors, we have made improvements based on the original design.

**![](https://static.igem.wiki/teams/5358/hardware/9.png)**

[Figure 9 Improved Design Scheme]{.fig-title}


Firstly, we replaced the STM32F103C8T6 with the Arduino Nano ESP32 chip as the MCU. The ESP32 features built-in Bluetooth communication capabilities and a rich set of peripheral interfaces. It supports the CMake and Ninja build systems, which will greatly simplify the design complexity. Its widespread adoption globally will also make it more universal and laying a foundation for future teams looking to design similar devices. For temperature control and detection, we replaced the original scheme with the TCM1040 temperature control module and the FM-4A digital fluorescence detection module from LIDE Technology, respectively. Compared to the original scheme, these modules offer more integrated features, further enhancing the accuracy and stability of the platform.

![](https://static.igem.wiki/teams/5358/hardware/10.png)

[Figure 10 Improved Design Circuit Diagram]{.fig-title}

To meet the demand for high-throughput detection, we proposed two solutions: a microfluidic chip rotation detection platform and a linear slide rail detection platform. After modeling analysis and feasibility analysis, we ultimately chose the linear slide rail detection platform and designed a brand-new enclosure for it.

![](https://static.igem.wiki/teams/5358/hardware/11.png)

[Figure 11 Implementation Plan of the New Equipment]{.fig-title}


![](https://static.igem.wiki/teams/5358/engineering-success/new.png)

[Figure 12 Model Diagram of the New Equipment]{.fig-title}


### Goal Achievement

#### Final Product

The final system is primarily divided into a **sampling area** and a **detection area.** In actual use, the freeze-dried engineering bacteria will be mixed with multiple samples to be tested in separate reaction chambers for cultivation, awaiting detection.Upon receiving operational commands from the software, the device rapidly heats the aluminum alloy temperature-controlled slot in **the sampling area** and maintains a constant temperature, while also providing real-time feedback of the temperature and the operational status of the system to the mobile software interface via Bluetooth. Concurrently, the fluorescence detection module in the detection area begins to sequentially detect the fluorescence signals of each reaction chamber along the slide rail and provides real-time feedback to the software's visual interface. When the engineering bacteria grow to a certain extent, the intensity of the fluorescence signal will reflect the degree of endocrine disruptor effects.

##### Functional Testing

Temperature Control Capability Test

We conducted another temperature stability test on the latest version of the system. The results shown in Figure 12 indicate that the absolute difference between the average temperature and the set temperature is less than 0.3°C, suggesting that the stability of the improved temperature control system has been further enhanced. This can well meet practical requirements.

 
[![](https://static.igem.wiki/teams/5358/hardware/13.png) ![](https://static.igem.wiki/teams/5358/hardware/14.png)]{.flex .gap-4}

[Figure 13 Measurement Results of Temperature Fluctuation]{.fig-title}


##### Gradient Fluorescein Sodium Fluorescence Detection Verification

The fluorescence validation test of the latest equipment shows that the tested Relative Fluorescence Units (RFU) values have a good linear relationship with the concentration gradient of fluorescein sodium. This indicates that the new fluorescence detection module can effectively reflect the concentration of substances, meeting the usage requirements.

![](https://static.igem.wiki/teams/5358/hardware/15.png)

[Figure 14 Fluorescence Verification Experiment Fitting Curve]{.fig-title}

## Android Software

We have conducted functional testing on the already designed software. Initially, the software is imported onto an Android phone and the Bluetooth module is connected to check for a normal connection. The software is then opened to inspect whether the UI (User Interface) design is complete. Subsequently, the signals received from the module are used to test the graph plotting functionality to ensure it operates correctly, and the system is optimized based on the results.

## Data Reception Verification

Signals for initiation are transmitted from the mobile phone to the MCU via Bluetooth. As can be seen from the diagram, the hardware successfully starts up and returns a designated identifier.

## Data Plotting Verification

During operation, the MCU sends data to the mobile phone via Bluetooth. The mobile phone then parses this data and plots graphs of time-temperature and time-fluorescence intensity. The diagrams indicate that the program has successfully implemented its functionalities.

## Improvement

Due to the addition of a linear slide rail for the movement of fluorescence detection in the second version of the hardware design, the signals obtained from the fluorescence detection have also changed. Therefore, the program is required to implement the ability to distinguish between the fluorescence intensity pulse peaks of different channels and to obtain their respective maximum values (theoretically, the fluorescence intensity at the bottom of the tube) for plotting.

## Array Splitting and Plotting Verification

We can observe a set of data with multiple pulse peaks returned by the MCU. The software successfully splits this data into several different arrays and obtains the maximum value from each array for plotting.

## Summary

The final product and its testing demonstrate that the proactive detection system for EDCs we have developed is compact, portable, and user-friendly. It effectively controls the standardization of cultivation conditions, enabling rapid screening and assessment of EDCs in wastewater, significantly reducing reliance on laboratory equipment and professional personnel. Additionally, the system's high-throughput operation allows for the simultaneous detection of multiple samples, thereby conducting sample testing more efficiently. 

In designing the hardware, we employed engineering and project design approaches, taking into account target requirements and user feedback. Our instructor, Professor Li Xiaoqiong, recommended replacing the STM32 chip with the ESP32 chip, which will aid in enhancing the readability and versatility of the design. During testing and actual use, we collected feedback from operators and utilized a high-throughput platform, facilitating users to test multiple samples conveniently.

To facilitate user operation, we have added detailed user instructions in the App and will record demonstration videos for ease of use. At the same time, we have organized detailed system design blueprints and modeling files, as well as detailed component selection and manufacturing methods. You can contact us on the contribution page to obtain the relevant documents, thereby assisting other participants in replicating our device. Our main controller and major systems utilize common integrated units, while other parts are made using industrial processing and 3D printing techniques, making them easy to replicate for reference and implementation by other teams.

[*References*]{.text-2xl}

::mdc-wrap{:class="reference"}

1. Wang Y, Chen H, Lin K, et al. Ultrasensitive single-step CRISPR detection of monkeypox virus in minutes with a vest-pocket diagnostic device[j]. Nature Communications, 2024, 15(1):3279.

::
 