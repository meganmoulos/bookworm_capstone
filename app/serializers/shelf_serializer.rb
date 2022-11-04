class ShelfSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :books, through: :book_statuses
end
