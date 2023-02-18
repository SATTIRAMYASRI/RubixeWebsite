import { Component } from "react";
import "./index.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    const { clicked } = this.state;

    this.setState({
      clicked: !clicked
    });
  };

  render() {
    const { clicked } = this.state;

    return (
      <>
        <nav>
          <a href="https://rubixe.com/" target="__blank" className="logo">
            Rubuxie
          </a>
          <div>
            <ul id="navbar" className={clicked ? "navbar" : "navbar active"}>
              <li>
                <a className="active" href="index.html">
                  HOME
                </a>
              </li>
              <li>
                <a href="index.html">SERVICES</a>
              </li>
              <li>
                <a href="index.html">PRODUCTS</a>
              </li>
              <li>
                <a href="index.html">AI INTERNSHIP</a>
              </li>
              <li>
                <a href="index.html">CAREER</a>
              </li>
              <li>
                <a href="index.html">BLOG</a>
              </li>
              <li>
                <a href="index.html">ABOUT</a>
              </li>
              <li>
                <a href="index.html">CONTACT US</a>
              </li>
            </ul>
          </div>
          <button type="button" id="mobile" onClick={this.handleClick}>
            <li id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}>
              {" "}
            </li>
          </button>
        </nav>
      </>
    );
  }
}
export default Navbar;
