Rails.application.routes.draw do
  namespace :api, format: 'json' do
    resources :snippets
  end

  namespace :api do
    post '/login', to: 'session#log_in'
    post '/logout', to: 'session#log_out'
    get  '/user', to: 'users#show'
  end
end
