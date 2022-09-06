// The Color Interface (abstaction)
interface ColorInterface {
    color(): void
}

// The Shape Interface (abstaction)
interface ShapeInterface {
    draw(): void
}

// implementetion
class Blue implements ColorInterface {
    color(): string {
        return 'Blue';
    }
}

class Red implements ColorInterface {
    color(): string {
        return 'Red';
    }
}

// implementetion
class Circle implements ShapeInterface {
    private implementer: ColorInterface

    constructor(implementer: ColorInterface) {
        this.implementer = implementer
    }

    draw(): void {
        console.log('Cirle', this.implementer.color())
    }
}

class Square implements ShapeInterface {
    private implementer: ColorInterface

    constructor(implementer: ColorInterface) {
        this.implementer = implementer
    }

    draw(): void {
        console.log('Square', this.implementer.color())
    }
}

const circle = new Circle(new Blue())

const square = new Square(new Red())

const shapes: ShapeInterface[] = [circle, square];

shapes.forEach((shape: ShapeInterface) => {
    shape.draw()
})