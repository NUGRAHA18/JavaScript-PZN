/*contoh object=====================
let mahasiswa = {
    nama : "Agung",
    jurusan : "Informatika",
    umur : "17"
}

console.log(mahasiswa.nama);
console.log(mahasiswa["umur"]);
*/



//2. Properti dan Method dalam Object
// let mobil = {
//     merk : "Toyota",
//     warna : "Hitam",
//     start : function(){
//         console.log("Mobil dinyalakan...")
//     }a m
// }

// console.log(mobil.merk);
// mobil.start();




//3. Cara membuat Object========================
//a. Menggunakan Object literal 
// let laptop = {
//     merek : "asus",
//     harga : "20000000"
// }

// //b. Menggunakan keyword new Object()
// let add = new laptop();
// add.merek = " ROG";


//c. Menggunakan Function Constructor
// function Orang(nama, umur){
//     this.nama = nama;
//     this.umur = umur;
// }

// let orang1 = new Orang("Agung", "19");
// console.log(orang1.nama);

// let orang2 = new Orang("budi", "20");
// console.log(`saya ${orang2.nama} berumur ${orang2.umur} tahun`);


// // d. Menggunakan class (ES6)
// class Hewan {
//     constructor(nama, jenis){
//         this.nama = nama;
//         this.jenis = jenis;
//     }

//     suara(){
//         console.log(`${this.nama} mengeluarkan bunyi...`);
//     }
// }

// let kucing1  = new Hewan("pilo", "persia");
// console.log(`kucing ku bernama ${kucing1.nama}`);
// kucing1.suara();


//4. Mengakses Properti Object ==================
//a. Mengakses properti Object
// let user = {
//     nama : "riyan",
//     umur : "24"
// };

// console.log(user.nama);
// console.log(user["umur"]);

// //b. Menambah Properti baru 
// user.perkerjaan = "programer";
// console.log(user);

// //c. Mengubah Nilai Property 
// user.umur = "60"
// console.log(user.umur);

// //d. Menghapus Properti 
// delete user.perkerjaan;


//5. OBJECT DENGAN LOOP 
// let siswa = {
//     nama : "amel",
//     kelas : "12",
//     nilai : "90"
// }

// for(let key in siswa){
//     console.log(key + " : " + siswa[key]);
// }



//6. Object Method bawaan Js
let produk = {
    nama: "Laptop",
    harga: 15000000
};

// console.log(Object.keys(produk));       //membalikan (dlm bentuk array) properties/keys
// console.log(Object.values(produk));     //membalikan (dlm bentuk array) value
// console.log(Object.entries(produk));    //membalikan keys dan values




//===================Latihan soal ============//
//1. Buat object bernama "buku" yang memiliki properti judul, penulis, dan tahunTerbit.
// let buku = {
//     judul : "sangkuriang",
//     penulis : "agung",
//     tahunTerbit : "besok",

//     //nomor 2 :  Method untuk menampilkan informasi buku
//     info : function() {
//         console.log(`judul : ${buku.judul}, penulis : ${buku.penulis},`);
//     }
// }


//nomor 3 : Gunakan for...in untuk menampilkan semua properti
// for(let key in buku){
//     console.log(key + ": " + buku[key]);
// }

//nomor 4 : Mengubah tahun terbit
// buku.tahunTerbit = "kemarin";
// console.log(buku.tahunTerbit);

//nomor 5 : Menggunakan Object.keys() dan Object.values()
// console.log(Object.keys(buku));
// console.log(Object.values(buku));




//Latihan soal dengan Menggunakan Class

//nomor 1
class Buku {
    constructor(judul,penulis,tahunTerbit){
        this.judul = judul;
        this.penulis = penulis;
        this.tahunTerbit = tahunTerbit;
    }

    //nomor 2
    info(){
        return `Judul : ${this.judul}, penulis : ${this.penulis}, tahun terbit : ${this.tahunTerbit}`;
    }
}

//membuat object
let buku1 = new Buku("JavaScript", "agung", "2025");

//nomor 3 menampilkan setiap informasi dari class
for(let key in buku1){
    console.log("index ke " + key + " Berisi : " + buku1[key]);
}

//nomor 4 : Mengubah nila Property tahunTerbit
buku1.tahunTerbit = "2026";
console.log(buku1.tahunTerbit);

//nomor 5 :     
console.log(Object.keys(buku1));        //Menampilkan key
console.log(Object.values(buku1));      //Menampilkan Nilai

