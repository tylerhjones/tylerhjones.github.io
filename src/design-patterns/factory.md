# Factory Pattern

```python
def CreatureFactory:
    def __init__(self, modifiers):
        self.modifiers = modifiers

    def spawn(self, hero):
        hp = hero.lvl
        for modifier in self.modifiers:
            hp += hp * modifier
        return Creature(hp)
```

~~~admonish info title="Split creation from use"
Great for creating objects with changing seeds, property abstraction, or when the factory state changes over time.
~~~