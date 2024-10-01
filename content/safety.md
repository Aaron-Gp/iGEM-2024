---
title: Safety
---

Synthetic biology has the ability to change the world in amazing ways. From treating cancer to alleviating the climate crisis, we do have the ability to build a better world at iGEM. However, by working with some unpredictable organisms, we must also understand that the good works we create can actually cause harm. When looking at the big picture, we must also understand that we must be carefully every day. As researchers, we need to manage the community and environmental risks.



## The rules and policies of the iGEM

1. Release Beyond Containment: You cannot release or deploy any genetically modified organisms outside the lab. You must Check In before bringing any product of synthetic biology outside of the lab.
2. White List: You must Check In before beginning experiments with any organism, part, or activity that is not on the White List.
3. No Human Experimentation: Testing your project on humans (including yourselves) is strictly prohibited. You must check in before beginning any laboratory experiments involving humans or human samples (including but not limited to blood, DNA, other bodily specimens, and health or psychological outcomes).
4. Animal Use: You must Check In and submit an Animal Use Form before beginning any experiments involving animals or animal samples. This includes vertebrates (e.g. rats, mice, guinea pigs, hamsters, amphibians, and fishes) and higher order invertebrates(e.g. cuttlefish, octopus, squid, lobster, bees, or American or German cockroaches). 
5. Human Subjects Research: All human subjects research (e.g.surveys, interviews, public engagement) you carry out must be done in accordance with relevant laws and regulations, as well as any institutional rules or guidance. 
6. Antimicrobial Resistance: You must Check In before beginning experiments likely to increase the risk posed by antimicrobial resistance (e.g. by using novel resistance factors, adding known factors into new organisms, or resistance factors not previously used in your facility).
7. Gene Drive: Gene Drive is not allowed in iGEM projects without a special exception from the Safety & Security Committee.
8. Coronavirus: Any work using live SARS-CoV-2 virus(the causative agent of COVID-19) must follow World Health Organization (WHO) guidance, in addition to all local and institutional rules. WHO guidance may be stricter than local safety rules. You must Check In before beginning experiments with live SARS-CoV-2 or parts from SARS-CoV-2. 
9. Environmental Samples: As long as parts or organisms are not isolated from them, samples from the environment, the food industry, or other non- traditional suppliers may be used in your experiments You must Check In before using any parts organisms obtained from outside the lab or from non- traditional suppliers.

## Project safety

### Safety of project design

Our project employs the insertion of RecA intein into T7 RNAP to detect endocrine disruption effects and utilizes the SOS response mechanism of Escherichia coli to detect DNA damage. Additionally, the LuxI/R system is introduced to achieve an AND gate detection of both effects. Furthermore, the Hrp gene regulation system and BsFbFp fluorescent gene are combined to amplify the transcriptional signal and ensure effective signal expression under anaerobic conditions; in the hardware section, we have designed a high-throughput platform for automated sample detection. Throughout our entire experimental process, our team has conducted experiments using qualified E. coli strains such as BL21, DH5a, and MG1655, as well as plasmid vectors pUC19 and pET28. These E. coli strains are classified as Biosafety Level I and have been handled in a sterile environment. 

According to the WHO Laboratory Biosafety Manual, the risks involved in our experiments are Level I (no risk or very low risk).

### Project Hardware Security

- Disposable Reaction Vessels: We utilize disposable PCR tubes as reaction vessels, which means that there is no need for contact with the biological system at the start of the reaction, thus eliminating concerns about genetic modification organism contamination.

- No Direct Contact: Users only need to add the sample liquid to the reaction chamber; unless necessary, it is not recommended to open our device.
- Sealed Containers: The reaction chamber is completely sealed, so unless the user intentionally breaks it, there will be no opportunity for the user to come into contact with the reagents inside.
- Automated Control: All operations after adding the sample can be controlled automatically through a mobile app, without the need for manual operation of the device.
- Modular Design: If the device is damaged, only the specific part needs to be replaced, without the need for disassembly.

### Engineering Bacterial System

Our project utilizes Escherichia coli as an engineered strain, relying on genetically designed circuits to specifically identify trace amounts of endocrine disruptors and elicit a response. In this process, the engineered strain's response is susceptible to factors such as cellular status, physiological conditions, and environmental influences; moreover, there is a possibility of the substances produced by the reaction leaking into the environment.

![safety-hardware](https://static.igem.wiki/teams/5358/safety/hardware.webp) 

Our hardware is capable of addressing these challenges. The device is designed using a modular approach. We provide users with sealed reaction vessels, thereby minimizing the need for direct contact with chemical reagents. The device features a light-blocking cover and a constant temperature control system that provide our Escherichia coli with a stable, light-protected, and temperature-controlled environment to match their optimal working conditions.

To prevent contamination of our system and the environment, we have implemented the following designs:

1. The fluorescence detection module is covered with a black nylon protective sleeve to provide a dark chamber, reducing the interference of background light on the detection results.
2. The cover is extended around to prevent substances produced by the reaction from escaping into the atmosphere, ensuring biosafety.
3. Disposable reaction vessels are used, and they are subjected to specialized biosafety treatment after the detection is completed.

## Laboratory security

All laboratories in China must be accredited by the Office of the Ministry of Environment in accordance with the standard `LST EN ISO/IEC 17025:2018`. To ensure safety, team members must comply with all essential safety protocols before working in different laboratories. Prior to entering the lab, each team member is required to familiarize themselves with the experimental manual beforehand, and to receive training on experimental safety measures.

All team members must familiar themselves with the safety features in the lab, such as

1. Fire Extinguisher;

2. First Aid Kit;

3. Biosafety Cabinet;

4. Flame Retardant Benches;

5. the Nearest Safety Shower;

Wastes after experiments must be properly disposed, following not only following rules,

1. Used pipette tips, gels, eppendorf and so on, should be threw into particular biohazard waste bins;

2. Bacteria solutions and reagents could be disposed only after high-pressure sterilization;

3. Toxic or acidic/basic reagents must be neutralized before disposal;

Other rules such as,

1. Pay attention to the disinfection of the test bench and experimental equipment, and the equipment contacting biological materials should be autoclaved;

2. Properly handle and store hazardous and(or) combustible materials;

3. Dress code: lab coats, masks, trousers(shorts are forbidden);

4. Long hair should be tied up;

5. etc.

Our experiment team strictly abides by the following experiment manuals or regulations throughout the experiment:

WHO,Laboratory Biosafety Manual

https://www.who.int/zh/publications/i/item/9789240011335#

Classified Catalogue of Medical Wastes in China

https://www.mee.gov.cn/ywgz/gtfwyhxpgl/wxfw/200504/t20050418_65998.shtml

Standards for special packaging bags, containers, and warning symbols for medical waste

http://www.mee.gov.cn/gkml/zj/wj/200910/t20091022_172239.htm

 