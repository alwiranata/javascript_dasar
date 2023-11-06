var juragan = function (n) {
    console.log('Hello ' + n);
}

juragan(prompt("Masukkan Nama : "));

//Membuat Object Angkot

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }



    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('Angkot masih kosong');
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;

            }
        }
    }

}
var sopir1 = prompt('Masukkan Nama Supir : ')
var angkot1 = new Angkot(sopir1, ['Pekanbaru', 'Dumai'], [], 0);

var sopir2 = prompt('Masukkan Nama Supir : ')
var angkot2 = new Angkot(sopir2, ['Pekanbaru', 'Dumai'], [], 0);



