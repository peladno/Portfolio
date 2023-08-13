import PropTypes from 'prop-types';

const STYLES = [
  'btn--index',
  'btn--primary',
  'drk-btn--index',
  'drk-btn--primary',
];

const SIZE = ['btn--small', 'btn--medium', 'btn--large'];

function Button({
  children,
  type,
  onClick,
  buttonSize,
  buttonStyle,
  disabled,
}) {
  const checkButtonStyles = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <>
      <button
        disabled={disabled}
        className={`mainButton ${checkButtonStyles} ${checkButtonSize} ${
          disabled ? 'disabled-button' : ''
        }`}
        type={type}
        onClick={onClick}
      >
        <p>{children}</p>
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
