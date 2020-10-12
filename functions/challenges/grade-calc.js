// student score, total possible score
// generate letter grade and percentage for the student

const gradeCalc = function (score, totalScore) {
    const percentage = (score / totalScore) * 100;
    let grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return `Your percentage is ${percentage} with a grade of ${grade}`;
}

console.log(gradeCalc(90,100));
console.log(gradeCalc(86,100));
console.log(gradeCalc(74,100));
console.log(gradeCalc(62,100));
console.log(gradeCalc(53,100));
