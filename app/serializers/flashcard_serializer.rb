class FlashcardSerializer < ActiveModel::Serializer
  attributes :id, :term, :meaning, :interval
  # has_one :user
  # has_one :deck
end
