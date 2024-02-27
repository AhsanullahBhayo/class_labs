
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

function carInfo(obj) {
    let info = "The " + obj.brand + " " + obj.model + " was manufactured in " + obj.year + ".";
    return info;
}

console.log(carInfo(car));
