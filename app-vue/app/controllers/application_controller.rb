class ApplicationController < ActionController::Base
  protect_from_forgery
  # skip_before_action :verify_authenticity_token
  # before_action :check_xhr_header

  # private
  # def check_xhr_header
  #   return if request.xhr?

  #   render json: { error: 'forbidden' }, status: :forbidden
  # end
end
