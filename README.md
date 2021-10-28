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

-   Posts Route --> `http://localhost:5000/posts`
-   Registration --> `http://localhost:5000/users/register`
-   User Login --> `http://localhost:5000/users/login`

### TESTS WITH CURL

-   CREATE A NEW USER

    -   Request

```curl
curl -X POST -H "Content-Type: application/json" \
    -d '{"username":"user304","email":"uzer304@yahoo.com", "password": "123456"}' \
    http://localhost:5000/users/signup

```

    -   Response

        {"user":"user_id"}

-   LOGIN NEW USER

    -   Request

```curl
curl -X POST -H "Content-Type: application/json" \
    -d '{"username":"user304", "password": "123456"}' \
    http://localhost:5000/users/signin
```

    -   Response

        jwt token ---> {eyJhbGciOiJIUzI1NiIsIn...}

-   GET ALL POSTS

    -   Request

        ```curl
        curl -v http://localhost:5000/posts
        ```

    -   Response

        All posts in json format

-   CREATE A NEW POST

    -   Request

        `curl -X POST -H "Content-Type: application/json" -H 'auth-token: {auth-token from login without curly braces}' \ -d '{"title": "test title", "description": "description must be more than 100 chars", "image":"image.png"}' \ http://localhost:5000/posts`

    -   Response

        Responds with the post entered if the request was successful

-   GET POST BY ID

    -   Request

        `curl -v http://localhost:5000/posts/${post_id_here}`

    -   Response

        Responds with the post details

---

        UNDER DEVELOPMENT FROM HERE

---

-   DELETE A SINGLE POST BY ID

    curl -X DELETE -H "auth-token: ${token here}"
    http://localhost:5000/posts/post_id

-   UPDATE SPECIFIC POST PROPERTY (TITLE)

    curl -X PATCH -H "Content-Type: application/json" -H "auth-token: ${token
    here}" \
    -d '{"title": "The title was changed here"}' \
    http://localhost:5000/posts/post_id

-   UPDATE THE WHOLE POST

    curl -X PUT -H "Content-Type: application/json" -H "auth-token: ${token
    here}" \
    -d '{"title": "The title was changed here", "description": "The description was
    also changed", "image": "http://images.unsplash.com/photo-1592323360850-e317605f0526?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"}'
    \
    http://localhost:5000/posts/post_id

### SETUP LOCALLY

    * git clone https://github.com/lumunge/Blog-RestApi.git
    * npm i
    * Create Mongodb Database and link to to your applcation
    * Create a secret and save it to .env -> .gitignore
    * start up redis
        -> redis-server
    * npm start
    * Start making Requests
