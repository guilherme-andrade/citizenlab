class Api::V1::FoldersController < Api::V1::BaseController
  before_action :set_folder, only: :show

  def index
    @folders = Folder.all
  end

  def show; end

  private

  def set_folder
    @folder = Folder.find(params[:id])
  end
end
