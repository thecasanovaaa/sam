let eyeicon=document.getElementById("sign-in-eyeicon");
let password=document.getElementById("sign-in-password");

eyeicon.onclick=function(){
    if(password.type == "password"){
        password.type="text";
        eyeicon.src="./images/eyeBlue.png";
    } else{
        password.type="password";
        eyeicon.src="./images/hiddenBlue.png"
    }
};

let icon = document.getElementById("sign-up-eyeicon");
let pass = document.getElementById("sign-up-password");
icon.onclick=function(){
    if(pass.type == "password"){
        pass.type="text";
        icon.src="./images/eyeBlue.png";
    } else{
        pass.type="password";
        icon.src="./images/hiddenBlue.png"
    }
};

pass.addEventListener('input', () =>{

    if(pass.value.length < 4 && pass.value.length > 0){
        pass.style.borderColor="red";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        pass.style.borderColor="yellow";
    }
    else if(pass.value.length >= 8){
        pass.style.borderColor="green";
    }
    else{
        pass.style.borderColor="#000";
    }
});

const inputs=document.querySelectorAll(".input-field");

inputs.forEach((inp)=>{
    inp.addEventListener("focus",() => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur",() => {
        if(inp.value != "") retuen;
        inp.classList.remove("active");
    });
});


const toggle_btn=document.querySelectorAll(".toggle");
const main=document.querySelector("main");

toggle_btn.forEach((btn)=>{
    btn.addEventListener("click",() => {
        main.classList.toggle("sign-up-mode");
    });
});


const bullets=document.querySelectorAll(".bullets span");
const images=document.querySelectorAll(".image");


bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
        
        let index=bullet.dataset.value;
        
        let currentImage=document.querySelector(`.img-${index}`);
        images.forEach((img) => img.classList.remove("show"));
        currentImage.classList.add("show");

        const currentHeading=document.querySelector(".text-group");
        currentHeading.style.transform=`translateY(${ -(index-1)*2.2}rem)`;

        bullets.forEach(bull => bull.classList.remove("active"));
        bullet.classList.add("active");
    });
});