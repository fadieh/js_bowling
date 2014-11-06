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

it ('a bowl should generate a number between 0-10', function(){
  bowling.numberOfPinsHit()
  expect(bowling.pins).toBeGreaterThan(-1)
  expect(bowling.pins).toBeLessThan(11)
});

it ('pins left should not be below zero and move onto next frame', function(){
  bowling.pins = 0
  bowling.frameTurn = 1
  bowling.framesLeft = 10
  bowling.checkAllPinsHit()
  expect(bowling.framesLeft).toEqual(9)
});

});
