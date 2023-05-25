const form = document.querySelector('#section-carta form');
const pcarta = document.querySelector('#carta-gerada');
const fundos = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const efeitos = ['rotateleft', 'skewleft', 'rotateright', 'skewright'];

const generateRandomNumber = (number) => Math.floor(Math.random() * (number));

const geraCartaMisteriosa = (frase) => {
  const arrayPalavras = frase.split(' ');
  pcarta.innerHTML = '';
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    const fundoEscolhido = fundos[generateRandomNumber(fundos.length)];
    const efeitoEscolhido = efeitos[generateRandomNumber(efeitos.length)];
    const tamanhoEscolhido = efeitos[generateRandomNumber(tamanho.length)];

    const span = document.createElement('span');

    span.innerText = arrayPalavras[index];
    span.classList.add(fundoEscolhido);
    span.classList.add(efeitoEscolhido);
    span.classList.add(tamanhoEscolhido);

    pcarta.appendChild(span);
  }
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

formEvent(); 
