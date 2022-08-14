import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import indexLogo from "../assets/images/indexLogo.svg";

function Index() {
  return (
    <>
      <main className="indexMain">
        <img src={indexLogo} alt="" />
        <Link to="/home">
          <Button>Enter</Button>
        </Link>
      </main>
    </>
  );
}

export default Index;
