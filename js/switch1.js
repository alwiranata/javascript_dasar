var nama = prompt('Masukkan Nama : ');
alert('Hello : ' + nama);
console.log('Hello : ' + nama);

var angka = parseInt(prompt('Masukkan Angka : '));
switch (angka) {
    case 1:
        alert('Anda Memasukkan Angka 1');
        break;
    case 2:
        alert('Anda Memasukkan Angka 2');
        break;
    case 3:
        alert('Anda Memasukkan Angka 3');
        break;
    default:
        alert('Angka Yang anda Masukkan salah');
        break;
}

var nilai = prompt('Masukkan Nilai : ');

switch (nilai) {
    case '1':
        alert('Anda Memasukkan nilaii 1');
        break;
    case '2':
        alert('Anda Memasukkan niali 2');
        break;
    case '3':
        alert('Anda Memasukkan nilai 3');
        break;
    default:
        alert('Angka Yang Anda input salah');
        break;



}