
// let stepOne = true, stepTwo = false, stepThree = false;
// let p = new Promise((resolve, reject) => {
//     if(stepOne & stepTwo & stepThree){
//         resolve("You're in !!")
//     }
//     else{
//         reject("Access denied !")
//     }
// });
// function check(steps){
//     setTimeout(p,)

// }
// function fibonacciSequence(input) {
//     //Type your code here.
//     let i = 0, j = 1, sum = 0, result = [], count = 2;
//     result[0] = i;
//     result[1] = j;
    
//     while (count <= input){
//         sum = i + j;
//         result[count] = sum;
//         i = j
//         j = sum
//         count += 1
//     }
//     return result
// }
// console.log(fibonacciSequence(5))
// let myArr = [1, 12,54, 8, 56, 835, 127]
// // myArr.forEach((item) => {
// //     console.log(setInterval(() => { console.log("BOOM!!")}, 2000))
// // })
// // myArr.forEach((item, index) => {return myArr[index] = item*2});
// // console.log(myArr);

// var myClosure = (function () {
//     var i = 0;
//     return function () {return i += 1;}
// })();
// console.log(myClosure());//i=1
// console.log(myClosure());//i=2
// console.log(myClosure());//i=3

// function stringGen(){
//     let length = parseInt(document.getElementById("num").value, 10);
//     if (length == 0 || length == undefined || length == null){
//         return 
//     }
//     else{
//         let mystring = ""
//         while(length > 0){ 
//             chooseChar = Math.floor(Math.random() * 2);
//             if(chooseChar == 0){
//                 mystring+=Math.floor(Math.random() * 10)
//             }
//             else{
//                 mystring+=String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)
//                 }
//             length -= 1;    
//             }
//         console.log(mystring)
//     }
// }


function update(value) {
    //Type the code here.
    
    document.getElementById("screen").value += value;
  }
  
  function result() {
    //Type the code here.
      const screenValue = document.getElementById("screen").value;
      let digits = "", numbers =[], operators = [], result;
      for(let i =0;i<screenValue.length;i++){
          if(isNaN(screenValue[i])){
              operators.push(screenValue[i]);
              numbers.push(parseInt(digits, 10));
              digits = "";
          }
          else{
              digits+=screenValue[i]
          }
      }
      numbers.push(parseInt(digits, 10));
      result = numbers[0];
      i = 1;
      operators.forEach((item) => {
        switch (item){
                        case "+":
                            result = numbers[i] + result;
                            i += 1;
                            break;
                        case "-":
                            
                            result = result - numbers[i] ;
                            console.log("Subtracting!: " , result, numbers[i])
                            i += 1;
                            break;
                        case "*":
                            result = numbers[i] * result;
                            i += 1;
                            break;
                        case "/":
                            result = result / numbers[i];
                            i += 1;
                            break;
                    }

      })
      document.getElementById("screen").value = result;
  }
  
  function form_reset() {
    //Type the code here.
  
    document.getElementById("screen").value = "";
  
  }
// // console.log((function()
// // { 
// // return typeof arguments; })
// // ());

// // const myArr = [1, 2, 3, 4]
// // const [a, b, ...rest] = myArr
// // console.log(a, b, rest);
// var i = 1; 
// if (function f(){})
//  { i += typeof f; } x;
// console.log((function f(){ 
//     function f(){ return 1; } 
//  return f(); 
//  function f(){ return 2; } })());

// const f = (...args) => {
//     args.forEach((item) => console.log(item));
// }
// f(2,3,4,5,34,45,3);
// function player(fName, lName, age, team, postition, number){
//     this.fName = fName;
//     this.lName = lName;
//     this.age = age;
//     this.team = team;
//     this.postition = postition;
//     this.number = number;
// }

// const messi = new player("Lionel", "Messi", 33, "Barcelona", "Forward", 10);
// const ronaldo = new player("Cristiano", "Ronaldo", 34, "Juventus", "Forward", 7);
// player.prototype.nationality = "English";
// console.log(ronaldo, messi);
//------------------------------------------------------------------------------------------------------------------------
// function fun(){
//   //  console.log("Arguments with parameters", a, b);
//     console.log(arguments.length);

