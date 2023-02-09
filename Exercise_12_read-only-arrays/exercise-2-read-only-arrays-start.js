"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
// Prevent the array from being modified.
// Use the generic interface type `ReadonlyArray`: ReadonlyArray<type>
// This will cause a type error. Remove the code that now has a type error.
var languages = ["Mongolian", "French", "Basque", "Thai"];
/*languages[2] = "Hausa"; --> from now on, will not be possible change or add or remove values from this array anymore,
                              because now it is a read-only type array */
console.log(languages);
// Prevent the array from being modified.
// Use the readonly modifier and the array literal type syntax: readonly type[]
// This will cause a type error. Remove the code that now has a type error.
var currencies = ["NZD", "THB", "NGN", "EUR", "COP", "INR"];
/* currencies.reverse(); --> from now on, will not be possible change,add or remove values from the array,
                             because now it is a read-only type array */
console.log(currencies);
