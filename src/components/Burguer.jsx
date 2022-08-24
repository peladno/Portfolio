import PropTypes from 'prop-types';
import menuBurguer from "../assets/images/menuBurguer.svg";

function Burguer({ toggleValue }) {
  return (
    <div className="burguerDiv">
      <button className="burguer" onClick={toggleValue}>
        <img src={menuBurguer} alt="menuBurguer" />
      </button>
    </div>
  );
}

export default Burguer;

Burguer.propTypes = {
  toggleValue: PropTypes.func
};
