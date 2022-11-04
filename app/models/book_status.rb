class BookStatus < ApplicationRecord
  belongs_to :user
  belongs_to :book
  belongs_to :shelf
end
