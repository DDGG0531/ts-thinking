/**
 * & 跟 |
 * !! read intersection-types
 * 跟想像的不太一樣
 * 一般會覺得 A&B 是交集，A|B 是連集
 * 但是以ElevatedEmployee為例，剛好相反
 */

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// e1 我要全部的key
const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
// a 要碼是string要碼是number
let a: Combinable = 10;
a = "";

/**
 * 要判斷 今天有一個Animal是馬還是鳥
 * 有一個方式就是在interface上加個type就解決啦
 */

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

/**
 * 跟TS 說我是誰，專業術語叫type casting(指定的意思)
 */

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

/**
 * 模糊的interface，不需要指名key
 */

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

/**
 * overload 多載，僅參數多載
 * 主要用來檢查，參數組合是不是過關
 * ! 這些組合明確的會傳type，回傳值的判斷 可能很模糊，這我們不要
 */

type Combinable2 = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", " Schwarz");
result.split(" ");
