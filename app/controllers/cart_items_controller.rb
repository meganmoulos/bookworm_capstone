class CartItemsController < ApplicationController

    Stripe.api_key = "sk_test_5PjsgqmtFFahDr64NnCWWe2k"

    def index
        user = @current_user
        render json: CartItem.where(user_id: user.id)
    end

    def create
        item = CartItem.create!(item_params)
        render json: item
    end

    def paymentintent
        user = @current_user
        items = CartItem.where(user_id: user.id)
        sum = items.sum()
        payment_intent = Stripe::PaymentIntent.create(
            amount: (sum * 100),
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            }
        )
        render json: {clientSecret: payment_intent['client_secret']}
    end

    def destroy
        user = @current_user
        items = CartItem.where(user_id: user.id)
        items.destroy_all
        head :no_content
    end

    private

    def item_params
        params.permit(:user_id, :book_id)
    end
end
