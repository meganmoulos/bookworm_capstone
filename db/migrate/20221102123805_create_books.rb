class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :cover_image
      t.decimal :price
      t.text :description
      t.integer :publication_year
      t.string :publisher
      t.integer :number_of_pages

      t.timestamps
    end
  end
end
