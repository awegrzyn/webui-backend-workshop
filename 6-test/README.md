# Tests with Mocha

### Tasks

Test two endpoints defined in `index.js` file (`/` and `/api/hi`) using Mocha:
1. Run `npm install`
2. Test that `/` endpoint returns `302` status code, and query contains JWT token
3. Test that `/api/hi` returns `200` status code and returns JSON message: `hi`

### Runing tests

1. Run `node index.js` in separate console
2. Launch mocha: `./node_modules/.bin/mocha test-index.js`

### Documentation
- https://mochajs.org/#getting-started
