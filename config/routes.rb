Rails.application.routes.draw do


  root 'static_pages#index'
  resources :requests
  resources :teams, only: [:index]
  resources :events do
    resources :commentaire
    resources :likes
  end
  resources :recrutements
  resources :clubs do
  	resources :pictures
  end
  resources :quarters
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks"}
  resources :users do
    resources :avatars
  end
  resources :publications do
    resources :commentpub
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
