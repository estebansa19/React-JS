import React from "react";

class BadgeForm extends React.Component {
  state = {
    twitter: "@estebandido"
  };

  // props.onChange = e => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value
  //   // });

  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  handleClick = e => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.formValues);
    console.log("Form was submited");
  };

  render() {
    return (
      <div>
        <h3>New attendant</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="job"
              value={this.props.formValues.job}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.props.formValues.twitter}
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
