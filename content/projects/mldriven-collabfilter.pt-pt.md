+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Sistemas de Recomendação"
date = "2025-01-25"
repository = "https://github.com/Hugoverissimo21/MLDriven-CollabFilter"
description = "Desenvolvimento e avaliação de sistemas de recomendação de filmes usando regressão linear e FunkSVD"
tags = [
    "python",
    "machine-learning",
]
+++

Este projeto envolveu a análise exploratória de um dataset de ratings de filmes, com o objetivo de prever a nota que um utilizador daria a um filme, com base nas avaliações feitas por outros utilizadores.

Foram utilizados dois modelos de regressão linear construídos manualmente para prever ratings: um baseado apenas nos utilizadores e seus ratings, e outro que também incorporou metadata dos filmes.

Foi também implementado o modelo FunkSVD.

A metodologia incluiu a escolha dos melhores hiperparâmetros através de cross-validation, bem como a seleção do modelo final com base nas métricas RMSE e MAE. Adicionalmente, as métricas Precision@k, Recall@k, F1@k e MRR@k foram usadas para avaliar a performance dos modelos de recomendação.

{{< tabgroup >}}
{{< tab name="Relatório" >}}
<iframe src="https://hugoverissimo21.github.io/MLDriven-CollabFilter/report.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
