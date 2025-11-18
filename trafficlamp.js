//fungsi matikkan seluruh lampu
const lampuMerah=document.getElementById("lampu-merah")
const lampuKuning=document.getElementById("lampu-kuning")
const lampuHijau=document.getElementById("lampu-hijau")
const tombolMulai=document.getElementById("mulai")
const tombolBerhenti=document.getElementById("berhenti")
const btnMerah=document.getElementById("btn-merah")
const btnKuning=document.getElementById("btn-kuning")
const btnHijau=document.getElementById("btn-hijau")
const textStatus=document.getElementById("status")

//ms
let intervalOtomatis;//jarak waktu otomatis
let indexLampu=0;
const urutan=["merah","kuning","hijau"]
//fungsi mode otomatis
function jalanOtomatis(){
    const warna = urutan[indexLampu];
    console.log=(warna)
    nyalakanLampu(warna);
    indexLampu++;
    if(indexLampu >= urutan.length){
        indexLampu=0
    }
}
//fungsi matikan slrh lampu
function matikanSemua(){
    lampuMerah.classList.remove("nyala")
    lampuKuning.classList.remove("nyala")
    lampuHijau.classList.remove("nyala")
}

//fungsi nyalakan lampu sesuai warna
function nyalakanLampu(warna){
    matikanSemua()
    //switch/pilih ktk warna(warna)
switch (warna){
//jk warna adlh merah
        case "merah":
            //maka lakukan hal brkt ini
            lampuMerah.classList.add("nyala")
            textStatus.textContent=
            "Status: Merah - BERHENTI"
            textStatus.style.color="black"
            textStatus.style.backgroundColor="red"
            textStatus.style.borderRadius="20px"
            textStatus.style.padding="20px"
            textStatus.style.margin="50px 150px"
            //Selesai
            break;
        case "kuning":
            lampuKuning.classList.add
            ("nyala")
            textStatus.textContent=
            "status: kuning - HATI-HATI"
            textStatus.style.color="black"
            textStatus.style.backgroundColor="gold"
            textStatus.style.padding="20px"
            textStatus.style.margin=" 50px 150px"
            break;
        case "hijau":
            lampuHijau.classList.add
            ("nyala")
            textStatus.textContent=
            "status:hijau - JALAN" 
            textStatus.style.color="black"
            textStatus.style.backgroundColor="lime"
            textStatus.style.padding="20px"
            textStatus.style.margin="50px 150px"
            break;
    }
}
//event ombol mulai
tombolMulai.addEventListener("click",function(){
    clearInterval(intervalOtomatis);//bersihkan interval sebelumnya
    indexLampu=0;
    jalanOtomatis();
    //jalankan fungsi jalanOtomatis(),setiap 2 detik 
    intervalOtomatis=setInterval(jalanOtomatis,2000);//stuannya milisekon: 1s=1000ms
    //gantisetiap 2 detik
})
//Event tombol Berhenti
tombolBerhenti.addEventListener("click",function(){
    matikanSemua();
    textStatus.textContent="status : mati"
});

//event tombol manual
btnMerah.addEventListener("click",function(){
    nyalakanLampu("merah")
})
btnKuning.addEventListener("click",function(){
    nyalakanLampu("kuning")
})
btnHijau.addEventListener("click",function(){
    nyalakanLampu("hijau")
})