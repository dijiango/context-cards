Rails.application.routes.draw do
  resources :favorites
  resources :users
  resources :flashcards, only: [:index, :create]
  resources :decks

  get "/public", to: "decks#public_decks"
  get "/public/:deck_id", to: "decks#show_public_cards"
  post "/flashcards/:deck_id", to: "flashcards#add_flashcards"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
