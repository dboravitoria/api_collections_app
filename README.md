# 🧩 API - Collections App

API desenvolvida para o aplicativo Shelfy, um sistema de gerenciamento de coleções pessoais (como livros, HQs, action figures e outros itens).
Este projeto é responsável por gerenciar o back-end, banco de dados, rotas, e integração com o front-end.

## 🚀 Tecnologias

- Node.js + Express
- TypeScript
- PostgreSQL
- ts-node-dev
- dotenv
- chalk

## 🗂️ Estrutura de Branches

Para manter a organização do projeto, usamos um fluxo simples e eficiente:

| Branch    | Função                                                                                    |
| :-------- | :---------------------------------------------------------------------------------------- |
| **main**  | Contém o código **estável e pronto para produção**.                                       |
| **desv**  | Versão de testes. Usada para validar a aplicação quase completa antes do merge na `main`. |
| **feat/** | Criação de novas funcionalidades. Exemplo: `feat/login-endpoint`                          |
| **fix/**  | Correções de bugs. Exemplo: `fix/user-auth-error`                                         |

## 📌 Commits

Os commits seguem o padrão:

- [FEAT] → para novas funcionalidades
- [FIX] → para correções
- [MERGE] → para junções de branchs

Exemplo:
```
git commit -m "[FEAT] adiciona rota de autenticação de usuários"
```

## ⚙️ Como rodar o projeto localmente

### 1️⃣ Clonar o repositório

```
git clone https://github.com/seu-usuario/api_collections_app.git
cd api_collections_app
```

### 2️⃣ Instalar as dependências

```npm install```

### 3️⃣ Criar o arquivo .env

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```
PORT=3000
DATABASE_URL=postgresql://usuario:senha@localhost:5432/db_collections_app
```

* ⚠️ Substitua usuario, senha e db_collections_app conforme o seu banco PostgreSQL.

## 🧠 Banco de Dados

O banco de dados utilizado é o PostgreSQL.
Antes de rodar a aplicação, certifique-se de que o banco está criado e acessível.

```
CREATE DATABASE db_collections_app;
```

O projeto se conecta usando o driver pg, configurado através das variáveis de ambiente.

* ⚠️ Obs: este projeto ainda não cria as tabelas automaticamente.Caso o script SQL de estrutura ainda não exista, será necessário criar as tabelas manualmente no banco antes de iniciar a aplicação.

## 🧩 Scripts disponíveis

| Comando       | Função                                                           |
| :------------ | :--------------------------------------------------------------- |
| `npm run dev` | Inicia o servidor em modo de desenvolvimento com **ts-node-dev** |
