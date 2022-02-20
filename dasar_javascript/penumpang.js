var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0){
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        console.log('penumpang dengan nama '+namaPenumpang+' telah ditambahkan di kursi ke 1');
        // kembalikan isi array & keluar dari function
        return penumpang;
    }else{
        // telusuri seluruh kursi dari awal
        for(var i = 0;i<penumpang.length;i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                console.log('penumpang dengan nama '+namaPenumpang+' telah ditambahkan di kursi ke '+(i+1));
                // kembalikan isi array keluar dari function
                return penumpang;
            }else if(penumpang[i] == namaPenumpang){
                // jika sudah ada nama yang sama
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang+' sudah ada!');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }else if(i == penumpang.length-1){
                // jika seluruh kursi telah terisi
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                console.log('penumpang dengan nama '+namaPenumpang+' telah ditambahkan di kursi ke '+(i+1));
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0){
        // tampilkan pesan bahwa angkot kosong, dan
        // tidak mungkin ada penumpang turun
        console.log('angkot kosong!');
        // kembalikan isi array & keluar dari function
        return penumpang;
    }else{
        // telusuri seluruh kursi dari awal
        for(var i = 0;i<penumpang.length;i++){
            // jika nama penumpang sesuai
            // console.log(penumpang.length);
            if(penumpang[i] == namaPenumpang){
                // hapus penumpang dengan mengubah namanya, menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array & keluar daru function
                break;
            }
            // jika tidak ada nama yang sesuai
            else if(i == penumpang.length-1){
                // tampilkan pesan kesalahan
                console.log(namaPenumpang+' tidak ada di dalam angkot');
                // kembalikan isi array & keluar dari function
            }
        }
    }
    return penumpang;
}