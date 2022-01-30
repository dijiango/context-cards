class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
        def show
            render json: @current_user
        end
    
        def create
            user = User.create!(create_user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        end

        # updated feature: change account params
        # def update
        #     user = find_user
        #     user.update!(update_user_params)
        #     render json: user, status: :accepted
        # end
    
        # updated feature: delete your account
        # def destroy
        #     user = find_user
        #     user.destroy
        #     head :no_content
        # end
    
        private
    
        def find_user
            User.find([:id])
        end
    
        def create_user_params
            params.permit(:username, :password, :email)
        end
    
        def update_user_params
            params.permit(:username, :password, :email, :image)
        end

    
    end 
    