Rails.application.routes.draw do
  namespace :api, format: 'json' do
    resources :snippets

    mount_devise_token_auth_for 'User', at: 'auth'
  end

  namespace :api do
    post '/login', to: 'session#log_in'
    post '/logout', to: 'session#log_out'
    get  '/user', to: 'users#show'
  end

end
