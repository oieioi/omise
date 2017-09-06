class ShopsController < ApplicationController
  def index
    @shops = Shop.all
  end

  def new
  end

  def create
    @shop = Shop.new(shop_params)
    @shop.save
    redirect_to @shop
  end

  def show
    @shop = Shop.find(params[:id])
  end

  private
  def shop_params
    params.require(:shop).permit(:name, :description, :url)
  end
end
