import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contacts from "./components/Contacts";

export default function App(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Contacts />
      <Card />
    </div>
  )
}