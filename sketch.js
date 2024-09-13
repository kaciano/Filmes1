let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("purple");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(50, 0, 50));
  textAlign(CENTER, CENTER);
  textSize(60);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Interestelar";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "A Monster Calls";          
        } else{
         return "Avatar";
        }
      } else {
        if (gostaDeFantasia) {
          return "O Último Caçador de Bruxas";
        } else {
          return "Wonka";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "O Castelo Animado";
    } else {
      return "Vidas ao Vento";
    }
  }
}
