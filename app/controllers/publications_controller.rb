class PublicationsController < ApplicationController
  def new
  end
  def create
    @publication = Publication.new(content: params[:content], user_id: current_user.id)
    @publication.save
    redirect_to root_path
  end
  def edit
  end
  def show
    @publication = Publication.find(params[:id])
    @publication_commentpubs_count = @publication.commentpubs.all.count
  end
  def index
     @publications = Publication.all
  end
  def update
  end
  def destroy
  end
end