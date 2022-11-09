Rails.application.routes.draw do
  resources :book_statuses
  resources :reviews
  resources :shelves
  resources :books
  resources :users
  resources :charges

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/book_statuses/move', to: 'book_statuses#move'
  get '/sessions/current', to: 'sessions#current'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
