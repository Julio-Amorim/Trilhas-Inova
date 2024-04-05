//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//Variáveis da minhaRaquete
let xRaquete = 5;
let yRaquete = 150;

let comprimentoRaquete = 5;
let alturaRaquete = 90;

//Variáveis da RaqueteOponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Sons do jogo
let raquetada;
let pontoSom;
let trilha;

function preload() {
  trilha = loadSound("Pong - Sons/trilha.mp3")
  pontoSom = loadSound("Pong - Sons/ponto.mp3")
  raquetada = loadSound("Pong - Sons/raquetada.mp3")
}

let colidiu = false;

function setup() {
  createCanvas(600, 400);
  //trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoMinhaBiblioteca(xRaquete, yRaquete);
  verificaColisaoMinhaBiblioteca(xRaqueteOponente, yRaqueteOponente);
  //movimentaRaqueteOponente();
  movimentoRaqueteOponete2Play();
  incluiPlacar();
  marcaPontos();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function mostraRaquete(x,y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(87)){
     yRaquete -= 10;
  }  
  if(keyIsDown(83)){
     yRaquete += 10;
  }  
}

function movimentoRaqueteOponete2Play(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
 }  
 if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
 }  
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 50;
  yRaqueteOponente += velocidadeYOponente;
}


function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
} 

function verificaColisaoMinhaBiblioteca(x, y){
    let colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);

    if (colidiu) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(255, 140, 0);
  rect(230, 10, 40, 20);
  fill(255);
  text(meusPontos, 250, 26);
  fill(255, 140, 0);
  rect(350, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 370, 26);
}

function marcaPontos(){

  if (xBolinha > 590) {
    meusPontos += 1;
    pontoSom.play();
  } else if (xBolinha < 10) {
    pontosDoOponente += 1;
    pontoSom.play();
  }  
}


function bolinhaNaoFicaPresa(){
  if (XBolinha - raio < 0){
  XBolinha = 23
  }
}