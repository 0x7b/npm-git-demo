import isBuffer from "is-buffer";

const buf = Buffer.from("hello");
const str = "hello";

console.log("isBuffer(Buffer):", isBuffer(buf));
console.log("isBuffer(string):", isBuffer(str));
