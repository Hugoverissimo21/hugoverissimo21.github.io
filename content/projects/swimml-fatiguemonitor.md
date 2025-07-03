+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Fatigue Classification in Competitive Swimmers"
date = "2024-11-27"
repository = "https://github.com/Hugoverissimo21/SwimML-FatigueMonitor"
description = "Application of machine learning models to classify fatigue levels in swimmers, aiming at injury prevention"
tags = [
    "python",
    "machine-learning",
]
+++

This project focuses on applying Machine Learning to estimate fatigue levels in swimmers, with the goal of preventing overuse injuries.

Data was collected from a local swimming team, covering multiple athletes. Data preprocessing was conducted to ensure quality, integrity, and suitability for machine learning algorithms.

Feature engineering extracted relevant variables from raw data, notably using EWMA (Exponentially Weighted Moving Average).

Models such as Support Vector Machine (SVM), logistic regression, and decision trees were used to classify data into three fatigue levels.

Each model underwent validation with 5-fold cross-validation to select the best hyperparameters and finalize the model.

Final model performance was evaluated using metrics including accuracy, precision, recall, f1-score, confusion matrix, and learning curves, ensuring robustness and reliability.

The project was presented at the IJCNN 2025 conference:  
[IJCNN 2025 Program (p.152)](https://confcats-siteplex.s3.us-east-1.amazonaws.com/ijcnn25/IJCNN_2025_Program_77b2d8aef4.pdf#page=152)

{{< tabgroup >}}
{{< tab name="Report" >}}
<iframe src="https://hugoverissimo21.github.io/SwimML-FatigueMonitor/report.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Your browser does not support iframes.
</iframe>
{{< /tab >}}

{{< tab name="Slides" >}}
<iframe src="https://hugoverissimo21.github.io/SwimML-FatigueMonitor/slides.pdf"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        Your browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}