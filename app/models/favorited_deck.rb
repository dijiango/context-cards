class FavoritedDeck < ApplicationRecord
  has_many :saved_decks
  has_many :user_decks, through: :saved_decks
  
  belongs_to :user
end
