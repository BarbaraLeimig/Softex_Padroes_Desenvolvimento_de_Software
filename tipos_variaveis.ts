let n: number = 28;
let variavel: null;
let cor: string = "amarela";
let info: boolean = true;
let arr: string[] = ["maçã", "banana", "uva"];
let lista: Array<any> = [1, 2, 3, 4]; // any aceita qualquer tipo de dado
let list: Array<string> = new Array("1", "2", "3", "4");

type Blusa = {
  cor: string;
  tamanho: string;
};

let roupa: Blusa = { cor: "azul", tamanho: "M" };

console.log(roupa);
console.log(arr);
