let MAXITER;
let iteration = 0;

let colors = [];
let rects = [];

function setup() {

    MAXITER = int(random(5, 40));

    generateColors();
    createCanvas(windowWidth, windowHeight);

    rectMode(CENTER);
    stroke(colors[0]);
    background(colors[0]);
    strokeWeight(2);
    
    //TEXT
    fill(colors[2]);
    textAlign(CENTER);
    textFont('Lato');
    textWidth(700);
    textSize(15);
    text("simoneguarneri.github.io/notsorandomsquares", windowWidth/2, windowHeight-10);
}

function draw(){

  fill(colors[int(random(1,5))]);
  
  let coords;
  do{
      coords = {
        x: int(random(windowWidth/2-200, windowWidth/2+200)),
        y: int(random(windowHeight/2-150, windowHeight/2+100)),
        w: int(random(50, 200)),
        h: int(random(50, 200)),
      };
    
  }while(isNear(coords));

  rects.push(coords);
  rect(coords.x, coords.y, coords.w, coords.h, 5);
  
  iteration++;
  if(iteration >= MAXITER)
      noLoop();

}

function isNear(coord){
  for(let i = 0; i < rects.length; i++){
    let checking = rects[i];

    if(dist(coord.x, coord.y, checking.x, checking.y) < coord.w/2)
      return true;

    if(dist(coord.x, coord.y, checking.x, checking.y) < coord.h/2)
      return true;
  }
  return false;
}

function generateColors(){
    let scheme = randomColor({count: 5, hue: 'random', luminosity: 'random',});
    colors = [scheme[3], scheme[0], scheme[1],scheme[2], scheme[4]];
}

function resetDraw(){
    colors = [];
    rects = [];
    iteration = 0;
    setup();
    loop();
}
