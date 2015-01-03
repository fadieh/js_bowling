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

Bowling.prototype.applyBonus = function() {
  if (this.score[0][0] === 10) {
    this.score[0][0] = this.score[0][0] + this.score[1][0] + this.score[1][1]
  }
  if (this.score[1][0] === 10) {
    this.score[1][0] = this.score[1][0] + this.score[2][0] + this.score[2][1]
  }
  if (this.score[2][0] === 10) {
    this.score[2][0] = this.score[2][0] + this.score[3][0] + this.score[3][1]
  }
  if (this.score[3][0] === 10) {
    this.score[3][0] = this.score[3][0] + this.score[4][0] + this.score[4][1]
  }
  if (this.score[4][0] === 10) {
    this.score[4][0] = this.score[4][0] + this.score[5][0] + this.score[5][1]
  }
  if (this.score[5][0] === 10) {
    this.score[5][0] = this.score[5][0] + this.score[6][0] + this.score[6][1]
  }
  if (this.score[6][0] === 10) {
    this.score[6][0] = this.score[6][0] + this.score[7][0] + this.score[7][1]
  }
  if (this.score[7][0] === 10) {
    this.score[7][0] = this.score[7][0] + this.score[8][0] + this.score[8][1]
  }
  if (this.score[8][0] === 10) {
    this.score[8][0] = this.score[8][0] + this.score[9][0] + this.score[9][1]
  }
};