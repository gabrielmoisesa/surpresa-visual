# Surpresa Visual

Projeto desenvolvido para o TED 4 - Manipulação do DOM e dos elementos.

O sistema exibe uma imagem aleatória usando a API do [Picsum Photos](https://picsum.photos/). Ao clicar no botão **Nova imagem**, uma nova imagem é carregada na página. O projeto também apresenta estados de carregamento e erro, contador de imagens exibidas e um layout adaptado para telas menores.

## Objetivo

Praticar a manipulação de elementos HTML com JavaScript, atualizando o conteúdo e o estado da página de forma dinâmica, sem precisar recarregar o documento.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API externa Picsum Photos

## Manipulação do DOM utilizada

### Seleção de elementos

Os elementos da página são selecionados pelo `id` usando `document.getElementById()`:

```js
const moldura = document.getElementById('moldura');
const botao = document.getElementById('btn-nova-imagem');
const legenda = document.getElementById('legenda');
const anoRodape = document.getElementById('ano');
```

### Criação de elementos

Quando uma imagem precisa ser carregada, o elemento é criado pelo JavaScript com `document.createElement()`:

```js
const imagem = document.createElement('img');
```

O aviso de erro também é criado dinamicamente:

```js
const aviso = document.createElement('p');
```

### Alteração de propriedades e conteúdo

O projeto altera propriedades dos elementos, como `className`, `width`, `height` e `alt`. Também atualiza o texto visível usando `textContent`:

```js
imagem.className = 'imagem';
imagem.alt = 'Foto aleatoria do Picsum Photos';
legenda.textContent = `Imagem ${totalExibidas}`;
```

### Manipulação de atributos

O atributo `aria-busy` é atualizado com `setAttribute()` para informar se a imagem ainda está carregando:

```js
moldura.setAttribute('aria-busy', String(carregando));
```

### Manipulação de classes CSS

O método `classList.toggle()` adiciona ou remove a classe de carregamento conforme o estado atual:

```js
moldura.classList.toggle('moldura--carregando', carregando);
```

### Substituição de elementos filhos

O método `replaceChildren()` remove o conteúdo atual da moldura e insere a imagem carregada ou a mensagem de erro:

```js
moldura.replaceChildren(imagem);
moldura.replaceChildren(aviso);
```

### Eventos

O método `addEventListener()` é usado para reagir a eventos do usuário e da imagem:

- `click`: carrega uma nova imagem quando o botão é clicado.
- `load`: atualiza a moldura quando a imagem termina de carregar.
- `error`: exibe uma mensagem quando ocorre um erro no carregamento.

```js
botao.addEventListener('click', carregarImagem);
imagem.addEventListener('load', () => { /* imagem carregada */ });
imagem.addEventListener('error', () => { /* erro no carregamento */ });
```

## Outros recursos

- `window.matchMedia()` verifica se a tela é pequena e escolhe uma imagem em formato retrato para celulares.
- `disabled` impede novos cliques enquanto a imagem esta carregando.
- `Date.now()` cria uma URL diferente para solicitar uma nova imagem.
- O ano do rodapé é preenchido automaticamente com `new Date().getFullYear()`.
- As funções de evento usam funções de seta, como `() => {}`.

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Clique em **Nova imagem** para carregar outras imagens.

É necessário estar conectado à internet para que as imagens do Picsum Photos sejam carregadas.

## Autor

[Gabriel Moises Alves](https://github.com/gabrielmoisesa)
