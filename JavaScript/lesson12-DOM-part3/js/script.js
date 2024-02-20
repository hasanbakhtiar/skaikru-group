// document.querySelector('.info').innerHTML = document.querySelector('ul').firstChild.firstChild.parentNode.parentNode.firstChild.nextSibling.firstChild.nodeValue;

// const newElem = document.createElement('h1');
// const newText = document.createTextNode("Hello Amigo");
// newElem.appendChild(newText);
// document.body.appendChild(newElem);


const ipt = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector('ul');

form.onsubmit = (e)=>{
    e.preventDefault();
    if (!ipt.value) {
        alert('test')
    }else{
        let liElem = document.createElement('li');
        liElem.innerHTML = ipt.value;
        ul.appendChild(liElem);
        ipt.value = "";
        liElem.onclick=()=>{
            liElem.style.textDecoration = "line-through"
        }
        liElem.ondblclick =()=>{
            liElem.remove();
        }
    }
}

