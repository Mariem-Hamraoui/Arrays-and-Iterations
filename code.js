// Mariem Hamraoui 
// Arrays& Iterations 
//02/05/2021 

//QUESTION 1 
//Answer 

function arrayFor(array) {
for ( var i = 0 ; i <= array.length-1 ; i++ )
 {console.log(array[i]) ;}
}
undefined 

//QUESTION 2 
//Answer
function arrayWhile(array) {
var i = 0 ; 
while (i <= array.length-1 ) { 
console.log(array[i]); 
i++ ;}
}
undefined 

//QUESTION 3 
//Answer
function sum(array) {
var sum = 0 ; 
for ( var i = 0 ; i <= array.length-1 ; i++ )
 { sum = sum + array[i] ;}
return sum ; 
}
undefined 

//QUESTION 4 
//Answer 

function sumEveryOther(array) {
var sum = 0 ; 
for ( var i = 0 ; i <= array.length-1 ; i=i+2 )
 { sum = sum + array[i] ;}
return sum ;
}
undefined 

//QUESTION 5 
//Answer 

function sumStartAt(array, index) {
var sum = 0 ; 
for ( var i = index ; i <= array.length-1 ; i++ )
 { sum = sum + array[i] ;}
return sum ;
}
undefined 

//QUESTION 6 
//Answer 

function sumUntil(array, index) {
var sum = 0 ; 
for ( var i = index ; 0 <= i  ; i-- )
 { sum = sum + array[i] ;}
return sum ;
}
undefined 

//QUESTION 7 
//Answer
function subtractReverse(array) {
var result = array[array.length-1] ; 
for ( var i = array.length-2 ; 0 <= i ; i-- ) 
{ result = result - array[i] ;
console.log(array[i]) ; }
return result ;
} 

//QUESTION 8 
//Answer 

function product(array) {
var product = 1;
for (var i = 0 ; i < array.length ; i++) {
product = product * array[i] ; }
return product ; }
undefined 

//QUESTION 9 
//Answer
function sum(array) {
var sum = 0 ; 
for ( var i = 0 ; i <= array.length-1 ; i++ )
 { sum = sum + array[i] ;}
return sum ; 
} 
function average(array) {
var len = array.length; 
var average  = 0 ; 
average = sum(array) / len ; 
return average ; 
} 

//QUESTION 10 
//Answer  
function square(array) {
var newarray = [] ; 
for(var i = 0 ; i < array.length ; i++) {
newarray.push(array[i]*array[i]);}
return newarray; }
undefined 

//QUESTION 11 
//Answer 
function isArray(array) {
console.log(Array.isArray(array));
}
undefined 

//QUESTION 12 
//Answer 

- start from postion 0 
- iterate all the postions until array length-1  
- comparing the array[i] with the other array[i] (find the minimum ) 

function min(array) {
var min = array[0] ; 
for( var i = 0 ; i < array.length  ; i++ ) 
         { if (array[i] < min ) {
         min = array[i] ;} } 
return min ;}
undefined 

//QUESTION 13 
//Answer  
function max(array) {
var max = array[0] ; 
for( var i = 0 ; i < array.length  ; i++ ) 
         { if ( array[i] >  max ) {
          max = array[i] ;} 
          } 
return max ;}
undefined 

//QUESTION 14 
//Answer 

function shortestString(array) {
var short = array[0].length
for( var i = 0 ; i < array.length  ; i++ ) 
     {if  (array[i].length < short ) 
         { short = array[i].length ; }  
     }
return short ; }
undefined 

//QUESTION 15 
//Answer  

function longestString(array) { 
	var longestString = array[0].length
for( var i = 0 ; i < array.length  ; i++ ) 
     {if  (array[i].length < longestString ) 
         { longestString = array[i].length ; }  
     }
return longestString ; }
undefined 

//QUESTION 16 
//Answer

function min(array) {
var min = array[0] ; 
for( var i = 0 ; i < array.length  ; i++ ) 
         { if (array[i] < min ) {
         min = array[i] ;} } 
return min ;}
  
function max(array) {
var max = array[0] ; 
for( var i = 0 ; i < array.length  ; i++ ) 
         { if ( array[i] >  max ) {
          max = array[i] ;} 
          } 
return max ;} 

