class CartItemsController < ApplicationController

    Stripe.api_key = "sk_test_5PjsgqmtFFahDr64NnCWWe2k"

    def index
        render json: CartItem.all
    end

    def create
        item = CartItem.create!(item_params)
        render json: item
    end

    def paymentintent
        payment_intent = Stripe::PaymentIntent.create(
            amount: params[:amount],
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            }
        )
        render json: {clientSecret: payment_intent['client_secret']}
    end

    private

    def item_params
        params.permit(:user_id, :book_id)
    end
end
