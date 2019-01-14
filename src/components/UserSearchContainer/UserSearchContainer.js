import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserSearch from "../UserSearch";
import { getUserInfoRequest } from "../../actions";

class UserSearchContainer extends Component {
  static propTypes = {
    getUsetInfoRequest: PropTypes.func.isRequired
  };

  state = { value: "" };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onSubmit = event => {
    const { getUsetInfoRequest } = this.props;
    if (this.state.value) getUsetInfoRequest(this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <UserSearch
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        value={this.state.value}
      />
    );
  }
}

const mapDispatchToProps = {
  getUsetInfoRequest: getUserInfoRequest
};

export default connect(
  null,
  mapDispatchToProps
)(UserSearchContainer);
