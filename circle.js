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
function circle(radius){
  this.radius = prompt("what is the radius?");
  this.area = function (){
    return Math.PI * this.radius * this.radius;
  }
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
///////on top exaple for area
