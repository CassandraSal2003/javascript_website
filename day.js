let day = new Date().getDay();
console.log("Day", day); 
let reply;  
let greetingElement = document.querySelector('.greeting'); 

if (day == 1){
    reply = "Happy Monday!";
}else if (day == 2 ){
    reply = "Happy Tuesday!";
}else if (day == 3 ){
    reply = "Happy Wednesday!";
}else if (day == 4 ){
    reply = "Happy Thursday!";
}else if (day == 5 ){
    reply = "Happy Friday!";
}else if (day == 6 ){
    reply = "Happy Saturday!";
}else if (day == 7){
    reply = "Happy Sunday!";
}

greetingElement.textContent = reply;

switch (day) {
    case 1: 
        greetingElement.style.color = "#ffb6c1"; 
        break;
    case 2: 
        greetingElement.style.color = "#ff00ff"; 
        break;
    case 3: 
        greetingElement.style.color = "#ba55d3"; 
        break;
    case 4: 
        greetingElement.style.color = "#c71585"; 
        break;
    case 5: 
        greetingElement.style.color = "#da70d6"; 
        break;
    case 6:
        greetingElement.style.color = "#ffc0cb"; 
        break;    
    case 7: 
        greetingElement.style.color = "#ee82ee"; 
        break;
    
}
