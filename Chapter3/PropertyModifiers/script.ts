interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string; // optional property, readonly property
}

const p1: Point2D = { xPos: 0, yPos: 0, name: 'centerPoint' };
console.log(p1);
