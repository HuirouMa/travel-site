class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }
    
    greet() {
        console.log("Yo, this is " + this.name + " and my favcolor is " + this.favoriteColor + ".");
    }
}

//exports.exampleProperty = "Super magical example value";
//exports.exampleFunction = function() {
//    alert("this is an example");
//}

//module.exports = Person;
export default Person;