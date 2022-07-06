const express = require('express');

const app = express();

const rooms = {
  rooms: [],
  messages: ['Hello']
};

app.get('/rooms', (req, res) => {
  console.log('Hello');
  res.json(rooms)
});

app.get('/', () => {
  console.log('world');
})

app.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер запущен')
})