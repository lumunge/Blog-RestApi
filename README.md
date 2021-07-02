### RESTFUL API WITH NODE JS EXPRESS & MONGODB WITH JWT AUTHENTICATION

### ABOUT

A nodejs restful api with jwt authentication

### TECHNOLOGIES USED:

    * Express
    * Nodejs
    * MongoDB
    * JWT

### FEATURES

    * User Registration
    * User login
<<<<<<< HEAD
    * Create Blog Posts -> Authenticated User
    * Delete Blog Posts -> Authenticated User
    * Edit Blog Posts -> Authenticated User
    * Read Blog Posts -> All Users

### API ENDPOINTS

    * Posts Route `https://flannel-beaver-23145.herokuapp.com/posts`
    * Get all users `https://flannel-beaver-23145.herokuapp.com/users` --> Responds with list of users
    * User Registration `https://flannel-beaver-23145.herokuapp.com/users/register`
    * User Login `https://flannel-beaver-23145.herokuapp.com/users/login` --> respond with auth-token to be used for create, delete and edit operations

=======
    * Create Blog Posts -> Authnticated User
    * Delete Blog Posts -> Authnticated User
    * Edit Blog Posts -> Authenticated User
    * Read Blog Posts -> All Users

>>>>>>> dc2f56388e6a8682c99267e8b52d21113552e8fb
### TESTS WITH CURL

-   CREATE A NEW USER

    -   Request

    curl -X POST -H "Content-Type: application/json" \
    -d '{"username":"uzer1","email":"uzer1@yahoo.com", "password": "123456"}' \
<<<<<<< HEAD
    http://localhost:5000/user/registerhttps://flannel-beaver-23145.herokuapp.com/users
=======
    http://localhost:5000/user/register
>>>>>>> dc2f56388e6a8682c99267e8b52d21113552e8fb

    -   Response

    {"user":"60ca05b8f1ea1117a6e0ef18"}

-   LOGIN NEW USER

    -   Request

    curl -X POST -H "Content-Type: application/json" \
    -d '{"username":"uzer1", "password": "123456"}' \
    http://localhost:5000/user/login

    -   Response

    => Responds with a jwt token to be user for CREATE, UPDATE and DELETE posts.

-   GET ALL POSTS

    curl -v http://localhost:5000/posts

-   CREATE A NEW POST

    curl -X POST -H "Content-Type: application/json" -H "auth-token: ${token
    here}" \
     -d '{"title":"Post Request","description":"testing restful api post
    request", "image":
    "https://images.unsplash.com/photo-1592323360850-e317605f0526?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"}'
    \
     http://localhost:5000/posts

-   GET POST BY ID

    curl -v http://localhost:5000/posts/${post_id}

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
    also changed", "image": "https://images.unsplash.com/photo-1592323360850-e317605f0526?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"}'
    \
    http://localhost:5000/posts/post_id

### SETUP

    * git clone https://github.com/lumungep12/Blog-RestApi.git
    * npm i
    * Create Mongodb Database and link to to your applcation
    * Create a secret and save it to .env -> .gitignore
    * npm start
    * Start making Requests
