
//Membuat Fungsi Untuk Mengecek jika data kosong akan ditampilkan Alert

function cek(){
    if(form.angka1.value == "" || form.angka2.value == ""){
        alert("Silahkan Lengkapi Data terlebih Dahulu !!!") //Jika angka1 dan angka2 Kosong , Maka pesan akan ditampilkan
    exit(0);
    }
}

function cek2(){
    if(form.angka3.value == "" ){
        alert("Silahkan Isi Data pada Bagian Qty terlebih dahulu !!")
    exit(0);
    }
}

// Membuat Fungsi Logika Kalkulator

    function hasilluas(){
        cek();                                        
        var numb1 = parseFloat(document.form.angka1.value) / 100;
        var numb2 = parseFloat(document.form.angka2.value) / 100;
        var hasil = numb1 * numb2;
        form.hasil.value = hasil.toFixed(2);
    }
    
    function totalluas(){
        cek();
        cek2();
        var numb1 = parseFloat(document.form.angka1.value) / 100;
        var numb2 = parseFloat(document.form.angka2.value) / 100;
        var numb3 = parseFloat(document.form.angka3.value);
        var hasil = numb1 * numb2 * numb3;
        var output = hasil.toFixed(2);
        form.totalhasil.value = hasil.toFixed(2); 
    }
    
    function agen(){
        cek();
        cek2();
        var numb1 = parseFloat(document.form.angka1.value) / 100;
        var numb2 = parseFloat(document.form.angka2.value) / 100;
        var numb3 = parseFloat(document.form.angka3.value);
        var hasil = numb1 * numb2 * numb3;
        var output1 = hasil * 200000;
        var output = output1.toFixed(0);

        var reverse = output.toString().split('').reverse().join(''),
            ribuan  = reverse.match(/\d{1,3}/g);
            finaloutput  = ribuan.join('.').split('').reverse().join('');
            
        form.totalharga.value = finaloutput;
    }
    
    function umum(){
        cek();
        cek2();
        var numb1 = parseFloat(document.form.angka1.value) / 100;
        var numb2 = parseFloat(document.form.angka2.value) / 100;
        var numb3 = parseFloat(document.form.angka3.value);
        var hasil = numb1 * numb2 * numb3;
        var output1 = hasil * 225000;
        var output = output1.toFixed(0);

        var reverse = output.toString().split('').reverse().join(''),
            ribuan  = reverse.match(/\d{1,3}/g);
            finaloutput  = ribuan.join('.').split('').reverse().join('');
            
        form.totalharga.value = finaloutput;
    }  


    // Membuat Fungsi untuk mereset semua isi dalam form

        function reset(){       
            form.angka1.value = "";
            form.angka2.value = "";
            form.angka3.value = "";
            form.totalharga.value = "";
            form.totalhasil.value = "";
        }