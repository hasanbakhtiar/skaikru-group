interface propType{
    title:string | number;
}

const List:React.FC<propType> = ({title}) => {
  return (
    <div>
        {title}
    </div>
  )
}

export default List