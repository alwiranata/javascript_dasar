
//kebawah
var n = prompt('Masukkan Nilai : ');

var s = '';
for (var i = n; i > 0; i--) {
    for (var bi = 0; bi < i; bi++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

//kebawah dan bintang sama
var n = prompt('Masukkan Nilai : ');
var b = prompt('Masukkan Jumlah Bintang: ');
var s = '';
for (var i = 0; i < n; i++) {
    for (var bi = 0; bi < b; bi++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

//keatas
var n = prompt('Masukkan Nilai : ');

var s = '';
for (var i = 0; i < n; i++) {
    for (var bi = 0; bi < i; bi++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

