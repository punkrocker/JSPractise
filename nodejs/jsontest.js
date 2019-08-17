let buf256 = Buffer.alloc(256);
buf256.fill(0);
buf256.write("add some text");
console.log(buf256.toString());
