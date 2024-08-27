class Person{
    name: string = ''; //default 
    age:number = 0; // default

    public greetings(){
        return this.name + "..." + this.age;
    }
}

const person:Person = new Person();
person.name = "Pranay Ramteke";
person.age = 22;
console.log(person)