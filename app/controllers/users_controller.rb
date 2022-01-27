class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
        def index
            render json: User.all
        end
    
        def show
            user = find_user
            render json: user, status: :ok
        end
    
        def create
            user = User.create!(create_user_params)
            render json: user, status: :created
        end
    
        def update
            user = find_user
            user.update!(update_user_params)
            render json: user, status: :accepted
        end
    
        def destroy
            user = find_user
            user.destroy
            head :no_content
        end
    
        private
    
        def find_user
            User.find(params[:id])
        end
    
        def create_user_params
            params.permit(:username, :password, :email)
        end
    
        def update_user_params
            params.permit(:username, :password, :email, :image)
            
        end
    
        # error handling
        def not_found_response
            render json: {error: "User not found"}, status: :not_found
        end
    
        def unprocessable_entity_response(e)
            render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
        end
    
    end 
    