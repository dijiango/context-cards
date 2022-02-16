class DecksController < ApplicationController
    
        def index
            render json: @current_user.decks.all, status: :ok
        end
    
        def show
            deck = find_deck
            render json: deck, status: :ok
        end
    
        def create
            deck = @current_user.decks.create!(deck_params)
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
            @current_user.decks.find(params[:id])
        end
    
        def deck_params
            params.permit(:subject, :summary, :public)
        end
    
    end
    