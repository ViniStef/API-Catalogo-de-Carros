## Projeto CRUD para Catálogo de Carros

O projeto envolve o desenvolvimento de uma API local, focando em organizar os processos, assegurar rotas com middlewares e realizar testes unitários e testes de implementação. Os carros adicionados são adicionados em um banco de dados PostgreSQL.

Para testar a aplicação localmente no host http://localhost:3000, apenas utilize o comando `npm install` e `npm run dev`, caso queira alterar a porta de acesso, modifique a constante *port* em *app.ts*.

Para realizar os testes, utilize o comando `npm run test`, certifique-se que o comando está configurado corretamente na pasta *package.json*.

Crie também um arquivo *.env* no diretório da aplicação e edite as informações como no exemplo descrito em *.env-example*, altere as informações de acordo com as configurações do seu PostgreSQL para salvar as informações sobre os carros em seu banco de dados.
