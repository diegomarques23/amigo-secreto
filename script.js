const form = document.getElementById('form');
const inputNome = document.getElementById('nome');
const lista = document.getElementById('lista');
const resultadoDiv = document.getElementById('resultado');

const participantes = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = inputNome.value.trim();
  if (nome === "") return;

  if (participantes.includes(nome)) {
    alert("Este nome já foi adicionado!");
  } else {
    participantes.push(nome);
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
    inputNome.value = "";
  }
});

function embaralhaArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

document.getElementById('sortear').addEventListener('click', function() {
  if (participantes.length < 2) {
    alert("É preciso pelo menos 2 participantes para sortear.");
    return;
  }

  const listaEmbaralhada = embaralhaArray([...participantes]);

  const resultado = [];
  for (let i = 0; i < listaEmbaralhada.length; i++) {
    const nome = listaEmbaralhada[i];
    const amigo = listaEmbaralhada[(i + 1) % listaEmbaralhada.length];
    resultado.push(`${nome} → ${amigo}`);
  }

  resultadoDiv.innerText = resultado.join('\n');
});
