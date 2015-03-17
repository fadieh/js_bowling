function Bowling() {

  this.score = [[],[],[],[],[],[],[],[],[],[]];
  this.frameScore = []
  this.frame = 1
  this.frameTurn = 1
  this.pinsRemaining = 10
  this.totalScore = 0

};

Bowling.prototype.bowl = function(turn) {
  pinsStruck = turn || Math.floor((Math.random()*this.pinsRemaining) + 0);
  this.writeScores(pinsStruck)
  this.updateTurn()
  this.updatePinsCount(pinsStruck)
  this.addToTotal(pinsStruck)
};

Bowling.prototype.writeScores = function(pinsStruck) {
  this.writeTurnScore(pinsStruck)
  this.calculateFrameTotal(pinsStruck)
};

Bowling.prototype.updateTurn = function() {
  this.frameTurn += 1
  if (this.frameTurn > 2) {
    this.frame += 1
    this.frameTurn = 1
  };
};

Bowling.prototype.updatePinsCount = function(pinsStruck) {
  this.pinsRemaining -= pinsStruck
  if (this.frameTurn === 1) {
    this.pinsRemaining = 10
  }
};

Bowling.prototype.addToTotal = function(pinsStruck) {
  this.totalScore += pinsStruck
}

Bowling.prototype.calculateFrameTotal = function(pinsStruck) {
  if (this.frameTurn === 1) {
    this.frameScore[this.frame - 1] = pinsStruck
  } else if (this.frameTurn === 2) {
    this.frameScore[this.frame -1 ] += pinsStruck
  }
}

Bowling.prototype.writeTurnScore = function(pinsStruck) {
  this.score[this.frame - 1][this.frameTurn - 1] = pinsStruck
}