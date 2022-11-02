class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :user_id, null: false, foreign_key: true
      t.belongs_to :book_id, null: false, foreign_key: true
      t.integer :star_rating
      t.string :comment

      t.timestamps
    end
  end
end
