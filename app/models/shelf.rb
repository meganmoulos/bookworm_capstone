class Shelf < ApplicationRecord
    has_many :book_statuses
    has_many :books, through: :book_statuses
    has_one :user
end
