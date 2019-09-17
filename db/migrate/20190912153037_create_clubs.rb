class CreateClubs < ActiveRecord::Migration[6.0]
  def change
    create_table :clubs do |t|
      t.string :name
      t.string :category
      t.references :admin, index: true
    	t.belongs_to :quarter

      t.timestamps
    end
  end
end
