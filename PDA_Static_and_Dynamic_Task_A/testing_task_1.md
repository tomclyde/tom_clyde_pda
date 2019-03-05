### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')    
class CardGame
                          #no constructor 'initialize' method

  def checkforAce(card)
    if card.value = 1     #requires '==' instead of '=' for comparisons
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)   # 'dif' instead of 'def'.
  if card1.value > card2.value    # missing comma between parameters card1 and card 2
    return card.name              # use consistent naming standard,i.e camel case or underscore
  else                            # 'card' not defined,  should be card1 or card2
    card2                         # card doent have name attribute
                                  # returning whole of card2,  arguably they want card2.name
  end
end
end                               #extra 'end'  will end class here

def self.cards_total(cards)
  total                           #should set 'total' to zero
  for card in cards
    total += card.value
    return "You have a total of" + total   #return will cause function to end on
  end                                       # first loop iteration
end

                                        #no end of class

```
