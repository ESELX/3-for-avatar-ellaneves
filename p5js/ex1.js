//Variáveis tipo let nomeDaVar;
let numDiv


function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
  background(220);
  background(220);

   posX = mouseX
   posY = mouseY

   numDiv = 7;
   for ( i=0; i < numDiv-1; i ++){
     for (j=0; j < numDiv-1; j++){
       avatar ((i+1)*width/numDiv, (j+1)*height/numDiv,40); } }

 }
   function avatar (posX,posY,raio) {


  fill (90,70,60);
  square (posX-raio/2,posY-raio/1.5, raio/1, 255,255,8,8)
  square (posX-raio/1.5,posY-raio/2, raio/1, 255,255,8,8) // cabelo
  square (posX-raio/3,posY-raio/2, raio/1, 255,255,8,8) // cabelo

  fill(255,202,150)
  ellipse(posX,posY,raio)
  fill (255)
  ellipse (posX-raio/4,posY-raio/10, raio/4, raio/5); //1 - olho
  ellipse (posX+raio/4, posY-raio/10,raio/4, raio/5) // 2 + //ellipse (posX-raio/35,posY-raio/40,raio/10)
  fill (80,180,200)
  ellipse (posX-raio/4, posY-raio/10, raio/8); // iris
  ellipse (posX+raio/4, posY-raio/10, raio/8);
  fill (0)
  ellipse (posX-raio/4, posY-raio/10, raio/20); //pupila
  ellipse (posX+raio/4, posY-raio/10, raio/20);


  fill (255, 90, 90);
  arc(posX-raio/25, posY+raio/5, raio/5, raio/5, 0, -450+ QUARTER_PI, CHORD);// boca
}
