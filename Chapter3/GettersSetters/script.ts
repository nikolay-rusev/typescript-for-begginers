class Point2D {
    protected _xPos: number;
    protected _yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }

    public get xPos(): number {
        return this._xPos;
    }

    public set xPos(xPosInput) {
        this._xPos = xPosInput;
    }

    public get yPos(): number {
        return this._yPos;
    }

    public set yPos(yPosInput) {
        this._yPos = yPosInput;
    }
}

class Point3D extends Point2D {
    protected _zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;
    }

    public get zPos(): number {
        return this._zPos;
    }

    public set zPos(zPosInput: number) {
        this._zPos = zPosInput;
    }
}

const p1 = new Point2D(0, 0);
console.log(p1);
console.log(p1.xPos);

const p2 = new Point3D(0, 0, 0);
console.log(p2);
console.log(p2.zPos);
