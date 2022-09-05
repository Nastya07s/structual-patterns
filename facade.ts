// The Facade pattern concept

class SubSystemClassGet {
    // A hypothetically complicated class
    get(): string {
        return 'A'
    }
}

class SubSystemClassChange {
    // A hypothetically complicated class
    change(value: string): string {
        return value
    }
}

class SubSystemClassPrint {
    // A hypothetically complicated class
    print(value: string) {
        console.log(value)
    }
}

class Facade {
    read() {
        const value = new SubSystemClassGet().get()
        new SubSystemClassPrint().print(value)
    }
}

// The Client
console.log('Calling potentially complicated subsystems directly');
const value = new SubSystemClassGet().get()
new SubSystemClassPrint().print(value)

// or

console.log('\nUsing the simplified facade instead')
const facade = new Facade()
facade.read();