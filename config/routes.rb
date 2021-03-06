Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :topics, only: %i[index]
      resources :projects, only: %i[index]
      resources :folders, only: %i[index show]
    end
  end

  root to: 'client#app'
  get '*path', to: 'client#app'
end
