let car = {
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
  
  console.log(car.fresh());
  
  function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.big = true;
    this.strongDog = function() {
      if(this.big) {
        return 'WOOF WOOF'
      } else {
        return 'woof woof'
      };
    };
  };
  Dog.prototype.numEyes = 2;
  
  let myDog = new Dog('alfread', 20);
  myDog instanceof Dog;
  console.log(myDog.numEyes);