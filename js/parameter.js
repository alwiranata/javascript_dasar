var name = prompt('Masukkan Nama : ');
console.log('Hello ' + name);
alert('Hello ' + name);


function tambah(a, b) {
    return a + b;
}

var a = parseInt(prompt('angka A :'));
var b = parseInt(prompt('angka B :'));

var hasil = (tambah(a * b, b * b));
console.log('A + B = ' + hasil);