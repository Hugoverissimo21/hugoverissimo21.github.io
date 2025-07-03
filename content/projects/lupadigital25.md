+++
authors = ["Hugo Veríssimo"]
title = "Lupa Digital"
date = "2025-05-06"
repository = "https://github.com/LupaDigital25"
description = "Large-scale intelligent metajournalism project (Arquivo.pt 2025)"
tags = [
    "python",
    "web-scraping",
    "data-analysis",
    "machine-learning",
    "spark",
    "nlp"
]
+++

Lupa Digital is a project developed within the scope of the Arquivo.pt Awards 2025 competition, focused on intelligent metajournalism. Using artificial intelligence tools, the project analyzes thousands of journalistic articles since the dawn of the digital era to discover patterns, trends, and relevant insights on any topic. The goal is to transform large volumes of journalistic information into useful and accessible knowledge, contributing to the strengthening of media literacy and a more critical understanding of the information ecosystem.

The project development occurred in several stages, each documented in detail in the GitHub repository, and modular.

The first stage involved creating a crawler to collect news articles from the Arquivo.pt website, a digital preservation platform for web content. The crawler was developed in Python, using libraries like Scrapy and BeautifulSoup to extract relevant article information such as title and date.

The second stage focused on developing data validation and mining tools, using Spark, web scraping, NLP techniques, and machine learning to validate and analyze the collected data. This phase included data cleaning and transformation, where Spark was essential for efficiently processing large data volumes, and NLP techniques extracted relevant information from the texts. Machine learning models were implemented to identify patterns and trends, analyzing over 3 million articles, about 300,000 of which were unique and valid.

The third stage consisted of cleaning, structuring, and analyzing the data to ensure quality and consistency. Duplicates were removed, formats normalized, and data validated. Exploratory analysis used descriptive statistics and visualization to identify relevant patterns and trends in the journalistic articles.

The fourth stage created a web interface where users can search and explore the data. Developed with the Flask framework and Spark functions, this interface allows searching any topic, visualizing mentions over time in the Portuguese media, exploring relationships between themes such as “health” and “politics” or “education,” and displaying an interactive graph with the 125 most relevant relations of the searched topic. The visualization facilitates intuitive exploration of thematic connections.

The fifth stage involved implementing the web application with Docker, Nginx, and other technologies to ensure scalability and availability. Using Docker enables isolated containers for each component, easing development and deployment, while Nginx acts as the web server to deliver the Flask application quickly and efficiently.

Currently, the web application is offline after months of uptime due to hosting costs, but the source code remains available in the GitHub repository for local replication.

I highly recommend exploring the [GitHub repository](https://github.com/LupaDigital25) for more details about the project.

Participation in the Arquivo.pt Awards 2025 was recognized with a TOP 5 placement, with a personal invitation to present to the competition jury.

{{< tabgroup >}}
{{< tab name="Summary Description" >}}
<iframe src="https://lupadigital25.github.io/assets/LupaDigital_hugoverissimo.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}

{{< tab name="Submitted Video" >}}
<iframe src="https://www.youtube.com/embed/WSpXLZcwQSM"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}

{{< tab name="Presentation Slides" >}}
<iframe src="https://lupadigital25.github.io/assets/slides-arquivo.pdf"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}

{{< tab name="Technical Slides" >}}
<iframe src="https://lupadigital25.github.io/assets/slides/#/title-slide"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
