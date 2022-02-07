class CreateDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :decks do |t|
      t.string :subject
      t.text :summary
      t.boolean :public

      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
