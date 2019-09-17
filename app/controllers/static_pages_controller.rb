class StaticPagesController < ApplicationController
  def index
    @events = Event.all
    @recrutements = Recrutement.all
    @clubs = Club.all
  end
end
