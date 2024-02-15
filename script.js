function isNumberPositive(num) {
	return num >=0;
}

function convertDaysToAge(days) {
	return Math.floor(days/365);
}

console.log(

    isNumberPositive(-1), // returns false
    isNumberPositive(10), // returns true

    convertDaysToAge(3650), // returns 10
    convertDaysToAge(6570), // returns 18

    // getLargestNumber(2, 1, 4), // returns 4
    // getLargestNumber(6, 2, 3), // returns 6
    //
    // getLastName(["Charlie", "Rob", "Andy"]), // returns “Andy"
    // getLastName(["Ash", "Stu"]), // returns "Stu"
    //
    // allNumbersPositive([2, 4, 5]), // returns true
    // allNumbersPositive([-5, 4, 6]) // returns false

)
