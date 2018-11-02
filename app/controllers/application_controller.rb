class ApplicationController < ActionController::Base
  def index
    redirect_to root_path, layout: 'application' # Avoid having an empty view file.
  end
end
