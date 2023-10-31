export interface Caderno {
  marca: string;
  cor: string;
  nPaginas: number;
}

export class Prateleira {
  private cadernos: Caderno[] = [];

  addCaderno(caderno: Caderno) {
    this.cadernos.push(caderno);
  }

  listarCadernos() {
    console.log("Cadernos na prateleira:\n");
    for (const caderno of this.cadernos) {
      console.log(
        `Marca: ${caderno.marca}, Cor: ${caderno.cor}, Numero de páginas: ${caderno.nPaginas}.`
      );
    }
  }
}

export class Tilibra implements Caderno {
  constructor(
    public marca: string,
    public cor: string,
    public nPaginas: number
  ) {}
}

export class Jandaia implements Caderno {
  constructor(
    public marca: string,
    public cor: string,
    public nPaginas: number
  ) {}
}

function main() {
  const prateleiraCadernos = new Prateleira();
  const caderno1 = new Tilibra("Tilibra", "azul", 180);
  const caderno2 = new Jandaia("Jandaia", "vermelho", 180);
  const caderno3 = new Jandaia("Jandaia", "verde", 180);
  const caderno4 = new Tilibra("Tilibra", "rosa", 180);

  prateleiraCadernos.addCaderno(caderno1);
  prateleiraCadernos.addCaderno(caderno2);
  prateleiraCadernos.addCaderno(caderno3);
  prateleiraCadernos.addCaderno(caderno4);

  prateleiraCadernos.listarCadernos();
}

main();
