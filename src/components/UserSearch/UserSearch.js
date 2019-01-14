import React from "react";
import PropTypes from "prop-types";

const UserSearch = ({ onChange, value, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={onChange} />
      </label>
      <input type="submit" value="Get user" />
    </form>
  );
};
UserSearch.defaultProps = {
  value: ""
};

UserSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};
export default UserSearch;
