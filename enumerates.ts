enum TipoDeUsuario {
  Administrador,
  Aluno,
  Convidado,
}

function verificarPermissao(usuario: TipoDeUsuario): void {
  //void = não retorna nada
  if (usuario === TipoDeUsuario.Administrador) {
    console.log("O Administrador está usando o sistema");
  } else if (usuario === TipoDeUsuario.Aluno) {
    console.log("O Aluno está usando o sistema");
  } else {
    console.log("Você não tem permissão para usar o sistema!");
  }
}

verificarPermissao(TipoDeUsuario.Aluno);

enum Cargo {
  Desenvolvedor,
  Analista,
  Aluno,
}

function verCargo(funcao: Cargo) {
  if (funcao === Cargo.Desenvolvedor) {
    console.log("O desenvolvedor está logado no sistema");
  } else if (funcao === Cargo.Analista) {
    console.log("O analista está logado no sistema");
  } else {
    console.log("Você não tem acesso ao sistema");
  }
}

verCargo(Cargo.Desenvolvedor);
