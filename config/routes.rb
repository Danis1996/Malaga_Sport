Rails.application.routes.draw do

  get 'publications/new'
  get 'publications/create'
  get 'publications/edit'
  get 'publications/show'
  get 'publications/index'
  get 'publications/update'
  get 'publications/destroy'
  get 'avatars/create'
  get 'avatars/show'
  root 'static_pages#index'
  resources :requests
  resources :events do
    resources :commentaire
    resources :likes
  end
  resources :recrutements
  resources :clubs do
  	resources :pictures
  end
  resources :quarters
  devise_for :users
  resources :users do
    resources :avatars
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
