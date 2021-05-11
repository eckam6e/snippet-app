Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api, format: 'json' do
    resources :snippets
  end

  namespace :api do
    post '/login', to: 'session#log_in'
    post '/logout', to: 'session#log_out'
    get  '/user', to: 'users#show'
  end
  
end
