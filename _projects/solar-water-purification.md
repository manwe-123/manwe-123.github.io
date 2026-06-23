---
title: "Solar-Powered Water Purification System"
date: 2023-09-20
category: "Sustainable Engineering"
tools: "MATLAB, PCB Design, Environmental Testing"
image: "/assets/images/project2.jpg"
excerpt: "Developed a portable solar-powered water purification system for remote communities using UV-C LED technology."
---

## Project Overview

This project addressed the critical need for clean drinking water in remote areas by designing a portable, solar-powered water purification system. The system uses UV-C LED technology to eliminate pathogens without requiring consumable filters or chemicals.

## Objectives

- Create a portable system weighing less than 5 kg
- Achieve 99.9% pathogen reduction
- Operate solely on solar power with battery backup
- Keep manufacturing costs under $150 USD

## System Design

### Power System

The solar power subsystem consists of:

- 50W monocrystalline solar panel
- 12V 20Ah LiFePO4 battery
- MPPT charge controller for efficient power conversion
- Power management circuit for stable voltage output

### Purification Chamber

Key design features include:

- **UV-C LEDs**: 275nm wavelength for optimal germicidal effect
- **Reflective chamber**: Aluminum coating to maximize UV exposure
- **Flow rate control**: Ensures adequate exposure time (30 seconds)
- **Pre-filter**: Removes particulates before UV treatment

### Control Electronics

A custom PCB was designed with the following features:

```
Block Diagram:
Solar Panel → Charge Controller → Battery → DC-DC Converter → UV-C LEDs
                                    ↓
                              Microcontroller
                                    ↓
                          Sensors (Flow, Level, UV Intensity)
```

## Testing & Validation

### Laboratory Testing

- Tested with E. coli and coliform bacteria cultures
- Achieved 99.97% reduction in bacterial count
- Validated performance across various water turbidity levels

### Field Testing

Conducted a 2-week pilot test in partnership with a local community organization:

- System operated reliably in varying weather conditions
- User feedback led to ergonomic improvements
- Average daily output: 40 liters of purified water

## Results

| Metric | Target | Achieved |
|--------|--------|----------|
| Weight | < 5 kg | 4.2 kg |
| Pathogen Reduction | > 99.9% | 99.97% |
| Daily Output | 30 L | 40 L |
| Cost | < $150 | $135 |

## Challenges Overcome

1. **UV LED Efficiency**: Early prototypes suffered from low efficiency. Solved by implementing active cooling and optimizing drive current.

2. **Battery Life**: Initial battery drain was too high. Redesigned power management to reduce standby consumption by 60%.

3. **Water Flow Consistency**: Variable flow rates affected purification quality. Added a flow regulator and feedback control system.

## Impact

This system has the potential to provide clean water to approximately 200 people per unit annually. The modular design allows for easy scaling and maintenance.

## Future Work

- Integrate IoT connectivity for remote monitoring
- Develop a mobile app for usage tracking
- Explore partnerships with NGOs for deployment
- Investigate additional filtration stages for chemical contaminants
