class CreateSavedDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_decks do |t|
      t.belongs_to :favorited_deck, null: false, foreign_key: true
      t.belongs_to :deck, null: false, foreign_key: true

      t.timestamps
    end
  end
end
