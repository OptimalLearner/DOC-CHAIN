import React from "react";

const Footer = () => {
  return (
    <footer id="footer" class="footer">
      <div class="footer-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>DocChain</h3>
                <p>
                Azad Nagar,Andheri(W),Mumbai,Maharashtra
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 9144332211
                  <br />
                  <strong>Email:</strong> DocChain@gmail.com
                  <br />
                </p>
              </div>
            </div>
           </div>
        </div>
      </div>
      <div class="footer-legal text-center">
      <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div class="d-flex flex-column align-items-center align-items-lg-start">
          <div class="copyright">
            &copy; Copyright <strong><span>DevMeet</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">DocCHainTeam</a>
          </div>
        </div>

        <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
          <a  class="twitter"><i class="bi bi-twitter"></i></a>
          <a  class="facebook"><i class="bi bi-facebook"></i></a>
          <a  class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>

      </div>
    </div>
    </footer>
  );
};

export default Footer;
