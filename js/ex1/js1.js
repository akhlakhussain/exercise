class User {
  constructor() {
    this.name = prompt('Your name');
    this.age = Number(prompt('Your age'));
  }

  compareAge(user2) {
    if (this.age > user2.age) return `${this.name} is older than ${user2.name}`;
    if (this.age < user2.age) return `${user2.name} is older than ${this.name}`;
    return 'same age';
  }
}
