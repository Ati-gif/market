# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "faker"
Store.destroy_all

2.times do
  x = Faker::Verb.simple_present
  y = Faker::Verb.ing_form
  z = Faker::Verb.base
  
  store = Store.create(name: "#{x} #{y} #{z}")
  2.times do
    items = store.items.create(name: Faker::Verb.simple_present, body: Faker::Quote.famous_last_words)
     
  end

end
puts "seeded #{Store.all.size} Stores"
puts "first store name: #{Store.first.name}"
puts "seeded #{Item.all.size} Items"
puts "first item name: #{Store.first.items.first.name}"
