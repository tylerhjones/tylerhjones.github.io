# Factory Pattern

```
CreatureFactory:
    self.count = 0
    self.mode
    create():
        count += 1
        if self.mode = 'hard'
            return Creature(hp=count*2)
        return Creature(hp=count)
```

- split creation from use 
- great for creating objects with changing seeds
- or when a property is expensive to load