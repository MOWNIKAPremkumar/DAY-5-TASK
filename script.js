// 1. Do the below programs in anonymous function & IIFE  
// 3. Do the below programs in arrow function

//1.a.Print odd numbers in an array
// * anonymous function
    var number = ([1,2,3,4,5,6,7,8,9,10]);
    function odds (number){
    var a=[];
    for(var i=0;i<number.length;i++){
    if(number[i]%2!=0){
      a.push(number[i]);  
     } 
    }return a ;
    } odds(number);
// *IIFE
    (function odds (array,num){
        var a=[];
        for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
          a.push(array[i]);  
           console.log(a);
        } 
        }return (a);
        })([1,2,3,4,5,6,7,8,9,10]);  

// 3.a  * ARROW FUNCTION
         var odds =(array,num)=>{
         var a=[];
          for(var i=0;i<array.length;i++){
         if(array[i]%2!=0){
          a.push(array[i]);  
          console.log(a);
          } 
          }
          return(a);
          };odds([1,2,3,4,5,6,7,8,9,10]);

//1.b  Convert all the strings to title caps in a string array
//  * anonymous function
          var str = ["hello world"];
          function titleCase(str) {
              var a = [];
              str = str.toLowerCase().split(' ');
              for (var i = 0; i < str.length; i++) {
                  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
              a.push(str[i]);
              }
              return a;
              }
              console.log(titleCase("hello world"));

//*  IIFE
                (function titleCase(str) {
                    var a = [];
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i <str.length; i++) {
                        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
                        a.push(str[i]);
                        console.log(a);
                    }
                    
                }); console.log(["Hello World"]);
// 3.b * ARROW FUNCTION
              var titleCase= (str)=>{
                  var a = [];
                  str = str.toLowerCase().split(' ');
                  for (var i = 0; i <str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
                      a.push(str[i]);
                  }
                  return a;
                  };console.log(titleCase("hello world"));
//1.c  Sum of all numbers in an array
// *ANONYMOUS FUNCTION
              var num= [10,25,35]
              function sum (x,y,z) {
              var a =[];
                var plus= (x+y+z);
                a.push(plus);
                console.log(a);
                return a;
                  } sum(10, 25, 35);
//  *IIFE
              (function sum (x,y,z) {
               var a =[];
                var plus= (x+y+z);
                a.push(plus);
                console.log(a);
                return a;
                  })(10, 25, 35);
//  3.c *ARROW FUNCTION
              var sum = (x,y,z)=> {
              var a =[];
                sum= (x+y+z);
                a.push(sum);
                console.log(a);
                return a;
                  }; sum(10, 25, 35);
//  1.d Return all the prime numbers in an array
//  * ANONYMOUS FUNCTION
              var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
              function isPrime(num) {
                for (let i= 2; num >i; i++) {
                  if (num % i == 0) {
                    return false;
                  }
                }
                return num > 1;
              }

              console.log(array.filter(isPrime));
// *IIFE
              (function isPrime(num) {
                var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];  
                for (let i= 2; num >i; i++) {
                  if (num % i == 0) {
                    return false;
                  }
                }
                num>1;
              return(array.filter(isPrime));

              });([2,3,4,5,6,7,8,9,10]);
               
//* ARROW FUNCTION
            var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
            numArray = numArray.filter((number) => {
              for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
              }
              return true;
            }); console.log(numArray);
  

//  1.g  Remove duplicates from an array
//  * ANONYMOUS FUNCTION
                var A = [1,1,2,2,3,4,5,6,6]
                function dup(array){
                let dup = [...new Set(array)];
                console.log(dup);
                } dup([1,1,2,2,3,4,5,6,6]);
//  * IIFE
                (function dup(array){
                let dup = [...new Set(array)];
                console.log(dup);
                }) ([1,1,2,2,3,4,5,6,6]);
//1.h Rotate an array by k times
               const arr = [1,2,3,4,5];
                const rotatedArr = arr.map((e, i) => arr[arr.length-i-1]);
                console.log(rotatedArr);
//ANONYMOUS FUNCTION
                var nums =[5,4,3,2,1];
                var k = 1;
                function rotateArray1 (nums, k) {
                    for (let i = 0; i<=k; i++) {
                      nums.unshift(nums.pop());
                      console.log(nums);
                  }
                return nums;
                } console.log(nums);
// 1.e 
//   *ANONYMOUS FUNCTION
              var getAllPalindromes = function (words) {
              return words.filter(function (words) {
                return words.split("").reverse().join("") === words;
              });
            };console.log(getAllPalindromes(["wow", "noon"]));
//   *IIFE
              (function getAllPalindrome (words){
                //return words.filter((words)=>{
                return words.split("").reverse().join("") === words;
                //});
                })(console.log(getAllPalindromes(["pop", "noon"])));        
//       
//   *ARROW FUNCTION
              var getAllPalindromes = function (words) {
                return words.filter(function (words) {
                  return words.split("").reverse().join("") === words;
                });
              };console.log(getAllPalindromes(["wow", "noon"]));

