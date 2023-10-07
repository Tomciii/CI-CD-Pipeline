pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your Angular project's source code from your version control system (e.g., Git)
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm if needed
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run Angular tests (e.g., using Angular CLI)
                sh 'npm test'
            }
        }

        stage('Build Angular App') {
            steps {
                // Build the Angular app for production
                sh 'npm run build'
            }
        }

        stage('Deploy to Localhost') {
            steps {
                // Serve the Angular app locally on port 4200
               script {
               try {
                sh 'npm start &'
                sleep(time: 15, unit: 'SECONDS')
                currentBuild.result = 'SUCCESS'
               }
               catch (Exception e) {
               currentBuild = 'FAILURE'
               throw e
               }
               }
            }
        }
    }
}
