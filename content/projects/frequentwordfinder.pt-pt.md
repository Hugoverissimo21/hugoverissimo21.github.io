+++
authors = ["Hugo Veríssimo"]
title = "Análise de Palavras Frequentes em Livros"
date = "2024-12-24"
repository = "https://github.com/Hugoverissimo21/FrequentWordFinder"
description = "Comparação de algoritmos de contagem de palavras em traduções literárias do livro Pinóquio, usando técnicas exatas e probabilísticas"
tags = [
    "python",
    "algorithms",
]
+++

Através da biblioteca online Project Gutenberg, foram selecionadas três traduções do livro Pinóquio, em inglês, italiano e finlandês. O objetivo do projeto foi aplicar e comparar diferentes algoritmos de contagem de palavras para identificar as palavras mais frequentes em cada versão, e analisar semelhanças e diferenças entre os textos.

Foram utilizados três tipos de algoritmos:
- contadores exatos,
- contadores probabilísticos (como os baseados em hashing),
- contadores space-saving (com otimização de memória).

A análise consistiu em:
- identificação das palavras mais frequentes por livro,
- comparação entre os diferentes tipos de contadores (precisão vs. eficiência de memória),
- análise cruzada entre os livros, para detetar padrões linguísticos comuns ou distintos nas traduções.

Além de avaliar o desempenho dos algoritmos em termos de precisão e uso de memória, o projeto procurou entender se determinadas palavras ocorrem com frequência semelhante nas diferentes línguas, fornecendo também uma perspetiva linguística interessante sobre traduções de obras literárias.

{{< tabgroup >}}
{{< tab name="Relatório" >}}
<iframe src="https://hugoverissimo21.github.io/FrequentWordFinder/revdetua/report.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}