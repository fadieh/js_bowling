function Bowling() {

  this.score = [[],[],[],[],[],[],[],[],[],[]]
  this.frameScore = []
  this.frame = 1
  this.frameTurn = 1
  this.pinsRemaining = 10
  this.totalScore = 0

};

Bowling.prototype.bowl = function(turn) {
  pinsStruck = turn || Math.floor((Math.random()*this.pinsRemaining) + 0);
  if (pinsStruck === 10) {
    this.calculateStrike()
  }
  this.writeScores(pinsStruck)
  this.updateTurn()
  this.updatePinsCount(pinsStruck)
  this.addToTotal(pinsStruck)
  this.updatePreviousStrike()
};

Bowling.prototype.writeScores = function(pinsStruck) {
  this.writeTurnScore(pinsStruck)
  this.calculateFrameTotal(pinsStruck)
};

Bowling.prototype.updateTurn = function() {
  if (pinsStruck === 10) { 
    this.calculateStrike()
  } else {
  this.frameTurn += 1
  }
  if (this.frameTurn > 2) {
    this.frame += 1
    this.frameTurn = 1
  }
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

Bowling.prototype.calculateStrike = function() {
  this.frame = 2
  this.frameTurn = 1
}

Bowling.prototype.updatePreviousStrike = function() {

}
