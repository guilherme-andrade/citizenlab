class Api::V1::ProjectsController < Api::V1::BaseController
  def index
    p params
    @projects = Project.by_topics(params.dig(:topicIds))
    render json: @projects.as_json
  end
end
