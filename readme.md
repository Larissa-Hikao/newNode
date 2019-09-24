# Desenvolvimento Web 2 - Aplicação Web com Node.js+Express

Protótipo de uma aplicação Node.js + Express desenvolvido como exemplo na disciplina Desenvolvimento Web 2 do curso de Análise e Desenvolvimento de Sistemas do [IFSP - Campus Caraguatatuba](https://www.ifspcaraguatatuba.edu.br/).

## Primeiros Passos

### Pré-Requisitos

- Node.js >= 8.15 https://nodejs.org/en/
- npm >= 6.8 https://www.npmjs.com/
- git >= 2.17 https://git-scm.com/

### Instalação

Clone esse repositório usando a ferramenta _git_:

```
git clone https://github.com/edupsousa/dw2-declaracoes-prova.git
```

Acesse o diretório do projeto e instale as dependência usando o _npm_:

```
cd dw2-declaracoes-prova
npm install
```

Para executar o aplicativo digite:

```
npx nodemon
```

Pronto! Você pode acessar o aplicativo no endereço: http://localhost:3000/

## Passo a Passo do Desenvolvimento

Essa seção descreve os passos mais importantes do processo de desenvolvimento da aplicação desde a configuração do ambiente do projeto. Use-a para tirar dúvidas sobre as atividades desenvolvidas durantes as aulas.

### 1. Arquivo .gitignore

Commit: [58129a8e9a1750b16eedc46a47619b44408eabf2](https://github.com/edupsousa/dw2-declaracoes-prova/commit/58129a8e9a1750b16eedc46a47619b44408eabf2)

O arquivo .gitignore especifíca os arquivos e diretórios que não devem ser adicionados ao repositório git. Uma boa prática é utilizar um dos modelos fornecidos pelo próprio github que podem ser encontrados [aqui](https://github.com/github/gitignore).

Um erro comum é adicionar os arquivos por engano antes da criação do arquivo .gitignore, nesse caso você pode fazer como descrito [aqui](http://www.codeblocq.com/2016/01/Untrack-files-already-added-to-git-repository-based-on-gitignore/).

A documentação oficial você encontra [aqui](https://git-scm.com/docs/gitignore).

### 2. Iniciar o projeto NPM (npm init)

Commit: [aeb92266b7927acd1f05b4ee9ae7226a2d4189cf](https://github.com/edupsousa/dw2-declaracoes-prova/commit/aeb92266b7927acd1f05b4ee9ae7226a2d4189cf)

O arquivo package.json contém as configurações do projeto para uso com a ferramenta `npm`, neste arquivo serão registradas as dependências do projeto, comandos para execução e testes do projetos, etc. Para maiores informações sobre o arquivo `package.json` clique [aqui](https://docs.npmjs.com/files/package.json).

Para criar esse arquivo de forma automatizada basta executar o comando `npm init`. Para maiores informações sobre o comando clique [aqui](https://docs.npmjs.com/cli/init).

### 3. Primeiro servidor Web com Node.js

Commit: [0b4ab52eefb269c59a06e51421adb6b9ed1e06bd](https://github.com/edupsousa/dw2-declaracoes-prova/commit/0b4ab52eefb269c59a06e51421adb6b9ed1e06bd)

Neste commit nós criamos o nosso primeiro servidor Web com Node.js. Para quem está acostumado com outras linguagens voltadas ao desenvolvimento Web, como PHP, uma das maiores diferenças é que com o Node.js é sua responsabilidade criar e iniciar o servidor Web, isso é feito por meio da biblioteca http do Node.js que nós importamos com a linha:

```js
const http = require('http');
```

Você pode conhecer as bibliotecas integradas ao Node.js na sua [documentação](https://nodejs.org/dist/latest-v12.x/docs/api/). Para mais informações sobre importação e exportação de módulos do Node.js e módulos externos você pode dar uma olhada nesse guia [aqui](https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/).

Para executar o servidor basta digitar no console `node index.js`, para encerrar pressione `Ctrl+C`. Quando o servidor estiver em execução você pode acessá-lo pelo navegador no endereço http://localhost:3000. A porta 3000 do endereço foi definida na chamada para a função `listen`, verifique a documentação dessa função [aqui](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_server_listen).

```js
server.listen(3000, () => {
  console.log(...);
});
```

Quando você acessar o servidor uma mensagem deverá ser mostrada no console e outra no navegador, essas mensagens foram definidas no callback passado para a função `http.createServer`.

```js
const server = http.createServer((req, res) => {
  console.log(...);
  res.end(...);
});
```

Esse callback é chamado de `requestListener`, a cada nova requisição do navegador essa função é executada para gerar uma nova resposta para o navegador, mais informações sobre o assunto [aqui](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_createserver_options_requestlistener). Além disso vale a pena dar uma olhada nesse tutorial em português sobre o assunto no [blog da Caelum](https://blog.caelum.com.br/como-criar-um-servidor-http-com-nodejs/).

### 4. Instalando dependências

Commit: [cfb316358827f12d18715a616cffef50f7d71188](https://github.com/edupsousa/dw2-declaracoes-prova/commit/cfb316358827f12d18715a616cffef50f7d71188)

O Node.js é uma ferramenta muito popular, isso pode ser visto pela número de bibliotecas e ferramentas criadas pela comunidade para facilitar o desenvolvimento com ele. Para pesquisar por ferramentas e bibliotecas acesse o site do NPM https://www.npmjs.com/.

Neste commit nós instalaremos duas ferramentas que irão auxiliar no processo de desenvolvimento, a primeira delas é o [nodemon](https://www.npmjs.com/package/nodemon) e a outra é a biblioteca [debug](https://www.npmjs.com/package/debug).

Ambas as ferramentas irão auxiliar no processo de desenvolvimento, o `nodemon` será utilizado para monitorar as alterações no código e reiniciar o Node.js sempre que alguma alteração for detectada, evitando que precisemos fazer isso manualmente. Já a biblioteca `debug` será utilizada para gerar mensagens no console que auxiliam na detecção de erros.

Essas duas ferramentas são instaladas de forma ligeiramente diferente, o `nodemon` com o comando `npm install -D nodemon` e a `debug` com o comando `npm install -P debug`. Perceba a diferença das flags `-P` e `-D`, essas flags determinam em quais ambientes as bibliotecas devem ser instaladas. No caso do `nodemon` ele foi instalado com a flag `-D` e por isso estará disponível somente no ambiente de desenvolvimento. Já o `debug` foi instalado com a flag `-P` e por isso estará disponível nos ambientes de desenvolvimento e também de produção. Para mais informações sobre o `npm install` e suas flags consulte a documentação [aqui](https://docs.npmjs.com/cli/install).

Você pode ter notado que com essa instalação o arquivo `package.json` foi alterado e um novo arquivo chamado `package-lock.json` foi criado, esses arquivos armazenam informações sobre as dependências do nosso projeto e essas alterações dizem quais bibliotecas e quais versões foram instaladas, facilitando que qualquer pessoa possa copiar nosso projeto e instalar todas as dependências necessárias. As bibliotecas por sua vez são instaladas no diretório `node_modules`, esse diretório não é salvo para nosso repositório devido as configurações do arquivo `.gitignore`.

### 5. Ferramenta `nodemon` e comando `npx`

A ferramenta nodemon monitora os arquivos do projeto e reinicia o Node.JS sempre que alguma mudança for detectada. Inicialmente nós não vamos precisar de nenhuma configuração para usar essa ferramenta, basta abrir um terminal no diretório do projeto e digitar `npx nodemon` para executar. Acesse o servidor no navegador e veja o resultado, depois altere a mensagem no arquivo `index.js` e salve, atualize a página do navegador e a mudança deverá aparecer pois o nodemon já reiniciou o Node.js. A documentação do nodemon você encontra [aqui](https://nodemon.io/).

O comando `npx` permite executar as ferramentas instaladas com o `npm` no diretório do nosso projeto sem que seja necessário configurar o caminho para os executáveis (variável PATH) dessas ferramentas.

Você encontra a documentação do npx [aqui](https://www.npmjs.com/package/npx).

### 6. Biblioteca debug

Commit: [9be9ee0d6c15a24a73dcf513be40362b26351279](https://github.com/edupsousa/dw2-declaracoes-prova/commit/9be9ee0d6c15a24a73dcf513be40362b26351279)

A biblioteca debug permite inserir mensagens em nosso código para serem exibidas no console de forma muito semelhante a função `console.log`. Porém, ao utilizar a biblioteca debug você pode definir quando essas mensagens devem ou não serem exibidas por meio da variável de ambiente DEBUG. Boiou? Calma que você já vai entender! ;)

O primeiro passo é importarmos a biblioteca, isso é feito usando a função require como sempre. Só que dessa vez você vai perceber que a chamada para o require está com um conjunto de parênteses e um argumento a mais, assim:

```js
const debug = require('debug')('servidor');
```

Isso porque a biblioteca debug exporta uma função, que é usada para definir o _namespace_ das mensagens que serão exibidas no console. _Namespace_ é só um identificador que podemos usar para saber de onde vem as mensagens que estão sendo exibidas no console, e também para filtrarmos quais mensagens devem ser exibidas ou não. O código acima poderia ser reescrito de forma didática assim:

```js
const bibliotecaDebug = require('debug');
const debug = bibliotecaDebug('servidor');
```

O resultado é o mesmo, porém a primeira forma é mais sucinta e é a forma utilizada normalmente, então não tem jeito, você vai precisar se acostumar.

Depois que a função `debug` foi criada e configurada nós podemos utilizá-la da mesma forma que a função `console.log`, simplesmente chamando `debug('mensagem')`. Se você executar o código agora, provavelmente nenhuma mensagem será exibida. Para exibir você deve definir a variável de ambiente DEBUG informando de quais _namespaces_ você quer ver as mensagens. No Prompt de Comando do Windows você pode fazer assim:

```
set DEBUG=servidor & node index.js
//ou
set DEBUG=servidor & npx nodemon
```

No caso nós definimos que somente as mensagens do _namespace_ servidor serão mostradas. Você pode definir vários _namespaces_ diferentes separados por vírgula, ou usar asterisco para mostrar todos. Saiba, porém, que diversas bibliotecas utilizam a biblioteca debug, e se você mostrar tudo (\*) as mensagens dessas bibliotecas também serão mostradas. Dẽ uma olhada na documentação da biblioteca debug [aqui](https://www.npmjs.com/package/debug).

### 7. Express

O Express https://expressjs.com/ (ou sua versão traduzida https://expressjs.com/pt-br/) é um framework bastante popular na criação de aplicações Web com o Node.js. É importante salientar que não é necessário utilizar um framework como o Express para desenvolver uma aplicação Web, as bibliotecas integradas ao Node.js já possuem todas as funcionalidades necessárias para isso. Entretanto, utilizar um framework torna o processo de desenvolvimento muito mais simples e eficiente, pois evitar que tenhamos que _reinventar a roda_ desenvolvendo funcionalidades que são comuns a maioria das aplicações Web.

O framework, portanto, possui implementado um conjunto de funcionalidades que são comuns a maior parte das aplicações Web, a lista abaixo mostra apenas algumas dessas funcionalidades:

- Roteamento de Requisições: definir quem irá tratar e responder a requisições para diferentes URLs e diferentes métodos do protocolo HTTP.
- Tratamento de Cookies: obter os cookies do navegador do usuário a cada requisição e torná-los disponível para a aplicação.
- Definir cabeçalhos e status das respostas enviadas para o usuário: definir o código de status correto para requisições bem sucedidas, redirecionamentos e erros.

Portanto, apesar de não ser estritamente necessário, é praticamente impensável construir uma aplicação Web (a não ser aquelas muito simples) sem o uso de um framework como o Express.

### 8. Middlewares

Quando criamos nosso primeiro servidor Web utilizando apenas a biblioteca HTTP vimos que nossas requisições eram tratadas por uma função chamada _RequestListener_, essa função recebe a requisição do usuário e deve gerar a resposta apropriada para essa requisição.

O Express trabalha de forma bastante parecida, teremos funções responsáveis por tratar as requisições e gerar as respostas para o usuário. No Express essas funções são chamadas de _Middleware_, essa função possui uma assinatura bastante semelhante ao _RequestListener_ recebendo como os dois primeiros parâmetros objetos que representam a requisição recebida e a resposta que será enviada, porém, o _Middleware_ possui um terceiro parâmetro chamado _next_. Esse parâmetro é utilizado para chamar o próximo _Middleware_ responsável pelo tratamento da requisição.

Assim, uma única requisição pode ser tratada por diversos _Middlewares_ em sequência, até que um _Middleware_ envie a resposta ao usuário e encerre a cadeia de _Middlewares_ sem chamar a função _next_.

Por exemplo, suponha que o usuário acessou uma página para trocar sua senha no sistema, preencheu o formulário com a nova senha e enviou para o servidor. Em uma aplicação desenvolvida com o framework Express essa requisição seria tratada por diversos Middlewares em uma sequência parecida com essa:

1. Um _Middleware_ lê os cabeçalhos da requisição e extrai os cookies.
1. Outro _Middleware_ busca uma sessão no banco de dados a partir dos cookies extraídos na primeira etapa, ao encontrar carrega os dados do usuário que abriu a sessão.
1. Em seguida um _Middleware_ obtém os dados do formuário enviado e disponibiliza para os demais.
1. Um _Middleware_ autentica se os dados do formulário pertencem ao usuário que abriu a sessão.
1. Um _Middleware_ realiza a alteração da senha.
1. Um último _Middleware_ envia uma página em resposta ao usuário.

No exemplo acima, cada um dos _Middlewares_ (exceto o último) desempenharia sua funcionalidade e chamaria a função `next` para executar o próximo _Middleware_. Perceba que os primeiros _Middlewares_ podem ser reaproveitados para outras partes do sistema, e apenas os últimos tratam essa requisição específica. O reaproveitamento de código é uma das grandes vantagens no uso de _Middlewares_.

O Express permite que os _Middlewares_ sejam atribuídos a todas as requisições recebidas (caso dos primeiros no exemplo), ou a requisições específicas, de acordo com a URL requisitada ou o método HTTP utilizado.

### 9. Instalação e primeiro middleware

Commit: [6515cc07399d0b961aa4e45139e6ccc9c4995b68](https://github.com/edupsousa/dw2-declaracoes-prova/commit/6515cc07399d0b961aa4e45139e6ccc9c4995b68)

A instalação do Express é feita por meio do comando `npm install -P express`. O módulo `express` exporta uma função, a qual é responsável pela criação da aplicação Express. Para a documentação da aplicação Express clique [aqui](https://expressjs.com/pt-br/4x/api.html#app).

```js
const express = require('express');
const app = express();
```

A aplicação Express possui uma série de funções para o registro de _Middlewares_ no tratamento de requisições. A principal função para registrar _Middlewares_ é chamada `use`.

A função `use` pode receber como parâmetro somente o _Middleware_ ou um caminho de URL e o _Middleware_. Caso seja passado somente o _Middleware_ então ele será aplicado a qualquer requisição recebida, caso a URL seja informada então ele será aplicado somente nas requisições para a URL informada, independente do método HTTP utilizado.

```js
app.use('/', (req, res, next) => {
  res.send('Mensagem...');
});
```

No exemplo acima o Middleware será aplicado a qualquer requisição para a URL /. Este Middleware envia um texto para o navegador e encerra sua execução, dessa forma nenhum outro Middleware é executado após ele.

### 10. Implementando um Middleware para log de requisições

Commit: [ee829de448271627d5440bb2d746125862597509](https://github.com/edupsousa/dw2-declaracoes-prova/commit/ee829de448271627d5440bb2d746125862597509)

Nesse commit criamos um Middleware para realizar o log das requisições no console, aqui é importante percebermos alguns detalhes da implementação: (a) não foi especificada uma URL no registro do Middleware, (b) o método `next()` é chamado ao fim do Middleware e por fim (c) a posição onde o Middleware é especificado no código, antes do Middleware registrado para o tratamento das requisições para a URL /. Esses detalhes tem as seguintes implicações:

(a) O Middleware será executado para todas as requisições recebidas, independente do método ou da URL especificadas.

(b) O tratamento da requisição não é finalizado nesse Middleware, que apenas realiza o log da requisição, o envio da resposta ao navegador é delegado para os Middlewares subsequentes.

(c) Como este é o primeiro Middleware registrado no nosso código ele será executado para todas as requisições recebidas. Caso o Middleware tivesse sido registrado após o Middleware para / ele não seria executado no caso de requisições para /, pois este Middleware não chama o método `next()`.

### 11. Application.use() X Application.METHOD()

Commit: [708e81c72d08afbb33257be85e2949c6e5a02a79](https://github.com/edupsousa/dw2-declaracoes-prova/commit/708e81c72d08afbb33257be85e2949c6e5a02a79)

Até aqui utilizamos somente a função `use()` para registro de Middlewares, entretanto essa função tem algumas características que não são adequadas para todos os usos.

Quando especificamos uma URL para a função _use_ como em `use('/', ...)` essa URL é determinada de maneira parcial, ou seja, esse Middleware será aplicado a qualquer requisição iniciada por `/`, como em http://localhost:3000/erro. Outra característica dessa função é que ela será aplicada a requisições independentemente do método HTTP utilizado, como GET ou POST.

Para tornar nossos Middlewares mais específicos podemos utilizar outras funções do objeto Application baseadas no método HTTP desejado, como GET ou POST, que são mapeados para as funções `Application.get()` e `Application.post()`, respectivamente.

Essas funções, além de especificarem o método HTTP para o qual as requisições serão tratadas, também tem como característica o uso de URLs de forma exata, ou seja, o Middleware registrado com a chamada `app.get('/', ...)` irá tratar apenas requisições para / e não mais URLs iniciadas por /.

```js
app.get('/', (req, res, next) => {
  ...
});
```

### 12. Implementando Middleware para URLs desconhecidas (Erro 404)

Commit: [7dfff8818e25aedd301ffa0da7e7a93f8fd0c3f6](https://github.com/edupsousa/dw2-declaracoes-prova/commit/7dfff8818e25aedd301ffa0da7e7a93f8fd0c3f6)

Quando alteramos o registro do Middleware da função `use` para a função `get` nós deixamos de tratar as requisições recebidas para URLs não registradas. Para implementarmos um Middleware que trate essas requisições basta o registrarmos após todos os demais Middlewares utilizando a função `use` sem passarmos um caminho como parâmetro, assim, todas as requisições não tratadas pelo Middleware anteriores serão tratadas por esse Middleware.

```js
app.use((req, res, next) => {
  res.sendStatus(404);
});
```

### 13. Usando Middlewares de bibliotecas externas (morgan)

Commit: [67826717acc1dc2febed27edac705bbb427618cb](https://github.com/edupsousa/dw2-declaracoes-prova/commit/67826717acc1dc2febed27edac705bbb427618cb)

Nas etapas anteriores desenvolvemos um Middleware simples para realizar o log das requisições recebidas, entretanto, existem um pacote disponível no repositório do NPM, chamado [morgan](https://www.npmjs.com/package/morgan), que desempenha essa mesma função, com recursos muito além daqueles que implementamos.

Para instalar esse pacote basta usar o comando `npm install -P morgan`, em seguida para utilizar a biblioteca em nossa aplicação devemos realizar a importação e em seguida o registro do Middleware.

```js
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
```

A string passada como parâmetro para a função morgan determina o formato do log gerado, para mais informações consulte a documentação [aqui](https://www.npmjs.com/package/morgan).

### 14. Adicionando uma biblioteca para templates (ejs)

Commit: [fccdf79e1eba3384595280107ba87d686459bea4](https://github.com/edupsousa/dw2-declaracoes-prova/commit/fccdf79e1eba3384595280107ba87d686459bea4)

A biblioteca EJS permite a criação de páginas HTML a partir de templates construídos com a linguagem JavaScript, para utilizar a biblioteca o primeiro passo é realizar a instalação com o comando:

```bash
npm install -P ejs
```

Feito isso é preciso configurar a aplicação criada com o Express para utilizar essa biblioteca, isso é feito logo após a criação do objeto app com o método `app.set('view engine', 'ejs')`, outra configuração bastante comum é a definição do diretório onde os templates serão armazenados, mais uma vez com o método `set`, porém, passando como primeiro parâmetro a string `'views'` e como segundo parâmetro o caminho para o diretório relativo ao diretório raiz da aplicação. Para mais informações sobre o método `set` e outras configurações do Express [clique aqui](https://expressjs.com/en/api.html#app.set).

```javascript
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
```

Nessa etapa criamos um template na pasta _views_ chamado _index.ejs_, esse template cria uma página HTML simples, mostrando a variável `titulo` no título da página e em um elemento h1 no corpo da página. Para mais informações sobre como incluir código JavaScript na página [clique aqui](https://ejs.co/).

```html
<html>
  <head>
    <title><%= titulo %></title>
  </head>
  <body>
    <h1><%= titulo %></h1>
  </body>
</html>
```

Para exibir o template utilizamos o método _render_ do objeto _response_ passado pelo Express para nosso Middleware. Esse método recebe dois parâmetros, o nome do template e um objeto que será passado ao template. As propriedades desse objeto constituem as variáveis que estarão disponíveis no template:

```javascript
app.get('/', (req, res, next) => {
  res.render('index', {
    titulo: 'Gerador de Declarações de Prova'
  });
});
```

### 15. Roteamento de Requisições no Express

Até agora registramos os middlewares para o tratamento de requisições diretamente em nossa aplicação Express (`app`). Esse método funciona bem para pequenas aplicações com poucas rotas, entretando, conforme nossa aplicação for crescendo o arquivo `index.js` pode ser tornar grande e complicado demais com todos os middlewares registrados. Para tornar nosso código mais organizado e mais reusável nós devemos separar as requisições por meio do objeto `express.Router()` ([documentação da função](https://expressjs.com/pt-br/4x/api.html#express.router)).

```js
const express = require('express');
const router = express.Router();
```

O objeto `Router` ([documentação do objeto](https://expressjs.com/pt-br/4x/api.html#router)) pode registrar middlewares da mesma forma que o objeto `Application`, utilizando métodos com nomes iguais ao dos métodos HTTP que deseja tratar (use, get, post, put, delete...).

```js
router.get('/', (req, res, next) => {
  ...
});

router.get('/nova', (req, res, next) => {
  ...
});

router.post('/nova', (req, res, next) => {
  ...
});
```

Depois que nosso `router` estiver criado e os middlewares registrados, podemos acoplá-lo a nossa aplicação da mesma forma que qualquer outro middleware.

```js
const app = express();

app.use('/prova', router);
```

Dessa forma o nosso router responderá as requisições direcionadas para as urls iniciadas por `/provas`:

```
GET /provas/
GET /provas/nova
POST /provas/nova
```

Uma aplicação pode possuir diversos routers, é uma boa prática que cada novo router seja criado em um arquivo separado, em nosso caso utilizaremos o diretório `/routes` para cada novo router. Quando um router é criado em um arquivo separado basta exportá-lo por meio da diretiva `module.exports = router`, e então importá-lo no arquivo onde definimos nossa aplicação.

### 16. Tratamento de dados enviados via formulário com o método POST

Quando um formulário de uma página HTML submete os dados para a aplicação utilizando o método POST, esses dados são geralmente enviados no corpo da requisição em um formato como `chave1=valor&chave2=valor` com os caracteres especiais convertidos para o formato de codificação de URLs (ex. espaços se tornam `%20`). Para saber mais [clique aqui](https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa).

Para que o Express seja capaz de tratar esses dados nós devemos utilizar um middleware externo chamado `body-parser`. Assim, o primeiro passo é instalar esse middleware:

```
npm install -P body-parser
```

Depois de instalado podemos utilizar o middleware registrando-o logo após a criação do nosso objeto `Application` do Express:

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
```

A biblioteca `body-parser` possui diversas funções, cada qual capaz de tratar um tipo específico de dados enviados na requisição. Em nosso caso utilizaremos apenas o formato urlencoded por enquanto, se estivessemos construindo uma API REST precisaríamos registrar também o middleware provido pelo método `json()` para tratar dados enviados nesse formato. A documentação do body-parser está disponível [aqui](https://www.npmjs.com/package/body-parser).

É importante que o registro desse middleware seja feito antes de qualquer outro que precise utilizar os dados enviado, pois só após sua execução os dados se tornam disponíveis para os demais middlewares no objeto `req.body`. Exemplo:

```html
<form action="/login" method="post">
  <input type="text" name="usuario" />
  <input type="text" name="senha" />
</form>
```

```js
app.post('/login', (req, res, next) => {
  var usuario = req.body.usuario;
  var senha = req.body.senha;
  ...
});
```

### 17. Arquitetura MVC

A arquitetura MVC é uma das mais comuns na organização do código das aplicações WEB. Essa arquitetura divide a aplicação em 3 camadas distintas: Model, View e Controller. Cada uma dessas camadas tem responsabilidades distintas, os componentes da camada View devem atuar exclusivamente nas tarefas de exibição da aplicação, em nosso caso essa camada será formada pelos templates desenvolvidos com a biblioteca EJS. A camada Model se ocupa da representação/persistência dos dados da aplicação e da lógica de negócio associada a eles, por fim a camada Controller faz a ligação entre as duas camadas anteriores, recebendo as requisições do usuário, obtendo os dados necessários da camada Model e então repassando-os para que a camada View faça a exibição.

O primeiro passo será dividir o nosso código em diretórios separados de acordo com a camada onde o código atua. O diretório `/views` já existe e contém os templates que criamos com o EJS, assim devemos criar os diretórios `/controllers` e `/models`.

#### Controllers

O código dos Controllers será basicamente o mesmo código que até agora utilizamos nos middlewares, devemos então copiar os middlewares existentes para o diretório `controllers` e exportar cada middleware para que possa ser utilizado em nossos `routers`. Exemplo:

```js
/* /controllers/provasController.js */

exports.getProva = (req, res, next) => { ... }
exports.getProvas = (req, res, next) => { ... }
exports.postProva = (req, res, next) => { ... }
```

```js
/* /routes/provasRouter.js */

const router = express.Router();
const controller = require('../controllers/provasController.js');

router.get('/prova', controller.getProva);
router.get('/provas', controller.getProvas);
router.post('/prova', controller.postProva);
```

Alguns detalhes importantes devem ser notados no exemplo acima, em primeiro lugar a forma de exportarmos as funções no controller é diferente do que fizemos até agora, isso pois precisamos exportar diversas funções em um mesmo arquivo, assim ao invés de definir o objeto `module.exports` para o objeto que desejamos exportas, nós utilizamos somente o objeto `exports`, atribuindo cada função a uma propriedade desse objeto.

Outro ponto importante é que no roteador nós **_não invocamos_** as funções (middlewares! Nós apenas passamos uma referência para cada uma das funções e a invocação é feita no momento que a requisição for recebida.

#### Models

No diretório `/models` ficará o código responsável pelos dados de nossa aplicação, em um primeiro momento iremos criar apenas uma classe para representar o objeto enviado por meio do formulário, e os métodos responsáveis por salvar este objeto e obter uma lista dos objetos salvos.

Essa implementação segue um padrão chamado _ActiveRecord_, no qual a instância do objeto representa um registro do banco de dados e implementa os métodos necessários para persistir esse objeto no banco de dados. A classe por sua vez possui os métodos responsáveis por consultar e obter as instância do objeto a partir do banco de dados.

Como ainda não temos uma conexão com o banco de dados o nosso código irá salvar os objetos em um arquivo JSON, futuramente iremos implementar a persistência com o banco de dados.

Para visualizar o código do nosso _ActiveRecord_ com o armazenamento em arquivo [clique aqui](https://github.com/edupsousa/dw2-declaracoes-prova/blob/a8a8cf7484557c4e5748661e5ef2f23d2be25a9d/models/provaModel.js).
