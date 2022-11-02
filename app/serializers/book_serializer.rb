class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :cover_image, :price, :description, :publication_year, :publisher, :number_of_pages
end
