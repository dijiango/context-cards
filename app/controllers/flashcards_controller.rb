class FlashcardsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
        def index
            render json: Flashcard.all, status: :ok
        end
    
        def show
            flashcard = find_flashcard
            render json: flashcard, status: :ok
        end
    
        def create
            flashcard = Flashcard.create!(create_flashcard_params)
            render json: flashcard, status: :created
        end
    
        def update
            flashcard = find_flashcard
            flashcard.update!(update_flashcard_params)
            render json: flashcard, status: :accepted
        end
    
        def destroy
            flashcard = find_flashcard
            flashcard.destroy_all
            head :no_content
        end
    
        private
    
        def find_flashcard
            Flashcard.find(params[:id])
        end
    
        def create_flashcard_params
            params.permit(:term, :meaning, :user_id, :deck_id).merge(interval: 1)
        end
    
        def update_flashcard_params
            params.permit(:term, :meaning)
        end
    
        # error handling
        def not_found_response
            render json: {error: "Flashcard not found"}, status: :not_found
        end
    
        def unprocessable_entity_response(e)
            render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
        end
    end
    