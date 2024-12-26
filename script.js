// document.getElementById('btn').onclick = function () {
//     var a = document.getElementById("form").value;
//     // alert(a);
//     document.getElementById("Statement").innerHTML = a;
// }


//  Program # 1: Write a js program to find maximum between two numbers.
// let a = 1;
// let b = 2;
// if(a<b){
//     console.log(`${b} is Maximum Number`);
// }else if(b<a){
//     console.log(`${a} is Maximum Number`);
// }else{
//     console.log("Your Digits is not Correct");
// }

//  Program # 2: Write a js program to find maximum between three numbers.
// let a = 50;
// let b = 40;
// let c = 20;
// if(a>b && a>c){
//     console.log("A is Maximum");
// }else if(b>a && b>c){
//     console.log("B is Maximum");
// }else if(c>a && c>b){
//     console.log("C is Maximum");
// }else{
//     console.log("Invalid");
// }

// Program # 3: Write a js program to check whether a number is negative, positive or zero.
// let a = -1;
// if(a>0){
//     console.log("Number is Positive");
// }else if(a<0){
//     console.log("Number is Negative");
// }else{
//     console.log("Error");
// }

// Program # 4: Write a js program to check whether a number is divisible by 5 and 11 or not.
// let a = 111;
// if(a%5 == 0 || a%11==0){
//     console.log("Number is Divided by 5 or 11");
// }else if(a%11 == 0){
//     console.log("Number is devided by 11");    
// }else if(a%5 == 0){
//     console.log("Number is divided by 5");
// }else{
//     console.log("Number is not divided by 5 or 11");
// }

// Program # 5: Write a js program to check whether a number is even or odd.
// let a = 94432;
// if(a%2 == 0 ){
//     console.log("Number is Even");
// }else if(a%2 !==0){
//     console.log("Number is Odd");
// }else{
//     console.log("Number is not even or not odd");
// }

// Program # 6: Write a js program to check whether a year is leap year or not.a js program to check whether a character is alphabet or not.    
// let a = 365;
// if (a == 366) {
//     console.log("This ia a Leap Year");
// } else if (a == 365) {
//     console.log("This is not a leap Year");
// } else {
//     console.log("Kindly enter correct days");
// }

// Program # 7: Write a js program to input any alphabet and check whether it is vowel or consonant.
// let a = prompt("Enter a just one alphabet or Check its vwel or consonant")
// if(a=="a" || a=="e" || a=="i" || a=="o" || a=="u"){
//     console.log("Number is vowel");
// }else{
//     console.log("Nubmer is Consonant");
// }

// Program # 8: Write a js program to check whether a character is alphabet or not.
// let a = "&";
// if(a>="a" && a<="z" || a>="A" && a<="Z"){
//     console.log("This is alphabet");
// }else if(a>=0 ||a<=0){
//     console.log("This is Number"); 
// }else if(a == " "){
// console.log("Enter Again Number");
// }else{
//     console.log("This is exclamation Sign");
// }

// Program # 9: Write a js program to input any character and check whether it is alphabet, digit or special character.
// let a = prompt("Check your input is alphabet or digital or special Character")
// if(a>="A" && a<="Z" || a>="a" && a<= "z"){
//     console.log("This is alphabet");
// }else if(a>=0 || a<=0){
//     console.log("This is number");
// }else{
//     console.log("This is special Character");
// }

// Program # 10: Write a js program to check whether a character is uppercase or lowercase alphabet.
// let a = "%"
// if(a>="a" && a<="z"){
//     console.log("This is lower Case");
// }else if(a>="A" && a<="Z"){
//     console.log("This is UpperCase");
// }else{
//     console.log("This is not Alphabet");
// }

// Program # 11:  Write a js program to input week number and print week day.
// let a = 2;
// if(a==1){
//     console.log("Monday");
// }else if(a==2){
//     console.log("Tuesday");
// }else if(a==3){
//     console.log("Wednesday");
// }else if(a==4){
//     console.log("Thursday");
// }else if(a==5){
//     console.log("Friday");
// }else if(a==6){
//     console.log("Saturday");
// }else if(a==7){
//     console.log("Sunday");
// }else{
//     console.log("Plz, Enter Your Correct Number between 1 to 7");
// }

// Program # 12:Write a js program to input month number and print number of days in that month
// let a = prompt("Enter Nubmer between 1 to 12")
// if (a == 1) {
//     console.log("January");
// } else if (a == 2) {
//     console.log("Febraury");
// } else if (a == 3) {
//     console.log("March");
// } else if (a == 4) {
//     console.log("April");
// } else if (a == 5) {
//     console.log("May");
// } else if (a == 6) {
//     console.log("June");
// } else if (a == 7) {
//     console.log("July");
// } else if (a == 8) {
//     console.log("August");
// } else if (a == 9) {
//     console.log("September");
// } else if (a == 10) {
//     console.log("October");
// } else if (a == 11) {
//     console.log("November");
// } else if (a == 12) {
//     console.log("December");
// }else{
//     console.log("Plz, Enter Number Between 1 to 12");
// }

// Program # 14: Write a js program to input angles of a triangle and check whether triangle is valid or not.
// let a = 50;
// let b = 0;
// let c = 130;
// if (a > 0 && b > 0 && c > 0 && (a + b + c == 180)) {
//     console.log("The Triangle is Valid");
// }else{
//     console.log("The Triangle is not Valid");
// }

// Program # 15: Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// let a = 50;
// let b = 180;
// let c = 140;
// if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
//     console.log("The Triangle is Valid");
// }else{
//     console.log("The Trianlge is not Valid");
// }

