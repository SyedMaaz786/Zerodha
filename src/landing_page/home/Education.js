import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" className="w-70" />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2 fw-bold">Free and open market education</h1>
          <p className="fs-5">
            Varsity, the largest online stock market education book in the
            world, covering everything from the basics to advanced trading.
          </p>
          <a href="" className="text-decoration-none">
            Varsity<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
          <p className="mt-5 fs-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="text-decoration-none">
            Trading Q&A<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
