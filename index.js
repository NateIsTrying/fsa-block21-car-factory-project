class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Add a method called getDescription to the Car class, which returns a string containing information about the car.
    getDescription(){
        return `This hottie is a ${this.year} ${this.make} ${this.model}, ain't she a beautie!`
    }

}

const car1 = new Car('Ford', 'Pinto', '1973');
// console.log(car1.getDescription());

//Define the ElectricCar class as a subclass of Car.
class ElectricCar extends Car {
    constructor(year, make, model, range){
        super(year, make, model);
        // Include an additional property called range that reps the electric car in miles.    
        this.range = range;
    }

    electDescription(){
        return  super.getDescription() + `It also gets a range of ${this.range} miles.`;
    }
    
} 

// Have the ElectricCar class override the getDescription method of the Car class 
// with a new implementation that includes information about the range of the electric car.
const car2 = new ElectricCar('Tesla', 'CyberTruck', '2035', '850');
console.log(car2.electDescription());

// Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. 
// The output will be a string containing the make, model, year, and range of the electric car.
const car3 = new ElectricCar('Tesla', 'Model S', '2019', 300);
console.log(car3.electDescription());

