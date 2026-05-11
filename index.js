"use strict";
// 1)
// string, number, boolean, null, undefined, any
// 2)
const myName = "Valeria";
const myAge4 = 28;
const amIStudyingTS = true;
// 3)
const greet = (name) => {
    return "Ciao" + name;
};
// 4)
const sum = (a, b) => {
    return a + b;
}; // number
// 5)
const plusIVA = (price) => {
    return (price / 100) * 22 + price;
};
// 6)
const concat = (string1, string2) => {
    return (string1 + string2).length;
};
// 7)
// type union permette ad una variabile di avere più tipi
// si scrive specificando quali tipi di valori potrà assumere:
const typeUnion = "Hi";
// 8)
const multiple = undefined;
// 10)
const numbers1 = [1, 2, 3];
const numbers2 = [1, 2, 3];
// 11)
const tupula = ["a", "b", "c", 1, 2];
const students = [
    { name: "Andrew", score: 56 },
    { name: "Mary", score: 43 },
];
// 17)
const myVehicle = {
    brand: "Ford",
    plate: 384659,
    year: 2006,
};
const response = {
    success: true,
    data: "Hello",
};
