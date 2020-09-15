_logger = Logger.new(STDOUT)

_logger.info 'Destroying old data...'

Topic.destroy_all
Project.destroy_all
Folder.destroy_all

seed_file = Rails.root.join('db/sample_data.json')

_logger.info 'reading json file...'

file = File.read(seed_file)

data = JSON.parse(file)

projects, folders, topics = data.values_at('projects', 'folders', 'topics')

_logger.info 'Creating topics...'

topics.each do |t_hash|
  Topic.create(t_hash)
end

child_folders, parent_folders = folders.partition { |f| f.key?('folder') }

_logger.info 'Creating parent folders...'

parent_folders.each do |f_hash|
  Folder.create(f_hash)
end

_logger.info 'Creating child folders...'

child_folders.each do |f_hash|
  parent_folder_id = f_hash.delete('folder')
  Folder.create(**f_hash.symbolize_keys, folder_id: parent_folder_id)
end

_logger.info 'Creating projects...'

projects.each do |p_hash|
  folder_id = p_hash.delete('folder')
  topic_ids = p_hash.delete('topics')
  project = Project.new(**p_hash.symbolize_keys, folder_id: folder_id)
  project.folder_id = folder_id if folder_id
  topic_ids.each { |topic_id| ProjectTopic.create(topic_id: topic_id, project: project) }
  project.save
end
