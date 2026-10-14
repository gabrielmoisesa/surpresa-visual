'use strict';

const TAMANHO_PAISAGEM = { largura: 960, altura: 600 };
const TAMANHO_RETRATO = { largura: 600, altura: 750 };

const CELULAR = window.matchMedia('(max-width: 480px)');

const moldura = document.getElementById('moldura');
const botao = document.getElementById('btn-nova-imagem');
const legenda = document.getElementById('legenda');
const anoRodape = document.getElementById('ano');

let totalExibidas = 0;

function gerarUrl(tamanho) {
  return `https://picsum.photos/${tamanho.largura}/${tamanho.altura}?random=${Date.now()}`;
}

function definirCarregando(carregando) {
  botao.disabled = carregando;
  botao.textContent = carregando ? 'Carregando…' : 'Nova imagem';
  moldura.classList.toggle('moldura--carregando', carregando);
  moldura.setAttribute('aria-busy', String(carregando));
}

function mostrarErro() {
  const aviso = document.createElement('p');
  aviso.className = 'moldura__aviso';
  aviso.textContent =
    'Não foi possível carregar a imagem. Verifique sua conexão e tente de novo.';

  moldura.replaceChildren(aviso);
  legenda.textContent = '';
}

function carregarImagem() {
  definirCarregando(true);

  const tamanho = CELULAR.matches ? TAMANHO_RETRATO : TAMANHO_PAISAGEM;

  const imagem = document.createElement('img');
  imagem.className = 'imagem';
  imagem.width = tamanho.largura;
  imagem.height = tamanho.altura;
  imagem.alt = 'Foto aleatória do Picsum Photos';

  imagem.addEventListener('load', () => {
    moldura.replaceChildren(imagem);
    totalExibidas += 1;
    legenda.textContent = `Imagem ${totalExibidas}`;
    definirCarregando(false);
  });

  imagem.addEventListener('error', () => {
    mostrarErro();
    definirCarregando(false);
  });

  imagem.src = gerarUrl(tamanho);
}

botao.addEventListener('click', carregarImagem);

anoRodape.textContent = new Date().getFullYear();
carregarImagem();
