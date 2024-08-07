
//*******CURSO INTENSIVO DE FUNDAMENTOS DA LINGUAGEM JS******

//VARIaVEIS

//Existe variaveis do tipo string, numero, booleano, vetor, e obejto 
let nome = "lucas filipe ramos"
let idade = 25
let temFé = true;
let esportesfavoritos=["futebol", "basquete", "volei"];
let infoPais = {
  mae: "marisa ramos",
  idade: 64,
}    
console.log(nome);
console.log(idade);
console.log(temFé);
console.log(esportesfavoritos)
console.log(infoPais)

//CONDICIONAIS

//Condicionais são estruturas de código usadas para testar se uma expressão retorna verdadeira ou não
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  console.log("Sim, eu amo sorvete de chocolate!");
} else {
  alert("Aaaah, mas chocolate é o meu favorito…");
}

//funcoes
let minhaImagem = document.querySelector("img")
console.log(minhaImagem);

//criando uma função de multiplicação
function multiplicacao(num1, num2){
  let result = num1 * num2;
  return result
}
console.log(multiplicacao(3, 3))


//eventos
//document.querySelector("button").addEventListener("click", function () {
  //alert("Ai! Pare de me cutucar!");
//});
/*Existem várias maneiras de anexar um manipulador de eventos a um elemento. Aqui selecionamos o elemento <html>. Em seguida, chamamos sua função addEventListener(), passando o nome do evento para ouvir ('click') e uma função para executar quando o evento acontecer.

A função que acabamos de passar para addEventListener() aqui é chamada de função anônima, porque não tem um nome. Existe uma maneira alternativa de escrever funções anônimas, que chamamos de função de seta. Uma função de seta usa () => em vez de function (): */
//document.querySelector("button").addEventListener("click", () => {
 // alert("Ai! Pare de me cutucar!");
//});

//adicionando um trocador de imagens

//armazenando uma referência ao seu elemento <img> na variável myImage
const myImage = document.querySelector("img");
//Em seguida, a propriedade do manipulador de eventos onclick desta variável igual a uma função sem nome (uma função "anônima").
myImage.onclick = () =>{
  //O método getAttribute() é usado em JavaScript para obter o valor de um atributo de um elemento HTML.
  const mySrcImg = myImage.getAttribute("src");
  console.log(mySrcImg)//mostra o valor do atributo do elemento

  //se o caminho da imagem for a logo do html
  if(mySrcImg === "./image/foto1.svg"){

    // método setAttribute() é utilizado em JavaScript para definir o valor de um atributo em um elemento HTML.
    myImage.setAttribute("src", "./image/foto2.svg")
    console.log(myImage)
  }

  else if(mySrcImg === "./image/foto2.svg"){
    myImage.setAttribute("src", "./image/foto3.svg")
    console.log(myImage)
  }

  else {
    myImage.setAttribute("src", "./image/foto1.svg")
    console.log(myImage)
  }
}

//adicionando mensagem de boas vindas
//Em seguida, vamos alterar o título da página para uma mensagem de boas-vindas personalizada quando o usuário visitar o site pela primeira vez. 
//Esta mensagem de boas-vindas persistirá. Caso o usuário saia do site e retorne posteriormente, salvaremos a mensagem usando a Web Storage API. 
//Também incluiremos uma opção para alterar o usuário e, portanto, a mensagem de boas-vindas.
//Cria uma variavel e seleciona o primeiro elemento de titúlo<h1> 
let myHeading = document.querySelector("h1");

//escreve o texto olá mundo no elemento
myHeading.textContent = "Bem vindo";

let myButton = document.querySelector("button");

/*Neste caso, estamos solicitando que o usuário insira um nome. 
Em seguida, o código chama uma API localStorage, que nos permite armazenar 
dados no navegador e recuperá-los posteriormente. Usamos a função setItem()
 do localStorage para criar e armazenar um item de dados chamado 'name', 
 configurando seu valor para a variável myName que contém a entrada do 
 usuário para o nome. Por fim, definimos o textContent do cabeçalho como
  uma string, mais o nome do usuário recém-armazenado. */
function setUserName() {
  const myName = prompt("Por favor, digite o seu nome");
  //setItem = Este método é usado para armazenar um item no localStorage
  localStorage.setItem("name", myName);
  myHeading.textContent = `O mundo do desenvolvimento web é amaravilhoso , ${myName}`;
}

/* Poderíamos chamar isso de código de inicialização,
 pois ele estrutura o aplicativo quando ele é carregado pela primeira vez. */
 /*Esta primeira linha deste bloco utiliza o operador de negação (NOT lógico, representado pelo !) 
para verificar se os dados nome existem. Caso contrário, a função setUserName() é 
executada para criá-lo. Se existir (ou seja, o usuário definiu um nome de usuário durante uma visita anterior), 
recuperamos o nome armazenado usando getItem() e definimos o textContent do cabeçalho como uma string, mais o nome do usuário, 
conforme fez dentro de setUserName() */

//getItem = Este método é usado para recuperar um item do localStorage
 if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `O mundo do desenvolvimento web é maravilhoso, ${storedName}`;
}

/*Coloque este manipulador de evento onclick (abaixo) no botão. Quando clicado, setUserName() é executado. 
Isso permite que o usuário insira um nome diferente pressionando o botão. */
myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `O mundo do desenvolvimento web é maravilhoso, ${myName}`;
  }
}
/*Em linguagem humana, isso significa: Se myName não tiver valor, execute setUserName() novamente desde o início. 
Se ele tiver um valor (se a declaração acima não for verdadeira), armazene o valor em localStorage e defina-o como o texto do título.*/
