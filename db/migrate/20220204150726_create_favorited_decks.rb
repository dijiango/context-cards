class CreateFavoritedDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :favorited_decks do |t|
      t.belongs_to :saved_deck, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
