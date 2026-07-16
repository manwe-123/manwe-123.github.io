---
layout: project-chimera
title: "Automated Data Aggregation and AI Synthesis Pipeline"
subtitle: "Project Chimera"
role: "Software & Systems Engineer"
timeline: "January 2024 - Present"
tags:
  - Python
  - FastAPI
  - PostgreSQL
  - Docker
  - LLM
  - RAG
  - Redis
  - React

# Overview Section
problem_statement: |
  Manually aggregating, normalizing, and analyzing data from disparate sources (live market APIs, unstructured news feeds, and raw legal documents) is slow, error-prone, and unscalable. Traditional retail tools lack the institutional-grade data synthesis required for robust, risk-adjusted decision-making, creating a need for an automated, closed-loop data pipeline.

objective: |
  Architect a modular, asynchronous Python application that fetches raw data, processes unstructured text using local machine learning models, and outputs structured, actionable insights via a real-time dashboard. This demonstrates proficiency in building robust data acquisition systems, handling asynchronous data streams, and deploying local AI models—skills directly transferable to automated testing rigs, sensor data logging, and mechatronics control software.

# System Architecture Layers (3 columns)
system_layers:
  - title: "Data Ingestion Layer"
    description: "Utilizes the OpenBB SDK and custom wrappers to securely fetch, normalize, and cache data from multiple external APIs (Market Data, NewsAPI, Sophtron) simultaneously without blocking the main thread."
  - title: "Processing & Synthesis Layer"
    description: "Runs asynchronously to prevent UI freezing. Utilizes custom Python scripts and Regex to parse raw text, feeding clean data into a locally hosted Large Language Model (Ollama/Llama 3.1) for synthesis and risk extraction."
  - title: "Visualization & Output Layer"
    description: "A multi-page Streamlit application that visualizes the processed data and executes constraint-based mathematical optimization logic (PyPortfolioOpt) to generate actionable, capital-constrained recommendations."

# Architecture Diagram
architecture_diagram:
  image: "/assets/images/projects/chimera/architecture-diagram.png"
  caption: "System Architecture Overview showing asynchronous data flow between external APIs, local LLM processing, and the Streamlit UI"

# Core Technical Implementations
implementations:
  - title: "Asynchronous Data Fetching"
    description: "Migrated from synchronous, blocking scripts to an asynchronous architecture using Python's `asyncio`, significantly reducing data latency and preventing UI freezes during heavy, concurrent API calls."
    code_snippet: |
      import asyncio
      import aiohttp

      async def fetch_market_data(session, ticker):
          url = f"https://api.openbb.co/v1/equity/price/historical?symbol={ticker}"
          async with session.get(url) as response:
              return await response.json()
  - title: "Local LLM Deployment & NLP"
    description: "Deployed Llama 3.1 locally via Ollama to ensure zero data leakage and zero API costs. Built a custom web scraper using BeautifulSoup and Regex to extract specific legal risk factors from raw SEC filings before feeding them to the LLM."
    code_snippet: |
      import re

      def extract_risk_factors(sec_text):
          # Extract Item 1A: Risk Factors using regex to prevent context-window overflow
          pattern = r"Item 1A\.\s*Risk Factors(.*?)(?=Item 1B\.|Item 2\.)"
          match = re.search(pattern, sec_text, re.IGNORECASE | re.DOTALL)
          return match.group(1).strip() if match else ""
  - title: "Constraint-Based Optimization"
    description: "Integrated mathematical optimization libraries (PyPortfolioOpt) to process raw algorithmic scores and generate actionable, constraint-based rebalancing recommendations based on user-defined capital limits."
    code_snippet: |
      from pypfopt import EfficientFrontier, expected_returns, risk_models

      def optimize_portfolio(prices_df):
          mu = expected_returns.mean_historical_return(prices_df)
          S = risk_models.sample_cov(prices_df)
          ef = EfficientFrontier(mu, S)
          ef.add_objective(lambda w: w[0] <= 0.2) # Example capital constraint
          return ef.max_sharpe()

# Software Engineering Best Practices
best_practices:
  - title: "Modular Design"
    description: "Strict separation of concerns. The codebase is divided into distinct directories (`core/` for business logic, `pages/` for UI, `utils/` for helpers), making the system highly maintainable and scalable for future feature additions."
  - title: "Version Control"
    description: "Managed entirely through Git/GitHub with structured commit histories, feature branching, and a comprehensive `README.md` detailing setup, dependencies, and system architecture."
 (Note: Ensure your actual repo matches this structure)
  - title: "Environment Management"
    description: "Utilized `.env` files for secure API key and credential management, ensuring no sensitive tokens or personal brokerage data were ever pushed to the public repository."

# Directory Structure Screenshot
directory_screenshot:
  image: "/assets/images/projects/chimera/directory-structure.png"
  caption: "GitHub Repository Directory Structure highlighting modular separation of concerns"

# Challenges and Problem Solving
challenges:
  - challenge: "Initial synchronous API calls caused the Streamlit UI to freeze and timeout during large, concurrent data fetches."
    resolution: "Refactored the data ingestion layer to use Python’s `asyncio` and asynchronous HTTP requests, decoupling heavy computation from the real-time UI and ensuring a smooth user experience."
  - challenge: "Feeding raw, unfiltered SEC filings directly into the LLM caused context-window overflow and hallucinated outputs."
    resolution: "Implemented a deterministic pre-processing step using Regex to extract only the specific 'Item 1A: Risk Factors' text, drastically reducing token count and improving LLM accuracy and relevance."
  - challenge: "Privacy concerns regarding sending proprietary or sensitive financial data to cloud-based AI APIs."
    resolution: "Pivoted to a local LLM deployment using Ollama, ensuring 100% data privacy, zero inference latency, and no external API costs."

# Skills Demonstrated (dense grid of tags)
skills:
  - "Python 3.11+"
  - "AsyncIO"
  - "FastAPI"
  - "PostgreSQL"
  - "Docker"
  - "Kubernetes"
  - "Redis"
  - "LangChain"
  - "Llama 2"
  - "Vector Databases"
  - "RAG Patterns"
  - "API Design"
  - "CI/CD"
  - "Git"
  - "Linux"

# External Resources
resources:
  - label: "📄 View Documentation"
    url: "https://github.com/manwe-123/chimera-pipeline"
  - label: "🔧 Source Code"
    url: "https://github.com/manwe-123/chimera-pipeline"
  - label: "📚 FastAPI Reference"
    url: "https://fastapi.tiangolo.com/"
---
