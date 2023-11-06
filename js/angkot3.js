var nama = prompt('Input Your Name : ');
console.log('Welcome ' + nama);
alert('Welcome ' + nama);

var jmlAngkot = prompt('Input Jumlah');
var beroperasi = prompt('Input angkot Beroperasi');
var l = ' Sedang Lembur';
var a = 'Angkot No.';
var on = 'Sedang Beroperasi';
var off = 'Sedang Dibengkel';

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= beroperasi && noAngkot !== 5) {
        console.log(a + ' ' + noAngkot + ' ' + on);
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log(a + ' ' + noAngkot + ' ' + l);
    } else {
        console.log(a + ' ' + noAngkot + ' ' + off);
    }
}