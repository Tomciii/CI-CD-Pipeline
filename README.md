# How can a CI/CD workflow be implemented with Jenkins to run automated tests?
This is the question I will try to solve with this repository. Project is done for my planned upcoming bachelor thesis with the research question above.
For the sake of content, this frontend app will be a Gallery of Thomas' Art and Paintings. (https://www.instagram.com/tomcii/)

Structure of the project:

# Frontend
The repository consists of a Angular Frontend project including a Jenkinsfile. The frontend will be containerized via Docker.

The content will be:
- A Home page
- A Gallery Page
- An About Page

# Jenkins
A local Jenkins running on port 8080 will be used for the CI/CD.

# Apache Server
Also locally running, an Apache server will deploy the frontend, triggered by the local Jenkins.
