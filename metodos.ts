let num: number = 28;
console.log(num.toFixed(2));
console.log(num.toPrecision(3));
console.log(num.toString());
console.log(num.toExponential(2));

let txt: string = "palavra guiada. ";
console.log(txt.trim());
console.log(txt.charAt(4));

let music: string = "musica é uma ";
let novastr: string = "";
novastr = novastr.concat(music, txt);
console.log(novastr);
console.log(novastr.indexOf("s"));
console.log(novastr.lastIndexOf("a"));
