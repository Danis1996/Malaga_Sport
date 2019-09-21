class LikesController < ApplicationController
	  before_action :find_post  
   before_action :find_like, only: [:destroy]
   def index
   end
  
  def create
puts "#"*50
  if already_liked?
    @event.likes.find_by(user_id: current_user.id).destroy()
    @like = @event.likes.count()
    @create = "J'aime"
  else
    @event.likes.create(user_id: current_user.id)
    @like = @event.likes.count()
    @create = "J'aime déjà"

  end

  respond_to do |format|
    format.json { render json: {'like': @like , 'create': @create } }
  end
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
