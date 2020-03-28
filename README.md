# Info-Blogger-App
A blogging application for learning and posting about new technologies out there.

This application was running on cloud9 server but after AWS bought it its now taken down to localhost.

### Features
* users can search for  the posts and Look for it.
* users can create , edit or delete their post.

### Tech Stack
It is completely build over **MEN stack** (Mongodb,ExpressJs,Nodejs) and frontend is build using **Semantic-UI**.

### Routes (CRUD LOGIC)
It have all the CRUD logic implemented.To check out the CRUD logic please go through the routes folder

### Database
For the Database it uses MongoDB locally installed and connected with the application with the Mongoose npm package.

### Schema
Schemas I have build is for users and blogs. You can check out the models folder for schema models.

### Authentication
For the Authentication it uses normal authentication configure with the Passport.js library to maintain sessions and authentication.
passport-local-mongoose package is used as a plugin to mongoose for simplifying the authentication process
with mongoose.

### Installation
clone the repository

Install the Nodejs and MongoDB

download package.json file and Run npm install to install dependencies.

Run node app.js and mongod in new terminal for to run the applcation and database respectively.



