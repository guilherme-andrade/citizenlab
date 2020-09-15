class Api::V1::TopicsController < Api::V1::BaseController
  def index
    render json: Topic.all
  end
end
