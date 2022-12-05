# fish shell functions

### sha256
```fish
function sha256
  echo -n "$argv[1]" | openssl dgst -sha256
end
```

### ports
Print listening ports on mac
```fish
function ports
  netstat -atp tcp | grep -i "listen"
end
```

### hig
grep command history
```fish
function hig
  set x "history"
  set -l y " | head -n 10"
  for arg in $argv
    if test "$arg" = "--all"
      set y ""
    else
      set x $x "grep \"$arg\""
    end
  end
  set x (string join ' | ' $x)
  set x (string join '' $x $y)
  eval $x
end
```
`hig` is a function that greps your command history. It's useful for finding commands you've run before. It's a wrapper around `history | grep`. It takes the same arguments as `grep`. If the first argument is `--all` it will print all of your history instead of just the last 10 commands.

### epoch
because i forget date cmd
```fish
function epoch
  date +%s
end
```

### noti
When running a long command which may error out mid-way. This function will notify you when the command stops, so you can check the output.
```fish
function noti
    eval $argv
    set -l output (echo "display notification \"cmd done\" with title \"$status\" subtitle \"exit:$status\" sound name \"Submarine\"")
    osascript -e $output
end
```