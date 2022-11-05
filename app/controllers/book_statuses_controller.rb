class BookStatusesController < ApplicationController
    
    def move
        book_id = params[:book_id]
        book_status = BookStatus.find_by(book_id: book_id, user_id: @current_user.id)
        shelf_to_id = params[:shelf_to_id]
        book_status.update!(shelf_id:  shelf_to_id)
        
        shelves = Shelf.where(user_id: @current_user.id)
        render json: shelves, status: :ok
    end

end
