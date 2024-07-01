const io = require('socket.io-client');

const socket = io('https://onemillioncheckboxes.com');

socket.onAny((event, ...args) => {
  console.log(`Event: ${event}, Args:`, ...args);
});

socket.on('connect', () => {
  console.log('Connected to the server');

  const message = { message: 'Hello, server!' };
  console.log('Sending message:', message);
  socket.emit('test', message);
});

socket.on('response-event', (data) => {
  console.log('Received response:', data);
});

socket.on('connect_error', (err) => {
  console.log('Connection error:', err.message);
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});
