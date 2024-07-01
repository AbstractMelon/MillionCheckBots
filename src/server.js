const express = require('express');
const path = require('path');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('dashboard', { stats: {} });
});

let stats = {
  total: 0,
  totalGold: 0,
  totalRed: 0,
  totalGreen: 0,
  totalPurple: 0,
  totalOrange: 0,
  recentlyChecked: false,
};

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('update-stats', (data) => {
    stats = data;
    io.emit('stats-updated', stats);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
