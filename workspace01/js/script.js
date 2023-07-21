// console.log("Start");
// console.log("a");
// setTimeout(() => {
//   console.log("b");
// }, 1000);
// setTimeout(() => {
//   console.log("c");
// }, 0);
// console.log("end");
// output
// ====================
// a) Start,a,b,c,end
// b) Start,a,end,b,c
// c) Start,b,end,a,c
// d) Start,a,end,c,b

// d)
// Settimeout:
// JavaScript Timeout function that prints "b" after a delay of 1000 //milliseconds (or 1 second).
// function that print "c" after delay of 0 milliseconds
// the setTimeout function, in spite of the delay time, pushes the function to an event queue,
// which runs after the main thread has finished executing,As a result Start,a,end,c,b will get execute










