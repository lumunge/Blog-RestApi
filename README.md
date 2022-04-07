### RESTFUL API WITH NODE JS EXPRESS & MONGODB WITH JWT AUTHENTICATION

### ABOUT

A nodejs restful api with jwt authentication

### TECHNOLOGIES USED:

    * Express
    * Node.js
    * MongoDB
    * JWT
    * Heroku
    * Redis Cache

### FEATURES

    * User Registration
    * User login
    * Create Blog Posts -> Authenticated User
    * Delete Blog Posts -> Authenticated User
    * Edit Blog Posts -> Authenticated User
    * Read Blog Posts -> All Users

### API ENDPOINTS

- Posts Route --> `http://localhost:5000/posts`
- Registration --> `http://localhost:5000/users/signup`
- User Login --> `http://localhost:5000/users/signin`

### TESTS WITH CURL

- CREATE A NEW USER

  - Request

  ```curl
  curl -X POST -H "Content-Type: application/json" \
      -d '{"username":"user304","email":"uzer304@yahoo.com", "password": "123456"}' \
      http://localhost:5000/users/signup

  ```

  - Response

    {"user":"user_id"}

- LOGIN NEW USER

  - Request

  ```curl
  curl -X POST -H "Content-Type: application/json" \
      -d '{"username":"user304", "password": "123456"}' \
      http://localhost:5000/users/signin
  ```

  - Response

    jwt token ---> {eyJhbGciOiJIUzI1NiIsIn...}

- GET ALL POSTS

  - Request

    ```curl
    curl -v http://localhost:5000/posts
    ```

  - Response

    All posts in json format

- CREATE A NEW POST

  - Request

    ```curl
    curl -X POST -H "Content-Type: application/json" 'auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdhOTBhYjczNGQ0NjBmYzEzODkzZTMiLCJpYXQiOjE2MzU0MjM3Njd9.TyP1HFUGxO6BC7tskBWFS7zIDDDSXQ9TgVimNELmT9Q' \
        -d '{"title": "test title",
        "description": "description must be more than 100 chars description must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 charsdescription must be more than 100 chars",
        "image":"image.png"}' \
        http://localhost:5000/posts
    ```

  - Response

    Responds with the post entered if the request was successful

- GET POST BY ID

  - Request

    ```curl
    curl -v http://localhost:5000/posts/${post_id_here}
    ```

  - Response

    Responds with the post details

- DELETE A SINGLE POST BY ID

  ```curl
  curl -X DELETE -H "auth-token: {token here without braces}"
  http://localhost:5000/posts/60e967f014a04b001503b969
  ```

- UPDATE SPECIFIC POST PROPERTY (TITLE)

  ```curl
  curl -X PATCH -H "Content-Type: application/json" -H "auth-token: {token here without braces}" \
      -d '{"title": "The title was changed here"}' \
      http://localhost:5000/posts/post_id
  ```

- UPDATE THE WHOLE POST

  ```curl
  curl -X PUT -H "Content-Type: application/json" -H "auth-token: ${token here without braces}" \
      -d '{"title": "updated title "description": "updated description", "image": "new image here"}' \
      http://localhost:5000/posts/post_id
  ```

### TESTS WITH POSTMAN

For this we just have to import the _Blog-Rest-API.postman_collection.json_ file to postman app and send requests.

### SETUP LOCALLY

    * git clone https://github.com/lumunge/Blog-RestApi.git
    * npm i
    * Create Mongodb Database and link to to your applcation
    * Create a secret and save it to .env -> .gitignore
    * npm start
    * Start making Requests
