//Make a variable for firstName and age and give each variable values.
//Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
//If none of these conditions apply, print “firstName is a adult”.
const age = "w";
if (age < 10) {
  console.log("he is boy");
} else if (age < 20) {
  console.log("he is teen");
} else if (age <= 30) {
  console.log("he is adult");
} else {
  console.log("he is not a num");
}

// second solution

const firstName = "Ali";

const age = 22;

if (age < 13) {
  console.log(`${firstName} is a child`);
} else {
  if (age < 20) {
    console.log(`${firstName} is a teenager`);
  } else {
    if (age < 30) {
      console.log(`${firstName} is a young adult`);
    } else {
      if (age >= 30) {
        console.log(`${firstName} is an adult`);
      } else {
        console.log("Oi, put in a valid numeric age!");
      }
    }
  }
}

//solution 2

let firstNam;
firstNam = "Bruce";
let age = 35;
if (age > 13) {
  console.log(`${firstNam} is a child`);
  if (age => 13 && age < 20) {
    console.log("you are a teenager");
  }
} else {
  console.log(`${firstNam} are an adult`);
}


// ! in JS we have if , if else and switch 

// * SWITCH CASE 
// ? i am questioning the value 
/**
 * * Important 
 *  ! important 
 * @param myParam the param for this 
 * * TODO:
 */

/**
 * * In the code snippet bellow I am questioning  the value
 */
const color = "Black";
// ! asking the variable which color it is ,
switch (color) {
    case 'Pink';
    console.log('cool');
    break;
    case 'Black';
    console.log('Nice');
    break;
    case "white";
    console.log("so nice");
    break; // ? We use it to break whatever doing 
    default: // * we use default when the solution is not listed 
        console.log('No that is crazy');

}
const x = 10;
//var x = 10;

// Numbers

const month = 10;
switch(month) {
    case 1:
    console.log('Jan');
     break;
    case 2: 
     console.log('Feb');
     break;
    case 3;
      console.log('Apr');
      break;
      case 5:
     console.log('May');
     break;
      case 6:
     console.log('June');
     break;
     case 7:
    console.log('July');

    
    break;
    default:
      console.log("This is not real");
}

// switch is checking the value i am passing to 
// Can i have a condition instead of a number?

const x = 33;
switch(x) {
    case 1999.33:
    console.log('fine');
     break;
    case 22.22:
    console.log('this is wrong');
      break;
     case 100000000:
     console.log(cool);
     break;
     default:
   console.log("So this is not fun or is it ?");

}


// exercise
// Let's start by printing out all of the numbers from 1 and 20, 
// and let's do it the quick and easy way. 
/**for( var i=1; i<21; i++ ) {
    if( (i%3) === 0 && (i%5) === 0 ) {
        console.log( "FizzBuzz" );
    }else if( (i%3) === 0 ) {
        console.log( "Fizz" );
    }else if( (i%5) === 0 ) {
        console.log( "Buzz" );
    }else{
        console.log( i );
    }
}
*/

// FizzBuzz g
const fizzBuzz = n => {
    let result = ''
    for (let i = 1; i <= n; i++) {
      const multipleOfThree = i % 3 === 0
      const multipleOfFive = i % 5 === 0
  
      if (multipleOfThree && multipleOfFive) {
        result += 'fizzbuzz'
      } else if (multipleOfThree) {
        result += 'fizz'
      } else if (multipleOfFive) {
        result += 'buzz'
      } else {
        result += i
      }
    }
    return result

// 
//const int = 15
const int = "";

if (int % 3 == 0 && int % 5 == 0) {
    console.log("Fizz");
}
else if (int %  3 == 0) {
    console.log("Fizz");
}
else if ( int % 5 == 0) {
    console.log("Buzz");
} else {
    console.log(`noo ${int}`);
}
or the last can Be 
/**
 * else if (int) {
 * console.log(`)}
 */
// TODO: 
// TO READ:
// TO RESEARCH: 