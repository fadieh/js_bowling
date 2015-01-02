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

  // it('should move onto the next frameTurn after 1st bowl in a frame', function(){
  //   bowling.bowl()
  //   expect(bowling.frameNumber).toEqual(1)
  //   expect(bowling.frameTurn).toEqual(2)
  // });

  // it ('should move onto the frame after 2nd bowl in a frame', function(){
  //   bowling.bowl()
  //   expect(bowling.frameNumber).toEqual(1)
  //   expect(bowling.frameTurn).toEqual(2)
  //   bowling.bowl()
  //   expect(bowling.frameNumber).toEqual(2) 
  //   expect(bowling.frameTurn).toEqual(1)
  // });

});



// describe ('Bowling', function(){

//   beforeEach(function(){
//     bowling = new Bowling
//   });

// it ('should initialise with 10 pins', function(){
//     expect(bowling.pins).toEqual(10)
// });

// it ('should initialise with 10 frames remaining', function(){
//     expect(bowling.framesLeft).toEqual(10)
// });

// it ('each frame should have 2 turns', function(){
//     expect(bowling.frameTurn).toEqual(2)
// });

// it ('should be able to take a shot and move to the next turn', function(){
//    bowling.nextTurn()
//    expect(bowling.frameTurn).toEqual(1)
//    expect(bowling.framesLeft).toEqual(10)
// });

// it ('should move to next frame, once 2 turns have been taken', function(){
//   bowling.frameTurn = 1
//   bowling.nextTurn()
//   expect(bowling.framesLeft).toEqual(9)
//   expect(bowling.frameTurn).toEqual(2)
// });

// it ('a bowl should generate a number between 0-10', function(){
//   bowling.bowl()
//   expect(bowling.pins).toBeGreaterThan(-1)
//   expect(bowling.pins).toBeLessThan(11)
// });

// it ('when pins are zero with 1 turn left, move onto next frame', function(){
//   bowling.pins = 0
//   bowling.frameTurn = 1
//   bowling.framesLeft = 10
//   bowling.checkAllPinsHit()
//   expect(bowling.framesLeft).toEqual(9)
// });

// it ('pins should not go below zero', function(){
//   bowling.pins = -1
//   bowling.checkAllPinsHit()
//   expect(bowling.pins).toEqual(0)
// });

// it ('should have a total score when initialised', function(){
//   expect(bowling.totalScore).toEqual(0)
// });

// it ('should add to total score after each turn', function(){
//   bowling.bowl(9)
//   expect(bowling.totalScore).toBeGreaterThan(0)
// });

// it ('should take a record of the previous shot', function(){
//   bowling.bowl(9)
//   expect(bowling.lastScore).toEqual(9)
//   bowling.bowl(7)
//   expect(bowling.lastScore).toEqual(7)
// });

// // it ('should account for a strike', function(){

// // });

// });
