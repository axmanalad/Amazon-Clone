class Car {
  #brand;
  #model;
  speed;
  isTrunkOpen = false;
  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
    this.speed = 0; // Default speed
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk Open: ${this.isTrunkOpen}`);
  }

  go() {
    if (!this.isTrunkOpen) {
      this.speed += this.speed < 200 ? 5 : 0;
    }
  }

  brake() {
    this.speed -= this.speed > 0 ? 5 : 0;
  }

  openTrunk() {
    if (!this.isTrunkOpen && this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    if (this.isTrunkOpen) {
      this.isTrunkOpen = false;
    }
  }
}

class RaceCar extends Car {
  acceleration;
  constructor(brand, model, acceleration) {
    super(brand, model, acceleration);
  }

  go() {
    if (!this.isTrunkOpen) {
      this.speed += this.speed < 300 ? this.acceleration : 0;
    }
    if (this.speed > 300) {
      this.speed = 300; // Cap speed at 300 km/h
    }
  }

  brake() {
    super.brake();
    if (this.speed < 0) {
      this.speed = 0; // Ensure speed doesn't go negative
    }
  }

  // RaceCar overrides openTrunk and closeTrunk due to not having a trunk
  openTrunk() {
    return;
  }

  closeTrunk() {
    return;
  }
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');
car1.displayInfo();
car2.displayInfo();

const raceCar1 = new RaceCar('McLaren', 'F1', 15);
raceCar1.displayInfo();