class PublicationsController < ApplicationController
  def new
  end

  def create
  end

  def edit
  end

  def show
    @publication = Publication.find(params[:id])
  end

  def index
  end

  def update
  end

  def destroy
  end
end
