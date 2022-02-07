class Deck < ApplicationRecord
    has_many :flashcards, dependent: :destroy
    has_many :users, through: :flashcards

    validates :subject, presence: true
end