// }
// fun ( 10, 32);
// const arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// arr2.unshift(arr1);
// console.log(arr2);
// const sum = (...args) => {
//     let total = 0   ;
//     args.forEach((item) => total += item)
//     console.log(total);
//     return total;
//   }
//   console.log(sum(1));
//------------------------------------------------------------------------------------------------------------------------
// var states = [['Tamilnadu'], ['Punjab', 'Haryana']];
// const [Chennai, ...Chandigarh] = states;
// console.log(Chandigarh, Chennai);
//------------------------------------------------------------------------------------------------------------------------
// class athlete {
//     constructor(name, Dob, nationality, height, weight){
//         this.name = name;
//         this.Dob = Dob;
//         this.nationality = nationality;
//         this.height = height;
//         this.weight = weight; 
//     }
//     static aboutClass(){
//         return ("Use this class to create an athele");

//     }
//     About(){
//         return (`Name: ${this.name},
// Born: ${this.Dob},
// Nationality: ${this.nationality},
// height: ${this.height},
// weight: ${this.weight}`);
//     }
// }

// class Player extends athlete{
//     constructor(name, Dob, nationality, height, weight, club, position, number){
//         super(name, Dob, nationality, height, weight);
//         this.club = club;
//         this.position = position;
//         this.number = number;
//     }
//     static aboutClass(){
//         return ("Use this class to create a new player");
//     }
//     About(){
//         ;
//         return (`${super.About()}
// Club: ${this.club},
// position: ${this.position},
// number: ${this.number}`)
//     }
// }
// let cristiano = new Player('Cristiano Ronaldo', '5 February 1985', 'Portugal', "1.87", '90kg', 'Juventus', 'Forward', '7');
// console.log(athlete.aboutClass());
// console.log(Player.aboutClass());
// console.log(cristiano.About());
// console.log(cristiano.aboutClass())
// let email = Symbol("email");
// let Employee = {
//     name: "rajesh",
//     phone: 9800000000,
//     [email] : "rajesh@gmail.com"
// };

// let allKeys = {  name: "rajesh",
//     phone: 9800000000,
//     email : "rajesh@gmail.com"};

// console.log(allKeys.length);

// console.log(Object.keys(Employee), Object.getOwnPropertyNames(Employee));
// console.log(Object.getOwnPropertySymbols(Employee))

// let a=12, b=3; 
// [a, b] = [b, a];
// console.log(a, b);

// const func= ( 
//     x,
//     y
// ) => {
//     return x + y;
// };
// console.log(func(11,12));

// const func3 = (x, y) => { return x + y; };
// console.log(func3(1,2));
// let employees = [];
//         fetch("http://localhost:3004/employees")
//         .then(response => response.json())
//         .then(data => employees = data);
//         console.log(employees)
// function getSecondLargest(nums) {
    // Complete the function
//     let big = nums[0];
//     let secondbig = nums[0];
   
//     for(let i =1;i<nums.length;i++){
//         if(nums[i] > big){
//             //swaping the values
//             secondbig = big;
//             big = nums[i];
//         }
//         else if (nums[i] < big){
//            if(secondbig === big){
//                secondbig = nums[i]
//            }
//            else{
//                 if(nums[i] > secondbig){  
//                     secondbig = nums[i];
//                 }
//            }
//         }
//         else{
//             continue;
//         }

//     }
//     if(secondbig === big){
//         return false
//     }
//    else{
//     return `The second biggest is : ${secondbig} and biggest is ${big}`;
//    }
// }

// let nums = [-2, 2, 8, 2]
// console.log(getSecondLargest(nums))

// var x = 20;
// console.log("Before function call", x);
// a();
// console.log("After function call", x);
// function a(){
//    let x = 30;
//     console.log("Insidefunction call", x);
// }
// ===========================regarding innerHTML vs innerText vs textContent and insertAdjacentHTML vs insertAdjacentElement======================


function writeToBoard(e){
    let board = document.querySelector('#board');
    
    let para = document.createElement("p");
    para.textContent = "Kobe";
    board.insertAdjacentElement("afterbegin",para); 

    let image =document.createElement("img");
    image.src= './kobe.jpg';
    image.alt = "Kobe image"
    board.insertAdjacentElement("beforeend", image);

    console.log("innerHTML : ", board.innerHTML, "\n innerText : ", board.innerText, "\n textContent : ", board.textContent);
    board.textContent = "Replace";
}
//===================  Regarding fizzbuzz problem ===========================================
// const fizz = () => {
//     let flag ;
//     for(let i=0;i<100;i++){
//         flag = false;
//         if(i%3==0){
//             if(i%5==0){
//                 console.log(i, "fizzbuzz");
//                 flag = true;
//                 continue;
//             }
//             console.log(i, " fizz");
//         }
//         if(i%5==0 && !(flag)){
         
//             console.log(i, " buzz");
//         }
//     }
// }