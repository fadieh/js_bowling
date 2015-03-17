describe ('Bowling', function() {

  beforeEach(function(){
    bowling = new Bowling
  });

  it('score should contain 10 frames', function(){
    expect(bowling.score.length).toEqual(10)
  });

  it('should know the frame', function(){
    expect(bowling.frame).toEqual(1)
    bowling.bowl()
    bowling.bowl()
    expect(bowling.frame).toEqual(2)
  });

  it('should know the frameturn', function(){
    expect(bowling.frameTurn).toEqual(1)
    bowling.bowl()
    expect(bowling.frameTurn).toEqual(2)
  });

  it('should randomly generate a number for a bowl and write to the score array', function(){
    bowling.bowl(7)
    expect(bowling.score[0][0]).toEqual(7)
  });

  it('can write the score in the second frame turn', function() {
    bowling.bowl(2)
    bowling.bowl(2)
    expect(bowling.score[0][1]).toEqual(2)
  })

  it('should update pins remaining after a turn', function(){
    bowling.bowl(2)
    expect(bowling.pinsRemaining).toEqual(8)
  });

  it('should move onto next frameNumber after 2 bowls', function(){
    bowling.bowl()
    bowling.bowl()
    expect(bowling.frame).toEqual(2)
    expect(bowling.frameTurn).toEqual(1)
  });

  it('pins remaining should revert at next frame', function(){
    bowling.bowl()
    bowling.bowl()
    expect(bowling.pinsRemaining).toEqual(10)
  });

  it('should have a total score', function(){
    bowling.bowl(6)
    bowling.bowl(3)
    bowling.bowl(9)
    expect(bowling.totalScore).toEqual(18)
  });

  xit('should acknowledge a strike', function(){
    bowling.bowl(10)
    expect(bowling.frameNumber).toEqual(2)
    expect(bowling.frameTurn).toEqual(1)
  });

  xit('should calculate a strike score', function(){
    bowling.bowl(10)
    bowling.bowl(7)
    bowling.bowl(2)
    bowling.applyBonus()
    expect(bowling.score[0][0]).toEqual(19)
  });

  xit('should calculate a spare score', function(){

  });

});