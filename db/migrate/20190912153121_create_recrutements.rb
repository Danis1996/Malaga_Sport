class CreateRecrutements < ActiveRecord::Migration[6.0]
  def change
    create_table :recrutements do |t|
      t.text :content
      t.datetime :deadline
      t.belongs_to :club

      t.timestamps
    end
  end
end
