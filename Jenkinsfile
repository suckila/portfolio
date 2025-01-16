pipeline {
    agent any
    stages {
        stage('Deploy to VPS') {
            when {
                expression { env.GIT_BRANCH == 'origin/main' }
            }
            steps {
                script {
                    def branchName = "${GIT_BRANCH.replaceFirst(/^.*\//, '')}"
                    echo "Branch name: ${branchName}"
                    // Store branchName in an environment variable for use in other steps
                    env.BRANCH_NAME = branchName
                }
                sshagent(credentials: ['user-vps-kojidev']) {
                    sh """
                    ssh -p 45022 -o StrictHostKeyChecking=no kojidev@103.127.132.118 "
                    echo 'Connected to VPS!'
                    echo 'Branch: ${env.BRANCH_NAME}'
                    cd /var/www/portfolio

                    # Fetch and pull the latest code
                    git fetch --all
                    git checkout ${env.BRANCH_NAME}
                    git pull origin ${env.BRANCH_NAME}

                    echo 'Deployed to VPS!'
                    "
                    """
                }
            }
        }
    }
}
