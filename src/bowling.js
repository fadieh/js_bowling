function Bowling() {

  this.pins = 10
  this.framesLeft = 10
  this.frameTurn = 2
  this.totalScore = 0

};

Bowling.prototype.rollBall = function() {
  if (this.frameTurn > 0)
  { this.frameTurn = this.frameTurn - 1 }
  if (this.frameTurn === 0)
  { this.frameTurn = 2, this.framesLeft = this.framesLeft = this.framesLeft - 1}
};

Bowling.prototype.numberOfPinsHit = function() {
  var turn = Math.floor((Math.random()*10) + 0);
  this.pins = this.pins - turn
};

Bowling.prototype.checkAllPinsHit = function () {
  if ((this.pins == 0) && (this.frameTurn == 1))
  { this.framesLeft = this.framesLeft - 1 }
};
