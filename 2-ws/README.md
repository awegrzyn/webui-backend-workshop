# WebSocket server

### Tasks

1. Create a WebSocket server hadling `print` command, the server should reply to client with `print-response` command.
Keep in mind that client needs to provide valid token to estabilish WebSocket connection. You can pick it up from the URL

2. HINT: In order to pick-up `token` from the URL you can use the following code

```js
const url = new URL(window.location);
const token = url.searchParams.get('token');
```

### Documentation
- https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/websockets.md
