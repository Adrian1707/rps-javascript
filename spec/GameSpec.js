describe("Game", function() {

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('user choice', function(){

    it('should equal the choice the user selected', function(){
      game.userSelect("Rock");
      expect(game.userChoice).toEqual("Rock")
    });
  })

  describe('draw', function(){

    // beforeEach(function(){
    //   spyOn(game,"compChoice").and.returnValue("Rock");
    // })

    it('should equal true if user choice and comp choice are the same', function(){
      game.userSelect("Rock");
      game.compChoice("Rock");
      game.opponentChoice = "Rock";
      // spyOn(game,'compChoice').and.returnValue("Rock");

      // expect(game.opponentChoice).toEqual("Rock")
      expect(game.draw()).toEqual(true);
    });
  })

});
