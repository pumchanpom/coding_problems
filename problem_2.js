// fizzbuzz() function
function fizzbuzz(n) {

    const arr = [];
    for (let i=1; i<=n; i++) {
        arr.push(i);
    }
    
    arr.forEach((item, index) => {
        if ((arr[index]  % 3 === 0) && (arr[index]  % 5 === 0)) {
            arr[index]  = 'FizzBuzz';
        } else if (arr[index] % 3 === 0) {
            arr[index]  = 'Fizz';
        } else if (arr[index]  % 5 === 0) {
            arr[index] = 'Buzz';
        }})
    return arr;
}

// test function
console.log(fizzbuzz(30));

