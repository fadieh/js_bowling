function Bowling() {

  this.pins = 10
  this.framesLeft = 10
  this.frameTurn = 2

};

Bowling.prototype.rollBall = function() {
  this.frameTurn = this.frameTurn - 1
};
