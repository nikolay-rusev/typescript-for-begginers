let arr = [1, 2, 3];
console.log(arr);

function printArray(arr: number[]) {
    console.log(arr);
}

// printArray(27);

function printTuple(tpl: [number, number, string]) {
    console.log(tpl[0]);
    console.log(tpl[1]);
    console.log(tpl[2]);
}

let tpl: [number, number, string] = [27, 34, 'Jan'];
printTuple(tpl);
