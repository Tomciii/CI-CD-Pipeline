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

        stage('Copy Files to Apache Server') {
            steps {
             script {
                        try {
                            sh 'npx ngh --dir=dist/jenkins-app'
                            bat 'xcopy /s /y "dist\\jenkins-app\\*" "C:\\Users\\Tomcii\\Documents\\Coding\\Apache24\\htdocs\\"'
                        } catch (Exception e) {
                            currentBuild.result = 'FAILURE'
                            throw e
                        }
                    }
            }
        }
    }
}
