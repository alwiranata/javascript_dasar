var nama = prompt('Masukkan Nama : ');
alert('Hello ' + nama);
console.log('Hello ' + nama)

function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 4);
console.log(coba);
