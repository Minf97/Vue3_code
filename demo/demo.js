let person = {
    name: 'demo',
    get demo1() {
        return this.name + "123"
    },
    demo2() {
        return this.name + "456"
    }
}

console.log(person.demo1);
console.log(person.demo2);
console.log(person.demo2());
console.log(person);