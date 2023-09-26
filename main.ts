let nome: string = "Barbara";
let numero: number = 10;
const pi: number = 3.14;

let texto:
  | string
  | number; /* Se você não for usar agora a variável, pode deixá-la tipada para que não 
seja usado outro tipo de dado na mesma */
texto = 10;

console.log(`O nome é ${nome}`);
