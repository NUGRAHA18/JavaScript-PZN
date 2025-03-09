
        // document.writeln("Agung" + " " + "Nugraha");
        // document.writeln("</br>");
        // document.writeln("Programer Zaman Now");
        // document.writeln("</br>");

        // document.writeln("Nama :" + "Eko " + "Nugraha");
        // document.writeln("</br>");
        // document.writeln("Chanel : " + "Programer Zaman Now");

        // document.writeln("<textarea cols= '100' row='10'>");
        // document.writeln("Agung Nugraha");
        // document.writeln("Home Kurniawan Khannedy");
        // document.writeln("Programmer Zaman Now");
        // document.writeln("</textarea>");

        //contoh : 
        // let nama1 = "Agung";
        // let nama2 = "Nugraha";
        // let kalimat = `selamat pagi ${nama1} dan ${nama2}`;
        // console.log(kalimat);


        //contoh menggunakan method 
        // let string = "hari yang cerah";

        // console.log(string.toUpperCase());           //output : HARI YANG CERAH
        // console.log(string.toLowerCase());           //output : hari yang cerah
        // console.log(string.charAt(2));               //output : r
        // console.log(string.substring(0, 5));         //output : hari
        // console.log(string.split());                 //string Jadi array
        // console.log(string.trim());                  //menghapus spasi kanan kiri
        // console.log(string.replace("cerah", "Mendung"));    //Mengganti teks
        // console.log(string.includes("kontol"));         //false
        // console.log(string.endsWith("h"));              //output : true



//soal 1 : Buatlah program yang mengubah teks "javascript" menjadi huruf besar.
console.log("javascript".toUpperCase());

//soal 2 : Cek apakah string "Saya belajar coding" mengandung kata "belajar".
let string1 = "Saya belajar coding";
let cek = string1.includes("belajar");
console.log(cek);

//soal 3 : Ganti kata "Hello" menjadi "Hi" dalam string "Hello world"
let string2 = "hello World";
let cek2 = string2.replace("hello", "hi");
console.log(cek2);

//soal 4 : Ambil substring "JavaScript" dari teks "Saya belajar JavaScript di rumah.".
let string3 = "Saya belajar Javascript di rumah";
let cek3 = string3.substring(13, 23);
console.log(cek3);

//soal 5 : Buat template literal yang menampilkan nama dan umur seseorang
let nama = "agung";
let umur = "19 tahun";
let kalimat = `nama saya ${nama} dan umur saya ${umur}`;
console.log(kalimat);