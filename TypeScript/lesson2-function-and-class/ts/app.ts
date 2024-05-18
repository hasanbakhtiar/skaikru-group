// function info(a:number,b:number):void{
//      console.log(a+b);
// }

// info(300,3);



class Car{
    protected ibrand:string;
    public iyear:number;
    public icolor:string;

    constructor(brand:string,year:number,color:string){
        this.ibrand=brand;
        this.iyear=year;
        this.icolor=color;
    }
    public getDataOne(){
        return this.iyear;
    }
}


class Moto extends Car{
    constructor(brand:string,year:number,color:string){
        super(brand,year,color)
    }

    public getData(){
        return this.ibrand;
    }


}


const myCar = new Car("BMW",1996,"red fason");
const myMoto = new Moto("Yamaha",1996,"red fason");
console.log(myMoto.getData());
myMoto.getDataOne()
