import PropTypes from "prop-types";
import Button from "./Button";

const Header = props => {
  const onClick = () => {
    console.log("c");
  };

  return (
    <header className="header">
      <h1 style={headingStyle}>{props.title}</h1>
      <Button text="+" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.propTypes = {
  title: PropTypes.string
};

const headingStyle = {};
export default Header;
