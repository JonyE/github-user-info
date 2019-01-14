import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "../Navigation";
import RepoItem from "../RepoItem";
import connect from "react-redux/es/connect/connect";
import { getUserRepoRequest } from "../../actions";
import { getUserRepoData } from "../../reducers";

class ReposPanel extends Component {
  static defaultProps = {
    repoData: null
  };

  static propTypes = {
    repoData: PropTypes.shape({
      navigation: PropTypes.object,
      repos: PropTypes.arrayOf(PropTypes.object)
    }),
    getUserRepoRequest: PropTypes.func.isRequired
  };

  navigationClickHandler = link => {
    this.props.getUserRepoRequest({ link });
  };

  render() {
    const { repoData } = this.props;
    if (repoData === null) return null;
    return (
      <div style={{ margin: "20px" }}>
        <div>Repos:</div>
        <Navigation
          navigation={repoData.navigation}
          onClick={this.navigationClickHandler}
        />
        {repoData.repos.map((repo, index) => (
          <RepoItem repo={repo} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repoData: getUserRepoData(state)
});

const mapDispatchToProps = {
  getUserRepoRequest: getUserRepoRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposPanel);
