import luckyCat from "../assets/images/cat.svg";

function NotFound() {
  return (
    <main className="notFoundMain"> <p></p>
      <img className="luckyCat" src={luckyCat} alt="cat" />
    </main>
  );
}

export default NotFound;
