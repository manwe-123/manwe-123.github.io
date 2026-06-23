---
title: "Embedded Systems IoT Sensor Network"
date: 2024-03-05
category: "Electrical Engineering"
tools: "ESP32, MQTT, Python, AWS IoT, PCB Design"
image: "/assets/images/project4.jpg"
excerpt: "Designed and deployed a low-power wireless sensor network for environmental monitoring with cloud connectivity."
---

## Project Overview

Developed a scalable IoT sensor network for real-time environmental monitoring in industrial facilities. The system measures temperature, humidity, air quality, and vibration, transmitting data to a cloud dashboard for analysis and alerting.

## System Architecture

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│   Sensors   │ ───→ │   ESP32     │ ───→ │  AWS IoT    │
│             │      │  Gateway     │      │   Core      │
│ - Temp/Hum  │      │              │      │             │
│ - Air Quality│     │  - MQTT      │      │  - Rules    │
│ - Vibration │      │  - WiFi      │      │  - DynamoDB │
└─────────────┘      └──────────────┘      └─────────────┘
                              ↓                    ↓
                       Local Display        Cloud Dashboard
```

## Hardware Design

### Sensor Node Specifications

| Component | Specification | Purpose |
|-----------|--------------|---------|
| Microcontroller | ESP32-WROOM-32 | Main processing & WiFi |
| Temperature | BME280 | ±0.5°C accuracy |
| Air Quality | CCS811 | TVOC & eCO2 sensing |
| Vibration | MPU6050 | 3-axis accelerometer |
| Power | 18650 Li-ion | 2000mAh battery |
| Solar | 5V 1W panel | Battery charging |

### PCB Design

Designed a custom 4-layer PCB with the following features:

- **Power Management**: TP4056 charging circuit with overcharge protection
- **Signal Integrity**: Separated analog and digital grounds
- **RF Performance**: Optimized antenna placement and impedance matching
- **Enclosure**: Custom 3D-printed housing with IP65 rating

![PCB Layout](/assets/images/pcb-layout.png)

## Firmware Development

### Key Features

1. **Low-Power Operation**
   - Deep sleep mode between readings (30s intervals)
   - Dynamic WiFi reconnection strategy
   - Average current consumption: 45mA active, 10μA sleep

2. **Data Transmission**
   - MQTT protocol with QoS level 1
   - JSON payload format
   - Automatic retry with exponential backoff

3. **Over-the-Air Updates**
   - Dual-partition scheme for safe updates
   - Rollback capability on failure
   - Secure HTTPS download from S3

### Code Example

```cpp
#include <WiFi.h>
#include <PubSubClient.h>
#include <Adafruit_BME280.h>

#define MQTT_SERVER "aws.iot.us-east-1.amazonaws.com"
#define MQTT_PORT 8883

Adafruit_BME280 bme;
WiFiClientSecure espClient;
PubSubClient client(espClient);

void readAndPublish() {
  float temp = bme.readTemperature();
  float hum = bme.readHumidity();
  float pressure = bme.readPressure() / 100.0;
  
  String payload = "{\"temp\":" + String(temp) + 
                   ",\"hum\":" + String(hum) +
                   ",\"pressure\":" + String(pressure) + "}";
  
  client.publish("sensors/env/node01", payload.c_str());
  
  // Enter deep sleep for 30 seconds
  esp_sleep_enable_timer_wakeup(30 * 1000000);
  esp_deep_sleep_start();
}
```

## Cloud Infrastructure

### AWS Services Used

- **IoT Core**: Device management and message routing
- **Lambda**: Data processing and transformation
- **DynamoDB**: Time-series data storage
- **QuickSight**: Visualization and dashboards
- **SNS**: Alert notifications

### Data Pipeline

1. Sensor data published to IoT Core topic
2. Lambda function validates and transforms data
3. Processed data stored in DynamoDB
4. QuickSight dashboard displays real-time metrics
5. SNS triggers alerts when thresholds exceeded

## Results

### Deployment Statistics

- **Nodes Deployed**: 25 across 3 facilities
- **Uptime**: 99.2% over 6-month period
- **Battery Life**: 6 months per charge (with solar assist)
- **Data Points Collected**: 12+ million

### Performance Metrics

| Metric | Target | Achieved |
|--------|--------|----------|
| Latency | < 5s | 2.3s avg |
| Packet Loss | < 1% | 0.4% |
| Accuracy | ±2% | ±1.2% |
| Cost per Node | < $50 | $42 |

## Challenges & Solutions

### Challenge 1: WiFi Connectivity

**Problem**: Industrial facilities have poor WiFi coverage in some areas.

**Solution**: Implemented mesh networking using ESP-NOW protocol for nodes out of direct WiFi range, with gateway nodes relaying data.

### Challenge 2: Power Consumption

**Problem**: Initial design drained battery in 3 weeks.

**Solution**: 
- Optimized sleep currents by disabling unused peripherals
- Reduced transmission frequency during stable conditions
- Added solar charging for extended deployment

### Challenge 3: Data Integrity

**Problem**: Occasional corrupted readings due to EMI.

**Solution**: 
- Implemented moving average filtering
- Added sanity checks for out-of-range values
- Improved PCB grounding and shielding

## Impact

The system enabled:

- **Predictive Maintenance**: Early detection of equipment overheating
- **Energy Optimization**: HVAC adjustments based on occupancy patterns
- **Compliance**: Automated environmental reporting for regulations
- **Cost Savings**: Estimated $15,000/year per facility in energy costs

## Future Enhancements

- Add LoRaWAN support for long-range deployments
- Implement edge ML for anomaly detection
- Integrate with building management systems
- Develop mobile app for field technicians

## Repository

Full source code and hardware files available at: `github.com/manwe/iot-sensor-network`
