+++
authors = ["Hugo Veríssimo"]
title = "LSH Recommender System"
date = "2025-05-27"
repository = "https://github.com/Hugoverissimo21/LSH-Recommender"
description = "Desenvolvimento de um sistema de recomendação escalável com Locality Sensitive Hashing (LSH) e Apache Spark"
tags = [
    "python",
    "spark",
    "algorithms",
]
+++

Criação e benchmark de um algoritmo de previsão de avaliações baseado em LSH (Locality Sensitive Hashing) para grandes volumes de dados do dataset MovieLens. O objetivo é prever a avaliação de um utilizador para um filme específico, utilizando técnicas avançadas de hashing para otimizar a procura por similaridades entre utilizadores e filmes.

O algoritmo foi implementado em ambiente de *high performance computing*, com execução via SSH e jobs distribuídos em Apache Spark. Esta abordagem permite análise e recomendação de filmes em datasets de grandes dimensões, desde 100 mil até 25 milhões de avaliações, demonstrando a escalabilidade e eficiência do sistema em contextos de *big data*.

{{< tabgroup >}}
{{< tab name="Relatório" >}}
<iframe src="https://hugoverissimo21.github.io/LSH-Recommender/"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}