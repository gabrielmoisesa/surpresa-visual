'use strict';

const LARGURA = 960;
const ALTURA = 600;

const moldura = document.getElementById('moldura');
const botao = document.getElementById('btn-nova-imagem');
const legenda = document.getElementById('legenda');
const anoRodape = document.getElementById('ano');

let totalExibidas = 0;

function gerarUrl() {
  return `https://picsum.photos/${LARGURA}/${ALTURA}?random=${Date.now()}`;
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

  const imagem = document.createElement('img');
  imagem.className = 'imagem';
  imagem.width = LARGURA;
  imagem.height = ALTURA;
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

  imagem.src = gerarUrl();
}

botao.addEventListener('click', carregarImagem);

anoRodape.textContent = new Date().getFullYear();
carregarImagem();
