import React from "react";

class BadgeForm extends React.Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };

  handleClick = e => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>New attendant</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="firstName"
            />
          </div>

          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
