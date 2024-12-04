const io = require('socket.io-client');
const fs = require('fs');

const socket = io('https://onemillioncheckboxes.com');

/*
socket.onAny((event, ...args) => {
  console.log(`Event: ${event}, Args:`, ...args);
});
*/

fs.readFile('event.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the JSON file', err);
        return;
    }

    const event = JSON.parse(data);

    socket.on('connect', () => {
        console.log('Connected to server');

        socket.emit(event.Event, ...event.Args);

        console.log(`Event sent: ${event.Event}`);
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
});

/* 
socket.on('connect', () => {
  console.log('Connected to the server');

  const message = { message: 'Hello, server!' };
  console.log('Sending message:', message);
  socket.emit('batched_bit_toggles', "test");
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

*/