describe("Game", function() {

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('user choice', function(){

    it('should equal the choice the user selected',function(){
      game.userSelect("Rock");
      expect(game.userChoice).toEqual("Rock")
    });
  })

});
