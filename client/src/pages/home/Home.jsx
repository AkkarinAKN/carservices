import Navbar from "../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import Content from "../../components/content/Content.";
import Footer from "../../components/footer/Footer";
import Service from "../../components/bookingServicee/service";

const Home = ({ columns }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
