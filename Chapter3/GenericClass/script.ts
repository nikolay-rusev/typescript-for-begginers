interface IsSized {
    length: number;
}

class DataBox<Type extends IsSized> {
    content: Type;

    constructor(input: Type) {
        this.content = input;
    }

    print() {
        console.log(this.content);
    }
}

const d1 = new DataBox('Hello');
d1.print();
// const d2 = new DataBox(2);
const d3 = new DataBox([1, 2, 3]);
d3.print();
