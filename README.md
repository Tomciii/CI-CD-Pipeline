# "How can a CI/CD workflow be effectively implemented using Jenkins for web development projects?"
This is the question I will try to solve with this repository. Project is done for my planned upcoming bachelor thesis with the research question above.  <br>
For the sake of content, this frontend app will be a Gallery of Thomas' Art and Paintings. (https://www.instagram.com/tomcii/)

Structure of the project:

# Frontend
The repository consists of a Angular Frontend project including a Jenkinsfile. The frontend will be containerized via Docker.

The content will be:
- A Home page
- A Gallery Page
- An About Page

# Jenkins
A local Jenkins running on port 8080 will be used for the CI/CD.  <br>
Jenkins.war runnable via cmd command ```java -jar jenkins.war```

# Apache Web Server:
Also locally running, an Apache Web Server will deploy the frontend, triggered by the local Jenkins.  <br>
Apache Service running locally on ```127.0.0.1```
