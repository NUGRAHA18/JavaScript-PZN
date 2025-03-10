// //contoh array sederhana==================
// let data = ["Apel", "Mangga", "Pisang", "Jeruk"];
// console.log(data);

// //2. Cara membuat array==================
// //a. menggunakan array literal (Cara Paling Umum)
// let angka = [1,2,3,4,5];
// console.log(angka);

// //b. Mengguanakn Keyword new Array();
// let hewan = new Array("anjing", "babi", "ngepet");


// //3. Mengakses element=============================
// let warna = ["mereh", "Hijau", "Biru"];
// console.log(warna[0]);              //output : merah
// console.log(warna[5]);              //output : undefined

// //4. Modifikasi element dalam Array=================
// let angka1 = [10, 20, 30, 50];
// angka[0] = 25;
// console.log(angka[0]);

// //5. Menambahkan dan Menghapus Element dalam Array========
// //a. Menambahkan Element dengan push();
// let hobi = ["Membaca", "Menulis"];
// hobi.push("berenang");              //tambah diawal 
// hobi.unshift("tiduran");            //tambah diakhir
// console.log(hobi);                  

// //b. Menghapus Element dengan pop() dan shift
// //
// let makanan = ["martabak", "emping", "semangka"];
// makanan.pop();          //menghapus element terakhir
// makanan.shift();        //menghapus element pertama
// console.log(makanan);


//6. Iterasi Array ========================
//a. menggunakan loop for
// let number = ["ayam", "jangkrik", "bebek", "kadal"];

// for(let j = 0; j<number.length; j++){
//     console.log(`Iteration ke-${j} berisi ${number[j]}`);
// }

// //b. Menggunakan forEach() 
// let hewan1  = ["jerapah", "lumba-lumba", "monyet"];
// hewan1.forEach(function(item, index) {
//     console.log(`Buah ke - ${index+1}: ${item}`);
// });


// //c. Menggunakan for of(Es6)
// let warna1 = ["hijau", "green", "yellow", "kuning"];
// for(let item of warna1){
//     console.log(item);
// }



// Metode Bawaan Array (Array Methods)
// let angka = [3, 1, 4, 1, 5, 9];
// angka.sort();                           //mengurutkan array 
// angka.push(100);                        //Menambahkan elemen di akhir array
// angka.pop();                            //Menghapus element paling akihr
// angka.unshift(0)                        //Menambahkan ke awal 
// angka.shift();                          //Menghapus element pertama
// angka.slice(0,1);                       //Mengambil element array dari indexs tertentu
//angka.indexOf(4);                        //Mencari index tertentu
// angka.includes(9);                      //Mengecheck apakah element ada di dalam array
// angka.reverse();                            //Membalikan urutan array



//8 : Array Multidimensi 
// let martrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(martrix[1][2]);