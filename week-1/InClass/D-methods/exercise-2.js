/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function(newAddress) {
        this.currentAddress =newAddress ;
        return this.currentAddress;
    },
    celebrateBirthday: function() {
        this.age = this.age + 1;
        return this.age;
    }
};
person.changeAddress("Barcelona");

/////////////////////////////
console.log(person);
// console.log(person.celebrateBirthday());
// console.log(person.changeAddress);
// console.log(person.age);
console.log(person.currentAddress);