class Api::V1::ProjectsController < Api::V1::BaseController
  def index
    @projects = Project.by_topics(params.dig(:topicIds))
  end
end
