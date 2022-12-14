import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {

  const cardData = data.map((item) => {

    return (
      <Card
        key={item.id}
        {...item}
        // infos={infos}

        // img={infos.coverImg}
        // rating={infos.stats.rating}
        // reviewCount={infos.stats.reviewCount}
        // location={infos.location}
        // title={infos.title}
        // price={infos.price}
        // openSpots={infos.openSpots}
      />
    );
  });

  // console.log(data);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      {cardData}
    </div>
  );
}
