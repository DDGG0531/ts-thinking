/**
 * 1: 模糊的interface，不需要指名key
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
 * 一般物件根本不需要特別定義 type，自帶type
 */

const person = {
  name: "Maximilian",
  age: 30,
};

/**
 * tuple要手動設定，範例如下
 * string[] 的順位 高於 tuple
 */

const person2 = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

/**
 * tuple設定方式如下
 */

const person3: {
  name: string;
  age: 30;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

/**
 * !! read enum
 * 為什麼s1 的type 是 Role 不是string
 */

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

// 印象中build出來會長這樣
let RoleBuild = {
  ADMIN: "ADMIN",
  READ_ONLY: 100,
  AUTHOR: "AUTHOR",
};

let s1 = Role.ADMIN;
let s2 = RoleBuild.ADMIN;

/**
 * 聯合型別 A | B
 * ! 常用 typeof 來判斷是其中的哪種type
 * ! typeof是Run time 的語法，但是配合condition，TS中也會有正確提示
 */

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

/**
 * ! 字面型別：aka 不只能夠指定type，必要時還能限定value
 */

function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  // do something
}

/**
 * 型別別名，把type抽出來寫
 */

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine3(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  // do something
}

/**
 * ! 函數的type
 */

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let someFn: (a: number, b: number) => number;
someFn = (a, b) => {
  return a + b;
};

/**
 * unknown 跟 nerver
 * !! unknown跟any的差別在於?
 * nerver用在明顯丟出錯誤的case
 */

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}
