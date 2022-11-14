# Prompt

I use `starship`

My current prompt looks like this:

```bash
# ref: https://starship.rs/config/

# If you need to change this file location
# set export STARSHIP_CONFIG=~/example/non/default/path/starship.toml

# Inserts a blank line between shell prompts
#add_newline = true

# Replace the "❯" symbol in the prompt with "➜"
#[character] # The name of the module we are configuring is "character"
#success_symbol = "[➜](bold green)" # The "success_symbol" segment is being set to "➜" with the color "bold green"

# Disable the package module, hiding it from the prompt completely
[package]
disabled = true
[aws]
format = 'on [$symbol($profile )(\($region\) )]($style)'
style = "bold blue"
symbol = "🅰 "

[aws.region_aliases]
us-east-1 = "va"
us-west-1 = "ca"
us-west-2 = "or"

#[aws.profile_aliases]
# redacted

[nodejs]
disabled = true
[terraform]
disabled = true
[java]
disabled = false

[character]
success_symbol = "[❯](bold green)"
error_symbol = "[❯](bold red)"
# Use custom format
format = """$directory $git_branch $git_status
$symbol"""

# Wait 10 milliseconds for starship to check files under the current directory.
scan_timeout = 10
```