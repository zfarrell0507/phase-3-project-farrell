class Posts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image
      t.string :body
      t.integer :likes
    end
  end
end
