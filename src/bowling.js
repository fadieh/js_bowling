function Bowling() {

  this.pins = 10
  this.framesLeft = 10
  this.frameTurn = 2

};

Bowling.prototype.rollBall = function() {
  if (this.frameTurn > 0)
  { this.frameTurn = this.frameTurn - 1 }
  if (this.frameTurn === 0)
  { this.frameTurn = 2, this.framesLeft = 9}
};
