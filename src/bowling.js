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
  this.calculateStrike()
};

Bowling.prototype.nextFrame = function() {
  this.frameTurn = 1;
  this.frameNumber = this.frameNumber + 1;
  this.pinsRemaining = 10;
};

Bowling.prototype.calculateStrike = function() {
  if (this.pinsRemaining === 0 && this.frameTurn === 2)
  { 
  this.score[this.frameNumber - 1][this.frameTurn - 1] =  }
};