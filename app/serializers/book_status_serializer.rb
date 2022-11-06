class BookStatusSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :shelf_id, :book_id
  has_one :user
  has_one :book
  has_one :shelf
end
