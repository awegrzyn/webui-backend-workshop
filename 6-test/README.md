# Tests with Mocha

Test two endpoint defined in `index.js` file (`/` and `/api/hi`) using Mocha:
1. Run `npm install`
1. Take a look Mocha getting started page: https://mochajs.org/#getting-started
2. Verify that `/` endpoint returns `302` status code, and contain token
3. Verify that `/api/hi` returns `200` status code and return JSON message: `hi`
4. Run Mocha from command line `./node_modules/.bin/mocha  <TEST_FILE>` (server must be running)

You can use additional Nodejs modules like: `http` and `assert`.
