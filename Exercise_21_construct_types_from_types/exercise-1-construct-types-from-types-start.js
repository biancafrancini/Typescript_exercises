"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
// Change the `PartialCountry` type to use the `Partial` utility type.
// This should fix the type error for the `countryA` object.
//type PartialCountry = Country;
var countryA = {
    code: "CN",
    population: 1412600000
};
// Change the `CompleteCountry` type to use the `Required` utility type.
// This should cause a type error for the `countryB` object.
// Fix the type error by adding the missing property to the object.
//type CompleteCountry = Country;
var countryB = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"],
    currency: "EURO",
    population: 10678632
};
// Change the `ReadonlyCountry` type to use the `Readonly` utility type.
// This should cause a type error in the code below.
// Remove the code that is incorrect.
//type ReadonlyCountry = Country;
var countryC = {
    name: "Italy",
    code: "IT",
    languages: ["Italian"],
    population: 60317116
};
//countryC.population = 60_317_117; --> this is now incorrect.
console.log(countryC);
var countryD = {
    name: "New Zealand",
    code: "NZ",
    population: 5135300
};
var countryE = {
    name: "Thailand",
    code: "TH",
    languages: ["Thai", "Isan", "Kam Mueang", "Pak Tai", "Malay"],
    currency: "Baht"
};
