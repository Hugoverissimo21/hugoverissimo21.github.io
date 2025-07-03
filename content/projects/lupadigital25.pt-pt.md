+++
authors = ["Hugo Veríssimo"]
title = "Lupa Digital"
date = "2025-05-06"
repository = "https://github.com/LupaDigital25"
description = "Projeto de metajornalismo inteligente em larga escala (Arquivo.pt 2025)"
tags = [
    "python",
    "web-scraping",
    "data-analysis",
    "machine-learning",
    "spark",
    "nlp"
]
+++

Lupa Digital é um projeto desenvolvido no âmbito do concurso Prémios Arquivo.pt 2025, focado em metajornalismo inteligente. Utilizando ferramentas de inteligência artificial, o projeto analisa milhares de artigos jornalísticos desde o início da era digital para descobrir padrões, tendências e insights relevantes sobre qualquer tema. O objetivo é transformar grandes volumes de informação jornalística em conhecimento útil e acessível, contribuindo para o fortalecimento da literacia mediática e para uma compreensão mais crítica do ecossistema informativo.

O desenvolvimento do projeto ocorreu em várias etapas, cada uma delas documentada detalhadamente no repositório do GitHub, sendo modulares.

A primeira etapa consistiu na criação de um crawler para recolher artigos de notícias a partir do site do Arquivo.pt, uma plataforma de preservação digital de conteúdos da web. O crawler foi desenvolvido em Python, utilizando bibliotecas como Scrapy e BeautifulSoup para extrair informações relevantes dos artigos, como título e data.

A segunda etapa tem como base a criação de ferramentas de validação e mineração de dados, utilizando Spark, web scraping, técnicas de NLP e machine learning para validar e analisar os dados recolhidos. Essa fase envolveu a limpeza e transformação dos dados, onde o Spark foi fundamental para o processamento eficiente de grandes volumes de dados, e as técnicas de NLP extraíram informações relevantes dos textos. Modelos de machine learning foram implementados para identificar padrões e tendências, analisando mais de 3 milhões de artigos, dos quais cerca de 300 mil eram únicos e válidos.

A terceira etapa consistiu na limpeza, estruturação e análise dos dados para garantir qualidade e consistência. Foram removidas duplicatas, normalizados formatos e validados os dados. A análise exploratória utilizou estatística descritiva e visualização, identificando padrões e tendências relevantes nos artigos jornalísticos.

Na quarta etapa, foi criada uma interface web onde os utilizadores podem pesquisar e explorar os dados. Desenvolvida com o framework Flask e funções Spark, essa interface permite pesquisar qualquer tópico, visualizar menções ao longo do tempo na mídia portuguesa, explorar relações entre temas, como “saúde” e “política” ou “educação”, e exibir um grafo interativo com as 125 relações mais relevantes do tópico pesquisado. A visualização facilita a exploração intuitiva das conexões temáticas.

A quinta etapa envolveu a implementação da aplicação web com Docker, Nginx e outras tecnologias para garantir escalabilidade e disponibilidade. O uso de Docker possibilita contêineres isolados para cada componente, facilitando desenvolvimento e implantação, enquanto o Nginx atua como servidor web para entregar a aplicação Flask de forma rápida e eficiente.

Atualmente, a aplicação web está offline após meses de uptime devido a custos de alojamento, mas o código-fonte permanece disponível no repositório GitHub para replicação local.

Recomendo vivamente a exploração do [repositório do GitHub](https://github.com/LupaDigital25) para mais detalhes sobre o projeto.

A participação no concurso Prémios Arquivo.pt 2025 foi reconhecida com a colocação no TOP 5, tendo sido convidado para apresentação pessoal ao júri do concurso.

{{< tabgroup >}}
{{< tab name="Descrição Sumária" >}}
<iframe src="https://lupadigital25.github.io/assets/LupaDigital_hugoverissimo.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}

{{< tab name="Vídeo Submetido" >}}
<iframe src="https://www.youtube.com/embed/WSpXLZcwQSM"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}

{{< tab name="Slides de Apresentação" >}}
<iframe src="https://lupadigital25.github.io/assets/slides-arquivo.pdf"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}

{{< tab name="Slides Técnicos" >}}
<iframe src="https://lupadigital25.github.io/assets/slides/#/title-slide"
        width="100%"
        height="500px"
        style="min-height: 500px; aspect-ratio: 16 / 9;"
        loading="lazy">
        Este navegador não suporta iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}

