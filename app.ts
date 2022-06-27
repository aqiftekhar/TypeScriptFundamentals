console.log('Hello From TypeScript!');

function add(number1: number , number2: number, showResult: boolean, phrase: string){
    const result= number1 + number2;
    if (showResult) {
        //console.log(number1 + number2); //This will work fine
        //console.log(phrase + number1 + number2); //Due to string inside this will return string and will return 53.2
        console.log(phrase + result); //This will work fine and will return sum of two numbers plus string phrase
    }
    else{
       return result; 
    }
    
}
const num1 = 5;
const num2 = 3.2; //Will return flow 3.2
//let num2 = 3.2 //This will return 3
const printResult = true;
const resultPhrase = 'Result is : '
add(num1,num2, printResult, resultPhrase);