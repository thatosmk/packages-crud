# Getting Started with the packages App

- Pull down the repo and install the packages
```sh
npm install
```

- Then, run the server
```sh
npm run start
```
Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser. Since Rails will be running on port 3000 already.

### How to login

- we have provided a seeds file in rails `db` folder, seed the database to find out what credentials to use to login.

### Tradeoffs

Unfortunately, we made the following tradeoffs in this application

- We were unable to full implement the redirect after a user logs in, there for, after submitting the form, you need to refresh the page to view the logged in dashboard.

- We decided not to write tests for the frontend.
