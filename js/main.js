var today=new Date();
console.log(today);

var date=today.getDate();
console.log(date);

var day=today.getDay();
console.log(day);

var month=today.getMonth()+1;
console.log(month);

var year=today.getFullYear();
console.log(year);

var datei=document.getElementById("date-num");
console.log(datei);
var monthi=document.getElementById("month-num");
console.log(monthi);
var yeari=document.getElementById("year-num");
console.log(yeari);


function dmy(){
    if(date<9){
        datei.innerHTML="0"+date;
    }
    else if(date>9){
        datei.innerHTML=date;
    }
   if(month<9){
    monthi.innerHTML="0"+month;
   }
   else if(month>9){
    monthi.innerHTML=month++;
   }
    yeari.innerHTML=year;
}
dmy()

var sundot=document.getElementsByClassName("sundot");
console.log(sundot);

var mondot=document.getElementsByClassName("mondot");
console.log(mondot);

var tuedot=document.getElementsByClassName("tuedot");
console.log(tuedot);

var weddot=document.getElementsByClassName("weddot");
console.log(weddot);

var thudot=document.getElementsByClassName("thudot");
console.log(thudot);

var fridot=document.getElementsByClassName("fridot");
console.log(fridot);

var satdot=document.getElementsByClassName("satdot");
console.log(satdot);





function weekdays(){
    if(day==0){
        sundot[0].style.color="red";
    
    }
    if(day==1){
        mondot[0].style.color="red";
        
    }
    if(day==2){
        tuedot[0].style.color="red";
        
    }
    if(day==3){
        
        weddot[0].style.color="red";
    }
    if(day==4){
        thudot[0].style.color="red";
        
    }
    if(day==5){
        fridot[0].style.color="red";  
    }
    if(day==6){
        satdot[0].style.color="red";
    
    }
}
weekdays()



var seconds=document.getElementById("second");
console.log(seconds);
var minutes=document.getElementById("minute");
console.log(minutes);
var hours=document.getElementById("hour");
console.log(hours);
var am=document.getElementById("am");
console.log(am);
var pm=document.getElementById("pm");
console.log(pm);
var tempnum=document.getElementById("tempnum");
console.log(tempnum);


var sec=today.getSeconds();
console.log(sec);
var min=today.getMinutes();
console.log(min);
var hr=today.getHours();
console.log(hr);

secCount=0;
// minCount=0;
// hrCount=0;
setInterval(digitaltime,1000);
function digitaltime(){

    if(sec<=9){
        seconds.innerHTML="0"+sec;
        
    }
    else if(sec<=59){
        seconds.innerHTML=sec;
        // secCount++;
    }

    if(min<9){
        // secCount=0;
        // minCount++;
        minutes.innerHTML="0"+min;
        
    }
    else if(min<59){
        // secCount=0;
        // minCount++;
        minutes.innerHTML=min;
        
    }

     if(hr<9){
        // minCount=0;
        // hrCount++;
        hours.innerHTML="0"+hr;
        
    }
  
    else if(hr<=23){
        // minCount=0;
        // hrCount++;
        hours.innerHTML=hr;  
    }
  
    else if(hr){
        // hrCount=0;
    }
  
}
digitaltime();

function night(){
    if(hr<=12){
       am.style.color="red";
    }
    else{
        pm.style.color="red";
    }
    if(hr<=10){
        tempnum.innerHTML="28";
    }
    else if(hr<16){
        tempnum.innerHTML="35";
    }
    else{
        tempnum.innerHTML="30"
    }
}
night()