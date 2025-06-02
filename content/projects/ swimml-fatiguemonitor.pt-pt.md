+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Classificação de Fadiga em Atletas de Natação"
date = "2024-11-27"
repository = "https://github.com/Hugoverissimo21/SwimML-FatigueMonitor"
description = "Classificação de Fadiga em Atletas de Natação"
tags = [
    "python",
    "machine-learning",
]
+++

Este projeto é focado na aplicação de Machine Learning para estimar níveis de fadiga em nadadores, com o objetivo de prevenir lesões por sobrecarga.

foi feita a coleta de dados por parte de uma equipa de natacao local, sobre varios dos seus atletas

um pre processamento dos dados para garantir a sua qualidade e integridade e possiblidade de aplicacao de algoritmos de machine learning

realaizacao de feature engineering para extrair variaveis relevantes dos dados brutos, nomeadamente o uso de EWMA

foi usado um Support Vector Machine (SVM), logistic regression e decision tree para classificar os dados em 3 classes de fadiga

para cada modelo foi usado 5cv para a escolha dos melhores hiperparametros e a escolha do modelo final

cada modelo final foi avalidado tendo em conta a sua performance em termos de accuracy, precision, recall e f1-score e confusion score e learning curve garantindo a sua robustez e fiabilidade

o projeto foi apresentado na conferencia \/ meter um comprovativo ou assim? ver se o nome esta certo

IJCNN 2025 - https://confcats-siteplex.s3.us-east-1.amazonaws.com/ijcnn25/IJCNN_2025_Program_77b2d8aef4.pdf#page=51

<iframe src="https://hugoverissimo21.github.io/SwimML-FatigueMonitor/report.pdf"
        width="100%"
        height="600px">
        Este navegador não suporta iframes.
</iframe>



