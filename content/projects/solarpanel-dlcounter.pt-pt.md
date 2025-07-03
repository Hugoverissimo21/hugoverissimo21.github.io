+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Contagem de Painéis Fotovoltaicos e Solares a partir de Imagens Aéreas"
date = "2025-05-05"
repository = "https://github.com/Hugoverissimo21/SolarPanel-DLCounter"
description = "Deteção e contagem de painéis solares em imagens aéreas com deep learning e visão computacional"
tags = [
    "python",
    "deep-learning",
    "computer-vision",
]
+++

Este projeto tem como objetivo a contagem de painéis fotovoltaicos e solares a partir de imagens aéreas, utilizando técnicas de Deep Learning e Computer Vision. Foi desenvolvido no âmbito da competição Zindi Lacuna, que disponibilizou imagens relativas a painéis em Madagascar.

O trabalho envolveu limpeza e pré-processamento dos dados, incluindo correção de vários polígonos.

<div style="display: flex; align-items: center; gap: 20px;">

  <div style="flex: 1;">
    <p>Criação de modelos híbridos, combinando ResNet, EfficientNet e DenseNet para extrair features das imagens, com attention-head para agregar features extraídas da metadata da imagem, para posterior regressão do número de cada tipo de painéis.</p>
  </div>

  <img src="https://hugoverissimo21.github.io/SolarPanel-DLCounter/assets/nn (slides).png" width="45%">

</div>

Também foram utilizados modelos de instance segmentation e object detection com o mesmo objetivo.

A metodologia incluiu a escolha dos melhores hiperparâmetros via cross-validation e a seleção do modelo final com base na sua performance em termos de MAE, única métrica de avaliação fornecida pela competição.

{{< tabgroup >}}
{{< tab name="Relatório" >}}
<iframe src="https://hugoverissimo21.github.io/SolarPanel-DLCounter/report.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}