class Car {
  constructor(model, year, color) {
    this.cmodel = model;
    this.cyear = year;
    this.ccolor = color;
  }
  calculateTime() {
    return new Date().getFullYear() - this.cyear;
  }
  calculateSpeed(km, hour) {
    return `${this.cmodel}: ${km / hour}km/h`
  }
}

Car.prototype.door = 5;

const myCar = new Car("BMW", 2000, 'red');
const myCarnd = new Car("Honda", 2003, 'black');
console.log(myCar.door);
console.log(myCar.calculateTime());
console.log(myCar.calculateSpeed(300, 2));




class Moto extends Car {
  constructor(model, year, color) {
    super(model, year, color);
  }
}

Moto.prototype.doorCount = 4;


// fetch('https://fakestoreapi.com/products')
//   .then(res => res.json())
//   .then(data => {
//     data.map(i => {
//       let myMoto = new Car(i.title, 2000, 'red');

//       console.log(myMoto);
//     })
//   })


