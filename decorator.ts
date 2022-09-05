// Decorator Concept Sample Code

interface ComponentInterface {
    method(): string
}

class Component implements ComponentInterface {
    method(): string {
        return 'Component Method'
    }
}

class Decorator implements ComponentInterface {
    private object: ComponentInterface

    constructor(object: ComponentInterface) {
        this.object = object
    }

    method(): string {
        return `Decorator Method(${this.object.method()})`
    }
}

// The Client
const component = new Component()
console.log(component.method())

// The component can be decorated
const decoratedComponent = new Decorator(component)
console.log(decoratedComponent.method())

// The decorated component can be decorated again
const doubleDecoratedComponent = new Decorator(decoratedComponent)
console.log(doubleDecoratedComponent.method())