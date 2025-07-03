+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Sentiment Analysis of Financial Phrases"
date = "2025-06-10"
repository = "https://github.com/Hugoverissimo21/finphrasebank-sentiment"
description = "Sentiment classification in financial texts using LSTM and BERT, with optimization and data augmentation techniques"
tags = [
    "python",
    "deep-learning",
    "nlp",
    "transformers",
]
+++

This project focused on sentiment analysis of financial phrases, based on the FinPhraseBank dataset, which contains sentences extracted from financial reports and news articles. The goal was to develop a model capable of classifying the sentiment of these phrases as positive, negative, or neutral, thus contributing to a better understanding of the emotional impact of financial information.

The subset with 75% annotator agreement was used to ensure higher reliability of the labels. Of this dataset, 80% was used for training and 20% for testing, ensuring accurate performance evaluation.

Models such as fastText, LSTM, and BERT were tested using 5-fold cross-validation and *random search* for hyperparameter optimization. BERT was ultimately chosen due to its superior results in terms of precision, recall, and F1-score.

BERT was trained on three data variants:
- the dataset with 75% agreement,
- a dataset using weighted *loss* function based on varying levels of agreement (empirical formulation),
- a dataset with *data augmentation* applied to the 75% subset.

These approaches aimed to enhance the model's robustness and generalization across various financial contexts. In particular, weighting the *loss* function helped the model adapt to sentences with differing levels of certainty, while data augmentation increased corpus diversity, resulting in concrete performance improvements.

{{< tabgroup >}}
{{< tab name="Report" >}}
<iframe src="https://hugoverissimo21.github.io/finphrasebank-sentiment/report/CAA02.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
