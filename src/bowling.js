function Bowling() {

  this.score = [[],[],[],[],[],[],[],[],[],[]]
  this.frameNumber = 1
  this.frameTurn = 1

};

Bowling.prototype.bowl = function(turn) {
  this.score[this.frameNumber - 1][this.frameTurn - 1] = turn || Math.floor((Math.random()*10) + 0);
};



// function Bowling() {

//   this.pins = 10
//   this.framesLeft = 10
//   this.frameTurn = 2
//   this.totalScore = 0
//   this.lastScore = 0

// };

// Bowling.prototype.bowl = function(turn) {
//   var turn = turn || Math.floor((Math.random()*10) + 0);
//   this.updatePinsLeft(turn)
//   this.updateTotalScore(turn)
//   this.checkAllPinsHit()
//   this.nextTurn()
//   this.lastScore = turn
// };

// Bowling.prototype.nextTurn = function() {
//   if (this.frameTurn > 0)
//   { this.nextFrameTurn() }
//   if (this.frameTurn === 0)
//   { this.nextFrame() }
// };

// Bowling.prototype.checkAllPinsHit = function () {
//   if ((this.pins == 0) && (this.frameTurn == 1))
//   { this.nextFrame() }
//   else if (this.pins <= 0)
//   { this.revertToZero() }
// };

// Bowling.prototype.nextFrame = function() {
//   this.frameTurn = 2
//   this.framesLeft = this.framesLeft = this.framesLeft - 1
// };

// Bowling.prototype.nextFrameTurn = function() {
//   this.frameTurn = this.frameTurn - 1
// };

// Bowling.prototype.updatePinsLeft = function(turn) {
//   this.pins = this.pins - turn
// };

// Bowling.prototype.updateTotalScore = function(turn) {
//   this.totalScore = this.totalScore + turn
// };

// Bowling.prototype.revertToZero = function() {
//   this.pins = 0
// };