class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.date :started
      t.integer :folder_id, null: true

      t.timestamps
    end
  end
end
