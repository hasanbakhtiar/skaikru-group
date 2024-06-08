import { useSelector } from "react-redux";
import Card from "../components/Card";

const Home = () => {
  const datamovie: any = useSelector((p: any) => p.movie);
  const datacharacter: any = useSelector((p: any) => p.character);
  return (
    <div className="container">
      <div className="row">
        {datamovie.map((item: any) => (
          <Card key={item.id} title={item.title} photo={item.photo} desc={item.desc} />
        ))}
      </div>
      <hr />
      <div className="row">
      {datacharacter.map((item: any) => (
          <Card key={item.id} title={item.name} photo={item.photo} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Home;
