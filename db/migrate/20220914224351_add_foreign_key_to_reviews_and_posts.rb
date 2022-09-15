class AddForeignKeyToReviewsAndPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :maker_id, :integer
    add_column :reviews, :maker_id, :integer
    add_column :reviews, :post_id, :integer
  end
end
