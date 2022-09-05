// The Color Interface (abstaction)
interface ColorInterface {
    color(): void
}

// The Shape Interface (abstaction)
interface Shape {
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
class Circle implements Shape {
    private implementer: ColorInterface

    constructor(implementer: ColorInterface) {
        this.implementer = implementer
    }

    draw(): void {
        console.log('Cirle', this.implementer.color())
    }
}

class Square implements Shape {
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

const shapes: Shape[] = [circle, square];

shapes.forEach((shape: Shape) => {
    shape.draw()
})