<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br>

<a href="#Contability API">Contability API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#Tecnologias-Utilizadas">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#Como-Instalar-o-Projeto">Como Instalar o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#Como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#Deploy-da-aplicação">Deploy da aplicação</a>

<br>

## <strong>Contability API</strong>

<br>

<br>

<img width="958" alt="postgree" src="https://github.com/HMontarroyos/ForTech/assets/60220406/333001cc-6a77-4473-8a16-72ee888762ba">

<br/>
<br/>
<br/>

Essa API foi desenvolvida inteiramente em NodeJS com o proposito, de receber planilhas de custos de clientes no formato XLSX, e após isso conferir se bate com as propriedades esperadas pelo modelo, caso confirma ela converte esses dados em uma espécie de JSON e salva no banco de dados que é o PostgreSQL, facilitando o gerenciamento e a visualização futura, também criei um endpoint que é possível deletar do banco alguma planilha caso seja necessário.

<br/>
<br/>

<p align="right">(<a href="#readme-top">de volta ao topo</a>)</p>

### <strong>Tecnologias Utilizadas</strong>

<br>

[![NodeJS][NodeJS]][NodeJS-url]
[![Typescript][Typescript]][Typescript-url]
[![PostgreSql][PostgreSql]][PostgreSql-url]
[![Sequelize][Sequelize]][Sequelize-url]
[![Express][Express]][Express-url]
[![Cors][Cors]][Cors-url]
[![Body_Parser][Body_Parser]][Body_Parser-url]
[![uuid][uuid]][uuid-url]
[![Dotenv][Dotenv]][Dotenv-url]
[![Nodemon][Nodemon]][Nodemon-url]
[![Multer][Multer]][Multer-url]
[![xlsx][xlsx]][xlsx-url]
[![Jest][Jest]][Jest-url]
[![Docker][Docker]][Docker-url]

<br>

### <strong>Utilitários</strong>

 [![Postman][Postman]][Postman-url]

<br>

<p align="right">(<a href="#readme-top">de volta ao topo</a>)</p>

### <strong>Como Instalar o Projeto</strong>

<br>

```sh
npm install
```

Você também vai precisar de um arquivo .env na raiz do seu projeto com as seguintes informações 

```sh
POSTGRES_DATABASE = ''
POSTGRES_USERNAME=''
POSTGRES_PASSWORD=''
POSTGRES_HOST=localhost
PORT= 4002
```

Substituindo pelas informações suas como o nome do seu <b>Database</b>, <b>Username</b> e <b>Password</b>, o <b>Host</b> e <b>Port</b> você pode deixar ou alterar da maneira que desejar. 

Você também vai precisar ter o banco <i>PostgreSQL</i>, instalado na sua maquina rodando na porta dele, para isso você pode baixar ele para o seu ambiente de desenvolvimento através desse <a href="https://www.postgresql.org/download/">Link</a>


Após baixar todas as Dependências do Projeto dentro da pasta Raiz, inicie o Servidor com o Comando:

```sh
 npm start
```

### <strong>Como usar</strong>

<br>

Feito todo os passos acima o seu servidor por default vai estar na rodando na porta que você definiu na sua variavel <b>PORT</b> no seu <i>.env</i> . 

#### Endpoints 

Para Fazer as chamadas dos endpoints da API seria necessario ter algum cliente servidor no meu caso eu usei o <i>Postman</i> mas qualquer um já serviria.

<i>Estou usando a porta 4002 pois foi ela que defini no meu arquivo .env, você pode usar ela ou outra que definiu só não esqueça de alterar na chamada</i>

### GET 

http://localhost:4002/contability/transactions/

<br/>
Essa  rota irá listar as planilhas salvas no nosso banco de Dados se você já tiver salvo algo vai te devolver um JSON com os dados ou um Array vazio caso o banco esteja limpo. 
</br>

### POST 

http://localhost:4002/contability/import

<br/>
Essa  rota é onde você vai enviar seu arquivo <i>.xlsx</i> e ele vai fazer essa conversão para o JSON e salvar no banco, caso de sucesso ele vai te devolver essa mensagem <i>Transactions imported successfully</i>.

Mas para isso será necessario você enviar um arquivo valido e com os requisitos da API, com as propriedades da tabela a mesma do modelo, caso contrario a API vai te alertar informando algo no body o status code do error e a message dele.

Para testar eu deixei um arquivo .xlsx na pasta uploads na raiz do projeto onde você caso esteja usando o Postman por exemplo pode ir na opção <b>Body</b> e no <i>key</i> escrever file por exemplo e escolher do tipo <i>file</i> e no <i>Value</i> você seleciona o arquivo <b>TESTE_PLANILHA.xlsx</b> da pasta <i>uploads</i> e emvia. 
</br>

### DELETE 

http://localhost:4002/contability/transactions/:id

<br/>
Essa  rota irá deletar uma planilha especifica definida pelo seu <i>id</i> no final do /:id é so substituir pelo id em questão e ao submeter ele será deletado do banco, caso não exista o id ou já estiver sido deletado ele vai lhe alertar com uma mensagem no body, caso exista ele será deletado e você verá a mensagem informando que foi deletado junto a um status code 200
</br>

#### Testes 

Caso queira rodar os testes para vê se está tudo correto pode executar o seguinte comando 

```sh
npm test
```
que o Jest vai executar os tests que foram criados para ele.

<br>

### 🚀 Let's code! 🚀

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/HMontarroyos/contability_api.svg?style=for-the-badge
[contributors-url]: https://github.com/HMontarroyos/contability_api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HMontarroyos/contability_api.svg?style=for-the-badge
[forks-url]: https://github.com/HMontarroyos/contability_api/fork
[stars-shield]: https://img.shields.io/github/stars/HMontarroyos/contability_api.svg?style=for-the-badge
[stars-url]: https://github.com/HMontarroyos/contability_api/stargazers
[issues-shield]: https://img.shields.io/github/issues/HMontarroyos/contability_api.svg?style=for-the-badge
[issues-url]: https://github.com/HMontarroyos/contability_api/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hebertmontarroyos-developer/



[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[PostgreSql]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSql-url]: https://www.postgresql.org/
[Sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org/
[Express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[Cors]: https://img.shields.io/badge/cors-1C1E24?style=for-the-badge
[Cors-url]: https://www.npmjs.com/package/cors
[Body_Parser]: https://img.shields.io/badge/Body%20Parser-%23CF4647.svg?style=for-the-badge
[Body_Parser-url]: https://www.npmjs.com/package/body-parser
[uuid]: https://img.shields.io/badge/uuid-black?style=for-the-badge
[uuid-url]: https://www.npmjs.com/package/uuid
[Dotenv]: https://img.shields.io/badge/Dotenv-FF6600?style=for-the-badge
[Dotenv-url]: https://www.npmjs.com/package/dotenv
[Nodemon]: https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD
[Nodemon-url]: https://www.npmjs.com/package/nodemon
[Multer]: https://img.shields.io/badge/Multer-black?style=for-the-badge
[Multer-url]: https://www.npmjs.com/package/multer
[xlsx]: https://img.shields.io/badge/xlsx-%23white.svg?style=for-the-badge
[xlsx-url]: https://www.npmjs.com/package/xlsx
[Jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/pt-BR/
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Postman]: https://img.shields.io/badge/Postman-gray?style=for-the-badge&logo=postman
[Postman-url]: https://www.postman.com/

