class CreateProjectTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :project_topics do |t|
      t.references :topic, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
