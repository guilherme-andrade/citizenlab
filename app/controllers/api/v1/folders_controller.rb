class Api::V1::FoldersController < Api::V1::BaseController
  def index
    render json: Folder.all
  end
end
