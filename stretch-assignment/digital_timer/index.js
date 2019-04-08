// Array.from(msTens)
// msTens= [0,1,2,3,4,5,6,7,8,9];
// for (i=0; i < msTens.length; i++){};

const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("SecondTens");
const totalms= 0;
setInterval(clock, 1000);

function clock(){
    ++totalms;
    msTens.innerHTML = pad(totalms / 10);
    msHundreds.innerHTML = pad(totalms/1000)
}

