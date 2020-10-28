import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4286842220_.Jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically"
            price={30}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={5}
          />

          <Product
            title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)"
            price={300}
            image="https://images-eu.ssl-images-amazon.com/images/I/41DpfHFIRTL._AC_US160_FMwebp_QL70_.jpg"
            rating={3}
          />

          <Product
            title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1-inch "
            price={400}
            image="https://images-eu.ssl-images-amazon.com/images/I/41ytqHWDxzL._AC_US160_FMwebp_QL70_.jpg"
          />
        </div>

        <div className="home_row">
          {/* p */}

          <Product
            title="boAt Rockerz 255 Sports in-Ear Bluetooth Neckband Earphone"
            price={30}
            image="https://images-eu.ssl-images-amazon.com/images/I/41j7VEAjdRL._AC_US160_FMwebp_QL70_.jpg"
          />

          <Product
            title="Whirlpool 200 L 3 Star Inverter Direct-Cool Single Door Refrigerator"
            price={200}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Refrigerator/In-the-spotlight-440x440-Banners-04.png"
          />

          <Product
            title="Butterfly Jet Elite Mixer Grinder, 750W, 4 Jars (Grey)"
            price={30}
            image="https://images-eu.ssl-images-amazon.com/images/I/41vK2c5b-lL._AC_US160_FMwebp_QL70_.jpg"
          />

          <Product
            title="Butterfly Hero Mixer Grinder, 500W, 3 Jars (Grey)"
            price={30}
            image="https://images-eu.ssl-images-amazon.com/images/I/41buv8eJQtL._AC_US160_FMwebp_QL70_.jpg"
          />

          {/* p */}
        </div>

        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
