+++
authors = ["Hugo Veríssimo"]
title = "Detetor de Anomalias no CPI"
date = "2025-05-27"
repository = "https://github.com/Hugoverissimo21/cpi-anomaly-detector"
description = "Desenvolvimento de um sistema de deteção de anomalias em séries temporais económicas com LSTM, aplicado ao Índice de Preços do Consumidor (CPI)"
tags = [
    "python",
    "deep-learning",
    "time-series",
    "anomaly-detection",
]
+++

Este projeto tem como objetivo a deteção de anomalias no Índice de Preços no Consumidor (CPI), um indicador fundamental para medir a inflação e o custo de vida. A motivação é identificar variações inesperadas e significativas nos preços ao consumidor, de forma a apoiar a análise de dinâmicas económicas e a tomada de decisões estratégicas.

Foram utilizados dados públicos de mais de 200 países, com o intuito de desenvolver um modelo adaptativo e em tempo real (streaming), capaz de identificar anomalias de forma automática. O modelo principal é baseado em redes LSTM (Long Short-Term Memory), com foco em séries temporais económicas.

Apesar do projeto estar inacabado, devido à dificuldade na validação rigorosa das anomalias (que exige conhecimento especializado), foi possível identificar variações associadas a eventos económicos relevantes, corroboradas tanto pelo modelo quanto por conhecimento macroeconómico, evidenciando o potencial do sistema como ferramenta de monitorização automatizada.