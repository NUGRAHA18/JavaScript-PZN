
        // document.writeln(100);
        // document.writeln("</br>");
        // document.writeln(100.1000);

        //latihan 1 "cek bilangan bulat"
        // function cekBilangan(num){
        //     if(num %2 === 0){
        //         document.writeln(`${num} merupakan bilangan bulat`)
        //     }else{
        //         document.writeln(`${num} Bukan Bilangan bulat`);
        //     }
        // }

        // cekBilangan(10);
        // cekBilangan(3.14);


        
        // Latihan 2 "Konversi String to even dan float"
    //     function konversiAngka(str){
    //         let strToEven = parseInt(str);
    //         let strToFloat = parseFloat(str);
    //         document.writeln(`Bilangan Bulat : ${strToEven} tipe datanya ${typeof(strToEven)}<br>`);
    //         document.writeln(`Bilangan Desimal ${strToFloat} tipe datanya ${typeof(strToFloat)}`);
    //     }

    //     // konversiAngka("42.99");
    //    konversiAngka("54.42");
     



        // Latihan 3 "Format Desimal"
        // function formatDesimal(angka, digit){
        //     let tryed = angka.toFixed(digit);
        //     console.log(`hasilnya : ${tryed}`);
        // }

        // formatDesimal(3.15159, 2);


        //latihan 4 :  Perbandingan dengan MAX_VALUE
        // function cekMaxValue(num){
        //     if(num > Number.MAX_VALUE){
        //         document.writeln("angka Melebihi batas");
        //     }else {
        //         document.writeln(`${num}`);
        //     }
        // }

        // cekMaxValue(1.8e308); //output : angka melebih batas
        // cekMaxValue(1.5e308); //output : 1.5e308


        // //latihan 5 : Cek Nan
        // function cekNaN(nilai){
        //     if(isNaN(nilai)){
        //         document.writeln(`Nilai ${nilai} adalah Nan`);
        //     }else{
        //         document.writeln("Nilai ini adalah angka valid");
        //     }
        // }
        // cekNaN(0 / 0);      //Output : NaN
        // cekNaN(100);        //Output : Valid
