// Decorator Concept Sample Code

interface ComponentInterface {
    print(): string
}

class Component implements ComponentInterface {
    print(): string {
        return 'Component print'
    }
}

class Decorator implements ComponentInterface {
    private object: ComponentInterface

    constructor(object: ComponentInterface) {
        this.object = object
    }

    print(): string {
        return `Decorator print(${this.object.print()})`
    }
}

// The Client
const component = new Component()
console.log(component.print())

// The component can be decorated
const decoratedComponent = new Decorator(component)
console.log(decoratedComponent.print())

// The decorated component can be decorated again
const doubleDecoratedComponent = new Decorator(decoratedComponent)
console.log(doubleDecoratedComponent.print())