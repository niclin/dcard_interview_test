Rails.application.routes.draw do
  resources :topics do
    member do
      patch :like
    end
  end

  root 'topics#index'
end
