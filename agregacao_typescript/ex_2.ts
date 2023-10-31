export interface Musica {
  nome: string;
  artista: string;
  album: string;
}

export class Playlist {
  private musicas: Musica[] = [];

  addMusica(musica: Musica) {
    this.musicas.push(musica);
  }

  listarMusica() {
    console.log("Playlist de músicas:");
    for (const musica of this.musicas) {
      console.log(
        `Nome: ${musica.nome}, Artista: ${musica.artista}, Album: ${musica.album}`
      );
    }
  }
}

export class Pop implements Musica {
  constructor(
    public nome: string,
    public artista: string,
    public album: string
  ) {}
}

export class Rock implements Musica {
  constructor(
    public nome: string,
    public artista: string,
    public album: string
  ) {}
}

function main() {
  const minhaPlaylist = new Playlist();
  const musica1 = new Pop("Figure you out", "VOILA", "Unknown");
  const musica2 = new Pop("Born without a heart", "Faouzia", "Unknown");
  const musica3 = new Rock("Exagerado", "Cazuza", "Desconhecido");
  const musica4 = new Rock("Tempo Perdido", "Legião Urbana", "Desconhecido");

  minhaPlaylist.addMusica(musica1);
  minhaPlaylist.addMusica(musica2);
  minhaPlaylist.addMusica(musica3);
  minhaPlaylist.addMusica(musica4);

  minhaPlaylist.listarMusica();
}

main();
