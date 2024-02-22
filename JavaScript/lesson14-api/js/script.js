const mainList  = document.querySelector('ul');

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    let li = "";
    data.slice(0,3).map(item=>{
        li+=`<li><img src="${item.image}" width="70"/>${item.title}</li>`
    })
    mainList.innerHTML = li;
});
