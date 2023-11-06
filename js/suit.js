var tanya = true;
while (tanya) {
    //nama player
    var p = prompt('Masukkan Nama Player : ');
    console.log('Nama  : ' + p);

    //Menangkap pilihan Player
    var p1 = prompt('Pilih : Gajah, Orang, Semut');
    console.log('Pilihan Player  : ' + p1);

    //Menangkap pilihan computer && Bilangan Random
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'Gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'Orang';
    } else {
        comp = 'Semut';
    }
    console.log('Pilihan Komputer: ' + comp);


    //menentukan rules

    var hasil = ''
    if (p1 == comp) {
        hasil = 'Seri';
    } else if (p1 == 'Gajah') {
        // if (comp == 'orang') {
        //     hasil = 'Menang';
        // } else {
        //     hasil = 'Kalah';
        // }
        hasil = (comp == 'Orang') ? 'Menang' : 'Kalah';

    } else if (p1 == 'Orang') {
        // if (comp == ' Gajah') {
        //     hasil = 'Kalah';
        // } else {
        //     hasil = 'Menang';
        // }

        hasil = (comp == 'Gajah') ? 'Kalah' : 'Menang';
    } else if (p1 == 'Semut') {
        // if (comp == 'Gajah') {
        //     hasil = ' Menang';
        // } else {
        //     hasil = ' Kalah ';
        // }

        hasil = (comp == 'Orang') ? 'Kalah' : 'Menang';

    } else {
        hasil = 'Masukkan Pilihan Sesuai';
    }


    //Tampilkan Hasilnya
    console.log('Kamu : ' + hasil);
    alert('Kamu : ' + hasil);



    tanya = confirm('Coba Lagi?');


}


alert('Terima Kasih Telah Bermain');
