
# Projeto TrybeSmith

###  Proposta: 


<details>
<summary>📝 Proposta</summary>
Durante o projeto, criei uma API de uma loja de itens medievais utilizando Typescript e Sequelize. A aplicação foi organizada em camadas, incluindo os serviços (Services) e controladores (Controllers) para tratar as operações de criação, leitura e atualização de informações.

Para garantir a segurança, implementei a autenticação JWT em algumas rotas, protegendo o acesso a recursos específicos. Além disso, desenvolvi testes para verificar o correto funcionamento das rotas e garantir a qualidade do código.

Através da API, é possível criar encomendas de itens medievais personalizados, como espadas, e consultar as informações relacionadas aos produtos disponíveis na loja. Também é possível atualizar os dados dos itens, como preço e descrição, conforme necessário.

O objetivo principal foi fornecer uma experiência segura e funcional para os usuários, permitindo que eles interajam com a loja medieval de forma eficiente e intuitiva.
</details>

## Instalação:

<details>
  <summary>🐳 Com Docker</summary>

Clone este repositório:
```bash
git clone git@github.com:vitor-nogueira-dev/trybesmith-api.git
```

Entre no diretório e instale as dependências:

```bash
cd trybesmith-api
npm install
```

Rode os serviços `app-trybesmith` e `db` com o comando `docker-compose up -d --build`

* Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers;

* Esses serviços irão inicializar um container chamado `trybesmith_api` e outro chamado `trybesmith_db`;

* A partir daqui você pode rodar o container `trybesmith_api` via CLI ou abri-lo no VS Code.

* Use o comando `docker exec -it trybesmith_api bash`, ou para acessar o container e executar lá:

* Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

* Instale as dependências [Caso existam] com `npm install` dentro do container `trybesmith_api`.

* Rode o comando `npm run db:reset` dentro do container `trybesmith_api` para criar o banco de dados e as tabelas.

⚠️ Atenção: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no `package.json` (`npm start, npm test, npm run dev`, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

*Para visualizar o logs do nodemon em seu terminal use os seguintes comandos: `docker ps`: para visualizar os containers ativos e pegar o `CONTAINER ID`; `docker logs -f <id_do_container>`: para visualizar os logs do seu servidor com nodemon;

</details>

<details>
<summary>🧪 Execução de testes localmente</summary>
Para rodar os seus testes localmente utilize o seguinte comando:

```bash
npm run test:local
```

Para os verificar seus testes de cobertura utilize o seguinte comando:
```bash
npm run test:coverage
```

</details>

<details>
<summary>✅ Testes do avaliador</summary>
Para rodar os testes de um único exercício faça:

```bash
npm test <N>
## Exemplo: npm test 01
```

Para todos os exercícios faça:
```bash
npm test
```
</details>
<details>
<summary>📄 Documentação API</summary>

| Endpoint         | Descrição                                                                                                                                                               |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| POST /products   | Cadastra um novo produto na tabela "products" do banco de dados.                                                                                                        |
| GET /products    | Lista todos os produtos cadastrados na tabela "products" do banco de dados.                                                                                             |
| GET /orders      | Lista todos os pedidos cadastrados na tabela "orders" do banco de dados, incluindo os ids dos produtos associados a cada pedido.                                         |
| POST /login      | Realiza o login de um usuário, validando os campos "username" e "password" no banco de dados e retorna um token JWT contendo o id e o username do usuário autenticado. |
| POST /orders     | Cadastra um novo pedido na tabela "orders" do banco de dados. Atualiza os produtos relacionados com os ids fornecidos na chave "productIds" com o orderId do pedido.    |

</details>

<details>
<summary>💡 Stacks utilizadas</summary>

Linguagem de programação: ![Typescript](https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp; </br>
Framework de desenvolvimento: ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)&nbsp; </br>
Banco de dados: ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)&nbsp; </br>
ORM (Object-Relational Mapping): ![Sequelize](https://img.shields.io/badge/Sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=white)&nbsp; </br>
Ferramenta de análise de código estática: ![ESLint](https://img.shields.io/badge/ESLint-00000F?style=for-the-badge&logo=eslint&logoColor=white)&nbsp; </br>
Ferramenta de formatação de código: ![Prettier](https://img.shields.io/badge/Prettier-00000F?style=for-the-badge&logo=prettier&logoColor=white)&nbsp; </br>
Ferramenta de formatação de código: ![JWT](https://img.shields.io/badge/JWT-00000F?style=for-the-badge&logo=json-web-tokens&logoColor=white)&nbsp; </br>
</details>


