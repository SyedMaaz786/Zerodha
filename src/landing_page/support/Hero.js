import React from 'react';

function Hero() {
    return (
        <div className="container p-5 bg-light">
            <div className="row text-center">
                <h1 className="display-4 fw-bold mb-3">Support</h1>
                <p className="fs-5 text-muted mb-4">
                    Everything you need to know about trading and investing at Zerodha.
                </p>
                <div className="col-8 offset-2">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control p-3" placeholder="Search for an answer..." aria-label="Search" />
                        <button className="btn btn-primary" type="button" id="button-addon2">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;