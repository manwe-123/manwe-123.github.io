---
title: "Structural Analysis of Bridge Designs"
date: 2023-05-10
category: "Civil Engineering"
tools: "ANSYS, AutoCAD, Python, Structural Testing"
image: "/assets/images/project3.jpg"
excerpt: "Performed comparative structural analysis of truss bridge designs using FEA simulations and physical load testing."
---

## Project Overview

This comprehensive study analyzed multiple truss bridge designs to determine optimal configurations for medium-span crossings (50-100m). The project combined computational modeling with physical testing to validate simulation results.

## Objectives

- Compare efficiency of Warren, Pratt, and Howe truss designs
- Identify failure modes under various loading conditions
- Optimize material usage while maintaining safety factors
- Validate FEA models with physical prototypes

## Methodology

### Computational Analysis

Used ANSYS Mechanical for finite element analysis with the following approach:

1. **Geometry Creation**: Modeled each truss configuration in AutoCAD
2. **Mesh Generation**: Applied adaptive meshing for accurate stress prediction
3. **Boundary Conditions**: Simulated realistic support and loading scenarios
4. **Material Properties**: Used structural steel (A36) properties

```python
# Python script for automating ANSYS parameter studies
import ansys.mechanical.core as pymechanical

def run_parameter_study(truss_type, span, load_cases):
    app = pymechanical.launch_mechanical()
    
    for load in load_cases:
        app.set_truss_geometry(truss_type, span)
        app.apply_load(load)
        results = app.solve()
        export_results(results, f"{truss_type}_{load}")
    
    return compare_efficiency(results)
```

### Physical Testing

Built 1:50 scale models for experimental validation:

- **Materials**: Balsa wood and steel wire to simulate full-scale behavior
- **Instrumentation**: Strain gauges at critical joints
- **Loading**: Hydraulic actuator with load cell feedback
- **Data Acquisition**: National Instruments DAQ system

## Results

### Stress Distribution Analysis

| Truss Type | Max Stress (MPa) | Deflection (mm) | Safety Factor |
|------------|------------------|-----------------|---------------|
| Warren     | 187              | 12.3            | 2.1           |
| Pratt      | 165              | 10.8            | 2.4           |
| Howe       | 198              | 14.1            | 2.0           |

### Key Findings

1. **Pratt Truss** showed the best overall performance with:
   - Lowest maximum stress concentrations
   - Minimal deflection under uniform loads
   - Efficient material distribution

2. **Warren Truss** offered advantages in:
   - Simpler fabrication (fewer unique members)
   - Better performance under moving loads
   - Aesthetic considerations

3. **Howe Truss** demonstrated:
   - Higher stress concentrations at diagonal connections
   - Greater deflection but predictable failure modes
   - Historical significance in timber construction

## Validation

FEA predictions matched physical test results within 8%:

- Stress predictions: ±6% accuracy
- Deflection predictions: ±8% accuracy
- Natural frequency: ±5% accuracy

This level of agreement validates the computational model for future design work.

## Optimization Study

Based on initial results, performed topology optimization on the Pratt design:

- Reduced material usage by 15%
- Maintained safety factor above 2.0
- Redistributed stress more evenly across members

## Recommendations

For medium-span bridges (50-100m):

1. **Primary Recommendation**: Modified Pratt truss with optimized member sizes
2. **Alternative**: Warren truss for applications requiring simpler fabrication
3. **Considerations**: Local material availability and construction expertise

## Future Work

- Investigate composite materials for weight reduction
- Study dynamic response to seismic loading
- Develop parametric design tool for rapid prototyping
- Explore additive manufacturing for complex joint geometries

## References

1. Hibbeler, R.C. *Structural Analysis*, 10th Edition
2. AISC Steel Construction Manual, 15th Edition
3. ANSYS Documentation, Version 2023 R1
