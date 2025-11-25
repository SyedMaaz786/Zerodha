import React from 'react';

function RightSection() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                    <h2 className="display-5 fw-bold mt-5">Console</h2>
                    <p className="fs-5 mt-3">
                        The central dashboard for your Zerodha account. Track your portfolio, view your tradebook, and manage your funds with ease.
                    </p>
                    <a href="" className="text-decoration-none d-block mt-3">
                        Learn more <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-6">
                    <img src="media/images/console.png" className="img-fluid" alt="Console Dashboard" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;