class User < ApplicationRecord
    has_many :flashcards, dependent: :destroy
    has_many :decks, through: :flashcards

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP, message: 'please use a valid email address'}
    
end
