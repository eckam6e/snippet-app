Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "localhost:3001"
    resource "^/api",
             headers: :any,
            #  expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'],
             methods: [:get, :post, :patch, :delete, :head, :options],
             credentials: true
  end
end
