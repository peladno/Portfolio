import { certificates } from "../utils/data";

const items = certificates.map((item) => (
  <li key={item.credential_id}>
    {item.name}: {item.credential_id} <a href={item.url}>[Link]</a>
  </li>
));

function Certifications() {
  return (
    <>
      <h2>Certifications</h2>
      <ul>{items}</ul>
    </>
  );
}

export default Certifications;
