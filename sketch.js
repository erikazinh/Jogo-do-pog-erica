//Criação do jogo do Pong
//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;


//velocidade da bolinha
let velocidadeYBolinha = 5;
let velocidadeXBolinha = 5;


//variáveis da raquete+
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
     
//variaveis do oponetes 
let xraqueteOponete= 585;
letyraqueteOponete=150;

m
 
function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
}


function mostraBolinha(){
  circle(xBolinha,yBolinha, diametro);
}


function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


function verificaColisaoBorda() {
  if (xBolinha + raio > width ||
    xBolinha - raio <0) {
   velocidadeXBolinha *= -1;
 }
 if (yBolinha +raio> height ||
    yBolinha - raio < 0){
   velocidadeYBolinha *= -1;
 }
}


function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}


