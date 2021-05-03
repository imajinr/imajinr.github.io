pipeline {
    agent {
        docker { 
            image 'node:12.15'
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
                agent
                sh './scripts/deploy.sh'
            }
        }
    }
}