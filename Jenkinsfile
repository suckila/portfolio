pipeline {
    agent { label 'agent-kojidev' }
    stages {
        stage('Deploy to VPS') {
            when {
                expression { env.GIT_BRANCH == 'origin/main' }
            }
            steps {
                script {
                    // Mengambil nama branch bersih (misal: 'main')
                    def branchName = "${GIT_BRANCH.replaceFirst(/^.*\//, '')}"
                    echo "Branch name: ${branchName}"
                    env.BRANCH_NAME = branchName
                }
                
                // Langsung eksekusi perintah lokal di VPS karena Agent berada di dalam VPS ini
                sh """
                    echo 'Executing deployment locally on the agent VPS!'
                    echo 'Branch: ${env.BRANCH_NAME}'
                    
                    cd /var/www/portfolio

                    # Fetch dan pull code terbaru langsung di folder lokal VPS
                    git fetch --all
                    git checkout ${env.BRANCH_NAME}
                    git pull origin ${env.BRANCH_NAME}

                    echo 'Deployed successfully to VPS!'
                """
            }
        }
    }
}