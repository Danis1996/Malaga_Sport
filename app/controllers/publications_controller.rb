class PublicationsController < ApplicationController
  def new
    @publication = Publication.new
  end
  def create

    @publication = Publication.create('content' => params[:content],  user_id: current_user.id)
      respond_to do |format|
      if @publication.save
        format.html { redirect_to @publication, notice: 'PUblication was successfully created.' }
        format.json { render :show, status: :created, location: @publication }
      else
        format.html { render :new }
        format.json { render json: @publication.errors, status: :unprocessable_entity }
      end
        end

  end
  def edit
  end
  def show
    @publication = Publication.find(params[:id])
    @publication_commentpubs_count = @publication.commentpubs.all.count
  end
  def index
  end
  def update
  end
  def destroy
  end
end