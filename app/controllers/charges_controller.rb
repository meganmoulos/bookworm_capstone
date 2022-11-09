class ChargesController < ApplicationController

    def create
        Stripe.api_key = ENV['STRIPE_SECRET_KEY']

        payment_intent = Stripe::PaymentIntent.create(
            amount: params[:amount],
            currency: params[:charge][:currency],
            automatic_payment_methods: {
                enabled: true,
            },
            receipt_email: params[:charge][:email],
            shipping: {
                name: params[:charge][:name],
                address: {
                    city: params[:charge][:address][:city]
                    country: params[:charge][:address][:country]
                    line1: params[:charge][:address][:line1]
                    line2: params[:charge][:address][:line2]
                    postal_code: params[:charge][:address][:postal_code]
                    state: params[:charge][:address][:state]
                }
            }
        )
        puts payment_intent
        render json: {
            clientSecret: payment_intent["client_secret"]
        }
    end
end
