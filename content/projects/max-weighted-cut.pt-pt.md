+++
authors = ["Hugo Veríssimo"]
title = "Problema do Corte-Máximo (Max-Cut)"
date = "2024-11-09"
repository = "https://github.com/Hugoverissimo21/max-weighted-cut"
description = "Resolução do problema NP-difícil Max-Cut com algoritmos determinísticos e estocásticos"
tags = [
    "python",
    "algorithms",
]
+++

O problema do corte-máximo (Max-Cut) é um problema NP-difícil que consiste em dividir um grafo em dois subconjuntos, com o objetivo de maximizar o peso das arestas cortadas entre eles. Este projeto foca-se na resolução do problema utilizando tanto algoritmos determinísticos como estocásticos, incluindo o Simulated Annealing.

O trabalho está dividido em duas vertentes principais:

- Algoritmos determinísticos:<br>com implementação de pesquisa exaustiva e pesquisa gulosa para solução exata ou aproximada.

- Algoritmos estocásticos:<br>com métodos como Corte Aleatório, Simulated Annealing e Guloso Aleatório, que buscam soluções aproximadas de forma eficiente.

Foram avaliados os algoritmos em termos de complexidade, precisão, número de soluções testadas e trade-offs entre precisão e eficiência computacional, além da previsão de tempos de execução em função do tamanho do grafo.

Inclui ainda pseudocódigos para melhor compreensão dos métodos aplicados.

{{< tabgroup >}}
{{< tab name="Relatório 1" >}}
<iframe src="https://hugoverissimo21.github.io/max-weighted-cut/deterministic.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}

{{< tab name="Relatório 2" >}}
<iframe src="https://hugoverissimo21.github.io/max-weighted-cut/probabilistic.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}

