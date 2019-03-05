require("minitest/autorun")
require('minitest/rg')
require_relative("../card.rb")
require_relative("../testing_task_2.rb")

class CardGameTest < MiniTest::Test

  def setup
    @card1 = Card.new("spade", 5)
    @card2 = Card.new("hearts", 1)
    @card3 = Card.new("diamonds", 10)
    @cardgame = CardGame.new([@card1,@card2,@card3])
  end

  def test_for_ace__exists
    assert_equal(true, @cardgame.checkforAce(@card2))
  end

  def test_for_ace__does_not_exist
    assert_equal(false, @cardgame.checkforAce(@card1))
  end

  def test_for_highest_card
    assert_equal(@card3, @cardgame.highest_card(@card1, @card3))
  end

  def test_card_total
    assert_equal(16, CardGame.cards_total(@cardgame.cards))
  end
end
