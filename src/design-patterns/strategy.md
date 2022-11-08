# Strategy Pattern
```
Maze:
    self.strategy
    solve():
        self.strategy.solve(self)

m1 = Maze(dfs_strat)
m2 = Maze(bfs_strat)

compare(m1, m2)
```

- provided behavior instead of inheritance 
- reduce the number of boiler classes
- decouple changes in middle classes from heirarchy