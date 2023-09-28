/* let num: number = 28;
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
 */

let frutas: Array<string> = ["maçã", "banana", "uva", "morango"];

frutas.push("laranja");
console.log(frutas);

let removido: string | undefined = frutas.pop();
console.log(removido);

frutas.unshift("laranjona");
console.log(frutas);

let frutaNova: Array<string> = ["melancia", "abacate", "melão"];
let frutaria: Array<string> = [];
frutaria = frutaria.concat(frutas, frutaNova);
console.log(frutaria);

frutaria.splice(1, 2, "jambo");
console.log(frutaria);

console.log(frutaria.indexOf("laranjona"));
