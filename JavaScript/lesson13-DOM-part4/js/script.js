// localStorage.setItem('data1','new data one');
// localStorage.setItem('data2','new data two');

// document.querySelector("h1").innerHTML = localStorage.getItem('data1');
// localStorage.removeItem("data1")
// localStorage.clear();


const nav  = document.querySelector('nav');
const modeBtn = document.querySelector('#mode');
if (localStorage.getItem("mode") === null) {
    localStorage.setItem('mode','light');
}else{

    modeBtn.onclick=()=>{
        if (modeBtn.innerHTML === "Dark") {
            nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark'
            modeBtn.innerHTML = "Light"
            localStorage.setItem('mode','dark');
        }else{
            nav.className = 'navbar navbar-expand-lg bg-body-tertiary'
            modeBtn.innerHTML = "Dark"
            localStorage.setItem('mode','light');
        }
    }

    if (localStorage.getItem('mode') === 'light') {
        nav.className = 'navbar navbar-expand-lg bg-body-tertiary'
            modeBtn.innerHTML = "Dark"
    }else{
        nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark'
            modeBtn.innerHTML = "Light"
    }
    
}