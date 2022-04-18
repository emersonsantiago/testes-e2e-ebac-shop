pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/emersonsantiago/testes-e2e-ebac-shop_-Cypress-.git'
            }
        }
        
                stage('Instalar dependências') {
            steps {
                sh 'npm install'
            }
        }
        
                stage('Executar testes') {
            steps {
                sh 'npm run cy: run'
            }
        }
    }
}
