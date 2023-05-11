// let combi = [];
// let char = ["a","b","c"];
// // let prefix = "";

// combi.push (prefix + char[2]);
// console.log(combi);


const obj = {
    name: "Alice",
    hello: function() {
      console.log(`Hello, my name is ${this.name}`);
    },
    helloArrow: () => {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
obj.hello();
obj.helloArrow();
  

  