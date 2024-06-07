///////////06.june.2024/// class practice
/////optional parameter//////
function userinfo(name, info) {
    console.log(name, info);
}
userinfo("maira", "sherazi"); /////maira sherazi
/////arrow function in optional parameter///////
var student = function (name, email) {
    console.log(name, email);
};
student("sherry"); // i have skip second aurgument because its optional parameter
var product = {
    name: "mobile",
    price: 34000
};
console.log(product.price); /////34000
/////explict casting in string///////////
var age;
age = "twenty two";
console.log(age.toUpperCase()); ///////TWENTY TWO//////////////
////////exlpict casting in number/////////
var number;
number = 234.000;
console.log(number.toFixed(1)); ///////////234.0
var Wardrobe = {
    length: 23
};
var Bed = {
    length: 23,
    width: 15
};
Wardrobe = Bed; ////its right because LHS is equal to RHS
console.log(Bed.width); ///////15
///////index signature///// its means i have multiple time to used keys and its properties
var a;
a = {
    name: "maira",
    f_name: "naseer",
    gmail: "mairanaseer@gmail.com",
    ph: 34567,
    add: "karachi",
};
//////synchronous/// its means it is quickly get answer
console.log(12);
console.log(23);
function book(nm) {
    return nm;
}
console.log(56);
console.log(book(2300));
