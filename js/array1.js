// // // // var al = function (nama) {
// // // //     alert('Hello ' + nama)
// // // //     console.log('Hello ' + nama)
// // // // }

// // // // al(prompt('Masukkan Nama'));

// // // // //1.Manipulasi Array
// // // // // var arr = ["a", 1, true];
// // // // // console.log(arr[1]);

// // // // //

// // // // // var arr = [];
// // // // // arr[0] = "aldo";
// // // // // arr[1] = 1;
// // // // // arr[2] = true;
// // // // // console.log(arr[1])

// // // // //2.Mengahapus Array
// // // // // var arr = ["aldo", "wiranata",satu];
// // // // // arr[1] = undefined;
// // // // // console.log(arr);

// // // // //3.Menampilkan isi Array
// // // // // var arr = ["Aldo", "Wiranata", "farel", "Dody"];

// // // // // for (var i = 0; i < arr.length; i++) {
// // // // //     console.log('Mahasiswa ke ' + (i + 1) + " : " + arr[i])
// // // // // }

// // // // // //Method Pada array

// // // // // 1.Join
// // // // var arr = ['aldo', 'Wiranata', 'kami'];
// // // // // console.log(arr.join(' - '));

// // // // //2.push
// // // // // arr.push('Doddy', 'Aldo');

// // // // //3.pop
// // // // // arr.pop();
// // // // // arr.pop();

// // // // //4 unshift &shift
// // // // // arr.unshift('Doddy')
// // // // // arr.shift();

// // // // console.log(arr.join(' - '));

// // // //5.Splice
// // // // var arr = ['Aldo', 'wita', ' Wiranata'];

// // // // arr.splice(0, 1, 'Doddy', 'Fitri');
// // // // console.log(arr.join(' - '));

// // // //6.Slice

// // // var arr = ['Aldo', 'Wiranata', '16', 'Gmail', 'Com'];

// // // var arr2 = arr.slice(1, 4);
// // // console.log(arr.join(' - '));
// // // console.log(arr2.join(' - '));

// // //6.Foreach

// // var angka = [1, 2, 3, 4, 5,];
// // var nama = ['Aldo', 'Wiranata', '16', 'Gmail', 'Com'];



// // nama.forEach(function (e, i) {
// //     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);

// // })

// //7.map
// // var angka  = [1, 2, 3, 4, 5, 6, 7, 8];

// // var n = angka.map(function (e) {
// //     return e * 3;
// // });

// // console.log(n.join(' - '));

// //8.sort //Mengurutkan
// var angka = [1, 20, 4, 3, 5, 6, 7, 8];

// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(' - '))

// //9.Filter
// var angka = [1, 20, 4, 3, 5, 6, 7, 8];
// var angka2 = angka.filter(function (x) {
//     return x > 1;
// });
// console.log(angka2.join('-'));

//9.Find//tidak bisa menggunakan join karena bukan array
var angka = [1, 20, 4, 3, 5, 6, 7, 8];
var angka2 = angka.find(function (x) {
    return x > 4;
});
console.log(angka2);

