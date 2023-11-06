var nama = prompt('Masukkan Nama : ');
console.log('Hello ' + nama);
alert('Hello ' + nama);



function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);


}
var n = prompt('Masukkan Angka : ')
var coba = faktorial(n);
console.log(coba);


