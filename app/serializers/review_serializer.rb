class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :comment
  has_one :user_id
  has_one :book_id
end
