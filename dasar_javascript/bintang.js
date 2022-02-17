var s = '', bar = 3;
for(i=1;i<=bar;i++){
    // spasi
    for(j=1;j<=bar-i;j++){
        s+='_';
    }
    // bintang
    for(k=0;k<2*i-1;k++){
        s+='*';
    }
    s+='\n';
}
console.log(s);