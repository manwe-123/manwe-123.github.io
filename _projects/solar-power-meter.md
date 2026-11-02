---
layout: projects/project-circuits
theme: circuits
category: engineering
card_title: "Solar Panel Power Meter"
title: "Solar Panel Power Meter"
subtitle: "An Arduino-based instrument for measuring solar panel voltage, current, and power."
date: 2026-05-01
role: "Circuit Design & Prototyping Lead"
timeline: "May 2026"
featured: false
display: true
tags:
  - Arduino
  - Analog Circuits
  - Signal Conditioning
  - TinkerCAD
  - Calibration
image: "assets/images/projects/solar-power-meter/main.jpg"
excerpt: "Built and tested a solar panel power meter using a voltage divider, shunt resistor, op-amp, and Arduino to display live voltage, current, and power on an LCD."

overview: |
  For the EEE 202 Circuits I Lab final project, our team built a portable power meter for the Sparky Solar client scenario. The goal was to help field technicians check a small solar panel without calculating voltage, current, and power by hand. Affordability, readily available components, compact size, and operation at elevated temperatures guided the design.
solution: |
  We combined a voltage divider, a shunt resistor with a non-inverting amplifier, and an Arduino Uno. The Arduino reconstructs the panel voltage and load current from two analog inputs, calculates power, and refreshes an LCD once per second. Lab 7 documents development from individual sensing stages through controller tests and LCD integration, followed by a prototype demonstration signed off on May 1, 2026.

prototype:
  src: "/assets/images/projects/solar-power-meter/main.jpg"
  alt: "Solar panel connected to a breadboard circuit, Arduino Uno, and illuminated LCD displaying voltage, current, and power."
  caption: "The working breadboard prototype, photographed for the final report. The solar panel feeds the sensing circuit, and the Arduino displays the calculated measurements on the LCD."
  width: 1536
  height: 2048

signal_chain:
  - title: "01 · Voltage Sensing"
    description: "A 47 kΩ / 100 kΩ divider scales the panel voltage for analog input A1. At the measured 6.83 V maximum, the calculated divider output is about 4.64 V, below the Arduino's 5 V input limit."
    equation: "Vout = Vin × 100 / (47 + 100)"
  - title: "02 · Current Sensing"
    description: "A 50 Ω shunt in series with the 1 kΩ load converts current into a small voltage. A rail-to-rail, non-inverting op-amp with 22 kΩ input and 100 kΩ feedback resistors amplifies that signal before it reaches A0. The worksheet checks headroom at the load resistor's calculated 15.8 mA power limit: about 0.791 V across the shunt and 4.38 V after amplification."
    equation: "Gain = 1 + 100 / 22 ≈ 5.55"
  - title: "03 · Processing & Display"
    description: "The Arduino reverses the divider and amplifier scaling to recover voltage and current, then multiplies the values to calculate power. A diode prevents reverse current, and the LCD updates every second."
    equation: "I = Vshunt / 50 Ω; P = V × I"

tradeoffs:
  - "Selected resistor set 2 for both sensing stages. The worksheet ranks divider priorities as availability, cost, then size; amplifier priorities are temperature rating, availability, then cost."
  - "Chose high divider resistances to reduce power consumption, accepting greater sensitivity to noise and leakage."
  - "Balanced current sensitivity and signal headroom with a nominal op-amp gain of 5.55; the calculated full-sun output was approximately 1.87 V."
  - "Used a benchtop DC supply for steady indoor debugging before testing under changing outdoor light."

simulation_gallery:
  - src: "/assets/images/projects/solar-power-meter/voltage-divider-simulation.jpeg"
    alt: "TinkerCAD voltage-divider circuit connected to a solar panel and a multimeter reading 4.23 V."
    caption: "Voltage-divider simulation: 4.23 V at the meter. The worksheet records 4.30 V for the physical build under this stage's test conditions (Lab 7, pp. 2 and 11)."
    width: 844
    height: 1228
  - src: "/assets/images/projects/solar-power-meter/lcd-simulation.jpeg"
    alt: "TinkerCAD Arduino and LCD circuit displaying 6.83 V, 5.95 mA, and 40.63 mW with a 6.83 V, 6.00 mA source."
    caption: "Integrated LCD simulation: a source set to 6.83 V and 6.00 mA produces displayed values of 6.83 V, 5.95 mA, and 40.63 mW in this screenshot (Lab 7, p. 17)."
    width: 1330
    height: 1114
  - src: "/assets/images/projects/solar-power-meter/bench-testing.jpeg"
    alt: "Arduino Uno and breadboard sensing circuit connected to a benchtop multimeter and DC power supply."
    caption: "Bench testing the sensing and controller circuit with a DC supply and multimeter before completing the LCD prototype (Lab 7, p. 13)."
    width: 1244
    height: 930

