const EventEmitter = require("events");

const student = new EventEmitter();

student.on("login", () => {
    console.log("Student logged successfully");
});

student.on("assignment", () => {
    console.log("Assignment selected");
});

student.on("logout", () => {
    console.log("Student logged out");
});

student.on("exit", () => {
    console.log("Exit application");
});

student.emit("login");
student.emit("assignment");
student.emit("logout");
student.emit("exit");