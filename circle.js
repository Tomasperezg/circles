// function circle(radius)
// {
//     this.radius = +prompt("what is the radius?");
//   // area method
//     this.area = function ()
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     // this.perimeter = function ()
//     // {
//     //     return 2*Math.PI*this.radius;
//     // };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// // console.log('perimeter =', c.perimeter().toFixed(2));

//////////on top exaple for area and perimeter
// function circle(radius){
//   this.radius = prompt("what is the radius?");
//   this.area = function (){
//     return Math.PI * this.radius * this.radius;
//   }
// }
// var c = new circle(3);
// document.write('Area =', c.area().toFixed(2));
// function create(){
//   var circle = document.getElementById("myCanvas");
//
// }


////////////////////////////////////
function userInput() {
	//get radius from user...call userInput by using "onclick" attribute on input tag
	let radius = prompt("Enter a radius");
	//call function to make circle and pass radius user chose
	buildCircle(radius);


function buildCircle(radius) {
	//create a div that will become the circle
	let circle = document.createElement('div');
	//calculate the diameter aka the height and width
	let diameter = radius*2;
	//give the circle an id so previously written css will take effect
	circle.setAttribute('id', 'circle');

	//set height and width of circle
	circle.style.height = `${diameter}px`;
	circle.style.width = `${diameter}px`;

	//target space you want to put the circle
	let drawSpace = document.getElementById('drawSpace');
	//append circle to target space
	drawSpace.appendChild(circle);
}

function userInput() {
	//get radius from user...call userInput by using "onclick" attribute on input tag
	let radius = prompt("Enter a radius");
	//call function to make circle and pass radius user chose
	buildCircle(radius);
}
}
