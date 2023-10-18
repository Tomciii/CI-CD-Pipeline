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
                                 // Define the source directory containing the build files
                                                   def sourceDirectory = 'dist/jenkins-app'

                                                   // Define the target directory where you want to copy the build files
                                                   def targetDirectory = 'C:/Users/Tomcii/Documents/Coding/Apache24/htdocs'

                                                   // Copy the build files to the target directory
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
