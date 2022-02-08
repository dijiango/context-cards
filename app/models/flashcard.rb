class Flashcard < ApplicationRecord
  belongs_to :deck

  validates :term, presence: true
  validates :meaning, presence: true
  # validates :interval, inclusion: 1..5
end
