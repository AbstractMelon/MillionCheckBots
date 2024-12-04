const fs = require('fs');

const array1 = [];
for (let i = 1; i <= 100; i++) {
    array1.push(i);
}

const array2 = [];
for (let i = 101; i <= 200; i++) {
    array2.push(i);
}

const event = {
    Event: 'batched_bit_toggles',
    Args: [
        array1,
        array2,
        1719872000675
    ]
};

const eventString = JSON.stringify(event, null, 2);

fs.writeFile('event.json', eventString, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('File has been written successfully');
    }
});
