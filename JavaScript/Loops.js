let flag = undefined;

switch (flag) {
    case true:
        console.log('true');
        break;

    case false:
        console.log('false');
        break;

    default:
       console.log(
        'Please select the correct value according to the true/false statement',
    );
    break;
}

/* 
Input a number (1-4). print:
1 -> Addition
2 -> Subtraction
3 -> Multiplication
4 -> Division

*/

const option = 4;

const number_1 = 2;
const number_2 = 5;

switch (option) {
    case 1:
        console.log(number_1 + number_2, 'Addition');
        break;
    case 2:
        console.log(number_1 - number_2, 'subtraction');
        break;
    case 3:
        console.log(number_1 * number_2, 'Multiplication');
        break;
    case 4:
        console.log(number_1 / number_2, 'Division');
        break;

    default:
        console.log(' please enter the value between 1 to 4 ');
}