export interface IPersonagem {
  nome: string;
  idade: number;

  modoAtaque(tipoAtaque: string): void;
}

export class Vampiro implements IPersonagem {
  public nome: string;
  public idade: number;

  constructor(n: string, i: number) {
    this.nome = n;
    this.idade = i;
  }

  modoAtaque(tipoAtaque: string): void {
    console.log(
      `O vampiro ${this.nome} está lutando usando o ataque ${tipoAtaque}\n`
    );
  }
}

export class Lobisomem implements IPersonagem {
  public nome: string;
  public idade: number;

  constructor(n: string, i: number) {
    this.nome = n;
    this.idade = i;
  }

  modoAtaque(tipoAtaque: string): void {
    console.log(
      `O Lobisomem ${this.nome} está lutando usando o ataque ${tipoAtaque}\n`
    );
  }
}

function main() {
  const vampiro = new Vampiro("Vladimir", 1987);
  const lobisomem = new Lobisomem("Dark Night", 32);

  console.log(vampiro);
  vampiro.modoAtaque("mordida fatal");

  console.log(lobisomem);
  lobisomem.modoAtaque("corte com garra mortal");
}

main();
