import Choose from "./components/Choose";
import Software from "./components/Software";
import Feature from "./components/Feature";
import Payment from "./components/Payment";
import Residence from "./components/Residence";
import Financy from "./components/Financy";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Software />
      <Payment />
      <Register />
      <Financy />
      <Testimonial />
      <Residence />
      <Feature />
      <Choose />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
