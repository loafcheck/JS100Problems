var obj1 = {
    name: "seo",
    print: function() {
      console.log(this.name);   // this가 참조되는 위치
    }
}
var obj2 = { name: "jeong", print: obj1.print };
var name = "kuk";
var print = obj1.print;
print();           // kuk
obj1.print();      // jeong
obj2.print();      // seo