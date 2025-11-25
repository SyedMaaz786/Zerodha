import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} className="border-top mt-5">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="Logo" />
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex gap-3">
                <li><i className="fa fa-twitter fs-5 text-muted"></i></li>
                <li><i className="fa fa-facebook-square fs-5 text-muted"></i></li>
                <li><i className="fa fa-instagram fs-5 text-muted"></i></li>
                <li><i className="fa fa-linkedin-square fs-5 text-muted"></i></li>
            </ul>
            <hr />
            <ul className="list-unstyled d-flex gap-3">
                <li><i className="fa fa-youtube-play fs-5 text-muted"></i></li>
                <li><i className="fa fa-whatsapp fs-5 text-muted"></i></li>
                <li><i className="fa fa-telegram fs-5 text-muted"></i></li>
            </ul>
          </div>
          <div className="col">
            <p className="fw-medium">Company</p>
            <a href="" className="text-muted text-decoration-none d-block mb-2">About</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Products</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Pricing</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Referral programme</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Careers</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Zerodha.tech</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Press & media</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Zerodha Cares (CSR)</a>
          </div>
          <div className="col">
            <p className="fw-medium">Support</p>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Contact us</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Support portal</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Z-Connect blog</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">List of charges</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Downloads & resources</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Videos</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Market overview</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">How to file a complaint?</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Status of your complaints</a>
          </div>
          <div className="col">
            <p className="fw-medium">Account</p>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Open an account</a>
            <a href="" className="text-muted text-decoration-none d-block mb-2">Fund transfer</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "10px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to securities
            broking please write to complaints@zerodha.com, for DP related to
            dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
            Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create pledge.
            3) Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive information
            of your transactions directly from Exchange on your mobile/email at
            the end of the day. Issued in the interest of investors. KYC is one
            time exercise while dealing in securities markets - once KYC is done
            through a SEBI registered intermediary (broker, DP, Mutual Fund
            etc.), you need not undergo the same process again when you approach
            another intermediary." Dear Investor, if you are subscribing to an
            IPO, there is no need to issue a cheque. Please write the Bank
            account number and sign the IPO application form to authorize your
            bank to make payment in case of allotment. In case of non allotment
            the funds will remain in your bank account. As a business we don't
            give stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>
        </div>
        <div className="footer-links text-center pb-3">
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>NSE</a>
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>BSE</a>
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>MCX</a>
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>Terms & conditions</a>
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>Policies & procedures</a>
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>Privacy policy</a>
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>Disclosure</a>
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>For investor's attention</a>
            <a href="#" className="text-muted text-decoration-none mx-2" style={{fontSize: "11px"}}>Investor charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
