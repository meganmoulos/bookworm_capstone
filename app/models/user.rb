class User < ApplicationRecord
    has_many :bookStatuses
    has_many :reviews
    has_many :books, through: :reviews
    has_many :books, through: :bookStatuses
    has_many :shelves, through: :bookStatuses

    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true

end
