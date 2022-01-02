export class Point2D {
    protected _xPos: number;
    protected _yPos: number;

    public static NUM_DIMENSIONS: number = 2;

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

export class Point3D extends Point2D {
    protected _zPos: number;

    public static override NUM_DIMENSIONS: number = 3;

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
