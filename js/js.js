var nama = prompt('Input Your Name : ');
console.log('Hello ' + nama);
alert('Hello ' + nama);

var i = parseInt(prompt('Masukkan Nilai : '));
if (i % 2 == 0) {
    var genap = true;
} else {
    console.log(i + ' Adalah Bilagan Ganjil');
}

if (genap) {
    console.log(i + ' adalah Bilangan Genap');
}