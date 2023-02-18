import "./index.css";
import { Component } from "react";

class FollowUs extends Component {
  render() {
    return (
      <div className="follow-us-section pt-5 pb-5" id="followUs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="follow-us-section-heading">Follow Us</h1>
            </div>
            <div className="col-12">
              <div className="d-flex flex-row justify-content-center">
                <a
                  href="https://twitter.com/rubixe2"
                  target="__blank"
                  className="follow-us-icon-container"
                >
                  <i className="fab fa-twitter icon"> </i>
                </a>
                <a
                  target="__blank"
                  href="https://www.instagram.com/rubixe_official/"
                  className="follow-us-icon-container"
                >
                  <i className="fab fa-instagram icon"> </i>
                </a>
                <a
                  target="__blank"
                  href="https://www.facebook.com/Rubixe.Official/"
                  className="follow-us-icon-container"
                >
                  <i className="fab fa-facebook icon"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="footer-name">Rubixe</h1>
                <h1 className="footer-section-mail-id">hi@.rubixecom</h1>
                <p className="footer-section-address">
                  123 Ayur Vigyan Nagar, New Delhi, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FollowUs;
