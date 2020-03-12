const {HttpServer, WebSocket, WebSocketMessage} = require('@aliceo2/web-ui');

const http = new HttpServer({
  port: 8080
});

http.addStaticPath('public');

const ws = new WebSocket(http);

ws.bind('print', (message) => {
  console.log(message);
  return new WebSocketMessage().setCommand('print-response').setPayload("hi back");
});
