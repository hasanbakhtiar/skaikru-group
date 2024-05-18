var list:any = document.querySelector<HTMLUListElement>('ul');
const input = document.querySelector('input') as HTMLInputElement;



interface infoType{
    title:string;
    count:number;
}

const info:infoType = {
    title:"Hello",
    count:5
}



fetch('https://fakestoreapi.com/products')
.then((res:any)=>res.json())
.then((data:any)=>{
    let li:string = "";
    data.map(item=>{
        li+=`<li>${item.title}</li>`
    })
    list.innerHTML = li;
}) 

