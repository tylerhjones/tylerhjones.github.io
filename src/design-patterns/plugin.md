# Plugin Pattern
```
# user_code.sc

handle(event):
    do_something(event)
```
```
import user_code

Lambda:
    self.handler
    handle(event):
        self.handler(event)

lamb = Lambda(user_code.handle)
lamb.handle(event)
```

- custom extensibility 
- harder to secure 
- usually needs a custom language to minimize attack surface



