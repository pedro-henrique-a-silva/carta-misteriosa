const form = document.querySelector('#section-carta form');
const pcarta = document.querySelector('#carta-gerada');
const pCartaContador = document.querySelector('#carta-contador');

const fundos = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const efeitos1 = ['rotateleft', 'rotateright'];
const efeitos2 = ['skewleft', 'skewright'];

const generateRandomNumber = (number) => Math.floor(Math.random() * (number));

const generateRandomStyle = () => {
  const fundoEscolhido = fundos[generateRandomNumber(fundos.length)];
  const efeitoRotacao = efeitos1[generateRandomNumber(efeitos1.length)];
  const efeitoInclinacao = efeitos2[generateRandomNumber(efeitos2.length)];
  const tamanhoEscolhido = tamanho[generateRandomNumber(tamanho.length)];

  return [fundoEscolhido, efeitoRotacao, efeitoInclinacao, tamanhoEscolhido];
};

const geraCartaMisteriosa = (frase) => {
  const arrayPalavras = frase.split(' ');

  pcarta.innerHTML = '';
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    const estilos = generateRandomStyle();

    const span = document.createElement('span');

    span.innerText = arrayPalavras[index];
    span.classList.add(estilos[0]);
    span.classList.add(estilos[1]);
    span.classList.add(estilos[2]);
    span.classList.add(estilos[3]);

    pcarta.appendChild(span);
  }
  pCartaContador.innerText = arrayPalavras.length;
};

const formEvent = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fraseInput = document.querySelector('#carta-texto');
    if (fraseInput.value.trim()) {
      geraCartaMisteriosa(fraseInput.value);
    } else {
      pcarta.innerText = 'Por favor, digite o conteúdo da carta.';
    }
  });
};

const palavraEvent = () => {
  pcarta.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
      const estilos = generateRandomStyle();
      const elemento = event.target;
      elemento.className = '';
      console.log(estilos);

      elemento.classList.add(estilos[0]);
      elemento.classList.add(estilos[1]);
      elemento.classList.add(estilos[2]);
      elemento.classList.add(estilos[3]);
    }
  });
};

formEvent();
palavraEvent();
