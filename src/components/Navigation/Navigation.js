import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.scss";

const Navigation = ({ navigation, onClick }) => {
  const getClickHandler = link => () => onClick(link);

  return (
    <div className={styles.container}>
      {Object.entries(navigation).map(([name, link], index) => (
        <button
          style={{ margin: "5px" }}
          key={index}
          onClick={getClickHandler(link)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

Navigation.propTypes = {
  navigation: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Navigation;
