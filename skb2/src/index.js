import express from 'express';
import cors from 'cors';

import canonize from './canonize'

const app = express();
app.use(cors());

 app.get('/task2C', (req, res) => {
    var answer = "";
    const username = (req.query.username).toString();
    const usernameout = canonize(username);
    if (usernameout == "@") {
      answer = "Invalid fullname";
    }  else answer = usernameout;
    res.send(answer);
  });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

