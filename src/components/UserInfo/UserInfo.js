import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { getUserInfo } from "../../reducers";

const UserInfo = ({ userInfo }) => {
  if (userInfo === null) return null;
  return (
    <div>
      <img
        src={userInfo.avatarUrl}
        alt="user avatar"
        style={{ maxWidth: "200px", maxHeight: "200px", margin: "20px" }}
      />
      <ul>
        {Object.entries(userInfo).map(([key, value], index) => {
          if (key !== "repos") {
            return <li key={index}>{`${key} : ${value}`}</li>;
          }
        })}
      </ul>
    </div>
  );
};

UserInfo.defaultProps = {
  userInfo: null
};

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    avatarUrl: PropTypes.string
  })
};

const mapStateToProps = state => ({
  userInfo: getUserInfo(state)
});

export default connect(
  mapStateToProps,
  null
)(UserInfo);
