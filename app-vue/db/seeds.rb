5.times do
  Snippet.create(
    title: Faker::Lorem.word,
    content: Faker::Lorem.sentence,
  )
end
