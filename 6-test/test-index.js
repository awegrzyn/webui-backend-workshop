const assert = require('assert');
const http = require('http');
const url = require('url');

describe('HTTP', () => {

 it('GET the "/"', (done) => {
    http.get('http://localhost:8080/',
      (res) => {
        assert.strictEqual(res.statusCode, 302);
        const parsedUrl = new url.URL(res.headers.location, 'http://localhost');
        parsedUrl.searchParams.has('token');
        done();
      }
    );
  });

  it('GET /hi should respond 200/JSON', (done) => {
    http.get('http://localhost:8080/api/hi',
      (res) => {
        assert.strictEqual(res.statusCode, 200);
        let rawData = '';
        res.on('data', (chunk) => {
          rawData += chunk;
        });
        res.on('end', () => {
          const parsedData = JSON.parse(rawData);
          assert.strictEqual(parsedData.message, 'hi');
          done();
        });
      }
    );
  });
});
