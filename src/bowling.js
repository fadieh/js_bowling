function Bowling() {

  this.pins = 10
  this.framesLeft = 10
  this.frameTurn = 2
  this.totalScore = 0
  this.turn

};

Bowling.prototype.rollBall = function() {
  if (this.frameTurn > 0)
  { this.nextFrameTurn() }
  if (this.frameTurn === 0)
  { this.nextFrame() }
};

Bowling.prototype.nextFrame = function() {
  this.frameTurn = 2
  this.framesLeft = this.framesLeft = this.framesLeft - 1
};

Bowling.prototype.nextFrameTurn = function() {
  this.frameTurn = this.frameTurn - 1
};

Bowling.prototype.numberOfPinsHit = function(turn) {
  var turn = turn || Math.floor((Math.random()*10) + 0);
  this.updatePinsLeft(turn)
  this.updateTotalScore(turn)
};

Bowling.prototype.checkAllPinsHit = function () {
  if ((this.pins == 0) && (this.frameTurn == 1))
  { this.nextFrame() }
};

Bowling.prototype.updatePinsLeft = function(turn) {
  this.pins = this.pins - turn
};

Bowling.prototype.updateTotalScore = function(turn) {
  this.totalScore = this.totalScore + turn
};
