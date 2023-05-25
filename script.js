const form = document.querySelector('#section-carta form');
const pcarta = document.querySelector('#carta-gerada');
const fundos = ['misterio1', 'misterio2', 'misterio3'];
const efeitos = ['rotateleft', 'skewleft', 'rotateright', 'skewright'];

const generateRandomNumber = (number) => Math.floor(Math.random() * (number));

const geraCartaMisteriosa = (frase) => {
  const arrayPalavras = frase.split(' ');
  pcarta.innerHTML = '';
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    const fundoEscolhido = fundos[generateRandomNumber(fundos.length)];
    const efeitoEscolhido = efeitos[generateRandomNumber(efeitos.length)];

    const span = document.createElement('span');

    span.innerText = arrayPalavras[index];
    span.classList.add(fundoEscolhido);
    span.classList.add(efeitoEscolhido);

    pcarta.appendChild(span);
  }
};

const formEvent = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fraseInput = document.querySelector('#carta-texto');
    geraCartaMisteriosa(fraseInput.value);
  });
};

formEvent();
