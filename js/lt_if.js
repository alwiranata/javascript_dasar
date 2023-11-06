var nama = prompt('Masukkan Nama: ');
console.log('Hello ' + nama);
alert('Hello ' + nama);

var jmlAngkot = prompt('Jumlah Angkot:');
var angkotBeroperasi = prompt('Jumlah Beroperasi');
var on = 'Beroperasi';
var off = 'Sedang Ngopi';
var angkot = 'Angkot No.'

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= angkotBeroperasi) {
        console.log(angkot + noAngkot + ' ' + on);
    } else {
        console.log(angkot + noAngkot + ' ' + off);
    }
}

