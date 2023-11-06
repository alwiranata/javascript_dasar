var nama = prompt('Masukkan Nama : ');
console.log('Juragan ' + nama);
alert('Welcome Juragan' + ' ' + nama);

var jmlAngkot = prompt('Jumlah Angkot : ');
var angkotBeroperasi = prompt('Angkot Beroperasi : ');
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}

for (noAngkot - angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('angkot ' + noAngkot + ' sedang perbaikan');
}