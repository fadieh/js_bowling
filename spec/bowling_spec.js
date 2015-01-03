describe ('Bowling', function() {

  beforeEach(function(){
    bowling = new Bowling
  });

  it('score should contain 10 frames', function(){
    expect(bowling.score.length).toEqual(10)
  });

  it('should randomly generate a number for a bowl and write to the score array', function(){
    bowling.bowl(7)
    expect(bowling.score[0][0]).toEqual(7)
  });

  it('should have 10 pins remaining at start', function(){
    expect(bowling.pinsRemaining).toEqual(10)
  });

  it('should move onto next frameTurn after bowl', function(){
    bowling.bowl()
    expect(bowling.frameTurn).toEqual(2)
  });

  it('should move onto next frameNumber after 2 bowls', function(){
    bowling.bowl()
    bowling.bowl()
    expect(bowling.frameNumber).toEqual(2)
    expect(bowling.frameTurn).toEqual(1)
  });

  it('should have 3 pins remaining after bowling 7', function(){
    bowling.bowl(7)
    expect(bowling.pinsRemaining).toEqual(3)
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

  it('should acknowledge a strike', function(){
    bowling.bowl(10)
    expect(bowling.frameNumber).toEqual(2)
    expect(bowling.frameTurn).toEqual(1)
  });

  it('should calculate a strike score', function(){
    bowling.bowl(10)
    bowling.bowl(7)
    bowling.bowl(2)
    expect(bowling.score[0][0]).toEqual(19)
  });

});