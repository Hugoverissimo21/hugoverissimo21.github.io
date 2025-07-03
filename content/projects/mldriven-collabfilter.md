+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Recommender Systems"
date = "2025-01-25"
repository = "https://github.com/Hugoverissimo21/MLDriven-CollabFilter"
description = "Development and evaluation of movie recommender systems using linear regression and FunkSVD"
tags = [
    "python",
    "machine-learning",
]
+++

This project involved exploratory analysis of a movie ratings dataset, with the goal of predicting the rating a user would give to a movie based on ratings from other users.

Two manually built linear regression models were used to predict ratings: one based solely on users and their ratings, and another incorporating movie metadata as well.

The FunkSVD model was also implemented.

The methodology included selecting the best hyperparameters through cross-validation, as well as choosing the final model based on RMSE and MAE metrics. Additionally, Precision@k, Recall@k, F1@k, and MRR@k metrics were used to evaluate the recommendation models' performance.

{{< tabgroup >}}
{{< tab name="Report" >}}
<iframe src="https://hugoverissimo21.github.io/MLDriven-CollabFilter/report.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
