var penumpang = ['aldo'];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika Angkot Kosong
    if (penumpang.length == 0) {
        //Tambah Penumpang di awal array
        penumpang.push(namaPenumpang);
        //Kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        //Telusuri Kursi Di awal
        for (var i = 0; i < penumpang.length; i++) {
            //Jika Ada Kursi Kosong
            if (penumpang[i] == undefined) {
                //Tambah Penumpang di Kursi tersebut
                penumpang[i] = namaPenumpang;
                //kembalikan isi array  dan keluar dari function
                return penumpang;


            }
            //jika nama penumpang sama
            else if (penumpang[i] == namaPenumpang) {
                //tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' nama sudah ada');
                //kembalikan isi array  dan keluar dari function
                return penumpang;
            }

            //jika kursi terisi semua
            else if (i == penumpang.length - 1) {
                //tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array  dan keluar dari function
                return penumpang;
            }


        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Penumpang Kosong');

    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined

            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + 'Tidak ada didalam bus')

            }

        }
    }
    return penumpang;
}