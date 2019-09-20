```graphql
mutation {
  editPost(id: "ck0s1t8xea6cr0b40uh6h0sqc", location: "aaa ebisa", action: EDIT) {
    id
    location
  }
}
```

```graphql
mutation {
  editPost(action: DELETE) {
    id
    location
  }
}
```
