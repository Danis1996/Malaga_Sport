class StaticPagesController < ApplicationController
  def index
    @events = Event.all
    @recrutements = Recrutement.all
    @clubs = Club.all
    @publications = Publication.all
  end
end
