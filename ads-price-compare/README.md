# Install Docker Desktop (Windows).
 Open a terminal in that particular folder of the project

#### 1) Build the image (web app)
This project uses Docker Compose (web + MongoDB).

    docker compose build

#### 2) Run the containers
    docker compose up

This starts two services: web (Node.js app) and mongo (MongoDB)

#### 3) The Port to use
    Open the browser at: http://localhost:3000/

The app listens on port 3000.
(MongoDB is mapped to host port 27018, but you don’t need to open it in a browser.)

#### 4) Test the identity endpoint

    (http://localhost:3000/api/student)

You should see JSON like:
      {
        "name": "Christo Raju",
        "Student id": "s223880826"
      }