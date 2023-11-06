var nama = prompt('Masukkan Nama :');
console.log('Hello ' + nama);
alert('Hello ' + nama);

//global_scope/window scope



var a = parseInt(prompt('Masukkan Nilai a : '));


function tes(a) {
    console.log(a);

}

tes(a);
console.log(a);

