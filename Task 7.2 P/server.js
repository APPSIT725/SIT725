const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const http = require('http').createServer(app); 
const io = require('socket.io')(http);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
})


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  setInterval(() => {
    const randomNum = Math.floor(Math.random() * 100);
    socket.emit('number', randomNum);
  }, 1000);
});

http.listen(PORT, () => {
  console.log(`Application is running at ${PORT}`);
});