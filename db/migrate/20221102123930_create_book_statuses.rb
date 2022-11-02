class CreateBookStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :book_statuses do |t|
      t.belongs_to :user_id, null: false, foreign_key: true
      t.belongs_to :book_id, null: false, foreign_key: true
      t.belongs_to :shelf_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
