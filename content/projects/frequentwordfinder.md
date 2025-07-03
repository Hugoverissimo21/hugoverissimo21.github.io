+++
authors = ["Hugo Veríssimo"]
title = "Frequent Word Analysis in Books"
date = "2024-12-24"
repository = "https://github.com/Hugoverissimo21/FrequentWordFinder"
description = "Comparison of word counting algorithms in literary translations of the book Pinocchio, using exact and probabilistic techniques"
tags = [
    "python",
    "algorithms",
]
+++

Using the online Project Gutenberg library, three translations of the book *Pinocchio*—in English, Italian, and Finnish—were selected. The goal of the project was to apply and compare different word counting algorithms to identify the most frequent words in each version, and to analyze similarities and differences between the texts.

Three types of algorithms were used:
- exact counters,
- probabilistic counters (such as hash-based methods),
- space-saving counters (with memory optimization).

The analysis involved:
- identifying the most frequent words per book,
- comparing the different types of counters (accuracy vs. memory efficiency),
- cross-book analysis to detect common or distinct linguistic patterns in the translations.

In addition to evaluating the performance of the algorithms in terms of accuracy and memory usage, the project aimed to explore whether certain words appear with similar frequency across different languages, also offering a linguistic perspective on literary translation.

{{< tabgroup >}}
{{< tab name="Report" >}}
<iframe src="https://hugoverissimo21.github.io/FrequentWordFinder/revdetua/report.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
