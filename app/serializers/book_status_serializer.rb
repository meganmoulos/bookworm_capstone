class BookStatusSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user_id
  has_one :book_id
  has_one :shelf_id
end
