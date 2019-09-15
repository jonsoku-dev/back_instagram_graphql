# sayHello.js (example)

```javascript
import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    sayHello: async () => {
      console.log(await prisma.users());
      return Hello;
    }
  }
};
```

# playground

```graphql
{
  sayHello
}
```

> console창 확인하기
