const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const router = express.Router();

if (process.env.GOGOENERGY_CLIENT_HOST){
  const corsOptions = {origin: process.env.GOGOENERGY_CLIENT_HOST}
  app.use(cors(corsOptions))
  app.options('*', cors(corsOptions))
} else {
  app.use(express.static("../client/gogoenergy-client/build"));
}

app.use('/api', router);

const port = 8000;
const dummy_api_token = process.env.DUMMY_API_TOKEN;
const deletedUserIds = new Set();


router.get('/users', (req, res) => {
  request.get("https://dummyapi.io/data/api/user?limit=50", {
     json: true,
     headers: {
       "app-id": dummy_api_token
      } 
    }, (err, _, body) => {
    if (err) { 
      res.status(500).send(); 
    }
    res.send(body['data'].filter(user => !deletedUserIds.has(user.id)))
  });
})


router.delete('/users/:id', (req, res) => {
  deletedUserIds.add(req.params.id)
  res.status(200).send();
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})