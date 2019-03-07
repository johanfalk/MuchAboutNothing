const mongodb = require('mongodb').MongoClient;
const app = require('express')()
const port = 1337

app.get('/', (req, res) => {
    mongodb.connect('mongodb://127.0.0.1:27017/users', (err, db) => {
        res.send('Hello World!')
    })
})

app.listen(port, () => {
  console.log('App listening on port ' + port)
})
