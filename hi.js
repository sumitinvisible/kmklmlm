function Person(name) {
 this.name = name;
}
Person.prototype.prefixName = function (arr) {
 return arr.map(function (character) {
 return this.name + character;
 }, this);
};

/* using arrow function
we will do the above code
*/

function Person(name) {
 this.name = name;
}
Person.prototype.prefixName = function (arr) {
 return arr.map((character)=> {
 return this.name + character;
 }, this);
};
