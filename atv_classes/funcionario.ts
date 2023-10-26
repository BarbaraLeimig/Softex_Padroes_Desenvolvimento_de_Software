import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa {
  protected funcao: string;

  constructor(nome: string, sobrenome: string, idade: number, funcao: string) {
    super(nome, sobrenome, idade);
    this.funcao = funcao;
  }

  cumprimentarCargo(): void {
    console.log(
      `Olá, ${this.nome} ${this.sobrenome}! Seja bem vindo ao cargo de ${this.funcao}`
    );
  }
}
