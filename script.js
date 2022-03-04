function getPilihanKomputer(){

    const comp = Math.random();   
    
    if (comp < 0.34) return "gajah";
    if( comp >= 0.34 && comp < 0.67) return "semut";
    return "orang";
    
} 

const pHasil = document.querySelector('.info')
function getHasil(comp, player){
    if (player == comp) return "SERI!";
    if (player == "gajah") return (comp == "orang" )? "MENANG!" : "KALAH!";
    if (player == "semut") return (comp == "gajah" )? "MENANG!" : "KALAH!";
    if (player == "orang") return (comp == "semut" )? "MENANG!" : "KALAH!";
    return "Memasukkan pilihan yg salah";

}

function putarGambar(){
    const imgComputer = document.querySelector('.img-komputer');

    const gambar = ['gajah', 'semut', 'orang']
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval();
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length ) {
            i = 0;
        }
    }, 100)
}

// Pilih satu event saja
let scorePlayer = 0;
let scoreComputer = 0;

const pilPlayer = document.querySelectorAll('li img');
pilPlayer.forEach(function(pil){ // nama parameter bisa bebas
    pil.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        // console.log(pilihanPlayer)

        putarGambar();
        
        setTimeout(function(){
            const imgKomputer = document.querySelector('.img-komputer')
            imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png')
            
            const infoHasil = document.querySelector('.info') 
            infoHasil.innerHTML = hasil;

            const sPlayer = document.querySelector('.score-player')
            const sComputer = document.querySelector('.score-computer')

            if(hasil == 'MENANG!'){
                scorePlayer++;
            }else if(hasil == 'KALAH!'){
                scoreComputer++;
            }

            sPlayer.innerHTML = scorePlayer;
            sComputer.innerHTML = scoreComputer;



        }, 1000); // 1 detik == 1000 ms

        

        // console.log('Player: '+ scorePlayer)
        // console.log('Computer: '+ score)

        
    })
})


// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer')
//     imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png')

//     const infoHasil = document.querySelector('.info') 
//     infoHasil.innerHTML = hasil;
// })

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer')
//     imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png')

//     const infoHasil = document.querySelector('.info') 
//     infoHasil.innerHTML = hasil;
// })
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer')
//     imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png')

//     const infoHasil = document.querySelector('.info') 
//     infoHasil.innerHTML = hasil;
// })
