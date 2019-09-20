```graphql
{
  seeFullPost(id: "ck0l9fqozvz2q0b09ld9td8zu") {
    post {
      location
    }
    comments {
      id
    }
    likeCount
  }
}
```

```graphql
{
  seeFullPost(id: "ck0s0ejg7fhy20b09uapdn813") {
    caption
    location
    likeCount
    files {
      id
    }
    user {
      id
    }
    comments {
      id
    }
    createdAt
  }
}

``
```
