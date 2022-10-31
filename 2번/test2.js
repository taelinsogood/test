function main(num) {
    this.num = num;
  }
  var methods = {
    add: function (x) {
      this.num += x;
      return this;
    },
    subtract: function (x) {
      this.num -= x;
      return this;
    },
  };
  
  main.prototype = Object.create(methods);
  main.prototype.constructor = main;
  
  var calc = new main(0).add(4).add(5).subtract(3);
  console.log(calc.num);