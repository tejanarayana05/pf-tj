---
title: Automated Evidence Finder for News and Topic Research
description: This project builds a powerful automation workflow designed to revolutionize how news and topic research is conducted.
publishDate: 'Dec 23 2024'
---

### Automated Evidence Finder for News and Topic Research with Reality Verification

#### Project Overview

This project creates an advanced automated research assistant that consolidates, verifies, and summarizes evidence from diverse digital sources to provide an accurate understanding of any news story or topic. Built atop the n8n workflow automation platform, it leverages multiple APIs and data sources including news aggregators, Google Search, social media platforms Twitter and Reddit, plus advanced Large Language Models (LLMs) for intelligent processing.

#### Technical Architecture and Workflow

- **Comprehensive Data Collection:**
  The system queries traditional news APIs (e.g., NewsAPI, Google News), Google Search API for broad internet coverage, and social media APIs (Twitter API, Reddit API) to collect diverse perspectives and realtime discourse around the input query. This multi-source approach enhances coverage and aids in reputation or authenticity assessment.
- **Content Extraction and Preprocessing:**
  Extracted data undergoes NLP-based cleaning and tagging. Metadata such as publication timestamps, author/source credibility, engagement metrics (likes, shares, comments), and sentiment scores from social media are included. Duplicate or low-value entries are removed using fuzzy matching and threshold-based filters.
- **AI-Powered Relevance Scoring and Summarization:**
  The filtered data batch is processed by the LLM, which performs: - Relevance scoring based on query context and content importance. - Cross-source comparison to detect contradicting reports or misinformation signals. - Individual article summarization for quick review. - Overall synthesis summary providing a balanced and factual overview, highlighting consensus and controversies.
- **Reality Verification Features:**
  Social media chatter and Google real-time search trends help identify viral misinformation, emerging updates, or crowd-sourced fact-checks, cross-checked with news sources for comprehensive validity analysis.
- **Structured Data Output:**
  Narrative and quantitative insights are exported and formatted into Excel or Google Sheets. Results are sorted by relevance, credibility score, and date. Hyperlinks to original sources and social media threads are included for transparency and further investigation.
- **Automation and Reliability:**
  The end-to-end workflow is triggered via API or scheduled automations, with robust error handling and retries embedded. Modular node design allows easy extension to new data sources or enhanced verification models.

#### Project Benefits

- **Holistic Accuracy:** Integrates traditional media and real-time social signals for thorough fact-based research.
- **Efficiency:** Transforms hours of multi-platform manual research into minutes of automated processing and summarization.
- **Actionable Insights:** Enables researchers, journalists, analysts, and decision-makers to rapidly discern the truth and context behind complex topics.
- **Customizability:** Easily adjustable prompts, filters, and weighting mechanisms tailor the research focus or credibility standards per user needs.
