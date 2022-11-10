class User < ApplicationRecord
    has_many :book_statuses, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :books, through: :reviews
    has_many :books, through: :book_statuses
    has_many :book_shelves, through: :book_statuses, source: :shelves
    has_many :shelves, dependent: :destroy
    has_many :cart_items

    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true

end
