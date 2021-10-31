import "./App.css";
import { Component } from "react";

class Form extends Component {
  state = {
    feedback: [],
    name: "",
    department: "",
    rating: "",
  };

  employeeName = (event) => {
    this.setState({ name: event.target.value });
  };
  department = (e) => {
    this.setState({ department: e.target.value });
  };
  rating = (e) => {
    const rating = e.target.value;
    this.setState({ rating });
  };
  update = (e) => {
    e.preventDefault();
    const entry = [...this.state.feedback];
    const newEntry = {
      id: entry.length + 1,
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };
    entry.push(newEntry);
    this.setState({ feedback: entry, name: "", department: "", rating: "" });
  };
  render() {
    const btnDisable =
      this.state.name === "" ||
      this.state.department === "" ||
      this.state.rating === "";
    return (
      <div className="container">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <div>
          <form className="feedback">
            <label>
              Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.employeeName}
              />
            </label>
            <label>
              Department:
              <input
                type="text"
                value={this.state.department}
                onChange={this.department}
              />
            </label>
            <label>
              Rating:
              <input
                type="number"
                value={this.state.rating}
                onChange={this.rating}
              />
            </label>
            <button onClick={this.update} disabled={btnDisable}>
              Submit
            </button>
          </form>
        </div>
        <div className="newFeedback">
          {this.state.feedback.map((value) => (
            <h2 key={value.id}>
              {" "}
              Name: {value.name} <b>|</b> Department: {value.department}{" "}
              <b>|</b> Rating: {value.rating}
            </h2>
          ))}
        </div>
      </div>
    );
  }
}
export default Form;
