puts "Destroying old seed data"
Flashcard.destroy_all
Deck.destroy_all
User.destroy_all



puts "Seeding Users"

User.create!([
    {
        username: "lisa",
        password: "user1",
        email: "lisa@email.com",
        image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        username: "thomas",
        password: "user2",
        email: "thomas@email.com",
        image: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
    },
    {
        username: "lee",
        password: "user3",
        email: "lee@email.com",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
])

puts "Seeding Decks"

Deck.create!([
    {
        subject: "Spanish verbs", 
        summary: "",
        public: false,
        user_id: rand(1..3)
    },
    {
        subject: "Biology 1000", 
        summary: "bio terms from Oct 24th lecture",
        public: false,
        user_id: rand(1..3)
    },
    {
        subject: "Greek Philosophers", 
        summary: "",
        public: false,
        user_id: rand(1..3)
    },
    {
        subject: "Trivia", 
        summary: "questions for game night",
        public: false,
        user_id: rand(1..3)
    },
    {
        subject: "Dad jokes", 
        summary: "A collection of jokes and puns only a father could appreciate.",
        public: false,
        user_id: 1
    }
])

puts "Seeding flashcards"

5.times do
    Flashcard.create!(term: Faker::University.name, meaning: Faker::Lorem.sentence, deck_id: rand(1..4))
end

5.times do
    Flashcard.create!(term: Faker::Hacker.noun, meaning: Faker::Hacker.say_something_smart, deck_id: rand(1..4))
end

Flashcard.create!([
    {
        term: "Dad, did you get a haircut?",
        meaning: "No, I got them all cut!",
        deck_id: 5
    },
    {
        term: "Which bear is the most condescending?",
        meaning: "A Pan-duh.",
        deck_id: 5
    },
    {
        term: "What do a tick and the Eiffel Tower have in common?",
        meaning: "They're both parasites.",
        deck_id: 5
    },
    {
        term: "What do you call a fish wearing a bowtie?",
        meaning: "Sofishticated.",
        deck_id: 5
    },
    {
        term: "How do you follow Will Smith in the snow?",
        meaning: "You follow the fresh prints.",
        deck_id: 5
    },
    {
        term: "I thought the dryer was shrinking my clothes",
        meaning: "Turns out it was the refrigerator all along",
        deck_id: 5
    },
    {
        term: "Why do seagulls fly over the ocean?",
        meaning: "Because if they flew over the bay, we'd call them bagels.",
        deck_id: 5
    },
    {
        term: "Why did the fisherman cross the road",
        meaning: "Just for the halibut",
        deck_id: 5
    }
])

puts "Done seeding"