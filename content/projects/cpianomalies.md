+++
authors = ["Hugo Veríssimo"]
title = "CPI Anomaly Detector"
date = "2025-05-27"
repository = "https://github.com/Hugoverissimo21/cpi-anomaly-detector"
description = "Development of an anomaly detection system for economic time series using LSTM, applied to the Consumer Price Index (CPI)"
tags = [
    "python",
    "deep-learning",
    "time-series",
    "anomaly-detection",
]
+++

This project aims to detect anomalies in the Consumer Price Index (CPI), a key indicator used to measure inflation and the cost of living. The motivation is to identify unexpected and significant changes in consumer prices to support the analysis of economic dynamics and strategic decision-making.

Public data from over 200 countries was used to develop an adaptive, real-time (streaming) model capable of automatically detecting anomalies. The main model is based on Long Short-Term Memory (LSTM) networks, with a focus on economic time series.

Although the project remains unfinished due to the challenges of rigorously validating anomalies (which requires specialized knowledge), it was possible to identify variations associated with relevant economic events. These were supported by both the model and macroeconomic knowledge, highlighting the system’s potential as an automated monitoring tool.