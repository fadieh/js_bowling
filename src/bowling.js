function Bowling() {

  this.score = [[],[],[],[],[],[],[],[],[],[]];
  this.frameNumber = 1;
  this.frameTurn = 1;
  this.pinsRemaining = 10;
  this.totalScore = 0;

};

Bowling.prototype.bowl = function(turn) {
  pinsStruck = turn || Math.floor((Math.random()*this.pinsRemaining) + 0);
  this.pinsRemaining = this.pinsRemaining - pinsStruck;
  this.score[this.frameNumber - 1][this.frameTurn - 1] = turn || pinsStruck;
  this.frameTurn = this.frameTurn + 1;
  this.totalScore = this.totalScore + pinsStruck;
  if (this.frameTurn === 3)
  { this.nextFrame() }
  if (this.pinsRemaining === 0 && this.frameTurn === 2)
  { this.nextFrame() }
};

Bowling.prototype.nextFrame = function() {
  this.frameTurn = 1;
  this.frameNumber = this.frameNumber + 1;
  this.pinsRemaining = 10;
};



// Bowling.prototype.nextTurn = function() {
//   if (this.frameTurn === 2)
//   { this.nextFrame() }
//   if (this.frameTurn === 1)
//   { this.nextFrameTurn() }
// };

// Bowling.prototype.nextFrame = function() {
//   this.frameNumber = this.frameNumber + 1;
// };

// Bowling.prototype.nextFrameTurn = function() {
//   this.frameTurn = this.frameTurn + 1;
// };


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