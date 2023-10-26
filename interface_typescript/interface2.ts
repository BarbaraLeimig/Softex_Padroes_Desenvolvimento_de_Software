export interface IPersonagem {
  nome: string;
  idade: number;
}

export interface IBruxa extends IPersonagem {
  tipoMagia: string;
}

export interface IFada extends IPersonagem {
  tipoEncanto: string;
}

function main() {
  const bruxa: IBruxa = {
    nome: "Malévola",
    idade: 37,
    tipoMagia: "oculta",
  };

  console.log(bruxa);

  const fada: IFada = {
    nome: "Margarida",
    idade: 1201,
    tipoEncanto: "luz",
  };

  console.log(fada);
}

main();
