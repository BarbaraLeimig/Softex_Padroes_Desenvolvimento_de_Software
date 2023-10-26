import { Pessoa } from "./pessoa";
import { Funcionario } from "./funcionario";

function main() {
  let pessoa = new Pessoa("Bárbara", "Rodrigues", 28);
  let funcionario = new Funcionario("Bárbara", "Rodrigues", 28, "QA");

  pessoa.cumprimentar();
  funcionario.cumprimentarCargo();
}

main();
