describe ('Bowling', function(){

  beforeEach(function(){
    bowling = new Bowling
  });

it ('should initialise with 10 pins', function(){
    expect(bowling.pins).toEqual(10)
});

});
