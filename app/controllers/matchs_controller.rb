class MatchsController < ApplicationController
	def index
		@matchs = Match.all
	end
	def show
		@match = Match.find(params[:id])
		@funs = Fun.where(match_id: @match.id)
	end
end
