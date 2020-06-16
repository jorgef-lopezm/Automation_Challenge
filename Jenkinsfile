properties([pipelineTriggers([githubPush()])])

node { git url: 'https://github.com/jorgef-lopezm/Automation_Challenge.git', branch: 'master' }

pipeline {
    agent any
    stages{
        stage('Build') {
            steps {
                sh script:'''
                    #!/bin/bash
                    cd /home/ubuntu/Automation_Challenge/
                    git pull origin master
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
        stage('Deploy') {
            steps {
                sh script:'''
                    #!/bin/bash
                    cd /home/ubuntu/production/Automation_Challenge/
                    git pull origin master
                    npm install
                '''
            }
        }
    }
}
