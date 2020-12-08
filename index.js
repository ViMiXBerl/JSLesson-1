"use strict";

alert("Я JavaScript!");

let admin = "";
// let name = "Джон";

// admin = name;

alert(admin);

let planet = "Земля";
let currentUser = "Джон";

let name = "Илья";
alert(`hello ${1}`);
alert(`hello ${"name"}`);
alert(`hello ${name}`);



let userName = prompt("Как Вас зовут?", "" );
alert(userName);


let a = 1, b = 1;

let c = ++a; //2 a=2
let d = b++; //1 b=2


let a = 2;
let x = 1 + (a *= 2);   // 5 a=4

"" + 1 + 0// "10"
"" - 1 + 0//-1
true + false//1
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//nan
7 / 0//infinity
"  -9  " + 5//"-95"
"  -9  " - 5//-14
null + 1//1=0+1
undefined + 1//Nan
" \t \n" - 2//-2


let x = prompt("Первое число?", 1);
let y = prompt("Второе число?", 2);
alert(+x + +y);

5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" //false
null === +"\n0\n"// false

if ("0") {
    alert( 'Привет' );
  } 
// treu


let officialNameJS = prompt("Какое официальное название JavaScript?", "");
if (officialNameJS == "ECMAScript")
{alert("Правильно!");}
else {
    alert("Не знаете? “ECMAScript”!");
}
// 


let value = prompt("ВВедите число!", "");
if (value > 0){
    alert (1);
}
else if (value < 0 ){
    alert (-1);
}
else {
    alert (0);
}
//

let result = (a + b < 4) ?  'Мало' :   'Много';

//
let login = prompt("Кто вы?", "");

let message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
'Нет логина'; 
alert (message);
//
alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) );// undefined, 2
alert( 1 && null && 2 );// null
alert( alert(1) && alert(2) );// undefined
alert( null || 2 && 3 || 4 );//3
