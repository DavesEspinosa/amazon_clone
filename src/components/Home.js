import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="1"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="2"
          title="Sony X800H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model."
          price={899.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71+F+eS7qfL._QL65_AC_UL640_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />{" "}
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />{" "}
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
