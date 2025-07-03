+++
authors = ["Hugo Veríssimo"]
title = "Maximum Cut Problem (Max-Cut)"
date = "2024-11-09"
repository = "https://github.com/Hugoverissimo21/max-weighted-cut"
description = "Solving the NP-hard Max-Cut problem using deterministic and stochastic algorithms"
tags = [
    "python",
    "algorithms",
]
+++

The Maximum Cut (Max-Cut) problem is an NP-hard problem that consists of dividing a graph into two subsets with the objective of maximizing the weight of the edges cut between them. This project focuses on solving the problem using both deterministic and stochastic algorithms, including Simulated Annealing.

The work is divided into two main approaches:

- Deterministic algorithms:<br>with implementations of exhaustive search and greedy search for exact or approximate solutions.

- Stochastic algorithms:<br>including methods such as Random Cut, Simulated Annealing, and Greedy Randomized approaches, which seek approximate solutions efficiently.

The algorithms were evaluated in terms of complexity, accuracy, number of solutions tested, and trade-offs between accuracy and computational efficiency, as well as execution time predictions based on graph size.

Pseudocode is also provided for better understanding of the applied methods.

{{< tabgroup >}}
{{< tab name="Report 1" >}}
<iframe src="https://hugoverissimo21.github.io/max-weighted-cut/deterministic.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}

{{< tab name="Report 2" >}}
<iframe src="https://hugoverissimo21.github.io/max-weighted-cut/probabilistic.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
