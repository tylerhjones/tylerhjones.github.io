# Actor Pattern
```
#todo: create a better example
sys = System()
actor = ResourceActor("A")
sys.register(actor)
resource = actor.ask(ResourceMsg("foo"))
sys.ask(DeleteMsg(), addr://A/foo)
# resource now owned by and addressed at addr://A/foo by the system
```

- resource ownership is explicit
- resources are addressable
- fulfillment of resources and actions are decoupled from the individual services via addressed msgs