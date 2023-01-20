# Tools I always install on mac via brew


### [fd](https://github.com/sharkdp/fd)
~~~admonish info title="Faster than `find` and `locate`, easy to use."
```bash
~/
❯ fd
foo
foo/bar
foo/bar/thing.txt
foo/test.java

~/
❯ fd ar
foo/bar

~/
❯ fd txt
foo/bar/thing.txt
```
~~~

### [exa](https://the.exa.website)
Replacement for `ls` with a lot of nice features.

### [git-cola](https://git-cola.github.io)
A nice GUI for git commit management.

### [git-delta](https://github.com/dandavison/delta)
A nice git diff viewer.

### [ripgrep](https://github.com/BurntSushi/ripgrep)
~~~admonish info title="A faster grep"
A must have search tool.
```bash
rg Thing.+java
rg -i thing.+java
rg -u # unrestricted search
rg -g "*.java" # search only java files
```
~~~

### [gnu-sed]
Because the BSD sed is different and I don't want to remember the differences.

### [make](https://formulae.brew.sh/formula/make)
GNU Make, different than BSD Make.

### [hexyl](https://github.com/sharkdp/hexyl)
Pipe a file into hexyl to see the hex representation of the file.

### [htop](https://htop.dev/)
Better than top.