let result: string | number | boolean;

function typeResult(arg: string | number | boolean): void {
    console.log("The argument is a " + typeof arg);
}

typeResult(result = true);

/************************************************************************************/

interface Car {
    make: string;
    model: string;
}

type Bus = {
    make: string;
    model: string;
    payloadCapacity: number;
}

type Vehicle = Car | Bus;
const car: Car = {make: "Audi", model: "A4"};
const bus: Bus = {make: "Volvo", model: "XC60", payloadCapacity: 20};
const vehicles: Vehicle[] = [car, bus];

vehicles.forEach(vehicle => {
    console.log("Make: " + vehicle.make);
    console.log("Model: " + vehicle.model);

    if ("payloadCapacity" in vehicle) {
        console.log("PayLoadCapacity: " + vehicle.payloadCapacity);
    }
});

/************************************************************************************/

let data: (number | string | boolean)[] = [-33, "eight", 3, true, "two", 33, true, "three"];
let dataOnly: number[] = data.filter((item): item is number => typeof item === "number");
console.log(dataOnly);

/************************************************************************************/

let anyValue: any;
