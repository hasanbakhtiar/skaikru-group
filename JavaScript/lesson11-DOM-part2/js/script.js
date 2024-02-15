const modeBtn   =document.querySelector('#mode');
const nav = document.querySelector('nav');
const mainMode = document.querySelector('#main-mode');
modeBtn.onclick = ()=>{
if (modeBtn.innerHTML == "Dark") {
    nav.className = "navbar navbar-expand-lg bg-dark navbar-dark"
    modeBtn.innerHTML = "Light";
    mainMode.className = "dark";
}else{
    nav.className = "navbar navbar-expand-lg bg-light navbar-light";
    modeBtn.innerHTML = "Dark";
    mainMode.className = "light";

}
}


document.querySelector('#menu').onclick = ()=>{
        if (document.querySelector('menu').className == "hidden") {
            document.querySelector('menu').className = "show";
        }else{
            document.querySelector('menu').className = "hidden";
        }
}








// const btn = document.querySelector('button');
// const text = document.querySelector('h1');

// const changedText = ()=>{

//         text.innerHTML = 'text is chanaged';
// }
// btn.addEventListener('click',chnagedText,true);






// btn.onclick = ()=>{
//     // text.attributes[0].value = 'green';
//     // text.className = "green";
//     // text.classList.add('red');
//     // text.classList.remove("red","green");
//     // text.style.backgroundColor = '#00f';
//     // text.style.fontFamily = 'sans-serif'
// }




// const prevBtn = document.querySelectorAll("button")[0];
// const nextBtn = document.querySelectorAll("button")[1];
// const photo = document.querySelector("img");
// nextBtn.onclick = () => {
//     photo.attributes[1].value = "https://www.pixelstalk.net/wp-content/uploads/2016/08/HD-Best-Nature-Wallpapers-For-Desktop.jpg";
// }

// prevBtn.onclick = () => {
//     photo.attributes[1].value = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";
// }