class DeckSerializer < ActiveModel::Serializer
  attributes :id, :subject, :summary, :flashcards
end
