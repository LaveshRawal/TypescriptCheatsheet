let id: number = 5;
let fname: string = "Max";
let isCool: boolean = true;
let x: any = [1, true, 3];

//tuple
let tuple: [number, string] = [1, "Max"];

// tuple array

let tupleArray: [number, string][] = [
  [1, "Max"],
  [2, "Manu"],
  [3, "Max"],
];

//union

let id1: number | string = 5;

//enums

enum Direction1 {
  Up = 0,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

//Objects

const user: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// with type

type user1 = {
  name: string;
  age: number;
  hobbies: string[];
};

const user1 = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// type assertion
let cid: any = 1;
let customerIdasNum = cid as number;

//functions

function addNum(x: number, y: number): number {
  return x + y;
}

// void type for no return value
function log(message: string | number): void {
  console.log(message);
}

//interfaces || custom types

interface User {
  readonly name: string; // readonly means that the property can only be read, not written
  age: number;
  experience?: number; //add? for optional property
}

const user2: User = {
  name: "Max",
  age: 30,
};

// customtype

type point = number | string;

const p1: point = 1;

// interfaces with functions

interface addFunction {
  (x: number, y: number): number;
}

const add: addFunction = (x: number, y: number): number => {
  return x + y;
};

// classes

class Person {
  private id: number; // private means that the property can only be read, not written
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    console.log(`${this.id} is registered`);
  }
}
const prem = new Person(1, "Prem Kumar");
const prem1 = new Person(2, "kumar kumar");
prem.register();

//generics reusable components with type parameters

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["Max", "Manu"]);
