/**
 * 是extends 不是 extend喔
 */

// 範例
abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  // ! 在constructor的參數可以直接帶表屬性，不需要再寫在上面了
  // 某些不需要初始化的再往上擺即可
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

/**
 * private vs protected
 * private 是兒子也不能取
 * protected是 兒子可以取
 */

/**
 * abstract
 * 是指把爸爸不做，但是兒子要負責做，否則會該
 */

/**
 * static 靜態函數
 * 就是說 可以透過 Math 這個constructure直接呼叫 EX: Math.random()
 */

/**
 * 第一次講interface這個詞
 */
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am");

/**
 * 高級的interface用法
 * 與class 一起用
 * ! 這邊才真正代表 介面 ，用以表達應該具備的內容，我們用Person這個實作來滿足，也可以用Animal等等來做到
 * 真正達到開枝散葉的功用，ex: 一個系統，多種登入方式
 * ! 注意這邊是用 implements 不是 extends
 */

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person2 implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

/**
 * ! Greetable這個interface還不夠嗎
 * 想要更多的interface集合?
 * 試試 interface extends interface
 *
 * 你以為只有class 才能 extends class嗎，才不是呢
 */

interface Named {
  readonly name: string;
}

interface Greetable2 extends Named {
  greet(phrase: string): void;
}

/**
 * ! Function 除了type 也可以用interface
 */

type AddFn = (a: number, b: number) => number;

interface AddFn2 {
  (a: number, b: number): number;
}

// ! 這就是Function component的寫法啊
// ! 好處是 AddFn vs  (a: number, b: number) => number，前者顧眼睛

let add2: AddFn = (n1, n2) => {
  return n1 + n2;
};

// !! 有人說React.FC 不建議再用了研究一下
let Switch: React.FC<{
  name: string;
  age: number;
}> = ({ name, age }) => {};

/**
 * optional properties
 */

interface Named3 {
  readonly name?: string;
  outputName?: string;
}
