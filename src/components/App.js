import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserSearchContainer from "./UserSearchContainer";
import UserInfo from "./UserInfo";
import ReposPanel from "./ReposPanel";
import { getRequestError, isLoading } from "../reducers";

class App extends Component {
  static propTypes = { loading: PropTypes.bool.isRequired };

  render() {
      const {requestError} = this.props;
      const requestErrorDescription = requestError ? Object.values(requestError).join("") : "";
    return (
      <React.Fragment>
          <div>{`Request errors: ${requestErrorDescription}`}</div>
        <UserSearchContainer />
        <div>
          <UserInfo />
          <ReposPanel />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: isLoading(state),
  requestError: getRequestError(state)
});

export default connect(
  mapStateToProps,
  null
)(App);
