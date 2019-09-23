class CreateRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :requests do |t|
      t.text :application_letter
      t.text :parcours
      t.belongs_to :recrutement
    	t.belongs_to :user

      t.timestamps
    end
  end
end
