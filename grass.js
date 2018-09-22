function Grass() {

  this.x = 0;
  this.topX = 0;
  this.y = 0;
  this.topY = 0;
  this.height = 0;

  this.waveAmt = 0.6

  this.show = function() {
    stroke('green')
    strokeWeight(2)

    line(this.x, this.y, 0, this.topX, this.topY, this.height)
  }

  this.wave = function() {
    this.topX += random(-this.waveAmt, this.waveAmt);
    this.topY += random(-this.waveAmt, this.waveAmt);
  }

}