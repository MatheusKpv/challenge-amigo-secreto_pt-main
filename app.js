let listaAmigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nomeAmigo = input.value.trim();

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome válido");
  } else {
    verificaResultElement();

    if (listaAmigos.includes(nomeAmigo)) {
      alert(`${nomeAmigo} já está na lista!`);
    } else {
      listaAmigos.push(nomeAmigo);

      const listElement = document.getElementById("listaAmigos");
      listElement.innerHTML = "";

      listaAmigos.forEach((amigo) => appendLi(listElement, amigo));
    }
  }

  input.value = "";
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Por favor, adicione algum nome à lista");
  } else {
    const listElement = document.getElementById("listaAmigos");
    listElement.innerHTML = "";

    const amigoSorteado =
      listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    const resultElement = document.getElementById("resultado");
    appendLi(resultElement, `O amigo secreto sorteado é: ${amigoSorteado}`);

    listaAmigos = [];
  }
}

function appendLi(element, textContent) {
  const li = document.createElement("li");
  li.textContent = textContent;
  element.appendChild(li);
}

function verificaResultElement() {
  const resultElement = document.getElementById("resultado");
  if (resultElement.innerHTML !== "") {
    resultElement.innerHTML = "";
  }
}
