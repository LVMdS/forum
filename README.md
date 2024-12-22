Testando com o Insomnia
Registro de Usuário: POST /auth/register

Corpo JSON: { "username": "usuário", "password": "senha" }
Login de Usuário: POST /auth/login

Corpo JSON: { "username": "usuário", "password": "senha" }
Retorna o token JWT.
Criar Tópico: POST /topicos

Cabeçalhos: Authorization: Bearer {token}
Corpo JSON: { "title": "Dúvida sobre Node.js", "message": "Como utilizar o Express?", "courseName": "Node.js" }
Listar Tópicos: GET /topicos

Sem corpo. Retorna todos os tópicos.
Atualizar Tópico: PUT /topicos/{id}

Cabeçalhos: Authorization: Bearer {token}
Corpo JSON: { "title": "Dúvida resolvida", "message": "Agora entendi como usar o Express!" }
Deletar Tópico: DELETE /topicos/{id}

Cabeçalhos: Authorization: Bearer {token}