# Semana Agilizei :zap: 

## Projeto desenvolvido durante a Semana Agilizei 1.0

A Semana Agilizei 1.0 visa em uma imersão de automação de testes com Cypress, do zero à integração contínua, online e gratuito, com duração de uma semana e com deesafios práticos.

### Sobre o projeto
O projeto consiste na automação de testes de interface de um [site](http://demo.automationtesting.in) utilizando Cypress.

### Setup 🛠️
Primeiramente, é necessário instalar o [Node.js](https://nodejs.org/en/download/)


Para inicializar o projeto, basta digitar no terminal (dentro da pasta do projeto):

`npm install`

Após, para rodar os testes, digitar no terminal:

Execução dos testes com navegador -> `npm run cy:open` ou `npx cypress open`

Execução dos testes sem navegador (modo headless) -> `npm run cy:run` ou `npx cypress run`

### Execução com Cucumber
Implementação do framework Cucumber. 

Execução -> `npm run cy:open:cucumber`

Modo headless -> `npm run cy:run:cucumber`

### Reports :page_facing_up:
Utilizado dois reports generators:
* Mochawesome
* Cucumber HTML Reports

#### Gerando relatório com Mochawesome:

`npm run report:merge` -> Gera os dados em um arquivo 'full_report.json'
`npm run report:mocha` -> Converte o arquivo 'full_report.json' para HTML

#### Gerando relatório com Cucumber HTML Reports:

`npm run report:cucumber` 


### Integração contínua :arrows_counterclockwise:

Foi utilizado o **Github Actions** para a integração contínua do projeto, e o **GitHub Pages** para publicar os relatórios em formato `.html`

:link: [Link para o relatório](https://denisalancardoso.github.io/semana-agilizei/)