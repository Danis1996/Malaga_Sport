class ClubsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_club, only: [:show, :edit, :update, :destroy]

  # GET /clubs
  # GET /clubs.json
  def index
    @clubs = Club.all
  end

  # GET /clubs/1
  # GET /clubs/1.json
  def show
        @club = Club.find(params[:id])
  end

  # GET /clubs/new
  def new 
    @user = current_user
        @quarters = Quarter.all
    @club = Club.new
  end

  # GET /clubs/1/edit
  def edit
    @quarters = Quarter.all
  end

  # POST /clubs
  # POST /clubs.json
  def create
      @my_user = current_user.id
    @club = Club.create('name' => params[:name], 'category' => params[:category], quarter_id: params[:quarter_id])

  @club.admin_id =  @my_user

    respond_to do |format|
      if @club.save
        format.html { redirect_to new_club_picture_path(@club.id), notice: 'Club was successfully created.' }
        format.json { render :show, status: :created, location: @club }
      else
        format.html { render :new }
        format.json { render json: @club.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clubs/1
  # PATCH/PUT /clubs/1.json
  def update
    @club = Club.find(params[:id])
    puts "*"*60
    puts params
    respond_to do |format|
      if @club.update(name: params['name'], category: params['category'])
        format.html { redirect_to @club, notice: 'Club was successfully updated.' }
        format.json { render :show, status: :ok, location: @club }
      else
        format.html { render :edit }
        format.json { render json: @club.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clubs/1
  # DELETE /clubs/1.json
  def destroy
    @club.destroy
    respond_to do |format|
      format.html { redirect_to clubs_url, notice: 'Club was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_club
      @club = Club.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def club_params
      params.require(:club).permit(name: params['name'], category: params['category'])
    end
end
