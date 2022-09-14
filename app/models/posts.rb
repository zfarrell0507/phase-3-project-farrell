class Post < ActiveRecord::Base
    belongs_to :maker
    has_many :reviews
end