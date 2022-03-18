# Context

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

<em>This capstone project was built at Flatiron School after 13 weeks in their instensive software engineering bootcamp.</em>
