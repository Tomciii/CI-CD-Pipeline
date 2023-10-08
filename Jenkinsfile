pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Localhost') {
            steps {
               script {
                 try {
                       bat 'start /B cmd /C deploy.sh'
                    sleep(time: 15, unit: 'SECONDS')
                    currentBuild.result = 'SUCCESS'
                 } catch (Exception e) {
                   currentBuild = 'FAILURE'
                   throw e
                 }
               }
            }
        }
    }
}
