// import { product } from "./data.js";


// const month = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"];
// const comingMonth = Math.round(Math.random() * month.length-1);

// const filterProductFunc = (cd)=>{
//    product.map(item=>{
//     if (month[cd] === month[11] || month[cd] === month[0] || month[cd] === month[1]) {
//         if (item.category === "men's clothing") {
//             console.log(item.title);
//         }
//     }
//    })
// }


// filterProductFunc(comingMonth);





// const comingValue = parseFloat(prompt());


// const filterdata = product.filter(p=>p.rating.rate >= comingValue);
// filterdata.map(item=>{
//     console.log(item.title);
// });


// product.map(item=>{
//    if (item.category === comingValue) {
//     console.log(item.title);
//    }
// })




    // console.log(document);



// document.getElementsByTagName('h1')[0].innerHTML = "new value";
// document.getElementById('test').innerHTML = 'new value for id';
// document.getElementsByClassName('demo')[0].innerHTML = 'new value for class';



// for(let i = 0; i<10;i++){

//     document.getElementsByTagName('li')[i].innerText = "<b>new value for list</b>";
// }


// const myElemt = document.getElementsByTagName('li');


// for(let i = 0; i<myElemt.length; i++){
//     myElemt[i].innerHTML = "new data";

// }



// document.querySelectorAll('li')[0].innerHTML = 'new data for query'


const capitalBtn = document.querySelector('button');
const text = document.querySelector('h1');

const changeInfo=()=>{
        if (text.innerHTML === "England") {
            text.innerHTML = "London";
            capitalBtn.innerHTML = "view country";

        }else{
            text.innerHTML = "England";
            capitalBtn.innerHTML = "view capital";
        }
}

capitalBtn.onclick = changeInfo; 
    
    
    
    
    
    
    
    
    
    
    const langdata = {
        az:["Ana Sehife","Haqqimizda","Xidmetlerimiz","Mehullarimiz","Elaqe"],
        en:["Home","About us","Services","Products","Contact"]
    }
    
    const langBtn = document.querySelector('#lang-btn');
    const navLink = document.querySelectorAll('.nav-link');

    const multiLang=()=>{
        if (langBtn.innerHTML == 'AZ') {
            for(let i in langdata.az){
                navLink[i].innerHTML = langdata.az[i];
            }
            langBtn.innerHTML = 'EN';
        }else{
            for(let i in langdata.en){
                navLink[i].innerHTML = langdata.en[i];
            }
            langBtn.innerHTML = 'AZ';
            
        }

    }


    langBtn.onclick = multiLang;

    
    


