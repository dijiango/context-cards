class CreateDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :decks do |t|
      t.string :subject
      t.text :summary

      t.timestamps
    end
  end
end
