### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  attr_reader :cards

  def initialize(cards)
    @cards = cards
  end


  def checkforAce(card)
    if card.value == 1
      return true
    else
      return false
    end
  end

  def highest_card(card1, card2)
    if card1.value > card2.value
      return card1.name
    else
      card2
    end
  end


  def self.cards_total(cards)
    total = 0
    for card in cards
      p card.value
      total += card.value
    end
    return total
  end

end
