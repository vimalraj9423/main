pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('start') {
            steps {
                sh 'npm start'
            }
        }
        stage('end') {
            steps {
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
    }
}