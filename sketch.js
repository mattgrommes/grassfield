// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions

var cols, rows;
var scl = 20;
var w = 1600;
var h = 1200;

var grass = [];

function setup() {
  createCanvas(1000, 1000, WEBGL);
  cols = w / scl;
  rows = h/ scl;
  frameRate(5)
  angleMode(DEGREES);
  // noLoop();
  background('#87CEFA')

  // var fov = PI/3;
  // var cameraZ = (height/2.0) / tan(fov/2.0);
  // perspective(fov, width/height, cameraZ * 0.1, cameraZ*10.0); 

  for (var x = 0; x < w; x+=random(2,6)) {
    for (var y = 0; y < h; y+=random(3,7)) {
      n = noise(y, x);
      rand = random();
      if(rand > 0.9) {
        var g = new Grass();
        g.x = x;
        g.topX = x;
        g.y = y;
        g.topY = y;
        g.height = n * 100;
        grass.push(g)
        // line(x, y, 0, x, y, n * 100)
      }
    }
  }
}

function draw() {
  clear();
  background('#87CEFA')

  // rotateX(PI/3);
  rotateX(80);
  translate(-w/2, -h/3);


  fill('#cc9966')
  strokeWeight(0);
  rect(0, 0, w, h);

  for(var g = 0; g < grass.length; g++) {
    grass[g].show();
    grass[g].wave();
  }


}