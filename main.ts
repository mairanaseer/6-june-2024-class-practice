///////////06.june.2024/// class practice
/////optional parameter//////
function userinfo(name:string , info?:string){
console.log(name,info)
}
userinfo("maira","sherazi",) /////maira sherazi

/////arrow function in optional parameter///////
let student = (name:string , email?: string) => {
console.log(name ,email)
}
student("sherry") // i have skip second aurgument because its optional parameter

//////optional parameter in interface/////
interface product {
    name: string
    price?:number
}
let product:product ={
    name: "mobile",
    price: 34000
}
console.log(product.price)     /////34000

/////explict casting in string///////////
let age:unknown
age = "twenty two"
console.log(
    (age as string).toUpperCase()
);                                ///////TWENTY TWO//////////////

////////exlpict casting in number/////////
let number:unknown
number = 234.000
console.log(
    (number as number).toFixed(1)
);                          ///////////234.0

///////////structural typing////////
interface wardrobe {
    length:number
}
let Wardrobe:wardrobe ={
    length: 23
}
interface bed {
    length:number
    width:number
}
let Bed:bed ={
    length:23,
    width:15
}
Wardrobe = Bed ////its right because LHS is equal to RHS
console.log(Bed.width) ///////15

///////index signature///// its means i have multiple time to used keys and its properties
var a : {
    name: string
    [y:string]:any
}
a ={
    name: "maira",
    f_name: "naseer",
    gmail: "mairanaseer@gmail.com",
    ph: 34567,
    add: "karachi",
}  

//////synchronous/// its means it is quickly get answer
console.log(12);
console.log(23);
function book(nm:Number){
    return nm
}
console.log(56)
console.log(book(2300))









