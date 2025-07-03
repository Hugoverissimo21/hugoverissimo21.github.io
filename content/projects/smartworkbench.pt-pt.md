+++
authors = ["Hugo Veríssimo", "..."]
title = "Smart Workbench"
date = "2025-06-16"
repository = "https://github.com/SmartWorkMCD"
description = "Projeto de automação e otimização de linhas de produção utilizando visão computacional e machine learning"
tags = [
    "python",
    "computer-vision",
    "algorithms",
    "docker"
]
+++

No âmbito do Mestrado em Ciência de Dados na Universidade de Aveiro, na cadeira de Seminário, enquanto turma criámos uma startup fictícia chamada Smart Workbench, com o objetivo de desenvolver um sistema baseado em dados não estruturados (câmeras) e estruturados (tempos e logs) para automatizar e otimizar uma linha de produção.

A ideia era maximizar a eficiência da linha, reduzindo o tempo de espera e aumentando a produtividade através da análise de dados e do uso de algoritmos de machine learning e deep learning, ajudando a prever falhas, otimizar processos e aliviar a carga cognitiva dos operadores.

Participação no projeto:

- Módulo de Hand Tracking: Desenvolvi um modelo de detecção de mãos utilizando a biblioteca MediaPipe, que identifica e rastreia as mãos dos operadores em tempo real. Este módulo é essencial para entender a interação dos operadores com a linha de produção e detectar ações específicas para otimização, servindo como input para o sistema.

- Módulo de Object Detection: Fui responsável pela coleta de dados (imagens e criação de labels) e validação de modelos de detecção de objetos usando as bibliotecas YOLO e RF-DETR, técnicas avançadas para esta tarefa. Este módulo identifica e classifica objetos na linha, permitindo análise detalhada do processo, identificação de gargalos e anomalias.

- Módulo de Task Division: Desenvolvi um algoritmo para distribuir tarefas eficientemente entre os operadores, baseado nos dados coletados pelos módulos anteriores, com programação linear binária. Este módulo otimiza a linha, garantindo uma divisão equilibrada e produtiva das tarefas, reduzindo tempos de espera.

<div style="display: flex; align-items: center; gap: 20px; list-style-type: disc; margin-block-start: 1em; margin-block-end: 1em; padding-inline-start: 40px;">

  <div style="flex: 1;">
    <li>Implementação e Integração: Participei na implementação dos módulos em Raspberry Pi e Coral Edge TPUs, incluindo montagem de projetores, câmeras e dispositivos. Integrei todos os módulos, garantindo operação integrada e eficiente em tempo real. A implementação foi feita via Docker, facilitando integração, portabilidade e execução em diferentes ambientes (servidores ou dispositivos embarcados). O sistema utiliza MQTT para comunicação descentralizada entre três estações de trabalho, permitindo troca de dados mínima e garantindo eficiência e rapidez.</li>
  </div>

  <img src="https://hugoverissimo21.github.io/images/IMG_6906.jpg" width="30%">

</div>

Este projeto representa uma solução completa para automação e otimização de linhas de produção usando tecnologias modernas de visão computacional e machine learning.