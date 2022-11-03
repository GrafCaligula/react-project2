import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="zaferes.png"
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img="wedding.png"
        rating={5.0}
        reviewCount={30}
        country="USA"
        title="Learning wedding photography"
        price={125}
      />
    </div>
  );
}
