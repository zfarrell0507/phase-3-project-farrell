class Reviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :comment
      t.integer :user_id
      t.integer :post_id
    end
  end
end
