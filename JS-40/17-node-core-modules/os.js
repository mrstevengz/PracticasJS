const os = require("os");

//arch() arquitectura x32 x64

console.log(os.arch());

//platform()

console.log(os.platform());

if (os.platform() === "win32") {
  console.log("You are on windows");
}

//Info del cpu
console.log(os.cpus());

//freemem()
console.log(os.freemem());
console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024, "GB");

//totalmem()
console.log(os.totalmem);
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024, "GB");

//homedir

console.log(os.homedir());

//uptime

console.log(os.uptime());

//hostname

console.log(os.hostname());
