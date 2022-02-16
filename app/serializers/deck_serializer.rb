class DeckSerializer < ActiveModel::Serializer
  attributes :id, :subject, :summary, :public, :flashcards
end
