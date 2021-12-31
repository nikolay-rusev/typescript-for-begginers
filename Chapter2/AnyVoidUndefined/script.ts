function foo(arg: any) {
    if (arg) {
        console.log('has value: ', arg);
    } else {
        console.log('is undefined: ', arg);
    }
    return;
}

let a: number | undefined = undefined;

foo(a);

a = 2;

foo(a);
