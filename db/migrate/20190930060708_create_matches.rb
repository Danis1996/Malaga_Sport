class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.datetime :start_date
      t.string :area
      t.references :equipe_a, index: true
		t.references :equipe_b, index: true

      t.timestamps
    end
  end
end
