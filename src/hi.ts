// steap 1: write TypeScript code
const hi = "Hello, TypeScript!";
console.log(hi);

// step 2: demonstrate union types in variables
let player ;

player = "Captain";

player = 23;

console.log(`Player: ${player}`);

// step 3: demonstrate a simple function
function multipla(a,b){
    return a * b;
}

console.log(`Multipla: ${multipla(4,5)}`);


// step 4: demonstrate a typed function
function multiplaTyped(a: number, b: number){
    return a * b;
}

console.log(`Multipla Typed: ${multiplaTyped(6,7)}`);

// step 5: demonstrate array with union types
let fruit =["Apple", "Banana", "Orange"];
fruit.push("Mango");
fruit.push(99); // This will cause a TypeScript error
console.log(fruit);

// step 6: correct array with union types
let mixedArray: (string | number)[] = [];
mixedArray.push("Hello");
mixedArray.push(42);
console.log(mixedArray);

// step 7: demonstrate object type
let person ={
    name: "Alice",
    age: 30
};

console.log(person);    

// step 8: demonstrate typed object
let typedPerson: { name: string; age: number } = {
    name: "Bob",
    age: 25
};
console.log(typedPerson);

// step 9: demonstrate interface
interface Car {
    make: string;
    model: string;
    year: number;
}   
let myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(myCar);

// step 10: demonstrate class with constructor
class Animal {
    name: string;   
    constructor(name: string) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }               
}

let dog = new Animal("Dog");
dog.speak();

// step 11: demonstrate class inheritance
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    speak() {
        console.log(`${this.name} barks.`);
    }   
}

let myDog = new Dog("Rex");
myDog.speak();

// step 12: demonstrate generics
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("Generic String"));
console.log(identity<number>(12345));
console.log(identity<boolean>(true));

// step 13: demonstrate enum
enum Color {
    Red,
    Green,  
    Blue
}

let c: Color = Color.Green;
console.log(`Color: ${Color[c]}`);

// step 14: demonstrate tuple
let tuple: [string, number];
tuple = ["Age", 30];
console.log(`Tuple: ${tuple[0]} is ${tuple[1]}`);

// step 15: demonstrate type assertion
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log(`String Length: ${strLength}`);

// step 16: demonstrate optional parameters
function greet(name: string, greeting?: string) {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greet("Alice");
greet("Bob", "Good morning");

// step 17: demonstrate null and undefined types
let u: undefined = undefined;
let n: null = null;

console.log(`Undefined: ${u}, Null: ${n}`);