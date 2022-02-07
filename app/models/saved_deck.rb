class SavedDeck < ApplicationRecord
  belongs_to :favorited_deck
  belongs_to :deck
end
