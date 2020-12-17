// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 19,
//   pet: {
//     type: "RABBIT",
//   },
// };
// console.log(user);
// //firstName - ключ, "" - значение
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.pet);
// console.log(user.pet.type);

//массив - объект (наследуется от объекта), у него есть только значение (в качестве ключей выбраны цифры с дополнительным методом и свойством lenght)(структура)
// значение по индексу
// const numbers = [1, 2, 3];

// console.log(numbers[0]);//1
// console.log(numbers[1]);//2
// console.log(numbers[2]);//3

// const numbersLength = numbers.length;
// console.log("Lenght", numbersLength);

// .push() | .unshift() добавляет данные в конец массива/ в начало

// numbers.push(4);
// numbers.unshift(0);

// console.log(numbers);
// const q = numbers.pop(); //3
// // удаляет последний/ первый
// // numbers.pop(); //3
// numbers.shift(); //1
// console.log(q);

// const numbers = [1, 2, 3];

// for (let index = 0; index < numbers.length; index++) {
//   console.log("index", index);
//   console.log(numbers[index]);
// }

const data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];
// let flag = true;
// const age = +prompt("Введите ваши данные ");
// for (let index = 0; index < data.length; index++) {
//   console.log(data[index].age);
//   if (data[index].age === age) {
//     flag = false;
//     console.log(data[index]);
//   } else {
//     // console.log("error");
//   }
// }
// if (flag === true) {
//   alert("error");
// }
let flag = true;

let user = prompt("Ваше имя?:", "");

// let user = +prompt("Введите ваш возраст:");
for (let index = 0; index < data.length; index++) {
  //   debugger;
  if (
    user === data[index].firstName.toUpperCase() ||
    user === data[index].firstName.toLowerCase() ||
    user === data[index].firstName
  ) {
    flag = false;
    alert(`Ваше имя: ${data[index].firstName}
Ваша фамилия: ${data[index].lastName}
Ваш возраст: ${data[index].age}`);
  } else {
    // alert(`Ваше имя: ${data[index].firstName}`);
    // alert("error");
  }
}
if (flag === true) {
  alert("error");
}

// firstName  - в любом регистре Hannah || HANNAH
