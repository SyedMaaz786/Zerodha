import React from 'react';

function Team() {
    return (
        <div className="container p-5">
            <h1 className="text-center display-4 fw-bold mb-5">
                Our Team
            </h1>
            <div className="row">
                <div className="col-4 offset-2">
                    <img src="media/images/nithinKamath.jpg" className="img-fluid rounded" alt="Nithin Kamath" />
                    <h3 className="mt-3 text-center">Nithin Kamath</h3>
                    <p className="text-center text-muted">Founder, CEO</p>
                </div>
                <div className="col-4">
                    <p className="fs-5">
                        Nithin Kamath, the founder and CEO of Zerodha, started his trading career at the age of 17. After a decade of trading, he founded Zerodha in 2010 with the goal of breaking barriers for retail traders and investors in India. His vision has transformed Zerodha into India's largest stockbroker, known for its innovative technology and transparent pricing.
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <p className="text-center fs-5">
                        Our team comprises passionate individuals dedicated to revolutionizing the financial industry through technology. We are a diverse group of traders, developers, designers, and support staff, all working towards a common goal: empowering individuals to make informed financial decisions.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;