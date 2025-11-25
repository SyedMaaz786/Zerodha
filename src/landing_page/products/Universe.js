import React from 'react';

function Universe() {
    return (
        <div className="container p-5">
            <div className="row text-center">
                <h1 className="display-4 fw-bold mb-5">The Zerodha Universe</h1>
                <p className="fs-5 text-muted">
                    A whole ecosystem of modern investment products, tailored to your needs.
                </p>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-4 p-3">
                    <img src="media/images/kiteconnect.png" className="img-fluid" alt="Kite Connect" />
                    <h3 className="mt-3 fw-bold">Kite Connect</h3>
                    <p className="text-muted">APIs for algorithmic trading</p>
                    <a href="" className="text-decoration-none">Learn more <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/coin.png" className="img-fluid" alt="Coin" />
                    <h3 className="mt-3 fw-bold">Coin</h3>
                    <p className="text-muted">Direct mutual funds</p>
                    <a href="" className="text-decoration-none">Learn more <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/varsity.png" className="img-fluid" alt="Varsity" />
                    <h3 className="mt-3 fw-bold">Varsity</h3>
                    <p className="text-muted">Stock market education</p>
                    <a href="" className="text-decoration-none">Learn more <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-4 p-3">
                    <img src="media/images/streakLogo.png" className="img-fluid" alt="Streak" />
                    <h3 className="mt-3 fw-bold">Streak</h3>
                    <p className="text-muted">Algo-trading platform</p>
                    <a href="" className="text-decoration-none">Learn more <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/sensibullLogo.png" className="img-fluid" alt="Sensibull" />
                    <h3 className="mt-3 fw-bold">Sensibull</h3>
                    <p className="text-muted">Options trading platform</p>
                    <a href="" className="text-decoration-none">Learn more <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/goldenpiLogo.png" className="img-fluid" alt="GoldenPi" />
                    <h3 className="mt-3 fw-bold">GoldenPi</h3>
                    <p className="text-muted">Bonds and debentures</p>
                    <a href="" className="text-decoration-none">Learn more <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Universe;