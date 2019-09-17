class ApplicationController < ActionController::Base

  before_action :configure_permitted_paramters, if: :devise_controller?
	protected
    def configure_permitted_paramters

        devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, 
        													:last_name, 
        													:description, 
        													:age, 
        													:gender, 
        													:quarter_id, 
        													:pseudonym])

        devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, 
        														:last_name, 
        														:description, 
        														:age,
        														:email, 
        														:password, 
        														:gender, 
        														:quarter_id, 
        														:pseudonym])
    end
end
