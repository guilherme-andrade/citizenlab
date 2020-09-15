class Project < ApplicationRecord
  belongs_to :folder, class_name: 'Folder', optional: true

  has_many :project_topics
  has_many :topics, through: :project_topics

  scope :by_topics, ->(topic_ids = []) {
    return all unless topic_ids&.any?

    includes(:project_topics).where(project_topics: { topic_id: topic_ids })
  }
end
