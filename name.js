let name=prompt("Adınızı giriniz","Buraya yazabilirsiniz")
let myName=document.querySelector(id="#myName")
myName.innerHTML=name

let date = new Date()
let date1=date.getTime()
let hours=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
let day=date.getDay()

if (day==1){
    day="Sazartesi"
}
else if (day==2){
    day="Salı"
}
else if (day==3){
    day="Çarşamba"
}
else if (day==4){
    day="Perşembe"
}
else if(day===5){
    day="Cuma"
}
else if(day===6){
    day="Cumartesi"
}
else if(day===0){
    day="Pazar"
}
console.log(hours+":"+minutes+":"+seconds)
let myclock=document.querySelector(id="#myClock")
myclock.innerHTML=`
${hours}:${minutes}:${seconds}  ${day} 
`
