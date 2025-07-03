+++
authors = ["Hugo Veríssimo"]
title = "Previsão do Consumo Elétrico em Espanha"
date = "2025-06-11"
repository = "https://github.com/Hugoverissimo21/ElectricityForecastES"
description = "Modelação estatística e previsão do consumo elétrico mensal em Espanha (ARIMA, GARCH, ETS, STLM)"
tags = [
    "r",
    "time-series",
    "forecasting",
    "statistics",
]
+++

Projeto focado na previsão do consumo elétrico em Espanha, com base em dados históricos disponibilizados pelo EuroStat. O objetivo principal foi desenvolver um modelo de previsão robusto e preciso para auxiliar na gestão da rede elétrica e na tomada de decisões estratégicas a nível energético.

Foram explorados vários métodos estatísticos de séries temporais, nomeadamente ARIMA, GARCH, ETS e STLM, para modelar o consumo elétrico ao longo do tempo. Cada modelo foi devidamente ajustado, se pertinente, e validado estatisticamente, sendo posteriormente comparado com base em métricas de erro como RMSE e MAPE.

O modelo final foi escolhido tendo em conta a sua capacidade preditiva, estabilidade e fiabilidade face aos dados mais recentes.

{{< tabgroup >}}
{{< tab name="Relatório" >}}
<iframe src="https://hugoverissimo21.github.io/ElectricityForecastES/report/ST01.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}

{{< tab name="Slides" >}}
<iframe src="https://hugoverissimo21.github.io/ElectricityForecastES/slides.pdf"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}

{{< tab name="Código" >}}
<iframe src="https://hugoverissimo21.github.io/ElectricityForecastES/analysis.html"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}