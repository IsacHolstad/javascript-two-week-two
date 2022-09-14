const numbers = [3, 5, 6, 6, 3, 7, 10];

const numberSum = numbers.reduce((total, value) =>{
    total += value;
    return total;
}, 0);
console.log(numberSum);

//Explained how reduce works
const numberSum = numbers.reduce((total, value) =>{
    total += value;
    //0 + 0
    // total = 0
    // 0 + 3
    // total = 3
    // 3 + 5
    //total = 8
    // 8 + 6
    // total = 14
    // 14 + 6
    // total = 20
    // 20 + 3
    // total = 23
    // 23 + 7
    // total = 30
    // 30 + 10
    // total = 40
    return total;

}, 0);
console.log(numberSum);

// filter practice



