// var nama = function (n) {
//     console.log('Hello ' + n);
// }

// nama(prompt('Masukkan Nama : '));

// //membuat object
// var mhs = {
//     nama: "Aldo Wiranata",
//     umur: 17,
//     ips: [3.00, 2.50, 3.20],
//     alamat: {
//         jalan: "Jl.Kesuma no 24",
//         kota: " Pekanbaru",
//         provinsi: " Riau",

//     },
// };

// //object literal
var mhs1 = {
    nama: "ALDO WIRANATA",
    nrp: "0895634889510",
    email: "aldowiranata16@gmail.com",
    jurusan: "IT",

}

var mhs2 = {
    nama: "ALWI",
    nrp: "0895634889510",
    email: "aldowiranata16@gmail.com",
    jurusan: "IT",

}

//Function Declaration

function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}
var n = prompt("Input Nama Mahasiswa : ");
var nrp = parseInt(prompt("Input NRP : "));
var email = prompt("Input Email : ");
var jur = prompt("Input Jurusan : ");

var mhs3 = console.log(buatObjectMahasiswa(n, nrp, email, jur));

var mhs4 = console.log(buatObjectMahasiswa('aldo', '02301391', 'aldo@gmail.com', 'TI'));

//Function Constructor

function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs5 = new Mahasiswa('aldo', '02301391', 'aldo@gmail.com', 'TI');