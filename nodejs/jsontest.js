let buf256 = Buffer.alloc(256);
buf256.fill(0);
buf256.write("add some text");
console.log(buf256.toString());
buf256.write("more text", 9, 9);
console.log(buf256.toString());
buf256[18] = 43;
console.log(buf256.toString());

let bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20ac", "utf8");
console.log(bufUTF8.toString());
console.log(bufUTF8.length);