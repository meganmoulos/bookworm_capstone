Rails.application.routes.draw do
  resources :book_statuses
  resources :reviews
  resources :shelves
  resources :books
  resources :users

  get 'authorized_user', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
