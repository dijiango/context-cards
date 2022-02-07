require "rails_helper"

RSpec.describe FavoritedDecksController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/favorited_decks").to route_to("favorited_decks#index")
    end

    it "routes to #show" do
      expect(get: "/favorited_decks/1").to route_to("favorited_decks#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/favorited_decks").to route_to("favorited_decks#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/favorited_decks/1").to route_to("favorited_decks#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/favorited_decks/1").to route_to("favorited_decks#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/favorited_decks/1").to route_to("favorited_decks#destroy", id: "1")
    end
  end
end
