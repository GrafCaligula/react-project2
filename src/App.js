import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cardData = data.map((infos) => {
    return (
      <Card
        key={infos.id}
        img={infos.coverImg}
        rating={infos.stats.rating}
        reviewCount={infos.stats.reviewCount}
        country={infos.location}
        title={infos.title}
        price={infos.price}
      />
    );
  });

  console.log(data);

  return (
    <div>
      <Navbar />
      <Hero />
      {cardData}
    </div>
  );
}
