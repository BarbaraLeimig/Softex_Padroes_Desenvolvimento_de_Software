export interface Sheet {
  autoClean(): void;
  autoErase(): void;
}

export class SmartNotebook {
  private sheet: Sheet;

  constructor(sheet: Sheet) {
    this.sheet = sheet;
  }

  sheetClean() {
    this.sheet.autoClean();
  }

  sheetErase() {
    this.sheet.autoErase();
  }
}

export class RecycledSheet implements Sheet {
  autoClean(): void {
    console.log(`The recycled sheet has been clean`);
  }

  autoErase(): void {
    console.log(`The recycled sheet has been erased`);
  }
}

export class DoubleSheet implements Sheet {
  autoClean(): void {
    console.log(`The double sheet has been clean`);
  }

  autoErase(): void {
    console.log(`The double sheet has been erased`);
  }
}

function main() {
  const purpleNotebook = new SmartNotebook(new RecycledSheet());
  purpleNotebook.sheetClean();
  purpleNotebook.sheetErase();

  const orangeNotebook = new SmartNotebook(new RecycledSheet());
  orangeNotebook.sheetClean();
  orangeNotebook.sheetErase();
}

main();
