const mongodb = require('mongodb').MongoClient;
const app = require('express')()
const port = 1337

app.get('/', (req, res) => {
    mongodb.connect('mongodb://mongodb:27017', (err, db) => {
        var dbo = db.db('prutt_db');
 /*       dbo.collection('prutt').insertOne({lukt: 'Stinky', power: 123}, function (err, v) {
          if (err) {
            throw err;
          }

          db.close();
          res.send('INSERTED PRUTT');
        });
*/
        dbo.collection('prutt').find({}).toArray((err, a) => {
          if (err) {
            throw err;
          }



          res.send(a);
        });
    });
});

app.listen(port, () => {
  console.log('App listening on port ' + port);
});
