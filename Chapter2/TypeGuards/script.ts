function printAll(arg: string | string[]) {
    if (typeof arg === 'object') {
        arg.forEach((value) => console.log(value));
    }
    if (typeof arg === 'string') {
        console.log(arg);
    }
}

const s1 = 'Jan';
printAll(s1);

const s2 = ['Jan', 'Daniel'];
printAll(s2);

let v: number | undefined = undefined;

if (!v) {
    console.log(v);
}
