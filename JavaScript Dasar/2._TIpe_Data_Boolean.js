
        // document.writeln(true);
        // document.writeln("<br>");
        // document.writeln(false);


    //latihan 1 : Balikan Nilai Boolean
        // function balikkanBoolean(nilai){
        //   let turn = !(nilai);
        //   console.log(turn);
        // }

        // balikkanBoolean(true);



    //soal 2 cek apakah nilai falsy
            // function cekFalsy(nilai){
            //   return !nilai;
            // }

            // console.log(cekFalsy(0));       // Output: true


    //soal 3 : validasi input 
        //    function validasiInput(input){
        //     if(!input){
        //         document.writeln("input tidak valid");
        //     }else{
        //         document.writeln("input valid");
        //     }
        //    }

        //  validasiInput("");
        //  document.writeln("<br>")
        //  validasiInput(null);
        //  document.writeln("<br>");
        //  validasiInput("100");
        //  document.writeln("<br>");
        //  validasiInput(undefined);


    //soal 4 : toggle

        // const lampu = {
        //     menyala : true
        // };

        // function toggle(){
        //     lampu.menyala = !lampu.menyala;

        //     if(lampu.menyala){
        //         document.writeln("lampu menyala");
        //     }else{
        //         document.writeln("lampu mati ");
        //     }

        //     document.writeln("<br>");
        // }

        // // toggle();
        // // toggle();
        // // toggle();
        // // toggle();
        // // toggle();
        // // toggle();
        // // toggle();
    
    //latihan 3 : toggle pintu buka dan tutup
        // const pintu = {
        //     status : true
        // };

        // function cekPintu(){
        //     pintu.status = !pintu.status;

        //     if(pintu.status){
        //         document.writeln("pintu terbuka");
        //     }else {
        //         document.writeln("pintu tertutup");
        //     }

        //     document.writeln("<br>");
        // }

        // cekPintu();
        // cekPintu();
        // cekPintu();


    //soal 4 : filter sebuah tipe data array, jika true maka kembalikan nilai
    //    function filter(arr){
    //     return arr.filter(Boolean)//
    //    }

    //    const data = [0, 1, false, 2, "", 3, null, undefined, NaN, 4, true];
    //    document.writeln(filter(data));

    
    //soal 5 : cek apakah angka positif atau negativ
    // function cekNilai(num){
    //     if(num >= 1){
    //         return true;
    //     }else {
    //         return false
    //     }
    // }

    // console.log(cekNilai(100));
    // console.log(cekNilai(-1));

    //soal 6 : Apakah Bilangan Ganjil ?
    // function isGanjil(angka){
    //     if(angka %2 === 1){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // console.log(isGanjil(1)); //true
    // console.log(isGanjil(4)); //false 



    //soal 7 : Cek Login 
    // function cekLogin(username, password){
    //     if(username === "admin" && password === "1234"){
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }

    // console.log(cekLogin("admin", "1234")); //true


    //soal 8 : Apakah Kata Mengandung Huruf A ? 
        // function mengandung(kata){
        //     return kata.toLowerCase().includes("a");
        // }
        // console.log(mengandung("Apple"));   //output : true


    //soal 9 : Apakah Nilai Truthy atau Falsy ? 
    // function cekTruthy(value){
    //     if(value){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    //  console.log(cekTruthy(""));    //output : false
    //  console.log(cekTruthy(100));   //output : true


 
