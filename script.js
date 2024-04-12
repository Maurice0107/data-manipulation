const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 >= 25 || n2 >= 25 || n3 >= 25 || n4 >=25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
 
// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.


const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
 
    n1 != n2 && 
    n1 != n3 &&
    n1 != n4 &&
    n2 != n3 &&
    n2 != n4 && 
    n3 != n4;

    // Problem 1: Math Problems

    // A Check if all numbers are divisible by 5 
    let DivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
    console.log(DivisibleBy5);

    // B Check if the first number is larger than the last 
    let firstLargerThanLast = (n1 > n4)
    console.log(firstLargerThanLast);


    const a = n2 - n1 
    console.log(a);
    
    const b = a * n3 
    console.log(b);

    const c = b % 4 
    console.log(c);
    
    const NotisOver25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 && 25;
    
    const Dothis = (( n1+ n2 + n3 + n4) == 50 ) &&
        ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
        n1 < 25 && n2 < 25 && n3 < 25 && n4 && 25 &&
        (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 !=) 
        
        console.log(DoThis);


    // Problem 2: Practicle Math //
   
    // Variables
    let totalDistance = 1500;
    let fuelBudget = 175;
    let fuelCostPerGallon = 3;
    //Object representing fuel effieciecy at different speeds
    const fuelEfficiencies = {
        55: 30,
        60: 28,
        75: 23
    };

    function calculateTotalFuel(speed) {
        let milesPerGallon = fuelEfficiencies {speed};
        let totalFuel = totalDistance / milesPerGallon;
        return totalFuel;

    }

    function isBudgetEnough(totalFuel) {
        let fuelEfficiencies = totalFuel + fuelCostPerGallon; 
    };