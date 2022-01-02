const a1 = [1, 2, 3, 4, 5, 6, 7, 8];

function arraySum(arr: number[]) {
    let result = 0;
    arr.forEach((element) => (result += element));
    return result;
}

const s1 = arraySum(a1);
console.log(s1);

function argumentSum(...numbers: number[]) {
    let result = 0;
    numbers.forEach((element) => (result += element));
    return result;
}

const s2 = argumentSum(1, 2, 3, 4, 5, 6, 7, 8);
console.log(s2);
