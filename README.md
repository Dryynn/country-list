# 🌍 Country List - Explorador de Nações

Uma aplicação web moderna e performática desenvolvida para listagem e visualização de informações sobre países, com foco em navegação simples e apresentação clara de dados.

Acesse aqui: [Country List](https://country-list-eta.vercel.app/)

![Banner do Projeto](https://raw.githubusercontent.com/Dryynn/country-list/main/public/logo.png)

## 🚀 Tecnologias

Este projeto foi construído com as seguintes tecnologias:

* **Next.js 16 (App Router)**: Framework React com suporte a SSR (Server-Side Rendering) e otimizações automáticas.
* **React 19**: Biblioteca para construção de interfaces reativas e eficientes.
* **Tailwind CSS 4**: Framework utilitário para estilização rápida e responsiva.
* **TypeScript**: Tipagem estática que contribui para maior segurança e escalabilidade do código.
* **Node.js**: Ambiente de execução utilizado no desenvolvimento.

## REST Countries API

A base de dados da aplicação é a **REST Countries API**, uma fonte global, gratuita e completa sobre países.

* **Consumo Inteligente**: É utilizado o parâmetro `fields` nas requisições para buscar apenas os dados necessários, reduzindo o tráfego de rede.
* **Caching**: Foi implementado `force-cache` no Next.js para garantir carregamento rápido após a primeira consulta.
* **Dados Abrangentes**: A API fornece informações como bandeiras em SVG, traduções, coordenadas geográficas e países vizinhos.

## Funcionalidades

* Listagem completa de países com cards informativos
* Visualização detalhada de cada país
* Exibição de dados como população, região, capital e idiomas
* Navegação dinâmica entre páginas
* Interconexão entre países vizinhos
* Interface responsiva para diferentes dispositivos

## Objetivos do Projeto

* Praticar consumo de APIs REST em ambiente Next.js
* Trabalhar manipulação de dados no front-end
* Desenvolver interfaces dinâmicas e performáticas
* Simular uma aplicação real de consulta geográfica

## 🛠️ Como Executar

1. **Clone o repositório:**

```bash
git clone https://github.com/Dryynn/country-list.git
```

2. **Acesse o diretório:**

```bash
cd country-list
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

5. **Acesse no navegador:**

```
http://localhost:3000
```