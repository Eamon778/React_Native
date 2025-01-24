"use strict";
class DataStore {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return this.items;
    }
}
const data = new DataStore();
const stringData = new DataStore();
data.addItem(1);
data.addItem(2);
data.addItem(3);
data.addItem(4);
stringData.addItem('Hello');
stringData.addItem('Hi');
stringData.addItem('Hello');
console.log(data.getAllItems());
console.log(stringData.getAllItems());
data.removeItem(2);
stringData.removeItem(1);
console.log(data.getAllItems());
console.log(stringData.getAllItems());
// class Dog {
//     static counter: number = 0;
//     name: string;
//     constructor(name: string) {
//         Dog.counter++;
//         this.name = name
//     }
// }
// const dog1 = new Dog('Bingo');
// const dog2 = new Dog('Fluffy');
// console.log(Dog.counter);
// abstract class Animal {
//     abstract makeSound(duration: number): void;
//     move(deration: number) {
//         console.log("Moving along ...")
//         this.makeSound(deration);
//     }
// }
// class Dog extends Animal {
//     makeSound(duration: number) {
//         console.log('Wof wof')
//     }
// }
// class Cat extends Animal {
//     makeSound(duration: number) {
//         console.log('Meow meow')
//     }
// }
// const dog = new Dog();
// const cat = new Cat();
// dog.move(3);
// cat.move(2);
// class Person {
//     protected name: string
//     constructor(name: string){
//         this.name = name
//         this.greet();
//     }
//     private greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// class Employee extends Person {
//     sayName() {
//         console.log(`${this.name} is working`);
//     }
// }
// const p1 = new Person('Alice');
// const p2 = new Employee('Bob');
// p2.sayName()
// interface Person {
//     name: string;
//     age: number;
//     height?: number;
//     hello: () => void;
// }
// const person: Person = {
//     name: 'John Doe',
//     age: 25,
//     hello: hi
// }
// person.hello();
// function hi(): void {
//     console.log(`${person.name} says hello`);
// }
// interface Employee  extends Person {
//     emploeeId: number;
// }
// const worker: Employee = {
//     name: 'Alice',
//     age: 30,
//     height: 5.6,
//     emploeeId: 123,
//     hello: hi
// }
// function getItemLength(name: string): number;
// function getItemLength(names: string[]): number;
// function getItemLength(nameOrNames: unknown): number {
//     if (typeof nameOrNames === 'string') {
//         return nameOrNames.length;
//     } else if (Array.isArray(nameOrNames)) {
//         return nameOrNames.length;
//     }
//     return 0;
// }
// console.log(getItemLength('Hello World'));
// function mul (x: number, y: number): number {
//     return x * y;
// }
// function div (x: number, y: number): number {
//     return x / y;
// }
// function applyFunc( funcs: ((a: number, b: number)=> number)[] , values: [number, number][]): number[] {
//     const result: number[] = [];
//     for (let i = 0; i < funcs.length; i++){
//         const args = values[i]
//         const res = funcs[i](args[0], args[1]);
//         result.push(res);
//     }
//     return result
// }
// const hello = applyFunc([mul, div], [[3,5], [6,2]]);
// console.log(hello)
// function makeName(first: string, last: string, middle?: string): string {
//     if (middle) return `${first} ${middle} ${last}`;
//     return `${first} ${last}`;
// }
// const fullname = makeName('John', 'Doe', 'F');
// function callFunc(func: (f: string, l: string, m?: string)=> string, param1: string, param2: string){
//     func(param1, param2);
// }
// callFunc(makeName, 'John', 'Doe');
// const add = (x: number, y: number): string =>{
//     return `The sum of ${x} and ${y} is ${x + y}`;
// }
// console.log(add(3,5));
// const arr = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Eve'}];
// const el = arr.pop()?.name
// const le = arr.pop()!.name
// function process(input: unknown): void {
//     if (typeof input === 'string'){
//         console.log((`Processing test: ${input}`));
//     } else if (typeof input === 'number') {
//         console.log(`Processing number: ${input}`);
//     } else if (typeof input === 'boolean') {
//         console.log(`Processing boolean: ${input}`);
//     } else if (input instanceof Blob) {
//         console.log(`Processing File`);
//     } else {
//         console.log(`Unrecognized type`);
//     }
// }
// process('Hello World');
// process(123);
// process(true);
// process(new Blob());
// process([1,3,5])
// function test(x:number):number {
//     return x+1;
// }
// test(2)
// let responseCode: 201 | 404 | 500;
// responseCode = 500;
// enum Size {
//     Small = 1,
//     Medium ,
//     Large
// }
// var size: number = 1;
// if (size === Size.Small) {
//     console.log('Size is small');
// }
// enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT'
// }
// enum Description {
//     SmallText = 'this is some sub text to read'
// }
// console.log(Description.SmallText);
// let x: unknown = 3;
// let y = (x as number) + 30;
// x = 'Hello World'
// console.log(y);
// console.log(x);
