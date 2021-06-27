---
layout: post
title:  "[pt-br] Crie seu blog com o Jekyll em 4 minutos.. (ou menos)"
permalink: /:year/:month/:day/:title:output_ext
date:   2017-10-22 00:00:00 -0300
archived: true
---

Existem infinitas maneiras de fazer tudo. Por isso que é importante avaliar os efeitos de nossas decisões, mesmo quando o assunto é nosso ainda-não-tão-visitado blog.

Utilizar serviços como o Wordpress e o Blogger é certamente a alternativa mais ágil. Mas isso, infelizmente, acopla nosso conteúdo a projetos muito rígidos e pouco receptivos a customizações e otimizações.

Exibir textos e imagens, de maneira rápida e atraente ao leitor, é tudo que a maioria dos blogs precisa. Imagine se você pudesse escrever arquivos `.txt` talvez `.md`, coloca-los num diretório e _apenas commita-los_ pra publicar um novo post.

Pois é, isso existe! Alguém já teve essa ideia e criou o Jekyll... o ponto de partida para entrarmos em nossa aventura rumo a criação do blog perfeito.

![Rick convidando Morty para uma aventura](/assets/rick-and-morty.jpg "Wubba lubba dub-dub!")

### Instalando o Jekyll

O Jekyll é uma ferramenta que nos ajudará a converter arquivos Markdown em páginas HTML navegáveis. Como ele é uma biblioteca Ruby (ou uma `gem`), você precisará ter o Ruby 2.1 (ou superior) instalado antes de mais nada, então verifique a versão da sua instalação:
```
$ ruby -v
ruby 2.3.4p301 (2017-03-30 revision 58214) [x86_64-darwin17]
```
Se você tiver uma versão abaixo do 2.1 ou não tiver o Ruby instalado, [confira aqui](https://www.ruby-lang.org/en/documentation/installation) o processo de instalação.

Com uma versão válida do Ruby configurada, podemos finalmente nos preocupar com o Jekyll. Para o instalarmos, executamos a linha a seguir, que também instalará o Bundler (um gerenciador de aplicações Ruby):
```
$ gem install jekyll bundler
```

Por fim, executamos `jekyll -v` para garantir que a instalação foi bem sucedida. Se você visualizar algo como `jekyll 3.6.2`, quer dizer que está tudo pronto e finalmente temos a principal ferramenta instalada na nossa máquina. Essa foi a parte difícil.

### Criando nosso primeiro blog

Bom, agora vamos finalmente pedir para o Jekyll criar o esqueleto do nosso primeiro blog com o comando..
```
$ jekyll new nosso-blog
```

...logo em seguida, executamos:
```
$ cd nosso-blog && jekyll serve
```

![ScreenShot com o Minima](/assets/minima-screenshot.jpg "Minima")

Agora é só acessar [http://127.0.0.1:4000](http://127.0.0.1:4000) e **WOW!** Já está tudo funcionando (com um layout triste, eu sei) mas funcionando. Vamos entender um pouco sobre como o Jekyll funciona, olhando só pra saída do comando `tree`.

```
$ tree
.
├── 404.html
├── Gemfile
├── Gemfile.lock
├── _config.yml
├── _posts
│   └── 2017-10-22-welcome-to-jekyll.markdown
├── _site
│   ├── 404.html
│   ├── about
│   │   └── index.html
│   ├── assets
│   │   └── main.css
│   ├── feed.xml
│   ├── index.html
│   └── jekyll
│       └── update
│           └── 2017
│               └── 10
│                   └── 22
│                       └── welcome-to-jekyll.html
├── about.md
└── index.md
```

- O `_config.yml` armazena todas configurações do seu blog e variáveis globais, acessíveis a qualquer momento na aplicação;
- O diretório `_site` recebe os arquivos estáticos gerados pelo Jekyll, este é o diretório que "vai pra produção" no final das constas;
- O `Gemfile` é o arquivo que descreve as dependências do nosso projeto, enquanto o `Gemfile.lock` é um arquivo gerado que descreve as dependências instaladas;
- Os arquivos `about.md` e `index.md` geram páginas estáticas HTML, respectivamente, `about/index.html` e `index.html`;
- Apesar do `404.html` já ser um arquivo HTML, ele também é processado, ganhando o cabeçalho `<head>`, o `<footer>` e tudo mais que está definido no layout default;
- Por fim, no diretório `_posts`, adicionamos nossos posts formatados usando Markdown (pode alterar o `2017-10-22-welcome-to-jekyll.markdown` e começar sua primeira empreitada).

Mas... você deve estar pesando: - De onde vem esse layout default? E esse `main.css`? Boa sacada se você estava pensando isso! O nosso `_config.yml` tem uma linha que define o tema que está sendo utilizado, veja:
```
theme: minima
```
...e no `Gemfile`, a dependência com este tema também está declarada:
```
gem "minima", "~> 2.0"
```
Podemos mudar isso, alterando todo o layout do nosso blog em apenas 3 passos:
- No `Gemfile`, substituímos a linha `gem "minima", "~> 2.0"` por `gem "jekyll-swiss"`;
- No `_config.yml`, substituímos a linha `theme: minima` por `theme: jekyll-swiss`.
- E finalmente, baixamos as dependências com:

```
$ bundle install
```

...e pronto! Vamos rodar a aplicação para ver o que acontece:

```
$ jekyll serve
```

![ScreenShot com o Swiss](/assets/swiss-screenshot.jpg "Jekyll Swiss")

**Woow!** olha só [http://127.0.0.1:4000](http://127.0.0.1:4000). Além dos temas oficiais [minima](https://github.com/jekyll/minima), [swiss](https://github.com/broccolini/swiss) e [athena](https://github.com/broccolini/athena). Você pode encontrar muito outros em [http://jekyllthemes.org](jekyllthemes.org).

### Deploy

O processo de deploy do Jekyll é realmente simple e super integrado com o GitHub pages.

Tudo que você precisa fazer é criar um repositório chamado _seu_username.github.io_ e commitar o projeto que criamos na branch `master`. No meu caso, meu _username_ é `karreiro`, então o repositório do meu blog é `karreiro.github.io`.

Tudo será automaticamente buildado e seu site já estará disponível.

### Faça você mesmo

Apesar de existirem muitos temas legais, neste blog (karreiro.com), preferi fazer um fork do `minima` e incrementa-lo com o framework CSS [miligram](milligram.github.io). Dessa maneira consegui chegar exatamente no estilo que gostaria. Fique a vontade para dar uma olhada do código fonte em [https://github.com/karreiro/karreiro.github.io](https://github.com/karreiro/karreiro.github.io) e se inspirar.

Divirta-se ;-)