conversion_intro: "Lab 7 explains how raw ADC readings become engineering units. Using the worksheet's nominal 5 V reference, a 1024-count conversion, and the selected resistor values:"
conversions:
  - name: "Panel voltage (V)"
    equation: "Vpanel = ADC_A1 × (Vref / 1024) × (147 / 100)"
  - name: "Load current (mA)"
    equation: "Iload = ADC_A0 × (Vref / 1024) × 1000 / (5.545 × 50)"
  - name: "Power (mW)"
    equation: "P = Vpanel × Iload_mA"
conversion_note: "The worksheet uses Vref = 5.00 V. The final report describes replacing that nominal value with a measured 4.97 V during calibration."

lighting_measurements:
  - condition: "Full sunlight"
    voltage: "6.83 V"
    current: "6.76 mA"
  - condition: "Shaded sunlight"
    voltage: "1.30 V"
    current: "1.70 mA"
  - condition: "Lab lighting"
    voltage: "0.190 V"
    current: "0.191 mA"

measurements_caption: "Selected stage tests from Lab 7 and the final report; each row identifies its source and test context."
measurements:
  - name: "Divider output at 6.83 V input"
    expected: "4.64 V calculated"
    observed: "4.58–4.62 V measured (final report)"
  - name: "Standalone divider test"
    expected: "4.23 V simulated"
    observed: "4.30 V physical; about 1.7% difference (Lab 7, p. 2)"
  - name: "Non-inverting amplifier gain"
    expected: "5.55 calculated"
    observed: "5.48–5.52 measured (final report)"
  - name: "Integrated LCD voltage in full sun"
    expected: "6.83 V panel measurement"
    observed: "6.86 V LCD readout; about 0.44% difference (Lab 7, p. 8)"
  - name: "Voltage error after ADC-reference correction"
    expected: "Compare against a calibrated meter"
    observed: "Below 0.2%, reported after correction in the final report"

validation_note: "The initial lighting survey, individual circuit tests, and integrated LCD tests are separate measurements. The worksheet's full-sun LCD voltage differs from the final report's calibration result; neither establishes accuracy across the full voltage and current range."

discharge:
  description: "Part 5 extends the project to first-order transient analysis. With the worksheet's equivalent resistance of 1 kΩ + 50 Ω = 1050 Ω, we solved for a capacitor that would discharge from 6 V to 1 mV in approximately 10 ms."
  equation: "Vc(t) = V0 × exp(−t / (R × C))"
  calculation: "C = −0.010 / (1050 × ln(0.001 / 6)) ≈ 1.1 µF"
  note: "The worksheet documents the calculation. It does not include an oscilloscope discharge trace or a signed measurement for this optional test."

iterations:
  - title: "Correcting the ADC Reference"
    problem: "In full sun, the serial monitor showed 6.71 V while the handheld meter read 6.83 V. The conversion code assumed an exact 5.00 V reference."
    resolution: "We measured the Arduino's actual 5 V rail at 4.97 V and updated the conversion constant. The report records a subsequent voltage error below 0.2%."
  - title: "Establishing a Common Ground"
    problem: "During assembly, the LCD flickered and the readings jumped. Checking the power rails and tracing signals with an oscilloscope revealed that the op-amp stage and Arduino lacked a shared ground."
    resolution: "A jumper between the op-amp ground rail and Arduino GND stabilized the readings. This highlighted the importance of a consistent reference across analog and digital stages."

reflection: |
  This build connected circuit theory to physical measurement: resistor tolerances, amplifier offset, the ADC reference, and breadboard wiring all affected the result. Comparing simulation, hand calculations, and bench readings helped us locate errors systematically instead of replacing components at random.
next_steps: |
  The demonstrated result is a small-panel breadboard prototype. Next steps would include checking voltage and current calibration at multiple points, repeating tests under controlled inputs, and measuring the calculated capacitor discharge response. A field-ready version would also need a weather-resistant enclosure, corrosion-resistant terminals, and thermal validation. Larger installations would require a redesigned sensing and protection system and potentially data logging or remote readout.

report_url: "/assets/files/solar-power-meter-report.pdf"
lab_url: "/assets/files/solar-power-meter-lab7.pdf"
---
