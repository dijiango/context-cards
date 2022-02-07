class User < ApplicationRecord
    has_many :decks
    
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP, message: 'please use a valid email address'}
    
end
