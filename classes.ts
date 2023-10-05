// questão 1
class pessoa {
  nome: string;
  idade: number;
  email: string;

  constructor(nome: string, idade: number, email: string) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
}

const novaPessoa = new pessoa("Bárbara", 28, "defifjid@gmsidjk.com");
console.log(novaPessoa);

// questão 2
class aluno extends pessoa {
  matricula: number;

  constructor(nome: string, idade: number, email: string, matricula: number) {
    super(nome, idade, email);
    this.matricula = matricula;
  }
}

const novoAluno = new aluno("Ana", 30, "fnfjisd@gmail.com", 98765);
console.log(novoAluno);

// questão 3
class retangulo {
  altura: number;
  largura: number;

  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  areaRetangulo(): void {
    const area: number = this.altura * this.largura;
    console.log(`A área é: ${area}`);
  }

  perimetroRetangulo(): void {
    const perimetro: number = 2 * (this.altura + this.largura);
    console.log(`O perimetro é: ${perimetro}`);
  }
}

const novoRetang = new retangulo(12.4, 18.2);
novoRetang.areaRetangulo();
novoRetang.perimetroRetangulo();

// questão 4
class circulo {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  areaCirculo(): void {
    const pi: number = 3.14;
    const area: number = pi * this.raio ** 2;
    console.log(`A área do círculo é: ${area}`);
  }

  circuferenciaCirculo(): void {
    const pi: number = 3.14;
    const circunferencia: number = 2 * pi * this.raio;
    console.log(`A área da circunferência é: ${circunferencia}`);
  }
}

const roda = new circulo(4);
roda.areaCirculo();
roda.circuferenciaCirculo();

// questão 5
class contaBancaria {
  saldo: number;
  numeroConta: number;

  constructor(saldo: number, numeroConta: number) {
    this.saldo = saldo;
    this.numeroConta = numeroConta;
  }

  depositar(): void {
    const valorDeposito: number = 200.0;
    const novoSaldo: number = valorDeposito + this.saldo;
    console.log(`Saldo final: ${novoSaldo}`);
  }

  sacar(): void {
    const valorSaque: number = 100.0;
    const novoSaldo: number = valorSaque + this.saldo;
    console.log(`Saldo final: ${novoSaldo}`);
  }
}

const conta1 = new contaBancaria(1928.3, 987382);
conta1.depositar();
conta1.sacar();

// questão 6
class produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  caixa(): void {
    const total: number = this.preco * this.quantidade;
    console.log(`Valor total da compra: ${total}`);
  }
}

const headsetGamer = new produto("HeadSet Apple", 1500.0, 2);
headsetGamer.caixa();

// questão 7

class triangulo {
  lado1: number;
  lado2: number;
  lado3: number;

  constructor(lado1: number, lado2: number, lado3: number) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  verificar() {
    if (this.lado1 != 0 && this.lado2 != 0 && this.lado3 != 0) {
      console.log("Este triangulo é valido");
    } else {
      console.log("Este triangulo não é valido");
    }
  }
}

const pizza = new triangulo(9, 2, 0);
pizza.verificar();

// questão 8
class livro {
  titulo: string;
  ano: number;
  nomeAutor: string;

  constructor(titulo: string, ano: number, nomeAutor: string) {
    this.titulo = titulo;
    this.ano = ano;
    this.nomeAutor = nomeAutor;
  }

  exibir() {
    console.log(`Nome: ${this.titulo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Autor: ${this.nomeAutor}`);
  }
}

const Narnia = new livro("As crônicas de Nárnia", 2009, "C S Lewis");
Narnia.exibir();
