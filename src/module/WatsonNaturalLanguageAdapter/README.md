# Módulo Watson Natural Language 

## Descrição

[Watson Keywords](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs)

- Um módulo que utiliza api watson para selecionar as palavras chaves de um texto.

## Instalação

```bash
  npm install ibm-watson
```

## Como utilizar o modulo

- Modo default

```ts
import { WatsonNaturalLanguageAdapter } from "./module/WatsonNaturalLanguageAdapter";

const result = await WatsonNaturalLanguageAdapter.analyze("pastel de frango");
console.log(result);
```

- Buscando por um idioma específico

```ts
const result = await WatsonNaturalLanguageAdapter.analyze(
  "chicken pastel",
  "en"
);
```

### Definindo as credenciais

- É preciso se cadastrar na IBM Cloud para utilizar o módulo, eles irão fornecer um arquivo de configuração que conterá "apikey" e "url"
 - Depois é só criar um arquivo .env e colocar suas credenciais nele(Apenas o texto):


```bash
  API_KEY=Coloque o conteúdo da "apikey" sem as ("")
  URL_SERVICE=Coloque o conteúdo "url" sem as ("")
```

```ts
export const ConfigWatson: IConfigWatson = {
  authenticator: new IamAuthenticator({
    apikey: process.env.API_KEY,
  }),
  version: "2018-04-05",
  serviceUrl: process.env.URL_SERVICE,
};
```

- Em alguns caso é preciso instalar o [dotenv](https://www.npmjs.com/package/dotenv) para você ter acesso as variáveis de ambiente.

```bash
  npm i dotenv
```

- Modo de usar

```js
require("dotenv").config();
```

- Para mais informações sobre como utilizar o [dotenv](https://www.npmjs.com/package/dotenv) acesse <a style="margin:5px" href="https://github.com/motdotla/dotenv#readme" target="blank"><img style="margin-right:5px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" width="15" alt="github icone" />https://github.com/motdotla/dotenv#readme</a>

## Contato

- Author - Wilson Felipe <a style="margin:5px" href="https://www.linkedin.com/in/wilson-felipe-725538176/" target="blank"><img style="margin-right:5px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" width="15" alt="github icone" />
  Github
  </a>
  <a style="margin:5px" href="https://www.linkedin.com/in/wilson-felipe-725538176/" target="blank"><img style="margin-right:5px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/256px-Linkedin_icon.svg.png" width="15" alt="Linkedin icone" />
  Linkedin
  </a>

## License

[MIT licensed](LICENSE).

