class ShelvesController < ApplicationController

    def index
        shelves = Shelf.where(user_id: @current_user.id)
        render json: shelves
    end
end
