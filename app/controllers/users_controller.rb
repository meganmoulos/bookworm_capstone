class UsersController < ApplicationController
    
    skip_before_action :authorize, only: :create
    before_action :find_user, except: [:index, :create] 

    def index 
        render json: User.all
    end

    def show
        render json: @user
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update 
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        head :no_content
    end
    
    private 

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :image, :username, :email, :password)
    end
end
