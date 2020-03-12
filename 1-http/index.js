const {HttpServer} = require('@aliceo2/web-ui');

const http = new HttpServer({
  port: 8080
});

http.addStaticPath('public');

http.get('/hi', (req, res) => {
  res.status(200).json({message: 'hi'})
}, { public: true });
