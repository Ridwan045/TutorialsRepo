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

  /*Dog.prototype.eat = function() {
    console.log('Num num num');
  };*/
  Dog.prototype = {      //This is how you use prototype to create an object
    constructor: Dog,
    numEyes: 2,           //insted of Dog.prototype.numEyes
    eat: function() {
        console.log('Num num num');
    },
    drink: function() {
        return 'gulp gulp';
    }
  };
  
  let myDog = new Dog('alfread', 20);
  myDog instanceof Dog;

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
  console.log(myDog.eat());