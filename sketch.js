function setup() {
  createCanvas(1200, 800);
  background("pink");//função para pintar o fundo
}

function draw() {
  stroke("rgb(235,230,64)");//altera a cor da borda do desenho
  fill("red");//altera cor de preenchimento do desenho


if(mouseIsPressed){
  rect(mouseX, mouseY, 40, 40);
}
}
