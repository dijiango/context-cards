class CreateFlashcards < ActiveRecord::Migration[6.1]
  def change
    create_table :flashcards do |t|
      t.text :term
      t.text :meaning
      t.integer :interval
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :deck, null: false, foreign_key: true

      t.timestamps
    end
  end
end
