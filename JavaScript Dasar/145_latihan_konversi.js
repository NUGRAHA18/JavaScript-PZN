//kunci dari konversi string dan number adalah 
/* 
operator + >>> mencoba output menjadi string
oerpator -, *, / >>> mencoba output menjadi angka
*/

console.log(typeof(100 + "5"));         //output : 1005(string)
console.log(typeof(10 - "5"));          //output : 5(number)



//latihan soal =======
//1. Ubah "123" menjadi number dan tambahkan dengan 10.
console.log(Number("123" + 10));


//2. Ambil angka 50 lalu ubahm enjadi string dan gabungkan dengan "apples".
let angka = 50;
let konversi = angka.toString();
console.log(konversi + " apples");


//3. Gunakan parseFLoat() untuk mengubah "42.99px" menjadi angka desimal.
console.log(parseFloat("42.99px"));


//4. Gunakan typeof untuk mengecek tipe data hasil konversi dari "75" ke number.
console.log(typeof(Number("75")));


//5. Buat fungsi isNumber(value) yang mengembalikan true jika nilai adalah number, dan false jika bulat
function isNumber(value){
    if(typeof value === "number"){
        return true;
    }else {
        return false
    }
}

console.log(isNumber(12))