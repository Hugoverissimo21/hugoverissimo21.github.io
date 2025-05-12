+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Sistemas de Recomendação"
date = "2025-01-25"
repository = "https://github.com/Hugoverissimo21/MLDriven-CollabFilter"
description = "Sistemas de Recomendação"
tags = [
    "python",
    "machine-learning",
]
+++

projeto que envolveu a analise exploratorio de um dataset de ratings de filmes, com o objetivo de prever a nota que um utilizador daria a um filme, tendo em conta as notas dadas por outros utilizadores.

os modelos utilizados foram duas regressoes lineares construidas a mao para a previsao de ragings, uma tendo em conta os utilizadores e os seus ratings nos diferentes e outra tendo em conta isso e a metadata fo filme

tambem foi usado o modelo FunkSVD

a metodologia envolveu a escolha dos melhores hiperparametros atraves de CV, bem como a escolha do modelo final com base na sua performance em termos de RMSE e MAE. tambem foram usadas as metricas Precision@k, Recall@k e F1@k e MRR@k para avaliar a performance dos modelos de recomendacao.


<iframe src="https://hugoverissimo21.github.io/MLDriven-CollabFilter/report.pdf"
        width="100%"
        height="600px">
        Este navegador não suporta iframes.
</iframe>