// console.log(window);
// const infoBtn  = document.querySelector('button');

// infoBtn.onclick=()=>{
    // window.open("https://webluna.az","", "left=500,top=100,width=800,height=520");
    // window.location.assign("https://google.com")
    // window.location.reload();
    
// }

// console.log(window.location);
// console.log(screen.colorDepth);

// console.log(window.navigator.platform);
// console.log(window.navigator.language);

let a = 100;
const ab = setTimeout(()=>{
    document.querySelector('h1').innerHTML = a--;
},2000);


document.querySelector('button').onclick=()=>{
    clearInterval(ab);
};



