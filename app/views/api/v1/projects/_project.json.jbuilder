json.id project.id
json.title project.title
json.topic_ids project.topics.pluck(:id)
json.started project.started
json.description project.description
