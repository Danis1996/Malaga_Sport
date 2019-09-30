class CreateFuns < ActiveRecord::Migration[6.0]
  def change
    create_table :funs do |t|
      t.integer :mise
      t.integer :gain
      t.belongs_to :match
	t.belongs_to :user
	t.belongs_to :club
	t.belongs_to :result

      t.timestamps
    end
  end
end
