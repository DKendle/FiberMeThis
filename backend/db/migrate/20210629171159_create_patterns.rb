class CreatePatterns < ActiveRecord::Migration[6.0]
  def change
    create_table :patterns do |t|
      t.string :name
      t.integer :difficulty
      t.string :description
      t.string :yarn
      t.integer :category_id

      t.timestamps
    end
  end
end
