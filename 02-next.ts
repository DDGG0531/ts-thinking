/**
 * 箭頭函數的 ts寫法
 * 基本的function type:  (a: number | string) => void 沒啥問題
 * 複雜的function type:  ({name, age}: {name: string;age:number }) => void 沒啥問題
 */

const printOutput: (a: number | string) => void = (a) => console.log(a);
// ! 箭頭函數的寫法 name 跟 age 出現超多遍，超煩
const printOutput2: ({ name, age }: { name: string; age: number }) => void = ({
  name,
  age,
}) => console.log(name, age);

// ! 少一點
function printOutput3({ name, age }: { name: string; age: number }) {
  console.log(name, age);
}
// ! 不用物件好輕鬆
function printOutput4(name: string, age: number) {
  console.log(name, age);
}
// !! 期待後面更好的方法 處理 function prop的type

/**
 * !! 可能不存在的情況
 * 作者用if(){}處理
 */

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

/**
 * spread 的 作法，也可以把type帶過去
 */

const person = {
  name: "Max",
  age: 30,
};

const dog = {
  bark: () => {},
};

// 把兩者的type合在一起了
const mergedKey = { ...person, ...dog };

/**
 * rest 的用法
 *
 * <Dong name="Pet" age="10"  gender="f" />
 *
 * function Dog(props)
 * function Dog({name, ...others}) => others = {age, gender}
 */

// !! numbers 能得到什麼需要明確定義，這在component中尤其重要
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);

/**
 * 解構
 * 從什麼type 上面解構，會決定 解構後每個項目的type
 */
const hobbies = ["Sports", "Cooking"];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { name: userName, age } = person;
