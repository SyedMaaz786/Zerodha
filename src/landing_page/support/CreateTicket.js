import React from 'react';

function CreateTicket() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                    <h2 className="fs-3 fw-bold mb-4">Account Related</h2>
                    <ul className="list-unstyled">
                        <li><a href="" className="text-decoration-none">Open an account</a></li>
                        <li><a href="" className="text-decoration-none">Funds and withdrawals</a></li>
                        <li><a href="" className="text-decoration-none">Your profile</a></li>
                    </ul>
                    <h2 className="fs-3 fw-bold mb-4 mt-5">Trading & Investments</h2>
                    <ul className="list-unstyled">
                        <li><a href="" className="text-decoration-none">Trading FAQs</a></li>
                        <li><a href="" className="text-decoration-none">Placing orders</a></li>
                        <li><a href="" className="text-decoration-none">IPOs, FPOs, & OFS</a></li>
                    </ul>
                </div>
                <div className="col-6">
                    <h2 className="fs-3 fw-bold mb-4">Products</h2>
                    <ul className="list-unstyled">
                        <li><a href="" className="text-decoration-none">Kite</a></li>
                        <li><a href="" className="text-decoration-none">Console</a></li>
                        <li><a href="" className="text-decoration-none">Coin</a></li>
                    </ul>
                    <h2 className="fs-3 fw-bold mb-4 mt-5">Tools</h2>
                    <ul className="list-unstyled">
                        <li><a href="" className="text-decoration-none">Zerodha APIs</a></li>
                        <li><a href="" className="text-decoration-none">Margin calculator</a></li>
                        <li><a href="" className="text-decoration-none">Brokerage calculator</a></li>
                    </ul>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col-12">
                    <a href="" className="btn btn-primary fs-5 p-3 rounded">
                        Create a support ticket
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;