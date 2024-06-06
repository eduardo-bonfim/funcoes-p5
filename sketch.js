function somarnumeros () {
  
  
  let n1 = 10/2;
  let n2 = 4;
  let resultado = n1 + n2;
  
  console.log(resultado);
  
  texto = "resultado=" + resultado;
  textSize (25);
  fill("blue")
  text( texto,10,350,150); 
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 
somarnumeros () 
  
}
