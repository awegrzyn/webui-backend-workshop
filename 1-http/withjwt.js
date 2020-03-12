const {HttpServer} = require('@aliceo2/web-ui');

const http = new HttpServer({
  port: 8080
},
{
  expiration: '30s'
});

http.addStaticPath('public');

http.get('/hi', (req, res) => {
  res.status(200).json({message: 'hi'})
});
