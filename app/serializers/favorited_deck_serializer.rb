class FavoritedDeckSerializer < ActiveModel::Serializer
  attributes :id
  has_one :saved_deck
  has_one :user
end
