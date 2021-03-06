class PatternsController < ApplicationController
  before_action :set_pattern, only: [:show, :update, :destroy]

  # GET /patterns
  def index
    @patterns = Pattern.all

    render json: @patterns
  end

  # GET /patterns/1
  def show
    render json: @pattern
  end

  # POST /patterns
  def create
    @pattern = Pattern.new(pattern_params)

    if @pattern.save
      render json: @pattern, status: :created, location: @pattern
    else
      render json: @pattern.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /patterns/1
  def update
    if @pattern.update(pattern_params)
      render json: @pattern
    else
      render json: @pattern.errors, status: :unprocessable_entity
    end
  end

  # DELETE /patterns/1
  def destroy
    @pattern.destroy
    render json: {message: "Pattern has been deleted"}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pattern
      @pattern = Pattern.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def pattern_params
      params.require(:pattern).permit(:name, :difficulty, :description, :yarn, :category_id)
    end
end
