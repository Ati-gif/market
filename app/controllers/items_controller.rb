class ItemsController < ApplicationController
  before_action :set_store
  before_action :set_item, only: [:show, :destroy, :update, :edit]

  def index
    render component: 'Items', props: {store: @store, items: @store.items}
  end

  def show
      render component: "Item", props: {store: @store, item: @store.item}
  end
  def create
      item = @store.item.new(item_params)
      if item.save
          
          redirect_to store_items_path(@store.id)
      else
          
      end
  end

  def new
      render component: 'ItemNew', props: {store: @store}
  end

  def edit
      render component: 'ItemEdit', props: {store: @store, item: @item}
  end

  def update
     if @item.update(item_params)
       redirect_to store_items_path(@store.id)
     else
       
     end
  end

  def destroy
      @item.destroy
      redirect_to store_items_path(@store.id)
      
  end

  private
  def item_params
    params.require(:item).permit(:body, :name)
  end

  def set_store
   @store = Store.find(params[:store_id])
  end

  def set_item
      @item = @store.items.find(params[:id])
      
  end
end