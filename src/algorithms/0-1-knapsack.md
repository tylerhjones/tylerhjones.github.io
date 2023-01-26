# 0-1 Knapsack

The 0/1 Knapsack pattern is based on the well-known problem with the same name, which is solved using dynamic programming. When given the weights and profits of ‘N’ items, you are asked to put these items in a “knapsack” with a capacity ‘C.’ The goal is to get the optimum profit out of the items in the knapsack. The only difference between the 0/1 Knapsack problem and the subset sum problem is that, in the 0/1 Knapsack problem, we are not allowed to break an item. We either take the whole item or don’t take it. Thus why in my opinion the 0-1 is usually more applicable. With a close second being the combinations varient (coins and such).

```python
from dataclasses import dataclass

@dataclass
class Gem:
    color: str
    weight: int
    value: int

GEMS = [
    Gem("red", 1, 1),
    Gem("blue", 2, 5),
    Gem("blue", 2, 5),
    Gem("green", 3, 10),
]

def knapsack(gems, capacity):
    if capacity<=0 or len(gems)==0: # exit condition, recursive approach
        return []

    last_gem = gems.pop()

    if last_gem.weight > capacity: # if the gem is too heavy, skip it
        return knapsack(list(gems), capacity)

    set1 = knapsack(list(gems), capacity)
    set2 = [last_gem, *knapsack(list(gems), capacity - last_gem.weight)]
    if sum(g.value for g in set1) > sum(g.value for g in set2):
        return set1
    return set2

answer = knapsack(list(GEMS), 5)
print(f"""CAPACITY: {5}, VALUE: {sum([answer.value for answer in answer])}, ANSWER: {[answer.color for answer in answer]}""")
answer = knapsack(list(GEMS), 4)
print(f"""CAPACITY: {4}, VALUE: {sum([answer.value for answer in answer])}, ANSWER: {[answer.color for answer in answer]}""")
answer = knapsack(list(GEMS), 6)
print(f"""CAPACITY: {6}, VALUE: {sum([answer.value for answer in answer])}, ANSWER: {[answer.color for answer in answer]}""")
answer = knapsack(list(GEMS), 7)
print(f"""CAPACITY: {7}, VALUE: {sum([answer.value for answer in answer])}, ANSWER: {[answer.color for answer in answer]}""")

```
```
CAPACITY: 5, VALUE: 15, ANSWER: ['green', 'blue']
CAPACITY: 4, VALUE: 11, ANSWER: ['green', 'red']
CAPACITY: 6, VALUE: 16, ANSWER: ['green', 'blue', 'red']
CAPACITY: 7, VALUE: 20, ANSWER: ['green', 'blue', 'blue']
```