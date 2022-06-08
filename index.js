// Add answers here 
console.log("---------------------------------------------------------------------------------------");
console.log("Conditional Algorithms");
console.log("Exercise 1 - Los or New?");
console.log("---------------------------------------------------------------------------------------");

function nameOfCity(city){
    if(city.slice(0,3).toUpperCase() === "NEW" || city.slice(0,3).toUpperCase() === "LOS") {
        return city
    }else{
        return `The city ${city} does not begin with Los or New`
    }
}
console.log(nameOfCity('New York'));
console.log(nameOfCity('newark'));
console.log(nameOfCity('London'));

console.log("---------------------------------------------------------------------------------------");
console.log("Exercise 2 - isDivisible?");
console.log("---------------------------------------------------------------------------------------");

function isDivisible(number){
    if(number%100 === 0){
        return true
    }else{
        return false
    }
}
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

console.log("---------------------------------------------------------------------------------------");
console.log("Exercise 4 - What's the weather?");
console.log("---------------------------------------------------------------------------------------");

function isRaining(input){
return input === true ? "Wet Day - you need an umbrella" : "Dry Day - leave your umbrella at home"; 
}
console.log(isRaining(false));

console.log("---------------------------------------------------------------------------------------");
console.log("Loops");
console.log("Exercise 1 - Sequence");
console.log("---------------------------------------------------------------------------------------");

function geometricalSequence(numbers){
    let result = "";
    for (let key in numbers) {
       result += numbers[key]*2 + " ";
    }
return result
}

console.log(geometricalSequence([1,2,4,8,16,32,64,128]));

console.log("---------------------------------------------------------------------------------------");
console.log("Exercise 2 -  Multiples");
console.log("---------------------------------------------------------------------------------------");

function multiplesOfThree(numbers){
    let result = "";
    for (let key in numbers) {
       result += numbers[key]*3 + " ";
    }
return result
}

console.log(multiplesOfThree([1,2,3,4,5]));

console.log("---------------------------------------------------------------------------------------");
console.log("Math");
console.log("Exercise 1 - You've got the power");
console.log("---------------------------------------------------------------------------------------");

function powerOf(number){
    return Math.pow(number,number)
}
console.log(powerOf(3));
console.log(powerOf(4));

console.log("---------------------------------------------------------------------------------------");
console.log("Problem Solving");
console.log("Exercise 1 - How many?");
console.log("---------------------------------------------------------------------------------------");

 function vowelCount(str){
    let vowelsCount = 0
    const vowels = ['A','a','E','e','I','i','O','o','U','u']
    for(let char of str){
        if(vowels.includes(char)){
        vowelsCount++
    }
}
    return vowelsCount
 }

 console.log(vowelCount("hello"));
 console.log(vowelCount("test"));
 console.log(vowelCount("fbw"));
// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

