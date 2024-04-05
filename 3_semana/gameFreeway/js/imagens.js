let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarros = [];

let somTrilha;
let somColisao;
let somPonto;

function preload(){
    imagemDaEstrada = loadImage("img/estrada.png");
    imagemDoAtor = loadImage("img/ator-1.png");
    imagemCarro1 = loadImage("img/carro-1.png");
    imagemCarro2 = loadImage("img/carro-2.png");
    imagemCarro3 = loadImage("img/carro-3.png");
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];

    somTrilha = loadSound("./music/trilha.mp3");
    somColisao = loadSound("./music/colidiu.mp3")
    somPonto = loadSound("./music/pontos.wav")
}


