class Review < ActiveRecord::Base
    belongs_to :maker
    belongs_to :post
end