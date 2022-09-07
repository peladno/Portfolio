import cross from "../assets/images/cross.svg";

function Close({ toggleValue }) {
  return (
    <>
      <button className="crossButton"  onClick={toggleValue}>
        <img className="cross" src={cross} alt="closeButton" />
      </button>
    </>
  );
}

export default Close;
