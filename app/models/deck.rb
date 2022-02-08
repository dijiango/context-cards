class Deck < ApplicationRecord
    belongs_to :user
    has_many :flashcards, dependent: :destroy
    has_many :favorites
    has_many :favorited_bys, through: :favorites

    validates :subject, presence: true
end
