const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passField_1 = document.getElementById("passField-1");
let passField_2 = document.getElementById("passField-2");

let pass1 = [];
let pass2 = [];
function getRandomPass(){
    for(let i=0;i<15;i++){
        let randomInt = Math.floor(Math.random()*92);
        pass1[i] = characters[randomInt];   
    }
   

    
    for(let i=0; i<15; i++){
        let randomInt = Math.floor(Math.random()*92);
        pass2[i] = characters[randomInt];  
    }

    for(let i=0; i<15; i++){
        passField_1.textContent += pass1[i];
    }

    for(let i=0; i<15; i++){
        passField_2.textContent += pass2[i];
    }
        
    


    



}

function resetPass(){
    passField_1.textContent = " ";
    passField_2.textContent = " ";
}
