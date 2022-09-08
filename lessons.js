/*let car = {
    name: 'Bugati',
    model: 'Convertible',
    color: 'yellow',
    year: 2020,
    window: false,
    wheele: 4,
    fresh: function() {
      if (this.color === 'Black') {
  
        this.window = true;
  
        return 'That ' + this.name + ' is fresh';
  
      } else {
  
        console.log(this.year = 2023);
  
        return "Don't want that color";
      }
      
    } 
  };
  
  console.log(car.fresh());*/
  
  function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.big = false;
    this.strongDog = function() {
      if(this.big) {
        return 'WOOF WOOF'
      } else {
        return 'woof woof'
      };
    };
  };

  function Cat(name) {             // cat constructor
    this.name = name;
  };

Cat.prototype = {
  constructor: Cat,
}
  /*Dog.prototype.eat = function() {
    console.log('Num num num');
  };*/
  Dog.prototype = {      //This is how you use prototype to create an object
    constructor: Dog,
    numEyes: 2,           //insted of Dog.prototype.numEyes
  };

  function Animal() {};

  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log('Num num num');
  },
  drink: function() {
      return 'gulp gulp';
    
  }
}

//let myDog = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);
  let myDog = new Dog('alfread', 20);

  let myCat = new Cat('kitty');

  console.log(myDog.drink())
  console.log(myCat.eat())
  myDog instanceof Dog;
  console.log(typeof Dog.prototype);
  console.log(Dog.prototype.isPrototypeOf(myDog));
  Object.prototype.isPrototypeOf(Dog.prototype);         // the object is a supertype to dog.prototype and mydog

  let ownProps = [];
  let prototypeProps = [];
  for (let property in myDog) {
    if(myDog.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    };
  };
  console.log(ownProps);
  console.log(prototypeProps)
  