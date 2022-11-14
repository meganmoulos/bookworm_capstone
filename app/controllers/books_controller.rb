class BooksController < ApplicationController

    def index
        render json: Book.all
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create
        book = Book.create!(
            title: params[:book][:volumeInfo][:title],
            author: params[:book][:volumeInfo][:authors][0],
            cover_image: params[:book][:volumeInfo][:imageLinks][:thumbnail],
            price: 12.99,
            description: params[:book][:volumeInfo][:description],
            publication_year: params[:book][:volumeInfo][:publishedDate],
            publisher: params[:book][:volumeInfo][:publisher],
            number_of_pages: params[:book][:volumeInfo][:pageCount]
        )
        
        status = BookStatus.create!(
            book_id: book.id,
            shelf_id: params[:shelf],
            user_id: @current_user.id
        )

        shelves = Shelf.where(user_id: @current_user.id)
        render json: shelves, status: :ok
    end
   
end
