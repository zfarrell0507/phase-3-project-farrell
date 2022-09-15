puts "🌱 Seeding spices..."

20.times do
    maker = Maker.create(
        username: Faker::GreekPhilosophers.name,
        password: Faker::Superhero.descriptor
    )
end

puts "✅ Done seeding!"
