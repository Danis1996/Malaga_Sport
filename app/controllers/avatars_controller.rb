class AvatarsController < ApplicationController
  def create
  	@user = User.find(params[:user_id])
    @user.avatar.attach(params[:avatar])
    if params[:avatar] != nil
      @user.avatar.attach(params[:avatar])
      redirect_to(user_path(@user))
    elsif @user.avatar.attached?
      flash[:warning] = "Veuillez insérer une image"
      redirect_to(user_path(@user.id))

    else
      flash[:warning] = "Veuillez insérer une image"
      render 'new'
    end
  end

  def new
  	@user = User.find(params[:user_id])
  end

  def edit
  	puts "X"*300
  	@user = User.find(params[:user_id])
  end
end
