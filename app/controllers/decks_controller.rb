class DecksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
        def index
            render json: Deck.all, status: :ok
        end
    
        def show
            deck = find_deck
            render json: deck, status: :ok
        end
    
        def create
            deck = Deck.create!(deck_params)
            render json: deck, status: :created
        end
    
        def update
            deck = find_deck
            deck.update!(deck_params)
            render json: deck, status: :accepted
        end
    
        def destroy
            deck = find_deck
            deck.destroy
            head :no_content
        end
    
        private
    
        def find_deck
            Deck.find(params[:id])
        end
    
        def deck_params
            params.permit(:subject, :summary)
        end
    
        # error handling
        def not_found_response
            render json: {error: "Deck not found"}, status: :not_found
        end
    
        def unprocessable_entity_response(e)
            render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
        end
    end
    