import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    showModal: false
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      showModal: !this.state.showModal
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showModal, name, email, phone } = this.state;
    return (
      <div className="container">
        {"Add Contact "}
        <i
          onClick={() =>
            this.setState({
              showModal: !this.state.showModal
            })
          }
          className="fas fa-plus"
          style={{ cursor: "pointer" }}
        />
        {showModal ? (
          <div className="card mb-3">
            <div className="card-header">
              Add Contact
              <i
                onClick={() =>
                  this.setState({ showModal: !this.state.showModal })
                }
                className="fas fa-times"
                style={{ cursor: "pointer", float: "right" }}
              />
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Add Contact"
                  className="btn btn-light btn-block"
                />
                {/* <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "black" }}
                  onClick={this.setState({
                    showModal: !this.state.showModal
                  })}
                /> */}
              </form>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AddContact;
