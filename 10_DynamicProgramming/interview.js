let obj = {
    firstName: 'Naresh',
    lastName: 'kumar',
    printName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

obj.printName.apply({ firstName: 'Bhasf', lastName: 'someh' })
