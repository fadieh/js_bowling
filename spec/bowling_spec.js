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

it ('when pins are zero with 1 turn left, move onto next frame', function(){
  bowling.pins = 0
  bowling.frameTurn = 1
  bowling.framesLeft = 10
  bowling.checkAllPinsHit()
  expect(bowling.framesLeft).toEqual(9)
});

it ('pins should not go below zero', function(){
  bowling.pins = -1
  bowling.checkAllPinsHit()
  expect(bowling.pins).toEqual(0)
});

it ('should have a total score when initialised', function(){
  expect(bowling.totalScore).toEqual(0)
});

it ('should add to total score after each turn', function(){
  bowling.numberOfPinsHit(9)
  expect(bowling.totalScore).toBeGreaterThan(0)
});

});
