class Point2D {
    _xPos: number;
    _yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }
}

// function printCoordinates1(point: Point2D) {
//     console.log(point._xPos);
//     console.log(point._yPos);
// }

// function printCoordinates2(xPos: number, yPos: number) {
//     console.log(xPos);
//     console.log(yPos);
// }

function printCoordinates(point: Point2D): void;
function printCoordinates(xPos: number, yPos: number): void;

function printCoordinates(arg1: unknown, arg2?: unknown) {
    if (typeof arg1 === 'object') {
        console.log((arg1 as Point2D)._xPos);
        console.log((arg1 as Point2D)._yPos);
    } else {
        console.log(arg1);
        console.log(arg2);
    }
}

const p = new Point2D(2, 2);

printCoordinates(p);
printCoordinates(1, 1);
