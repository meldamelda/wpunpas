// membuat object
// object literal
var mhs = {
    nama : "Melda Yanti",
    umur : 25,
    kota : "Banjarmasin" 
};

// function declaration
function buatObjectMhs(nama,umur,kota){
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.kota = kota;
    return mhs;
}

// constructor
function Mahasiswa(nama, umur, kota){
    this.nama = nama;
    this.umur = umur;
    this.kota = kota;
}

var mhs1 = new Mahasiswa("Laily", 25, "Banjarmasin");