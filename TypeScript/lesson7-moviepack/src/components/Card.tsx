import React from "react";
interface propType{
    photo:string;
    title:string;
    desc:string;
}
const Card:React.FC<propType> = ({photo,title,desc}) => {
  return (
        <div className="col-12 col-sm-6 col-md-4">
                <div className="card" >
      <img src={photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
         {desc}
        </p>
        <button className="btn btn-primary">
                Read more
        </button>
      </div>
    </div>
        </div>
  );
};

export default Card;