function minMax(array) { 
return [ min(array) , max(array)] ; }
undefined

 
//QUESTION 18 
//Answer
function multiplyBy(array, number) {    
var multipliedarray = [] ; 
for(var i = 0 ; i < array.length ; i++) {
multipliedarray.push(array[i]*number);}
return multipliedarray ; } 
undefined 

 //QUESTION 19 
//Answer 
function multiplyByIndex(array) {    
var multipliedindex = [] ; 
for(var i = 0 ; i < array.length ; i++) {
multipliedindex.push(array[i]*i);}
return multipliedindex ; } 
undefined


//QUESTION 20 
//Answer
function legnths(array) {
var lenarray = [] ; 
var sum = 0 ;  
for(var i = 0 ; i < array.length ; i++) 
 {lenarray.push(array[i].length)  ;} 
console.log(lenarray) ;}
undefined   


//QUESTION 21 
//Answer
function totalNumberOfCharacters(array) {
var lenarray = [] ; 
var sum = 0 ;  
for(var i = 0 ; i < array.length ; i++) 
	{ sum = sum + array[i].length ;} 
return sum ;}
undefined 

//QUESTION 22 
//Answer   
New array whose length is an even number. 

function filterEvenLengthWords(array) {
var evenLen = 0 ;
var evenlenarray = [] ;  
for(var i = 0 ; i < array.length ; i++) { 
if ( array[i].length % 2 === 0 )
	{ evenlenarray.push(array[i]) ;} } 
console.log(evenlenarray); }
undefined 

//QUESTION 23 
//Answer 
an array of arrays 
i iterate for Array 
j iterate for Index of array i arrayj[i]
removes the last element from every array in the array
returns the array. 

var array = [[1,2, 3, 4] , [1, 2], [3, 4, 5]] 



 array[0].pop()
 array[1].pop()
 array[2].pop()

function popLastElement(array) {
	var newarray = [] ; 
for (var i = 0 ; i <= array.length - 1 ; i++) 
     {newarray.push( array[i].pop() )  ;}
      return newarray  ; } 

popLastElement([[1 , 2, 3, 4], [1, 2], [3, 4, 5]])
​(3) [4, 2, 5]


//QUESTION 24 
//Answer 


//QUESTION 25 
//Answer 
sumArrays ([[1, 2, 3, 4],[1, 2],[3, 4, 5]])

function sumArrays(array) {
var sumj = 0 ;
for (var i = 0 ; i <= array.length-1 ; i ++){  
     for (var j = 0 ; j <= array[i].length-1 ; j++){ 
              sumj = sumj + array[i][j] ;} }
                     return sumj ;} 
undefined

//QUESTION 26 
//Answer

//find the smallest in the array 
//multiplyBy the smallest by array[i] 

function min(array) {
var min = array[0] ; 
for( var i = 0 ; i < array.length  ; i++ ) 
         { if (array[i] < min ) {
         min = array[i] ;} } 
return min ;}

function multiplyBySmallest(array) {    
var multipliedarray = [] ; 
for(var i = 0 ; i < array.length ; i++) {
multipliedarray.push(array[i]*min(array));}
return multipliedarray ; }
undefined 

//QUESTION 27 
//Answer 

 


//QUESTION 28 
//Answer 

 
//check each element in the array
//if its odd, increment odd counter
//else, increment even counter  

function sumOddEven(array) {
var odds = 0 ; 
var evens = 0 ; 
for( var i = 0 ; i < array.length ; i++ ){ 
    {  if (array[i] % 2 == 0 ) {
        evens += array[i] ;}
       else  
    	odds += array[i]   ;} 
    }
    return [odds,evens];}
undefined 

//QUESTION 29  
//Answer

shortestOfMixed


//QUESTION 30  
//Answer 
returns the smallest number within the given array.
Notes:
a. If the given array is empty, it should return 0.
b. If the array contains no numbers, it should return 0. 



function smallestOfMixed(array) {
var test = array.includes("number" , array[0] ) ;
var len = array.length ;
var short = array[0].length ;  
if ( ( len = 0 ) || ( test = true) ){
		return 0 ;}
else { 
       for( var i = 0 ; i < len  ; i++ ) 
         {if  (array[i].length < short ) 
            { short = array[i].length ; }  
         } 
        
return short ;} }  


smallestOfMixed ([4, "two", 2, "three"])

