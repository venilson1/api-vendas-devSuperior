# api vendas devSuperior

Api desenvolvida durante a semana devSuperior spring React, ministrada pelo professor Nelio Alves, ela é utilizada para fornecer o total de vendas e taxa de sucesso de vendas dos vendores.

## Endpoints

### GET /Sellers
Responsável por trazer lista de vendedores 

#### respostas
#### ok | 200

```
[
  {
    "id": 1,
    "name": "Logan"
  },
  {
    "id": 2,
    "name": "Anakin"
  }
]

```
<hr>

### GET /Sales
Responsável por trazer lista de vendas paginas

#### parametros

> page=0&size=10&sort=date,desc

- page: numero da página.
- size: quantidade de vendas por pagina
- sort: ordenar lista de acordo com as chaves
- desc: ordem decrescente
- asc: ordem crescente

#### respostas
#### ok | 200

#### exemlo de reposta: 

```
 http://localhost:8080/sales?page=0&size=2&sort=date,desc
```

```

{
  "content": [
    {
      "id": 1,
      "visited": 83,
      "deals": 66,
      "amount": 5501.0,
      "date": "2021-04-01",
      "seller": {
        "id": 5,
        "name": "Padme"
      }
    },
    {
      "id": 2,
      "visited": 113,
      "deals": 78,
      "amount": 8290.0,
      "date": "2021-03-31",
      "seller": {
        "id": 5,
        "name": "Padme"
      }
    }
  ],
  "pageable": {
    "sort": {
      "empty": false,
      "sorted": true,
      "unsorted": false
    },
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 2,
    "paged": true,
    "unpaged": false
  },
  "last": false,
  "totalPages": 85,
  "totalElements": 170,
  "size": 2,
  "number": 0,
  "sort": {
    "empty": false,
    "sorted": true,
    "unsorted": false
  },
  "first": true,
  "numberOfElements": 2,
  "empty": false
}

```
<hr>

### GET sales/success-by-seller
Responsável por trazer lista de clientes visitados e vendas realizadas de cada vendedor

#### respostas
#### ok | 200

```
[
  {
    "sellerName": "Logan",
    "visited": 1495,
    "deals": 684
  }
]

```
<hr>

### GET sales/amount-by-seller
Responsável por trazer a soma de todas as vendas de cada vendedor

#### respostas
#### ok | 200

```
[
  {
    "sellerName": "Logan",
    "sum": 220426.0
  }
]

```
<hr>

