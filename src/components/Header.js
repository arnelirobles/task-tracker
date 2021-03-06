import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = props => {
  const location = useLocation();
  return (
    <header className="header">
      <h1 style={headingStyle}>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          text={props.showAdd ? "-" : "+"}
          onClick={props.onAdd}
          color={props.showAdd ? "red" : "green"}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func
};

const headingStyle = {};
export default Header;
