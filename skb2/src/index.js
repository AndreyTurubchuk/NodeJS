import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';

const app = express();
app.use(cors());

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
  let pc = {};
  fetch(pcUrl)
  .then(async (res) => {
  pc = await res.json();
})
.catch(err => {
  console.log('Что-то пошло не так:', err);
});

app.get(/^(?:\/)?(.*?)(?:\/)?$/, function(req, res) {

  let path = req.params[0];
  path = path.split(/\//);
  var temppath = path.shift();
  console.log("path =  " + path);
  console.log("width =  " + pc.hdd[0].vendor);


  let result = '';
  if (path == 'volumes')
    result = getVolumes(pc.hdd);
  else {
    result = getValue(pc, path);
  }

  if (result == 'Not Found') {
    res.status(404).send(result)
  } else
      res.json(result);

});

  function getVolumes(hdd) {
    let volume = {};
    for (let key in hdd) {
      const volumeNumber = hdd[key].volume;
      if (!volume[volumeNumber])
        volume[volumeNumber] = 0;
      volume[volumeNumber] += hdd[key].size;
    }
    for (let key in volume) {
      volume[key] = volume[key] + 'B';
    }
    console.log(volume);
    return volume;
  }

  function getValue(json, path) {
    var key = '';
    var flag = true;
    var result = 'Not Found';
    console.log("СТАРТ");
    if (path.length ==0) {return json} ;

    var pc2 = {};
    for (var key2 in pc) {
      pc2[key2] = pc[key2];
    }



    while(( path.length !=0 ) && (flag == true) ) {
      key = path.shift();
      console.log("key = " + key);
       if (pc2.hasOwnProperty(key) && (key != 'length' )) {
        console.log("answer = ");
        console.log(pc2[key]);
        pc2 = pc2[key];
      } else {
        console.log("нет такого ");
        flag = false;
      }
    }
    if (flag == true ) {
      return pc2;
    } else {
      return result;

    }
  }

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});




