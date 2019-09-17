class LikesController < ApplicationController
	  before_action :find_post  
   before_action :find_like, only: [:destroy]
   def index
   end
   def create

    if already_liked?
    flash[:notice] = "indraipa iany"
  else
    @event.likes.create(user_id: current_user.id)
  end
  redirect_to root_path
  end 

def show

end

   private  

  def find_post
    @event = Event.find(params[:event_id])
  end



  def already_liked?
  Like.where(user_id: current_user.id, event_id:
  params[:event_id]).exists?
end
end
