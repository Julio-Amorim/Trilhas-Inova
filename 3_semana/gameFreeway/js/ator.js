//ator
let yAtor = 366;
let xAtor = 200;

let colisao = false;

let meusPontos = 0;
let pontosDoOponente = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if (podeSeMover()) {
        yAtor += 3;
      }
    }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10);
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 375;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(20);
  text(meusPontos, 395, 24);
}

function marcaPonto() {
  if (yAtor <= 15) {
    meusPontos += 1;
    somPonto.play();
    voltaAtorParaPosicaoInicial();
    //alert(`Parabéns, vocês conseguiu chegar no final!\nSeus Pontos: ${meusPontos}`)
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}