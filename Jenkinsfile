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
                              def sourceDirectory = 'dist\\jenkins-app'
                              def targetDirectory = 'C:\\Users\\Tomcii\\Documents\\Coding\\Apache24\\htdocs'
                               bat "xcopy /s /y ${sourceDirectory} ${targetDirectory}"
                               currentBuild.result = 'SUCCESS'
                        } catch (Exception e) {
                            currentBuild.result = 'FAILURE'
                            throw e
                        }
                    }
            }
        }
    }
}
