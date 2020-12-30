pipeline {
    agent {
        docker { 
            image 'node:12.15'
            args '-u root:root'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }
        stage('Deploy') {
            when {
                expression {
                    env.BRANCH_NAME == 'main'
                }
            }
            steps {
                sh './scripts/deploy.sh'
            }
        }
    }
}