//function Declaration

function tampilPesan(nama) {
    alert('Hello ' + nama);
    console.log('Hello ' + nama);
}
var nama = tampilPesan(prompt('Masukkan Nama :'));


//function Expretion
var tampilMessage = function (Message) {
    alert('Hello ' + Message);
    console.log('Hello ' + Message);
}


tampilMessage(prompt('Masukkan Pesan : '));