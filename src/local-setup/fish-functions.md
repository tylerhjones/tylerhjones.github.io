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

### epoch
because i forget date cmd
```fish
function epoch
  date +%s
end
```