class PublicationsController < ApplicationController
  def new
  end
  def create
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