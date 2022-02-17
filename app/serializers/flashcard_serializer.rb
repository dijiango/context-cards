class FlashcardSerializer < ActiveModel::Serializer
  attributes :id, :term, :meaning, :deck_id
  # has_one :user
  # has_one :deck
end
