```graphql
mutation {
  upload(
    caption: "kimchis"
    files: [
      "https://images.unsplash.com/photo-1568923066121-fb6216cf26f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      "https://images.unsplash.com/photo-1568967946675-3e1065058a10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ]
  ) {
    id
    caption
  }
}
```
