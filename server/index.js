const express = require('express');
const db = require('./database.js')
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json())

app.get('/api/movies', (req, res) => {
  db.query('SELECT * FROM movie', (error, results) => {
    if (error) {
      res.send(error)
    } else {
      res.send(results)
    }
  })
})

app.post('/api/movies', (req, res) => {
  db.query(`INSERT INTO movie(title) VALUES ('${req.body.title}')`, (error, results) =>{
    if (error) {
      res.send(error)
    } else {
      db.query('SELECT * FROM movie', (error, results) => {
        if (error) {
          res.send(error)
        } else {
          res.send(results)
        }
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})