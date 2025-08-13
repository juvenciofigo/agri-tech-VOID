# testar a API

## Pré-requisitos

1. Ter MySQL
2. Criar um banco de dados para o projeto
3. Configurar as credenciais do banco em `src/config/database.js` com nas variaveis de ambiente seguindo o arquico `.env.example`
4. Instalar as dependências: `npm install`
5. Iniciar o servidor: `npm run dev`

### Endpoints disponíveis

1. Cadastro de Empresas `POST /empresas`
   url: `POST http://localhost:3000/empresas`
   enviar seguintes dados :
    ```json
    {
        "nome": "VOID",
        "cnpj": "4547d56s8",
        "telefone": "840657153",
        "email": "contato@void.com"
    }
    ```

**Resposta esperada**

```json
{
    "id": 1,
    "nome": "VOID",
    "cnpj": "12.345.678/0001-90",
    "telefone": "840657153",
    "email": "contato@void.com"
}
```

2. Cadastro de Campanhas
   url: `POST http://localhost:3000/campanha`

```json
{
    "nome": "Feira de emprego",
    "empresa_id": 1,
    "data_inicio": "2024-03-01",
    "data_fim": "2024-08-31"
  }'
```

**Resposta esperada:**

```json
{
    "id": 1,
    "nome": "Feira de emprego",
    "empresa_id": 1,
    "data_inicio": "2024-03-01",
    "data_fim": "2024-08-31"
}
```

3. Cadastro de Técnicos
   url: `POST http://localhost:3000/tecnico `

````json
{
  "nome": "Juvencio Figo",
  "campanha_id": 1
  }'

**Resposta esperada:**
```json
{
  "id": 1,
  "nome": "Juvencio Figo",
  "campanha_id": 1,
}
````

4. Cadastro de Produtores

    url: `POST http://localhost:3000/produtor`

```json
{
    "nome": "Maria Santos",
    "localizacao": "Maputo, Moçambique"
}
```

**Resposta esperada:**

```json
{
    "id": 1,
    "nome": "Maria Santos",
    "localizacao": "Maputo, Moçambique"
}
```

## 5. Atribuição de Produtor a Técnico

    url: `POST http://localhost:3000/produtores/atribuir`

```json
{
    "produtor_id": 1,
    "tecnico_id": 1,
    "campanha_id": 1
}
```

**Resposta esperada:**

```json
{
    "message": "Produtor atribuído ao técnico com sucesso",
    "atribuicao": {
        "id": 1,
        "produtor_id": 1,
        "tecnico_id": 1,
        "campanha_id": 1
    }
}
```

## 6. Transferir Produtor de Técnico

**PUT /produtores/transferir**

Primeiro, cadastre outro técnico:
url:` POST http://localhost:3000/tecnicos`

```json
 '{
"nome": "Pedro Costa",
"campanha_id": 1
}'
```

```

```

```

```
