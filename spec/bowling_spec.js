describe ('Bowling', function(){

  beforeEach(function(){
    bowling = new Bowling
  });

it ('should initialise with 10 pins', function(){
    expect(bowling.pins).toEqual(10)
});

it ('should have 10 frames', function(){
    expect(bowling.framesLeft).toEqual(10)
});

it ('each frame should have 2 turns', function(){
    expect(bowling.frameTurn).toEqual(2)
});

it ('should be able to take a shot and move to the next turn', function(){
   bowling.rollBall()
   expect(bowling.frameTurn).toEqual(1)
   expect(bowling.framesLeft).toEqual(10)
});

it ('should move to next frame, once 2 turns have been taken', function(){
  bowling.frameTurn = 1
  bowling.rollBall()
  expect(bowling.framesLeft).toEqual(9)
  expect(bowling.frameTurn).toEqual(2)

});

});
