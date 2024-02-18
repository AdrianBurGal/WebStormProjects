"use strict";
var result;
function typeResult(arg) {
    console.log("The argument is a " + typeof arg);
}
typeResult(result = true);
var car = { make: "Audi", model: "A4" };
var bus = { make: "Vovo", model: "XC60", payloadCapacity: 20 };
var vehicles = [car, bus];
vehicles.forEach(function (vehicle) {
    console.log("Make: " + vehicle.make);
    console.log("Model: " + vehicle.model);
    if ("payloadCapacity" in vehicle) {
        console.log("PayLoadCapacity: " + vehicle.payloadCapacity);
    }
});
