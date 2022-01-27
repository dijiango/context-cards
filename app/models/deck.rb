class Deck < ApplicationRecord
    has_many :flashcards, dependent: :destroy
    has_many :user, through: :flashcards

    validates :subject, presence: true
end
