const {MySQL} = require('@aliceo2/web-ui');
const mySql = new MySQL({host: 'localhost', user: 'root', database: 'webui'});

mySql.query('INSERT INTO Users (UserId, FirstName, LastName) value (?,?,?)', [0, 'Adam', 'Wegrzynek'])
  .then(result => console.log('Insert ID =', result.insertId))
  .catch(err => console.error(err));

mySql.query('SELECT * from Users')
  .then(result => console.log(result))
  .catch(err => console.error(err));
