// Functions

// Declaring a function
// A function that was declared with the function-keyword, is hoisted (moved to the top of the file before execution)
// That means, it is also available above the declaration
greet()

function greet() {
    console.log("hello")
}

// We can also use function expression to create a function
// This will create an anonymous function and then store it in a variable
const greetAgain = function() {
    console.log("hello")
}

// Calling a function
greet()
greetAgain()

// You can use arguments in a function
function welcome(word, name) {
    const result = word + " " + name
    console.log(result)
}

// When we call the function, it logs "Hi Matias"
welcome("Hi", "Matias")

// We can also return a value in a function
function welcomeAgain(word, name) {
    const result = word + " " + name
    return result
    // If you return a value, the function execution is stopped
    // This code is not reachable
    result = "new message"
}

const welcomeMessage = welcomeAgain("Hello", "Antonio")
console.log(welcomeMessage)

// You can also call a function in another function
function display(text) {
    console.log(text)
}

function sum(a, b) {
    const result = a + b
    // We call the function "display" in another function
    display(result)
}

sum(3, 5)

// Scope

// Let- and const-variables are block-scoped. 
// If they are declared in a function, they are only accessible there.
// The variable "result" is not accessible here:
// console.log(result);

// If I declare a variable outside of a function, it is accessible in this file.
const result = 8
console.log(result)

console.clear()

// -------------------------------------------------------------

// Arrays - ordered collections of (different) values

// Create an Array
const numbers = [2, 4, 6, 8]
console.log(numbers)

// Access elements in an array
// Bracket notation
console.log(numbers[0])

// at()-function
console.log(numbers.at(0))
// You can also use negative numbers, to for example access the last element
console.log(numbers.at(-1))

// Add elements to an array
// We can use the index
const characters = []
characters[0] = "b"
characters[2] = "d"
console.log(characters)

// We use push() to add an element to the end
characters.push("e")
characters.push("f")
console.log(characters)

// We can also remove elements from the end with pop()
characters.pop()
console.log(characters)

// To remove a specific element from an array, we use splice()
characters.splice(3, 1) // removes "d" from the array

// To add and remove from the beginning, we use: unshift() and shift()

// indexOf() gives us the index of an element
console.log(characters.indexOf("c")) // returns 2

// includes() checks if the element is in the array and returns true or false
console.log(characters.includes("a")) // returns true

// Iterating over arrays
// "Normal" for-loop
const countries = ["usa", "france", "uruguay", "england", "poland"]

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}

// Or we can also use the for-of-loop
for (let country of countries) {
    console.log(country)
}

// Or we can use forEach(), wich iterates over every element in the array
countries.forEach(function(country, i) {
    console.log(i)
    console.log(country)
})

// Challenge: Write a function that gets an array of countries and returns
// an array containing only the countries that start with "u"
// Important: Never modify the original array, always create a new one

// 1. Create a function that recieves an array
// 2. Create an new array
// 3. Check each element for the first character
// 4. Add only the elements to the array which start with "u"

function filterCountries(array) {
    const result = []

    for (let country of array) {
        // check if country starts with "u"
        if (country[0] === "u") {
            // add country to result array
            result.push(country)
        }
    }

    return result
}

const filtered = filterCountries(countries)
console.log(filtered)

// Multidimensional arrays: We can also create arrays in arrays in arrays... ;)
const multidimensional = [["a", "f"], ["h", "x"], ["i", "e"]]
// How to access "i" now?
console.log(multidimensional[2][0])

// A function you will often need for katas: String.split()
// It creates an array out of your string
const phrase = "This is a long string"
const words = phrase.split(" ") // You can define, where to split
console.log(words)
