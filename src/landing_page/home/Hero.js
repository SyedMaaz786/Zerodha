import React from "react";

function Hero() {                          //All the styling has been done using the bootstrap classes.
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5 display-3 fw-bold">Invest in everything</h1>
        <p className="fs-5">
          Zerodha, India's largest stockbroker, offers the lowest, cheapest brokerage rates in India.
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 rounded"
          
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Hero;
