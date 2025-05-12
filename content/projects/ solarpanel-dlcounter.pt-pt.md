+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Contagem de Painéis Fotovoltaicos e Solares a partir de Imagens Aéreas"
date = "2025-05-05"
repository = "https://github.com/Hugoverissimo21/SolarPanel-DLCounter"
description = "Contagem de Painéis Fotovoltaicos e Solares a partir de Imagens Aéreas"
tags = [
    "python",
    "deep-learning",
    "computer-vision",
]
+++

Este projeto tem como objetivo a contagem de painéis fotovoltaicos e solares a partir de imagens aéreas, utilizando técnicas de Deep Learning e Computer Vision. O projeto foi desenvolvido no ambito da competicao Zindi lacuna, que deu todas as imagens relativas a paneis em madagascar

envolveu a limpeza e pre-processamento dos dados, incluindo a correcao de varios poligonos


<div style="display: flex; align-items: center; gap: 20px;">

  <div style="flex: 1;">
    <p>criacao de modelos hibridos, combinando ResNet, EfficientNet e DenseNet para extrair features de imagens com attention-head para juntar a features extraids da metadata da imagem para posterior regressao no numero de cada tipo de paineis</p>
  </div>

  <img src="https://hugoverissimo21.github.io/SolarPanel-DLCounter/assets/nn (slides).png" width="45%">

</div>


modelos de instance segmentation e de object detection para o mesmo fim

a metodologia envolveu a escolha dos melhores hiperparametros atraves de cross-validation, bem como a escolha do modelo final com base na sua performance em termos de MAE, sendo a unica metrica de avaliacao dada pela competicao


<iframe src="https://hugoverissimo21.github.io/SolarPanel-DLCounter/report.pdf"
        width="100%"
        height="600px">
        Este navegador não suporta iframes.
</iframe>