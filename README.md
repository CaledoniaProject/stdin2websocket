# stdin2websocket

Read whatever is available from stdin, line-by-line, and deliver them to all connected websocket peers.

# Installation

The programs depends on the two following dependencies

```
npm install nodejs-websocket readline
```

# Usage

The websocket server listens on port `8300` by default, you may change it in the source code.

After which you may simply start the server with a pipe, e.g

```
some-long-running-commands | node main.js
```

