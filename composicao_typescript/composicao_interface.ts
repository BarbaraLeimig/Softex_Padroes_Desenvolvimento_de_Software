export interface Engine {
  start(): void;
  stop(): void;
}

export class GasolineEngine implements Engine {
  start(): void {
    console.log(`Motor a gasolina ligado`);
  }

  stop(): void {
    console.log(`Motor a gasolina desligado`);
  }
}

export class AlcoholEngine implements Engine {
  start(): void {
    console.log(`Motor a alcohol ligado`);
  }

  stop(): void {
    console.log(`Motor a alcohol desligado`);
  }
}

export class DieselEngine implements Engine {
  start(): void {
    console.log(`Motor a Diesel ligado`);
  }

  stop(): void {
    console.log(`Motor a Diesel desligado`);
  }
}

export class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  startCar() {
    this.engine.start();
  }

  stopCar() {
    this.engine.stop();
  }
}

function main() {
  const myCar = new Car(new GasolineEngine());
  myCar.startCar();
  myCar.stopCar();

  const myCar2 = new Car(new AlcoholEngine());
  myCar2.startCar();
  myCar2.stopCar();

  const myCar3 = new Car(new DieselEngine());
  myCar3.startCar();
  myCar.stopCar();
}

main();
