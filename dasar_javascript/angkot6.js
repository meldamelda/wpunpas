var jmlAngkot = 10, angkotBeroperasi = 6, i = 1;
for(i;i<=jmlAngkot;i++){
    if(i<=angkotBeroperasi && i !== 5){
        console.log("Angkot No. "+i+" beroperasi dengan baik");
    }else if(i === 5 || i === 8 || i === 10){
        console.log("Angkot No. "+i+" sedang lembur");
    }else{
        console.log("Angkot No. "+i+" sedang tidak beroperasi");
    }
}