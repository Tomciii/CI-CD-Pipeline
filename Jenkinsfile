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

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }


        stage('Deploy') {
            steps {
             script {
                        try {
                            // copy files to Apache server
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
