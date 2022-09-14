class Maker < ActiveRecord::Base
    has_many :reviews
    has_many :posts
    has_many :reviews, through: :posts

end