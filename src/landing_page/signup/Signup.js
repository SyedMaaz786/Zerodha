import React from 'react';

function Signup() {
    return (
        <div className="container p-5">
            <div className="row text-center">
                <h1 className="display-4 fw-bold mb-3">Open an account</h1>
                <p className="fs-5 text-muted mb-4">
                    Fill in your mobile number to open an account.
                </p>
                <div className="col-8 offset-2">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control p-3" placeholder="Your 10 digit mobile number" aria-label="Mobile number" />
                        <button className="btn btn-primary" type="button" id="button-addon2">
                            Continue
                        </button>
                    </div>
                    <p className="text-muted">Or sign up with:</p>
                    <button className="btn btn-outline-dark p-3 fs-5 me-3">
                        <i className="fa fa-google me-2"></i> Sign up with Google
                    </button>
                    <button className="btn btn-outline-dark p-3 fs-5">
                        <i className="fa fa-envelope me-2"></i> Sign up with Email
                    </button>
                </div>
                <div className="col-12 mt-5">
                    <img src="media/images/signup.png" className="img-fluid" alt="Sign Up" />
                </div>
            </div>
        </div>
    );
}

export default Signup;