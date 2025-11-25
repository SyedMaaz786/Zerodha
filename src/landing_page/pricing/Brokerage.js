import React from 'react';

function Brokerage() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6 p-3">
                    <img src="media/images/pricingEquity.svg" className="img-fluid" alt="Equity Pricing" />
                    <h2 className="mt-3 fs-3 fw-bold">Free equity delivery</h2>
                    <p className="text-muted fs-5">
                        All equity delivery investments are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-6 p-3">
                    <img src="media/images/intradayTrades.svg" className="img-fluid" alt="Intraday Pricing" />
                    <h2 className="mt-3 fs-3 fw-bold">₹20 for intraday & F&O</h2>
                    <p className="text-muted fs-5">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday and F&O trades.
                    </p>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col-12">
                    <a href="" className="text-decoration-none fs-5">
                        Brokerage calculator
                        <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;