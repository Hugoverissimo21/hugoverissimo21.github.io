+++
authors = ["Hugo Veríssimo"]
title = "LSH Recommender System"
date = "2025-05-27"
repository = "https://github.com/Hugoverissimo21/LSH-Recommender"
description = "Development of a scalable recommendation system using Locality Sensitive Hashing (LSH) and Apache Spark"
tags = [
    "python",
    "spark",
    "algorithms",
]
+++

Creation and benchmarking of a rating prediction algorithm based on LSH (Locality Sensitive Hashing) for large volumes of data from the MovieLens dataset. The goal is to predict a user's rating for a specific movie, using advanced hashing techniques to optimize the search for similarities between users and movies.

The algorithm was implemented in a high-performance computing environment, executed via SSH with distributed jobs on Apache Spark. This approach enables analysis and recommendation on large-scale datasets, ranging from 100 thousand to 25 million ratings, demonstrating the scalability and efficiency of the system in big data contexts.

{{< tabgroup >}}
{{< tab name="Report" >}}
<iframe src="https://hugoverissimo21.github.io/LSH-Recommender/"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
