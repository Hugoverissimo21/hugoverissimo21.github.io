+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Análise de Sentimentos de Frases Financeiras"
date = "2025-06-10"
repository = "https://github.com/Hugoverissimo21/finphrasebank-sentiment"
description = "Classificação de sentimentos em textos financeiros com LSTM e BERT, e com técnicas de otimização e data augmentation"
tags = [
    "python",
    "deep-learning",
    "nlp",
    "transformers",
]
+++

Este projeto consistiu na análise de sentimentos de frases financeiras, com base no dataset FinPhraseBank, que contém frases extraídas de relatórios financeiros e notícias. O objetivo foi desenvolver um modelo capaz de classificar o sentimento das frases como positivo, negativo ou neutro, contribuindo para uma melhor compreensão do impacto emocional de informações financeiras.

Foi utilizado o subconjunto com 75% de concordância entre anotadores, garantindo maior fiabilidade nas anotações. Deste conjunto, 80% foi usado para treino e 20% para teste, assegurando uma avaliação precisa do desempenho.

Modelos como fastText, LSTM e BERT foram testados com validação cruzada (5-CV) e *random search* para otimização de hiperparâmetros. O modelo BERT foi o escolhido final, com melhores resultados em precisão, recall e F1-score.

O BERT foi treinado em três variantes de dados:
- dataset com 75% de agreement,
- dataset com pesos na função de *loss* para diferentes níveis de concordância (formulação empírica),
- dataset com *data augmentation* no conjunto de 75%.

Estas abordagens visaram melhorar a robustez e generalização do modelo para diferentes contextos financeiros. Em particular, o uso de pesos na *loss* function ajudou a adaptar o modelo a frases com diferentes níveis de certeza, e o data augmentation aumentou a diversidade do *corpus*, resultando em melhorias concretas nos resultados.

{{< tabgroup >}}
{{< tab name="Relatório" >}}
<iframe src="https://hugoverissimo21.github.io/finphrasebank-sentiment/report/CAA02.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
