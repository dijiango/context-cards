class FlashcardsController < ApplicationController
    
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

        def add_flashcards
            # @current_deck = Flashcard.find(deck_id: params[:id])
            flashcard = Flashcard.create!(create_flashcard_params)
            render json: flashcard, status: :created
        end
    
        private
    
        def find_flashcard
            Flashcard.find(params[:id])
        end
    
        def create_flashcard_params
            params.permit(:term, :meaning, :deck_id)
        end
    
        def update_flashcard_params
            params.permit(:term, :meaning)
        end
    
    end
    