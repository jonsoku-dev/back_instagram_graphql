# user 보기

```graphql
{
  user(where: { id: "ck0l73h5svtn20b093i10amn9" }) {
    username
    followers {
      email
    }
    following {
      email
    }
    lastName
    firstName
  }
}
```

# create user

```graphql
mutation {
  createUser(data: { username: "rakuten LEE", email: "rakuten@gmail.com" }) {
    id
  }
}
```

# update user

```graphql
mutation {
  updateUser(
    data: { firstName: "Lee", lastName: "Jongseok" }
    where: { id: "ck0l73h5svtn20b093i10amn9" }
  ) {
    username
  }
}
```

# relation

```graphql
mutation {
  updateUser(
    data: { following: { connect: { id: "ck0l7cofyvu870b09jsbwq756" } } }
    where: { id: "ck0l73h5svtn20b093i10amn9" }
  ) {
    username
    firstName
    lastName
    following {
      id
      username
      firstName
      lastName
    }
    followers {
      id
    }
  }
}
```
