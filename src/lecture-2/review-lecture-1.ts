

// 1. Type Annotation vs Inference


// Method 1 Annotation
let username: string = "Budi"


// Method 2 Inference
let city = "Jakarta"



// 2. Object Types

// name & age
let user: {
    name: string;
    age: number;
};


user = {
    name: "John",
    age: 20,
}

let cityObject = {
    name: "Jakarta",
    population: 10_000_000
}


// Arrays

let mixedList: (string | number | boolean | {name: string; age: number;} )[] = ["abc", 123, true, user];

export {};