//var A = 5;
//let a = 12 + 5;
//console.log(a);
//console.log("This is frist line.")
//let b = 12;
//b = b + 15;
//alert(b);
//document.write("<br>" + "<p>This paragraph is generated within js file</p>")
//const c = 15;
//alert(c);
//demo = "qwert"
//console.log(demo)

//function call
//var calcAverage = function(a, b, c){
  //  return (a+b+c)/3;
//}
//console.log("TeamA average is" + calcAverage(50, 75, 90))
//console.log("TeamB average is" + calcAverage(65, 70, 80))

//arrow
//var Sum = (e,f) => {
  //  return e + f;
//}
//var c = Sum(5, 6);
//console.log(c);

//var calcAverage => function(a, b, c){
  //  return (a+b+c)/3;
//}
//console.log("TeamA average is" + calcAverage(50, 75, 90))
//console.log("TeamB average is" + calcAverage(65, 70, 80))

//----
//setTimeout(function () {
  //  console.log("Hello");
//});
//var fruits = ["apple", "banana", "cherry"];

//fruits.forEach(function (fruit){
//    console.log(fruit);
//};


//(function (){
  //  console.log("hello");
//})();

//let mycontinent = "Asia";
//let mycountry = "Nepal";
//let population = "30.03 million";

//console.log("Name of my country is :" + mycountry + "which lies in : " + mycontinent + "and it has population of "+ population.);
//console.log(`Name of my country is ${mycountry}`which lies ${mycontinent} `and` it`has` population of ${population}.);

//map
//var number = [65, 44, 12, 4];
//var newarray = number.map(myFunction)

//function myFunction(num){
  //return num * 10;
//}

//console.log(newarray)

var numbers = [175, 50, 25]
var val = numbers.reduce(myfunc);
function myfunc(total, num){
return total - num;
}
console.log(val);

