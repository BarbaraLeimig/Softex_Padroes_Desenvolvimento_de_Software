export class Pessoa {
  protected nome: string;
  protected sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  cumprimentar(): void {
    console.log(`Olá, ${this.nome} ${this.sobrenome}, seja bem-vindo(a)!`);
  }
}
