import { io } from "socket.io-client";

console.log("Connecting to server...");
const socket = io("https://onemillioncheckboxes.com/");

socket.on("connect", () => {
    console.log("Connected!");
    socket.emit("toggle_bit", { index: 123456 });

    /*
    for (let i = 1; i <= 1000000; i++) {
        socket.emit("toggle_bit", { index: i });
    }
        */

    console.log("All events sent!");
});

socket.on("disconnect", () => {
    console.log("Disconnected from server");
});
