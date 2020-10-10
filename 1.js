
function hitung(){
    let harga = document.getElementById("inputHarga");
    let jumlah = document.getElementById("inputJumlah");

    let convertedHarga = parseInt(harga.value) || 0;
    let convertedJumlah = parseInt(jumlah.value) || 0;
    function cari(x, y) {
        if (y <= 10 && y > 5) {
            x -= x * 0.5 ;
        }
        else if (y > 10) {
            x -= 500 ;
        }
        return x * y;
    }
    const bayar = cari(convertedHarga, convertedJumlah);
    const totalHarga = convertedHarga * convertedJumlah;
    const potongan = totalHarga - bayar;
    
    document.getElementById("totalHarga").innerHTML = totalHarga;
    document.getElementById("potongan").innerHTML = potongan;
    document.getElementById("bayar").innerHTML = bayar;
}