// Program # 16: Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// let side1 = 10;
// let side2 = 20;
// let side3 = 30;
// if(side1==side2 || side2 == side3){
//     console.log("this is equilateral");
// }else if(side1==side2 || side1==side3 || side2==side3){
// console.log("this is isosceles");
// }else{
//     console.log("This is scalene");
// }

// Program # 17: Write a js program to find all roots of a quadratic equation.
// let a = 2;
// let b = -4;
// let c = -6;
// if (a == 0 && b == 0 && c == 0) {
//     console.log("This is not quadratic equation");
// } else {
//     let disc = b * b - 4 * (a * c)
//     console.log("Discriminant:" + " " + disc);

//     if (disc > 0) {
//         console.log("The root is real and distinct");
//         let positive = (-b + Math.sqrt(disc)) / (2 * a);
//         let negative = (-b - Math.sqrt(disc)) / (2 * a);

//         console.log(positive);
//         console.log(negative);
//     } else if (disc == 0) {
//         console.log("The Root is Real and repeated");
//         let root1 = -b / (2 * a);
//         console.log(root1);
//     } else {
//         let realPart = -b / (2 * a);
//         let imaginaryPart = Math.sqrt(-disc) / (2 * a)
//         console.log("The Root is Complex");
//         console.log("Root1:" + realPart + "+" + imaginaryPart + "i");
//         console.log("Root1:" + realPart + "+" + imaginaryPart + "i");
//     }

// }

// Program # 18:  Write a js program to calculate profit or loss.
// let investment = 1000;
// let gain = 1000;
// if(investment<gain){
//     let calculate = gain-investment
//     console.log("Congratulation Your investment is profitable");
//     console.log(`Your investment is:  ${investment}: and Your Profit is ${calculate}`);
// }else if(investment>gain){
//     let calculate2 = gain-investment
//     console.log("Oops! Your investment is in Loss");
//     console.log(`Your investment is: ${investment} and your amount gain is ${gain}`);
// }else{
//     console.log("Your investment is levels");
// }

// Program#19: Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


// let obt_phy = 100;
// let obt_chem = 90;
// let obt_math = 80;
// let obt_comp = 120;
// let obt_bio = 100;

// let t_phy = 100;
// let t_chem = 100;
// let t_math = 100;
// let t_comp = 100;
// let t_bio = 100;

// let obt_marks = obt_phy + obt_chem + obt_math + obt_comp + obt_bio;
// let totalMarks = t_phy + t_chem + t_bio + t_comp + t_math;

// let percentage = (obt_marks * 100) / totalMarks;
// if(obt_phy>100 || obt_chem>100 || obt_math>100 || obt_comp>100 || obt_bio>100){
// console.log("Plz, Enter Correct Marks");

// }
// else if (percentage >= 90 && percentage <= 100) {
//     console.log(`Grade A: Your percentage is ${percentage} and your Number obtained is: ${obt_marks}`);
// } else if (percentage >= 80 && percentage <= 89) {
//     console.log(`Grade B: Your percentage is ${percentage} and your Number obtained is: ${obt_marks}`);
// } else if (percentage >= 70 && percentage <= 79) {
//     console.log(`Grade c: Your percentage is ${percentage} and your Number obtained is: ${obt_marks}`);
// } else if (percentage >= 60 && percentage <= 69) {
//     console.log(`Grade D: Your percentage is ${percentage} and your Number obtained is: ${obt_marks}`);
// } else if (percentage >= 40 && percentage <= 59) {
//     console.log(`Grade E: Your percentage is ${percentage} and your Number obtained is: ${obt_marks}`);
// } else if (percentage < 40) {
//     console.log(`Grade F: Your percentage is ${percentage} and your Number obtained is: ${obt_marks}`);
// }else{
//     console.log("Oops! You are Fail");
// }

// Program # 20:  Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// let b_sal = 20000;
// if (b_sal <= 10000) {
//     let hra = b_sal / 10 * 2;
//     let da = b_sal / 10 * 8;
//     let gross_sal = b_sal + hra + da;
//     console.log(`Your Basic Salry is ${b_sal}`);
//     console.log(`Your HRA is: ${hra}`);
//     console.log(`Your DA is: ${da}`);
//     console.log(`Your Gross Salary is: ${gross_sal}`);
// } else if (b_sal <= 20000 && b_sal >= 10001) {
//     let hra = b_sal / 10 * 2.5;
//     let da = b_sal / 10 * 9;
//     let gross_sal = b_sal + hra + da;
//     console.log(`Your Basic Salry is ${b_sal}`);
//     console.log(`Your HRA is: ${hra}`);
//     console.log(`Your DA is: ${da}`);
//     console.log(`Your Gross Salary is: ${gross_sal}`);
// } else if (b_sal > 20000) {
//     let hra = b_sal / 10 * 3;
//     let da = b_sal / 10 * 9.5;
//     let gross_sal = b_sal + hra + da;
//     console.log(`Your Basic Salry is ${b_sal}`);
//     console.log(`Your HRA is: ${hra}`);
//     console.log(`Your DA is: ${da}`);
//     console.log(`Your Gross Salary is: ${gross_sal}`);
// }else{
//     console.log("You are nt eleigible");
// }

// Program # 21:  Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// let unit = 75;
// let totalCost = 0;
// if (unit <= 50) {
//     totalCost = unit * 0.50;
// } else if (unit <= 150) {
//     totalCost = 50 * 0.50 + (unit - 50) * 0.75
// } else if (unit <= 250) {
//     totalCost = 50 * 0.50 + 100 * 0.75 + (unit - 150) * 1.20
// } else {
// totalCost = 50*0.50+ 100*0.75 + 100*1.20 + (unit -250)*1.50
// }

// let addSurcharge = 0.20*totalCost;
// let finalBill = totalCost + addSurcharge
// console.log(`Your Bill is : ${finalBill}`);
