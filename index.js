const express = require('express')
const app = express()
const port = 3000

const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname,'home.html'));
});

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname,'about.html'));
});

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.use((req, res, next) => {
    res.status(401).send("Server Error! Computer Self-Destruct in 5 seconds!")
  });  

  app.listen(port,function() {
  console.log(`Example app listening on port ${port}`)
});