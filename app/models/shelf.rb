class Shelf < ApplicationRecord
    has_many :bookStatuses
    has_many :users, through: :bookStatuses
    has_many :books, through: :bookStatuses
end
