var nama = prompt('Masukkan Nama: ');
alert('Hello ' + nama);
console.log('Hello ' + nama);

var angka = prompt('Masukkan Angka : ');
if (angka % 2 == 0) {
    console.log(angka + ' adalah Bilangan Genap');
} else if (angka % 2 == 1) {
    console.log(angka + ' adalah Bilagan Ganjil');
} else {
    console.log('Nilai Yang di  Input Salah!');
    inputUlang = confirm('Input Ulang Bilangan?');
}
