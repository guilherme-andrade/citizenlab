class Folder < ApplicationRecord
  belongs_to :folder, class_name: 'Folder', optional: true
  
  has_many :folders, foreign_key: :folder_id
  has_many :projects, foreign_key: :folder_id
end
