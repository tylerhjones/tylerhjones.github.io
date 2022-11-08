# Observer Pattern

```
hooks = {'EventA': [fn1, fn2]}

sub(type, fn):
    hooks[type].push(fn)

pub(type, data):
    hooks[type].each(fn => fn(data))

foo(thing):
    event = doStuff(thing)
    pub('EventA', event)
```

- events abstract actions from each other 
- great for operations which are independent of each other 
- bad for order of operations or ensuring that a thing actually happens (eg. potentially no subscribers but was desired)