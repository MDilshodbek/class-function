class Person {
  constructor(name, surname, city) {
    this.name = name;
    this.surname = surname;
    this.city = city;
  }
  fullName(text = "Text is not specified") {
    return `${this.name} ${this.surname} ${text}`;
  }
}
let user1 = new Person("Dilshodbek", "Makhmudov", "Daejon");
console.log(user1.fullName("Front End Developer"));
