class TreeNo {
    constructor (date) {
        this.date = date;
        this.znak = {
            energy:['#d6d6d6', '#0000ff1f', '#0000ff1f', '#ff000038', '#ff000038', '#ffffa6', '#ffffa6', 'white', 'white', '#d6d6d6'],
            zver:['кабан', 'крыса', 'волк', 'тигр', 'кот', 'дракон', 'змея', 'лошадь', 'овца', 'обезьяна', 'птица', 'собака'] 
        }
    }

headCalc() {
        let x = 48 + (Math.ceil((this.date)/(60*60*24*1000)))%60;             
        if (x <= 0) {x += 60}  else {
              if (x > 60)  {x -= 60}}     
            return x 
    } 
bodyCalc() {
         let x =(47 + (this.date.getFullYear()-1970))%60;  
            if (x <= 0) {x += 60}  else {
            if (x > 60)  {x -= 60}}     
        return x 
    }  
soulCalc(){
    let  x = String(this.bodyCalc(this.date)).slice(-1), y= 0;  
          if (x == '1' || x == '2') {y = this.date.getMonth()+1;} else {
            if (x == '3' || x == '4') {y = this.date.getMonth()+13;} else {
            if (x == '5' || x == '6') {y = this.date.getMonth()+25;} else {
            if (x == '7' || x == '8') {y = this.date.getMonth()+37;} else {
            if (x == '9' || x == '0') {y = this.date.getMonth()+49;}}}}}
            return y 
            }

setEnergy = (a) => {
                a=a%10;
                return this.znak.energy[a];
} 

setZver = (a) => {
         a = a%12;  
    return this.znak.zver[a];
}

malkhudCalc = () => {
    const x = this.headCalc()+this.soulCalc()+this.bodyCalc();
   if (x%60 === 0) {
    return 60
   } else {return x%60}
}

binahCalc = () => {
    const x = this.soulCalc()+this.bodyCalc();
   if (x%60 === 0) {
    return 60
   } else {return x%60}
}

hokmahCalc = () => {
    const x = this.headCalc()+this.soulCalc();
   if (x%60 === 0) {
    return 60
   } else {return x%60}
}
gevurahCalc = () => {
    const x = 4 + this.soulCalc();
   if (x%60 === 0) {
    return 60
   } else {return x%60}
}
nezahCalc = () => {
    const x = 22 + this.soulCalc();
   if (x%60 === 0) {
    return 60
   } else {return x%60}
}
hesedCalc = () => {
    let x = this.soulCalc() - 4;
    if (x<0) {x+=60};
   if (x === 0) {return 60} 
   return x
}
hodCalc = () => {
    let x = this.soulCalc() - 22;
   if (x<0) {x+=60};
   if (x === 0) {return 60} 
   return x
}


fillTree = () => {

    keter.style.fill= this.setEnergy(this.headCalc());
    keterText.textContent = this.setZver(this.headCalc());
    keterNumber.textContent= this.headCalc();

    tiferet.style.fill= this.setEnergy(this.soulCalc());
    tiferetText.textContent = this.setZver(this.soulCalc());
    tiferetNumber.textContent= this.soulCalc();

    yesod.style.fill= this.setEnergy(this.bodyCalc());
    yesodText.textContent = this.setZver(this.bodyCalc());
    yesodNumber.textContent= this.bodyCalc();

    malkhud.style.fill= this.setEnergy(this.malkhudCalc());
    malkhudText.textContent = this.setZver(this.malkhudCalc());
    malkhudNumber.textContent= this.malkhudCalc();

    binah.style.fill= this.setEnergy(this.binahCalc());
    binahText.textContent = this.setZver(this.binahCalc());
    binahNumber.textContent= this.binahCalc();


    hokmah.style.fill= this.setEnergy(this.hokmahCalc());
    hokmahText.textContent = this.setZver(this.hokmahCalc());
    hokmahNumber.textContent= this.hokmahCalc();

 
    gevurah.style.fill= this.setEnergy(this.gevurahCalc());
    gevurahText.textContent = this.setZver(this.gevurahCalc());
    gevurahNumber.textContent= this.gevurahCalc();

    nezah.style.fill= this.setEnergy(this.nezahCalc());
    nezahText.textContent = this.setZver(this.nezahCalc());
    nezahNumber.textContent= this.nezahCalc();

    hesed.style.fill= this.setEnergy(this.hesedCalc());
    hesedText.textContent = this.setZver(this.hesedCalc());
    hesedNumber.textContent= this.hesedCalc();

    hod.style.fill= this.setEnergy(this.hodCalc());
    hodText.textContent = this.setZver(this.hodCalc());
    hodNumber.textContent= this.hodCalc();
   
   
}            
}

let x = new Date();
const a = x.getFullYear(),
      b = x.getMonth(),
      c = x.getDate();  
    

const y = new TreeNo(new Date(a, b, c));       

y.fillTree();


form.onchange = function() {
    const setYear = +form.elements.calendar.value.slice(0,4),
          setMonth = +form.elements.calendar.value.slice(5,7) - 1,
          setDay  = +form.elements.calendar.value.slice(8,10);
    const y = new TreeNo(new Date(setYear, setMonth, setDay)); 
    y.fillTree();
    
};


console.log(y.headCalc(), y.soulCalc(), y.bodyCalc());