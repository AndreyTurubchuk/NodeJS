// НУ и гавнокод у меня
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json({
      hello: 'JS World',
    });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0)+ (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  var fullname = (req.query.fullname).toString();

function trim(s) {
  return rtrim(ltrim(s));
}

function ltrim(s) {
  return s.replace(/^\s+/, '');
}
var shortfullname = ltrim(fullname);
var fullnameout = "";
if (fullname != "") {
  var count = 1; // количество слов в выражении
  // отрезали все до первого пробела
  const re = new RegExp('[^ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000-\u200a​​\u2028\u2029​\u202f\u205f​\u3000][A-Za-zА-Яа-яó0-9_]*');

  function rtrim(s) {
    return s.replace(/\s+$/, '');
  }

  var S = require('string');
  var tempname = ltrim(fullname.toString());
  var test = "";
  test = ltrim(tempname.match(re).toString());
  count = 1;
  while (tempname != test) {
    tempname = ltrim(S(tempname).chompLeft(test).s.toString());
    test = tempname.match(re).toString();
    count = count + 1;

  }
console.log("count = " + count);
  if ((count >0)&&(count <4)) {
    switch (count) {
      case 1:
        fullnameout = fullname.toString();
      break;

      case 2:
        var name = shortfullname.match(re).toString() + " "; // вырезали Имя
        var nameshort = S(name).left(1).s + ".";
        var surname = ltrim(S(shortfullname).chompLeft(name).s); // fullname - name
        fullnameout = surname + " " + nameshort.toString();
      break;
      case 3:
        var name = shortfullname.match(re).toString() + " "; // вырезали Имя
        var tempfullname = ltrim(S(shortfullname).chompLeft(name).s); // fullname - name
        var middlename = tempfullname.match(re).toString(); // вырезали отчество
        var tempfullname2 = ltrim(S(tempfullname).chompLeft(middlename)).s;
        var surname = tempfullname2.match(re).toString(); // вырезали фамилию
        var nameshort = S(name).left(1).s + ".";
        var middlenamehort = S(middlename).left(1).s + ".";
        fullnameout = surname + " " + nameshort.toString() + " " + middlenamehort.toString();
      break;
    }
   // res.send(fullname);
  } else fullnameout = "Invalid fullname";


} else fullnameout = "Invalid fullname";

res.send(fullnameout);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

