import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Choose from "./components/Choose";
import Software from "./components/Software";
import Feature from "./components/Feature";
import Payment from "./components/Payment";
import Residence from "./components/Residence";
import Financy from "./components/Financy";
import Portfolio from "./components/Portfolio";
import Register from "./components/Register";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Software />
      <Feature />
      <Register />
      <Payment />
      <Testimonial />
      <Residence />
      <Financy />
      <Choose />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
