import "./index.css";
import { Component } from "react";

const initalContactDetails = [
  {
    name: "Ramya",
    email: "ramya123@gmail.com",
    mobileNumber: "9898989899",
    highestQualification: "Graduation(OnGoing)"
  },
  {
    name: "varshi",
    email: "varshi123@gmail.com",
    mobileNumber: "999999999",
    highestQualification: "Graduation(Completed)"
  }
];

class Registration extends Component {
  state = {
    givenName: "",
    givenEmail: "",
    nameErrorMsg: "",
    emailErrorMsg: "",
    givenNumber: "",
    numberErrorMsg: "",
    highestQualification: "Graduation(OnGoing)",
    contactList: initalContactDetails
  };

  onChangeName = (e) => {
    this.setState({ givenName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ givenEmail: e.target.value });
  };

  onChangeNumber = (e) => {
    this.setState({ givenNumber: e.target.value });
  };

  onChangeStatus = (e) => {
    this.setState({ highestQualification: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const {
      givenName,
      givenEmail,
      givenNumber,
      highestQualification,
      contactList
    } = this.state;

    // const regEmail = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2-6}$/

    // const isValidMail = regEmail.test(givenEmail)
    const isValidMail = givenEmail.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);

    const isValidNumber = givenNumber.length === 10;

    console.log(isValidMail, isValidNumber);
    if (isValidMail === false || isValidNumber === false) {
      if (isValidMail === false) {
        this.setState({ emailErrorMsg: "Enter a Valid Mail" });
      }

      if (isValidNumber === false) {
        this.setState({ numberErrorMsg: "Enter a Valid Number" });
      }
    } else {
      let mailAlreadyExists = false;
      contactList.map((eachContact) => {
        if (eachContact.email === givenEmail) {
          mailAlreadyExists = true;
          alert(`Already Registered`); // eslint-disable-next-line
          this.setState({
            givenName: "",
            givenEmail: "",
            givenNumber: ""
          });
        }
        return "";
      });

      if (mailAlreadyExists === false) {
        alert(`${givenName} Form Submitted`); // eslint-disable-next-line
        const newContact = {
          name: givenName,
          email: givenEmail,
          mobileNumber: givenNumber,
          highestQualification
        };

        this.setState((prevState) => ({
          contactList: [...prevState.contactList, newContact],
          givenName: "",
          givenEmail: "",
          givenNumber: ""
        }));
      }
    }
  };

  onBlurName = (e) => {
    if (e.target.value === "") {
      this.setState({ nameErrorMsg: "Required*" });
    } else {
      this.setState({ nameErrorMsg: "" });
    }
  };

  onBlurEmail = (e) => {
    if (e.target.value === "") {
      this.setState({ emailErrorMsg: "Required*" });
    } else {
      this.setState({ emailErrorMsg: "" });
    }
  };

  onBlurNumber = (e) => {
    if (e.target.value === "") {
      this.setState({
        numberErrorMsg: "Required*"
      });
    } else {
      this.setState({ numberErrorMsg: "" });
    }
  };

  render() {
    const {
      givenName,
      givenEmail,
      nameErrorMsg,
      emailErrorMsg,
      givenNumber,
      numberErrorMsg
    } = this.state;

    return (
      <div className="form-container" onSubmit={this.submitHandler}>
        <div className="form-text-container">
          <h1 className="form-heading">GET IN TOUCH</h1>
          <p className="form-para">
            Please complete the form and we will get back to you
          </p>
        </div>
        <form id="myForm">
          <div>
            <label className="mb-1" htmlFor="name">
              Name
            </label>
            <br />
            <input
              type="text"
              value={givenName}
              onChange={this.onChangeName}
              className="form-control"
              id="name"
              onBlur={this.onBlurName}
            />
            <p className="errorMessage">{nameErrorMsg}</p>
          </div>
          <div>
            <label className="mb-1" htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="text"
              value={givenEmail}
              onChange={this.onChangeEmail}
              className="form-control"
              id="email"
              onBlur={this.onBlurEmail}
            />
            <p className="errorMessage">{emailErrorMsg}</p>
          </div>
          <div>
            <label className="mb-1" htmlFor="number">
              Mobile Number
            </label>
            <br />
            <input
              type="text"
              value={givenNumber}
              onChange={this.onChangeNumber}
              className="form-control"
              id="number"
              onBlur={this.onBlurNumber}
            />
            <p className="errorMessage">{numberErrorMsg}</p>
          </div>
          <div className="mb-3">
            <label className="mb-1" htmlFor="status">
              Highest Qualification
            </label>
            <select
              id="status"
              className="form-control"
              onChange={this.onChangeStatus}
            >
              <option value="Graduation(OnGoing)">Graduation(OnGoing)</option>
              <option value="Graduation(Completed)">
                Graduation(Completed)
              </option>
              <option value="Post Graduation(Completed)">
                Post Graduation(Completed)
              </option>
              <option value="Post Graduation(OnGoing)">
                Post Graduation(OnGoing)
              </option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Registration;
