//var-let-const.js

// "use strict"

// var callbacks = []
// for (var i = 0; i < 10; i++) {
//   callbacks.push(function() { console.log(i) })
// }

// callbacks[2]()
//-----------------------------------------------------
//const-complex.js
// const account = {
//   username: "marijn",
//   password: "xyzzy"
// }
// var o = Object.freeze(account);
// account.password = "s3cret"

// console.log(account.password)
//-------------------------------------------------------
//03. default-parameters
// var myRide = {
//   make: "Ford",
//   model: "Model T",
//   year: 1959,
//   location: "the Office",
//   driveTo: function ( place = "Home" ) {
//     this.location = place
//   }
// }

// myRide.driveTo("Walmart")
// myRide.location // "Walmart"

// // vs...

// myRide.driveTo()
// myRide.location // "Home"
//------------------------------------------------------
//4. default-parameters

// const greeting = function(greeting = "Hello" ,firstName = "Benjamin", lastName = "Judas"){
//   return [greeting, firstName, lastName];
// };

//5. deconstruction -------------------------------------
// function detectCollision(objects, point) {
//   for (let i = 0; i < objects.length; i++) {
//     let object = objects[i];
//     var {x:ox, y:oy, width:ow, height:oh} = object;
//     var {x:px, y:py} = point;
//     if (px >= ox && px <= oh + ow &&
//         py >= oy && py <= oy + oh) {
//       return object
//     }
//   }
// }

// const myObjects = [
//   {x:  10, y: 20, width: 30, height: 30},
//   {x: -40, y: 20, width: 30, height: 30},
//   {x:   0, y:  0, width: 10, height:  5}
// ]

// console.log(detectCollision(myObjects, {x: 4, y: 2}));

// //6--------------------------------------------------------
// function car(make, model, options){
//   return {// your code here
//     make,
//     model,
//     drive() {
//       console.log("Vroom");
//     }
//   }
// }

// let auto = car("honda","civic")
// // returns {make: "honda", model: "civic", drive: Function}
// auto.drive();
// // logs "vroom" to the console


//7.-------------------------------------------------------
//???

//8--------------------------------------------------------
// let message = let message = `There are ${people.length} people on the ${teamName} team.
// 	Thier names are ${people[0].name}, ${people[1].name}, ${people[2].name} and ${people[3].name}.`

