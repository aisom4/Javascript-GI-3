//Question Number 1
// EASY: Write a function that would allow you to do this:
// console.log(run()); // prints "Today's exercise: running"
//
// console.log(swim()); // prints "Today's exercise: swimming"

function exercise(activity) {
  return function () {
    return "Today's exercise: " + activity;
  };
}

var run = exercise("running");
console.log(run());
var swim = exercise("swimming");
console.log(swim());

// function exercise(activity) {
//   console.log("Today's exercise: " + activity);
// }

// exercise("running");
//=====================================================================================

//Question 2
// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));

function sharePizza(x, cutPizzaSlices = 8) {
  //setting up two parameters -making one equal 8 so the number of slices stays constant
  return (
    "Each person will get " +
    (cutPizzaSlices / x).toFixed(2) +
    " pieces of pizza. "
  ); //.toFixed(2) makes the decimal stop at two place instead of repeating
}
// var sharePizza = cutPizzaSlices(8); EVERY TIME I USE THIS IT CAUSES ERRORS

console.log(sharePizza(2)); //passing the number as an argument
console.log(sharePizza(3));

//===================================================================================

// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)
//that cannot be accessed directly. The object should have at least two properties: name and ssn.
//Only the name property should be accessible, and it should be called through a public function.
//The ssn property should not be accessible at all.
// Creating private objects and private properties helps you control who has access to what data
//and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
// You can use 'getName' or other get methods to access data that people might need. For example,
// people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn

//===========================
// function personInfo(name, ssn) {
//   //a function that takes two parameters
//   const pii = { name: name, ssn: ssn }; //created an object called pii

//   return {
//     getName: function () {                 //creating a closure where only the name will be returned
//       return pii.name;
//     },
//   };
// }
// //creates a closure only including the name from the pii object
// var information = personInfo("John Smith", "123-45-678");
// console.log(information.getName()); //information is accessible outside of closure.
// console.log(information.ssn); //cannot access this information outside of the created closure.

//VERY HARD============================================================
function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
}

function exercise() {
  console.log(subject.name + "hates running!");
}

class Programmer extends Person {

  constructor(name,job,age, languages){
    super(name, job, age);
  this.languages= languages;
  this.busy= true;
}
completeTask(){
  this.busy = false;
  console.log("The programmer has free time.")
    
  acceptNewTask(){
    this.busy = true;
    console.log("The programmer is busy.")
  }
}

offerNewTask(){
  if(this.busy){
    console.log(this.name + " cannot accept new tasks.")
  } else{
    console.log(this.name + " can accept new tasks.")
  }
}

learnLanguage (newLanguage){
  this.languages.push(newLanguage);
  console.log(this.name + " is now learning " + newLanguage + ".");
}

listLanguages(){
  console.log(this.name + " knows the following languages " + this.languages.join(", ") + ".");
}

jobDuration(){
  console.log("I have been programming in " + this.langues[0] + " for " + (this.age/2) + " years.");
  this.exercise();
}

// this.fetchJob = function () {
//   console.log(subject.name + " is a " + subject.job + "!");
// };


var subject = new Person("Aishah ", "Apprentice", 23);
var subject2 = new Programmer("Aishah Isom", "Apprentice", 23, ["HTML", "CSS", "Javascript"]);
subject.exercise();
subject.fetchJob();


subject2.exercise();
subject2.fetchJob();
subject2.learnLanguage("Python");
subject2.listLanguages();
subject2.completeTask();
subject2.offerNewTask();
subject2.acceptNewTask();
subject2.offerNewTask();


