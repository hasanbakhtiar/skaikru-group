// document.querySelector('.info').innerHTML = document.querySelector('ul').firstChild.firstChild.parentNode.parentNode.firstChild.nextSibling.firstChild.nodeValue;

// const newElem = document.createElement('h1');
// const newText = document.createTextNode("Hello Amigo");
// newElem.appendChild(newText);
// document.body.appendChild(newElem);


const ipt = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector('ul');

btn.onclick = ()=>{
    let liElem = document.createElement('li');
        liElem.innerHTML = ipt.value;
        ul.appendChild(liElem);
        ipt.value = "";
}

