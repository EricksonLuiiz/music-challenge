cat > README.txt << 'EOL'

# 🎵 Projeto Music

## Sobre o Projeto

Este é um projeto moderno desenvolvido com Laravel 11 e React, utilizando Typescript e Tailwind CSS para criar uma aplicação web para extrair informações de músicas de um arquivo CSV.

## 🚀 Tecnologias Utilizadas

-   Laravel 11
-   React + TypeScript
-   Tailwind CSS
-   Vite
-   Docker
-   Inertia.js

## 📋 Pré-requisitos

-   Docker
-   Docker Compose
-   Git

## 🛠️ Configuração do Ambiente

1. Clone o repositório:
   git clone [seu-repositorio]

2. Entre na pasta do projeto:
   cd music

3. Crie o arquivo .env:
   cp .env.example .env

4. Inicie os containers Docker:
   ./vendor/bin/sail up -d

5. Instale as dependências:
   ./vendor/bin/sail run composer install

6. Instale as dependências do Node:
   ./vendor/bin/sail run npm install

7. Gere a chave da aplicação:
   ./vendor/bin/sail run php artisan key:generate

8. Execute as migrações:
   ./vendor/bin/sail run php artisan migrate

9. Importar músicas, copie os arquivos para o diretório "./import-songs" na raiz do projeto e execute o comando:
   ./vendor/bin/sail run php artisan app:import-music

10. Compile os assets:
    ./vendor/bin/sail run npm run dev

## 🌐 Acessando a Aplicação

Após a configuração, acesse a aplicação em:

-   (Aplicação)[http://localhost]

## Postman com rotas do projeto

-   postman.json - Arquivo com as rotas do projeto

## 📦 Estrutura do Projeto

-   /resources/js - Arquivos React/TypeScript
-   /resources/views - Views do Laravel
-   /routes - Rotas da aplicação
-   /app - Lógica principal do backend
-   /database - Migrações e seeds

## 🔧 Comandos Úteis

-   ./vendor/bin/sail run php artisan app:import-music - Importa músicas do CSV
-   ./vendor/bin/sail run php artisan test - Executa testes
-   ./vendor/bin/sail run npm run build - Build para produção
-   ./vendor/bin/sail run php artisan optimize - Otimiza a aplicação

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.
