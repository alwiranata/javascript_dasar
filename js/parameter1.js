var nama = prompt('Your Name : ');
console.log('Hello ' + nama);
alert('Hello ' + nama);

function tambah(a, b,) {
    return a + b;
}
function tambah1(c, d,) {
    return c + d;
}

function kali(a, b) {
    return a * b;
}

var a = parseInt(prompt('Angka a :'));
var b = parseInt(prompt('Angka b :'));
var c = parseInt(prompt('Angka c'));
var d = parseInt(prompt('Angka d'));

var hasil = kali(tambah(a, b), tambah1(c, d))
console.log(hasil);