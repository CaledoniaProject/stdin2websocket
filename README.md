# stdin2websocket

Read whatever is available from stdin, line-by-line, and deliver these lines to all connected websocket peers.

# Installation



# Usage

The websocket server listens on port `8300` by default, you may change it in the source code.



```
some-long-running-commands | node main.js
```