class CreateCommentpubs < ActiveRecord::Migration[6.0]
  def change
    create_table :commentpubs do |t|
    	 t.text :content
	  t.belongs_to :user, index: true
      t.belongs_to :publication, index: true

      t.timestamps
    end
  end
end
