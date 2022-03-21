# Context

<p float="left">
  <img src="https://icon-library.com/images/react_1353128.png" alt="React" height="25px">&nbsp
  <img src="https://icon-library.com/images/ruby-icon/ruby-icon-28.jpg" alt="Ruby" height="25px">&nbsp
  <img src="https://icon-library.com/images/ruby-on-rails-512_110895.png" alt="Rails" height="25px">&nbsp
  <img src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" height="25px">
</p>

A full-stack digital flashcard application where users can create and share flashcards decks.

[Demo](https://www.loom.com/share/07c8d22e86f949dfbf73451c9b5b80b4)
## Requirements

* Ruby 2.7.4 ([Docs](https://www.ruby-lang.org/en/documentation/))
* NodeJS (v16), and npm ([Docs](https://docs.npmjs.com/))
* Postgresql ([Docs](https://www.postgresql.org/docs/))

## Set Up

1. Clone this repository:
      ```sh
      git clone https://github.com/dijiango/context-cards.git
      ```
      
2. Run the following commands from inside the project's directory by first running `cd context-cards`:
      ```sh
      bundle install
      rails db:create
      npm install --prefix client
      ```
      
You can use the following commands to run the application:

* `rails s`: to run the backend on [http://localhost:3000](http://localhost:3000).
* `npm start --prefix client`: to run the frontend on [http://localhost:4000](http://localhost:4000).

<em>This capstone project was built at Flatiron School after 13 weeks in the intensive, software engineering bootcamp.</em>
