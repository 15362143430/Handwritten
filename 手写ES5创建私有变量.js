let person = (function() {
    let age = 12;
    return {
        getAge: function() {
            return age;
        },
        name: 'sadasd'
    }
})()

console.log(person.age)
console.log(person.getAge())

function person() {
    let age = 12;
    this.name = 'sdsad';
    this.getAge = function() {
        return age;
    }
}

console.log(person.age)
console.log(person.getAge())