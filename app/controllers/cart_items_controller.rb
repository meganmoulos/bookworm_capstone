class CartItemsController < ApplicationController
    def index
        render json: CartItem.all
    end

    def create
        item = CartItem.create!(item_params)
        render json: item
    end

    private

    def item_params
        params.permit(:user_id, :book_id)
    end
end
