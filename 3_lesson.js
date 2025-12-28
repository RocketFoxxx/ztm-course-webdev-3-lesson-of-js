//reference: primitive type and object...
let a = 5;
let b = a;
b++;
console.log(`a: ${a} and b: ${b}`);

let obj1 = {a: "a", b: "b", c: "c"};
let obj2 = obj1;
console.log(`object1: ${Object.values(obj1)} and object2: ${Object.values(obj2)}`);

let clone = Object.assign({}, obj2)
clone.d = "d";
console.log(clone)

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = array1;
array2.push(645);
console.log(`array1: ${Object.values(array1)} and array2: ${Object.values(array2)}`);

// ... = JSON.parse(JSON.stringify(...)) to make copy of an object

//type coercion

1 === "1"; // false
1 == "1"; // true
// == is the abstract equality operator while === is the strict equality operator. The == operator will compare for equality after doing any necessary 
// type conversions. The === operator will not do type conversion, so if two values are not the same type === will simply return false .

if (1) {
	console.log("yep!")
};

// if (1) {
// 	console.log("yep!")
// };
// VM101:2 yep!
// undefined
// if (0) {
// 	console.log("yep!")
// };
// undefined
// if (33) {
// 	console.log("yep!")
// };
// VM115:2 yep!
// undefined
// if (-3) {
// 	console.log("yep!")
// };
// VM119:2 yep!

//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; //{a: 5}
const object3 = object2; //{a: 5}
const object4 = { a: 5}; //new obj
object1.a = 4; //obj1,2,3 = {a: 5}


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`MOO! Name is ${this.name}, type is ${this.type} and color is ${this.color}.`)
	}
}

const cow = new Mamal("Betty", "Cow", "White/Black");