class SomeClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    printName() {
        console.log('Name is', this.firstName + this.lastName);
    }
}

const getName = new SomeClass('Naresh', 'Kumar');

console.log(getName);
getName.printName();