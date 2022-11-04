class User < ApplicationRecord
    has_many :book_statuses
    has_many :reviews
    has_many :books, through: :reviews
    has_many :books, through: :book_statuses
    has_many :shelves, through: :book_statuses

    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true

end
