import Barands from "@/components/barands";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Cards from "@/components/cards";
import Dress from "@/components/dress";
import Sell from "@/components/sell";
import Flow from "@/components/flow";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Nav/>
      <Hero/>
      <Barands/>
      <Cards/>
      <Dress/>
      
      <Sell/>
      <Flow/>
      <Footer/>
    </>
  );
}
