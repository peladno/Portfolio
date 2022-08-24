import PropTypes from "prop-types";

const STYLES = ["btn--index", "btn--primary"];

const SIZE = ["btn--small", "btn--medium", "btn--large"];

function Button({ children, type, onClick, buttonSize, buttonStyle }) {
  const checkButtonStyles = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <>
      <button
        className={`mainButton ${checkButtonStyles} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonSize: PropTypes.string,
  buttonStyle: PropTypes.string,
};
