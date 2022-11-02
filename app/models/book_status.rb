class BookStatus < ApplicationRecord
  belongs_to :user_id
  belongs_to :book_id
  belongs_to :shelf_id
end
