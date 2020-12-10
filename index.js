
// let userName = prompt("Ваше имя? " "");
do{
     userName = prompt("Ваше имя? ", "");
}
while (userName === "" || userName === null || userName === Number(userName) ) ; 

// let userLastName = prompt("Ваша фамилия?", "");
do{
     userLastName = prompt("Ваша фамилия?", "");
}
while (userLastName === "" || userLastName === null || userLastName === Number(userLastName ));

// let userLastLastName = prompt("Ваше отчество?", "");
do{
     userLastLastName = prompt("Ваше отчество?", "");
}
while (userLastLastName === "" || userLastLastName === null || userLastLastName === Number(userLastLastName)) ;

// let userAge = prompt("Ваш возраст в годах?", "");
do{
    userAge  = prompt("Ваш возраст в годах?", "");
}
while (userAge === "" || userAge === null || userAge === String(userAge) ) ;

let userAgeDay = userAge * 365; 
let userAgeFiveEars = userAge + 5;
let mg = confirm("Ваш пол мужской?") ? "мужской" : "женский";
let m = (userAge >= 65)? "да" : "нет";
let g = (userAge >= 55)? "да" : "нет";


alert(`Ваше ФИО: ${ userName + userLastName + userLastLastName }
       Ваш возраст в годах: ${userAge}
       Ваш возраст в днях: ${userAgeDay}
       Через 5 лет вам будет: ${userAgeFiveEars} 
       Ваш пол: ${mg} 
       Вы на пенсии: ${m && g}  ` );
