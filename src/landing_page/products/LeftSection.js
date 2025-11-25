import React from 'react';

function LeftSection() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/kite.png" className="img-fluid" alt="Kite Platform" />
                </div>
                <div className="col-6">
                    <h2 className="display-5 fw-bold mt-5">Kite</h2>
                    <p className="fs-5 mt-3">
                        Our flagship trading platform, built for speed and efficiency. With Kite, you can trade across all segments, view real-time market data, and access advanced charting tools.
                    </p>
                    <a href="" className="text-decoration-none d-block mt-3">
                        Learn more <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                    <a href="" className="text-decoration-none d-block mt-3">
                        Download on App Store <i className="fa fa-download ms-2" aria-hidden="true"></i>
                    </a>
                    <a href="" className="text-decoration-none d-block mt-3">
                        Download on Google Play <i className="fa fa-download ms-2" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;