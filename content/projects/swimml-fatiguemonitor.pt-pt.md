+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Classificação de Fadiga em Atletas de Natação"
date = "2024-11-27"
repository = "https://github.com/Hugoverissimo21/SwimML-FatigueMonitor"
description = "Aplicação de modelos de machine learning para classificar níveis de fadiga em nadadores, visando prevenção de lesões"
tags = [
    "python",
    "machine-learning",
]
+++

Este projeto foca-se na aplicação de Machine Learning para estimar níveis de fadiga em nadadores, com o objetivo de prevenir lesões por sobrecarga.

Foi feita a recolha de dados por parte de uma equipa local de natação, abrangendo vários atletas. Seguiu-se um pré-processamento dos dados para garantir qualidade, integridade e adequação à aplicação de algoritmos de machine learning.

Realizou-se feature engineering para extrair variáveis relevantes dos dados brutos, destacando-se o uso de EWMA (Exponentially Weighted Moving Average).

Foram utilizados modelos como Support Vector Machine (SVM), regressão logística e decision tree para classificar os dados em três classes de fadiga.

Cada modelo passou por validação com 5-fold cross-validation para escolha dos melhores hiperparâmetros e seleção do modelo final.

A performance dos modelos finais foi avaliada através de métricas como accuracy, precision, recall, f1-score, matriz de confusão e curvas de aprendizagem, assegurando robustez e fiabilidade.

O projeto foi apresentado na conferência IJCNN 2025:  
[Programa IJCNN 2025 (p.152)](https://confcats-siteplex.s3.us-east-1.amazonaws.com/ijcnn25/IJCNN_2025_Program_77b2d8aef4.pdf#page=152)

{{< tabgroup >}}
{{< tab name="Relatório" >}}
<iframe src="https://hugoverissimo21.github.io/SwimML-FatigueMonitor/report.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}

{{< tab name="Slides" >}}
<iframe src="https://hugoverissimo21.github.io/SwimML-FatigueMonitor/slides.pdf"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
