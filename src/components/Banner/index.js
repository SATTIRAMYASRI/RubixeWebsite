import "./index.css";

function Banner() {
  return (
    <div className="bg-container">
      <div className="banner-container">
        <div className="banner-text-container">
          <h1 className="banner-heading">
            <span className="banner-heading-1">TECH </span>
            <br />
            FOR <span className="banner-heading-2">TEENS</span>
          </h1>
          <p className="banner-subheading">
            CRAVING FUTURE
            <br />
            TECHNOLOGY PROFESSIONALS
            <br /> OUT OF YOUNG MINDS
          </p>
        </div>
      </div>
      <div className="who-we-are-container">
        <div className="who-we-are-text-container">
          <h1 className="who-we-are-heading who-we-are-desktop-version">
            WHO WE ARE
          </h1>
          <p className="who-we-are-para">
            Rubixe™ is a global technology company specializing in disruptive
            technologies – Artificial Intelligence (AI), Machine Learning,
            Robotic Process Automation (RPA), BlockChain and Internet of Things
            (IoT).
          </p>
          <p className="who-we-are-para who-we-are-desktop-version">
            Rubixe mission to enable businesses to leverage the full potential
            of disruptive technologies to stay competitive in the market.
            Started in 2008, providing technology solutions based in the
            Netherlands, founders of Rubixe™ have gained expertise in
            cutting-edge technology through delivering several smart city
            solutions for European Commission (EC) projects.
          </p>
        </div>
        <div>
          <h1 className="who-we-are-heading who-we-are-mobile-version">
            WHO WE ARE
          </h1>
          <img
            className="who-we-are-img"
            alt="WhoWeAre"
            src="https://codequotient.com/blog/wp-content/uploads/2021/03/Cisco.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
