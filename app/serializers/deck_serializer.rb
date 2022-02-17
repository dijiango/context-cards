class DeckSerializer < ActiveModel::Serializer
  attributes :id, :username, :subject, :summary, :public, :flashcards

  def username
    object.user.username
  end

end
