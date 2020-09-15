json.id @folder.id
json.title @folder.title
json.projects @folder.projects, partial: 'api/v1/projects/project', as: :project
json.folders @folder.folders, partial: 'api/v1/folders/folder', as: :folder
json.started @folder.started
json.description @folder.description
