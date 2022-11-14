class ShelvesController < ApplicationController

    def index
        shelves = Shelf.where(user_id: @current_user.id)
        render json: shelves
    end

    def create
        shelf = Shelf.create!(shelf_params)
        render json: shelf, status: :created
    end
   
    private
    
    def shelf_params
        params.permit(:name, :user_id)
    end
end
