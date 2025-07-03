+++
authors = ["Hugo Veríssimo"]
title = "Electricity Consumption Forecast in Spain"
date = "2025-06-11"
repository = "https://github.com/Hugoverissimo21/ElectricityForecastES"
description = "Statistical modeling and forecasting of monthly electricity consumption in Spain (ARIMA, GARCH, ETS, STLM)"
tags = [
    "r",
    "time-series",
    "forecasting",
    "statistics",
]
+++

This project focuses on forecasting electricity consumption in Spain, based on historical data provided by EuroStat. The main objective was to develop a robust and accurate forecasting model to support power grid management and strategic energy decision-making.

Several statistical time series methods were explored, including ARIMA, GARCH, ETS, and STLM, to model electricity consumption over time. Each model was properly tuned, where applicable, and statistically validated, then compared using error metrics such as RMSE and MAPE.

The final model was selected based on its predictive ability, stability, and reliability with the most recent data.

{{< tabgroup >}}
{{< tab name="Report" >}}
<iframe src="https://hugoverissimo21.github.io/ElectricityForecastES/report/ST01.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}

{{< tab name="Slides" >}}
<iframe src="https://hugoverissimo21.github.io/ElectricityForecastES/slides.pdf"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}

{{< tab name="Code" >}}
<iframe src="https://hugoverissimo21.github.io/ElectricityForecastES/analysis.html"
        width="100%"
        height="750px"
        loading="lazy">
        This browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
