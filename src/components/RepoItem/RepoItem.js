import React, { Component } from "react";
import PropTypes from "prop-types";

class RepoItem extends Component {
  static propTypes = {
    repo: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  };

  state = { isOpen: false };

  renderFullDescription() {
    const { repo } = this.props;
    return (
      <ul>
        {Object.entries(repo).map(([key, value], index) => (
          <li key={index}>{`${key} : ${value}`}</li>
        ))}
      </ul>
    );
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const {
      repo: { name }
    } = this.props;

    return (
      <div>
        <div
          style={{ cursor: "pointer", color: "blue" }}
          onClick={this.onClick}
        >
          {name}
        </div>
        {this.state.isOpen && this.renderFullDescription()}
      </div>
    );
  }
}

export default RepoItem;
