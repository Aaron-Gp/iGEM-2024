# ***\*engineering success\****

## ***\*hardware\****

### ***\*目的\****

· 提供高通量的便携式反应容器

· 为检测提供稳定的物理条件

· 高灵敏度的荧光检测

### ***\*设计\****

我们的整个设备主要有三大部分，分别是覆盖在整个设备外的机身，位于上层的反应区和位于下层的检测区。在第一版设计中，我们采用了stm32芯片作为主控，调控恒温控制、荧光检测和蓝牙传输功能。在第二版中，我们将主控更换为集成了无线通信模块的esp32芯片，并采用了集成的温控模块和检测模块，这进一步提高了系统的稳定性和准确性。为了满足多样本的同时检测，我们还重新设计了高通量的反应腔，通过线性滑轨实现快速依次的检测。

|                        | ***\*初版设计方案\**** | ***\*终版设计方案\**** | ***\*改动目的\****                   |
| ---------------------- | ---------------------- | ---------------------- | ------------------------------------ |
| ***\*主控芯片\****     | STM32F103C8T6          | Arduino Nano ESP32     | 集成蓝牙通讯模块，降低设计的复杂度   |
| ***\*温控方案\****     | TB6612FNG              | TCM1040                | 更精确地控制温度，集成化使体积更小   |
| ***\*荧光检测方案\**** | AS7341                 | FM-4A                  | 集成了光源和传感器，使检测结果更稳定 |
| ***\*反应平台\****     | 单个反应仓             | 线性滑轨平台           | 实现高通量检测                       |

表格：不同方案选择器件对比

 

 

 

 

|                                  | ***\*Initial Scheme\**** | ***\*Final Scheme\**** | ***\*Advantages After Improvement\****                       |
| -------------------------------- | ------------------------ | ---------------------- | ------------------------------------------------------------ |
| ***\*MCU\****                    | STM32F103C8T6            | Arduino Nano ESP32     | Integrate Bluetooth communication module, reduce the complexity of the design |
| ***\*Temperature Control\****    | TB6612FNG                | TCM1040                | More precise control of temperature                          |
| ***\*Fluorescence Detection\**** | AS7341                   | FM-4A                  | Integrate excitation light and fluorescent sensor to make the detection result more stable. |
| ***\*Reaction Platform\****      | Single Reaction Tube     | Slide Rail Platform    | Achieve high-throughput detection                            |

 

 

在材料的选择上，我们采用了黑色硅胶套件与铝合金恒温槽作为离心管的环境，这样的方案可以很好地满足设计的保温需要。

| ![img](file:///C:\Users\李冠龙\AppData\Local\Temp\ksohtml22032\wps15.png)![img](file:///C:\Users\李冠龙\AppData\Local\Temp\ksohtml22032\wps16.jpg) 图 1 第一版方案 | ![img](file:///C:\Users\李冠龙\AppData\Local\Temp\ksohtml22032\wps17.jpg) 图 2 第二版方案 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

 

### ***\*建立\****

系统搭建的采用了常见的集成单元，主控采用了esp32芯片，温控和检测分别采用了TCM温控模块和礼德科技的FM系列数字型荧光检测模块。

我们使用了工业加工技术制作了铝合金恒温槽，外壳以及其他部件则使用3D打印工艺制作而成。

| （装配图-把建模打开然后标注的图）![img](file:///C:\Users\李冠龙\AppData\Local\Temp\ksohtml22032\wps18.jpg) 图 3 设备模型图 | （实物图-可以到时候再加） |
| ------------------------------------------------------------ | ------------------------- |
|                                                              |                           |

 

### ***\*测试\****

在确定了最初的方案之后，我们先进行了可行性测试，验证了荧光系统和温控系统的功能性。在组装了模型的初始版本后，经过使用测试与设计风险预分析后发现存在许多问题，如荧光系统易受干扰、温控系统不稳定等。经过测试-反馈-改进-测试的循环，最终版本模型的各个方面性能都非常出色。经过实验，荧光识别很准确，整体美观也得到了很大的提升。

| ![img](file:///C:\Users\李冠龙\AppData\Local\Temp\ksohtml22032\wps19.jpg) 图 4 恒温控制实验结果 | ![img](file:///C:\Users\李冠龙\AppData\Local\Temp\ksohtml22032\wps20.jpg) 图 5 荧光验证实验结果 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

 

### ***\*学习\****

在设备设计的过程中，我们遇到了各种问题，如控制系统过于复杂、稳定性不足、无法进行多样本检测、光路设计等。在实时测试和讨论环节中，我们一直在记录各种问题，不断提出改进方案，并积极寻求知道老师和顾问的帮助，最终完成了能够满足需求的硬件方案。在不断学习和改进并提出问题的过程中，我们的相关专业技能也得到了极大的提升。

## ***\*software\**** 

### ***\*目的\****

· 实现与硬件进行信息人机交互

· 自动处理硬件发送的数据

· 数据可视化

### ***\*设计\****

主体分为两个部分——蓝牙接收模块和绘图模块。

#### ***\*蓝牙模块接收数据\****

CREATE discoveryAgent AS new BluetoothDeviceDiscoveryAgent
​
CONNECT discoveryAgent.deviceDiscovered TO this.deviceDiscovered
CONNECT discoveryAgent.finished TO this.onDeviceConnected
​
// 开始搜索蓝牙设备
CALL discoveryAgent.start()
​
// 初始化蓝牙Socket
CREATE socket AS new BluetoothSocket USING RfcommProtocol
​
// 连接按钮点击信号，发送STARTSTART命令
CONNECT ui.pushButton.clicked TO this.sendStartSignal

#### ***\*绘图模块进行绘图\****

FUNCTION updateGraphs()
 // 创建画布
CREATE new scene
SET scene to graphicsView
​
// 绘制温度图像
FOR i FROM 1 TO size of temperatureData - 1 DO
ADD line FROM (i-1, temperatureData[i-1]) TO (i, temperatureData[i]) WITH color red
​
 // 绘制荧光强度图像
 FOR i FROM 1 TO size of fluorescenceData - 1 DO
ADD line FROM (i-1, fluorescenceData[i-1]) TO (i, fluorescenceData[i]) WITH color blue
​
UPDATE graphicsView
END FUNCTION

（运行流程图）

#### ***\*数据划分模块\****

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
           SET zeroCount TO 0 // 重置计数器
​
         CONTINUE // 跳过当前点，不加入currentSegment
​
       END IF
     ELSE
       SET zeroCount TO 0 // 重置计数器，因为遇到了非0值
     END IF
​
     // 添加当前点到currentSegment
     ADD point TO currentSegment
   END FOR
​
   // 处理最后一个段
   IF currentSegment is not empty THEN
     SET maxVal TO maximum value in currentSegment
     ADD maxVal TO maxValues
   END IF
   RETURN maxValues
END FUNCTION

### ***\*测试\****

（测试结果图）

 