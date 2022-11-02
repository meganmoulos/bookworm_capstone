class Book < ApplicationRecord
    has_many :reviews
    has_many :bookStatuses
    has_many :users, through: :reviews
    has_many :users, through: :bookStatuses
end
