import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row">
        <h1 className="text-center display-4 fw-bold mb-5">
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </h1>
        <div className="col-6">
            <p className="fs-5">
                Current stock brokers charge you exorbitant brokerage fees, up to hundreds of rupees per trade, or a percentage of your trade value. We were tired of paying so much, so we built Zerodha, an online discount broker that allows you to trade and invest at a fraction of the cost, for free! That's right, zero brokerage on equity delivery trades. And for intraday and F&O, it's a flat fee of ₹20 per trade. With Zerodha, you can trade and invest in stocks, futures, options, commodities, and currencies with ease.
            </p>
        </div>
        <div className="col-6">
            <p className="fs-5">
                A team of seasoned professionals, who are passionate about the financial markets and technology, built Zerodha. We believe in providing our clients with the best trading experience, with cutting-edge technology, superior customer service, and transparent pricing. Our mission is to make trading and investing accessible and affordable to everyone. We are constantly innovating and improving our platform to meet the evolving needs of our clients. Join Zerodha today and experience the future of trading.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
