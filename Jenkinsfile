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
                sh 'ng build --output-path docs --base-href /jenkins-app/'
            }
        }

        stage('Deploy to Localhost') {
            steps {
                sh 'npx ngh --dir=docs/jenkins-app'
            }
        }
    }
}
