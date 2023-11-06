var item = prompt('Masukkan Nama Makanan / Minuman : \n (cth : nasi, daging, pizza, susu)');

switch (item) {
    case 'nasi':
    case 'daging':
        alert('Anda Memilih Makanan/Minuman Sehat');
        break;
    case 'pizza':
        alert('Anda Memilih Makanan/Minuman tidak sehat');
        break;
    default:
        alert('Nama Makanan/Minuman tidak Sesuai');
        break;

}