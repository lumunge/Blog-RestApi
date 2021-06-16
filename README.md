### RESTFUL API WITH NODE JS EXPRESS & MONGODB

### ABOUT

A nodejs restfult api

### TECHNOLOGIES USED:

    * Express
    * Nodejs
    * MongoDB

### FEATURES

    * Calculating income received, expenses incurred and showing collective networth

### TESTS WITH CURL

-   GET ALL POSTS

    curl -v http://localhost:5000/posts

-   CREATE A NEW POST

    curl -X POST -H "Content-Type: application/json" \
     -d '{"title":"Post Request","description":"testing restful api post
    request", "image":
    "https://images.unsplash.com/photo-1592323360850-e317605f0526?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"}'
    \
     http://localhost:5000/posts

-   GET POST BY ID

    curl -v http://localhost:5000/posts/${post_id}

-   DELETE A SINGLE POST BY ID

    curl -X DELETE http://localhost:5000/posts/post_id

-   UPDATE SPECIFIC POST PROPERTY (TITLE)

    curl -X PATCH -H "Content-Type: application/json" \
    -d '{"title": "The title was changed here"}' \
    http://localhost:5000/posts/post_id

-   UPDATE THE WHOLE POST

    curl -X PUT -H "Content-Type: application/json" \
    -d '{"title": "The title was changed here", "description": "The description was
    also changed", "image": "https://images.unsplash.com/photo-1592323360850-e317605f0526?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"}'
    \
    http://localhost:5000/posts/post_id

### SETUP

    * git clone https://github.com/lumungep12/Finance-Tracker.git
    * npm i
    * npm start
    * navigate to localhost:5000/posts
