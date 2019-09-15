# query

```graphql
mutation {
  createAccount(
    username: "LEEJONGSEOK"
    email: "the2792@rakuten.com"
    firstName: "jongseok"
    lastName: "kimchi"
  ) {
    # 화면에 보여지는...
    id
  }
}
```

# result

```graphql
{
  "data": {
    "createAccount": {
      "id": "ck0l9sidmgpk10b40nt6pofwn"
    }
  }
}
```
