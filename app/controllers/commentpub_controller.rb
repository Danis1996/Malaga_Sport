class CommentpubController < ApplicationController

  def new
  @commentpub = Commentpub.new
    # Méthode qui crée un potin vide et l'envoie à une view qui affiche le formulaire pour 'le remplir' (new.html.erb)
  end
   def index

    @commentpub = Commentpub.new
      @publication = Publication.find(params[:publication_id])

    @publication_commentpubs_count = @publication.commentpubs.all.count
    @publication_commentpubs = @publication.commentpubs.all

      	
   end

    def show
 @publication = Publication.find(params[:publication_id])
 @commentpub = Commentpub.find(params[:id])
 

    # Méthode qui récupère le potin concerné et l'envoie à la view show (show.html.erb) pour affichage
  end


    def create
    

     user = current_user
    @publication = Publication.find(params[:publication_id])
    @commentpub = @publication.commentpubs.new(content: params[:content])
    @commentpub.user_id = user.id
    @commentpub.publication_id = @publication.id
   if @commentpub.save
    redirect_to publication_commentpub_index_path(@publication.id)
  end
end

 def edit    
     @commentpub = Commentpub.find(params[:id])

    # Méthode qui récupère le potin concerné et l'envoie à la view edit (edit.html.erb) pour affichage dans un formulaire d'édition
  end

   def update
     @commentpub = Commentpub.find(params[:id])
     if @commentpub.update(content: params[:content])
         redirect_to "/publications/#{@commentpub.publication.id}"
     else
         render "edit"
     end
   end


end