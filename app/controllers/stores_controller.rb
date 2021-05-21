class StoresController < ApplicationController
  before_action :set_store, only: [:show, :update, :edit, :destroy]

  def index
      @stores = Store.all
      render component: "Stores", props: {stores: @stores}
  end

  def show
      render component: "Store", props: {store: @store}
  end

  def edit
      render component: "StoreEdit", props: {store: @store}
  end

  def update
   if @store.update(store_params)
      redirect_to root_path
   else
    
   end
  end

  def new
      render component: "StoreNew"
  end

  def create
      @store = Store.new(store_params)
      if(@store.save)
          redirect_to root_path
      else
      end 
  end

  def destroy
    @store.destroy
    redirect_to root_path
  end

   private

  def set_store
    @store = Store.find(params[:id])
  end

  def store_params
      params.require(:store).permit(:name)
  end
end
