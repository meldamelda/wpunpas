var tanya = confirm('Apakah Anda sudah siap?');
while(tanya){
    // jumlah kesempatan
    var nyawa = 3;
    var hasil = '';
    var angka = 0;
    var comp = Math.floor(Math.random()*10+1);
    console.log(comp);
    while(nyawa > 0){
        var angka = prompt('Masukkan angka dari 1 sampai 10 : (Kesempatan menebak : '+nyawa+')');
        if(angka == comp){
            hasil = 'BENAR';
            alert('Angka yang anda masukkan '+hasil+'! \nAngka yang dicari adalah : '+comp);
            break;
        }else{
            hasil = (angka > comp) ? 'TERLALU TINGGI' : 'TERLALU RENDAH';
            nyawa--;
            var chance = (nyawa!= 0)?'sisa '+nyawa:'habis';
            alert('Angka yang anda masukkan '+hasil+'! \nKesempatan Anda '+ chance); 
        }

        if(nyawa == 0){
            alert('Anda gagal!\nAngka yang dicari adalah : '+comp);
        }
    }
    
    // konfirmasi ingin mengulang
    tanya = confirm('Ingin mengulang permainan?');
}