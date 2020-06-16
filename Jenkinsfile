properties([pipelineTriggers([githubPush()])])

node { git url: 'https://github.com/jorgef-lopezm/Automation_Challenge.git', branch: 'master' }

pipeline {
    agent any
    stages{
        stage('Build') {
            steps {
                sh script:'''
                    #!/bin/bash
                    pwd
                    cd /home/ubuntu/Automation_Challenge/
                    git pull origin dev
                    npm install
                '''   
            }
        }
        stage('Test') {
            steps {
                echo "Testing Stage"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying Stage"
            }
        }
    }
}
