properties([pipelineTriggers([githubPush()])])

node { git url: 'https://github.com/jorgef-lopezm/Automation_Challenge.git', branch: 'master' }
def branchName = "${env.BRANCH_NAME}"

pipeline {
    agent any
    stages{
        stage('Build') {
            steps {
                sh script:'''
                    #!/bin/bash
                    cd /home/ubuntu/Automation_Challenge/
                    git pull origin dev
                    npm install
                '''   
            }
        }
        stage('Test') {
            steps {
                sh script:'''
                    #!/bin/bash
                    cd /home/ubuntu/Automation_Challenge/
                    npm test
                    npm run sauce
                '''
            }
        }
        if(branchName == 'dev'){
            stage('Deploy') {
                steps {
                    echo "Deploying Stage"
                }
            }
        }
    }
}
