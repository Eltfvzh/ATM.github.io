let saldo = 1000000
let hasil = ""
let opening = confirm("Selamat Daatang Di ATM BBC")

while(opening == true){
    let Tanya = confirm("Apakah Anda Ingin Mengambil Uang Anda")
    if(Tanya == true){
        let tanya2 = parseInt(prompt("Berapakah uang yang ingin anda ambil, " + `saldo : ${saldo}`))
        if(saldo >= tanya2){
            hasil = `${saldo}` - `${tanya2}`
            document.write(`Transaksi anda berhasil` + "<br>" + `Uang yang di ambil : ${tanya2}` + "<br>" + `saldo yang tersisa : ${hasil}`)
            opening = false
        }else if(saldo < tanya2){
            alert("Transaksi gagal saldo anda kurang")
            opening = confirm("Apakah anda ingin mengulanginya?")
        }
    }

}
