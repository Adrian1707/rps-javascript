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
      game.compChoice();
      game.opponentChoice = "Rock";
      // spyOn(game,'compChoice').and.returnValue("Rock");

      // expect(game.opponentChoice).toEqual("Rock")
      expect(game.draw()).toEqual(true);
    });
  })

  describe('win', function(){

    it('should equal true is user choice is rock and comp choice is scissors', function(){
      game.userSelect("Rock");
      game.compChoice();
      game.opponentChoice = "Scissors";
      expect(game.win()).toEqual(true);
    });
  })

});
