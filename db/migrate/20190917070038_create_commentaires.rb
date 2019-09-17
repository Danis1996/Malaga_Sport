class CreateCommentaires < ActiveRecord::Migration[6.0]
  def change
    create_table :commentaires do |t|
    		 t.text :content
	  t.belongs_to :user, index: true
      t.belongs_to :event, index: true
      t.timestamps
    end
  end
end
