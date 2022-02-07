class FavoritedDecksController < ApplicationController
  before_action :set_favorited_deck, only: [:show, :update, :destroy]

  # GET /favorited_decks
  def index
    @favorited_decks = FavoritedDeck.all

    render json: @favorited_decks
  end

  # GET /favorited_decks/1
  def show
    render json: @favorited_deck
  end

  # POST /favorited_decks
  def create
    @favorited_deck = FavoritedDeck.new(favorited_deck_params)

    if @favorited_deck.save
      render json: @favorited_deck, status: :created, location: @favorited_deck
    else
      render json: @favorited_deck.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorited_decks/1
  def update
    if @favorited_deck.update(favorited_deck_params)
      render json: @favorited_deck
    else
      render json: @favorited_deck.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorited_decks/1
  def destroy
    @favorited_deck.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorited_deck
      @favorited_deck = FavoritedDeck.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorited_deck_params
      params.require(:favorited_deck).permit(:saved_deck_id, :user_id)
    end
end
