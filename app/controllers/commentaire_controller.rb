class CommentaireController < ApplicationController
  def new
  @comment = Comment.new
    # Méthode qui crée un potin vide et l'envoie à une view qui affiche le formulaire pour 'le remplir' (new.html.erb)
  end
   def index
    @comment = Commentaire.new
      @event = Event.find(params[:event_id])

    @event_comments_count = @event.commentaires.all.count
    @event_comments = @event.commentaires.all

   end

    def show
 @event = Event.find(params[:event_id])
 @comment = Commentaire.find(params[:id])
 

    # Méthode qui récupère le potin concerné et l'envoie à la view show (show.html.erb) pour affichage
  end


    def create
     user = current_user
    @event = Event.find(params[:event_id])
    @comment = @event.commentaires.new(content: params[:content])
    @comment.user_id = user.id
    @comment.event_id = @event.id
   if @comment.save
    redirect_to event_path(@event.id)
  end
end

 def edit    
     @comment = Commentaire.find(params[:id])

    # Méthode qui récupère le potin concerné et l'envoie à la view edit (edit.html.erb) pour affichage dans un formulaire d'édition
  end

   def update
     @comment = Commentaire.find(params[:id])
     if @comment.update(content: params[:content])
         redirect_to "/events/#{@comment.event.id}"
     else
         render "edit"
     end
   end
end
