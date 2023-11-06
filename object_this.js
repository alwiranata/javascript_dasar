//this
// var a = 10;
// console.log(this.a);

// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();

// var nama = function (n) {
//     console.log('Hello ' + n);
//     return n;
// }
// nama(prompt('Input Nama'));

//Membuat Object
// //cara 1-Function Declaration
// function halo(name) {
//     console.log('Hello ' + name);
// }
// var n = prompt('Input Nama Baru');
// halo(n);

// cara 2 - Object Literal
// var obj = { a: 10 };
// obj.halo = function () {
//     console.log(this);
//     console.log('Hello');
// }
// obj.halo();
//this Mengembalikan Object yang bersangkutan


// cara 3 -constructor
function Halo() {
    console.log(this);
    console.log('Hello');
}

var obj1 = new Halo();
var obj2 = new Halo();

//this mengembalikan object yang baru dibuat


