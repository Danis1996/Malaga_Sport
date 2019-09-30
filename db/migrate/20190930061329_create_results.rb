class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.boolean :match_nul
      t.integer :score_a
      t.integer :score_b
      t.text :description
      t.references :winner
		t.references :looser

      t.timestamps
    end
  end
end
